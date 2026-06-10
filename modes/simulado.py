"""
Modo Simulado — provas completas no estilo EXATO do Prof. Marco Câmara.

Formato "soma de itens": cada questão tem itens 01/02/04/08/16/32; o aluno soma
os valores das afirmativas corretas. A questão 6 é aberta (autoavaliada).
"""
from core.ui import C, cls, hr, title, ask, pause, resultado_sessao, secao, flush_stdin
from core.executor import ensinar_soma
from data.avaliacoes.p2_simulado import AVALIACOES_P2


# ─── Gabarito detalhado de SOMA ───────────────────────────────────────────────

def _mostrar_gabarito_soma(q):
    """Exibe o gabarito item a item com texto + motivo completo."""
    corretas_vals = [item["valor"] for item in q["itens"] if item["correto"]]
    peso_str      = q.get("peso", " + ".join(corretas_vals) + f" = {q['resposta']}")

    print(f"\n  {C.CYAN}Gabarito  ({peso_str}):{C.RESET}")
    for item in q["itens"]:
        if item["correto"]:
            print(f"\n  {C.GREEN}  ✓ {item['valor']}{C.RESET}  {item['texto']}")
        else:
            motivo = item.get("motivo", "Afirmativa incorreta.")
            print(f"\n  {C.RED}  ✗ {item['valor']}{C.RESET}  {C.DIM}{item['texto']}{C.RESET}")
            print(f"          {C.RED}↳ {motivo}{C.RESET}")


# ─── Execução de questão SOMA ─────────────────────────────────────────────────

def _rodar_soma(q) -> bool:
    print(f"\n  {C.WHITE}{C.BOLD}{q['enunciado']}{C.RESET}\n")
    for item in q["itens"]:
        print(f"  {C.BOLD}{item['valor']}{C.RESET})  {item['texto']}")
    print(f"\n  {C.DIM}Some os valores das CORRETAS. Item errado marcado anula os certos.{C.RESET}")

    while True:
        r = ask("\n  Sua soma: ").strip()
        try:
            val = int(r)
            break
        except Exception:
            print(f"  {C.RED}Digite apenas o número.{C.RESET}")

    correto = int(q["resposta"])
    acertou = val == correto

    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✓  CORRETO!  Soma = {correto}{C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}✗  Sua soma: {val}{C.RESET}  "
              f"{C.DIM}Correto:{C.RESET} {C.YELLOW}{C.BOLD}{correto}{C.RESET}")

    _mostrar_gabarito_soma(q)
    return acertou


# ─── Execução de questão ABERTA ───────────────────────────────────────────────

def _rodar_aberta(q):
    print(f"\n  {C.WHITE}{C.BOLD}{q['enunciado']}{C.RESET}\n")
    print(f"  {C.YELLOW}✍  Escreva sua resposta (Enter em branco duas vezes para terminar):{C.RESET}\n")
    linhas = []
    while True:
        l = ask("  > ")
        if l == "" and linhas and linhas[-1] == "":
            break
        linhas.append(l)
    print(f"\n  {C.CYAN}{'─' * 52}{C.RESET}")
    print(f"  {C.CYAN}{C.BOLD}Gabarito:{C.RESET}")
    for parte, texto in q["gabarito"].items():
        rotulo = parte.replace("_", " ").title()
        print(f"\n  {C.BOLD}{C.YELLOW}{rotulo}:{C.RESET}")
        for linha in texto.splitlines():
            print(f"  {linha}")


# ─── Runner do simulado ───────────────────────────────────────────────────────

def _rodar_simulado(sim):
    cls()
    title(f"📝 {sim['titulo']}", C.MAGENTA)
    print(f"  {C.DIM}{sim['instrucoes']}{C.RESET}\n")
    pause()

    questoes  = sim["questoes"]
    corretas  = 0
    objetivas = 0

    for q in questoes:
        cls()
        hr(C.MAGENTA)
        aberta = q.get("tipo") == "aberta"
        rotulo = "ABERTA" if aberta else "SOMA DE ITENS"
        print(f"\n  {C.MAGENTA}{C.BOLD}Questão {q['numero']}/{len(questoes)}{C.RESET}  "
              f"{C.DIM}({rotulo}){C.RESET}")

        if aberta:
            _rodar_aberta(q)
            print()
            e = ask(f"  {C.DIM}[Enter] continuar  ·  [m] menu{C.RESET}  ").lower().strip()
            if e == "m":
                return
        else:
            objetivas += 1
            acertou    = _rodar_soma(q)
            if acertou:
                corretas += 1

            # Oferecer ensino quando errar
            flush_stdin()
            if acertou:
                prompt = f"  {C.DIM}[Enter] continuar  ·  [m] menu{C.RESET}  "
            else:
                prompt = (f"  {C.DIM}[Enter] continuar{C.RESET}"
                          f"   {C.MAGENTA}[e]{C.RESET} {C.DIM}aprender os conceitos{C.RESET}"
                          f"   {C.DIM}[m] menu{C.RESET}  ")

            e = ask(f"\n{prompt}").lower().strip()

            if e == "e" and not acertou:
                ensinar_soma(q)
                # Nav pós-ensino
                e = ask(f"\n  {C.DIM}[Enter] continuar  ·  [m] menu{C.RESET}  ").lower().strip()

            if e == "m":
                return

    if objetivas:
        resultado_sessao(corretas, objetivas)
        print(f"  {C.DIM}(questão aberta não contabilizada){C.RESET}\n")
    pause()


# ─── Menu do modo simulado ────────────────────────────────────────────────────

def modo_simulado(prog):
    while True:
        cls()
        title("📝 SIMULADO ESTILO PROVA — PROF. CÂMARA", C.MAGENTA)
        print(f"  {C.DIM}Provas completas no formato soma-de-itens da 2ª avaliação.{C.RESET}\n")

        for i, sim in enumerate(AVALIACOES_P2, 1):
            print(f"  {C.YELLOW}[{i}]{C.RESET}  {C.BOLD}{sim['titulo']}{C.RESET}")
        print(f"\n  {C.DIM}[0]  Voltar{C.RESET}\n")

        e = ask("  › ")
        if e == "0":
            return
        try:
            idx = int(e) - 1
            if 0 <= idx < len(AVALIACOES_P2):
                _rodar_simulado(AVALIACOES_P2[idx])
                continue
        except Exception:
            pass
        print(f"  {C.RED}Opção inválida.{C.RESET}")
