import os
import sys

try:
    import tty
    import termios
    import select as _select
    _HAS_RAW = True
except ImportError:
    _HAS_RAW = False

_W = 64  # largura visual padrão


class C:
    RESET   = "\033[0m"
    BOLD    = "\033[1m"
    DIM     = "\033[2m"
    RED     = "\033[91m"
    GREEN   = "\033[92m"
    YELLOW  = "\033[93m"
    BLUE    = "\033[94m"
    MAGENTA = "\033[95m"
    CYAN    = "\033[96m"
    WHITE   = "\033[97m"


def cls():
    os.system("clear" if os.name != "nt" else "cls")


def hr(c=C.CYAN, w=_W):
    print(f"  {c}{'─' * w}{C.RESET}")


def title(text, c=C.CYAN):
    print(f"\n  {c}{'━' * _W}{C.RESET}")
    print(f"  {c}{C.BOLD}  {text}{C.RESET}")
    print(f"  {c}{'━' * _W}{C.RESET}\n")


def secao(texto="", c=C.DIM):
    """Separador de seção com rótulo opcional."""
    if texto:
        print(f"\n  {c}── {C.RESET}{C.BOLD}{texto} {c}{'─' * max(4, _W - len(texto) - 7)}{C.RESET}\n")
    else:
        hr(c)


def ask(prompt=""):
    try:
        return input(f"{C.YELLOW}{prompt}{C.RESET}").strip()
    except (KeyboardInterrupt, EOFError):
        cls()
        print(f"\n  {C.GREEN}Até logo! Bons estudos! 💪{C.RESET}\n")
        sys.exit(0)


def pause(msg="[Enter para continuar]"):
    flush_stdin()
    ask(f"\n  {C.DIM}{msg}{C.RESET}")


def flush_stdin():
    """Descarta teclas digitadas enquanto o texto era exibido (evita pular telas)."""
    try:
        if _HAS_RAW:
            termios.tcflush(sys.stdin.fileno(), termios.TCIFLUSH)
        else:
            import msvcrt
            while msvcrt.kbhit():
                msvcrt.getch()
    except Exception:
        pass


def nav_prompt(i: int, total: int, extras: dict | None = None) -> str:
    """Navegação pós-item. Retorna 'proximo', 'voltar', 'menu' ou chave de extras."""
    ultima = i >= total - 1
    label_enter = "resultado" if ultima else "próxima"
    p1 = f"{C.YELLOW}[Enter]{C.RESET} {C.DIM}{label_enter}{C.RESET}"
    p2 = f"  {C.YELLOW}[v]{C.RESET} {C.DIM}anterior{C.RESET}" if i > 0 else ""
    p3 = f"  {C.YELLOW}[m]{C.RESET} {C.DIM}menu{C.RESET}"
    p_extras = "".join(
        f"  {C.MAGENTA}[{k}]{C.RESET} {C.DIM}{v}{C.RESET}"
        for k, v in (extras or {}).items()
    )
    flush_stdin()
    r = ask(f"\n  {p1}{p2}{p3}{p_extras}  ").lower().strip()
    if extras and r in extras:
        return r
    if r == "v" and i > 0:
        return "voltar"
    if r == "m":
        return "menu"
    return "proximo"


_PROVA_LABELS = {
    "p1_": "📗 Prova 1",
    "p2_": "📘 Prova 2",
    "":    "🔀 Todas as provas",
}


def label_prova(prefixo: str) -> str:
    return _PROVA_LABELS.get(prefixo, "")


def escolher_prova(incluir_todas: bool = True, incluir_voltar: bool = False):
    """Menu padrão de seleção de prova.
    Retorna 'p1_', 'p2_', '' (todas) ou None (voltar).
    """
    print(f"\n  {C.BOLD}Qual prova você quer estudar?{C.RESET}\n")
    print(f"  {C.YELLOW}[1]{C.RESET}  📗 {C.BOLD}Prova 1{C.RESET}  "
          f"{C.DIM}Definição · Hardware · Arduino · Eletrônica · Memória · IoT{C.RESET}")
    print(f"  {C.YELLOW}[2]{C.RESET}  📘 {C.BOLD}Prova 2{C.RESET}  "
          f"{C.DIM}Medição · ADC/DAC/PWM · Registradores · Interrupções · Projeto{C.RESET}")
    if incluir_todas:
        print(f"  {C.YELLOW}[3]{C.RESET}  🔀 {C.BOLD}Todas{C.RESET}  "
              f"{C.DIM}Mistura questões das duas provas{C.RESET}")
    if incluir_voltar:
        print(f"\n  {C.DIM}[0]  Voltar{C.RESET}")
    print()
    while True:
        e = ask("  › ")
        if e == "1":
            return "p1_"
        if e == "2":
            return "p2_"
        if incluir_todas and e == "3":
            return ""
        if incluir_voltar and e == "0":
            return None
        print(f"  {C.RED}Opção inválida.{C.RESET}")


def barra(pct, w=30):
    f = int(pct / 100 * w)
    cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
    return f"{cor}{'█' * f}{'░' * (w - f)}{C.RESET} {cor}{C.BOLD}{pct:.0f}%{C.RESET}"


def resultado_sessao(corretas, total):
    cls()
    pct = corretas / total * 100
    nota = 5 + pct / 100 * 5
    cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
    title("RESULTADO DA SESSÃO", cor)
    print(f"  Questões:      {C.BOLD}{corretas}{C.RESET}{C.DIM}/{total}{C.RESET} acertos")
    print(f"  Aproveitamento: {barra(pct, 28)}")
    print(f"  Nota estimada:  {C.BOLD}{cor}{nota:.1f}{C.RESET}{C.DIM}/10{C.RESET}\n")
    if pct >= 80:
        print(f"  {C.GREEN}{C.BOLD}🏆 Ótimo! Você domina este conteúdo!{C.RESET}")
    elif pct >= 60:
        print(f"  {C.YELLOW}📚 Bom progresso. Revise os pontos que errou.{C.RESET}")
    else:
        print(f"  {C.RED}📖 Precisa reforçar — releia o conteúdo e tente de novo.{C.RESET}")
    print()


