# Revisão Minuciosa + Seletor de Prova — Design

Data: 2026-06-06

## Objetivo

Adicionar um modo de **revisão minuciosa** (maratona completa) que percorre
TODO o conteúdo dos slides de uma prova em sequência, intercalando as questões
reais de cada tópico — para o aluno passar por tudo sem deixar nada de fora.
Aplicar o mesmo seletor "Qual prova?" aos demais modos e remover duplicação.

## Estado atual (verificado)

- Slides 1–236 já transcritos em `aulas/*.md`; versões didáticas em `aulas/explicacoes/`.
- Todos os 11 tópicos têm questões reais em `data/avaliacoes/`.
- Quiz [4] já tem seletor de prova; existe `escolher_prova` duplicada em `quiz.py` e `avaliacao.py`.
- Flashcards são tuplas `(termo, definição)` sem tag de prova.

## Componentes

### 1. Novo modo `modes/revisao.py` — `modo_revisao(prog)`
- Menu: `Qual prova você quer estudar?` → `[1] Prova 1` / `[2] Prova 2` / `[0] Voltar`.
- Deriva a lista ordenada de tópicos a partir da numeração dos arquivos
  `p1_*.md` / `p2_*.md` (mapeando arquivo → tópico via `AULAS_MAP` reverso,
  deduplicando preservando ordem) — garante ordem de slides e nenhum tópico perdido.
- Para cada tópico, em ordem:
  1. `apresentar_conteudo(titulo, arquivos)` (reuso da aula) — todos os slides.
  2. `rodar_lista_questoes(qs)` com as avaliações reais daquele tópico.
  3. Navegação: continuar · pular questões · voltar ao menu.
- Cabeçalho `Tópico i/N — Prova X`; tela-resumo no fim.

### 2. Refactors (reduzir duplicação)
- `core/ui.py`: `escolher_prova(com_todas=True)` único → usado por quiz e avaliação.
- Helper compartilhado `rodar_lista_questoes(qs, prog, titulo, cor)` extraído do
  loop repetido (aula/avaliação/quiz/tópico) e usado também pela revisão.

### 3. Seletor de prova nos outros modos
- Estudo por Tópico [3]: seletor de prova antes da lista de tópicos.
- Flashcards [5]: adicionar tag de prova nos 30 cards + seletor.
- Quiz [4]: passa a usar o helper compartilhado (comportamento mantido).

### 4. Menu
- Inserir `📖 Revisão Minuciosa` como opção **[2]**, renumerando as demais.

## Decisões
- Abordagem (A): intercalar slides→questões por tópico (não simulado em bloco).
- Maratona "completa" (sem checkpoint de retomada) nesta versão.

## Fora de escopo
- Retomada/checkpoint de onde parou; novas questões geradas (conteúdo já cobre).

---

## Addendum v2.0 — Integração do pacote P2 (mesma data)

Incorporado o pacote `roboestudo/` (slides 244–392) ao sistema.

### Decisões (confirmadas com o usuário)
- **Tópicos:** adicionar os 8 tópicos do pack como NOVOS (prefixo `p2_`),
  mantendo os 4 P2 antigos — 12 tópicos P2 no total.
- **Simulados:** novo **modo Simulado** no menu (formato "soma de itens").

### Componentes
- `data/questoes_p2_pack.py` — pack cru (esquema próprio: `enunciado`,
  `alternativas` dict, tipos `multipla_escolha`/`dissertativa`/`calculo`/`codigo`/
  `avaliacao_soma`). Bug corrigido: `p2_av_004` resposta 26 → 27.
- `data/questoes_p2.py` — adaptador que normaliza para o esquema do sistema
  (`MC`/`ESCREVA`/`SOMA`) e mapeia tópicos → chaves `p2_*`.
- `data/questoes.py` / `data/flashcards.py` — `.extend()` com os extras (+44 q, +34 fc).
- `core/executor.py` — novo tipo `SOMA` (`exec_soma`).
- `modes/simulado.py` + opção `[4]` no menu — renderiza os 2 simulados aninhados.
- `aulas/explicacoes/` (8 arquivos do pack) + `aulas/p2_*.md` (raw gerados) +
  entradas em `TOPICOS`/`AULAS_MAP` — tornam os 8 tópicos legíveis em Aula/Revisão.
- `modes/revisao.py` — maratona passa a juntar `AVALIACOES` + banco `QUESTOES`
  por tópico (novos tópicos P2 têm questões só no banco principal).

### Resultado
86 questões no banco · 64 flashcards (44 P2) · 12 tópicos P2 · 2 simulados.
