import random

from core.ui import C, cls, title, pause, label_prova, escolher_prova, hr, secao
from core.executor import rodar_lista_questoes
from data.questoes import QUESTOES


def modo_quiz(prog, n=10):
    cls()
    title("⚡ QUIZ INTELIGENTE", C.MAGENTA)
    print(f"  {C.DIM}Monta 10 questões priorizando seus pontos fracos.{C.RESET}\n")
    print(f"  {C.DIM}Distribuição: até 4 questões CRÍTICAS  ·  4 IMPORTANTES  ·  2 COMPLEMENTARES{C.RESET}\n")

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

    lp = label_prova(prefixo)
    cls()
    title(f"⚡ QUIZ — {lp}", C.MAGENTA)
    print(f"  {C.BOLD}{len(qs)} questões selecionadas.{C.RESET}")
    tier_counts = {
        "S": sum(1 for q in qs if q.get("tier") == "S"),
        "A": sum(1 for q in qs if q.get("tier") == "A"),
        "B": sum(1 for q in qs if q.get("tier") == "B"),
    }
    partes = []
    if tier_counts["S"]:
        partes.append(f"{C.RED}{tier_counts['S']} críticas{C.RESET}")
    if tier_counts["A"]:
        partes.append(f"{C.YELLOW}{tier_counts['A']} importantes{C.RESET}")
    if tier_counts["B"]:
        partes.append(f"{C.BLUE}{tier_counts['B']} complementares{C.RESET}")
    if partes:
        print(f"  {C.DIM}Composição:{C.RESET}  {'  ·  '.join(partes)}")
    print()
    pause()
    rodar_lista_questoes(qs, prog)
