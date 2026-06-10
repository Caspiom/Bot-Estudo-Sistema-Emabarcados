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

/* ─── Progress storage ─── */
function loadProg() {
  try { return JSON.parse(localStorage.getItem(PROG_KEY)) || {}; }
  catch { return {}; }
}
function saveProg(p) { localStorage.setItem(PROG_KEY, JSON.stringify(p)); }
function ensureProg() {
  const p = loadProg();
  p.answered ||= {};
  p.byTopic  ||= {};
  p.mistakes ||= {};
  return p;
}

/* ─── Helpers ─── */
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}
function topicName(id) {
  return DATA.topicos.find(t => t.id === id)?.nome || id || "Geral";
}
function isOpen(q) {
  return ["ESCREVA","ABERTA","CALC","COMPLETE"].includes(q.tipo);
}
function canMarco(q) {
  return q.tipo === "SOMA" || q.itens?.length || q.opcoes?.length;
}
function valuesFor(n) {
  return ["01","02","04","08","16","32","64","128"].slice(0, Math.max(n, 1));
}
function objectiveItems(q) {
  if (q.itens?.length) return q.itens;
  const valores  = valuesFor(q.opcoes.length);
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
  p.byTopic[q.topico].total   += 1;
  p.byTopic[q.topico].correct += ok ? 1 : 0;
  if (!ok) p.mistakes[q.id] = (p.mistakes[q.id] || 0) + 1;
  saveProg(p);
}
function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
function barCls(p) { return p >= 70 ? '' : p >= 40 ? 'warn' : 'bad'; }
function findQ(qid) {
  return DATA.questoes.find(q => q.id === qid)
    || DATA.simulados.flatMap(s => s.questoes).find(q => q.id === qid);
}

