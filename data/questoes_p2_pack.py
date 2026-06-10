# data/questoes_p2_adicionar.py
# ─────────────────────────────────────────────────────────────────────────────
# Banco de questões P2 — Sistemas Embarcados UCSAL
# Gerado a partir dos slides pág. 244–392 + simulados no estilo Prof. Marco Câmara
#
# COMO ADICIONAR AO SISTEMA:
# Em data/questoes.py, importe e faça extend da lista principal:
#   from data.questoes_p2_adicionar import QUESTOES_P2_EXTRA
#   QUESTOES.extend(QUESTOES_P2_EXTRA)
#
# Formato de cada questão:
# {
#   "id":          str único,
#   "topico":      str (chave do mapa em topicos.py),
#   "prova":       "P2",
#   "tier":        "S" | "A" | "B"   (S = mais cobrado),
#   "tipo":        "multipla_escolha" | "dissertativa" | "calculo" | "codigo",
#   "enunciado":   str,
#   "alternativas": dict A/B/C/D (só multipla_escolha),
#   "resposta":    str (letra ou texto),
#   "explicacao":  str detalhada,
#   "tags":        list[str],
# }
# ─────────────────────────────────────────────────────────────────────────────

QUESTOES_P2_EXTRA = [

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 1 — PRECISÃO, EXATIDÃO E LINEARIDADE
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_pe_001",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Um sensor de temperatura é testado 10 vezes no mesmo ponto. "
            "Os valores obtidos são: 25,1 / 25,0 / 25,2 / 24,9 / 25,1 / "
            "25,0 / 25,2 / 25,0 / 25,1 / 25,0 °C. O valor real é 23,5 °C. "
            "Como esse sensor é classificado?"
        ),
        "alternativas": {
            "A": "Preciso e exato",
            "B": "Impreciso e inexato",
            "C": "Preciso e inexato",
            "D": "Impreciso e exato",
        },
        "resposta": "C",
        "explicacao": (
            "Os valores são muito estáveis (variação de apenas 0,3 °C em 10 medições), "
            "o que indica ALTA PRECISÃO. Porém, a média das leituras (~25,06 °C) está "
            "longe do valor real (23,5 °C) — diferença de 1,56 °C. Isso é um erro sistemático, "
            "indicando BAIXA EXATIDÃO. Portanto: Preciso e Inexato."
        ),
        "tags": ["precisao", "exatidao", "sensor", "erro_sistematico"],
    },

    {
        "id": "p2_pe_002",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual técnica é eficaz para reduzir os efeitos do ruído aleatório "
            "na precisão de uma medição, mas NÃO resolve a inexatidão?"
        ),
        "alternativas": {
            "A": "Calibração com referência externa",
            "B": "Cálculo de média (simples ou móvel)",
            "C": "Uso de referência interna do MCU",
            "D": "Aplicação de filtro passa-baixas de hardware",
        },
        "resposta": "B",
        "explicacao": (
            "A média (simples ou móvel) cancela o ruído aleatório, melhorando a PRECISÃO "
            "(estabilidade). Porém, se houver inexatidão (erro sistemático), a média vai "
            "convergir ESTAVELMENTE para o valor ERRADO. Para corrigir a inexatidão, "
            "é necessária calibração com referência externa."
        ),
        "tags": ["media_movel", "ruido", "precisao", "exatidao"],
    },

    {
        "id": "p2_pe_003",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Um instrumento tem exatidão de ± (1,5% + 3). "
            "Ao medir um valor de 20,0 V, qual é a faixa de valores possíveis para o valor real?"
        ),
        "alternativas": {
            "A": "19,70 V a 20,30 V",
            "B": "19,67 V a 20,33 V",
            "C": "19,50 V a 20,50 V",
            "D": "19,85 V a 20,15 V",
        },
        "resposta": "B",
        "explicacao": (
            "Cálculo: 1,5% de 20,0 = 0,30 V. Mais 3 na última casa decimal (centésimos) "
            "= 0,03 V. Erro total = ±(0,30 + 0,03) = ±0,33 V. "
            "Faixa: 20,0 - 0,33 = 19,67 V até 20,0 + 0,33 = 20,33 V."
        ),
        "tags": ["exatidao", "calculo", "percentual", "faixa"],
    },

    {
        "id": "p2_pe_004",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Sobre a não-linearidade de sensores, qual afirmativa está CORRETA?"
        ),
        "alternativas": {
            "A": "A não-linearidade afeta igualmente todos os pontos da faixa de medição",
            "B": "A não-linearidade é um tipo de imprecisão que pode ser corrigida por média",
            "C": "A não-linearidade ocorre tipicamente nos extremos da faixa de operação",
            "D": "Sensores digitais são imunes à não-linearidade",
        },
        "resposta": "C",
        "explicacao": (
            "A não-linearidade é mais comum nos extremos da faixa de operação do sensor. "
            "Na região central, a resposta tende a ser mais linear. "
            "NÃO é uma forma de imprecisão (não se corrige por média) — é um erro de "
            "modelagem da relação entre entrada e saída. Pode ser corrigida matematicamente "
            "com um polinômio de correção ou simplesmente limitando a faixa usada."
        ),
        "tags": ["linearidade", "nao_linearidade", "extremos", "faixa"],
    },

    {
        "id": "p2_pe_005",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual é a principal vantagem da média móvel com vetor circular "
            "em relação à média simples em sistemas embarcados?"
        ),
        "alternativas": {
            "A": "A média móvel corrige erros sistemáticos; a média simples não",
            "B": "A média móvel tem complexidade O(1) por atualização, enquanto a simples é O(N)",
            "C": "A média móvel usa menos memória que a média simples",
            "D": "A média móvel funciona sem manter histórico de amostras",
        },
        "resposta": "B",
        "explicacao": (
            "A média simples precisa somar todas as N amostras a cada nova leitura — O(N) "
            "operações. A média móvel com vetor circular faz apenas 1 subtração e 1 adição "
            "por atualização — O(1). Isso é muito mais eficiente em MCUs com recursos limitados. "
            "A memória usada é a mesma (vetor de N elementos)."
        ),
        "tags": ["media_movel", "vetor_circular", "complexidade", "performance"],
    },

    {
        "id": "p2_pe_006",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "B",
        "tipo": "dissertativa",
        "enunciado": (
            "Explique a diferença entre precisão e exatidão usando a analogia do "
            "atirador em um alvo. Descreva os quatro casos possíveis e cite qual "
            "o problema mais grave e por quê."
        ),
        "resposta": (
            "PRECISÃO = estabilidade/repetibilidade (tiros agrupados). "
            "EXATIDÃO = proximidade do valor real (tiros perto do centro). "
            "4 casos: (1) Pouco preciso + pouco exato = tiros espalhados e longe. "
            "(2) Muito preciso + pouco exato = tiros agrupados mas longe — erro sistemático. "
            "(3) Pouco preciso + muito exato = tiros espalhados mas média perto do centro. "
            "(4) Muito preciso + muito exato = ideal. "
            "Mais grave: INEXATIDÃO. Sem referência externa, não há como saber que está "
            "medindo errado, e a média não ajuda — ela convergirá para o valor errado com "
            "muita estabilidade."
        ),
        "explicacao": (
            "A analogia do atirador é clássica na disciplina. O ponto chave é: "
            "precisão e exatidão são INDEPENDENTES. Um sistema pode ser preciso sem ser exato "
            "e vice-versa. A inexatidão é mais grave pois representa um erro oculto — o "
            "sistema parece estar funcionando corretamente."
        ),
        "tags": ["precisao", "exatidao", "analogia", "dissertativa"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 2 — REFERÊNCIA, RUÍDO, WDT, ESCALAS, RESOLUÇÃO
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_res_001",
        "topico": "referencias_ruido_resolucao",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Ao comparar as fontes de referência de tensão para um ADC, qual chip "
            "apresenta a melhor estabilidade com a temperatura?"
        ),
        "alternativas": {
            "A": "Diodo Zener (700 ppm/°C)",
            "B": "TL431 — Texas Instruments (600 ppm/°C)",
            "C": "5040AIDG4 — Texas Instruments (3 ppm/°C)",
            "D": "Tensão de alimentação Vcc (sem especificação de ppm/°C)",
        },
        "resposta": "C",
        "explicacao": (
            "O coeficiente de temperatura (ppm/°C) indica quanto a tensão varia por grau Celsius. "
            "Quanto MENOR, MELHOR. O chip 5040AIDG4 tem apenas 3 ppm/°C — com variação de 10°C, "
            "a referência muda apenas 0,003% (0,15 mV em 5 V). O Zener tem 700 ppm/°C — com "
            "variação de 10°C, muda 0,7% (35 mV em 5 V). A Vcc é a pior opção por variar com "
            "a carga do circuito."
        ),
        "tags": ["referencia", "ppm", "temperatura", "adc"],
    },

    {
        "id": "p2_res_002",
        "topico": "referencias_ruido_resolucao",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "No Arduino Uno, ao usar analogReference(EXTERNAL), qual cuidado é obrigatório?"
        ),
        "alternativas": {
            "A": "Não é possível usar analogRead() com referência externa",
            "B": "Não chamar analogRead() ANTES de configurar corretamente o pino AREF",
            "C": "A referência externa deve ser sempre igual à Vcc (5 V)",
            "D": "O pino AREF deve ser conectado ao GND antes de qualquer leitura",
        },
        "resposta": "B",
        "explicacao": (
            "Chamar analogRead() antes de configurar corretamente o pino AREF com referência "
            "externa pode danificar permanentemente o ATMega328P. O datasheet proíbe isso "
            "explicitamente. O circuito interno de referência pode colidir com a tensão "
            "externa aplicada no AREF. A referência externa deve estar entre 0 V e 5 V."
        ),
        "tags": ["analogreference", "aref", "arduino", "dano"],
    },

    {
        "id": "p2_res_003",
        "topico": "referencias_ruido_resolucao",
        "prova": "P2",
        "tier": "S",
        "tipo": "calculo",
        "enunciado": (
            "Você precisa medir pH de 0,0 a 14,0 com resolução de 0,01 unidades de pH "
            "usando o ADC do Arduino Uno (10 bits). "
            "(a) Quantos valores distintos são necessários? "
            "(b) Quantos bits de ADC são necessários? "
            "(c) O Arduino Uno é suficiente?"
        ),
        "resposta": (
            "(a) De 0,00 a 14,00 com passo 0,01: (14,00 - 0,00) / 0,01 + 1 = 1401 valores. "
            "(b) 2^10 = 1024 (insuficiente). 2^11 = 2048 >= 1401. Necessário: 11 bits. "
            "(c) NÃO — o Arduino Uno tem 10 bits (1024 valores), insuficiente para 1401 valores."
        ),
        "explicacao": (
            "Fórmula: N_valores = (max - min) / resolucao + 1. "
            "Para achar os bits: encontrar N tal que 2^N >= N_valores. "
            "10 bits = 1024 < 1401 → insuficiente. 11 bits = 2048 >= 1401 → suficiente. "
            "Para este projeto, seria necessário um ADC externo de 12 bits ou mais."
        ),
        "tags": ["resolucao", "calculo_bits", "adc", "ph"],
    },

    {
        "id": "p2_res_004",
        "topico": "referencias_ruido_resolucao",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Sobre o WDT (Watch Dog Timer), qual afirmativa está CORRETA?"
        ),
        "alternativas": {
            "A": "O WDT reseta o MCU periodicamente, independentemente do estado do programa",
            "B": "O MCU deve enviar um sinal ao WDT dentro do intervalo configurado; caso contrário, o WDT reseta o MCU",
            "C": "O WDT é controlado pelo mesmo clock do MCU e para quando o MCU trava",
            "D": "O WDT só funciona para detectar falhas de hardware, não de software",
        },
        "resposta": "B",
        "explicacao": (
            "O WDT tem clock INDEPENDENTE do MCU. O programa deve 'alimentar' o WDT "
            "(chamar wdt_reset()) dentro do intervalo configurado. Se o MCU travar e não "
            "alimentar o WDT, o contador chega a zero e gera RESET. Como o clock é "
            "independente, o WDT continua contando mesmo que o MCU trave. Isso o torna "
            "eficaz contra travamentos de software E hardware."
        ),
        "tags": ["wdt", "watchdog", "reset", "travamento"],
    },

    {
        "id": "p2_res_005",
        "topico": "referencias_ruido_resolucao",
        "prova": "P2",
        "tier": "A",
        "tipo": "calculo",
        "enunciado": (
            "Um sensor de pressão entrega tensão de 0,5 V (0 kPa) a 4,5 V (100 kPa). "
            "O ADC do Arduino Uno aceita 0 a 5 V com 10 bits. "
            "(a) Quantos dos 1024 valores do ADC são efetivamente usados? "
            "(b) Que porcentagem da resolução está sendo desperdiçada?"
        ),
        "resposta": (
            "(a) A faixa usada é 4,5 - 0,5 = 4,0 V. Fração da faixa total: 4,0/5,0 = 0,8. "
            "Valores usados: 0,8 x 1024 ≈ 819 valores. "
            "(b) Desperdiçados: 1024 - 819 = 205 valores. "
            "Porcentagem desperdiçada: 205/1024 ≈ 20% da resolução."
        ),
        "explicacao": (
            "Quando o sensor não cobre toda a faixa do ADC, perdemos resolução. "
            "A solução é usar um circuito de condicionamento de sinal (escala) que "
            "remapeia 0,5-4,5 V para 0-5 V, usando todos os 1024 valores do ADC."
        ),
        "tags": ["escalas", "resolucao", "adc", "condicionamento"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 3 — ADC, DAC, PWM, AMOSTRAGEM
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_adc_001",
        "topico": "adc_dac_pwm",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual arquitetura de ADC é utilizada no ATMega328P (Arduino Uno) "
            "e qual é sua principal característica operacional?"
        ),
        "alternativas": {
            "A": "Flash (Paralela) — opera em tempo real sem retardo",
            "B": "SAR (Successive Approximation Register) — faz busca binária em N ciclos para N bits",
            "C": "Sigma-Delta — oversampling com alta resolução (18-24 bits)",
            "D": "Pipeline — múltiplas etapas paralelas para alta velocidade",
        },
        "resposta": "B",
        "explicacao": (
            "O ATMega328P usa a arquitetura SAR (Successive Approximation Register). "
            "Ela funciona como uma busca binária: tenta aproximar o valor digital ao "
            "analógico com N passos (1 por bit). Para 10 bits, são 10 ciclos de clock "
            "para uma conversão. Introduz retardo, mas usa circuito muito mais simples "
            "que a Flash (que precisaria de 1023 comparadores para 10 bits)."
        ),
        "tags": ["adc", "sar", "atmega328p", "arquitetura"],
    },

    {
        "id": "p2_adc_002",
        "topico": "adc_dac_pwm",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "O Teorema de Nyquist estabelece que, para representar fielmente um sinal "
            "com componentes até 2 kHz, a taxa de amostragem mínima deve ser:"
        ),
        "alternativas": {
            "A": "1.000 amostras/segundo",
            "B": "2.000 amostras/segundo",
            "C": "4.000 amostras/segundo",
            "D": "8.000 amostras/segundo",
        },
        "resposta": "C",
        "explicacao": (
            "Nyquist: f_amostragem >= 2 x f_maxima. Para sinal com componentes até 2 kHz: "
            "f_amostragem >= 2 x 2.000 = 4.000 SA/s. "
            "A taxa mínima é o DOBRO (não igual) da frequência máxima do sinal. "
            "Se amostrar menos que isso, ocorre aliasing — o sinal parece ter frequência diferente."
        ),
        "tags": ["nyquist", "amostragem", "aliasing", "frequencia"],
    },

    {
        "id": "p2_adc_003",
        "topico": "adc_dac_pwm",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual afirmativa sobre o Arduino Uno e saídas analógicas está CORRETA?"
        ),
        "alternativas": {
            "A": "O Arduino Uno possui DAC de 8 bits integrado nos pinos marcados com (~)",
            "B": "O Arduino Uno não possui DAC; os pinos (~) geram PWM de 8 bits que simula tensão analógica",
            "C": "O Arduino Uno possui DAC de 10 bits, igual à resolução do ADC",
            "D": "O Arduino Uno usa rede R-2R interna para geração de tensão analógica",
        },
        "resposta": "B",
        "explicacao": (
            "O ATMega328P NÃO possui DAC integrado. Os pinos marcados com (~) no Arduino Uno "
            "(3, 5, 6, 9, 10, 11) geram PWM de 8 bits (0 a 255), com frequência padrão de "
            "490 Hz ou 980 Hz. O efeito 'analógico' vem da tensão média: Vout = Duty Cycle x Vcc. "
            "Para DAC verdadeiro, é necessário um chip externo (ex.: MCP4725 via I2C)."
        ),
        "tags": ["arduino", "dac", "pwm", "analogwrite"],
    },

    {
        "id": "p2_adc_004",
        "topico": "adc_dac_pwm",
        "prova": "P2",
        "tier": "A",
        "tipo": "calculo",
        "enunciado": (
            "Um sinal PWM tem Duty Cycle de 37,5% com Vcc = 3,3 V. "
            "Qual é a tensão média de saída?"
        ),
        "resposta": "Vout = 37,5% x 3,3 V = 0,375 x 3,3 = 1,2375 V ≈ 1,24 V",
        "explicacao": (
            "A fórmula do PWM é simples: Vout = Duty_Cycle(%) x Vcc. "
            "37,5% = 0,375. Vout = 0,375 x 3,3 = 1,2375 V. "
            "Esse é o princípio do PWM — a carga 'vê' a tensão média, não os pulsos."
        ),
        "tags": ["pwm", "duty_cycle", "tensao_media", "calculo"],
    },

    {
        "id": "p2_adc_005",
        "topico": "adc_dac_pwm",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Sobre os dois tipos de DAC estudados, qual afirmativa está CORRETA?"
        ),
        "alternativas": {
            "A": "O DAC por Resistores Ponderados usa apenas dois valores de resistores (R e 2R)",
            "B": "A rede R-2R exige resistores com valores que dobram a cada bit (R, 2R, 4R, 8R...)",
            "C": "A rede R-2R usa apenas dois valores de resistores (R e 2R), independente do número de bits",
            "D": "O DAC por Resistores Ponderados é mais fácil de construir que a rede R-2R para muitos bits",
        },
        "resposta": "C",
        "explicacao": (
            "A rede R-2R é a solução elegante: independente do número de bits, usa sempre "
            "apenas os valores R e 2R. Isso facilita enormemente a construção e a manutenção "
            "da precisão dos resistores. "
            "O DAC por Resistores Ponderados usa R, 2R, 4R, 8R... (dobrando a cada bit), "
            "o que torna difícil manter precisão para muitos bits (relação 128:1 para 8 bits)."
        ),
        "tags": ["dac", "r2r", "resistores_ponderados", "arquitetura"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 4 — ARQUITETURA ATMega328P E REGISTRADORES
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_reg_001",
        "topico": "atmega_registradores",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "O ATMega328P usa Arquitetura Harvard. Qual das opções descreve "
            "corretamente essa arquitetura?"
        ),
        "alternativas": {
            "A": "Um único barramento compartilhado entre instruções e dados, igual ao Von Neumann",
            "B": "Barramentos separados para programa e dados, permitindo acesso simultâneo",
            "C": "Instrução e dado têm o mesmo tamanho de palavra (8 bits) para eficiência",
            "D": "A memória de programa e de dados são fisicamente o mesmo chip",
        },
        "resposta": "B",
        "explicacao": (
            "Na Arquitetura Harvard, há barramentos SEPARADOS para programa (Flash) e dados (SRAM). "
            "Isso permite que o MCU busque a próxima instrução da Flash enquanto ainda executa "
            "a instrução atual (usando os dados da SRAM) — acesso SIMULTÂNEO. "
            "No ATMega328P: instrução = 16 bits (Flash); dado = 8 bits (SRAM). Tamanhos DIFERENTES "
            "são permitidos e normais na arquitetura Harvard."
        ),
        "tags": ["harvard", "von_neumann", "arquitetura", "atmega"],
    },

    {
        "id": "p2_reg_002",
        "topico": "atmega_registradores",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "No ATMega328P, qual registrador define a DIREÇÃO (entrada ou saída) dos pinos "
            "de uma porta, e como funciona?"
        ),
        "alternativas": {
            "A": "PINx — bit 0 = saída, bit 1 = entrada",
            "B": "PORTx — bit 0 = entrada, bit 1 = saída",
            "C": "DDRx — bit 0 = entrada, bit 1 = saída",
            "D": "DDRx — bit 0 = saída, bit 1 = entrada",
        },
        "resposta": "C",
        "explicacao": (
            "DDRx (Data Direction Register) define a direção de cada pino da porta X. "
            "bit = 0 → ENTRADA (input). bit = 1 → SAÍDA (output). "
            "PORTx é o registrador de saída de dados (ou controle do pull-up quando entrada). "
            "PINx é SOMENTE LEITURA — reflete o estado elétrico atual dos pinos."
        ),
        "tags": ["ddrx", "portx", "pinx", "registradores", "porta"],
    },

    {
        "id": "p2_reg_003",
        "topico": "atmega_registradores",
        "prova": "P2",
        "tier": "S",
        "tipo": "codigo",
        "enunciado": (
            "Escreva o código C (sem usar pinMode/digitalWrite) para: "
            "(a) configurar PD5 como saída e PD2 como entrada com pull-up interno; "
            "(b) acender o LED em PD5; "
            "(c) ler o estado de PD2 e armazenar em uma variável uint8_t."
        ),
        "resposta": (
            "// (a) Configurar direção e pull-up\n"
            "DDRD |= (1 << 5);    // PD5 como SAÍDA\n"
            "DDRD &= ~(1 << 2);   // PD2 como ENTRADA\n"
            "PORTD |= (1 << 2);   // pull-up interno em PD2\n"
            "\n"
            "// (b) Acender LED em PD5\n"
            "PORTD |= (1 << 5);   // PD5 = HIGH\n"
            "\n"
            "// (c) Ler PD2\n"
            "uint8_t estado = (PIND >> 2) & 0x01;  // 0 ou 1"
        ),
        "explicacao": (
            "Operações: SET = |= (1<<n), RESET = &= ~(1<<n), READ = (PINx >> n) & 0x01. "
            "O pull-up interno é ativado escrevendo 1 no bit correspondente do PORTx "
            "quando o pino está configurado como entrada (DDRx = 0). "
            "PIN é somente leitura — lê o estado elétrico real do pino."
        ),
        "tags": ["codigo", "registradores", "ddrx", "portd", "pind", "pullup"],
    },

    {
        "id": "p2_reg_004",
        "topico": "atmega_registradores",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual instrução em C inverte (toggle) o estado de um bit específico "
            "de um registrador sem afetar os demais bits?"
        ),
        "alternativas": {
            "A": "PORTB |= (1 << PB5);",
            "B": "PORTB &= ~(1 << PB5);",
            "C": "PORTB ^= (1 << PB5);",
            "D": "PORTB = (1 << PB5);",
        },
        "resposta": "C",
        "explicacao": (
            "A operação XOR (^) inverte o bit: 0 XOR 1 = 1, 1 XOR 1 = 0. "
            "Para os outros bits: x XOR 0 = x (mantém). "
            "|= ativa (SET). &= ~() desativa (RESET). "
            "= atribui diretamente (DESTRÓI os outros bits). "
            "^= inverte (TOGGLE) apenas o bit desejado."
        ),
        "tags": ["toggle", "xor", "registradores", "operacoes_bit"],
    },

    {
        "id": "p2_reg_005",
        "topico": "atmega_registradores",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Sobre os 3 tipos de memória do ATMega328P, qual afirmativa está CORRETA?"
        ),
        "alternativas": {
            "A": "A SRAM armazena o programa e é não volátil (mantém dados sem energia)",
            "B": "A Flash armazena variáveis e a EEPROM armazena o programa",
            "C": "A EEPROM é não volátil e usada para dados que devem persistir; a SRAM é volátil",
            "D": "A Flash tem 2 KB e a SRAM tem 32 KB no ATMega328P",
        },
        "resposta": "C",
        "explicacao": (
            "Flash (32 KB): programa (sketch + bootloader). NÃO VOLÁTIL. Palavras de 16 bits. "
            "SRAM (2.304 B = 2 KB + registradores): variáveis durante execução. VOLÁTIL. "
            "EEPROM (1 KB): dados do usuário que devem persistir ao desligar. NÃO VOLÁTIL. "
            "Flash e EEPROM são ambas não voláteis. SRAM perde tudo ao desligar."
        ),
        "tags": ["memoria", "flash", "sram", "eeprom", "volatil"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 5 — INTERRUPÇÕES E TIMERS
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_int_001",
        "topico": "interrupcoes_timers",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual regra é fundamental ao escrever uma ISR (Interrupt Service Routine)?"
        ),
        "alternativas": {
            "A": "A ISR deve ser o mais longa possível para tratar todos os eventos",
            "B": "A ISR deve ser a mais curta possível, sem delay() ou operações demoradas",
            "C": "A ISR pode chamar outras ISRs recursivamente",
            "D": "Variáveis globais usadas na ISR não precisam de volatile",
        },
        "resposta": "B",
        "explicacao": (
            "A ISR deve ser CURTA. Durante a execução da ISR, a maioria das outras "
            "interrupções fica bloqueada. Uma ISR longa pode causar: "
            "1) Perda de outros eventos importantes; "
            "2) Comportamento imprevisível do delay() e millis() (dependem de timer); "
            "3) Código menos determinístico. "
            "Variáveis compartilhadas com código fora da ISR DEVEM ser 'volatile'."
        ),
        "tags": ["isr", "interrupcao", "regras", "volatile"],
    },

    {
        "id": "p2_int_002",
        "topico": "interrupcoes_timers",
        "prova": "P2",
        "tier": "S",
        "tipo": "calculo",
        "enunciado": (
            "Com clock de 16 MHz e prescaler de 256, qual valor deve ser carregado "
            "em OCR1A do Timer 1 para gerar exatamente 1 interrupção por segundo? "
            "Verifique também se esse valor cabe no Timer 1 (16 bits)."
        ),
        "resposta": (
            "Contagens por segundo com prescaler 256: 16.000.000 / 256 = 62.500. "
            "Portanto OCR1A = 62.500 (modo CTC) ou TCNT1 recarregado com 0. "
            "Verificação: Timer 1 tem 16 bits → máximo 65.535. 62.500 < 65.535. ✓ VÁLIDO."
        ),
        "explicacao": (
            "Fórmula: OCR1A = (f_clock / prescaler / f_interrupcao) - 1 ≈ 62.499. "
            "Para prescaler 64: 16M/64 = 250.000 > 65.535 → inválido! "
            "Para prescaler 256: 16M/256 = 62.500 → válido! "
            "Para prescaler 1024: 16M/1024 = 15.625 → também válido (menor resolução de tempo)."
        ),
        "tags": ["timer1", "prescaler", "calculo", "ocr1a", "interrupcao"],
    },

    {
        "id": "p2_int_003",
        "topico": "interrupcoes_timers",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Por que é recomendado usar o Timer 1 para interrupções personalizadas "
            "em vez do Timer 0 no Arduino Uno?"
        ),
        "alternativas": {
            "A": "O Timer 1 tem frequência de clock mais alta que o Timer 0",
            "B": "O Timer 0 controla millis(), micros() e delay(); alterá-lo quebra essas funções",
            "C": "O Timer 1 é o único timer com prescaler no ATMega328P",
            "D": "O Timer 0 não suporta modo CTC, enquanto o Timer 1 suporta",
        },
        "resposta": "B",
        "explicacao": (
            "Timer 0 (8 bits) é usado internamente pelo Arduino para delay(), millis() e micros(). "
            "Alterar o prescaler ou modo do Timer 0 quebra essas funções. "
            "Timer 1 (16 bits) não tem esse problema — é seguro para interrupções customizadas. "
            "Além disso, Timer 1 tem 16 bits (0 a 65.535) vs 8 bits do Timer 0 (0 a 255), "
            "permitindo intervalos muito maiores sem prescaler alto."
        ),
        "tags": ["timer0", "timer1", "millis", "delay", "prescaler"],
    },

    {
        "id": "p2_int_004",
        "topico": "interrupcoes_timers",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Por que variáveis compartilhadas entre uma ISR e o código principal "
            "devem ser declaradas com 'volatile'?"
        ),
        "alternativas": {
            "A": "Para garantir que a variável seja armazenada na EEPROM",
            "B": "Para impedir que o compilador a otimize em registrador de CPU, "
                 "garantindo que sempre seja lida da memória RAM",
            "C": "Para que a ISR possa modificar a variável sem travar o sistema",
            "D": "Para aumentar a velocidade de acesso à variável dentro da ISR",
        },
        "resposta": "B",
        "explicacao": (
            "Sem 'volatile', o compilador pode otimizar e manter a variável em um registrador "
            "de CPU, sem reler da memória a cada acesso. Se a ISR atualiza o valor na memória, "
            "o código principal continua usando o valor antigo (que está no registrador de CPU). "
            "'volatile' instrui o compilador a SEMPRE reler da memória a cada acesso, "
            "garantindo que as atualizações da ISR sejam visíveis no código principal."
        ),
        "tags": ["volatile", "isr", "compilador", "otimizacao", "ram"],
    },

    {
        "id": "p2_int_005",
        "topico": "interrupcoes_timers",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual a diferença entre o modo Normal e o modo CTC do Timer 1?"
        ),
        "alternativas": {
            "A": "No modo CTC o timer conta até 65.535; no modo Normal, conta até OCR1A",
            "B": "No modo CTC o timer zera automaticamente ao atingir OCR1A; no modo Normal, é preciso zerar manualmente na ISR",
            "C": "O modo Normal é mais preciso porque não interrompe o contador",
            "D": "Não há diferença prática entre os dois modos para geração de interrupções",
        },
        "resposta": "B",
        "explicacao": (
            "Modo Normal: o timer conta até 65.535 (overflow), ou você compara com OCR1A mas "
            "precisa zerar TCNT1 manualmente dentro da ISR. "
            "Modo CTC (Clear Timer on Compare): o hardware zera TCNT1 automaticamente quando "
            "atinge OCR1A. Resultado: ISR menor (sem linha de reset), timing mais preciso "
            "(sem variação causada pelo tempo de execução até o reset manual)."
        ),
        "tags": ["timer1", "modo_ctc", "modo_normal", "ocr1a"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 6 — PROJETO DE SE, LINGUAGENS, GRAVAÇÃO
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_sw_001",
        "topico": "projeto_se_software",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "A norma IEC 61131-3 define 5 linguagens de programação para PLCs. "
            "Qual dessas linguagens foi DESCONTINUADA na revisão mais recente?"
        ),
        "alternativas": {
            "A": "LD — Ladder Diagram",
            "B": "FBD — Function Block Diagram",
            "C": "IL — Instruction List",
            "D": "SFC — Sequential Function Chart",
        },
        "resposta": "C",
        "explicacao": (
            "A norma IEC 61131-3 define 5 linguagens: "
            "LD (Ladder Diagram) — gráfica, ativa. "
            "FBD (Function Block Diagram) — gráfica, ativa. "
            "SFC (Sequential Function Chart) — gráfica, ativa. "
            "ST (Structured Text) — textual, ativa. "
            "IL (Instruction List) — textual, DESCONTINUADA. "
            "O OpenPLC ainda suporta todas as 5, mas IL foi oficialmente descontinuada "
            "por ser de baixo nível e difícil de usar."
        ),
        "tags": ["iec61131", "linguagens", "plc", "il", "ladder"],
    },

    {
        "id": "p2_sw_002",
        "topico": "projeto_se_software",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "O que é um Cross Compiler e por que é essencial em sistemas embarcados?"
        ),
        "alternativas": {
            "A": "Compila código para a mesma arquitetura em que está sendo executado, acelerando o processo",
            "B": "Converte código de uma linguagem de alto nível para outra (ex.: LD para C++)",
            "C": "Gera código executável para uma arquitetura diferente da máquina onde o compilador roda",
            "D": "Compila código de múltiplas linguagens simultaneamente em um único executável",
        },
        "resposta": "C",
        "explicacao": (
            "Cross Compiler: o compilador roda em uma plataforma (ex.: PC com x86) mas "
            "gera código executável para outra plataforma (ex.: ATMega328P com AVR). "
            "É essencial em SE porque MCUs geralmente não têm recursos (memória, display, "
            "sistema de arquivos) para rodar um compilador por conta própria. "
            "O GCC-AVR usado no Arduino IDE é um cross compiler típico."
        ),
        "tags": ["cross_compiler", "compilador", "avr", "embedded"],
    },

    {
        "id": "p2_sw_003",
        "topico": "projeto_se_software",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "O PIC16F877 tem 35 instruções. Isso o caracteriza como:"
        ),
        "alternativas": {
            "A": "CISC — Complex Instruction Set Computer, com muitas instruções complexas",
            "B": "RISC — Reduced Instruction Set Computer, com poucas instruções simples e alta performance",
            "C": "Harvard CISC — combina arquitetura Harvard com conjunto complexo de instruções",
            "D": "Von Neumann RISC — combina o barramento único com instrução reduzida",
        },
        "resposta": "B",
        "explicacao": (
            "RISC (Reduced Instruction Set Computer) = poucas instruções, cada uma simples "
            "e executada em poucos ciclos (tipicamente 1 ciclo por instrução). "
            "O PIC16F877 tem apenas 35 instruções divididas em 6 grupos — exemplo clássico de RISC. "
            "CISC (ex.: x86 Intel/AMD) tem centenas de instruções, muitas complexas. "
            "RISC é mais eficiente em hardware simples com frequências de clock menores."
        ),
        "tags": ["risc", "cisc", "pic16f877", "instrucoes"],
    },

    {
        "id": "p2_sw_004",
        "topico": "projeto_se_software",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "No método de gravação via ISP (In-Circuit Serial Programming), "
            "qual sinal é responsável por colocar o MCU em modo de programação?"
        ),
        "alternativas": {
            "A": "MOSI — Master Out Slave In",
            "B": "SCK — Serial Clock",
            "C": "RESET",
            "D": "MISO — Master In Slave Out",
        },
        "resposta": "C",
        "explicacao": (
            "O conector ICSP (In-Circuit Serial Programming) do Arduino tem 6 pinos: "
            "MOSI (envio de dados), MISO (recepção), SCK (clock síncrono), "
            "VTG (alimentação), GND, e RESET. "
            "O pino RESET é mantido em LOW pelo programador para colocar o MCU em "
            "modo de programação. Após a gravação, o RESET é liberado e o MCU inicia normalmente."
        ),
        "tags": ["isp", "icsp", "reset", "programacao", "gravacao"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 7 — COMUNICAÇÃO
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_com_001",
        "topico": "comunicacao_uart_i2c",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Em uma conexão UART entre Arduino Uno (5V) e ESP8266 (3,3V), "
            "qual ligação está CORRETA?"
        ),
        "alternativas": {
            "A": "TX do Arduino → TX do ESP8266; RX → RX",
            "B": "TX do Arduino → RX do ESP8266 diretamente (5V para 3,3V é seguro)",
            "C": "TX do Arduino → RX do ESP8266 com divisor de tensão ou level shifter",
            "D": "RX do Arduino → RX do ESP8266; TX → TX (mesmos sinais devem se conectar)",
        },
        "resposta": "C",
        "explicacao": (
            "Dois cuidados: (1) Conexão CRUZADA: TX de A vai para RX de B e vice-versa. "
            "(2) Compatibilidade de tensão: 5V no pino RX do ESP8266 (3,3V) pode danificar "
            "permanentemente o chip. É necessário um divisor de tensão (R1 + R2) ou um "
            "conversor de nível bidirecional (level shifter). "
            "Sentido contrário (ESP→Arduino, 3,3V → 5V) geralmente é seguro."
        ),
        "tags": ["uart", "nivel_tensao", "esp8266", "arduino", "level_shifter"],
    },

    {
        "id": "p2_com_002",
        "topico": "comunicacao_uart_i2c",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "No protocolo I2C, o que indica um NACK após o endereço do dispositivo?"
        ),
        "alternativas": {
            "A": "O dispositivo recebeu os dados com sucesso",
            "B": "O barramento está em estado de START",
            "C": "Nenhum dispositivo com aquele endereço existe ou está pronto",
            "D": "O mestre deve repetir o endereço com bit R/W invertido",
        },
        "resposta": "C",
        "explicacao": (
            "No I2C, após enviar o endereço, o mestre aguarda o ACK. "
            "ACK = o receptor puxa SDA para LOW → dispositivo existente e pronto. "
            "NACK = SDA fica HIGH (ninguém puxou) → nenhum dispositivo com aquele endereço "
            "está no barramento, ou o dispositivo existe mas não está pronto. "
            "A função Wire.endTransmission() retorna 2 (ou diferente de 0) quando recebe NACK."
        ),
        "tags": ["i2c", "ack", "nack", "endereco", "wire"],
    },

    {
        "id": "p2_com_003",
        "topico": "comunicacao_uart_i2c",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "No I2C, como é gerado o Start bit e o Stop bit?"
        ),
        "alternativas": {
            "A": "Start: SCL sobe enquanto SDA está alto. Stop: SCL desce enquanto SDA está alto",
            "B": "Start: SDA desce enquanto SCL está alto. Stop: SDA sobe enquanto SCL está alto",
            "C": "Start: SDA sobe enquanto SCL está baixo. Stop: SDA desce enquanto SCL está baixo",
            "D": "Start: ambos descem juntos. Stop: ambos sobem juntos",
        },
        "resposta": "B",
        "explicacao": (
            "Esta é uma das sequências mais cobradas em prova sobre I2C: "
            "START: SDA DESCE enquanto SCL está HIGH. "
            "STOP: SDA SOBE enquanto SCL está HIGH. "
            "Em condições normais de transmissão, SDA só muda quando SCL está LOW. "
            "Mudança de SDA com SCL HIGH é a forma de sinalizar início (descida) ou fim (subida)."
        ),
        "tags": ["i2c", "start_bit", "stop_bit", "sda", "scl"],
    },

    {
        "id": "p2_com_004",
        "topico": "comunicacao_uart_i2c",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual protocolo de comunicação oferece o maior alcance entre os estudados, "
            "e qual é sua principal limitação?"
        ),
        "alternativas": {
            "A": "CAN — 1 km de alcance; limitado a 1 Mbps",
            "B": "UART — 1 km de alcance; limitado a apenas 2 dispositivos",
            "C": "LoRa — até 10 km; limitado a menos de 5 kbps de taxa de transferência",
            "D": "ESP-NOW — 480 m; limitado a 250 bytes por pacote",
        },
        "resposta": "C",
        "explicacao": (
            "LoRa (Long Range) é o campeão de alcance: até 10 km em campo aberto. "
            "O custo é a taxa extremamente baixa: menos de 5 kbps. "
            "Isso o torna ideal para IoT de longa distância com dados esparsos "
            "(ex.: sensores agrícolas, medidores remotos). "
            "ESP-NOW: 480 m, até 250 bytes. CAN: 1 km, 1 Mbps. UART: 1 km ponto a ponto."
        ),
        "tags": ["lora", "alcance", "taxa", "protocolo_comparacao"],
    },

    {
        "id": "p2_com_005",
        "topico": "comunicacao_uart_i2c",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Sobre o ESP-NOW, qual afirmativa está CORRETA?"
        ),
        "alternativas": {
            "A": "O ESP-NOW usa endereços IP atribuídos por DHCP para identificar dispositivos",
            "B": "O ESP-NOW requer um roteador Wi-Fi para funcionar como ponto de acesso",
            "C": "O ESP-NOW usa o MAC Address do dispositivo para endereçamento e suporta até 250 bytes por pacote",
            "D": "O ESP-NOW é bidirecional apenas quando os dispositivos estão pareados via Bluetooth",
        },
        "resposta": "C",
        "explicacao": (
            "ESP-NOW: protocolo proprietário da Espressif. Usa o transceptor 2,4 GHz do ESP. "
            "SEM roteador — comunicação direta. "
            "Endereçamento por MAC Address (6 bytes hexadecimais únicos por dispositivo). "
            "Pacote máximo: 250 bytes. Até 20 pares. Latência mínima. "
            "Comunicação pode ser uni ou bidirecional sem configuração extra."
        ),
        "tags": ["espnow", "mac_address", "sem_roteador", "250_bytes"],
    },

    # ═══════════════════════════════════════════════════════════════
    # BLOCO 8 — MQTT E IOT
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_iot_001",
        "topico": "iot_mqtt_http",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "O MQTT foi criado em 1999. Qual era o problema original que motivou sua criação?"
        ),
        "alternativas": {
            "A": "Necessidade de protocolo para comunicação em redes Wi-Fi de alta velocidade",
            "B": "Monitoramento de sensores em oleodutos via satélite, com banda cara e conexão instável",
            "C": "Substituir o HTTP em aplicações web de tempo real",
            "D": "Comunicação entre PLCs industriais com protocolo padronizado",
        },
        "resposta": "B",
        "explicacao": (
            "Andy Stanford-Clark (IBM) e Arlen Nipper (Cirrus Link) criaram o MQTT em 1999 "
            "para monitorar sensores em oleodutos via SATÉLITE. "
            "Os desafios: banda de satélite cara e limitada, conexão instável, dispositivos "
            "com recursos mínimos (bateria, processamento). "
            "Solução: pacotes mínimos (até 2 bytes!), conexões TCP persistentes, "
            "modelo Pub/Sub desacoplado, QoS configurável."
        ),
        "tags": ["mqtt", "historia", "ibm", "satelite", "oleoduto"],
    },

    {
        "id": "p2_iot_002",
        "topico": "iot_mqtt_http",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "No MQTT, um subscriber assina o tópico 'fabrica/+/motor/temperatura'. "
            "Quais mensagens ele receberá?"
        ),
        "alternativas": {
            "A": "Apenas 'fabrica/linha1/motor/temperatura'",
            "B": "Todos os tópicos que começam com 'fabrica/'",
            "C": "'fabrica/linha1/motor/temperatura', 'fabrica/linha2/motor/temperatura', etc. (qualquer valor no segundo nível)",
            "D": "Nenhuma mensagem, pois o wildcard + não pode ser usado no meio do tópico",
        },
        "resposta": "C",
        "explicacao": (
            "O wildcard '+' substitui EXATAMENTE UM nível de tópico. "
            "Em 'fabrica/+/motor/temperatura', o '+' substitui qualquer valor no segundo nível: "
            "fabrica/linha1/motor/temperatura ✓ "
            "fabrica/linha2/motor/temperatura ✓ "
            "fabrica/setor_a/motor/temperatura ✓ "
            "fabrica/linha1/bomba/temperatura ✗ (terceiro nível 'bomba' ≠ 'motor') "
            "O '+' pode aparecer em qualquer posição no tópico (diferente do '#')."
        ),
        "tags": ["mqtt", "wildcard_plus", "topicos", "subscribe"],
    },

    {
        "id": "p2_iot_003",
        "topico": "iot_mqtt_http",
        "prova": "P2",
        "tier": "S",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Um sistema de automação envia o comando 'abre_valvula' para uma válvula industrial. "
            "Qual nível de QoS MQTT é mais adequado e por quê?"
        ),
        "alternativas": {
            "A": "QoS 0 — menor overhead, adequado para comandos frequentes",
            "B": "QoS 1 — garante entrega e a duplicação não é problema para comandos",
            "C": "QoS 2 — garante exatamente uma entrega, evitando abertura dupla da válvula",
            "D": "QoS 2 seria excessivo; QoS 0 é suficiente para qualquer comando industrial",
        },
        "resposta": "C",
        "explicacao": (
            "Comandos para atuadores geralmente NÃO são idempotentes: 'abre_valvula' executado "
            "duas vezes pode causar problemas (abrir e fechar e abrir de novo inesperadamente). "
            "QoS 0: pode perder o comando — inaceitável. "
            "QoS 1: garante entrega, mas pode DUPLICAR — o atuador poderia receber 2 comandos. "
            "QoS 2: exatamente 1 entrega (handshake de 4 etapas). Ideal para comandos críticos."
        ),
        "tags": ["mqtt", "qos2", "atuador", "valvula", "idempotente"],
    },

    {
        "id": "p2_iot_004",
        "topico": "iot_mqtt_http",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual é a sequência correta de troca de mensagens no QoS 2 do MQTT?"
        ),
        "alternativas": {
            "A": "PUBLISH → PUBACK → PUBREL → PUBCOMP",
            "B": "PUBLISH → PUBREC → PUBREL → PUBCOMP",
            "C": "PUBLISH → PUBCOMP → PUBREC → PUBREL",
            "D": "PUBLISH → PUBACK → PUBCOMP",
        },
        "resposta": "B",
        "explicacao": (
            "QoS 2 tem handshake de 4 etapas: "
            "1. Publisher → [PUBLISH] → Broker "
            "2. Publisher ← [PUBREC] ← Broker (PUBlish RECeived — broker recebeu) "
            "3. Publisher → [PUBREL] → Broker (PUBlish RELease — publisher confirma) "
            "4. Publisher ← [PUBCOMP] ← Broker (PUBlish COMPlete — transação completa) "
            "QoS 1 tem apenas 2 etapas: PUBLISH → PUBACK."
        ),
        "tags": ["mqtt", "qos2", "handshake", "publish", "pubrec"],
    },

    {
        "id": "p2_iot_005",
        "topico": "iot_mqtt_http",
        "prova": "P2",
        "tier": "A",
        "tipo": "multipla_escolha",
        "enunciado": (
            "Qual é a principal diferença arquitetural entre HTTP WebSockets e MQTT?"
        ),
        "alternativas": {
            "A": "HTTP WebSockets usa UDP; MQTT usa TCP",
            "B": "HTTP WebSockets é um modelo cliente-servidor direto; MQTT usa modelo Pub/Sub com broker",
            "C": "MQTT não suporta conexões persistentes; HTTP WebSockets sim",
            "D": "HTTP WebSockets suporta QoS configurável; MQTT não",
        },
        "resposta": "B",
        "explicacao": (
            "HTTP WebSockets: cliente conecta diretamente ao servidor. Full-duplex. "
            "Bidirecional direto entre 2 partes. "
            "MQTT: modelo Pub/Sub com BROKER intermediário. Publishers não conhecem subscribers. "
            "Subscribers não conhecem publishers. O broker é o único ponto de contato. "
            "Isso dá ao MQTT escalabilidade muito maior — N publishers, M subscribers, "
            "todos desacoplados. Ambos usam TCP. MQTT suporta QoS 0/1/2; HTTP WebSockets não."
        ),
        "tags": ["mqtt", "http_websockets", "pub_sub", "broker", "diferenca"],
    },

    # ═══════════════════════════════════════════════════════════════
    # QUESTÕES NO ESTILO AVALIAÇÃO (soma de itens)
    # ═══════════════════════════════════════════════════════════════

    {
        "id": "p2_av_001",
        "topico": "precisao_exatidao",
        "prova": "P2",
        "tier": "S",
        "tipo": "avaliacao_soma",
        "enunciado": (
            "Sobre precisão e exatidão em sistemas de medição, "
            "some os valores das afirmativas CORRETAS:"
        ),
        "itens": {
            "01": ("CORRETA", "A precisão de um sistema está relacionada à sua estabilidade e repetibilidade, independentemente de o valor ser correto ou não"),
            "02": ("ERRADA",  "A exatidão está diretamente ligada à ausência de ruído aleatório; sistemas exatos são necessariamente precisos"),
            "04": ("CORRETA", "O cálculo de média móvel é uma técnica eficaz para reduzir os efeitos do ruído aleatório sobre a precisão"),
            "08": ("ERRADA",  "A não-linearidade de um sensor provoca erros distribuídos uniformemente por toda a faixa de operação"),
            "16": ("CORRETA", "Um sensor que sempre retorna 5% acima do valor real, com leituras estáveis, é preciso e inexato"),
            "32": ("CORRETA", "A inexatidão é o problema mais grave pois, sem referência externa, não é possível detectar o erro"),
        },
        "resposta": "53",
        "explicacao": (
            "Corretas: 01+04+16+32 = 53. "
            "02 ERRADA: precisão e exatidão são independentes — sensor exato pode ser impreciso. "
            "08 ERRADA: não-linearidade ocorre nos EXTREMOS da faixa, não uniformemente."
        ),
        "tags": ["avaliacao_soma", "precisao", "exatidao", "linearidade"],
    },

    {
        "id": "p2_av_002",
        "topico": "interrupcoes_timers",
        "prova": "P2",
        "tier": "S",
        "tipo": "avaliacao_soma",
        "enunciado": (
            "Sobre interrupções e timers no ATMega328P, "
            "some os valores das afirmativas CORRETAS:"
        ),
        "itens": {
            "01": ("CORRETA", "Uma ISR deve ser a mais curta possível, evitando delay() ou comunicação serial dentro dela"),
            "02": ("ERRADA",  "O Timer 0 do ATMega328P tem 16 bits de resolução e é responsável pelas funções millis() e delay()"),
            "04": ("CORRETA", "Variáveis compartilhadas entre ISR e código principal devem ser declaradas com volatile"),
            "08": ("CORRETA", "Com clock de 16 MHz e prescaler 256, o Timer 1 conta até 62.500, gerando 1 interrupção por segundo"),
            "16": ("CORRETA", "A norma IEC 61131-3 define cinco linguagens de programação padrão para PLCs, sendo a IL a descontinuada"),
            "32": ("ERRADA",  "Cross compilers geram código executável para o mesmo dispositivo em que o compilador está sendo executado"),
        },
        "resposta": "29",
        "explicacao": (
            "Corretas: 01+04+08+16 = 29. "
            "02 ERRADA: Timer 0 tem 8 bits (0-255), NÃO 16 bits. "
            "32 ERRADA: cross compiler gera para dispositivo DIFERENTE, não o mesmo."
        ),
        "tags": ["avaliacao_soma", "interrupcoes", "timer1", "iec61131"],
    },

    {
        "id": "p2_av_003",
        "topico": "comunicacao_uart_i2c",
        "prova": "P2",
        "tier": "S",
        "tipo": "avaliacao_soma",
        "enunciado": (
            "Sobre os protocolos de comunicação em sistemas embarcados, "
            "some os valores das afirmativas CORRETAS:"
        ),
        "itens": {
            "01": ("CORRETA", "A UART é assíncrona; a sincronização entre transmissor e receptor é feita pelo baud rate configurado em ambos"),
            "02": ("ERRADA",  "Na conexão UART entre dois dispositivos, TX de A conecta em TX de B e RX em RX"),
            "04": ("CORRETA", "Os bits de dados em uma transmissão UART são enviados com o LSB (bit menos significativo) primeiro"),
            "08": ("CORRETA", "A conexão direta de 5V ao pino RX de um módulo de 3,3V pode danificar permanentemente o receptor"),
            "16": ("ERRADA",  "A configuração SERIAL_8N1 indica 8 bits de dados, 1 bit de paridade par e 1 stop bit"),
            "32": ("CORRETA", "A UART suporta comunicação full-duplex — transmissão e recepção simultâneas por fios separados"),
        },
        "resposta": "45",
        "explicacao": (
            "Corretas: 01+04+08+32 = 45. "
            "02 ERRADA: conexão é CRUZADA — TX de A vai para RX de B e vice-versa. "
            "16 ERRADA: 8N1 = 8 bits, NENHUMA paridade (N=None), 1 stop. Não há paridade par."
        ),
        "tags": ["avaliacao_soma", "uart", "i2c", "comunicacao"],
    },

    {
        "id": "p2_av_004",
        "topico": "atmega_registradores",
        "prova": "P2",
        "tier": "S",
        "tipo": "avaliacao_soma",
        "enunciado": (
            "Sobre a arquitetura do ATMega328P e acesso a registradores, "
            "some os valores das afirmativas CORRETAS:"
        ),
        "itens": {
            "01": ("CORRETA", "O ATMega328P usa Arquitetura Harvard, com barramentos separados para programa e dados, permitindo acesso simultâneo"),
            "02": ("CORRETA", "Na Harvard do ATMega328P, a instrução tem 16 bits e o dado tem 8 bits — tamanhos diferentes são normais"),
            "04": ("ERRADA",  "O registrador DDRx define a direção dos pinos: bit 0 = saída e bit 1 = entrada"),
            "08": ("CORRETA", "O registrador PINx é somente leitura e reflete o estado elétrico atual de cada pino"),
            "16": ("CORRETA", "Para ativar um bit específico sem alterar os demais, usa-se reg |= (1 << n)"),
            "32": ("ERRADA",  "A EEPROM do ATMega328P é uma memória volátil de 1 KB para armazenar dados temporários"),
        },
        "resposta": "27",
        "explicacao": (
            "Corretas: 01+02+08+16 = 27. "
            "04 ERRADA: DDRx: bit 0 = ENTRADA, bit 1 = SAÍDA (afirmativa invertida). "
            "32 ERRADA: EEPROM é NÃO VOLÁTIL (persiste sem energia). SRAM é que é volátil."
        ),
        "tags": ["avaliacao_soma", "harvard", "registradores", "eeprom"],
    },

]  # fim de QUESTOES_P2_EXTRA


