import random

from core.ui import C, cls, hr, title, ask, pause, resultado_sessao, nav_prompt
from core.executor import rodar_questao
from core.progress import save_progress
from data.questoes import QUESTOES


def escolher_prova():
    print(f"\n  {C.BOLD}Filtrar por prova?{C.RESET}")
    print(f"  {C.YELLOW}[1]{C.RESET} 📗 Prova 1 (slides 0–236) — revisão")
    print(f"  {C.YELLOW}[2]{C.RESET} 📘 Prova 2 (slides 237–307) — conteúdo novo")
    print(f"  {C.YELLOW}[3]{C.RESET} 🔀 Todas (misto)\n")
    while True:
        e = ask("  Escolha: ")
        if e == "1":
            return "p1_"
        if e == "2":
            return "p2_"
        if e == "3":
            return ""
        print(f"  {C.RED}Digite 1, 2 ou 3.{C.RESET}")


def modo_quiz(prog, n=10):
    cls()
    title("⚡ QUIZ INTELIGENTE", C.MAGENTA)
    prefixo = escolher_prova()
    erros = prog.get("erros", {})
    pool = [q for q in QUESTOES if q["topico"].startswith(prefixo)]
    pool = sorted(pool, key=lambda q: -erros.get(q["id"], 0))
    tier_s = [q for q in pool if q.get("tier") == "S"]
    tier_a = [q for q in pool if q.get("tier") == "A"]
    tier_b = [q for q in pool if q.get("tier") == "B"]
    ns = min(4, len(tier_s))
    na = min(4, len(tier_a))
    nb = min(2, len(tier_b))
    qs = random.sample(tier_s, ns) + random.sample(tier_a, na) + random.sample(tier_b, nb)
    if not qs:
        qs = pool
    qs = qs[:n]
    random.shuffle(qs)
    label = {"p1_": "Prova 1", "p2_": "Prova 2", "": "Todas as provas"}.get(prefixo, "")
    cls()
    title(f"⚡ QUIZ — {label} — {len(qs)} questões", C.MAGENTA)
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
