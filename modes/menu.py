from core.ui import C, cls, hr, ask
from core.progress import load_progress, save_progress
from modes.aula import modo_aula
from modes.avaliacao import modo_avaliacao
from modes.topico import modo_topico
from modes.quiz import modo_quiz
from modes.flashcards import modo_flashcards
from modes.progresso import modo_progresso


def menu():
    prog = load_progress()
    prog["sessoes"] = prog.get("sessoes", 0) + 1
    while True:
        cls()
        print(f"""
{C.CYAN}{C.BOLD}
  ╔══════════════════════════════════════════════════╗
  ║      🤖  ROBOESTUDO — SISTEMAS EMBARCADOS        ║
  ║      Prof. Marco Câmara — UCSAL 2026-01          ║
  ║         📅 Prova 2: 9 de junho (segunda)         ║
  ╚══════════════════════════════════════════════════╝
{C.RESET}""")
        tq, tc = prog["total_q"], prog["total_c"]
        if tq > 0:
            pct = tc / tq * 100
            nota = 5 + pct / 100 * 5
            cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
            print(
                f"  {C.DIM}Progresso: {tc}/{tq} ({pct:.0f}%) | "
                f"Nota estimada: {cor}{nota:.1f}/10{C.RESET}\n"
            )
        hr()
        print(f"\n  {C.BOLD}O que vamos fazer?{C.RESET}\n")
        print(
            f"  {C.YELLOW}[1]{C.RESET} 🎓 Aula com o Prof. Marco  {C.DIM}(todo o conteúdo dos slides){C.RESET}"
        )
        print(
            f"  {C.YELLOW}[2]{C.RESET} 📋 Avaliações Diárias  {C.DIM}(questões reais das aulas){C.RESET}"
        )
        print(
            f"  {C.YELLOW}[3]{C.RESET} 📚 Estudo por Tópico {C.DIM}(Questões geradas por IA com base nos slides){C.RESET}"
        )
        print(
            f"  {C.YELLOW}[4]{C.RESET} ⚡ Quiz Inteligente  {C.DIM}(prioriza seus pontos fracos){C.RESET}"
        )
        print(f"  {C.YELLOW}[5]{C.RESET} 🃏 Flashcards")
        print(f"  {C.YELLOW}[6]{C.RESET} 📊 Ver Progresso")
        print(f"  {C.YELLOW}[7]{C.RESET} 🚪 Sair\n")
        e = ask("  Escolha: ")
        if e == "1":
            modo_aula(prog)
        elif e == "2":
            modo_avaliacao(prog)
        elif e == "3":
            modo_topico(prog)
        elif e == "4":
            modo_quiz(prog)
        elif e == "5":
            modo_flashcards(prog)
        elif e == "6":
            modo_progresso(prog)
        elif e == "7":
            cls()
            save_progress(prog)
            print(
                f"\n  {C.GREEN}{C.BOLD}💪 Bons estudos! Você consegue na prova de 9/06!{C.RESET}\n"
            )
            break
