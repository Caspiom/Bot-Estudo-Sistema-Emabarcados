import random

from core.ui import C, cls, title, ask, pause, resultado_sessao, nav_prompt, label_prova, escolher_prova, hr
from data.flashcards import FLASHCARDS


def _exibir_card(termo, defin, i, total, mostrar_verso=False):
    cls()
    print(f"\n  {C.DIM}Card {i + 1}/{total}{C.RESET}\n")
    print(f"  {C.CYAN}┌{'─' * 58}┐{C.RESET}")
    print(f"  {C.CYAN}│{C.RESET}  {C.BOLD}{C.WHITE}{termo:<56}{C.RESET}  {C.CYAN}│{C.RESET}")
    print(f"  {C.CYAN}└{'─' * 58}┘{C.RESET}")
    if mostrar_verso:
        print(f"\n  {C.GREEN}{defin}{C.RESET}\n")


def modo_flashcards(prog):
    cls()
    title("🃏 FLASHCARDS", C.MAGENTA)

    prefixo = escolher_prova(incluir_voltar=True)
    if prefixo is None:
        return

    prova_cod = prefixo.rstrip("_")
    cards = [c for c in FLASHCARDS if not prova_cod or c[2] == prova_cod]
    random.shuffle(cards)

    cls()
    title(f"🃏 FLASHCARDS — {label_prova(prefixo)}", C.MAGENTA)
    print(f"  {C.BOLD}{len(cards)} cards.{C.RESET}  "
          f"{C.DIM}Leia o termo, tente lembrar a definição antes de virar.{C.RESET}\n")
    pause()

    i = 0
    seen: set[int] = set()
    acertos = 0

    while i < len(cards):
        termo, defin = cards[i][0], cards[i][1]

        _exibir_card(termo, defin, i, len(cards))
        ask("  [Enter para ver a definição]")

        _exibir_card(termo, defin, i, len(cards), mostrar_verso=True)

        while True:
            v = ask("  Você sabia? (s/n): ").lower()
            if v in ("s", "n", "sim", "não", "nao"):
                break

        primeira_vez = i not in seen
        if primeira_vez:
            seen.add(i)
            if v.startswith("s"):
                acertos += 1
                print(f"  {C.GREEN}✓  +1{C.RESET}")
            else:
                print(f"  {C.RED}✗  Anote para revisar.{C.RESET}")

        nav = nav_prompt(i, len(cards))
        if nav == "voltar":
            i -= 1
        elif nav == "menu":
            return
        else:
            i += 1

    resultado_sessao(acertos, len(seen))
    pause()
