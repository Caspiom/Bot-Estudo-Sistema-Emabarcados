"""
Modo Revisão Minuciosa — maratona completa de uma prova.

Percorre TODOS os tópicos em ordem, mostrando antes de cada um os pontos
que caem na prova (▶ PROVA dos arquivos de explicação), depois os slides e
por fim as questões reais do Prof. Câmara.

Navegação: [m] dentro dos slides/questões volta ao seletor de prova,
           [0] Voltar no seletor sai para o menu principal.
"""
import re
from pathlib import Path

from core.ui import (
    C, cls, title, ask, pause, hr, secao,
    label_prova, escolher_prova, flush_stdin,
)
from core.executor import rodar_lista_questoes
from data.topicos import TOPICOS, AULAS_MAP
from data.avaliacoes import AVALIACOES
from data.questoes import QUESTOES
from modes.aula import apresentar_conteudo

AULAS_DIR      = Path(__file__).parent.parent / "aulas"
EXPLICACOES_DIR = AULAS_DIR / "explicacoes"


# ─── Helpers ──────────────────────────────────────────────────────────────────

def _questoes_do_topico(key):
    return ([q for q in AVALIACOES if q["topico"] == key]
            + [q for q in QUESTOES   if q["topico"] == key])


def _topicos_ordenados(prefixo: str) -> list[str]:
    ordem: list[str] = []
    for arquivo in sorted(AULAS_DIR.glob(f"{prefixo}*.md")):
        for key, arquivos in AULAS_MAP.items():
            if key.startswith(prefixo) and arquivo.name in arquivos and key not in ordem:
                ordem.append(key)
    return ordem


def _objetivos_do_topico(key: str) -> list[str]:
    """Extrai as linhas 'PROVA:' do arquivo de explicação do tópico."""
    # Prefer the canonical summary file ({key}_aula.md) which has curated bullet points
    path = EXPLICACOES_DIR / f"{key}_aula.md"
    if not path.exists():
        # Fallback: use the first file in AULAS_MAP
        arquivos = AULAS_MAP.get(key, [])
        if not arquivos:
            return []
        path = EXPLICACOES_DIR / arquivos[0].replace(".md", "_aula.md")
        if not path.exists():
            return []
    texto = path.read_text(encoding="utf-8", errors="ignore")
    # Match both ▶ **PROVA:** and > **PROVA:** formats
    objs  = re.findall(r'(?:▶|>)\s*\*\*PROVA[^:]*:\*\*\s*(.+)', texto)
    # limpa markdown bold
    objs  = [re.sub(r'\*\*(.+?)\*\*', r'\1', o.strip()) for o in objs]
    return [o for o in objs if o]


def _mostrar_objetivos(titulo: str, objetivos: list[str]) -> str | None:
    """Tela de objetivos de aprendizagem. Retorna 'menu' se o aluno pedir."""
    cls()
    print(f"\n  {C.GREEN}{C.BOLD}🎯 O QUE CAI NA PROVA — {titulo}{C.RESET}\n")
    hr(C.GREEN)
    print(f"\n  {C.DIM}Leia estes pontos ANTES de ver o conteúdo.{C.RESET}\n")
    for obj in objetivos:
        print(f"  {C.YELLOW}▶{C.RESET}  {obj}")
    print()
    flush_stdin()
    r = ask(f"  {C.DIM}[Enter] ver o conteúdo  ·  [m] voltar ao seletor{C.RESET}  ").lower().strip()
    return "menu" if r == "m" else None


# ─── Modo principal ────────────────────────────────────────────────────────────

def modo_revisao(prog):
    while True:
        cls()
        title("📖 REVISÃO MINUCIOSA — MARATONA DA PROVA", C.GREEN)
        print(f"  {C.DIM}Percorre TODO o conteúdo da prova, tópico a tópico,{C.RESET}")
        print(f"  {C.DIM}com objetivos de aprendizagem + questões reais ao fim de cada um.{C.RESET}\n")

        prefixo = escolher_prova(incluir_todas=False, incluir_voltar=True)
        if prefixo is None:
            return  # [0] Voltar → sai para o menu principal

        topicos = _topicos_ordenados(prefixo)
        total   = len(topicos)
        lp      = label_prova(prefixo)

        # Sumário dos tópicos
        cls()
        title(f"📖 REVISÃO — {lp}", C.GREEN)
        print(f"  {C.BOLD}{total} tópicos nesta maratona:{C.RESET}\n")
        for i, key in enumerate(topicos, 1):
            n_q    = len(_questoes_do_topico(key))
            q_info = (f"{C.DIM}({n_q} questões){C.RESET}" if n_q
                      else f"{C.DIM}(sem questões){C.RESET}")
            print(f"  {C.GREEN}{i:2d}.{C.RESET}  {TOPICOS.get(key, key)}  {q_info}")
        print(f"\n  {C.DIM}[Enter] começar  ·  [m] voltar ao seletor{C.RESET}")
        flush_stdin()
        r = ask("\n  ").lower().strip()
        if r == "m":
            continue  # volta ao seletor de prova (outer while True)

        # ── Maratona ────────────────────────────────────────────────────────
        idx = 0
        while idx < total:
            key    = topicos[idx]
            titulo = f"[{idx + 1}/{total}] {TOPICOS.get(key, key)}"
            arquivos = AULAS_MAP.get(key, [])

            # 1. Objetivos de aprendizagem (pontos que caem na prova)
            objetivos = _objetivos_do_topico(key)
            if objetivos:
                sinal = _mostrar_objetivos(titulo, objetivos)
                if sinal == "menu":
                    break  # → volta ao seletor (outer while True)

            # 2. Slides / conteúdo
            sinal = apresentar_conteudo(titulo, arquivos)
            if sinal == "menu":
                break  # → volta ao seletor

            # 3. Questões do tópico
            qs = _questoes_do_topico(key)
            if qs:
                cls()
                title(f"📋 QUESTÕES — {titulo}", C.MAGENTA)
                print(f"  {C.BOLD}Fim do tópico!{C.RESET}  "
                      f"{C.DIM}{len(qs)} questão(ões) do Prof. Câmara.{C.RESET}\n")
                print(f"  {C.YELLOW}[1]{C.RESET}  Responder agora")
                print(f"  {C.YELLOW}[Enter]{C.RESET}  Pular para o próximo tópico")
                print(f"  {C.YELLOW}[v]{C.RESET}  Voltar ao tópico anterior"
                      f"   {C.YELLOW}[m]{C.RESET}  Voltar ao seletor\n")
                flush_stdin()
                e = ask("  › ").lower().strip()
                if e == "m":
                    break  # → volta ao seletor
                if e == "v":
                    idx = max(0, idx - 1)
                    continue
                if e == "1":
                    resultado = rodar_lista_questoes(qs, prog, cor=C.MAGENTA)
                    if resultado == "menu":
                        break  # → volta ao seletor
            idx += 1

        else:
            # Loop completou sem break → maratona concluída
            cls()
            title(f"🏁 MARATONA CONCLUÍDA — {lp}", C.GREEN)
            print(f"\n  {C.GREEN}{C.BOLD}Você passou por todos os {total} tópicos! 💪{C.RESET}\n")
            print(f"  {C.DIM}Dica: use o Quiz Inteligente para fixar seus pontos fracos.{C.RESET}\n")
            pause()

        # Ambos os caminhos (break ou else) chegam aqui.
        # O outer while True reinicia → mostra o seletor de prova novamente.
