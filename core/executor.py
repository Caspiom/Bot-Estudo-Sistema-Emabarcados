import random
import sys
import time

from core.ui import (
    C, ask, pause, cls, hr, title, barra, resultado_sessao,
    selecionar_opcao, selecionar_multiplas, nav_prompt, flush_stdin,
)
from data.topicos import TOPICOS


def _shuffle_opcoes(opcoes, resposta):
    """Embaralha as opções e mantém o gabarito correto apesar da nova ordem."""
    textos = [op.split(') ', 1)[1] if ') ' in op else op for op in opcoes]
    letras_orig = [chr(ord('A') + i) for i in range(len(textos))]
    pares = list(zip(letras_orig, textos))
    random.shuffle(pares)
    novas = [f"{chr(ord('A') + i)}) {txt}" for i, (_, txt) in enumerate(pares)]
    if isinstance(resposta, list):
        corretas = set(resposta)
        nova_resp = sorted(chr(ord('A') + i) for i, (lo, _) in enumerate(pares) if lo in corretas)
    else:
        nova_resp = next(chr(ord('A') + i) for i, (lo, _) in enumerate(pares) if lo == resposta)
    return novas, nova_resp


# ─── Typewriter local (não depende de modes/aula.py) ─────────────────────────

import re as _re
_ANSI_RE = _re.compile(r"\x1b\[[0-9;]*m")


def _tw(texto: str, delay: float = 0.012):
    i = 0
    while i < len(texto):
        m = _ANSI_RE.match(texto, i)
        if m:
            sys.stdout.write(m.group()); sys.stdout.flush()
            i = m.end(); continue
        ch = texto[i]
        sys.stdout.write(ch); sys.stdout.flush()
        if ch not in (" ", "\n", "\t"):
            time.sleep(delay)
        i += 1


# ─── Normalização de itens SOMA ───────────────────────────────────────────────

def _normalizar_itens_soma(itens) -> list[dict]:
    """Converte os dois formatos de itens SOMA para lista uniforme.

    Formato banco (dict):  {"01": ("CORRETA"|"ERRADA", texto), ...}
    Formato simulado (list): [{"valor": "01", "correto": bool, "texto": "...", "motivo": "..."}, ...]
    """
    if isinstance(itens, list):
        return itens
    return [
        {"valor": val, "texto": texto, "correto": status == "CORRETA", "motivo": None}
        for val, (status, texto) in itens.items()
    ]


# ─── Modo Ensino — SOMA (Verdadeiro ou Falso por item) ───────────────────────