/* ─── Score ring SVG ─── */
function scoreRing(p, size = 88) {
  const r = (size - 6) / 2, circ = +(2 * Math.PI * r).toFixed(2);
  const offset = +(circ * (1 - p / 100)).toFixed(2);
  const color  = p >= 70 ? 'var(--green)' : p >= 40 ? 'var(--amber)' : 'var(--red)';
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none"
        stroke="var(--border-2)" stroke-width="5"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none"
        stroke="${color}" stroke-width="5"
        stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
        stroke-linecap="round"
        transform="rotate(-90 ${size/2} ${size/2})"/>
    </svg>`;
}

/* ─── Nav icons (unicode — cross-platform safe) ─── */
const NAV_ICONS = {
  dashboard:  '◈',
  simulados:  '▦',
  questoes:   '≡',
  aulas:      '◉',
  flashcards: '⟡',
  progresso:  '◑',
};

/* ─── Layout shell ─── */
function layout(content) {
  const navs = [
    ["dashboard",  "Dashboard"],
    ["simulados",  "Simulados"],
    ["questoes",   "Questões"],
    ["aulas",      "Aulas"],
    ["flashcards", "Flashcards"],
    ["progresso",  "Progresso"],
  ];

  const navHtml = navs.map(([id, label]) => `
    <button class="nav-item ${state.view === id ? 'active' : ''}" data-view="${id}">
      <span class="nav-icon">${NAV_ICONS[id]}</span>${esc(label)}
    </button>`).join("");

  app.innerHTML = `
    <div class="shell">
      <aside class="side">
        <div class="side-inner">
          <div class="brand">
            <div class="brand-icon">SE</div>
            <div class="brand-text">
              <h1>RoboEstudo</h1>
              <small>Sistemas Embarcados</small>
            </div>
          </div>
          <nav class="nav">
            <div class="nav-label">Navegação</div>
            ${navHtml}
          </nav>
          <div class="modebox">
            <div class="modebox-title">Modo de questões</div>
            <label><input type="radio" name="modo" value="normal" ${state.mode==="normal"?"checked":""}> Normal / calmo</label>
            <label><input type="radio" name="modo" value="marco" ${state.mode==="marco"?"checked":""}> Marco Câmara</label>
            <div class="modebox-desc">Marco Câmara converte questões objetivas em soma-de-itens (01·02·04·08…)</div>
          </div>
        </div>
      </aside>
      <main class="main">${content}</main>
    </div>`;

  document.querySelectorAll("[data-view]").forEach(b =>
    b.onclick = () => { state.view = b.dataset.view; render(); });
  document.querySelectorAll("[name=modo]").forEach(r =>
    r.onchange = () => { state.mode = r.value; localStorage.setItem("roboModo", state.mode); render(); });
}

/* ─── Section header ─── */
function header(title, subtitle) {
  return `
    <div class="topbar">
      <div>
        <div class="kicker">RoboEstudo Web</div>
        <h2>${esc(title)}</h2>
        <p class="sub">${esc(subtitle)}</p>
      </div>
      <span class="pill">
        <span class="pill-dot"></span>
        Gerado em ${esc(DATA.geradoEm)}
      </span>
    </div>`;
}

/* ─── Dashboard ─── */
function dashboard() {
  const p       = ensureProg();
  const ans     = Object.values(p.answered || {});
  const total   = ans.length;
  const correct = ans.filter(a => a.ok).length;
  const score   = pct(correct, total);
  const weak    = Object.entries(p.byTopic || {})
    .sort((a, b) => pct(a[1].correct, a[1].total) - pct(b[1].correct, b[1].total))
    .slice(0, 4);

  const weakHtml = weak.length
    ? weak.map(([t, v]) => {
        const p2 = pct(v.correct, v.total);
        return `
          <div class="weak-row">
            <span class="weak-name">${esc(topicName(t))}</span>
            <div class="bar" style="max-width:140px"><i class="${barCls(p2)}" style="width:${p2}%"></i></div>
            <span class="weak-pct">${p2}%</span>
          </div>`;
      }).join("")
    : `<div class="empty">Responda questões para revelar seus pontos fracos.</div>`;

  layout(`
    ${header("Dashboard", "Central de estudos — questões, simulados, aulas e flashcards num só lugar.")}

    <section class="stats">
      <div class="card stat">
        <div class="stat-num">${DATA.contagens.questoes}</div>
        <div class="stat-label">Questões</div>
      </div>
      <div class="card stat">
        <div class="stat-num">${DATA.contagens.simulados}</div>
        <div class="stat-label">Simulados</div>
      </div>
      <div class="card stat">
        <div class="stat-num">${DATA.contagens.aulas}</div>
        <div class="stat-label">Aulas</div>
      </div>
      <div class="card stat">
        <div class="stat-num">${DATA.contagens.flashcards}</div>
        <div class="stat-label">Flashcards</div>
      </div>
    </section>

    <section class="hero">
      <div class="card hero-main">
        <div class="card-title">Atalhos rápidos</div>
        <p class="sub" style="margin-top:6px">Comece pelos simulados no estilo soma-de-itens, filtre o banco por P1/P2, ou ative o modo Marco Câmara para praticar como na prova real.</p>
        <div class="actions">
          <button class="btn" onclick="go('simulados')">▦ Abrir simulados</button>
          <button class="btn secondary" onclick="go('questoes')">≡ Banco completo</button>
          <button class="btn teal" onclick="setMarco()">⟳ Modo Marco Câmara</button>
        </div>
      </div>
      <div class="card score-card">
        <div class="score-ring-wrap">
          ${scoreRing(score)}
          <div class="score-center">
            <span class="score-pct">${score}%</span>
            <span class="score-legend">acerto</span>
          </div>
        </div>
        <div class="score-nums">${correct} / ${total}</div>
        <div class="score-sub">respostas corretas</div>
      </div>
    </section>

    <section class="card" style="animation: fadeSlide .35s ease .15s both">
      <div class="card-title">Revisão recomendada</div>
      <p class="sub" style="margin-top:4px;margin-bottom:16px;font-size:13px">Tópicos com menor aproveitamento — estude estes primeiro.</p>
      ${weakHtml}
    </section>
  `);
}

/* ─── Filters ─── */
const TIER_ORDER = { S: 0, A: 1, B: 2 };

function filteredQuestions() {
  let qs = DATA.questoes.filter(q => {
    const hay = `${q.pergunta} ${q.explicacao} ${topicName(q.topico)}`.toLowerCase();
    return (state.prova  === "todas" || q.prova   === state.prova)
        && (state.topico === "todos" || q.topico  === state.topico)
        && (state.origem === "todas" || q.origem  === state.origem)
        && (!state.busca || hay.includes(state.busca.toLowerCase()));
  });

  /* Marco Câmara: order by difficulty (S→A→B), SOMA types first */
  if (state.mode === "marco") {
    qs = qs.sort((a, b) => {
      const somaA = (a.tipo === "SOMA" || a.itens?.length) ? 0 : 1;
      const somaB = (b.tipo === "SOMA" || b.itens?.length) ? 0 : 1;
      if (somaA !== somaB) return somaA - somaB;
      const ta = TIER_ORDER[a.tier] ?? 2;
      const tb = TIER_ORDER[b.tier] ?? 2;
      return ta - tb;
    });
  }

  return qs;
}

function filtersHtml() {
  const topics = DATA.topicos.filter(t => state.prova === "todas" || t.prova === state.prova);
  return `
    <div class="filters">
      <input id="busca" placeholder="Buscar assunto, palavra-chave..." value="${esc(state.busca)}">
      <select id="prova">
        <option value="todas">P1 + P2</option>
        <option value="p1">Prova 1</option>
        <option value="p2">Prova 2</option>
      </select>
      <select id="topico">
        <option value="todos">Todos os tópicos</option>
        ${topics.map(t => `<option value="${t.id}">${esc(t.nome)}</option>`).join("")}
      </select>
      <select id="origem">
        <option value="todas">Todas origens</option>
        <option value="banco">Banco</option>
        <option value="avaliacao">Avaliações</option>
        <option value="simulado">Simulados</option>
      </select>
    </div>`;
}

function wireFilters() {
  const el = id => document.getElementById(id);
  el("busca").oninput  = e => { state.busca  = e.target.value; render(); };
  el("prova").value    = state.prova;
  el("topico").value   = state.topico;
  el("origem").value   = state.origem;
  el("prova").onchange  = e => { state.prova  = e.target.value; state.topico = "todos"; render(); };
  el("topico").onchange = e => { state.topico = e.target.value; render(); };
  el("origem").onchange = e => { state.origem = e.target.value; render(); };
}

/* ─── Tag helpers ─── */
function provaTag(prova) {
  return `<span class="tag tag-${prova}">${prova.toUpperCase()}</span>`;
}
function tipoTag(tipo) {
  const cls = tipo === "SOMA" ? "tag-soma" : tipo === "S" ? "tag-s" : "";
  return `<span class="tag ${cls}">${esc(tipo)}</span>`;
}

/* ─── Question card ─── */
function questionCard(q, prefix = "q") {
  const id    = `${prefix}_${q.id}`.replace(/[^a-zA-Z0-9_-]/g, "_");
  const marco = state.mode === "marco" && canMarco(q);
  return `
    <article class="card question" id="card_${id}">
      <div class="meta">
        ${provaTag(q.prova)}
        <span class="tag">${esc(topicName(q.topico))}</span>
        <span class="tag">${esc(q.origem)}</span>
        ${tipoTag(q.tipo)}
        ${q.tier ? `<span class="tag ${q.tier==='S'?'tag-s':''}">${esc(q.tier)}</span>` : ''}
      </div>
      <h3>${esc(q.pergunta)}</h3>
      ${marco ? marcoQuestion(q, id) : normalQuestion(q, id)}
    </article>`;
}

function normalQuestion(q, id) {
  if (q.tipo === "MC" || q.tipo === "MULTI") {
    const multi = q.tipo === "MULTI";
    const optsHtml = q.opcoes.map((op, i) => {
      const letra = String.fromCharCode(65 + i);
      return `
        <label class="opt">
          <input type="${multi ? 'checkbox' : 'radio'}" name="${id}" value="${letra}">
          <b>${letra})</b>
          <span>${esc(op)}</span>
        </label>`;
    }).join("");
    return `
      <div class="opts">${optsHtml}</div>
      <button class="btn" onclick="checkNormal('${id}','${q.id}')">Corrigir</button>
      <div class="result" id="res_${id}"></div>`;
  }
  if (q.tipo === "SOMA" || q.itens?.length) return marcoQuestion(q, id);
  return `
    <textarea class="open-answer" placeholder="Escreva sua resposta aqui para treinar..."></textarea>
    <div class="actions">
      <button class="btn" onclick="showOpen('${id}','${q.id}',true)">✓ Acertei — ver gabarito</button>
      <button class="btn secondary" onclick="showOpen('${id}','${q.id}',false)">✗ Errei — ver gabarito</button>
    </div>
    <div class="result" id="res_${id}"></div>`;
}

function marcoQuestion(q, id) {
  const items = objectiveItems(q);
  const optsHtml = items.map((it, i) => `
    <label class="opt">
      <input type="checkbox" name="${id}" value="${i}">
      <span class="bit">${esc(it.valor)}</span>
      <span>${esc(it.texto)}</span>
    </label>`).join("");
  return `
    <p class="sub" style="font-size:13px;margin:0 0 4px">Some as afirmativas corretas. Item errado marcado desconta pontos.</p>
    <div class="opts">${optsHtml}</div>
    <button class="btn" onclick="checkMarco('${id}','${q.id}')">Corrigir soma</button>
    <div class="result" id="res_${id}"></div>`;
}

/* ─── Check functions ─── */
function checkNormal(id, qid) {
  const q       = findQ(qid);
  const selected = selectedFor(id).sort();
  const correct  = q.respostas.slice().sort();
  const ok       = JSON.stringify(selected) === JSON.stringify(correct);
  record(q, ok);
  const el = document.getElementById(`res_${id}`);
  el.className = `result show ${ok ? 'correct' : 'wrong'}`;
  el.innerHTML = `
    <span class="result-label">${ok ? '✓ Correto!' : '✗ Incorreto.'}</span>
    Resposta: <strong>${esc(correct.join(", "))}</strong><br>
    ${esc(q.explicacao)}`;
}

function checkMarco(id, qid) {
  const q       = findQ(qid);
  const items   = objectiveItems(q);
  const selected = selectedFor(id).map(Number);
  let gained = 0, lost = 0;
  selected.forEach(i => {
    if (items[i]?.correto) gained += Number(items[i].valor);
    else                   lost   += Number(items[i].valor);
  });
  const score    = Math.max(0, gained - lost);
  const expected = correctSum(items);
  const ok       = score === expected;
  record(q, ok, score);
  const details  = items.map((it, i) =>
    `<span style="color:${it.correto?'var(--green)':'var(--red)'}">
      ${it.correto ? '●' : '○'} ${it.valor}</span> ${esc(it.motivo || it.texto)}`
  ).join("<br>");
  const el = document.getElementById(`res_${id}`);
  el.className = `result show ${ok ? 'correct' : 'wrong'}`;
  el.innerHTML = `
    <span class="result-label">${ok ? '✓ Soma correta!' : '✗ Soma incorreta.'}</span>
    Sua pontuação: <strong>${score}</strong> · Esperado: <strong>${expected}</strong><br><br>
    ${details}
    ${q.explicacao ? `<br><br>${esc(q.explicacao)}` : ''}`;
}

function showOpen(id, qid, ok) {
  const q = findQ(qid);
  record(q, ok);
  const el = document.getElementById(`res_${id}`);
  el.className = `result show`;
  el.innerHTML = `
    <span class="result-label">Gabarito esperado</span>
    ${esc(q.resposta_esperada || q.explicacao || JSON.stringify(q.gabarito || q.resposta))}`;
}

/* ─── Views ─── */
function questoes() {
  const qs = filteredQuestions();
  const modeDesc = state.mode === 'marco'
    ? `Marco Câmara — questões SOMA e tier S/A priorizadas. De 1 a todos os itens podem ser corretos. Item errado marcado desconta.`
    : 'Normal — responda e confira o gabarito.';
  layout(`
    ${header("Banco completo", `${qs.length} questões · ${modeDesc}`)}
    ${filtersHtml()}
    <div class="list">
      ${qs.slice(0, 80).map(q => questionCard(q)).join("") || '<div class="empty">Nenhuma questão encontrada com esses filtros.</div>'}
    </div>`);
  wireFilters();
}

function simulados() {
  const simsHtml = DATA.simulados.map(s => `
    <section class="card sim">
      <div class="meta">
        <span class="tag tag-p2">P2</span>
        <span class="tag">${s.questoes.length} questões</span>
      </div>
      <h3>${esc(s.titulo)}</h3>
      <p>${esc(s.instrucoes)}</p>
      <div class="actions">
        <button class="btn" onclick="openSim('${s.id}')">▶ Abrir simulado</button>
      </div>
      <div id="sim_${s.id}" class="list hidden" style="margin-top:18px">
        ${s.questoes.map(q => questionCard(q, s.id)).join("")}
      </div>
    </section>`).join("");

  const legacyHtml = DATA.legacyHtml?.length
    ? `<section class="card">
        <div class="card-title">Arquivos legados</div>
        <div class="meta" style="margin-top:10px">
          ${DATA.legacyHtml.map(h => `<a class="tag" href="${esc(h)}">${esc(h)}</a>`).join(" ")}
        </div>
       </section>`
    : '';

  layout(`
    ${header("Simulados", "Simulados completos com correção automática e modo soma-de-itens Marco Câmara.")}
    <div class="list">
      ${simsHtml || '<div class="empty">Nenhum simulado encontrado.</div>'}
      ${legacyHtml}
    </div>`);
}

function aulas() {
  const all     = DATA.aulas.filter(a => state.prova === "todas" || a.prova === state.prova);
  const visible = all.filter(a =>
    !state.busca || `${a.titulo} ${a.conteudo}`.toLowerCase().includes(state.busca.toLowerCase()));

  layout(`
    ${header("Aulas", "Conteúdo dos arquivos Markdown do projeto, agrupado por prova e tópico.")}
    <div class="filters">
      <input id="busca" placeholder="Buscar aula..." value="${esc(state.busca)}">
      <select id="prova">
        <option value="todas">P1 + P2</option>
        <option value="p1">Prova 1</option>
        <option value="p2">Prova 2</option>
      </select>
      <span></span><span></span>
    </div>
    <div class="list">
      ${visible.map(a => `
        <article class="card lesson">
          <div class="meta">
            ${provaTag(a.prova)}
            <span class="tag">${esc(a.topicoNome)}</span>
            <span class="tag">${esc(a.arquivo)}</span>
          </div>
          <h3>${esc(a.titulo)}</h3>
          <div class="lesson-content">${esc(a.conteudo)}</div>
        </article>`).join("") || '<div class="empty">Nenhuma aula encontrada.</div>'}
    </div>`);

  document.getElementById("busca").oninput  = e => { state.busca = e.target.value; render(); };
  document.getElementById("prova").value    = state.prova;
  document.getElementById("prova").onchange = e => { state.prova = e.target.value; render(); };
}

function flashcards() {
  const cards = DATA.flashcards.filter(f => state.prova === "todas" || f.prova === state.prova);
  if (state.flashIndex >= cards.length) state.flashIndex = 0;
  const c   = cards[state.flashIndex];
  const idx = state.flashIndex;
  const p2  = cards.length ? pct(idx, cards.length) : 0;

  /* Dots — max 30 visible */
  const maxDots = 30;
  const dotsHtml = cards.length <= maxDots
    ? `<div class="fc-dots">${cards.map((_, i) =>
        `<div class="fc-dot ${i < idx ? 'done' : i === idx ? 'cur' : ''}"></div>`
      ).join("")}</div>`
    : '';

  layout(`
    ${header("Flashcards", "Revise termos e definições rapidamente. Clique no card para revelar.")}
    <div class="filters">
      <span></span>
      <select id="prova">
        <option value="todas">P1 + P2</option>
        <option value="p1">Prova 1</option>
        <option value="p2">Prova 2</option>
      </select>
      <span></span><span></span>
    </div>
    ${c ? `
      <div class="flashcard-wrap">
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" style="width:${p2}%"></div>
        </div>
        <div class="fc-counter">${idx + 1} / ${cards.length} · ${c.prova.toUpperCase()}</div>
        <div class="flashcard ${state.flashOpen ? 'flipped' : ''}" onclick="flipCard()">
          <div class="meta" style="justify-content:center">
            ${provaTag(c.prova)}
          </div>
          <div class="flashcard-term">${esc(c.termo)}</div>
          ${state.flashOpen
            ? `<div class="flashcard-def">${esc(c.definicao)}</div>`
            : `<div class="flashcard-hint">clique para revelar a definição</div>`}
        </div>
        ${dotsHtml}
        <div class="fc-nav" style="margin-top:${dotsHtml ? '14px' : '22px'}">
          <button class="btn secondary" onclick="prevCard()" ${idx === 0 ? 'disabled' : ''}>← Anterior</button>
          <button class="btn" onclick="flipCard()">${state.flashOpen ? 'Ocultar' : 'Revelar'}</button>
          <button class="btn secondary" onclick="nextCard()" ${idx >= cards.length - 1 ? 'disabled' : ''}>Próximo →</button>
        </div>
      </div>`
    : `<div class="empty">Nenhum flashcard disponível.</div>`}`);

  document.getElementById("prova").value    = state.prova;
  document.getElementById("prova").onchange = e => {
    state.prova = e.target.value; state.flashIndex = 0; state.flashOpen = false; render();
  };
}

function progresso() {
  const p    = ensureProg();
  const rows = Object.entries(p.byTopic || {});
  const ans  = Object.values(p.answered || {});
  const tot  = ans.length;
  const cor  = ans.filter(a => a.ok).length;
  const score = pct(cor, tot);

  const p1rows = rows.filter(([t]) => DATA.topicos.find(tp => tp.id === t)?.prova === 'p1');
  const p2rows = rows.filter(([t]) => DATA.topicos.find(tp => tp.id === t)?.prova === 'p2');
  const otrows = rows.filter(([t]) => !DATA.topicos.find(tp => tp.id === t));

  function renderRows(arr) {
    if (!arr.length) return `<div class="empty" style="padding:16px">Sem dados.</div>`;
    return arr.map(([t, v]) => {
      const p3 = pct(v.correct, v.total);
      return `
        <div class="progress-row">
          <span class="progress-label">${esc(topicName(t))}</span>
          <div class="bar"><i class="${barCls(p3)}" style="width:${p3}%"></i></div>
          <span class="progress-pct" style="color:${p3>=70?'var(--green)':p3>=40?'var(--amber)':'var(--red)'}">${p3}%</span>
        </div>`;
    }).join("");
  }

  layout(`
    ${header("Progresso", "Histórico salvo localmente neste navegador.")}
    <section class="card" style="margin-bottom:16px;animation:fadeSlide .3s ease both">
      <div class="card-title">Resumo geral</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:14px">
        <div style="text-align:center">
          <div style="font-family:var(--f-mono);font-size:2rem;font-weight:700;color:var(--amber)">${tot}</div>
          <div style="font-size:11px;color:var(--muted);font-family:var(--f-mono);text-transform:uppercase;letter-spacing:.08em">Respondidas</div>
        </div>
        <div style="text-align:center">
          <div style="font-family:var(--f-mono);font-size:2rem;font-weight:700;color:var(--green)">${cor}</div>
          <div style="font-size:11px;color:var(--muted);font-family:var(--f-mono);text-transform:uppercase;letter-spacing:.08em">Corretas</div>
        </div>
        <div style="text-align:center">
          <div style="font-family:var(--f-mono);font-size:2rem;font-weight:700;color:${score>=70?'var(--green)':score>=40?'var(--amber)':'var(--red)'}">${score}%</div>
          <div style="font-size:11px;color:var(--muted);font-family:var(--f-mono);text-transform:uppercase;letter-spacing:.08em">Aproveitamento</div>
        </div>
      </div>
    </section>

    <section class="card progress-section">
      <div class="progress-section-title">Prova 1</div>
      ${renderRows(p1rows)}
    </section>

    <section class="card progress-section">
      <div class="progress-section-title">Prova 2</div>
      ${renderRows(p2rows)}
    </section>

    ${otrows.length ? `
    <section class="card progress-section">
      <div class="progress-section-title">Geral</div>
      ${renderRows(otrows)}
    </section>` : ''}

    <div class="actions" style="animation:fadeSlide .3s ease .2s both">
      <button class="btn danger" onclick="resetProgress()">✕ Zerar progresso web</button>
    </div>`);
}

/* ─── Navigation helpers ─── */
function go(v)      { state.view = v; render(); }
function setMarco() { state.mode = "marco"; localStorage.setItem("roboModo","marco"); state.view = "questoes"; render(); }
function openSim(id){ document.getElementById(`sim_${id}`)?.classList.toggle("hidden"); }
function flipCard() { state.flashOpen = !state.flashOpen; render(); }
function nextCard() { state.flashIndex++; state.flashOpen = false; render(); }
function prevCard() { state.flashIndex = Math.max(0, state.flashIndex - 1); state.flashOpen = false; render(); }
function resetProgress() {
  if (confirm("Zerar todo o progresso salvo neste navegador?")) {
    localStorage.removeItem(PROG_KEY); render();
  }
}

/* ─── Main render ─── */
function render() {
  if (state.view === "dashboard")  return dashboard();
  if (state.view === "simulados")  return simulados();
  if (state.view === "questoes")   return questoes();
  if (state.view === "aulas")      return aulas();
  if (state.view === "flashcards") return flashcards();
  if (state.view === "progresso")  return progresso();
}

render();
