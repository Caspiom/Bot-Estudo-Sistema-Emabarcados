import random

from core.ui import C, cls, title, ask, pause, resultado_sessao, nav_prompt
from data.flashcards import FLASHCARDS


def modo_flashcards(prog):
    cards = list(FLASHCARDS)
    random.shuffle(cards)
    cls()
    title("🃏 FLASHCARDS", C.MAGENTA)
    print(f"  {len(cards)} cards. Leia o termo, tente lembrar antes de virar.\n")
    pause()
    i = 0
    seen: set[int] = set()
    acertos = 0
    while i < len(cards):
        termo, defin = cards[i]
        cls()
        print(f"\n  {C.DIM}Card {i + 1}/{len(cards)}{C.RESET}")
        print(f"\n  {'─' * 52}")
        print(f"  {C.CYAN}{C.BOLD}  {termo}{C.RESET}")
        print(f"  {'─' * 52}\n")
        ask("  [Enter para ver a definição]")
        print(f"\n  {C.GREEN}{defin}{C.RESET}\n")
        while True:
            v = ask("  Você sabia? (s/n): ").lower()
            if v in ("s", "n", "sim", "não", "nao"):
                break
        primeira_vez = i not in seen
        if primeira_vez:
            seen.add(i)
            if v.startswith("s"):
                acertos += 1
                print(f"  {C.GREEN}+1 ✓{C.RESET}")
            else:
                print(f"  {C.RED}Anote para revisar.{C.RESET}")
        nav = nav_prompt(i, len(cards))
        if nav == "voltar":
            i -= 1
        elif nav == "menu":
            return
        else:
            i += 1
    resultado_sessao(acertos, len(seen))
    pause()