def _ensinar_soma_itens(enunciado: str, itens: list[dict], explicacao: str = ""):
    """Ensino interativo para qualquer questão SOMA.
    Percorre cada afirmativa pedindo [c]orreto / [e]rrado ao aluno.
    """
    total = len(itens)
    acertos = 0

    cls()
    title("🧑‍🏫  MODO ENSINO — VERDADEIRO OU FALSO", C.MAGENTA)
    print(f"\n  {C.WHITE}{C.BOLD}{enunciado}{C.RESET}\n")
    hr(C.MAGENTA)
    print(f"\n  {C.DIM}Vou passar por cada afirmativa.")
    print(f"  Para cada uma, diga se é CORRETA ou ERRADA.")
    print(f"  [c] Correta  ·  [e] Errada  ·  [m] pular{C.RESET}\n")
    flush_stdin()
    r = ask("  [Enter] começar  ").lower().strip()
    if r == "m":
        return

    for num, item in enumerate(itens, 1):
        cls()
        title("🧑‍🏫  MODO ENSINO — VERDADEIRO OU FALSO", C.MAGENTA)
        print(f"  {C.DIM}[{num}/{total}]{C.RESET}\n")
        print(f"  {C.BOLD}Afirmativa {item['valor']}:{C.RESET}\n")

        for linha in item["texto"].splitlines():
            _tw(f"  {C.WHITE}{linha}{C.RESET}\n")
        print()
        flush_stdin()

        while True:
            r = ask(f"  {C.YELLOW}[c]{C.RESET} {C.DIM}Correta{C.RESET}"
                    f"   {C.YELLOW}[e]{C.RESET} {C.DIM}Errada{C.RESET}"
                    f"   {C.DIM}[m] pular{C.RESET}  › ").lower().strip()
            if r == "m":
                return
            if r in ("c", "e"):
                break

        is_correta   = item["correto"]
        acertou_item = (r == "c") == is_correta

        if acertou_item:
            acertos += 1
            cor_icone = C.GREEN
            icone     = "✓  Certo!"
        else:
            cor_icone = C.RED
            icone     = "✗  Errou!"

        label = f"{C.GREEN}CORRETA ✓{C.RESET}" if is_correta else f"{C.RED}ERRADA ✗{C.RESET}"
        print(f"\n  {cor_icone}{C.BOLD}{icone}{C.RESET}  Esta afirmativa é {label}")

        motivo = item.get("motivo")
        if motivo:
            print(f"\n  {C.CYAN}↳ {motivo}{C.RESET}")
        elif not is_correta:
            print(f"\n  {C.DIM}↳ Afirmativa incorreta — verifique no gabarito o motivo.{C.RESET}")

        pause()

    # Tela de resultado do ensino
    cls()
    title("🧑‍🏫  MODO ENSINO — RESULTADO", C.MAGENTA)
    pct = acertos / total * 100
    cor = C.GREEN if pct >= 70 else C.YELLOW if pct >= 50 else C.RED
    print(f"\n  {cor}{C.BOLD}{acertos}/{total}{C.RESET} afirmativas identificadas corretamente.\n")
    if explicacao:
        print(f"  {C.CYAN}💡 Conceito geral:{C.RESET}")
        for linha in explicacao.splitlines():
            print(f"  {linha}")
        print()
    print(f"  {C.GREEN}{C.BOLD}🎯  Agora você sabe identificar cada item!{C.RESET}")
    print(f"  {C.DIM}Tente o simulado novamente para fixar.{C.RESET}\n")
    pause()


def ensinar_soma(q: dict):
    """Ponto de entrada público para ensino de SOMA — aceita ambos os formatos.
    Pode ser chamado de simulado.py e de rodar_lista_questoes.
    """
    itens    = _normalizar_itens_soma(q["itens"])
    enunc    = q.get("enunciado") or q.get("pergunta", "")
    explic   = q.get("explicacao", "")
    _ensinar_soma_itens(enunc, itens, explic)


# ─── Modo Ensino — ESCREVA / CALC / MC / MULTI ───────────────────────────────

def _passos_de(q: dict) -> list[str]:
    """Retorna lista de passos explícitos ou faz smart-split do gabarito."""
    if q.get("passos"):
        return list(q["passos"])

    texto = q.get("resposta_esperada") or q.get("explicacao") or ""

    linhas = [l.strip() for l in texto.splitlines() if l.strip()]
    if len(linhas) >= 2:
        return linhas

    partes = _re.split(r'(?<=\.) |(?= →)|(?<=\.) \(', texto)
    partes = [p.strip() for p in partes if p.strip()]
    return partes if len(partes) >= 2 else [texto]


