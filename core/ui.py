import os
import sys


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
