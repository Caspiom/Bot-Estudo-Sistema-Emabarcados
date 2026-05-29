from core.ui import C, ask, pause, cls, hr, barra, resultado_sessao
from data.topicos import TOPICOS


def cabecalho_questao(q, n, total):
    tier_info = {
        "S": (C.RED, "CRÍTICO"),
        "A": (C.YELLOW, "IMPORTANTE"),
        "B": (C.BLUE, "COMPLEMENTAR"),
    }
    cor, label = tier_info.get(q.get("tier", "B"), (C.WHITE, ""))
    print(
        f"\n{C.BOLD}{cor}  {label}{C.RESET}  "
        f"{C.DIM}| {n}/{total} | {TOPICOS.get(q['topico'], q['topico'])}{C.RESET}"
    )
    print(f"\n  {C.WHITE}{C.BOLD}{q['pergunta']}{C.RESET}\n")


def exec_mc(q):
    for op in q["opcoes"]:
        print(f"    {op}")
    print()
    while True:
        r = ask("  Sua resposta (A/B/C/D): ").upper()
        if r in "ABCD" and len(r) == 1:
            break
        print(f"  {C.RED}Digite A, B, C ou D.{C.RESET}")
    acertou = r == q["resposta"]
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✅ CORRETO!{C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}❌ Incorreto. Resposta: {q['resposta']}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    return acertou


def exec_escreva(q):
    print(f"  {C.YELLOW}✍️  Escreva sua resposta (Enter em branco duas vezes para terminar):{C.RESET}\n")
    linhas = []
    while True:
        l = ask("  > ")
        if l == "" and linhas and linhas[-1] == "":
            break
        linhas.append(l)
    print(f"\n  {C.CYAN}📚 Resposta esperada:{C.RESET}\n  {q['resposta_esperada']}\n")
    print(f"  {C.YELLOW}Avalie-se honestamente:{C.RESET}")
    for n, d in [("1", "Não sabia nada"), ("2", "Sabia pouco"),
                 ("3", "Sabia parcialmente"), ("4", "Sabia a maior parte"),
                 ("5", "Sabia tudo / muito próximo")]:
        print(f"    {n} = {d}")
    while True:
        v = ask("\n  Nota (1-5): ")
        if v in "12345" and len(v) == 1:
            v = int(v)
            break
    msgs = {
        5: f"{C.GREEN}🎯 Excelente!",
        4: f"{C.GREEN}✅ Bom!",
        3: f"{C.YELLOW}⚠️  Razoável — releia.",
        2: f"{C.RED}📖 Precisa de atenção.",
        1: f"{C.RED}📖 Escreva sobre este tópico hoje!",
    }
    print(f"\n  {msgs[v]}{C.RESET}")
    return v >= 4


def exec_calc(q):
    print(f"  {C.YELLOW}🔢 Unidade esperada: {q.get('unidade', '')}{C.RESET}\n")
    while True:
        r = ask("  Resultado: ").replace(",", ".")
        try:
            val = float(r)
            break
        except Exception:
            print(f"  {C.RED}Digite apenas o número.{C.RESET}")
    correto = float(q["resposta"])
    tol = float(q.get("tolerancia", 0))
    acertou = abs(val - correto) <= max(tol, 0.001)
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✅ CORRETO! ({correto} {q.get('unidade', '')}){C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}❌ Incorreto. Correto: {correto} {q.get('unidade', '')}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    return acertou


def exec_complete(q):
    print(f"  {C.YELLOW}✏️  Preencha os espaços em branco:{C.RESET}\n")
    ask("  Sua resposta: ")
    print(f"\n  {C.CYAN}✅ Esperado:{C.RESET} {q['resposta']}")
    print(f"  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    while True:
        v = ask("\n  Você acertou? (s/n): ").lower()
        if v in ("s", "n", "sim", "não", "nao"):
            break
    return v.startswith("s")


def rodar_questao(q, n, total, prog, update_prog=True):
    cabecalho_questao(q, n, total)
    t = q["tipo"]
    if t == "MC":
        acertou = exec_mc(q)
    elif t == "ESCREVA":
        acertou = exec_escreva(q)
    elif t == "CALC":
        acertou = exec_calc(q)
    else:
        acertou = exec_complete(q)
    if update_prog:
        prog["total_q"] += 1
        prog["total_c"] += int(acertou)
        tp = q["topico"]
        prog["topicos"].setdefault(tp, {"f": 0, "c": 0})
        prog["topicos"][tp]["f"] += 1
        prog["topicos"][tp]["c"] += int(acertou)
        if not acertou:
            prog["erros"][q["id"]] = prog["erros"].get(q["id"], 0) + 1
    return acertou
