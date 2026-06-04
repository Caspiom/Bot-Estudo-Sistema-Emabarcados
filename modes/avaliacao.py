import random

from core.ui import C, cls, hr, title, ask, pause, resultado_sessao, nav_prompt
from core.executor import rodar_questao
from core.progress import save_progress
from data.avaliacoes import AVALIACOES, AVALIACOES_P1, AVALIACOES_P2
from data.topicos import TOPICOS


def _escolher_prova():
    print(f"\n  {C.BOLD}Filtrar por prova?{C.RESET}")
    print(f"  {C.YELLOW}[1]{C.RESET} 📗 Prova 1")
    print(f"  {C.YELLOW}[2]{C.RESET} 📘 Prova 2")
    print(f"  {C.YELLOW}[3]{C.RESET} 🔀 Todas\n")
    while True:
        e = ask("  Escolha: ")
        if e == "1":
            return "1", AVALIACOES_P1
        if e == "2":
            return "2", AVALIACOES_P2
        if e == "3":
            return "3", AVALIACOES
        print(f"  {C.RED}Digite 1, 2 ou 3.{C.RESET}")


def _escolher_topico(pool, label_prova):
    topicos_disponiveis = {}
    for q in pool:
        tp = q["topico"]
        topicos_disponiveis.setdefault(tp, 0)
        topicos_disponiveis[tp] += 1

    print(f"\n  {C.BOLD}Filtrar por tópico?{C.RESET}")
    print(f"  {C.YELLOW}[0]{C.RESET} Todas ({len(pool)} questões)")
    opcoes = list(topicos_disponiveis.items())
    for i, (key, n) in enumerate(opcoes, 1):
        nome = TOPICOS.get(key, key)
        print(f"  {C.YELLOW}[{i}]{C.RESET} {nome} {C.DIM}({n} questões){C.RESET}")
    print(f"  {C.YELLOW}[S]{C.RESET} Sair\n")

    while True:
        e = ask("  Escolha: ").upper()
        if e == "S":
            return None
        if e == "0":
            return list(pool)
        try:
            idx = int(e) - 1
            if 0 <= idx < len(opcoes):
                key = opcoes[idx][0]
                return [q for q in pool if q["topico"] == key]
        except Exception:
            pass
        print(f"  {C.RED}Inválido.{C.RESET}")


def modo_avaliacao(prog):
    cls()
    title("📋 AVALIAÇÕES REAIS DO PROF. CÂMARA", C.MAGENTA)
    print(f"\n  {C.DIM}Questões reais das avaliações diárias da disciplina.{C.RESET}")

    prova_id, pool_prova = _escolher_prova()

    cls()
    label_prova = {"1": "📗 Prova 1", "2": "📘 Prova 2", "3": "🔀 Todas"}.get(prova_id, "")
    title(f"📋 AVALIAÇÕES — {label_prova}", C.MAGENTA)

    pool = _escolher_topico(pool_prova, label_prova)
    if pool is None:
        return

    random.shuffle(pool)
    cls()
    title(f"📋 {len(pool)} QUESTÕES REAIS — {label_prova}", C.MAGENTA)
    print(f"\n  {C.YELLOW}Questões reais das avaliações do Prof. Câmara.{C.RESET}")
    print(f"  {C.DIM}Responda como se estivesse na prova.{C.RESET}\n")
    pause()

    i = 0
    seen: set[int] = set()
    corretas = 0
    while i < len(pool):
        q = pool[i]
        cls()
        hr(C.MAGENTA)
        primeira_vez = i not in seen
        acertou = rodar_questao(q, i + 1, len(pool), prog, update_prog=primeira_vez)
        if primeira_vez:
            seen.add(i)
            corretas += int(acertou)
            save_progress(prog)
        nav = nav_prompt(i, len(pool))
        if nav == "voltar":
            i -= 1
        elif nav == "menu":
            return
        else:
            i += 1

    resultado_sessao(corretas, len(seen))
    pause()