def exec_ensinar(q: dict):
    """Passo a passo após erro — despacha para o modo certo por tipo."""
    tipo = q.get("tipo", "")

    # SOMA — Verdadeiro ou Falso por afirmativa
    if tipo == "SOMA":
        ensinar_soma(q)
        return

    # MC — mostra as opções com ✓/✗ e explica cada uma
    if tipo == "MC":
        _ensinar_mc(q)
        return

    # MULTI — igual ao MC
    if tipo == "MULTI":
        _ensinar_mc(q)
        return

    # ESCREVA / CALC / COMPLETE — passo a passo textual
    passos = _passos_de(q)
    total  = len(passos)

    cls()
    title("🧑‍🏫  MODO ENSINO — PASSO A PASSO", C.MAGENTA)

    print(f"  {C.DIM}Questão:{C.RESET}")
    for linha in q["pergunta"].splitlines():
        print(f"  {C.WHITE}{linha}{C.RESET}")
    print()
    hr(C.MAGENTA)
    print(f"\n  {C.DIM}Vou percorrer a solução em {total} {'passo' if total == 1 else 'passos'}."
          f"  [Enter] avança · [m] pular{C.RESET}\n")
    flush_stdin()

    r = ask("  ").lower().strip()
    if r == "m":
        return

    _CIRC = "②③④⑤⑥⑦⑧⑨"

    for idx, passo in enumerate(passos):
        cls()
        title("🧑‍🏫  MODO ENSINO — PASSO A PASSO", C.MAGENTA)
        print(f"  {C.DIM}[{idx + 1}/{total}]{C.RESET}\n")

        if total == 1:
            prefixo = f"  {C.MAGENTA}{C.BOLD}✦  Solução:{C.RESET}\n\n"
        elif idx == 0:
            prefixo = f"  {C.CYAN}{C.BOLD}①  Ponto de partida:{C.RESET}\n\n"
        elif idx == total - 1:
            prefixo = f"  {C.GREEN}{C.BOLD}✓  Resultado final:{C.RESET}\n\n"
        else:
            prefixo = f"  {C.YELLOW}{C.BOLD}{_CIRC[min(idx-1,7)]}  Passo {idx + 1}:{C.RESET}\n\n"

        sys.stdout.write(prefixo)
        sys.stdout.flush()

        for sublinha in passo.splitlines():
            _tw(f"  {C.WHITE}{sublinha}{C.RESET}\n")

        print()

        if idx < total - 1:
            flush_stdin()
            r = ask(f"  {C.DIM}[Enter] próximo  ·  [m] sair do ensino{C.RESET}  ").lower().strip()
            if r == "m":
                return

    print(f"\n  {C.GREEN}{C.BOLD}🎯  Agora você sabe como resolver essa questão!{C.RESET}")
    print(f"  {C.DIM}Tente de novo na próxima sessão para fixar.{C.RESET}\n")
    pause()


def _ensinar_mc(q: dict):
    """Ensino para MC/MULTI: analisa cada alternativa e explica o motivo."""
    cls()
    title("🧑‍🏫  MODO ENSINO — ANÁLISE DAS OPÇÕES", C.MAGENTA)

    print(f"\n  {C.WHITE}{C.BOLD}{q['pergunta']}{C.RESET}\n")
    hr(C.MAGENTA)

    opcoes   = q.get("opcoes", [])
    resp     = q.get("resposta", "")
    corretas = resp if isinstance(resp, list) else [resp]

    print(f"\n  {C.DIM}Vamos analisar cada opção:{C.RESET}\n")

    for i, op in enumerate(opcoes):
        letra = chr(ord("A") + i)
        e_correta = letra in corretas
        cor = C.GREEN if e_correta else C.RED
        icone = "✓" if e_correta else "✗"
        print(f"  {cor}{C.BOLD}{icone} {letra}){C.RESET}  {op}")

    print()
    print(f"  {C.CYAN}💡 {q.get('explicacao', '')}{C.RESET}")
    print()
    print(f"  {C.GREEN}{C.BOLD}🎯  Resposta correta: {', '.join(corretas)}{C.RESET}")
    print(f"  {C.DIM}Releia a explicação acima para entender o porquê.{C.RESET}\n")
    pause()


# ─── Helpers ──────────────────────────────────────────────────────────────────

def _aviso_ia(q):
    if q.get("gabarito_ia"):
        print(f"\n  {C.YELLOW}⚠  Gabarito revisado por IA — aguarda confirmação oficial.{C.RESET}")