# ─── Raw key input (Unix only) ────────────────────────────────────────────────

def _getch() -> bytes:
    fd = sys.stdin.fileno()
    old = termios.tcgetattr(fd)
    try:
        tty.setraw(fd)
        ch = os.read(fd, 1)
        if ch == b'\x03':
            raise KeyboardInterrupt
        if ch == b'\x1b':
            while _select.select([sys.stdin], [], [], 0.05)[0]:
                c = os.read(fd, 1)
                ch += c
                if c.isalpha() or c == b'~':
                    break
        return ch
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old)


def selecionar_opcao(opcoes: list) -> int:
    """Seleção única com setas (ou letras em fallback). Retorna índice 0-based."""
    if not _HAS_RAW:
        for i, op in enumerate(opcoes):
            letra = chr(ord('A') + i)
            print(f"  {C.YELLOW}[{letra}]{C.RESET}  {op}")
        while True:
            r = ask("\n  › ").upper()
            if r in "ABCD" and len(r) == 1 and ord(r) - ord('A') < len(opcoes):
                return ord(r) - ord('A')
            print(f"  {C.RED}Digite a letra da opção.{C.RESET}")

    idx = 0
    n = len(opcoes)
    hint = f"  {C.DIM}↑↓ navegar  ·  Enter confirmar{C.RESET}"

    def linhas():
        return [
            f"  {C.CYAN}{C.BOLD}▶ {chr(ord('A') + i)}) {opcoes[i]}{C.RESET}" if i == idx
            else f"  {C.DIM}   {chr(ord('A') + i)}) {opcoes[i]}{C.RESET}"
            for i in range(n)
        ]

    for l in linhas():
        print(l)
    print(hint)

    while True:
        try:
            ch = _getch()
        except KeyboardInterrupt:
            cls()
            print(f"\n  {C.GREEN}Até logo! 💪{C.RESET}\n")
            sys.exit(0)

        if ch in (b'\r', b'\n'):
            break
        elif ch == b'\x1b[A':
            idx = (idx - 1) % n
        elif ch == b'\x1b[B':
            idx = (idx + 1) % n
        elif len(ch) == 1 and ch.lower() in b'abcd':
            i = b'abcd'.index(ch.lower())
            if i < n:
                idx = i

        sys.stdout.write(f"\033[{n + 1}A\r")
        for l in linhas():
            sys.stdout.write(f"\033[2K{l}\n")
        sys.stdout.write(f"\033[2K{hint}\n")
        sys.stdout.flush()

    termios.tcflush(sys.stdin.fileno(), termios.TCIFLUSH)
    return idx


def selecionar_multiplas(opcoes: list) -> list:
    """Seleção múltipla com checkboxes. Retorna lista de índices 0-based."""
    if not _HAS_RAW:
        for i, op in enumerate(opcoes):
            letra = chr(ord('A') + i)
            print(f"  {C.YELLOW}[{letra}]{C.RESET}  {op}")
        r = ask("\n  Marque as corretas (ex: A C): ").upper().split()
        return sorted(set(
            ord(l) - ord('A') for l in r
            if l in "ABCD" and ord(l) - ord('A') < len(opcoes)
        ))

    idx = 0
    n = len(opcoes)
    marcados: set = set()
    hint = f"  {C.DIM}↑↓ navegar  ·  Espaço marcar/desmarcar  ·  Enter confirmar{C.RESET}"

    def linhas():
        ls = []
        for i, op in enumerate(opcoes):
            box = f"{C.GREEN}[✓]{C.RESET}" if i in marcados else f"{C.DIM}[ ]{C.RESET}"
            cur = f"{C.CYAN}{C.BOLD}▶{C.RESET}" if i == idx else " "
            if i == idx:
                txt = f"{C.BOLD}{op}{C.RESET}"
            elif i in marcados:
                txt = f"{C.GREEN}{op}{C.RESET}"
            else:
                txt = f"{C.DIM}{op}{C.RESET}"
            ls.append(f"  {cur} {box} {txt}")
        return ls

    for l in linhas():
        print(l)
    print(hint)

    aviso = ""
    while True:
        try:
            ch = _getch()
        except KeyboardInterrupt:
            cls()
            print(f"\n  {C.GREEN}Até logo! 💪{C.RESET}\n")
            sys.exit(0)

        if ch in (b'\r', b'\n'):
            if not marcados:
                aviso = f"  {C.RED}Marque ao menos uma opção antes de confirmar.{C.RESET}"
            else:
                break
        elif ch == b'\x1b[A':
            idx = (idx - 1) % n
            aviso = ""
        elif ch == b'\x1b[B':
            idx = (idx + 1) % n
            aviso = ""
        elif ch == b' ':
            marcados.discard(idx) if idx in marcados else marcados.add(idx)
            aviso = ""

        hint_linha = aviso if aviso else hint
        sys.stdout.write(f"\033[{n + 1}A\r")
        for l in linhas():
            sys.stdout.write(f"\033[2K{l}\n")
        sys.stdout.write(f"\033[2K{hint_linha}\n")
        sys.stdout.flush()

    termios.tcflush(sys.stdin.fileno(), termios.TCIFLUSH)
    return sorted(marcados)
