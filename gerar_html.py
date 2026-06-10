#!/usr/bin/env python3
"""Gera a versao web estatica do RoboEstudo.

Saida:
  Html-Simulados/index.html
  Html-Simulados/styles.css
  Html-Simulados/app.js
  Html-Simulados/dados.js
"""

from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent
OUT_DIR = ROOT / "Html-Simulados"
AULAS_DIR = ROOT / "aulas"


def prova_de_topico(topico: str) -> str:
    return "p2" if str(topico).startswith("p2_") else "p1"


def opcoes_limpas(opcoes: list[str] | None) -> list[str]:
    limpas = []
    for opcao in opcoes or []:
        texto = str(opcao).strip()
        if len(texto) > 3 and texto[1:3] == ") " and texto[0].isalpha():
            texto = texto[3:].strip()
        limpas.append(texto)
    return limpas


def resposta_lista(resposta: Any) -> list[str]:
    if isinstance(resposta, list):
        return [str(r) for r in resposta]
    if resposta is None:
        return []
    return [str(resposta)]


def normalizar_itens_soma(itens: Any) -> list[dict[str, Any]]:
    if isinstance(itens, list):
        normalizados = []
        for item in itens:
            normalizados.append(
                {
                    "valor": str(item.get("valor", "")),
                    "texto": str(item.get("texto", "")),
                    "correto": bool(item.get("correto", False)),
                    "motivo": item.get("motivo", ""),
                }
            )
        return normalizados

    if isinstance(itens, dict):
        normalizados = []
        for valor, payload in itens.items():
            status, texto = payload
            normalizados.append(
                {
                    "valor": str(valor),
                    "texto": str(texto),
                    "correto": status == "CORRETA",
                    "motivo": "",
                }
            )
        return normalizados

    return []


def normalizar_questao(q: dict[str, Any], origem: str, indice: int) -> dict[str, Any]:
    topico = str(q.get("topico", "geral"))
    tipo = str(q.get("tipo", "MC")).upper()
    pergunta = q.get("pergunta") or q.get("enunciado") or ""
    qid = str(q.get("id") or f"{origem}_{indice:04d}")

    dados = {
        "id": qid,
        "origem": origem,
        "prova": prova_de_topico(topico),
        "topico": topico,
        "tipo": tipo,
        "tier": q.get("tier", ""),
        "pergunta": str(pergunta),
        "opcoes": opcoes_limpas(q.get("opcoes")),
        "resposta": q.get("resposta", ""),
        "respostas": resposta_lista(q.get("resposta")),
        "explicacao": q.get("explicacao") or q.get("resposta_esperada") or "",
        "resposta_esperada": q.get("resposta_esperada", ""),
        "passos": q.get("passos", []),
        "unidade": q.get("unidade", ""),
        "tolerancia": q.get("tolerancia", 0),
        "itens": normalizar_itens_soma(q.get("itens")),
    }
    return dados


def carregar_aulas(topicos: dict[str, str], aulas_map: dict[str, list[str]]) -> list[dict[str, Any]]:
    aulas = []
    seen = set()
    for topico, arquivos in aulas_map.items():
        for nome in arquivos:
            caminho = AULAS_DIR / nome
            if not caminho.exists() or nome in seen:
                continue
            seen.add(nome)
            aulas.append(
                {
                    "id": nome.replace(".md", ""),
                    "arquivo": nome,
                    "prova": prova_de_topico(topico),
                    "topico": topico,
                    "topicoNome": topicos.get(topico, topico),
                    "titulo": nome.replace(".md", "").replace("_", " ").title(),
                    "conteudo": caminho.read_text(encoding="utf-8", errors="replace"),
                }
            )
    return aulas


