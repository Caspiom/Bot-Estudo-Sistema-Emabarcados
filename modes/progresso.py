from core.ui import C, cls, title, ask, pause, barra, hr, secao
from data.topicos import TOPICOS
from data.questoes import QUESTOES


def modo_progresso(prog):
    cls()
    title("📊 SEU PROGRESSO", C.CYAN)

    tq, tc = prog["total_q"], prog["total_c"]
    sessoes = prog.get("sessoes", 1)

    # ── Resumo geral ────────────────────────────────────────────────────────
    print(f"  {C.DIM}Sessões de estudo:{C.RESET}  {C.BOLD}{sessoes}{C.RESET}")
    print(f"  {C.DIM}Questões respondidas:{C.RESET}  {C.BOLD}{tq}{C.RESET}  "
          f"{C.DIM}(acertos: {tc}){C.RESET}")

    if tq > 0:
        pct = tc / tq * 100
        nota = 5 + pct / 100 * 5
        cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
        print(f"  {C.DIM}Aproveitamento:{C.RESET}   {barra(pct, 28)}")
        print(f"  {C.DIM}Nota estimada:{C.RESET}    {cor}{C.BOLD}{nota:.1f}{C.RESET}{C.DIM}/10{C.RESET}")

    # ── Por tópico ──────────────────────────────────────────────────────────
    secao("Por tópico")

    p1_keys = [k for k in TOPICOS if k.startswith("p1_")]
    p2_keys = [k for k in TOPICOS if k.startswith("p2_")]

    def _listar(keys, label, cor_header):
        print(f"  {cor_header}{C.BOLD}── {label} {'─' * (48 - len(label))}{C.RESET}")
        for k in keys:
            nome = TOPICOS[k]
            tp = prog["topicos"].get(k, {"f": 0, "c": 0})
            f, c = tp["f"], tp["c"]
            if f == 0:
                print(f"  {C.DIM}  {nome}: não iniciado{C.RESET}")
            else:
                p = c / f * 100
                cor = C.GREEN if p >= 70 else C.YELLOW if p >= 50 else C.RED
                b = barra(p, 16)
                print(f"  {cor}  {nome}{C.RESET}  {b}  {C.DIM}({c}/{f}){C.RESET}")
        print()

    _listar(p1_keys, "PROVA 1", C.YELLOW)
    _listar(p2_keys, "PROVA 2", C.CYAN)

    # ── Questões para rever ─────────────────────────────────────────────────
    erros = prog.get("erros", {})
    if erros:
        top_erros = sorted(erros.items(), key=lambda x: -x[1])[:5]
        secao("Top questões para rever")
        for qid, cnt in top_erros:
            q = next((x for x in QUESTOES if x["id"] == qid), None)
            if q:
                texto = q["pergunta"][:62] + ("…" if len(q["pergunta"]) > 62 else "")
                print(f"  {C.RED}[{cnt}✗]{C.RESET}  {texto}")
        print()

    pause()
