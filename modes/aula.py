"""
Modo Aula — explica os slides no estilo do Prof. Marco Câmara.
Usa aulas/explicacoes/ (didático); cai para slides brutos se não existir.
"""
import random
import re
import sys
import time
from pathlib import Path

from core.ui import C, cls, title, ask, pause, hr, secao, flush_stdin
from core.executor import rodar_lista_questoes
from data.topicos import TOPICOS, AULAS_MAP
from data.avaliacoes import AVALIACOES

AULAS_DIR = Path(__file__).parent.parent / "aulas"
MARCO_ASCII_PATH = Path(__file__).parent.parent / "aulas" / "marco_ascii.txt"
EXPLICACOES_DIR = AULAS_DIR / "explicacoes"

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
    linhas = []
    for linha in texto.splitlines():
        if linha.startswith("<!-- Slide"):
            m = re.search(r"Slide (\d+)", linha)
            if m:
                linhas.append(f"\n  {C.DIM}── slide {m.group(1)} ──{C.RESET}")
        elif linha.startswith("# "):
            continue
        elif linha == "---":
            continue
        elif linha.strip():
            linhas.append(f"  {linha}")
        else:
            linhas.append("")
    return "\n".join(linhas)


def _render_linha(l: str) -> str:
    if l.startswith("## ") or l.startswith("# "):
        return f"  {C.CYAN}{C.BOLD}{l.lstrip('#').strip()}{C.RESET}"
    if l.startswith("> "):
        return f"  {C.YELLOW}▶  {l[2:]}{C.RESET}"
    if l.startswith("---") and l.strip("- ") == "":
        return f"  {C.DIM}{'─' * 52}{C.RESET}"
    l = re.sub(r"\*\*(.+?)\*\*", lambda m: f"{C.BOLD}{m.group(1)}{C.RESET}", l)
    return f"  {l}" if l.strip() else ""


_ANSI_RE = re.compile(r"\x1b\[[0-9;]*m")


def _typewrite(texto: str, delay: float = 0.009, instant: bool = False):
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
    print(f"\n  {C.DIM}{total} falas  ·  Enter avança  ·  [v] volta  ·  [s] pula slides  ·  [m] menu{C.RESET}")
    input()

    i = 0
    while i < total:
        fala = falas[i]
        com_frase_marco = random.random() < 0.2
        frase = random.choice(FRASES_MARCO) if com_frase_marco else None

        cls()
        title(f"🎓 {titulo}", C.CYAN)
        _exibir_marco_ascii()
        print(f"\n  {C.DIM}[{i + 1}/{total}]{C.RESET}\n")

        for l in fala.splitlines():
            if l.startswith("## ") or l.startswith("# "):
                print(_render_linha(l))
            else:
                _typewrite(_render_linha(l) + "\n")

        if frase:
            _typewrite(
                f"\n  {C.MAGENTA}{C.BOLD}🧑‍🏫 Marco:{C.RESET} "
                f"{C.MAGENTA}\"{frase}\"{C.RESET}\n"
            )

        # ── Navegação — flush obrigatório para descartar teclas do typewriter ──
        flush_stdin()

        if i == total - 1:
            op = ask(
                f"  {C.DIM}[Enter] fim da aula  ·  [v] fala anterior  ·  [m] menu{C.RESET}  "
            ).lower().strip()
            if op == "v" and i > 0:
                i -= 1
                continue
            if op == "m":
                return "menu"
            # Só limpa a tela DEPOIS que o usuário pediu para avançar
            cls()
            title(f"🎓 {titulo}", C.CYAN)
            _exibir_marco_ascii()
            print(frase_marco())
            pause("[Enter para voltar ao menu de tópicos]")
            break

        op = ask(
            f"  {C.DIM}[Enter] próxima  ·  [v] anterior  ·  [s] pular slides  ·  [m] menu{C.RESET}  "
        ).lower().strip()
        if op == "s":
            break
        elif op == "v" and i > 0:
            i -= 1
        elif op == "m":
            return "menu"
        else:
            i += 1


def _listar_topicos(prefix, cor_header, label_prova):
    files = sorted(AULAS_DIR.glob(f"{prefix}_*.md"))
    opcoes = []
    print(f"  {cor_header}{C.BOLD}── {label_prova} {'─' * (50 - len(label_prova))}{C.RESET}")
    for f in files:
        conteudo = f.read_text(encoding="utf-8", errors="ignore")
        titulo = re.search(r"^# (.+)$", conteudo, re.MULTILINE)
        titulo = titulo.group(1) if titulo else f.stem
        n = conteudo.count("<!-- Slide")
        idx = len(opcoes) + 1
        print(f"  {C.YELLOW}[{idx:2d}]{C.RESET}  {titulo}  {C.DIM}({n} slides){C.RESET}")
        opcoes.append((titulo, f.name))
    return opcoes


def _escolher_topico(opcoes):
    print(f"\n  {C.DIM}[0]  Voltar{C.RESET}\n")
    while True:
        e = ask("  › ")
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

        print(f"  {C.BOLD}Qual prova você quer estudar?{C.RESET}\n")
        print(f"  {C.YELLOW}[1]{C.RESET}  📗 {C.BOLD}Prova 1{C.RESET}  "
              f"{C.DIM}Definição · Hardware · Arduino · Eletrônica · Memória · IoT{C.RESET}")
        print(f"  {C.YELLOW}[2]{C.RESET}  📘 {C.BOLD}Prova 2{C.RESET}  "
              f"{C.DIM}Medição · ADC/DAC/PWM · Registradores · Interrupções · Projeto{C.RESET}")
        print(f"\n  {C.DIM}[0]  Voltar{C.RESET}\n")
        escolha = ask("  › ")

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

        print()
        resultado = _escolher_topico(opcoes)
        if resultado is None:
            continue

        titulo_escolhido, arquivo_escolhido = resultado
        sinal = apresentar_conteudo(titulo_escolhido, [arquivo_escolhido])
        if sinal == "menu":
            return

        topico_key = next(
            (k for k, arqs in AULAS_MAP.items() if arquivo_escolhido in arqs),
            None,
        )
        qs = [q for q in AVALIACOES if q["topico"] == topico_key] if topico_key else []

        cls()
        title(f"🎓 {titulo_escolhido}", C.CYAN)

        if not qs:
            print(f"\n  {C.GREEN}✓  Aula concluída!{C.RESET}")
            print(f"  {C.DIM}Sem avaliações diárias mapeadas para este tópico ainda.{C.RESET}\n")
            pause()
        else:
            print(f"\n  {C.GREEN}✓  Aula concluída!{C.RESET}  "
                  f"{C.DIM}{len(qs)} questão(ões) do Prof. Câmara disponível(eis).{C.RESET}\n")
            print(f"  {C.YELLOW}[1]{C.RESET}  Responder as avaliações diárias")
            print(f"  {C.DIM}[0]  Voltar à lista de tópicos{C.RESET}\n")
            e = ask("  › ")
            if e == "1":
                cls()
                title(f"📋 AVALIAÇÕES — {titulo_escolhido}", C.MAGENTA)
                if rodar_lista_questoes(qs, prog, cor=C.MAGENTA) == "menu":
                    return