def carregar_dados() -> dict[str, Any]:
    from data.avaliacoes import AVALIACOES
    from data.avaliacoes.p2_simulado import AVALIACOES_P2 as SIMULADOS_P2
    from data.flashcards import FLASHCARDS
    from data.questoes import QUESTOES
    from data.topicos import AULAS_MAP, TOPICOS, topico_canonico

    questoes = []
    for i, q in enumerate(QUESTOES, 1):
        q = dict(q)
        q["topico"] = topico_canonico(q.get("topico", "geral"))
        questoes.append(normalizar_questao(q, "banco", i))

    offset = len(questoes)
    for i, q in enumerate(AVALIACOES, 1):
        questoes.append(normalizar_questao(dict(q), "avaliacao", offset + i))

    simulados = []
    sim_questions = []
    for sim in SIMULADOS_P2:
        sid = str(sim.get("id", f"simulado_{len(simulados) + 1}"))
        perguntas = []
        for i, q in enumerate(sim.get("questoes", []), 1):
            nq = normalizar_questao(dict(q), "simulado", i)
            nq["id"] = f"{sid}_q{i}"
            nq["prova"] = "p2"
            nq["topico"] = nq.get("topico") if nq.get("topico") != "geral" else "p2_simulado"
            nq["numero"] = q.get("numero", i)
            nq["peso"] = q.get("peso", "")
            nq["gabarito"] = q.get("gabarito", {})
            perguntas.append(nq)
            sim_questions.append(nq)
        simulados.append(
            {
                "id": sid,
                "titulo": sim.get("titulo", sid),
                "prova": "p2",
                "instrucoes": sim.get("instrucoes", ""),
                "questoes": perguntas,
            }
        )

    topicos = [{"id": k, "nome": v, "prova": prova_de_topico(k)} for k, v in TOPICOS.items()]
    aulas = carregar_aulas(TOPICOS, AULAS_MAP)
    flashcards = [
        {"id": f"fc_{i:03d}", "termo": termo, "definicao": definicao, "prova": prova}
        for i, (termo, definicao, prova) in enumerate(FLASHCARDS, 1)
    ]
    legacy_html = sorted(p.name for p in OUT_DIR.glob("simulado_*.html"))

    return {
        "geradoEm": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "topicos": topicos,
        "questoes": questoes + sim_questions,
        "simulados": simulados,
        "aulas": aulas,
        "flashcards": flashcards,
        "legacyHtml": legacy_html,
        "contagens": {
            "questoes": len(questoes) + len(sim_questions),
            "simulados": len(simulados),
            "aulas": len(aulas),
            "flashcards": len(flashcards),
        },
    }


INDEX_HTML = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RoboEstudo Web</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="dados.js"></script>
  <script src="app.js"></script>
