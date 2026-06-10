from core.ui import C, cls, title, ask, pause, label_prova, escolher_prova, secao
from core.executor import rodar_lista_questoes
from data.avaliacoes import AVALIACOES
from data.topicos import TOPICOS


def _escolher_topico(pool):
    topicos_disp = {}
    for q in pool:
        topicos_disp.setdefault(q["topico"], 0)
        topicos_disp[q["topico"]] += 1

    print(f"  {C.BOLD}Filtrar por tópico?{C.RESET}\n")
    print(f"  {C.YELLOW}[0]{C.RESET}  Todos  {C.DIM}({len(pool)} questões){C.RESET}")
    opcoes = list(topicos_disp.items())
    for i, (key, n) in enumerate(opcoes, 1):
        nome = TOPICOS.get(key, key)
        print(f"  {C.YELLOW}[{i}]{C.RESET}  {nome}  {C.DIM}({n} questões){C.RESET}")
    print(f"\n  {C.DIM}[s]  Voltar{C.RESET}\n")

    while True:
        e = ask("  › ").upper()
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
        print(f"  {C.RED}Opção inválida.{C.RESET}")


def modo_avaliacao(prog):
    cls()
    title("📋 AVALIAÇÕES DIÁRIAS — PROF. CÂMARA", C.MAGENTA)
    print(f"  {C.DIM}Questões reais das avaliações diárias da disciplina.{C.RESET}\n")

    prefixo = escolher_prova()
    pool_prova = [q for q in AVALIACOES if q["topico"].startswith(prefixo)]
    lp = label_prova(prefixo)

    cls()
    title(f"📋 AVALIAÇÕES — {lp}", C.MAGENTA)
    pool = _escolher_topico(pool_prova)
    if pool is None:
        return

    cls()
    title(f"📋 {len(pool)} QUESTÕES REAIS — {lp}", C.MAGENTA)
    print(f"  {C.YELLOW}Questões reais das avaliações do Prof. Câmara.{C.RESET}")
    print(f"  {C.DIM}Responda como se estivesse na prova.{C.RESET}\n")
    pause()
    rodar_lista_questoes(pool, prog, cor=C.MAGENTA)
