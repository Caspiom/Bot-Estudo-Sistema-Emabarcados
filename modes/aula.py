"""
Modo Aula — apresenta explicações didáticas dos slides no estilo do Prof. Marco Câmara.
Lê arquivos de aulas/explicacoes/ (estáticos); cai para texto bruto se não existir.
"""
import random
import re
import sys
import time
from pathlib import Path

from core.ui import C, cls, hr, title, ask, pause, resultado_sessao
from core.executor import rodar_questao
from core.progress import save_progress
from data.topicos import TOPICOS, AULAS_MAP
from data.questoes import QUESTOES
from data.avaliacoes import AVALIACOES

AULAS_DIR = Path(__file__).parent.parent / "aulas"
MARCO_ASCII_PATH = Path(__file__).parent.parent / "aulas" / "marco_ascii.txt"

# Frases de personalidade do Prof. Marco
FRASES_MARCO = [
    "Você acredita que teve gente que marcou isso na prova? Não acredito.",
    "Isso aqui é básico, gente. BÁSICO. Mas precisa saber.",
    "Olha, eu sempre digo: quem confunde precisão com exatidão na minha prova não passa.",
    "Isso vai cair na prova, pode anotar.",
    "Pergunta clássica de prova. Presta atenção.",
    "Já vi gente escrever Von Neumann para microcontrolador. Errado. Harvard, pessoal.",
    "Pino digital não é pino analógico. Parece óbvio, né? Mas cai na prova.",
    "Timer0 é sagrado. Não toca no Timer0 se não quiser ver o delay() enlouquecer.",
    "ISR curta! ISR curta! Se você botar delay() na ISR... nem quero pensar.",
    "Esse é um conceito que gente formada confunde. Imagina na prova.",
    "Anota aí porque isso é frequente.",
    "Quem erra isso na prova fica me devendo uma explicação depois.",
    "Olha que questão boa essa, hein? Já joguei parecida na prova.",
]


def frase_marco():
    return f"\n  {C.MAGENTA}{C.BOLD}🧑‍🏫 Prof. Marco:{C.RESET} {C.MAGENTA}\"{random.choice(FRASES_MARCO)}\"{C.RESET}\n"


def _exibir_marco_ascii(com_frase: bool = False):
    """Exibe o retrato ASCII do Prof. Marco com borda colorida."""
    if not MARCO_ASCII_PATH.exists():
        return
    linhas = MARCO_ASCII_PATH.read_text(encoding="utf-8").splitlines()
    largura = max(len(l) for l in linhas)
    borda = "─" * (largura + 2)
    print(f"\n  {C.MAGENTA}╭{borda}╮{C.RESET}")
    for l in linhas:
        print(f"  {C.MAGENTA}│{C.RESET} {l:<{largura}} {C.MAGENTA}│{C.RESET}")
    print(f"  {C.MAGENTA}╰{borda}╯{C.RESET}")
    if com_frase:
        _typewrite(f"  {C.MAGENTA}{C.BOLD}Prof. Marco Câmara{C.RESET}\n")


def limpar_markdown(texto):
    """Remove comentários HTML de slide e formata para terminal."""
    linhas = []
    for linha in texto.splitlines():
        if linha.startswith("<!-- Slide"):
            # Extrai número do slide
            m = re.search(r"Slide (\d+)", linha)
            if m:
                linhas.append(f"\n  {C.DIM}── slide {m.group(1)} ──{C.RESET}")
        elif linha.startswith("# "):
            continue  # já usamos o título do tópico
        elif linha == "---":
            continue
        elif linha.strip():
            linhas.append(f"  {linha}")
        else:
            linhas.append("")
    return "\n".join(linhas)


EXPLICACOES_DIR = Path(__file__).parent.parent / "aulas" / "explicacoes"


