from core.ui import C, cls, ask, barra
from core.progress import load_progress, save_progress
from modes.aula import modo_aula
from modes.revisao import modo_revisao
from modes.avaliacao import modo_avaliacao
from modes.simulado import modo_simulado
from modes.topico import modo_topico
from modes.quiz import modo_quiz
from modes.flashcards import modo_flashcards
from modes.progresso import modo_progresso

_SEP = f"  {C.CYAN}{'━' * 64}{C.RESET}"
_SEP_DIM = f"  {C.DIM}{'─' * 64}{C.RESET}"


def _render_progresso(prog):
    tq, tc = prog["total_q"], prog["total_c"]
    if tq == 0:
        return f"  {C.DIM}Nenhuma questão respondida ainda — vamos começar?{C.RESET}"
    pct = tc / tq * 100
    nota = 5 + pct / 100 * 5
    cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
    b = barra(pct, 24)
    return (
        f"     {b}   "
        f"{C.DIM}nota{C.RESET} {cor}{C.BOLD}{nota:.1f}{C.RESET}{C.DIM}/10{C.RESET}"
        f"   {C.DIM}({tc}/{tq} questões){C.RESET}"
    )


def _grupo(titulo, opcoes):
    print(f"  {C.DIM}── {titulo} {'─' * max(2, 58 - len(titulo))}{C.RESET}\n")
    for num, icon, label, desc in opcoes:
        desc_col = f"  {C.DIM}{desc}{C.RESET}" if desc else ""
        print(f"    {C.YELLOW}[{num}]{C.RESET}  {icon}  {C.BOLD}{label:<28}{C.RESET}{desc_col}")
    print()


def menu():
    prog = load_progress()
    prog["sessoes"] = prog.get("sessoes", 0) + 1

    while True:
        cls()

        # ── Cabeçalho ────────────────────────────────────────────────────
        print(_SEP)
        print()
        print(
            f"     {C.CYAN}{C.BOLD}🤖  R O B O E S T U D O{C.RESET}"
            f"     {C.WHITE}Sistemas Embarcados  v2.0{C.RESET}"
        )
        print(
            f"     {C.DIM}Prof. Marco Câmara  ·  UCSAL 2026-01"
            f"  ·  📅 P2: 9 de junho{C.RESET}"
        )
        print()
        print(_SEP)
        print()
        print(_render_progresso(prog))
        print()
        print(_SEP)
        print()

        # ── Grupos de opções ─────────────────────────────────────────────
        _grupo("CONTEÚDO", [
            ("1", "🎓", "Aula com o Prof. Marco",  "tópico por vez, visual novel"),
            ("2", "📖", "Revisão Minuciosa",        "maratona completa da prova"),
            ("3", "📋", "Avaliações Diárias",       "questões reais do Prof. Câmara"),
        ])

        _grupo("PRÁTICA", [
            ("4", "📝", "Simulado Estilo Prova",   "soma-de-itens, formato P2"),
            ("5", "📚", "Estudo por Tópico",        "banco de questões por tema"),
            ("6", "⚡", "Quiz Inteligente",          "prioriza seus pontos fracos"),
            ("7", "🃏", "Flashcards",               "revisão rápida de termos"),
        ])

        _grupo("RELATÓRIO", [
            ("8", "📊", "Ver Progresso",            "aproveitamento e nota estimada"),
            ("9", "🚪", "Sair",                     ""),
        ])

        e = ask(f"  {C.CYAN}›{C.RESET} ")

        if e == "1":
            modo_aula(prog)
        elif e == "2":
            modo_revisao(prog)
        elif e == "3":
            modo_avaliacao(prog)
        elif e == "4":
            modo_simulado(prog)
        elif e == "5":
            modo_topico(prog)
        elif e == "6":
            modo_quiz(prog)
        elif e == "7":
            modo_flashcards(prog)
        elif e == "8":
            modo_progresso(prog)
        elif e == "9":
            cls()
            save_progress(prog)
            print(f"\n  {C.GREEN}{C.BOLD}💪 Bons estudos! Você consegue na prova!{C.RESET}\n")
            break
