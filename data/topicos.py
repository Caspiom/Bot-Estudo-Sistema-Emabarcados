TOPICOS = {
    "p1_definicao": "Definição e Classificação de SE",
    "p1_hardware":  "Hardware: µP vs µC + Arquiteturas",
    "p1_arduino":   "Arduino Uno R3 e GPIOs",
    "p1_eletron":   "Eletrônica: R, C, Diodos, Transistores",
    "p1_memoria":   "Memória ATMega328P",
    "p1_registr":   "Registradores e Operações Binárias",
    "p1_iot":       "IoT e Protocolos de Comunicação",
    # ── Prova 2 — tópicos canônicos (alinhados aos slides 244–392) ──
    "p2_precisao_exatidao":     "Precisão, Exatidão e Linearidade",
    "p2_referencias_ruido_wdt": "Referências, Ruído, WDT e Resolução",
    "p2_adc_dac_pwm":           "ADC, DAC, PWM e Amostragem (Nyquist)",
    "p2_atmega_registradores":  "ATMega328P: Harvard, Memória e Registradores",
    "p2_interrupcoes_timers":   "Interrupções, ISR e Timers",
    "p2_projeto_se_software":   "Projeto de SE, Software e Linguagens",
    "p2_comunicacao_uart_i2c":  "Comunicação: UART, I2C, SPI, ESP-NOW",
    "p2_iot_mqtt_http":         "IoT: HTTP e MQTT",
}

# ── Aliases: chaves antigas (amplas) → canônicas (detalhadas) ────────────────
# As primeiras versões da P2 usavam tópicos amplos. Para não duplicar assuntos
# no menu, mapeamos as chaves antigas para as canônicas. As questões antigas
# passam a aparecer no mesmo tópico das novas (ver topico_canonico()).
TOPICO_ALIAS = {
    "p2_medicao":  "p2_precisao_exatidao",
    "p2_adc":      "p2_adc_dac_pwm",
    "p2_interrup": "p2_interrupcoes_timers",
    "p2_projeto":  "p2_projeto_se_software",
}


def topico_canonico(key: str) -> str:
    """Resolve a chave de tópico para sua forma canônica (única por assunto)."""
    return TOPICO_ALIAS.get(key, key)


# Mapeamento tópico → arquivo(s) de aula markdown
AULAS_MAP = {
    "p1_definicao": ["p1_01_introducao.md", "p1_02_historia_motivacao.md",
                     "p1_03_classificacao_se.md"],
    "p1_iot":       ["p1_04_iot.md"],
    "p1_hardware":  ["p1_05_hardware.md"],
    "p1_arduino":   ["p1_06_arduino_uno.md"],
    "p1_eletron":   ["p1_07_eletrica_basica.md", "p1_08_capacitores.md",
                     "p1_09_semicondutores.md", "p1_10_transistores.md"],
    "p1_memoria":   ["p1_11_memoria.md", "p2_08_registradores_avancado.md"],
    "p1_registr":   ["p1_12_registradores_gpio.md", "p2_08_registradores_avancado.md"],
    # ── Prova 2 — slides originais + aula detalhada do pacote, por tópico ──
    "p2_precisao_exatidao":     ["p2_01_medicao_analogica.md", "p2_02_precisao_exatidao.md",
                                 "p2_03_media_movel.md", "p2_precisao_exatidao.md"],
    "p2_referencias_ruido_wdt": ["p2_referencias_ruido_wdt.md"],
    "p2_adc_dac_pwm":           ["p2_04_escalas_adc.md", "p2_05_arquitetura_adc.md",
                                 "p2_06_dac.md", "p2_07_pwm.md", "p2_adc_dac_pwm.md"],
    "p2_atmega_registradores":  ["p2_08_registradores_avancado.md", "p2_atmega_registradores.md"],
    "p2_interrupcoes_timers":   ["p2_09_interrupcoes.md", "p2_10_timers.md",
                                 "p2_interrupcoes_timers.md"],
    "p2_projeto_se_software":   ["p2_11_projeto_se.md", "p2_projeto_se_software.md"],
    "p2_comunicacao_uart_i2c":  ["p2_comunicacao_uart_i2c.md"],
    "p2_iot_mqtt_http":         ["p2_iot_http_mqtt.md"],
}