# ─────────────────────────────────────────────────────────────────────────────
# Flashcards P2 para adicionar em data/flashcards.py
# ─────────────────────────────────────────────────────────────────────────────

FLASHCARDS_P2_EXTRA = [
    {"frente": "Precisão",              "verso": "Estabilidade/repetibilidade. Ruído aleatório. Resolve com média."},
    {"frente": "Exatidão",              "verso": "Proximidade do valor real. Erro sistemático. Resolve com calibração."},
    {"frente": "Precisão vs Exatidão",  "verso": "INDEPENDENTES! Um não implica o outro. Inexatidão é o problema mais grave."},
    {"frente": "ppm/°C na referência",  "verso": "Coeficiente de temperatura. Menor = melhor. Zener: 700; 5040AIDG4: 3 ppm/°C."},
    {"frente": "WDT",                   "verso": "Watch Dog Timer. MCU alimenta periodicamente. Trava? Contador zera → RESET."},
    {"frente": "Resolução ADC Arduino", "verso": "10 bits → 1024 valores → 4,89 mV/passo com Vref=5V."},
    {"frente": "Cálculo de bits ADC",   "verso": "Contar valores distintos, achar N: 2^N >= nº valores. Ex: 421 valores → 9 bits."},
    {"frente": "ADC SAR",               "verso": "Successive Approximation Register. Usado no ATMega328P. Busca binária em N ciclos."},
    {"frente": "Nyquist",               "verso": "f_amostragem >= 2 x f_máxima. Não respeitar = aliasing."},
    {"frente": "DAC R-2R",              "verso": "Rede em escada com APENAS dois valores: R e 2R. Não importa o nº de bits."},
    {"frente": "PWM Arduino",           "verso": "8 bits (0-255). 490 Hz padrão. Tensão média = Duty% x Vcc. SEM DAC real."},
    {"frente": "Arquitetura Harvard",   "verso": "Barramentos separados para instrução (16 bits) e dado (8 bits). Acesso simultâneo."},
    {"frente": "DDRx",                  "verso": "Data Direction Register. 0=entrada, 1=saída."},
    {"frente": "PINx",                  "verso": "Somente leitura. Estado elétrico atual dos pinos."},
    {"frente": "SET um bit",            "verso": "reg |= (1 << n)"},
    {"frente": "RESET um bit",          "verso": "reg &= ~(1 << n)"},
    {"frente": "TOGGLE um bit",         "verso": "reg ^= (1 << n)"},
    {"frente": "Timer 0 vs Timer 1",    "verso": "Timer 0: 8 bits, millis/delay. Timer 1: 16 bits, interrupções seguras."},
    {"frente": "16 MHz / 256 prescaler","verso": "62.500 contagens/segundo → OCR1A = 62500 → 1 Hz no Timer 1."},
    {"frente": "volatile em ISR",       "verso": "Força reler da RAM (não de registrador de CPU). Obrigatório em variáveis compartilhadas."},
    {"frente": "IEC 61131-3",           "verso": "5 linguagens: LD, FBD, SFC, ST, IL. IL foi DESCONTINUADA."},
    {"frente": "Cross Compiler",        "verso": "Compila no PC para rodar no MCU (outro dispositivo). Ex: GCC-AVR."},
    {"frente": "PIC16F877",             "verso": "35 instruções, RISC, 6 grupos."},
    {"frente": "UART topologia",        "verso": "Ponto a ponto, CRUZADO: TX-A→RX-B, RX-A←TX-B. LSB primeiro. Assíncrono."},
    {"frente": "I2C criação",           "verso": "Philips, 1982. SDA + SCL. Até 1008 dispositivos. Half-duplex. Pull-ups obrigatórios."},
    {"frente": "I2C Start/Stop",        "verso": "Start: SDA DESCE (SCL=HIGH). Stop: SDA SOBE (SCL=HIGH)."},
    {"frente": "I2C R/W bit",           "verso": "0 = mestre ESCREVE no escravo. 1 = mestre LÊ o escravo."},
    {"frente": "ESP-NOW",               "verso": "Espressif, 2,4 GHz, sem roteador, MAC Address, 250 bytes, 20 pares."},
    {"frente": "MQTT criação",          "verso": "IBM + Cirrus Link, 1999, oleodutos via satélite, payload mínimo 2 bytes."},
    {"frente": "MQTT wildcards",        "verso": "+ = 1 nível. # = vários níveis (sempre no final)."},
    {"frente": "MQTT QoS 0",            "verso": "At most once. Fire & forget. Pode perder. 1 pacote."},
    {"frente": "MQTT QoS 1",            "verso": "At least once. Confirmado, pode duplicar. Receptor deve ser idempotente."},
    {"frente": "MQTT QoS 2",            "verso": "Exactly once. 4 etapas: PUBLISH→PUBREC→PUBREL→PUBCOMP."},
    {"frente": "MQTT Broker",           "verso": "Intermediário. Publishers e subscribers não se conhecem. Ex: Mosquitto, HiveMQ."},
]

if __name__ == "__main__":
    print(f"Questões P2 extras: {len(QUESTOES_P2_EXTRA)}")
    print(f"Flashcards P2 extras: {len(FLASHCARDS_P2_EXTRA)}")
    por_topico = {}
    for q in QUESTOES_P2_EXTRA:
        t = q["topico"]
        por_topico[t] = por_topico.get(t, 0) + 1
    for t, n in sorted(por_topico.items()):
        print(f"  {t}: {n} questões")
