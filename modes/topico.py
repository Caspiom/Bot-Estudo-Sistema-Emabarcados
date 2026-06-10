from core.ui import C, cls, title, ask, pause, label_prova, escolher_prova, barra
from core.executor import rodar_lista_questoes
from data.topicos import TOPICOS
from data.questoes import QUESTOES


def modo_topico(prog):
    cls()
    title("📚 ESTUDO POR TÓPICO", C.CYAN)

    prefixo = escolher_prova(incluir_voltar=True)
    if prefixo is None:
        return

    cls()
    title(f"📚 ESTUDO POR TÓPICO — {label_prova(prefixo)}", C.CYAN)

    lista = [(k, n) for k, n in TOPICOS.items() if k.startswith(prefixo)]
    print(f"  {C.BOLD}Escolha um tópico:{C.RESET}\n")
    for i, (k, n) in enumerate(lista, 1):
        tp = prog["topicos"].get(k, {"f": 0, "c": 0})
        f, c = tp["f"], tp["c"]
        if f > 0:
            pct = c / f * 100
            cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
            progresso = f"{cor}({c}/{f}  {pct:.0f}%){C.RESET}"
        else:
            progresso = f"{C.DIM}(não iniciado){C.RESET}"
        n_q = len([q for q in QUESTOES if q["topico"] == k])
        print(f"  {C.YELLOW}[{i:2d}]{C.RESET}  {n}  {progresso}  {C.DIM}{n_q} questões{C.RESET}")

    print(f"\n  {C.DIM}[0]  Voltar{C.RESET}\n")
    while True:
        e = ask("  › ")
        if e == "0":
            return
        try:
            idx = int(e) - 1
            if 0 <= idx < len(lista):
                break
        except Exception:
            pass
        print(f"  {C.RED}Opção inválida.{C.RESET}")

    key = lista[idx][0]
    qs = [q for q in QUESTOES if q["topico"] == key]

    cls()
    title(f"📚 {TOPICOS[key]}", C.CYAN)
    print(f"  {C.DIM}{len(qs)} questão(ões) disponível(eis).{C.RESET}\n")
    pause()
    rodar_lista_questoes(qs, prog)
