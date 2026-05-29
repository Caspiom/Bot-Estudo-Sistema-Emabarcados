import random

from core.ui import C, cls, hr, title, ask, pause, resultado_sessao, nav_prompt
from core.executor import rodar_questao
from core.progress import save_progress
from data.avaliacoes import AVALIACOES
from data.topicos import TOPICOS


def modo_avaliacao(prog):
    cls()
    title("📋 AVALIAÇÕES REAIS DO PROF. CÂMARA", C.MAGENTA)
    print(f"\n  {C.DIM}Questões reais das avaliações diárias da disciplina.{C.RESET}\n")

    # Lista tópicos que têm questões
    topicos_disponiveis = {}
    for q in AVALIACOES:
        tp = q["topico"]
        topicos_disponiveis.setdefault(tp, 0)
        topicos_disponiveis[tp] += 1

    print(f"  {C.YELLOW}[0]{C.RESET} Todas as questões (ordem aleatória)")
    opcoes = list(topicos_disponiveis.items())
    for i, (key, n) in enumerate(opcoes, 1):
        nome = TOPICOS.get(key, key)
        print(f"  {C.YELLOW}[{i}]{C.RESET} {nome} {C.DIM}({n} questões){C.RESET}")
    print(f"  {C.YELLOW}[S]{C.RESET} Sair\n")

    while True:
        e = ask("  Escolha: ").upper()
        if e == "S":
            return
        if e == "0":
            pool = list(AVALIACOES)
            break
        try:
            idx = int(e) - 1
            if 0 <= idx < len(opcoes):
                key = opcoes[idx][0]
                pool = [q for q in AVALIACOES if q["topico"] == key]
                break
        except Exception:
            pass
        print(f"  {C.RED}Inválido.{C.RESET}")

    random.shuffle(pool)
    cls()
    title(f"📋 {len(pool)} QUESTÕES REAIS", C.MAGENTA)
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
