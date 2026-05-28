import random
import time

from core.ui import C, cls, title, ask, pause, resultado_sessao
from data.flashcards import FLASHCARDS


def modo_flashcards(prog):
    cards = list(FLASHCARDS)
    random.shuffle(cards)
    cls()
    title("🃏 FLASHCARDS", C.MAGENTA)
    print(f"  {len(cards)} cards. Leia o termo, tente lembrar antes de virar.\n")
    pause()
    acertos = 0
    for i, (termo, defin) in enumerate(cards, 1):
        cls()
        print(f"\n  {C.DIM}Card {i}/{len(cards)}{C.RESET}")
        print(f"\n  {'─' * 52}")
        print(f"  {C.CYAN}{C.BOLD}  {termo}{C.RESET}")
        print(f"  {'─' * 52}\n")
        ask("  [Enter para ver a definição]")
        print(f"\n  {C.GREEN}{defin}{C.RESET}\n")
        while True:
            v = ask("  Você sabia? (s/n): ").lower()
            if v in ("s", "n", "sim", "não", "nao"):
                break
        if v.startswith("s"):
            acertos += 1
            print(f"  {C.GREEN}+1 ✓{C.RESET}")
        else:
            print(f"  {C.RED}Anote para revisar.{C.RESET}")
        time.sleep(0.3)
    resultado_sessao(acertos, len(cards))
    pause()
