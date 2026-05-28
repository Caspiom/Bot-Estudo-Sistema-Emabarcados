from core.ui import C, cls, title, ask, pause, barra
from data.topicos import TOPICOS
from data.questoes import QUESTOES


def modo_progresso(prog):
    cls()
    title("📊 SEU PROGRESSO", C.CYAN)
    tq, tc = prog["total_q"], prog["total_c"]
    print(f"\n  Sessões: {prog['sessoes']}  |  Questões: {tq}  |  Acertos: {tc}")
    if tq > 0:
        pct = tc / tq * 100
        print(f"  Aproveitamento: {barra(pct)}")
        print(f"  Nota estimada:  {C.BOLD}{5 + pct / 100 * 5:.1f}/10{C.RESET}")
    print(f"\n  {C.BOLD}Por tópico:{C.RESET}\n")
    for k, n in TOPICOS.items():
        tp = prog["topicos"].get(k, {"f": 0, "c": 0})
        f, c = tp["f"], tp["c"]
        if f == 0:
            print(f"  {C.DIM}  {n}: não iniciado{C.RESET}")
        else:
            p = c / f * 100
            cor = C.GREEN if p >= 70 else C.YELLOW if p >= 50 else C.RED
            print(f"  {cor}  {n}: {c}/{f} ({p:.0f}%){C.RESET}")
    erros = prog.get("erros", {})
    if erros:
        top_erros = sorted(erros.items(), key=lambda x: -x[1])[:5]
        print(f"\n  {C.RED}{C.BOLD}Top questões para rever:{C.RESET}")
        for qid, cnt in top_erros:
            q = next((x for x in QUESTOES if x["id"] == qid), None)
            if q:
                print(f"  {C.RED}  [{cnt}x] {q['pergunta'][:65]}...{C.RESET}")
    print()
    pause()