def _render_linha(l: str) -> str:
    """Aplica formatação ANSI a uma linha de markdown."""
    if l.startswith("## "):
        return f"  {C.CYAN}{C.BOLD}{l[3:]}{C.RESET}"
    if l.startswith("# "):
        return f"  {C.CYAN}{C.BOLD}{l[2:]}{C.RESET}"
    if l.startswith("> "):
        return f"  {C.YELLOW}▶  {l[2:]}{C.RESET}"
    if l.startswith("---") and l.strip("- ") == "":
        return f"  {C.DIM}{'─' * 52}{C.RESET}"
    l = re.sub(r"\*\*(.+?)\*\*", lambda m: f"{C.BOLD}{m.group(1)}{C.RESET}", l)
    return f"  {l}" if l.strip() else ""


_ANSI_RE = re.compile(r"\x1b\[[0-9;]*m")


def _typewrite(texto: str, delay: float = 0.009, instant: bool = False):
    """Imprime texto com efeito de máquina de escrever, ignorando ANSI nos delays."""
    if instant:
        print(texto)
        return
    i = 0
    while i < len(texto):
        m = _ANSI_RE.match(texto, i)
        if m:
            sys.stdout.write(m.group())
            sys.stdout.flush()
            i = m.end()
            continue
        ch = texto[i]
        sys.stdout.write(ch)
        sys.stdout.flush()
        if ch not in (" ", "\n", "\t"):
            time.sleep(delay)
        i += 1


def _dividir_falas(texto: str) -> list[str]:
    """
    Divide o texto em falas (parágrafo ou título+parágrafo).
    Separadores --- são descartados.
    """
    blocos_raw = re.split(r"\n{2,}", texto.strip())
    falas, titulo_pendente = [], None
    for bloco in blocos_raw:
        bloco = bloco.strip()
        if not bloco or re.fullmatch(r"-{3,}", bloco):
            continue
        if bloco.startswith("## ") or bloco.startswith("# "):
            titulo_pendente = bloco
        else:
            if titulo_pendente:
                falas.append(titulo_pendente + "\n\n" + bloco)
                titulo_pendente = None
            else:
                falas.append(bloco)
    if titulo_pendente:
        falas.append(titulo_pendente)
    return falas


def apresentar_conteudo(titulo, arquivos):
    # Carrega texto: explicação estática ou fallback para slides brutos
    nome_base = arquivos[0].replace(".md", "_aula.md") if arquivos else ""
    exp_path = EXPLICACOES_DIR / nome_base

    if exp_path.exists():
        texto = exp_path.read_text(encoding="utf-8")
    else:
        partes = [
            (AULAS_DIR / n).read_text(encoding="utf-8")
            for n in arquivos if (AULAS_DIR / n).exists()
        ]
        texto = limpar_markdown("\n\n".join(partes))

    falas = _dividir_falas(texto)
    total = len(falas)

    cls()
    title(f"🎓 {titulo}", C.CYAN)
    _exibir_marco_ascii(com_frase=True)
    print(f"\n  {C.DIM}{total} partes — pressione Enter para avançar, s para pular{C.RESET}\n")

    for i, fala in enumerate(falas):
        linhas = fala.splitlines()
        # Título de seção aparece instantâneo; texto é animado
        saida = []
        for l in linhas:
            saida.append((_render_linha(l), l.startswith("## ") or l.startswith("# ")))
        for rendered, eh_titulo in saida:
            if eh_titulo:
                print(rendered)
            else:
                _typewrite(rendered + "\n")

        if random.random() < 0.2:
            _typewrite(f"\n  {C.MAGENTA}{C.BOLD}🧑‍🏫 Marco:{C.RESET} {C.MAGENTA}\"{random.choice(FRASES_MARCO)}\"{C.RESET}\n")

        if i < total - 1:
            op = input(f"\n  {C.DIM}· · ·{C.RESET}  ").lower().strip()
            print()
            if op == "s":
                break
        else:
            print(f"\n  {C.GREEN}Fim da aula!{C.RESET}")
            print(frase_marco())

    hr()


