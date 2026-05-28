TOPICOS = {
    "p1_definicao": "Definição e Classificação de SE",
    "p1_hardware":  "Hardware: µP vs µC + Arquiteturas",
    "p1_arduino":   "Arduino Uno R3 e GPIOs",
    "p1_eletron":   "Eletrônica: R, C, Diodos, Transistores",
    "p1_memoria":   "Memória ATMega328P",
    "p1_registr":   "Registradores e Operações Binárias",
    "p1_iot":       "IoT e Protocolos de Comunicação",
    "p2_medicao":   "Medição: Precisão, Exatidão, Linearidade",
    "p2_adc":       "Resolução, ADC, DAC e PWM",
    "p2_interrup":  "Interrupções e Timers",
}

# Mapeamento tópico → arquivo de aula markdown
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
    "p2_medicao":   ["p2_01_medicao_analogica.md", "p2_02_precisao_exatidao.md",
                     "p2_03_media_movel.md"],
    "p2_adc":       ["p2_04_escalas_adc.md", "p2_05_arquitetura_adc.md",
                     "p2_06_dac.md", "p2_07_pwm.md"],
    "p2_interrup":  ["p2_09_interrupcoes.md", "p2_10_timers.md", "p2_11_projeto_se.md"],
}
