import random

from core.ui import C, cls, hr, title, ask, pause, resultado_sessao
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
    corretas = 0
    for i, q in enumerate(qs, 1):
        cls()
        hr()
        corretas += int(rodar_questao(q, i, len(qs), prog))
        save_progress(prog)
        pause()
    resultado_sessao(corretas, len(qs))
    pause()