def _listar_topicos(prefix, cor_header, label_prova):
    """Retorna lista de (titulo, nome_arquivo) para os arquivos do prefix dado."""
    files = sorted(AULAS_DIR.glob(f"{prefix}_*.md"))
    opcoes = []
    print(f"\n  {C.BOLD}{cor_header}── {label_prova} {'─' * (38 - len(label_prova))}{C.RESET}")
    for f in files:
        conteudo = f.read_text(encoding="utf-8", errors="ignore")
        titulo = re.search(r"^# (.+)$", conteudo, re.MULTILINE)
        titulo = titulo.group(1) if titulo else f.stem
        n = conteudo.count("<!-- Slide")
        idx = len(opcoes) + 1
        print(f"  {C.YELLOW}[{idx:2d}]{C.RESET} {titulo} {C.DIM}({n} slides){C.RESET}")
        opcoes.append((titulo, f.name))
    return opcoes


def _escolher_topico(opcoes):
    """Pede ao usuário que escolha um tópico da lista. Retorna (titulo, arquivo) ou None."""
    print(f"\n  {C.YELLOW}[ 0]{C.RESET} Voltar\n")
    while True:
        e = ask("  Escolha o tópico: ")
        if e == "0":
            return None
        try:
            idx = int(e) - 1
            if 0 <= idx < len(opcoes):
                return opcoes[idx]
        except Exception:
            pass
        print(f"  {C.RED}Inválido.{C.RESET}")


def modo_aula(prog):
    while True:
        cls()
        title("🎓 AULA COM O PROF. CÂMARA", C.CYAN)
        print(f"\n  {C.BOLD}Qual prova você quer estudar?{C.RESET}\n")
        print(f"  {C.YELLOW}[1]{C.RESET} 📗 Prova 1  {C.DIM}(Definição, Hardware, Arduino, Eletrônica, Memória, IoT){C.RESET}")
        print(f"  {C.YELLOW}[2]{C.RESET} 📘 Prova 2  {C.DIM}(Medição, ADC/DAC/PWM, Registradores, Interrupções, Projeto){C.RESET}")
        print(f"  {C.YELLOW}[0]{C.RESET} Voltar ao menu\n")
        escolha = ask("  Escolha: ")

        if escolha == "0":
            return
        if escolha not in ("1", "2"):
            continue

        cls()
        title("🎓 AULA COM O PROF. CÂMARA", C.CYAN)

        if escolha == "1":
            opcoes = _listar_topicos("p1", C.YELLOW, "PROVA 1")
        else:
            opcoes = _listar_topicos("p2", C.CYAN, "PROVA 2")

        resultado = _escolher_topico(opcoes)
        if resultado is None:
            continue  # volta ao menu de prova

        titulo_escolhido, arquivo_escolhido = resultado
        apresentar_conteudo(titulo_escolhido, [arquivo_escolhido])

        # Questões pós-aula
        topico_key = next(
            (k for k, arqs in AULAS_MAP.items() if arquivo_escolhido in arqs),
            None,
        )

        print(f"\n  {C.BOLD}O que fazer agora?{C.RESET}")
        print(f"  {C.YELLOW}[1]{C.RESET} Praticar questões (banco principal)")
        print(f"  {C.YELLOW}[2]{C.RESET} Questões reais do Prof. Câmara")
        print(f"  {C.YELLOW}[0]{C.RESET} Voltar\n")
        e = ask("  Escolha: ")

        if e in ("1", "2"):
            qs = [q for q in (QUESTOES if e == "1" else AVALIACOES)
                  if q["topico"] == topico_key] if topico_key else []
            if not qs:
                print(f"\n  {C.YELLOW}Sem questões mapeadas para este tópico ainda.{C.RESET}")
                pause()
            else:
                random.shuffle(qs)
                cls()
                title(f"QUESTÕES — {titulo_escolhido}", C.CYAN)
                corretas = 0
                for i, q in enumerate(qs, 1):
                    cls()
                    hr()
                    corretas += int(rodar_questao(q, i, len(qs), prog))
                    save_progress(prog)
                    pause()
                resultado_sessao(corretas, len(qs))
                pause()