def cabecalho_questao(q, n, total):
    _TIER = {
        "S": (C.RED,    "◆ CRÍTICO"),
        "A": (C.YELLOW, "◈ IMPORTANTE"),
        "B": (C.BLUE,   "◇ COMPLEMENTAR"),
    }
    cor, label = _TIER.get(q.get("tier", "B"), (C.DIM, "◇"))
    topico_nome = TOPICOS.get(q["topico"], q["topico"])
    print(f"  {cor}{C.BOLD}{label}{C.RESET}  "
          f"{C.DIM}{n}/{total}  ·  {topico_nome}{C.RESET}")
    hr(C.DIM, 64)
    print(f"\n  {C.WHITE}{C.BOLD}{q['pergunta']}{C.RESET}\n")


# ─── Executores por tipo ──────────────────────────────────────────────────────

def exec_mc(q):
    print()
    opcoes, resposta = _shuffle_opcoes(q["opcoes"], q["resposta"])
    idx = selecionar_opcao(opcoes)
    letter = chr(ord('A') + idx)
    acertou = letter == resposta
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✓  CORRETO!{C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}✗  Incorreto.{C.RESET}  "
              f"{C.DIM}Resposta certa:{C.RESET} {C.YELLOW}{C.BOLD}{resposta}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    _aviso_ia(q)
    return acertou


def exec_multi(q):
    print(f"  {C.YELLOW}Marque todas as alternativas corretas:{C.RESET}\n")
    opcoes, corretas = _shuffle_opcoes(q["opcoes"], q["resposta"])
    indices = selecionar_multiplas(opcoes)
    letras  = [chr(ord('A') + i) for i in indices]
    acertou  = sorted(letras) == corretas
    marcadas = ", ".join(letras) if letras else f"{C.DIM}(nenhuma){C.RESET}"
    print(f"\n  Marcadas: {C.BOLD}{marcadas}{C.RESET}")
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✓  CORRETO!{C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}✗  Incorreto.{C.RESET}  "
              f"{C.DIM}Corretas:{C.RESET} {C.YELLOW}{C.BOLD}{', '.join(corretas)}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    _aviso_ia(q)
    return acertou


def exec_escreva(q):
    print(f"  {C.YELLOW}✍  Escreva sua resposta (Enter em branco duas vezes para terminar):{C.RESET}\n")
    linhas = []
    while True:
        l = ask("  > ")
        if l == "" and linhas and linhas[-1] == "":
            break
        linhas.append(l)
    print(f"\n  {C.CYAN}Resposta esperada:{C.RESET}")
    for linha in q["resposta_esperada"].splitlines():
        print(f"  {linha}")
    _aviso_ia(q)
    print(f"\n  {C.YELLOW}Avalie-se (1–5):{C.RESET}")
    _NOTAS = [
        ("1", "Não sabia nada"),
        ("2", "Sabia pouco"),
        ("3", "Sabia parcialmente"),
        ("4", "Sabia a maior parte"),
        ("5", "Sabia tudo / muito próximo"),
    ]
    for n, d in _NOTAS:
        print(f"  {C.YELLOW}[{n}]{C.RESET}  {d}")
    while True:
        v = ask("\n  › ")
        if v in "12345" and len(v) == 1:
            v = int(v)
            break
    _MSGS = {
        5: f"{C.GREEN}🎯 Excelente!",
        4: f"{C.GREEN}✓  Bom!",
        3: f"{C.YELLOW}⚡ Razoável — vale reler este tópico.",
        2: f"{C.RED}📖 Precisa de atenção.",
        1: f"{C.RED}📖 Escreva sobre este tópico ainda hoje!",
    }
    print(f"\n  {_MSGS[v]}{C.RESET}")
    return v >= 4


