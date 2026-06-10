"""
Adaptador do pacote P2 (v2.0).

O arquivo `questoes_p2_pack.py` veio com um esquema próprio
(`enunciado`/`alternativas` dict / tipos `multipla_escolha`, `dissertativa`,
`calculo`, `codigo`, `avaliacao_soma`). Aqui normalizamos para o esquema do
RoboEstudo (`pergunta`/`opcoes` list / tipos `MC`, `ESCREVA`, `SOMA`) e
prefixamos os tópicos com `p2_` para integrarem o filtro de prova.
"""
from data.questoes_p2_pack import (
    QUESTOES_P2_EXTRA as _RAW,
    FLASHCARDS_P2_EXTRA as _RAW_FC,
)

# tópico do pack → chave em data/topicos.py
_TOPICO_MAP = {
    "precisao_exatidao":          "p2_precisao_exatidao",
    "referencias_ruido_resolucao": "p2_referencias_ruido_wdt",
    "adc_dac_pwm":                "p2_adc_dac_pwm",
    "atmega_registradores":       "p2_atmega_registradores",
    "interrupcoes_timers":        "p2_interrupcoes_timers",
    "projeto_se_software":        "p2_projeto_se_software",
    "comunicacao_uart_i2c":       "p2_comunicacao_uart_i2c",
    "iot_mqtt_http":              "p2_iot_mqtt_http",
}


def _normalizar(q):
    topico = _TOPICO_MAP.get(q["topico"], "p2_" + q["topico"])
    base = {"id": q["id"], "topico": topico, "tier": q.get("tier", "A")}
    t = q["tipo"]

    if t == "multipla_escolha":
        opcoes = [f"{k}) {v}" for k, v in q["alternativas"].items()]
        return {**base, "tipo": "MC", "pergunta": q["enunciado"],
                "opcoes": opcoes, "resposta": q["resposta"],
                "explicacao": q["explicacao"]}

    if t == "avaliacao_soma":
        return {**base, "tipo": "SOMA", "pergunta": q["enunciado"],
                "itens": q["itens"], "resposta": int(q["resposta"]),
                "explicacao": q["explicacao"]}

    # dissertativa / calculo / codigo → resposta aberta autoavaliada
    esperada = q["resposta"]
    if q.get("explicacao"):
        esperada = f"{esperada}\n\n  💡 {q['explicacao']}"
    return {**base, "tipo": "ESCREVA", "pergunta": q["enunciado"],
            "resposta_esperada": esperada}


QUESTOES_P2_EXTRA = [_normalizar(q) for q in _RAW]

# flashcards do pack: {frente, verso} → tupla (termo, definição, "p2")
FLASHCARDS_P2_EXTRA = [(c["frente"], c["verso"], "p2") for c in _RAW_FC]