</body>
</html>
"""


STYLES_CSS = r"""
:root {
  --bg: #f6f2ea;
  --panel: #fffaf0;
  --panel-strong: #fff3d8;
  --ink: #20211f;
  --muted: #68645b;
  --line: #d9cfbc;
  --brand: #173f4f;
  --brand-2: #0f5964;
  --red: #a73522;
  --green: #3f744b;
  --amber: #9b6a16;
  --blue-soft: #e5f1f2;
  --shadow: 0 18px 45px rgba(37, 32, 24, .12);
}
* { box-sizing: border-box; }
body {
  margin: 0;
  color: var(--ink);
  background:
    linear-gradient(90deg, rgba(23,63,79,.05) 1px, transparent 1px),
    linear-gradient(rgba(23,63,79,.04) 1px, transparent 1px),
    var(--bg);
  background-size: 34px 34px;
  font-family: "Segoe UI", Tahoma, sans-serif;
}
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
.shell { min-height: 100vh; display: grid; grid-template-columns: 280px 1fr; }
.side {
  position: sticky; top: 0; height: 100vh; padding: 24px 18px;
  background: #172c33; color: #fff; border-right: 1px solid rgba(255,255,255,.08);
}
.brand { display: flex; gap: 12px; align-items: center; margin-bottom: 24px; }
.mark {
  width: 44px; height: 44px; border-radius: 8px; display: grid; place-items: center;
  background: #f7c95f; color: #172c33; font-weight: 900; box-shadow: inset 0 -4px rgba(0,0,0,.14);
}
.brand h1 { font-size: 1.15rem; margin: 0; line-height: 1.1; }
.brand small { display: block; margin-top: 4px; color: rgba(255,255,255,.62); }
.nav { display: grid; gap: 8px; }
.nav button {
  width: 100%; border: 0; border-radius: 7px; padding: 11px 12px; text-align: left;
  color: rgba(255,255,255,.76); background: transparent;
}
.nav button.active, .nav button:hover { color: #fff; background: rgba(255,255,255,.12); }
.modebox { margin-top: 22px; padding: 14px; border: 1px solid rgba(255,255,255,.14); border-radius: 8px; }
.modebox label { display: block; margin: 9px 0; color: rgba(255,255,255,.78); }
.modebox input { margin-right: 8px; }
.main { padding: 28px clamp(18px, 4vw, 48px) 70px; }
.topbar { display: flex; justify-content: space-between; align-items: flex-start; gap: 18px; margin-bottom: 24px; }
.kicker { color: var(--red); font-size: .75rem; letter-spacing: .16em; text-transform: uppercase; font-weight: 800; }
h2 { margin: 4px 0 8px; font-size: clamp(1.9rem, 4vw, 3.2rem); line-height: 1; letter-spacing: -.02em; }
.sub { margin: 0; color: var(--muted); max-width: 760px; }
.pill {
  display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line);
  background: var(--panel); border-radius: 999px; padding: 8px 12px; color: var(--muted);
}
.grid { display: grid; gap: 16px; }
.stats { grid-template-columns: repeat(4, minmax(130px, 1fr)); margin-bottom: 18px; }
.card {
  background: var(--panel); border: 1px solid var(--line); border-radius: 8px;
  padding: 18px; box-shadow: 0 10px 25px rgba(40,32,20,.07);
}
.stat strong { display: block; font-size: 2rem; color: var(--brand); line-height: 1; }
.stat span { color: var(--muted); font-size: .9rem; }
.hero {
  display: grid; grid-template-columns: 1.3fr .7fr; gap: 16px; margin-bottom: 20px;
}
.hero .card:first-child { background: linear-gradient(135deg, #fffaf0, #e7f2f2); }
.actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
.btn {
  border: 1px solid var(--brand); background: var(--brand); color: white;
  border-radius: 7px; padding: 10px 14px; font-weight: 800;
}
.btn.secondary { background: transparent; color: var(--brand); }
.btn.danger { border-color: var(--red); background: var(--red); }
.filters {
  display: grid; grid-template-columns: 1fr 170px 220px 180px; gap: 10px; margin-bottom: 16px;
}
.filters input, .filters select, textarea {
  width: 100%; border: 1px solid var(--line); border-radius: 7px; padding: 10px 12px;
  background: #fffefa; color: var(--ink);
}
.list { display: grid; gap: 14px; }
.question h3, .lesson h3, .sim h3 { margin: 0 0 10px; line-height: 1.25; }
.meta { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; color: var(--muted); font-size: .82rem; }
.tag {
  display: inline-flex; align-items: center; border: 1px solid var(--line);
  border-radius: 999px; padding: 3px 9px; background: rgba(255,255,255,.55);
}
.opts { display: grid; gap: 8px; margin: 12px 0; }
.opt {
  display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: flex-start;
  border: 1px solid var(--line); border-radius: 7px; padding: 10px; background: #fffefa;
}
.opt input { margin-top: 4px; }
.bit { color: var(--red); font-weight: 900; min-width: 30px; display: inline-block; }
.result {
  display: none; margin-top: 12px; border-left: 4px solid var(--brand);
  background: var(--blue-soft); padding: 12px; border-radius: 0 7px 7px 0;
}
.result.show { display: block; }
.correct { border-color: rgba(63,116,75,.45); background: #eef7ed; }
.wrong { border-color: rgba(167,53,34,.45); background: #faebe6; }
.open-answer { min-height: 90px; resize: vertical; }
.lesson article {
  max-height: 440px; overflow: auto; white-space: pre-wrap; line-height: 1.65;
  background: #fffefa; border: 1px solid var(--line); border-radius: 7px; padding: 16px;
}
.flashcard { min-height: 180px; display: grid; align-content: center; text-align: center; }
.flashcard button { margin-top: 16px; }
.hidden { display: none !important; }
.progress-row { display: grid; grid-template-columns: 160px 1fr 70px; gap: 12px; align-items: center; }
.bar { height: 12px; border-radius: 999px; background: #e5dccb; overflow: hidden; }
.bar i { display: block; height: 100%; background: var(--green); width: 0%; }
.empty { color: var(--muted); border: 1px dashed var(--line); padding: 24px; border-radius: 8px; background: rgba(255,250,240,.62); }
@media (max-width: 920px) {
  .shell { grid-template-columns: 1fr; }
  .side { position: relative; height: auto; }
  .nav { grid-template-columns: repeat(2, 1fr); }
  .hero, .stats, .filters { grid-template-columns: 1fr; }
  .topbar { display: block; }
}
"""


APP_JS = r"""
const DATA = window.ROBO_DADOS;
const state = {
  view: "dashboard",
  mode: localStorage.getItem("roboModo") || "normal",
  prova: "todas",
  topico: "todos",
  origem: "todas",
  busca: "",
  flashIndex: 0,
  flashOpen: false,
};

const PROG_KEY = "roboWebProgress";
const app = document.getElementById("app");

function loadProg() {
  try { return JSON.parse(localStorage.getItem(PROG_KEY)) || {}; }
  catch { return {}; }
}
function saveProg(p) { localStorage.setItem(PROG_KEY, JSON.stringify(p)); }
function ensureProg() {
  const p = loadProg();
  p.answered ||= {};
  p.byTopic ||= {};
  p.mistakes ||= {};
  return p;
}
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function topicName(id) {
  return DATA.topicos.find(t => t.id === id)?.nome || id || "Geral";
}
function isOpen(q) {
  return ["ESCREVA", "ABERTA"].includes(q.tipo) || q.tipo === "CALC" || q.tipo === "COMPLETE";
}
function canMarco(q) {
  return q.tipo === "SOMA" || q.itens?.length || q.opcoes?.length;
}
function valuesFor(n) {
  return ["01","02","04","08","16","32","64","128"].slice(0, Math.max(n, 1));
}
function objectiveItems(q) {
  if (q.itens?.length) return q.itens;
  const valores = valuesFor(q.opcoes.length);
  const corretas = new Set(q.respostas);
  return q.opcoes.map((texto, i) => {
    const letra = String.fromCharCode(65 + i);
    return { valor: valores[i], texto, correto: corretas.has(letra), motivo: "" };
  });
}
function correctSum(items) {
  return items.filter(i => i.correto).reduce((t, i) => t + Number(i.valor), 0);
}
function selectedFor(id) {
  return [...document.querySelectorAll(`[name="${CSS.escape(id)}"]:checked`)].map(i => i.value);
}
function record(q, ok, score = null) {
  const p = ensureProg();
  p.answered[q.id] = { ok, score, at: new Date().toISOString(), topic: q.topico, prova: q.prova };
  p.byTopic[q.topico] ||= { total: 0, correct: 0 };
  p.byTopic[q.topico].total += 1;
  p.byTopic[q.topico].correct += ok ? 1 : 0;
  if (!ok) p.mistakes[q.id] = (p.mistakes[q.id] || 0) + 1;
  saveProg(p);
}
function pct(a,b){ return b ? Math.round(a / b * 100) : 0; }

function layout(content) {
  const navs = [
    ["dashboard", "Dashboard"],
    ["simulados", "Simulados"],
    ["questoes", "Questoes"],
    ["aulas", "Aulas"],
    ["flashcards", "Flashcards"],
    ["progresso", "Progresso"],
  ];
  app.innerHTML = `
    <div class="shell">
      <aside class="side">
        <div class="brand"><div class="mark">SE</div><div><h1>RoboEstudo Web</h1><small>Sistemas Embarcados</small></div></div>
        <div class="nav">${navs.map(([id,label]) => `<button class="${state.view===id?'active':''}" data-view="${id}">${label}</button>`).join("")}</div>
        <div class="modebox">
          <strong>Modo de estudo</strong>
          <label><input type="radio" name="modo" value="normal" ${state.mode==="normal"?"checked":""}> Normal / calmo</label>
          <label><input type="radio" name="modo" value="marco" ${state.mode==="marco"?"checked":""}> Marco Camara</label>
        </div>
      </aside>
      <main class="main">${content}</main>
    </div>`;
  document.querySelectorAll("[data-view]").forEach(b => b.onclick = () => { state.view = b.dataset.view; render(); });
  document.querySelectorAll("[name=modo]").forEach(r => r.onchange = () => {
    state.mode = r.value; localStorage.setItem("roboModo", state.mode); render();
  });
}

function header(title, subtitle) {
  return `<div class="topbar"><div><div class="kicker">RoboEstudo Web</div><h2>${title}</h2><p class="sub">${subtitle}</p></div><span class="pill">Gerado em ${esc(DATA.geradoEm)}</span></div>`;
}

function dashboard() {
  const p = ensureProg();
  const answered = Object.values(p.answered || {});
  const total = answered.length;
  const correct = answered.filter(a => a.ok).length;
  const weak = Object.entries(p.byTopic || {}).sort((a,b) => pct(a[1].correct,a[1].total)-pct(b[1].correct,b[1].total)).slice(0,3);
  layout(`
    ${header("Dashboard de estudo", "Tudo que estava no terminal agora tambem aparece em uma central HTML local, com modo normal e modo Marco Camara.")}
    <section class="grid stats">
      <div class="card stat"><strong>${DATA.contagens.questoes}</strong><span>questoes</span></div>
      <div class="card stat"><strong>${DATA.contagens.simulados}</strong><span>simulados</span></div>
      <div class="card stat"><strong>${DATA.contagens.aulas}</strong><span>aulas</span></div>
      <div class="card stat"><strong>${DATA.contagens.flashcards}</strong><span>flashcards</span></div>
    </section>
    <section class="hero">
      <div class="card">
        <h3>Atalho de prova</h3>
        <p>Comece pelos simulados no estilo soma-de-itens ou filtre o banco completo por P1/P2.</p>
        <div class="actions">
          <button class="btn" onclick="go('simulados')">Abrir simulados</button>
          <button class="btn secondary" onclick="go('questoes')">Banco de questoes</button>
          <button class="btn secondary" onclick="setMarco()">Modo Marco Camara</button>
        </div>
      </div>
      <div class="card">
        <h3>Seu progresso web</h3>
        <p><strong>${correct}/${total}</strong> respostas corretas (${pct(correct,total)}%).</p>
        <div class="bar"><i style="width:${pct(correct,total)}%"></i></div>
      </div>
    </section>
    <section class="card">
      <h3>Revisao recomendada</h3>
      ${weak.length ? weak.map(([t,v]) => `<div class="progress-row"><span>${esc(topicName(t))}</span><div class="bar"><i style="width:${pct(v.correct,v.total)}%"></i></div><b>${pct(v.correct,v.total)}%</b></div>`).join("") : `<div class="empty">Responda algumas questoes para o painel indicar pontos fracos.</div>`}
    </section>
  `);
}

function filteredQuestions() {
  return DATA.questoes.filter(q => {
    const hay = `${q.pergunta} ${q.explicacao} ${topicName(q.topico)}`.toLowerCase();
    return (state.prova === "todas" || q.prova === state.prova)
      && (state.topico === "todos" || q.topico === state.topico)
      && (state.origem === "todas" || q.origem === state.origem)
      && (!state.busca || hay.includes(state.busca.toLowerCase()));
  });
}

function filters() {
  const topics = DATA.topicos.filter(t => state.prova === "todas" || t.prova === state.prova);
  return `<div class="filters">
    <input id="busca" placeholder="Buscar assunto, palavra-chave..." value="${esc(state.busca)}">
    <select id="prova"><option value="todas">P1 + P2</option><option value="p1">Prova 1</option><option value="p2">Prova 2</option></select>
    <select id="topico"><option value="todos">Todos os topicos</option>${topics.map(t => `<option value="${t.id}">${esc(t.nome)}</option>`).join("")}</select>
    <select id="origem"><option value="todas">Todas origens</option><option value="banco">Banco</option><option value="avaliacao">Avaliacoes</option><option value="simulado">Simulados</option></select>
  </div>`;
}
function wireFilters() {
  document.getElementById("busca").oninput = e => { state.busca = e.target.value; render(); };
  document.getElementById("prova").value = state.prova;
  document.getElementById("topico").value = state.topico;
  document.getElementById("origem").value = state.origem;
  document.getElementById("prova").onchange = e => { state.prova = e.target.value; state.topico = "todos"; render(); };
  document.getElementById("topico").onchange = e => { state.topico = e.target.value; render(); };
  document.getElementById("origem").onchange = e => { state.origem = e.target.value; render(); };
}

function questionCard(q, prefix="q") {
  const id = `${prefix}_${q.id}`.replace(/[^a-zA-Z0-9_-]/g, "_");
  const marco = state.mode === "marco" && canMarco(q);
  return `<article class="card question" id="card_${id}">
    <div class="meta"><span class="tag">${q.prova.toUpperCase()}</span><span class="tag">${esc(topicName(q.topico))}</span><span class="tag">${esc(q.origem)}</span><span class="tag">${esc(q.tipo)}</span></div>
    <h3>${esc(q.pergunta)}</h3>
    ${marco ? marcoQuestion(q, id) : normalQuestion(q, id)}
  </article>`;
}
function normalQuestion(q, id) {
  if (q.tipo === "MC" || q.tipo === "MULTI") {
    const multi = q.tipo === "MULTI";
    return `<div class="opts">${q.opcoes.map((op,i) => {
      const letra = String.fromCharCode(65+i);
      return `<label class="opt"><input type="${multi?'checkbox':'radio'}" name="${id}" value="${letra}"><b>${letra})</b><span>${esc(op)}</span></label>`;
    }).join("")}</div><button class="btn" onclick="checkNormal('${id}','${q.id}')">Corrigir</button><div class="result" id="res_${id}"></div>`;
  }
  if (q.tipo === "SOMA" || q.itens?.length) return marcoQuestion(q, id);
  return `<textarea class="open-answer" placeholder="Escreva sua resposta aqui para treinar..."></textarea>
    <div class="actions"><button class="btn" onclick="showOpen('${id}','${q.id}',true)">Mostrar gabarito / acertei</button><button class="btn secondary" onclick="showOpen('${id}','${q.id}',false)">Mostrar gabarito / errei</button></div>
    <div class="result" id="res_${id}"></div>`;
}
function marcoQuestion(q, id) {
  const items = objectiveItems(q);
  return `<p class="sub">Some as afirmativas corretas. Errada marcada desconta pontos das certas.</p>
    <div class="opts">${items.map((it,i) => `<label class="opt"><input type="checkbox" name="${id}" value="${i}"><span class="bit">${esc(it.valor)}</span><span>${esc(it.texto)}</span></label>`).join("")}</div>
    <button class="btn" onclick="checkMarco('${id}','${q.id}')">Corrigir soma</button><div class="result" id="res_${id}"></div>`;
}
function findQ(qid) { return DATA.questoes.find(q => q.id === qid) || DATA.simulados.flatMap(s => s.questoes).find(q => q.id === qid); }
function checkNormal(id, qid) {
  const q = findQ(qid), selected = selectedFor(id).sort(), correct = q.respostas.slice().sort();
  const ok = JSON.stringify(selected) === JSON.stringify(correct);
  record(q, ok);
  document.getElementById(`res_${id}`).className = "result show";
  document.getElementById(`res_${id}`).innerHTML = `<b>${ok ? "Correto." : "Incorreto."}</b> Resposta: ${esc(correct.join(", "))}<br>${esc(q.explicacao)}`;
}
function checkMarco(id, qid) {
  const q = findQ(qid), items = objectiveItems(q), selected = selectedFor(id).map(Number);
  let gained = 0, lost = 0;
  selected.forEach(i => items[i]?.correto ? gained += Number(items[i].valor) : lost += Number(items[i].valor));
  const score = Math.max(0, gained - lost), expected = correctSum(items), ok = score === expected;
  record(q, ok, score);
  const details = items.map((it,i) => `${it.correto ? "CERTO" : "ERRADO"} ${it.valor}: ${esc(it.motivo || it.texto)}`).join("<br>");
  document.getElementById(`res_${id}`).className = "result show";
  document.getElementById(`res_${id}`).innerHTML = `<b>${ok ? "Soma correta." : "Soma incorreta."}</b> Sua pontuacao: ${score}. Soma correta: ${expected}.<br><br>${details}<br><br>${esc(q.explicacao || q.resposta_esperada || "")}`;
}
function showOpen(id, qid, ok) {
  const q = findQ(qid); record(q, ok);
  document.getElementById(`res_${id}`).className = "result show";
  document.getElementById(`res_${id}`).innerHTML = `<b>Gabarito esperado:</b><br>${esc(q.resposta_esperada || q.explicacao || JSON.stringify(q.gabarito || q.resposta))}`;
}

function questoes() {
  const qs = filteredQuestions();
  layout(`${header("Banco completo", "Filtre por prova, topico e origem. No modo Marco Camara, questoes objetivas viram soma-de-itens.")}${filters()}<div class="list">${qs.slice(0,80).map(q => questionCard(q)).join("") || `<div class="empty">Nada encontrado.</div>`}</div>`);
  wireFilters();
}
function simulados() {
  layout(`${header("Simulados", "Simulados gerados a partir do Python, com correcao automatica e modo soma-de-itens.")}<div class="list">${DATA.simulados.map(s => `<section class="card sim"><h3>${esc(s.titulo)}</h3><p>${esc(s.instrucoes)}</p><div class="actions"><button class="btn" onclick="openSim('${s.id}')">Abrir simulado</button></div><div id="sim_${s.id}" class="list hidden">${s.questoes.map(q => questionCard(q, s.id)).join("")}</div></section>`).join("")}<section class="card"><h3>HTMLs antigos</h3>${DATA.legacyHtml.map(h => `<a class="tag" href="${esc(h)}">${esc(h)}</a>`).join(" ")}</section></div>`);
}
function aulas() {
  const lessons = DATA.aulas.filter(a => state.prova === "todas" || a.prova === state.prova);
  layout(`${header("Aulas", "Leitura dos arquivos Markdown do projeto, agrupada por prova e topico.")}<div class="filters"><input id="busca" placeholder="Buscar aula..." value="${esc(state.busca)}"><select id="prova"><option value="todas">P1 + P2</option><option value="p1">Prova 1</option><option value="p2">Prova 2</option></select><span></span><span></span></div><div class="list">${lessons.filter(a => !state.busca || `${a.titulo} ${a.conteudo}`.toLowerCase().includes(state.busca.toLowerCase())).map(a => `<article class="card lesson"><div class="meta"><span class="tag">${a.prova.toUpperCase()}</span><span class="tag">${esc(a.topicoNome)}</span><span class="tag">${esc(a.arquivo)}</span></div><h3>${esc(a.titulo)}</h3><article>${esc(a.conteudo)}</article></article>`).join("")}</div>`);
  document.getElementById("busca").oninput = e => { state.busca = e.target.value; render(); };
  document.getElementById("prova").value = state.prova;
  document.getElementById("prova").onchange = e => { state.prova = e.target.value; render(); };
}
function flashcards() {
  const cards = DATA.flashcards.filter(f => state.prova === "todas" || f.prova === state.prova);
  if (state.flashIndex >= cards.length) state.flashIndex = 0;
  const c = cards[state.flashIndex];
  layout(`${header("Flashcards", "Revise termos e definicoes rapidamente.")}<div class="filters"><span></span><select id="prova"><option value="todas">P1 + P2</option><option value="p1">Prova 1</option><option value="p2">Prova 2</option></select><span></span><span></span></div>${c ? `<div class="card flashcard"><div class="meta"><span class="tag">${c.prova.toUpperCase()}</span><span class="tag">${state.flashIndex+1}/${cards.length}</span></div><h3>${esc(c.termo)}</h3><p>${state.flashOpen ? esc(c.definicao) : "Clique para revelar a definicao."}</p><div class="actions"><button class="btn" onclick="flipCard()">${state.flashOpen ? "Ocultar" : "Revelar"}</button><button class="btn secondary" onclick="nextCard()">Proximo</button></div></div>` : `<div class="empty">Nenhum flashcard.</div>`}`);
  document.getElementById("prova").value = state.prova;
  document.getElementById("prova").onchange = e => { state.prova = e.target.value; state.flashIndex = 0; state.flashOpen = false; render(); };
}
function progresso() {
  const p = ensureProg();
  const rows = Object.entries(p.byTopic || {});
  layout(`${header("Progresso", "Historico salvo localmente neste navegador.")}<section class="card"><h3>Por topico</h3>${rows.length ? rows.map(([t,v]) => `<div class="progress-row"><span>${esc(topicName(t))}</span><div class="bar"><i style="width:${pct(v.correct,v.total)}%"></i></div><b>${pct(v.correct,v.total)}%</b></div>`).join("") : `<div class="empty">Sem respostas registradas ainda.</div>`}<div class="actions"><button class="btn danger" onclick="resetProgress()">Zerar progresso web</button></div></section>`);
}

function go(v){ state.view = v; render(); }
function setMarco(){ state.mode = "marco"; localStorage.setItem("roboModo","marco"); state.view = "questoes"; render(); }
function openSim(id){ document.getElementById(`sim_${id}`)?.classList.toggle("hidden"); }
function flipCard(){ state.flashOpen = !state.flashOpen; render(); }
function nextCard(){ state.flashIndex++; state.flashOpen = false; render(); }
function resetProgress(){ if(confirm("Zerar progresso web deste navegador?")){ localStorage.removeItem(PROG_KEY); render(); } }
function render() {
  if (state.view === "dashboard") return dashboard();
  if (state.view === "simulados") return simulados();
  if (state.view === "questoes") return questoes();
  if (state.view === "aulas") return aulas();
  if (state.view === "flashcards") return flashcards();
  if (state.view === "progresso") return progresso();
}
render();
"""


def escrever_saida(dados: dict[str, Any]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "index.html").write_text(INDEX_HTML, encoding="utf-8")
    (OUT_DIR / "styles.css").write_text(STYLES_CSS.strip() + "\n", encoding="utf-8")
    (OUT_DIR / "app.js").write_text(APP_JS.strip() + "\n", encoding="utf-8")
    payload = "window.ROBO_DADOS = " + json.dumps(dados, ensure_ascii=False, indent=2) + ";\n"
    (OUT_DIR / "dados.js").write_text(payload, encoding="utf-8")


def main() -> None:
    dados = carregar_dados()
    escrever_saida(dados)
    print(f"Gerado: {OUT_DIR / 'index.html'}")
    print(
        f"{dados['contagens']['questoes']} questoes, "
        f"{dados['contagens']['simulados']} simulados, "
        f"{dados['contagens']['aulas']} aulas, "
        f"{dados['contagens']['flashcards']} flashcards."
    )


if __name__ == "__main__":
    main()