def exec_soma(q):
    """Questão soma-de-itens (banco regular — formato dict)."""
    itens = q["itens"]
    print(f"  {C.YELLOW}Some os valores das afirmativas CORRETAS:{C.RESET}\n")
    for val, (_status, texto) in itens.items():
        print(f"  {C.BOLD}{val}{C.RESET})  {texto}")
    print(f"\n  {C.DIM}Item errado marcado como certo anula os corretos.{C.RESET}")
    while True:
        r = ask("\n  Sua soma: ").strip()
        try:
            val = int(r)
            break
        except Exception:
            print(f"  {C.RED}Digite apenas o número da soma.{C.RESET}")

    correto  = int(q["resposta"])
    acertou  = val == correto
    corretas = [v for v, (s, _) in itens.items() if s == "CORRETA"]

    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✓  CORRETO! Soma = {correto}{C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}✗  Sua soma: {val}{C.RESET}  "
              f"{C.DIM}Correto:{C.RESET} {C.YELLOW}{C.BOLD}{correto}{C.RESET}")

    # Gabarito detalhado por item
    print(f"\n  {C.CYAN}Gabarito  ({' + '.join(corretas)} = {correto}):{C.RESET}")
    for v, (s, texto) in itens.items():
        if s == "CORRETA":
            print(f"  {C.GREEN}  ✓ {v}{C.RESET}  {texto}")
        else:
            print(f"  {C.RED}  ✗ {v}{C.RESET}  {C.DIM}{texto}{C.RESET}")

    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    _aviso_ia(q)
    return acertou


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
    tol     = float(q.get("tolerancia", 0))
    acertou = abs(val - correto) <= max(tol, 0.001)
    unid    = q.get("unidade", "")
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✓  CORRETO!{C.RESET}  {C.DIM}({correto} {unid}){C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}✗  Incorreto.{C.RESET}  "
              f"{C.DIM}Correto:{C.RESET} {C.YELLOW}{C.BOLD}{correto} {unid}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    _aviso_ia(q)
    return acertou


def exec_complete(q):
    print(f"  {C.YELLOW}✏  Preencha os espaços em branco:{C.RESET}\n")
    ask("  Sua resposta: ")
    print(f"\n  {C.CYAN}Esperado:{C.RESET}  {q['resposta']}")
    print(f"  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    _aviso_ia(q)
    while True:
        v = ask("\n  Você acertou? (s/n): ").lower()
        if v in ("s", "n", "sim", "não", "nao"):
            break
    return v.startswith("s")


# ─── Loop principal ───────────────────────────────────────────────────────────

def rodar_lista_questoes(qs, prog, cor=C.BLUE, embaralhar=True, mostrar_resultado=True):
    """Roda uma lista de questões com navegação.
    Atualiza e salva progresso. Retorna 'menu' se o usuário saiu, senão None.
    """
    from core.progress import save_progress

    qs = list(qs)
    if embaralhar:
        random.shuffle(qs)
    i = 0
    seen: set[int] = set()
    corretas = 0
    while i < len(qs):
        q = qs[i]
        cls()
        hr(cor)
        primeira_vez = i not in seen
        acertou = rodar_questao(q, i + 1, len(qs), prog, update_prog=primeira_vez)
        if primeira_vez:
            seen.add(i)
            corretas += int(acertou)
            save_progress(prog)

        extras = {"e": "ensinar passo a passo"} if not acertou else None
        nav    = nav_prompt(i, len(qs), extras=extras)

        if nav == "e":
            exec_ensinar(q)
            nav = nav_prompt(i, len(qs))

        if nav == "voltar":
            i -= 1
        elif nav == "menu":
            return "menu"
        else:
            i += 1

    if mostrar_resultado and seen:
        resultado_sessao(corretas, len(seen))
        pause()
    return None


def rodar_questao(q, n, total, prog, update_prog=True):
    cabecalho_questao(q, n, total)
    t = q["tipo"]
    if   t == "MC":      acertou = exec_mc(q)
    elif t == "MULTI":   acertou = exec_multi(q)
    elif t == "SOMA":    acertou = exec_soma(q)
    elif t == "ESCREVA": acertou = exec_escreva(q)
    elif t == "CALC":    acertou = exec_calc(q)
    else:                acertou = exec_complete(q)
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
