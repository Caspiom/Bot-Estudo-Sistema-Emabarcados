import os
import sys

try:
    import tty
    import termios
    import select as _select
    _HAS_RAW = True
except ImportError:
    _HAS_RAW = False


class C:
    RESET = "\033[0m"
    BOLD = "\033[1m"
    DIM = "\033[2m"
    RED = "\033[91m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    BLUE = "\033[94m"
    MAGENTA = "\033[95m"
    CYAN = "\033[96m"
    WHITE = "\033[97m"


def cls():
    os.system("clear" if os.name != "nt" else "cls")


def hr(c=C.BLUE):
    print(f"{c}{'─' * 62}{C.RESET}")


def title(text, c=C.CYAN):
    hr(c)
    print(f"{C.BOLD}{c}  {text}{C.RESET}")
    hr(c)


def ask(prompt=""):
    try:
        return input(f"{C.YELLOW}{prompt}{C.RESET}").strip()
    except (KeyboardInterrupt, EOFError):
        print("\n\nAté logo! 💪")
        sys.exit(0)


def pause():
    ask("\n  [Enter para continuar...]")


def nav_prompt(i: int, total: int) -> str:
    """Navegação pós-item. Retorna 'proximo', 'voltar' ou 'menu'."""
    ultima = i >= total - 1
    partes = ["[Enter] resultado" if ultima else "[Enter] próxima"]
    if i > 0:
        partes.append("[v] anterior")
    partes.append("[m] menu")
    r = ask(f"\n  {C.DIM}{' · '.join(partes)}{C.RESET}  ").lower().strip()
    if r == "v" and i > 0:
        return "voltar"
    if r == "m":
        return "menu"
    return "proximo"


def barra(pct, w=28):
    f = int(pct / 100 * w)
    cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
    return f"{cor}{'█' * f}{'░' * (w - f)} {pct:.0f}%{C.RESET}"


def resultado_sessao(corretas, total):
    cls()
    pct = corretas / total * 100
    nota = 5 + pct / 100 * 5
    title("RESULTADO", C.GREEN if pct >= 70 else C.YELLOW)
    print(f"\n  Acertos: {C.BOLD}{corretas}/{total}{C.RESET}  {barra(pct)}")
    print(f"  Nota estimada: {C.BOLD}{nota:.1f}/10{C.RESET}\n")
    if pct >= 80:
        print(f"  {C.GREEN}🏆 Ótimo! Você domina este conteúdo!{C.RESET}")
    elif pct >= 60:
        print(f"  {C.YELLOW}📚 Bom progresso! Revise os erros.{C.RESET}")
    else:
        print(f"  {C.RED}📖 Atenção! Releia e tente novamente.{C.RESET}")


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
    """Seleção única com setas. Retorna índice 0-based."""
    if not _HAS_RAW:
        for op in opcoes:
            print(f"    {op}")
        while True:
            r = ask("  Sua resposta (A/B/C/D): ").upper()
            if r in "ABCD" and len(r) == 1:
                return ord(r) - ord('A')
        return 0

    idx = 0
    n = len(opcoes)
    hint = f"  {C.DIM}↑↓ navegar · Enter confirmar{C.RESET}"

    def linhas():
        return [
            f"  {C.CYAN}{C.BOLD}▶ {opcoes[i]}{C.RESET}" if i == idx
            else f"    {C.DIM}{opcoes[i]}{C.RESET}"
            for i in range(n)
        ]

    for l in linhas():
        print(l)
    print(hint)

    while True:
        try:
            ch = _getch()
        except KeyboardInterrupt:
            print("\n\nAté logo! 💪")
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

    return idx


def selecionar_multiplas(opcoes: list) -> list:
    """Seleção múltipla com checkboxes. Retorna lista de índices 0-based."""
    if not _HAS_RAW:
        for op in opcoes:
            print(f"    {op}")
        r = ask("  Marque as corretas (ex: A C): ").upper().split()
        return sorted(set(ord(l) - ord('A') for l in r if l in "ABCD" and ord(l) - ord('A') < len(opcoes)))

    idx = 0
    n = len(opcoes)
    marcados: set = set()
    hint = f"  {C.DIM}↑↓ navegar · Espaço marcar/desmarcar · Enter confirmar{C.RESET}"

    def linhas():
        ls = []
        for i, op in enumerate(opcoes):
            box = f"{C.GREEN}[✓]{C.RESET}" if i in marcados else "[ ]"
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

    while True:
        try:
            ch = _getch()
        except KeyboardInterrupt:
            print("\n\nAté logo! 💪")
            sys.exit(0)

        if ch in (b'\r', b'\n'):
            break
        elif ch == b'\x1b[A':
            idx = (idx - 1) % n
        elif ch == b'\x1b[B':
            idx = (idx + 1) % n
        elif ch == b' ':
            if idx in marcados:
                marcados.discard(idx)
            else:
                marcados.add(idx)

        sys.stdout.write(f"\033[{n + 1}A\r")
        for l in linhas():
            sys.stdout.write(f"\033[2K{l}\n")
        sys.stdout.write(f"\033[2K{hint}\n")
        sys.stdout.flush()

    return sorted(marcados)
