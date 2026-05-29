import random

from core.ui import C, cls, hr, title, ask, pause, resultado_sessao, nav_prompt
from core.executor import rodar_questao
from core.progress import save_progress
from data.topicos import TOPICOS
from data.questoes import QUESTOES


def modo_topico(prog):
    cls()
    title("ESTUDO POR TÓPICO", C.CYAN)
    lista = list(TOPICOS.items())
    for i, (k, n) in enumerate(lista, 1):
        tp = prog["topicos"].get(k, {"f": 0, "c": 0})
        f, c = tp["f"], tp["c"]
        s = f"({c}/{f})" if f > 0 else "(não iniciado)"
        print(f"  {C.YELLOW}[{i}]{C.RESET} {n} {C.DIM}{s}{C.RESET}")
    print(f"  {C.YELLOW}[0]{C.RESET} Voltar\n")
    while True:
        e = ask("  Escolha: ")
        if e == "0":
            return
        try:
            idx = int(e) - 1
            if 0 <= idx < len(lista):
                break
        except Exception:
            pass
        print(f"  {C.RED}Inválido.{C.RESET}")
    key = lista[idx][0]
    qs = [q for q in QUESTOES if q["topico"] == key]
    random.shuffle(qs)
    cls()
    title(f"TÓPICO: {TOPICOS[key]}", C.CYAN)
    print(f"\n  {C.DIM}{len(qs)} questões{C.RESET}\n")
    pause()
    i = 0
    seen: set[int] = set()
    corretas = 0
    while i < len(qs):
        q = qs[i]
        cls()
        hr()
        primeira_vez = i not in seen
        acertou = rodar_questao(q, i + 1, len(qs), prog, update_prog=primeira_vez)
        if primeira_vez:
            seen.add(i)
            corretas += int(acertou)
            save_progress(prog)
        nav = nav_prompt(i, len(qs))
        if nav == "voltar":
            i -= 1
        elif nav == "menu":
            return
        else:
            i += 1
    resultado_sessao(corretas, len(seen))
    pause()
