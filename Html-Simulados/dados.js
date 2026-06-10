window.ROBO_DADOS = {
  "geradoEm": "2026-06-10 08:59",
  "topicos": [
    {
      "id": "p1_definicao",
      "nome": "Definição e Classificação de SE",
      "prova": "p1"
    },
    {
      "id": "p1_hardware",
      "nome": "Hardware: µP vs µC + Arquiteturas",
      "prova": "p1"
    },
    {
      "id": "p1_arduino",
      "nome": "Arduino Uno R3 e GPIOs",
      "prova": "p1"
    },
    {
      "id": "p1_eletron",
      "nome": "Eletrônica: R, C, Diodos, Transistores",
      "prova": "p1"
    },
    {
      "id": "p1_memoria",
      "nome": "Memória ATMega328P",
      "prova": "p1"
    },
    {
      "id": "p1_registr",
      "nome": "Registradores e Operações Binárias",
      "prova": "p1"
    },
    {
      "id": "p1_iot",
      "nome": "IoT e Protocolos de Comunicação",
      "prova": "p1"
    },
    {
      "id": "p2_precisao_exatidao",
      "nome": "Precisão, Exatidão e Linearidade",
      "prova": "p2"
    },
    {
      "id": "p2_referencias_ruido_wdt",
      "nome": "Referências, Ruído, WDT e Resolução",
      "prova": "p2"
    },
    {
      "id": "p2_adc_dac_pwm",
      "nome": "ADC, DAC, PWM e Amostragem (Nyquist)",
      "prova": "p2"
    },
    {
      "id": "p2_atmega_registradores",
      "nome": "ATMega328P: Harvard, Memória e Registradores",
      "prova": "p2"
    },
    {
      "id": "p2_interrupcoes_timers",
      "nome": "Interrupções, ISR e Timers",
      "prova": "p2"
    },
    {
      "id": "p2_projeto_se_software",
      "nome": "Projeto de SE, Software e Linguagens",
      "prova": "p2"
    },
    {
      "id": "p2_comunicacao_uart_i2c",
      "nome": "Comunicação: UART, I2C, SPI, ESP-NOW",
      "prova": "p2"
    },
    {
      "id": "p2_iot_mqtt_http",
      "nome": "IoT: HTTP e MQTT",
      "prova": "p2"
    }
  ],
  "questoes": [
    {
      "id": "d01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual característica distingue Hard Real Time de Soft Real Time?",
      "opcoes": [
        "Hard RT é mais rápido",
        "Hard RT não tolera falhas no tempo; Soft RT pode operar mesmo com falhas",
        "Hard RT usa mais memória",
        "Soft RT não existe em SE"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Hard RT: requisitos rígidos que NÃO podem ser violados (ex: airbag). Soft RT pode atrasar (ex: streaming).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "d02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "MC",
      "tier": "B",
      "pergunta": "Qual classificação de SE depende de recursos externos como servidores ou internet?",
      "opcoes": [
        "Autônomos",
        "De tempo real",
        "Em rede",
        "Móveis"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Sistemas Em Rede (IoT) dependem de recursos externos e apresentam os maiores desafios de segurança.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "d03",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "ESCREVA",
      "tier": "B",
      "pergunta": "Explique Edge Computing e por que é importante para IoT.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Processamento no ponto de coleta dos dados. Benefícios: reduz banda, aumenta segurança (transmite menos), permite atuação local imediata sem servidor, aumenta resiliência.",
      "resposta_esperada": "Processamento no ponto de coleta dos dados. Benefícios: reduz banda, aumenta segurança (transmite menos), permite atuação local imediata sem servidor, aumenta resiliência.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "d04",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "O airbag de um carro deve ser classificado como:",
      "opcoes": [
        "Soft Real Time — pode atrasar um pouco",
        "Hard Real Time — falhas no tempo custam vidas",
        "Em rede — usa CAN",
        "Móvel — está em um veículo"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Airbag tem requisito rígido de tempo — qualquer atraso é inaceitável. Hard Real Time.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "h01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Liste 3 diferenças fundamentais entre Microprocessador e Microcontrolador.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "1) µP só tem CPU; µC integra CPU+memória+clock+GPIO+ADC. 2) µP precisa de componentes externos; µC é autossuficiente. 3) µP usa Von Neumann; µC usa Harvard. 4) µC tem menor consumo, custo e tamanho.",
      "resposta_esperada": "1) µP só tem CPU; µC integra CPU+memória+clock+GPIO+ADC. 2) µP precisa de componentes externos; µC é autossuficiente. 3) µP usa Von Neumann; µC usa Harvard. 4) µC tem menor consumo, custo e tamanho.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "h02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual arquitetura permite pipeline (buscar instrução enquanto executa outra)?",
      "opcoes": [
        "Von Neumann",
        "CISC",
        "Harvard",
        "x86"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Harvard separa memórias de dados e instruções → acesso simultâneo → pipeline. Von Neumann usa barramento único → gargalo.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "h03",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "O ATMega328P usa qual arquitetura de memória?",
      "opcoes": [
        "Von Neumann — memória única",
        "Harvard — Flash para código, SRAM para dados",
        "RISC puro — sem memória interna",
        "Cache L1/L2 como Intel"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "ATMega328P: Flash (32KB) = programa; SRAM (2KB) = dados; EEPROM (1KB) = dados não-voláteis. Barramentos separados.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "h04",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "COMPLETE",
      "tier": "S",
      "pergunta": "Complete: Em Von Neumann há _____ barramento(s). Em Harvard há _____ barramentos separados por tipo.",
      "opcoes": [],
      "resposta": "UM / DOIS (separados)",
      "respostas": [
        "UM / DOIS (separados)"
      ],
      "explicacao": "Von Neumann: barramento único → bottleneck. Harvard: barramentos separados → mais rápido.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "a01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Cite os pinos do Arduino Uno R3 com funções especiais e qual é cada função.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "0,1: UART (Rx,Tx). 2,3: INT0,INT1. 3,5,6,9,10,11: PWM. 10-13: SPI. A4,A5: I2C. 13: LED interno. A0-A5: ADC 10 bits.",
      "resposta_esperada": "0,1: UART (Rx,Tx). 2,3: INT0,INT1. 3,5,6,9,10,11: PWM. 10-13: SPI. A4,A5: I2C. 13: LED interno. A0-A5: ADC 10 bits.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "a02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Corrente máxima recomendada por pino digital do Arduino Uno R3?",
      "opcoes": [
        "5mA",
        "20mA normal, 40mA máx absoluto; total 200mA",
        "100mA",
        "1A"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Cada pino: <20mA recomendado, máx 40mA. Total de todos os pinos: 200mA. Sempre use resistor para LEDs!",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "a03",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Por que não usar pinos 0 e 1 enquanto o Arduino está conectado via USB?",
      "opcoes": [
        "São apenas entradas",
        "Estão conectados ao conversor USB-Serial — conflito",
        "USB danifica esses pinos",
        "Arduino não tem UART"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Pinos 0 e 1 ligados ao ATmega16U2 (conversor USB-Serial). Usá-los junto com USB causa conflito de dados.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "a04",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "CALC",
      "tier": "A",
      "pergunta": "Calcule o resistor para LED vermelho (Vled=2V, I=10mA) com fonte de 9V.",
      "opcoes": [],
      "resposta": "700",
      "respostas": [
        "700"
      ],
      "explicacao": "V_R = 9-2 = 7V. R = 7/0,01 = 700Ω. Comercial: 680Ω. P = 680×0,01² = 0,068W → usar 1/8W.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "Ω (comercial: 680Ω)",
      "tolerancia": 50,
      "itens": []
    },
    {
      "id": "e01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Explique o que é e para que serve um resistor de Pull-Up. Dê um exemplo.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Resistor entre Vcc e o pino de entrada. Botão aberto → pino lê HIGH. Botão pressionado (GND) → lê LOW. Evita entradas flutuantes. R ≈ 4,7KΩ.",
      "resposta_esperada": "Resistor entre Vcc e o pino de entrada. Botão aberto → pino lê HIGH. Botão pressionado (GND) → lê LOW. Evita entradas flutuantes. R ≈ 4,7KΩ.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "e02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "O capacitor de desacoplamento (bypass) tem função principal de:",
      "opcoes": [
        "Armazenar energia",
        "Filtrar interferências de alta frequência na alimentação do CI",
        "Converter CA em CC",
        "Proteger contra curto"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "100nF próximo à alimentação filtra ruídos de alta frequência gerados pelo circuito digital.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "e03",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Em qual zona de operação o transistor BJT funciona como CHAVE FECHADA?",
      "opcoes": [
        "Corte — sem corrente de base",
        "Ativa — ampliação linear",
        "Saturação — máxima corrente coletor-emissor",
        "Bloqueio"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Corte = chave aberta. Saturação = chave fechada. Prática: ib ≈ 10% de ic para garantir saturação.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "e04",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "B",
      "pergunta": "O diodo zener polarizado inversamente acima da tensão de ruptura é usado como:",
      "opcoes": [
        "Amplificador",
        "Proteção contra sobretensão / regulador de tensão",
        "Chave digital",
        "Capacitor"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Zener mantém tensão constante mesmo variando corrente. Usado como regulador e proteção.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "e05",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "CALC",
      "tier": "A",
      "pergunta": "Resistência total de 3 resistores em PARALELO: 10Ω, 10Ω e 5Ω?",
      "opcoes": [],
      "resposta": "2.5",
      "respostas": [
        "2.5"
      ],
      "explicacao": "1/Rt = 1/10+1/10+1/5 = 0,4. Rt = 2,5Ω. Sempre menor que o menor resistor.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "Ω",
      "tolerancia": 0.3,
      "itens": []
    },
    {
      "id": "m01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_memoria",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Descreva os 3 tipos de memória do ATMega328P, tamanhos e para que cada uma serve.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "FLASH (32KB): sketch. Não volátil. | SRAM (2KB): variáveis em execução. Volátil. | EEPROM (1KB): dados não-voláteis que sobrevivem ao desligamento.",
      "resposta_esperada": "FLASH (32KB): sketch. Não volátil. | SRAM (2KB): variáveis em execução. Volátil. | EEPROM (1KB): dados não-voláteis que sobrevivem ao desligamento.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "m02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_memoria",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual memória do ATMega328P perde conteúdo ao desligar?",
      "opcoes": [
        "Flash",
        "SRAM — variáveis e dados em execução",
        "EEPROM",
        "Todas"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "SRAM = volátil. Flash e EEPROM = não-voláteis. Variáveis são perdidas ao reiniciar, o sketch permanece.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "r01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Escreva o código para ativar APENAS o bit 5 do DDRD sem alterar os outros bits.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "DDRD |= (1 << 5);  — OR com máscara 00100000, ativa bit 5, preserva os demais.",
      "resposta_esperada": "DDRD |= (1 << 5);  — OR com máscara 00100000, ativa bit 5, preserva os demais.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "r02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Escreva o código para DESATIVAR o bit 3 do PORTB sem afetar os outros bits.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "PORTB &= ~(1 << 3);  — NOT(00001000)=11110111. AND com PORTB zera bit 3, preserva todos.",
      "resposta_esperada": "PORTB &= ~(1 << 3);  — NOT(00001000)=11110111. AND com PORTB zera bit 3, preserva todos.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "r03",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "O registrador DDR com bit em 0 (zero) configura o pino como:",
      "opcoes": [
        "Saída digital",
        "Entrada digital",
        "Entrada analógica",
        "PWM"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "DDR = Data Direction Register. 0=entrada, 1=saída. pinMode(pino,INPUT) escreve 0 no bit do DDR.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "r04",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual operação lógica INVERTE (toggle) um bit específico de um registrador?",
      "opcoes": [
        "AND (&)",
        "OR (|)",
        "XOR (^)",
        "NOT (~)"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "XOR: 0^1=1, 1^1=0. PORTB ^= (1<<PB5) inverte o LED a cada chamada.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "r05",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "COMPLETE",
      "tier": "S",
      "pergunta": "Para ler o botão no pino 2 (PD2):\nbotao = ( (1 << ___ ) & _____ ) >> ____;",
      "opcoes": [],
      "resposta": "PD2 (ou 2) / PIND / 2",
      "respostas": [
        "PD2 (ou 2) / PIND / 2"
      ],
      "explicacao": "PIND = registrador de leitura da porta D. Máscara (1<<PD2) isola o bit 2. Shift >>2 retorna 0 ou 1.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "i01",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_iot",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Compare UART e I2C: fios, velocidade e quantos dispositivos suporta cada um.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "UART: 2 fios (Tx,Rx). <5Mbps. Apenas 2 pontos. Assíncrono. Full-duplex. | I2C: 2 fios (SDA,SCL). <5Mbps. Até 1008 dispositivos. Síncrono. Half-duplex. Endereço 7 bits.",
      "resposta_esperada": "UART: 2 fios (Tx,Rx). <5Mbps. Apenas 2 pontos. Assíncrono. Full-duplex. | I2C: 2 fios (SDA,SCL). <5Mbps. Até 1008 dispositivos. Síncrono. Half-duplex. Endereço 7 bits.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "i02",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_iot",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual protocolo usa 4 fios, é síncrono, full-duplex e tem até 65Mbps?",
      "opcoes": [
        "UART",
        "I2C",
        "SPI",
        "LoRa"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "SPI: MOSI, MISO, SCK, SS. Síncrono. Full-duplex. Até 65Mbps. Usado também para gravação ISP.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "i03",
      "origem": "banco",
      "prova": "p1",
      "topico": "p1_iot",
      "tipo": "MC",
      "tier": "B",
      "pergunta": "No I2C, o bit ACK após o endereço indica que:",
      "opcoes": [
        "O mestre confirmou",
        "O escravo com aquele endereço existe e está pronto",
        "Mensagem corrompida",
        "Barramento ocupado"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Mestre envia endereço 7 bits + R/W. Escravo existente puxa SDA para 0 (ACK). Caso contrário: NACK.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "q01",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Explique a diferença entre PRECISÃO e EXATIDÃO com um exemplo concreto.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Precisão: reprodutibilidade (valores sempre próximos). Exatidão: proximidade do real. Termômetro mostrando sempre 38°C (real=36°C): preciso mas inexato. Calibração corrige inexatidão. Média corrige imprecisão aleatória.",
      "resposta_esperada": "Precisão: reprodutibilidade (valores sempre próximos). Exatidão: proximidade do real. Termômetro mostrando sempre 38°C (real=36°C): preciso mas inexato. Calibração corrige inexatidão. Média corrige imprecisão aleatória.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "q02",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Sensor com imprecisão por ruído ALEATÓRIO. Melhor estratégia?",
      "opcoes": [
        "Trocar o sensor",
        "Calcular a média das leituras (ex: média móvel)",
        "Calibrar o offset",
        "Aumentar resolução do ADC"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Ruído aleatório tem média próxima de zero — a média das leituras cancela o ruído. Erro sistemático requer calibração.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "q03",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "A média móvel é preferida à média simples porque:",
      "opcoes": [
        "É mais precisa matematicamente",
        "Não requer cálculo",
        "Usa as N últimas amostras continuamente — mais dinâmica",
        "É mais fácil de implementar"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Média móvel: buffer circular das N últimas amostras. Substitui a mais antiga pela nova. Mais eficiente e dinâmica.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "v01",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "CALC",
      "tier": "S",
      "pergunta": "ADC 10 bits, Vref=5V. Qual tensão corresponde à leitura 512?",
      "opcoes": [],
      "resposta": "2.5",
      "respostas": [
        "2.5"
      ],
      "explicacao": "V = (512/1023) × 5 ≈ 2,50V. Dividir por 1023 (não 1024) pois o intervalo vai de 0 a 1023.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "V",
      "tolerancia": 0.05,
      "itens": []
    },
    {
      "id": "v02",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "CALC",
      "tier": "S",
      "pergunta": "Quantos bits são necessários para medir 0 a 100°C com resolução de 0,5°C?",
      "opcoes": [],
      "resposta": "8",
      "respostas": [
        "8"
      ],
      "explicacao": "Valores necessários = 100/0,5 + 1 = 201. 2^7=128 (insuficiente). 2^8=256 (suficiente). Resposta: 8 bits.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "bits",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "v03",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Por que o Arduino Uno NÃO possui DAC integrado?",
      "opcoes": [
        "É muito caro",
        "ATMega328P não inclui DAC; Arduino usa PWM como alternativa",
        "DAC não é útil em SE",
        "DAC está só no ESP32"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "ATMega328P não tem DAC. Para saída analógica, Arduino usa PWM — tensão média filtrada.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "v04",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Explique o que é Duty Cycle no PWM e como ele simula uma saída analógica.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Duty Cycle = % do tempo em HIGH. DC=50% → tensão média = 50% de Vcc = 2,5V. Capacitor suaviza o sinal. Arduino: resolução 8 bits (0-255), freq. típica 490Hz.",
      "resposta_esperada": "Duty Cycle = % do tempo em HIGH. DC=50% → tensão média = 50% de Vcc = 2,5V. Capacitor suaviza o sinal. Arduino: resolução 8 bits (0-255), freq. típica 490Hz.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "v05",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Referência analógica DEFAULT do Arduino Uno?",
      "opcoes": [
        "1,1V interna",
        "3,3V",
        "Vcc (5V) — tensão de alimentação",
        "Tensão no AREF"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Default = Vcc (5V). Alternativas: INTERNAL (1,1V) ou EXTERNAL (pino AREF). Cuidado: não usar analogRead() antes de mudar referência!",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "v06",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Nyquist: para representar corretamente um sinal, a taxa de amostragem deve ser:",
      "opcoes": [
        "Igual à freq. máxima",
        "O dobro da frequência máxima do sinal",
        "10× a frequência máxima",
        "Independente da frequência"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Nyquist: fs ≥ 2 × fmax. Para sinal de 1kHz → fs ≥ 2kHz.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "t01",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "O que é uma ISR e quais cuidados especiais deve ter ao escrevê-la?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "ISR = função chamada automaticamente quando ocorre interrupção. Cuidados: 1) Deve ser CURTA. 2) Sem delay(). 3) Variáveis compartilhadas → 'volatile'. 4) Sem Serial.print(). 5) Não retorna valor.",
      "resposta_esperada": "ISR = função chamada automaticamente quando ocorre interrupção. Cuidados: 1) Deve ser CURTA. 2) Sem delay(). 3) Variáveis compartilhadas → 'volatile'. 4) Sem Serial.print(). 5) Não retorna valor.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "t02",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "CALC",
      "tier": "S",
      "pergunta": "Timer1 do Arduino (16MHz), prescaler=256. Valor de OCR1A para interrupção a cada 1 segundo?",
      "opcoes": [],
      "resposta": "62500",
      "respostas": [
        "62500"
      ],
      "explicacao": "16.000.000 / 256 = 62.500 ciclos/s. OCR1A = 62500. Prescaler 64 daria 250.000 > 65535 (inválido p/ 16 bits).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "(adimensional)",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "t03",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Quais pinos do Arduino Uno suportam interrupções EXTERNAS (INT0, INT1)?",
      "opcoes": [
        "Pinos 0 e 1",
        "Pinos 2 e 3",
        "Pinos 9 e 10",
        "Pinos A0 e A1"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Pino 2 = INT0, Pino 3 = INT1. Únicos pinos com interrupção externa dedicada no Uno.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "t04",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "O Timer0 controla delay(), millis() e micros(). Isso significa que:",
      "opcoes": [
        "Não se deve reconfigurar o Timer0 para outros usos",
        "delay() é mais precisa que timer manual",
        "Timer0 pode ser substituído pelo Timer2",
        "Tempo é por hardware externo"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Timer0 é usado internamente pelo Arduino. Reconfigurá-lo quebra delay/millis/micros. Use Timer1 ou Timer2.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "t05",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Explique o WDT (Watch Dog Timer) e como resolve o problema de travamento.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "WDT = timer com clock independente. MCU deve resetá-lo periodicamente via wdt_reset(). Se MCU travar, para de resetar o WDT → WDT reseta o sistema → operação restaurada.",
      "resposta_esperada": "WDT = timer com clock independente. MCU deve resetá-lo periodicamente via wdt_reset(). Se MCU travar, para de resetar o WDT → WDT reseta o sistema → operação restaurada.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "t06",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Diferença entre Timer0 (8 bits) e Timer1 (16 bits)?",
      "opcoes": [
        "Timer0 é mais preciso",
        "Timer1 conta até 65535 vs 255 — permite intervalos maiores sem mudar prescaler",
        "Timer1 só funciona com interrupção externa",
        "Timer0 tem mais prescalers"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Timer0/2: 8 bits → 0 a 255. Timer1: 16 bits → 0 a 65535. Com prescaler 256: Timer0 dura ~4ms; Timer1 ~1 segundo.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_pe_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Um sensor de temperatura é testado 10 vezes no mesmo ponto. Os valores obtidos são: 25,1 / 25,0 / 25,2 / 24,9 / 25,1 / 25,0 / 25,2 / 25,0 / 25,1 / 25,0 °C. O valor real é 23,5 °C. Como esse sensor é classificado?",
      "opcoes": [
        "Preciso e exato",
        "Impreciso e inexato",
        "Preciso e inexato",
        "Impreciso e exato"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Os valores são muito estáveis (variação de apenas 0,3 °C em 10 medições), o que indica ALTA PRECISÃO. Porém, a média das leituras (~25,06 °C) está longe do valor real (23,5 °C) — diferença de 1,56 °C. Isso é um erro sistemático, indicando BAIXA EXATIDÃO. Portanto: Preciso e Inexato.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_pe_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual técnica é eficaz para reduzir os efeitos do ruído aleatório na precisão de uma medição, mas NÃO resolve a inexatidão?",
      "opcoes": [
        "Calibração com referência externa",
        "Cálculo de média (simples ou móvel)",
        "Uso de referência interna do MCU",
        "Aplicação de filtro passa-baixas de hardware"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "A média (simples ou móvel) cancela o ruído aleatório, melhorando a PRECISÃO (estabilidade). Porém, se houver inexatidão (erro sistemático), a média vai convergir ESTAVELMENTE para o valor ERRADO. Para corrigir a inexatidão, é necessária calibração com referência externa.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_pe_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Um instrumento tem exatidão de ± (1,5% + 3). Ao medir um valor de 20,0 V, qual é a faixa de valores possíveis para o valor real?",
      "opcoes": [
        "19,70 V a 20,30 V",
        "19,67 V a 20,33 V",
        "19,50 V a 20,50 V",
        "19,85 V a 20,15 V"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Cálculo: 1,5% de 20,0 = 0,30 V. Mais 3 na última casa decimal (centésimos) = 0,03 V. Erro total = ±(0,30 + 0,03) = ±0,33 V. Faixa: 20,0 - 0,33 = 19,67 V até 20,0 + 0,33 = 20,33 V.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_pe_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Sobre a não-linearidade de sensores, qual afirmativa está CORRETA?",
      "opcoes": [
        "A não-linearidade afeta igualmente todos os pontos da faixa de medição",
        "A não-linearidade é um tipo de imprecisão que pode ser corrigida por média",
        "A não-linearidade ocorre tipicamente nos extremos da faixa de operação",
        "Sensores digitais são imunes à não-linearidade"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "A não-linearidade é mais comum nos extremos da faixa de operação do sensor. Na região central, a resposta tende a ser mais linear. NÃO é uma forma de imprecisão (não se corrige por média) — é um erro de modelagem da relação entre entrada e saída. Pode ser corrigida matematicamente com um polinômio de correção ou simplesmente limitando a faixa usada.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_pe_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual é a principal vantagem da média móvel com vetor circular em relação à média simples em sistemas embarcados?",
      "opcoes": [
        "A média móvel corrige erros sistemáticos; a média simples não",
        "A média móvel tem complexidade O(1) por atualização, enquanto a simples é O(N)",
        "A média móvel usa menos memória que a média simples",
        "A média móvel funciona sem manter histórico de amostras"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "A média simples precisa somar todas as N amostras a cada nova leitura — O(N) operações. A média móvel com vetor circular faz apenas 1 subtração e 1 adição por atualização — O(1). Isso é muito mais eficiente em MCUs com recursos limitados. A memória usada é a mesma (vetor de N elementos).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_pe_006",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "B",
      "pergunta": "Explique a diferença entre precisão e exatidão usando a analogia do atirador em um alvo. Descreva os quatro casos possíveis e cite qual o problema mais grave e por quê.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "PRECISÃO = estabilidade/repetibilidade (tiros agrupados). EXATIDÃO = proximidade do valor real (tiros perto do centro). 4 casos: (1) Pouco preciso + pouco exato = tiros espalhados e longe. (2) Muito preciso + pouco exato = tiros agrupados mas longe — erro sistemático. (3) Pouco preciso + muito exato = tiros espalhados mas média perto do centro. (4) Muito preciso + muito exato = ideal. Mais grave: INEXATIDÃO. Sem referência externa, não há como saber que está medindo errado, e a média não ajuda — ela convergirá para o valor errado com muita estabilidade.\n\n  💡 A analogia do atirador é clássica na disciplina. O ponto chave é: precisão e exatidão são INDEPENDENTES. Um sistema pode ser preciso sem ser exato e vice-versa. A inexatidão é mais grave pois representa um erro oculto — o sistema parece estar funcionando corretamente.",
      "resposta_esperada": "PRECISÃO = estabilidade/repetibilidade (tiros agrupados). EXATIDÃO = proximidade do valor real (tiros perto do centro). 4 casos: (1) Pouco preciso + pouco exato = tiros espalhados e longe. (2) Muito preciso + pouco exato = tiros agrupados mas longe — erro sistemático. (3) Pouco preciso + muito exato = tiros espalhados mas média perto do centro. (4) Muito preciso + muito exato = ideal. Mais grave: INEXATIDÃO. Sem referência externa, não há como saber que está medindo errado, e a média não ajuda — ela convergirá para o valor errado com muita estabilidade.\n\n  💡 A analogia do atirador é clássica na disciplina. O ponto chave é: precisão e exatidão são INDEPENDENTES. Um sistema pode ser preciso sem ser exato e vice-versa. A inexatidão é mais grave pois representa um erro oculto — o sistema parece estar funcionando corretamente.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_res_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Ao comparar as fontes de referência de tensão para um ADC, qual chip apresenta a melhor estabilidade com a temperatura?",
      "opcoes": [
        "Diodo Zener (700 ppm/°C)",
        "TL431 — Texas Instruments (600 ppm/°C)",
        "5040AIDG4 — Texas Instruments (3 ppm/°C)",
        "Tensão de alimentação Vcc (sem especificação de ppm/°C)"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "O coeficiente de temperatura (ppm/°C) indica quanto a tensão varia por grau Celsius. Quanto MENOR, MELHOR. O chip 5040AIDG4 tem apenas 3 ppm/°C — com variação de 10°C, a referência muda apenas 0,003% (0,15 mV em 5 V). O Zener tem 700 ppm/°C — com variação de 10°C, muda 0,7% (35 mV em 5 V). A Vcc é a pior opção por variar com a carga do circuito.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_res_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "No Arduino Uno, ao usar analogReference(EXTERNAL), qual cuidado é obrigatório?",
      "opcoes": [
        "Não é possível usar analogRead() com referência externa",
        "Não chamar analogRead() ANTES de configurar corretamente o pino AREF",
        "A referência externa deve ser sempre igual à Vcc (5 V)",
        "O pino AREF deve ser conectado ao GND antes de qualquer leitura"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Chamar analogRead() antes de configurar corretamente o pino AREF com referência externa pode danificar permanentemente o ATMega328P. O datasheet proíbe isso explicitamente. O circuito interno de referência pode colidir com a tensão externa aplicada no AREF. A referência externa deve estar entre 0 V e 5 V.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_res_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Você precisa medir pH de 0,0 a 14,0 com resolução de 0,01 unidades de pH usando o ADC do Arduino Uno (10 bits). (a) Quantos valores distintos são necessários? (b) Quantos bits de ADC são necessários? (c) O Arduino Uno é suficiente?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "(a) De 0,00 a 14,00 com passo 0,01: (14,00 - 0,00) / 0,01 + 1 = 1401 valores. (b) 2^10 = 1024 (insuficiente). 2^11 = 2048 >= 1401. Necessário: 11 bits. (c) NÃO — o Arduino Uno tem 10 bits (1024 valores), insuficiente para 1401 valores.\n\n  💡 Fórmula: N_valores = (max - min) / resolucao + 1. Para achar os bits: encontrar N tal que 2^N >= N_valores. 10 bits = 1024 < 1401 → insuficiente. 11 bits = 2048 >= 1401 → suficiente. Para este projeto, seria necessário um ADC externo de 12 bits ou mais.",
      "resposta_esperada": "(a) De 0,00 a 14,00 com passo 0,01: (14,00 - 0,00) / 0,01 + 1 = 1401 valores. (b) 2^10 = 1024 (insuficiente). 2^11 = 2048 >= 1401. Necessário: 11 bits. (c) NÃO — o Arduino Uno tem 10 bits (1024 valores), insuficiente para 1401 valores.\n\n  💡 Fórmula: N_valores = (max - min) / resolucao + 1. Para achar os bits: encontrar N tal que 2^N >= N_valores. 10 bits = 1024 < 1401 → insuficiente. 11 bits = 2048 >= 1401 → suficiente. Para este projeto, seria necessário um ADC externo de 12 bits ou mais.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_res_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Sobre o WDT (Watch Dog Timer), qual afirmativa está CORRETA?",
      "opcoes": [
        "O WDT reseta o MCU periodicamente, independentemente do estado do programa",
        "O MCU deve enviar um sinal ao WDT dentro do intervalo configurado; caso contrário, o WDT reseta o MCU",
        "O WDT é controlado pelo mesmo clock do MCU e para quando o MCU trava",
        "O WDT só funciona para detectar falhas de hardware, não de software"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "O WDT tem clock INDEPENDENTE do MCU. O programa deve 'alimentar' o WDT (chamar wdt_reset()) dentro do intervalo configurado. Se o MCU travar e não alimentar o WDT, o contador chega a zero e gera RESET. Como o clock é independente, o WDT continua contando mesmo que o MCU trave. Isso o torna eficaz contra travamentos de software E hardware.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_res_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Um sensor de pressão entrega tensão de 0,5 V (0 kPa) a 4,5 V (100 kPa). O ADC do Arduino Uno aceita 0 a 5 V com 10 bits. (a) Quantos dos 1024 valores do ADC são efetivamente usados? (b) Que porcentagem da resolução está sendo desperdiçada?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "(a) A faixa usada é 4,5 - 0,5 = 4,0 V. Fração da faixa total: 4,0/5,0 = 0,8. Valores usados: 0,8 x 1024 ≈ 819 valores. (b) Desperdiçados: 1024 - 819 = 205 valores. Porcentagem desperdiçada: 205/1024 ≈ 20% da resolução.\n\n  💡 Quando o sensor não cobre toda a faixa do ADC, perdemos resolução. A solução é usar um circuito de condicionamento de sinal (escala) que remapeia 0,5-4,5 V para 0-5 V, usando todos os 1024 valores do ADC.",
      "resposta_esperada": "(a) A faixa usada é 4,5 - 0,5 = 4,0 V. Fração da faixa total: 4,0/5,0 = 0,8. Valores usados: 0,8 x 1024 ≈ 819 valores. (b) Desperdiçados: 1024 - 819 = 205 valores. Porcentagem desperdiçada: 205/1024 ≈ 20% da resolução.\n\n  💡 Quando o sensor não cobre toda a faixa do ADC, perdemos resolução. A solução é usar um circuito de condicionamento de sinal (escala) que remapeia 0,5-4,5 V para 0-5 V, usando todos os 1024 valores do ADC.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_adc_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual arquitetura de ADC é utilizada no ATMega328P (Arduino Uno) e qual é sua principal característica operacional?",
      "opcoes": [
        "Flash (Paralela) — opera em tempo real sem retardo",
        "SAR (Successive Approximation Register) — faz busca binária em N ciclos para N bits",
        "Sigma-Delta — oversampling com alta resolução (18-24 bits)",
        "Pipeline — múltiplas etapas paralelas para alta velocidade"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "O ATMega328P usa a arquitetura SAR (Successive Approximation Register). Ela funciona como uma busca binária: tenta aproximar o valor digital ao analógico com N passos (1 por bit). Para 10 bits, são 10 ciclos de clock para uma conversão. Introduz retardo, mas usa circuito muito mais simples que a Flash (que precisaria de 1023 comparadores para 10 bits).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_adc_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "O Teorema de Nyquist estabelece que, para representar fielmente um sinal com componentes até 2 kHz, a taxa de amostragem mínima deve ser:",
      "opcoes": [
        "1.000 amostras/segundo",
        "2.000 amostras/segundo",
        "4.000 amostras/segundo",
        "8.000 amostras/segundo"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Nyquist: f_amostragem >= 2 x f_maxima. Para sinal com componentes até 2 kHz: f_amostragem >= 2 x 2.000 = 4.000 SA/s. A taxa mínima é o DOBRO (não igual) da frequência máxima do sinal. Se amostrar menos que isso, ocorre aliasing — o sinal parece ter frequência diferente.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_adc_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual afirmativa sobre o Arduino Uno e saídas analógicas está CORRETA?",
      "opcoes": [
        "O Arduino Uno possui DAC de 8 bits integrado nos pinos marcados com (~)",
        "O Arduino Uno não possui DAC; os pinos (~) geram PWM de 8 bits que simula tensão analógica",
        "O Arduino Uno possui DAC de 10 bits, igual à resolução do ADC",
        "O Arduino Uno usa rede R-2R interna para geração de tensão analógica"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "O ATMega328P NÃO possui DAC integrado. Os pinos marcados com (~) no Arduino Uno (3, 5, 6, 9, 10, 11) geram PWM de 8 bits (0 a 255), com frequência padrão de 490 Hz ou 980 Hz. O efeito 'analógico' vem da tensão média: Vout = Duty Cycle x Vcc. Para DAC verdadeiro, é necessário um chip externo (ex.: MCP4725 via I2C).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_adc_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Um sinal PWM tem Duty Cycle de 37,5% com Vcc = 3,3 V. Qual é a tensão média de saída?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Vout = 37,5% x 3,3 V = 0,375 x 3,3 = 1,2375 V ≈ 1,24 V\n\n  💡 A fórmula do PWM é simples: Vout = Duty_Cycle(%) x Vcc. 37,5% = 0,375. Vout = 0,375 x 3,3 = 1,2375 V. Esse é o princípio do PWM — a carga 'vê' a tensão média, não os pulsos.",
      "resposta_esperada": "Vout = 37,5% x 3,3 V = 0,375 x 3,3 = 1,2375 V ≈ 1,24 V\n\n  💡 A fórmula do PWM é simples: Vout = Duty_Cycle(%) x Vcc. 37,5% = 0,375. Vout = 0,375 x 3,3 = 1,2375 V. Esse é o princípio do PWM — a carga 'vê' a tensão média, não os pulsos.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_adc_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Sobre os dois tipos de DAC estudados, qual afirmativa está CORRETA?",
      "opcoes": [
        "O DAC por Resistores Ponderados usa apenas dois valores de resistores (R e 2R)",
        "A rede R-2R exige resistores com valores que dobram a cada bit (R, 2R, 4R, 8R...)",
        "A rede R-2R usa apenas dois valores de resistores (R e 2R), independente do número de bits",
        "O DAC por Resistores Ponderados é mais fácil de construir que a rede R-2R para muitos bits"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "A rede R-2R é a solução elegante: independente do número de bits, usa sempre apenas os valores R e 2R. Isso facilita enormemente a construção e a manutenção da precisão dos resistores. O DAC por Resistores Ponderados usa R, 2R, 4R, 8R... (dobrando a cada bit), o que torna difícil manter precisão para muitos bits (relação 128:1 para 8 bits).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_reg_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "O ATMega328P usa Arquitetura Harvard. Qual das opções descreve corretamente essa arquitetura?",
      "opcoes": [
        "Um único barramento compartilhado entre instruções e dados, igual ao Von Neumann",
        "Barramentos separados para programa e dados, permitindo acesso simultâneo",
        "Instrução e dado têm o mesmo tamanho de palavra (8 bits) para eficiência",
        "A memória de programa e de dados são fisicamente o mesmo chip"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Na Arquitetura Harvard, há barramentos SEPARADOS para programa (Flash) e dados (SRAM). Isso permite que o MCU busque a próxima instrução da Flash enquanto ainda executa a instrução atual (usando os dados da SRAM) — acesso SIMULTÂNEO. No ATMega328P: instrução = 16 bits (Flash); dado = 8 bits (SRAM). Tamanhos DIFERENTES são permitidos e normais na arquitetura Harvard.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_reg_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "No ATMega328P, qual registrador define a DIREÇÃO (entrada ou saída) dos pinos de uma porta, e como funciona?",
      "opcoes": [
        "PINx — bit 0 = saída, bit 1 = entrada",
        "PORTx — bit 0 = entrada, bit 1 = saída",
        "DDRx — bit 0 = entrada, bit 1 = saída",
        "DDRx — bit 0 = saída, bit 1 = entrada"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "DDRx (Data Direction Register) define a direção de cada pino da porta X. bit = 0 → ENTRADA (input). bit = 1 → SAÍDA (output). PORTx é o registrador de saída de dados (ou controle do pull-up quando entrada). PINx é SOMENTE LEITURA — reflete o estado elétrico atual dos pinos.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_reg_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Escreva o código C (sem usar pinMode/digitalWrite) para: (a) configurar PD5 como saída e PD2 como entrada com pull-up interno; (b) acender o LED em PD5; (c) ler o estado de PD2 e armazenar em uma variável uint8_t.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "// (a) Configurar direção e pull-up\nDDRD |= (1 << 5);    // PD5 como SAÍDA\nDDRD &= ~(1 << 2);   // PD2 como ENTRADA\nPORTD |= (1 << 2);   // pull-up interno em PD2\n\n// (b) Acender LED em PD5\nPORTD |= (1 << 5);   // PD5 = HIGH\n\n// (c) Ler PD2\nuint8_t estado = (PIND >> 2) & 0x01;  // 0 ou 1\n\n  💡 Operações: SET = |= (1<<n), RESET = &= ~(1<<n), READ = (PINx >> n) & 0x01. O pull-up interno é ativado escrevendo 1 no bit correspondente do PORTx quando o pino está configurado como entrada (DDRx = 0). PIN é somente leitura — lê o estado elétrico real do pino.",
      "resposta_esperada": "// (a) Configurar direção e pull-up\nDDRD |= (1 << 5);    // PD5 como SAÍDA\nDDRD &= ~(1 << 2);   // PD2 como ENTRADA\nPORTD |= (1 << 2);   // pull-up interno em PD2\n\n// (b) Acender LED em PD5\nPORTD |= (1 << 5);   // PD5 = HIGH\n\n// (c) Ler PD2\nuint8_t estado = (PIND >> 2) & 0x01;  // 0 ou 1\n\n  💡 Operações: SET = |= (1<<n), RESET = &= ~(1<<n), READ = (PINx >> n) & 0x01. O pull-up interno é ativado escrevendo 1 no bit correspondente do PORTx quando o pino está configurado como entrada (DDRx = 0). PIN é somente leitura — lê o estado elétrico real do pino.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_reg_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual instrução em C inverte (toggle) o estado de um bit específico de um registrador sem afetar os demais bits?",
      "opcoes": [
        "PORTB |= (1 << PB5);",
        "PORTB &= ~(1 << PB5);",
        "PORTB ^= (1 << PB5);",
        "PORTB = (1 << PB5);"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "A operação XOR (^) inverte o bit: 0 XOR 1 = 1, 1 XOR 1 = 0. Para os outros bits: x XOR 0 = x (mantém). |= ativa (SET). &= ~() desativa (RESET). = atribui diretamente (DESTRÓI os outros bits). ^= inverte (TOGGLE) apenas o bit desejado.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_reg_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Sobre os 3 tipos de memória do ATMega328P, qual afirmativa está CORRETA?",
      "opcoes": [
        "A SRAM armazena o programa e é não volátil (mantém dados sem energia)",
        "A Flash armazena variáveis e a EEPROM armazena o programa",
        "A EEPROM é não volátil e usada para dados que devem persistir; a SRAM é volátil",
        "A Flash tem 2 KB e a SRAM tem 32 KB no ATMega328P"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Flash (32 KB): programa (sketch + bootloader). NÃO VOLÁTIL. Palavras de 16 bits. SRAM (2.304 B = 2 KB + registradores): variáveis durante execução. VOLÁTIL. EEPROM (1 KB): dados do usuário que devem persistir ao desligar. NÃO VOLÁTIL. Flash e EEPROM são ambas não voláteis. SRAM perde tudo ao desligar.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_int_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Qual regra é fundamental ao escrever uma ISR (Interrupt Service Routine)?",
      "opcoes": [
        "A ISR deve ser o mais longa possível para tratar todos os eventos",
        "A ISR deve ser a mais curta possível, sem delay() ou operações demoradas",
        "A ISR pode chamar outras ISRs recursivamente",
        "Variáveis globais usadas na ISR não precisam de volatile"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "A ISR deve ser CURTA. Durante a execução da ISR, a maioria das outras interrupções fica bloqueada. Uma ISR longa pode causar: 1) Perda de outros eventos importantes; 2) Comportamento imprevisível do delay() e millis() (dependem de timer); 3) Código menos determinístico. Variáveis compartilhadas com código fora da ISR DEVEM ser 'volatile'.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_int_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Com clock de 16 MHz e prescaler de 256, qual valor deve ser carregado em OCR1A do Timer 1 para gerar exatamente 1 interrupção por segundo? Verifique também se esse valor cabe no Timer 1 (16 bits).",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Contagens por segundo com prescaler 256: 16.000.000 / 256 = 62.500. Portanto OCR1A = 62.500 (modo CTC) ou TCNT1 recarregado com 0. Verificação: Timer 1 tem 16 bits → máximo 65.535. 62.500 < 65.535. ✓ VÁLIDO.\n\n  💡 Fórmula: OCR1A = (f_clock / prescaler / f_interrupcao) - 1 ≈ 62.499. Para prescaler 64: 16M/64 = 250.000 > 65.535 → inválido! Para prescaler 256: 16M/256 = 62.500 → válido! Para prescaler 1024: 16M/1024 = 15.625 → também válido (menor resolução de tempo).",
      "resposta_esperada": "Contagens por segundo com prescaler 256: 16.000.000 / 256 = 62.500. Portanto OCR1A = 62.500 (modo CTC) ou TCNT1 recarregado com 0. Verificação: Timer 1 tem 16 bits → máximo 65.535. 62.500 < 65.535. ✓ VÁLIDO.\n\n  💡 Fórmula: OCR1A = (f_clock / prescaler / f_interrupcao) - 1 ≈ 62.499. Para prescaler 64: 16M/64 = 250.000 > 65.535 → inválido! Para prescaler 256: 16M/256 = 62.500 → válido! Para prescaler 1024: 16M/1024 = 15.625 → também válido (menor resolução de tempo).",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_int_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Por que é recomendado usar o Timer 1 para interrupções personalizadas em vez do Timer 0 no Arduino Uno?",
      "opcoes": [
        "O Timer 1 tem frequência de clock mais alta que o Timer 0",
        "O Timer 0 controla millis(), micros() e delay(); alterá-lo quebra essas funções",
        "O Timer 1 é o único timer com prescaler no ATMega328P",
        "O Timer 0 não suporta modo CTC, enquanto o Timer 1 suporta"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Timer 0 (8 bits) é usado internamente pelo Arduino para delay(), millis() e micros(). Alterar o prescaler ou modo do Timer 0 quebra essas funções. Timer 1 (16 bits) não tem esse problema — é seguro para interrupções customizadas. Além disso, Timer 1 tem 16 bits (0 a 65.535) vs 8 bits do Timer 0 (0 a 255), permitindo intervalos muito maiores sem prescaler alto.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_int_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Por que variáveis compartilhadas entre uma ISR e o código principal devem ser declaradas com 'volatile'?",
      "opcoes": [
        "Para garantir que a variável seja armazenada na EEPROM",
        "Para impedir que o compilador a otimize em registrador de CPU, garantindo que sempre seja lida da memória RAM",
        "Para que a ISR possa modificar a variável sem travar o sistema",
        "Para aumentar a velocidade de acesso à variável dentro da ISR"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Sem 'volatile', o compilador pode otimizar e manter a variável em um registrador de CPU, sem reler da memória a cada acesso. Se a ISR atualiza o valor na memória, o código principal continua usando o valor antigo (que está no registrador de CPU). 'volatile' instrui o compilador a SEMPRE reler da memória a cada acesso, garantindo que as atualizações da ISR sejam visíveis no código principal.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_int_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual a diferença entre o modo Normal e o modo CTC do Timer 1?",
      "opcoes": [
        "No modo CTC o timer conta até 65.535; no modo Normal, conta até OCR1A",
        "No modo CTC o timer zera automaticamente ao atingir OCR1A; no modo Normal, é preciso zerar manualmente na ISR",
        "O modo Normal é mais preciso porque não interrompe o contador",
        "Não há diferença prática entre os dois modos para geração de interrupções"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Modo Normal: o timer conta até 65.535 (overflow), ou você compara com OCR1A mas precisa zerar TCNT1 manualmente dentro da ISR. Modo CTC (Clear Timer on Compare): o hardware zera TCNT1 automaticamente quando atinge OCR1A. Resultado: ISR menor (sem linha de reset), timing mais preciso (sem variação causada pelo tempo de execução até o reset manual).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_sw_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "A norma IEC 61131-3 define 5 linguagens de programação para PLCs. Qual dessas linguagens foi DESCONTINUADA na revisão mais recente?",
      "opcoes": [
        "LD — Ladder Diagram",
        "FBD — Function Block Diagram",
        "IL — Instruction List",
        "SFC — Sequential Function Chart"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "A norma IEC 61131-3 define 5 linguagens: LD (Ladder Diagram) — gráfica, ativa. FBD (Function Block Diagram) — gráfica, ativa. SFC (Sequential Function Chart) — gráfica, ativa. ST (Structured Text) — textual, ativa. IL (Instruction List) — textual, DESCONTINUADA. O OpenPLC ainda suporta todas as 5, mas IL foi oficialmente descontinuada por ser de baixo nível e difícil de usar.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_sw_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "O que é um Cross Compiler e por que é essencial em sistemas embarcados?",
      "opcoes": [
        "Compila código para a mesma arquitetura em que está sendo executado, acelerando o processo",
        "Converte código de uma linguagem de alto nível para outra (ex.: LD para C++)",
        "Gera código executável para uma arquitetura diferente da máquina onde o compilador roda",
        "Compila código de múltiplas linguagens simultaneamente em um único executável"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Cross Compiler: o compilador roda em uma plataforma (ex.: PC com x86) mas gera código executável para outra plataforma (ex.: ATMega328P com AVR). É essencial em SE porque MCUs geralmente não têm recursos (memória, display, sistema de arquivos) para rodar um compilador por conta própria. O GCC-AVR usado no Arduino IDE é um cross compiler típico.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_sw_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "O PIC16F877 tem 35 instruções. Isso o caracteriza como:",
      "opcoes": [
        "CISC — Complex Instruction Set Computer, com muitas instruções complexas",
        "RISC — Reduced Instruction Set Computer, com poucas instruções simples e alta performance",
        "Harvard CISC — combina arquitetura Harvard com conjunto complexo de instruções",
        "Von Neumann RISC — combina o barramento único com instrução reduzida"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "RISC (Reduced Instruction Set Computer) = poucas instruções, cada uma simples e executada em poucos ciclos (tipicamente 1 ciclo por instrução). O PIC16F877 tem apenas 35 instruções divididas em 6 grupos — exemplo clássico de RISC. CISC (ex.: x86 Intel/AMD) tem centenas de instruções, muitas complexas. RISC é mais eficiente em hardware simples com frequências de clock menores.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_sw_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "No método de gravação via ISP (In-Circuit Serial Programming), qual sinal é responsável por colocar o MCU em modo de programação?",
      "opcoes": [
        "MOSI — Master Out Slave In",
        "SCK — Serial Clock",
        "RESET",
        "MISO — Master In Slave Out"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "O conector ICSP (In-Circuit Serial Programming) do Arduino tem 6 pinos: MOSI (envio de dados), MISO (recepção), SCK (clock síncrono), VTG (alimentação), GND, e RESET. O pino RESET é mantido em LOW pelo programador para colocar o MCU em modo de programação. Após a gravação, o RESET é liberado e o MCU inicia normalmente.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_com_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Em uma conexão UART entre Arduino Uno (5V) e ESP8266 (3,3V), qual ligação está CORRETA?",
      "opcoes": [
        "TX do Arduino → TX do ESP8266; RX → RX",
        "TX do Arduino → RX do ESP8266 diretamente (5V para 3,3V é seguro)",
        "TX do Arduino → RX do ESP8266 com divisor de tensão ou level shifter",
        "RX do Arduino → RX do ESP8266; TX → TX (mesmos sinais devem se conectar)"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Dois cuidados: (1) Conexão CRUZADA: TX de A vai para RX de B e vice-versa. (2) Compatibilidade de tensão: 5V no pino RX do ESP8266 (3,3V) pode danificar permanentemente o chip. É necessário um divisor de tensão (R1 + R2) ou um conversor de nível bidirecional (level shifter). Sentido contrário (ESP→Arduino, 3,3V → 5V) geralmente é seguro.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_com_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "No protocolo I2C, o que indica um NACK após o endereço do dispositivo?",
      "opcoes": [
        "O dispositivo recebeu os dados com sucesso",
        "O barramento está em estado de START",
        "Nenhum dispositivo com aquele endereço existe ou está pronto",
        "O mestre deve repetir o endereço com bit R/W invertido"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "No I2C, após enviar o endereço, o mestre aguarda o ACK. ACK = o receptor puxa SDA para LOW → dispositivo existente e pronto. NACK = SDA fica HIGH (ninguém puxou) → nenhum dispositivo com aquele endereço está no barramento, ou o dispositivo existe mas não está pronto. A função Wire.endTransmission() retorna 2 (ou diferente de 0) quando recebe NACK.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_com_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "No I2C, como é gerado o Start bit e o Stop bit?",
      "opcoes": [
        "Start: SCL sobe enquanto SDA está alto. Stop: SCL desce enquanto SDA está alto",
        "Start: SDA desce enquanto SCL está alto. Stop: SDA sobe enquanto SCL está alto",
        "Start: SDA sobe enquanto SCL está baixo. Stop: SDA desce enquanto SCL está baixo",
        "Start: ambos descem juntos. Stop: ambos sobem juntos"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Esta é uma das sequências mais cobradas em prova sobre I2C: START: SDA DESCE enquanto SCL está HIGH. STOP: SDA SOBE enquanto SCL está HIGH. Em condições normais de transmissão, SDA só muda quando SCL está LOW. Mudança de SDA com SCL HIGH é a forma de sinalizar início (descida) ou fim (subida).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_com_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual protocolo de comunicação oferece o maior alcance entre os estudados, e qual é sua principal limitação?",
      "opcoes": [
        "CAN — 1 km de alcance; limitado a 1 Mbps",
        "UART — 1 km de alcance; limitado a apenas 2 dispositivos",
        "LoRa — até 10 km; limitado a menos de 5 kbps de taxa de transferência",
        "ESP-NOW — 480 m; limitado a 250 bytes por pacote"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "LoRa (Long Range) é o campeão de alcance: até 10 km em campo aberto. O custo é a taxa extremamente baixa: menos de 5 kbps. Isso o torna ideal para IoT de longa distância com dados esparsos (ex.: sensores agrícolas, medidores remotos). ESP-NOW: 480 m, até 250 bytes. CAN: 1 km, 1 Mbps. UART: 1 km ponto a ponto.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_com_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Sobre o ESP-NOW, qual afirmativa está CORRETA?",
      "opcoes": [
        "O ESP-NOW usa endereços IP atribuídos por DHCP para identificar dispositivos",
        "O ESP-NOW requer um roteador Wi-Fi para funcionar como ponto de acesso",
        "O ESP-NOW usa o MAC Address do dispositivo para endereçamento e suporta até 250 bytes por pacote",
        "O ESP-NOW é bidirecional apenas quando os dispositivos estão pareados via Bluetooth"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "ESP-NOW: protocolo proprietário da Espressif. Usa o transceptor 2,4 GHz do ESP. SEM roteador — comunicação direta. Endereçamento por MAC Address (6 bytes hexadecimais únicos por dispositivo). Pacote máximo: 250 bytes. Até 20 pares. Latência mínima. Comunicação pode ser uni ou bidirecional sem configuração extra.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_iot_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "O MQTT foi criado em 1999. Qual era o problema original que motivou sua criação?",
      "opcoes": [
        "Necessidade de protocolo para comunicação em redes Wi-Fi de alta velocidade",
        "Monitoramento de sensores em oleodutos via satélite, com banda cara e conexão instável",
        "Substituir o HTTP em aplicações web de tempo real",
        "Comunicação entre PLCs industriais com protocolo padronizado"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Andy Stanford-Clark (IBM) e Arlen Nipper (Cirrus Link) criaram o MQTT em 1999 para monitorar sensores em oleodutos via SATÉLITE. Os desafios: banda de satélite cara e limitada, conexão instável, dispositivos com recursos mínimos (bateria, processamento). Solução: pacotes mínimos (até 2 bytes!), conexões TCP persistentes, modelo Pub/Sub desacoplado, QoS configurável.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_iot_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "No MQTT, um subscriber assina o tópico 'fabrica/+/motor/temperatura'. Quais mensagens ele receberá?",
      "opcoes": [
        "Apenas 'fabrica/linha1/motor/temperatura'",
        "Todos os tópicos que começam com 'fabrica/'",
        "'fabrica/linha1/motor/temperatura', 'fabrica/linha2/motor/temperatura', etc. (qualquer valor no segundo nível)",
        "Nenhuma mensagem, pois o wildcard + não pode ser usado no meio do tópico"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "O wildcard '+' substitui EXATAMENTE UM nível de tópico. Em 'fabrica/+/motor/temperatura', o '+' substitui qualquer valor no segundo nível: fabrica/linha1/motor/temperatura ✓ fabrica/linha2/motor/temperatura ✓ fabrica/setor_a/motor/temperatura ✓ fabrica/linha1/bomba/temperatura ✗ (terceiro nível 'bomba' ≠ 'motor') O '+' pode aparecer em qualquer posição no tópico (diferente do '#').",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_iot_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "MC",
      "tier": "S",
      "pergunta": "Um sistema de automação envia o comando 'abre_valvula' para uma válvula industrial. Qual nível de QoS MQTT é mais adequado e por quê?",
      "opcoes": [
        "QoS 0 — menor overhead, adequado para comandos frequentes",
        "QoS 1 — garante entrega e a duplicação não é problema para comandos",
        "QoS 2 — garante exatamente uma entrega, evitando abertura dupla da válvula",
        "QoS 2 seria excessivo; QoS 0 é suficiente para qualquer comando industrial"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Comandos para atuadores geralmente NÃO são idempotentes: 'abre_valvula' executado duas vezes pode causar problemas (abrir e fechar e abrir de novo inesperadamente). QoS 0: pode perder o comando — inaceitável. QoS 1: garante entrega, mas pode DUPLICAR — o atuador poderia receber 2 comandos. QoS 2: exatamente 1 entrega (handshake de 4 etapas). Ideal para comandos críticos.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_iot_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual é a sequência correta de troca de mensagens no QoS 2 do MQTT?",
      "opcoes": [
        "PUBLISH → PUBACK → PUBREL → PUBCOMP",
        "PUBLISH → PUBREC → PUBREL → PUBCOMP",
        "PUBLISH → PUBCOMP → PUBREC → PUBREL",
        "PUBLISH → PUBACK → PUBCOMP"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "QoS 2 tem handshake de 4 etapas: 1. Publisher → [PUBLISH] → Broker 2. Publisher ← [PUBREC] ← Broker (PUBlish RECeived — broker recebeu) 3. Publisher → [PUBREL] → Broker (PUBlish RELease — publisher confirma) 4. Publisher ← [PUBCOMP] ← Broker (PUBlish COMPlete — transação completa) QoS 1 tem apenas 2 etapas: PUBLISH → PUBACK.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_iot_005",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "MC",
      "tier": "A",
      "pergunta": "Qual é a principal diferença arquitetural entre HTTP WebSockets e MQTT?",
      "opcoes": [
        "HTTP WebSockets usa UDP; MQTT usa TCP",
        "HTTP WebSockets é um modelo cliente-servidor direto; MQTT usa modelo Pub/Sub com broker",
        "MQTT não suporta conexões persistentes; HTTP WebSockets sim",
        "HTTP WebSockets suporta QoS configurável; MQTT não"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "HTTP WebSockets: cliente conecta diretamente ao servidor. Full-duplex. Bidirecional direto entre 2 partes. MQTT: modelo Pub/Sub com BROKER intermediário. Publishers não conhecem subscribers. Subscribers não conhecem publishers. O broker é o único ponto de contato. Isso dá ao MQTT escalabilidade muito maior — N publishers, M subscribers, todos desacoplados. Ambos usam TCP. MQTT suporta QoS 0/1/2; HTTP WebSockets não.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "p2_av_001",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "SOMA",
      "tier": "S",
      "pergunta": "Sobre precisão e exatidão em sistemas de medição, some os valores das afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 53,
      "respostas": [
        "53"
      ],
      "explicacao": "Corretas: 01+04+16+32 = 53. 02 ERRADA: precisão e exatidão são independentes — sensor exato pode ser impreciso. 08 ERRADA: não-linearidade ocorre nos EXTREMOS da faixa, não uniformemente.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "A precisão de um sistema está relacionada à sua estabilidade e repetibilidade, independentemente de o valor ser correto ou não",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "A exatidão está diretamente ligada à ausência de ruído aleatório; sistemas exatos são necessariamente precisos",
          "correto": false,
          "motivo": ""
        },
        {
          "valor": "04",
          "texto": "O cálculo de média móvel é uma técnica eficaz para reduzir os efeitos do ruído aleatório sobre a precisão",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "A não-linearidade de um sensor provoca erros distribuídos uniformemente por toda a faixa de operação",
          "correto": false,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "Um sensor que sempre retorna 5% acima do valor real, com leituras estáveis, é preciso e inexato",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "A inexatidão é o problema mais grave pois, sem referência externa, não é possível detectar o erro",
          "correto": true,
          "motivo": ""
        }
      ]
    },
    {
      "id": "p2_av_002",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "SOMA",
      "tier": "S",
      "pergunta": "Sobre interrupções e timers no ATMega328P, some os valores das afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 29,
      "respostas": [
        "29"
      ],
      "explicacao": "Corretas: 01+04+08+16 = 29. 02 ERRADA: Timer 0 tem 8 bits (0-255), NÃO 16 bits. 32 ERRADA: cross compiler gera para dispositivo DIFERENTE, não o mesmo.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "Uma ISR deve ser a mais curta possível, evitando delay() ou comunicação serial dentro dela",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "O Timer 0 do ATMega328P tem 16 bits de resolução e é responsável pelas funções millis() e delay()",
          "correto": false,
          "motivo": ""
        },
        {
          "valor": "04",
          "texto": "Variáveis compartilhadas entre ISR e código principal devem ser declaradas com volatile",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "Com clock de 16 MHz e prescaler 256, o Timer 1 conta até 62.500, gerando 1 interrupção por segundo",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "A norma IEC 61131-3 define cinco linguagens de programação padrão para PLCs, sendo a IL a descontinuada",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "Cross compilers geram código executável para o mesmo dispositivo em que o compilador está sendo executado",
          "correto": false,
          "motivo": ""
        }
      ]
    },
    {
      "id": "p2_av_003",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "SOMA",
      "tier": "S",
      "pergunta": "Sobre os protocolos de comunicação em sistemas embarcados, some os valores das afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 45,
      "respostas": [
        "45"
      ],
      "explicacao": "Corretas: 01+04+08+32 = 45. 02 ERRADA: conexão é CRUZADA — TX de A vai para RX de B e vice-versa. 16 ERRADA: 8N1 = 8 bits, NENHUMA paridade (N=None), 1 stop. Não há paridade par.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "A UART é assíncrona; a sincronização entre transmissor e receptor é feita pelo baud rate configurado em ambos",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "Na conexão UART entre dois dispositivos, TX de A conecta em TX de B e RX em RX",
          "correto": false,
          "motivo": ""
        },
        {
          "valor": "04",
          "texto": "Os bits de dados em uma transmissão UART são enviados com o LSB (bit menos significativo) primeiro",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "A conexão direta de 5V ao pino RX de um módulo de 3,3V pode danificar permanentemente o receptor",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "A configuração SERIAL_8N1 indica 8 bits de dados, 1 bit de paridade par e 1 stop bit",
          "correto": false,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "A UART suporta comunicação full-duplex — transmissão e recepção simultâneas por fios separados",
          "correto": true,
          "motivo": ""
        }
      ]
    },
    {
      "id": "p2_av_004",
      "origem": "banco",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "SOMA",
      "tier": "S",
      "pergunta": "Sobre a arquitetura do ATMega328P e acesso a registradores, some os valores das afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 27,
      "respostas": [
        "27"
      ],
      "explicacao": "Corretas: 01+02+08+16 = 27. 04 ERRADA: DDRx: bit 0 = ENTRADA, bit 1 = SAÍDA (afirmativa invertida). 32 ERRADA: EEPROM é NÃO VOLÁTIL (persiste sem energia). SRAM é que é volátil.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "O ATMega328P usa Arquitetura Harvard, com barramentos separados para programa e dados, permitindo acesso simultâneo",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "Na Harvard do ATMega328P, a instrução tem 16 bits e o dado tem 8 bits — tamanhos diferentes são normais",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "04",
          "texto": "O registrador DDRx define a direção dos pinos: bit 0 = saída e bit 1 = entrada",
          "correto": false,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "O registrador PINx é somente leitura e reflete o estado elétrico atual de cada pino",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "Para ativar um bit específico sem alterar os demais, usa-se reg |= (1 << n)",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "A EEPROM do ATMega328P é uma memória volátil de 1 KB para armazenar dados temporários",
          "correto": false,
          "motivo": ""
        }
      ]
    },
    {
      "id": "av_d01",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual dos itens abaixo NÃO representa uma grandeza a ser considerada em um projeto de SE?",
      "opcoes": [
        "Indutância",
        "Campo Magnético",
        "Tensão Elétrica",
        "Corrente Elétrica"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Tensão, corrente e campo magnético são grandezas físicas medidas em SE. Indutância é propriedade de componente, não grandeza de projeto.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d02",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual das características abaixo é uma DESVANTAGEM na utilização de hardwares específicos para SE?",
      "opcoes": [
        "Perda da portabilidade entre projetos diferentes",
        "Insensibilidade a fatores ambientais (ruídos, vibração, calor)",
        "Aumento do consumo energético",
        "Redução da performance"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Hardware específico é otimizado para uma função — não serve para outros projetos (perde portabilidade).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d03",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Apresente um motivo válido para adotar um SBC, ao invés de uma placa de protótipo convencional, em um projeto de SE.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Um SBC suporta aplicações mais complexas, inclusive baseadas em SOs robustos com Linux, mesmo mantendo pinos GPIO para acesso direto a sensores e atuadores. Isso os assemelha a computadores convencionais mantendo parte dos recursos de placas de protótipo.",
      "resposta_esperada": "Um SBC suporta aplicações mais complexas, inclusive baseadas em SOs robustos com Linux, mesmo mantendo pinos GPIO para acesso direto a sensores e atuadores. Isso os assemelha a computadores convencionais mantendo parte dos recursos de placas de protótipo.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d04",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Na comparação entre Raspberry Pi e Arduino Q, qual seria a principal vantagem apresentada pela linha Arduino Q?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "A principal vantagem do Arduino Q nessa comparação específica é a presença de um microcontrolador dedicado à interface com o mundo físico — algo que o Raspberry Pi não possui diretamente.",
      "resposta_esperada": "A principal vantagem do Arduino Q nessa comparação específica é a presença de um microcontrolador dedicado à interface com o mundo físico — algo que o Raspberry Pi não possui diretamente.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d05",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_definicao",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Identifique um desafio específico dos SE automotivos que não está presente nos SE médicos, por exemplo.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "SE automotivos enfrentam ruído eletromagnético intenso, altas temperaturas e vibração mecânica constante — fatores ambientais que geralmente não estão presentes em equipamentos médicos de ambiente controlado.",
      "resposta_esperada": "SE automotivos enfrentam ruído eletromagnético intenso, altas temperaturas e vibração mecânica constante — fatores ambientais que geralmente não estão presentes em equipamentos médicos de ambiente controlado.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d06",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_iot",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Por que se diz que o IoT possui uma rede com 'topologia dinâmica'?",
      "opcoes": [
        "Porque os dispositivos podem entrar ou sair a qualquer momento",
        "Porque funciona bem nas topologias estrela, barramento e anel",
        "Porque admitem distâncias variáveis entre os dispositivos",
        "Porque podemos ter diversos servidores conectados"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Em IoT, dispositivos conectam e desconectam dinamicamente — diferente de redes industriais fixas.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d07",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_iot",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Por que a criptografia, mecanismo muito utilizado em segurança, tem aplicação limitada em IoT?",
      "opcoes": [
        "Consumo energético derivado do processamento",
        "Recursos limitados de rede",
        "Tempo de resposta",
        "Desenvolvimento tecnológico"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Algoritmos de criptografia são computacionalmente pesados. Dispositivos IoT têm bateria limitada — criptografia drenaria rapidamente.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_d08",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_iot",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Tecnologias específicas de IoT (LoWPAN, Zigbee, RFID) — o que normalmente trazem de diferente?",
      "opcoes": [
        "Mais desempenho",
        "Maior alcance",
        "Maior flexibilidade e compatibilidade",
        "Menor consumo energético"
      ],
      "resposta": "D",
      "respostas": [
        "D"
      ],
      "explicacao": "Tecnologias IoT específicas sacrificam velocidade e alcance por menor consumo energético — essencial para dispositivos com bateria.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h01",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Liste ao menos duas características que distinguem os microprocessadores dos microcontroladores.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Microprocessadores obedecem à arquitetura Von Neumann, exigem diversos componentes auxiliares externos para operar e têm clocks mais rápidos. Microcontroladores integram CPU+memória+periféricos e usam Harvard.",
      "resposta_esperada": "Microprocessadores obedecem à arquitetura Von Neumann, exigem diversos componentes auxiliares externos para operar e têm clocks mais rápidos. Microcontroladores integram CPU+memória+periféricos e usam Harvard.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h02",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Identifique abaixo uma característica que diferencia uma placa-mãe de µP de uma placa de protótipo de µC:",
      "opcoes": [
        "Fonte de alimentação externa apenas nas placas-mãe",
        "Interfaces de comunicação integradas apenas nas placas de protótipo",
        "Projeto específico para cada processador, apenas nas placas-mãe",
        "Uma placa de protótipo pode ser descartada em muitos projetos, utilizando-se diretamente o processador"
      ],
      "resposta": "D",
      "respostas": [
        "D"
      ],
      "explicacao": "Placas de protótipo facilitam o desenvolvimento mas podem ser removidas do produto final — o µC fica diretamente no circuito.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h03",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual dos itens NÃO é adotado como técnica para redução de consumo de um microcontrolador?",
      "opcoes": [
        "Redução da tensão de alimentação",
        "Desativação de parte das portas GPIO",
        "Redução do clock",
        "Modo 'sleep'"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "GPIOs não consomem energia significativa sozinhas. Técnicas reais: reduzir tensão/clock, desligar periféricos internos, modo sleep.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h04",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Há um recurso que nem sempre está disponível no µC, mas pode ser implementado por software em GPIO. Qual é?",
      "opcoes": [
        "Entrada para clock externo",
        "Conversor analógico/digital (ADC)",
        "Porta de comunicação UART, I2C ou SPI",
        "Pino de leitura para interrupções externas"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "UART, I2C e SPI podem ser emuladas via bit-banging (software em GPIO). ADC e clock externo não se emulam em software.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h05",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A miniaturização usa SMD, QFP e BGA para tratar qual fator físico limitante?",
      "opcoes": [
        "A necessidade de conexão física/elétrica do µC ao circuito e os pinos necessários",
        "A técnica de litografia disponível para fabricação",
        "A dissipação de potência pelos microcontroladores",
        "A dificuldade de fabricação, montagem e manutenção"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "O fator limitante são os pinos de conexão física. SMD/QFP/BGA reduzem espaço mantendo as conexões elétricas.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h06",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Dispositivos computacionais tipicamente têm 3 barramentos. Em SE há sistemas com mais barramentos. O que determina isso?",
      "opcoes": [
        "O uso da arquitetura de Von Neumann",
        "O uso da arquitetura de Harvard",
        "A necessidade de acesso simultâneo a vários processadores",
        "O baixo consumo energético"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Harvard separa memórias de código e dados com barramentos distintos → mais de 3 barramentos.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h07",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_hardware",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para compatibilizar o acesso de múltiplos dispositivos aos dados sem problemas de compartilhamento, utiliza-se o...",
      "opcoes": [
        "... fanout.",
        "... barramento de dados.",
        "... tri-state.",
        "... Bus Request."
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Tri-state permite que um dispositivo 'solte' o barramento (alta impedância), evitando conflito de saídas simultâneas.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_h08",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_memoria",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para armazenamento TEMPORÁRIO, usa-se um componente específico em SE. Identifique-o:",
      "opcoes": [
        "Buffers",
        "Latches",
        "Drivers",
        "Memória EEPROM"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Latches são registradores de armazenamento temporário usados no barramento de dados para manter valores estáveis.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e01",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Considerando que a energia não se perde, qual o destino da energia retirada do resistor que permite o acendimento de um LED?",
      "opcoes": [
        "Energia mecânica sob a forma de vibração",
        "Energia térmica sob a forma de aquecimento do resistor",
        "Devolução da energia química para a pilha que alimenta o circuito",
        "Não há perda de energia, e sim apenas a sua redução"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Energia elétrica dissipada no resistor converte-se em calor (efeito Joule). P = R × I².",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e02",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para saber o valor da resistência de um resistor, qual o método que NÃO se usa?",
      "opcoes": [
        "Analisar o tamanho do resistor",
        "Analisar as cores das faixas pintadas no corpo do resistor",
        "A leitura direta do valor no corpo do resistor",
        "A conversão dos números lidos na superfície seguindo as regras para 2 e 3 dígitos significativos"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "O tamanho indica a potência suportada, NÃO a resistência. Valor: código de cores, impresso ou código SMD.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e03",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual das afirmativas está correta quando à função do capacitor?",
      "opcoes": [
        "Permite a circulação de corrente através dele, apenas após estar carregado",
        "Permite a circulação de corrente pelo circuito série onde está instalado, através do deslocamento de cargas dos seus terminais até o momento em que fica completamente carregado",
        "Enquanto está sendo carregado, funciona como um isolante para correntes contínuas, mas permite a circulação de correntes alternadas, independente de sua intensidade",
        "Nunca são polarizados, podendo ser conectados ao circuito em qualquer posição sem risco"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Capacitor permite corrente transitória durante a carga (deslocamento de cargas entre as placas). Após carregado, bloqueia DC.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e04",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual a diferença de operação entre um capacitor eletrolítico e um de tântalo?",
      "opcoes": [
        "São bastante similares, porém o de tântalo é menor, e tem vida útil muito superior",
        "São muito diferentes em diversas características, exceto pela função básica de capacitor",
        "São muito similares, exceto pelo custo",
        "São similares, menos quanto à polarização (só o eletrolítico é polarizado)"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Ambos são eletrolíticos polarizados. O tântalo tem menor volume, maior estabilidade e vida útil muito superior ao eletrolítico de alumínio.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e05",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual das afirmativas abaixo NÃO justifica a utilização de um arranjo paralelo de capacitores?",
      "opcoes": [
        "Distribuir a tensão aplicada entre os componentes",
        "Agregar funcionalidades de capacitores com técnicas diferentes de fabricação",
        "Obter um valor não comercialmente disponível no mercado",
        "Aumentar a capacitância total"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Capacitores em paralelo têm a MESMA tensão — não a distribuem. Em série é que a tensão se divide. Paralelo soma capacitâncias.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e06",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Considerando as funções de desacoplamento e estabilização realizadas pelos capacitores em SE, como se associa o valor do capacitor e sua função típica?",
      "opcoes": [
        "Capacitores maiores para estabilização, e menores para desacoplamento",
        "Capacitores menores para estabilização, e maiores para desacoplamento",
        "Capacitores maiores para ambas as funções",
        "Capacitores menores para ambas as funções"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Estabilização de tensão: 100µF+. Desacoplamento de alta frequência próximo ao CI: 100nF.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e07",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Explique de forma sucinta porque a presença da capacitância parasita implica no aumento de consumo de dispositivos computacionais de maior performance.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "A capacitância parasita implica em atraso na mudança de estado — o capacitor parasita precisa ser carregado e descarregado. Para reduzir o tempo de carga/descarga em alta velocidade, é necessário aumentar a corrente do circuito, acelerando o processo mas trazendo aumento do consumo e da temperatura do dispositivo.",
      "resposta_esperada": "A capacitância parasita implica em atraso na mudança de estado — o capacitor parasita precisa ser carregado e descarregado. Para reduzir o tempo de carga/descarga em alta velocidade, é necessário aumentar a corrente do circuito, acelerando o processo mas trazendo aumento do consumo e da temperatura do dispositivo.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e08",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Em termos de comportamento para condução de corrente, o semicondutor está...",
      "opcoes": [
        "... entre os condutores e os isolantes",
        "... antes dos isolantes, oferecendo dificuldade ainda maior de condução",
        "... depois dos condutores, oferecendo maior facilidade para circulação",
        "... na mesma posição dos condutores, permitindo sempre a condução"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Semicondutor = entre condutor e isolante. Conduz sob condições específicas (temperatura, tensão, luz).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e09",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para a produção de dispositivos semicondutores, são criados dois tipos de material. Qual das opções abaixo os identifica CORRETAMENTE (os dois tipos)?",
      "opcoes": [
        "Transistor e Diodo",
        "Semicondutor tipo N e Semicondutor tipo P",
        "Condutor e Isolante",
        "PTH e SMD"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Tipo N: dopagem pentavalente (ex: Fósforo) → elétrons livres. Tipo P: dopagem trivalente (ex: Alumínio) → buracos.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e10",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "As junções semicondutoras são criadas com as seguintes características: dopagem com átomos pentavalentes para tornar o semicondutor propenso a...",
      "opcoes": [
        "... liberar elétrons. Ex: Fósforo",
        "... receber elétrons. Ex: Fósforo",
        "... liberar elétrons. Ex: Alumínio",
        "... receber elétrons. Ex: Alumínio"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Pentavalente (5 elétrons de valência) → elétron extra → tipo N (doador de elétrons). Trivalente (3) → buraco → tipo P.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e11",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A região de depleção é provocada pela migração de elétrons... Qual das afirmativas NÃO representa um efeito prático da zona de depleção?",
      "opcoes": [
        "A diferenciação entre dispositivos PN e NP",
        "A criação de uma diferença de potencial entre os dois materiais que precisa ser ultrapassada para ocorrer a circulação de corrente",
        "A determinação de um sentido único de fluxo de corrente na junção",
        "A variedade operacional entre dispositivos semicondutores fabricados com diferentes tipos"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "A zona de depleção cria barreira de potencial (~0,7V no Si) e define a unidirecionalidade. 'Diferenciar PN de NP' não é efeito prático dela.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e12",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Na proteção de um transistor operando como driver para um relê ou motor, normalmente se conecta um diodo na saída do transistor. Como é feita esta interligação?",
      "opcoes": [
        "Entre o transistor e a bobina do componente, evitando corrente reversa",
        "Em paralelo com o transistor, no sentido de circulação da corrente, permitindo a descarga de correntes reversas",
        "Em paralelo com o relê, no sentido inverso de circulação da corrente, permitindo a descarga de correntes reversas",
        "Na conexão do transistor com o dispositivo digital, impedindo o retorno da tensão reversa"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Diodo flyback: paralelo com a bobina do relê, polarizado inversamente à corrente normal. Quando transistor desliga, conduz a corrente induzida.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e13",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Explique a diferença entre um diodo comum e um do tipo zener.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Ambos permitem circulação de corrente em apenas um sentido. A circulação no sentido inverso só pode ocorrer para tensões reversas acima da tensão de ruptura. No zener, esta tensão de ruptura é definida como especificação (controlada). No diodo comum ela é variável e não controlada. Ambos mantêm tensão relativamente constante nos terminais.",
      "resposta_esperada": "Ambos permitem circulação de corrente em apenas um sentido. A circulação no sentido inverso só pode ocorrer para tensões reversas acima da tensão de ruptura. No zener, esta tensão de ruptura é definida como especificação (controlada). No diodo comum ela é variável e não controlada. Ambos mantêm tensão relativamente constante nos terminais.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e14",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Podemos dizer que, em um transistor bipolar...",
      "opcoes": [
        "... a tensão sobre a base controla a corrente no coletor.",
        "... a corrente na base controla a corrente no coletor.",
        "... a tensão sobre a base controla a tensão no coletor.",
        "... a corrente no coletor controla a corrente de base."
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "BJT é controlado por CORRENTE: Ic = β × Ib. A tensão na base abre a junção, mas é a corrente que controla o coletor.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e15",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A aplicação do transistor depende fundamentalmente da zona de polarização. Identifique a afirmativa que associa o tipo de polarização à aplicação:",
      "opcoes": [
        "Ativa: operação como chave",
        "Corte: operação como amplificador",
        "Saturação: operação como retificador",
        "Corte E Saturação: operação como chave"
      ],
      "resposta": "D",
      "respostas": [
        "D"
      ],
      "explicacao": "Chave: alterna entre CORTE (aberto/desligado) e SATURAÇÃO (fechado/ligado). Amplificador usa a zona ATIVA (linear).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e16",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Identifique abaixo a característica que NÃO está presente em um transistor bipolar do tipo 'Darlington':",
      "opcoes": [
        "Ganho (beta) elevado",
        "Suporta corrente elevada no coletor",
        "Compatibilidade apenas com circuitos PWM",
        "Bipolar"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Darlington: dois BJT em cascata → beta muito alto + suporta alta corrente. É bipolar. NÃO tem limitação a PWM.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_e17",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_eletron",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Dentre os modos de operação de um transistor, existe um que NÃO é utilizado no circuito do driver. Qual é ele?",
      "opcoes": [
        "Corte",
        "Amplificação",
        "Saturação"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Driver digital usa Corte (desligado) e Saturação (ligado). Amplificação (zona ativa) causaria dissipação excessiva e não tem comportamento digital.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_a01",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Identifique abaixo o item que NÃO representa um desafio no tratamento de botões e chaves como entradas digitais:",
      "opcoes": [
        "Isolamento elétrico entre o circuito acionador e o circuito que alimenta a carga",
        "Suporte a entradas analógicas",
        "Debouncing",
        "Circuitos de pull-down e pull-up"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Botões são entradas DIGITAIS. 'Suporte a analógicas' não é desafio de botões. Desafios reais: debouncing, pull-up/down, isolamento em cargas pesadas.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_a02",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "MULTI",
      "tier": "",
      "pergunta": "Identifique DUAS vantagens do uso de relês convencionais como saídas digitais de SE. (Assinale as duas corretas)",
      "opcoes": [
        "Performance",
        "Isolamento do circuito acionador em relação à carga",
        "Suporte a cargas de qualquer tipo (DC e AC)",
        "Consumo energético"
      ],
      "resposta": [
        "B",
        "C"
      ],
      "respostas": [
        "B",
        "C"
      ],
      "explicacao": "Relê: isolamento elétrico (protege o µC) + suporte a DC e AC (qualquer tipo de carga). Performance e consumo NÃO são vantagens do relê.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_a03",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_arduino",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Por que o movimento do cursor do Potenciômetro não provoca um curto-circuito entre a saída de 5V e o GND do Arduino, já que em uma de suas extremidades chegamos a zero volts?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "O cursor do potenciômetro não provoca curto porque há resistência fixa entre os extremos (a trilha resistiva completa). O cursor apenas divide essa resistência — nunca a elimina. Assim, mesmo com 0V na saída, há resistência limitando a corrente.",
      "resposta_esperada": "O cursor do potenciômetro não provoca curto porque há resistência fixa entre os extremos (a trilha resistiva completa). O cursor apenas divide essa resistência — nunca a elimina. Assim, mesmo com 0V na saída, há resistência limitando a corrente.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_r01",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MC",
      "tier": "",
      "pergunta": "O acesso direto aos registradores de um µC pode trazer algumas vantagens. Qual dos itens listados NÃO É uma delas?",
      "opcoes": [
        "Maior simplicidade e transparência do código",
        "Menor ocupação de memória pelo código",
        "Maior performance",
        "Acesso a recursos indisponíveis através do acesso de 'alto nível'"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Código com registradores é mais complexo e menos legível. Vantagens reais: menor memória, maior velocidade, acesso a recursos que a API do Arduino não expõe.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_r02",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Existem 2 diferentes formas de se carregar um valor binário em um registrador: a carga direta do valor, ou o uso de expressões lógicas OU e E para definir bits específicos. Qual a vantagem do segundo método?",
      "opcoes": [
        "Não há necessidade de criação de constantes ou variáveis internas pelo compilador, reduzindo o tamanho do código",
        "Carga mais rápida",
        "Garantir a manutenção dos valores já existentes em outros bits",
        "Uso de linguagem de baixo nível, reduzindo o tamanho do código"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "PORTB = 0b00100000 zera todos os outros bits. PORTB |= (1<<PB5) preserva os demais — comportamento non-destructive, essencial ao programar registradores.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_r03",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MULTI",
      "tier": "",
      "pergunta": "Nas operações de atribuição de valores a bits, podemos dizer que: (assinale as DUAS corretas)",
      "opcoes": [
        "Lógica OU pode 'setar' bits específicos (colocar valor 1)",
        "Lógica E pode 'resetar' bits específicos (colocar valor 0)",
        "Lógica OU EXCLUSIVO pode 'setar' bits específicos (colocar valor 1)",
        "Lógica NOT com operador '!' pode inverter todos os bits de uma palavra"
      ],
      "resposta": [
        "A",
        "B"
      ],
      "respostas": [
        "A",
        "B"
      ],
      "explicacao": "OR (|) com máscara 1 → ativa bits. AND (&) com máscara 0 → desativa bits. XOR (^) inverte. NOT (~) em C inverte bit a bit mas não é o '!'.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_r04",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual o valor resultante da operação ~18 (NOT bit a bit de 18)?",
      "opcoes": [
        "B00010010",
        "237",
        "-18",
        "False"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "18 = 0b00010010. ~18 inverte todos os bits em 8 bits → 0b11101101 = 237.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_r05",
      "origem": "avaliacao",
      "prova": "p1",
      "topico": "p1_registr",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para associar o pino 13 do Arduíno Uno à entrada 5 da porta B do ATMega328P, devemos consultar ...",
      "opcoes": [
        "... o datasheet do microcontrolador ATMega328P;",
        "... o código;",
        "... o esquema eletrônico do Arduíno Uno;",
        "... a conexão elétrica do pino ao processador USB;"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "O datasheet do ATMega328P contém a tabela de mapeamento entre os pinos físicos do CI e os registradores (Port B, bit 5 = PB5 = pino 13 do Arduino). É a fonte oficial para saber a correspondência exata.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q01",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Qual das afirmativas abaixo está correta quando avaliamos os conceitos de precisão e exatidão?",
      "opcoes": [
        "Quando há muita variação nos valores medidos, mas a média destes valores é muito próxima do valor real, temos um problema de exatidão, mas não de precisão",
        "Quando temos diversos valores medidos sempre muito próximos, porém ainda distantes do valor real, temos um problema de exatidão, e não de precisão",
        "Toda medição com exatidão também é precisa",
        "Toda medição com precisão também é exata"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Valores próximos entre si = PRECISO. Distante do real = INEXATO. Pode ser preciso E inexato ao mesmo tempo (erro sistemático).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q02",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Um valor preciso pode estar incorreto? Explique.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Sim. A precisão está associada à estabilidade no valor medido (reprodutibilidade), e não à sua exatidão. Na medição de valores fixos, medidas precisas se repetem, mesmo que estejam erradas (erro sistemático).",
      "resposta_esperada": "Sim. A precisão está associada à estabilidade no valor medido (reprodutibilidade), e não à sua exatidão. Na medição de valores fixos, medidas precisas se repetem, mesmo que estejam erradas (erro sistemático).",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q03",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "O local mais provável para ocorrência de falhas de precisão é...",
      "opcoes": [
        "... o meio da escala, entre o valor mínimo e máximo",
        "... o início da escala, quando os valores são mínimos",
        "... o final da escala, quando os valores são máximos",
        "... em qualquer ponto, pois não depende do valor medido"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "A não-linearidade (e por consequência falhas de precisão) ocorre tipicamente no MEIO da escala, onde a resposta do sensor desvia mais da reta ideal.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q04",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MULTI",
      "tier": "",
      "pergunta": "A exatidão é apresentada em sensores digitais no formato ±(X%+Y). Identifique os valores X e Y: (assinale as duas corretas)",
      "opcoes": [
        "X é o percentual ACIMA OU ABAIXO do valor real que foi apresentado na medição",
        "Y é a variação da exatidão com a temperatura",
        "X é a variação da precisão na medida",
        "Y é a variação no último dígito medido"
      ],
      "resposta": [
        "A",
        "D"
      ],
      "respostas": [
        "A",
        "D"
      ],
      "explicacao": "X% = erro percentual relativo ao valor real. Y = variação no último dígito (resolução). Ex: ±(2%+2): lendo 10,0 → real entre 9,78 e 10,22.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q05",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A falta de LINEARIDADE na leitura de um sensor pode ser contornada por diversas técnicas. Indique a única técnica que NÃO deve ser utilizada:",
      "opcoes": [
        "Cálculo da Média Móvel",
        "Seleção de uma faixa de valores na zona linear do gráfico de resposta do sensor",
        "Usar uma equação matemática para tornar linear a resposta do sensor",
        "Limitar o uso ao trecho linear do gráfico"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "Média Móvel cancela RUÍDO ALEATÓRIO (imprecisão). Não resolve não-linearidade — o erro sistemático permanece após a média.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q06",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Um Arduíno Uno pode ter diferentes fontes de referência de tensão. Indique a única que NÃO É uma destas fontes:",
      "opcoes": [
        "Tensão de alimentação",
        "Uma pilha convencional conectada à porta AREF",
        "Valor fixo e igual a 1,1V, disponível internamente",
        "Fonte externa de referência"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "AREF aceita referência externa REGULADA. Pilha convencional (não regulada) danificaria o ADC. Fontes válidas: DEFAULT (Vcc), INTERNAL (1,1V), EXTERNAL (regulada no AREF).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q07",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A função analogRead(), junto com digitalRead(), podem ser utilizadas com diversas portas. Assinale a opção que NÃO PODERIA ser utilizada:",
      "opcoes": [
        "analogRead(A1)",
        "analogRead(10)",
        "analogRead(A3)",
        "digitalRead(10)"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "analogRead() só aceita pinos analógicos (A0-A5). Pino 10 é digital apenas. digitalRead(10) é válido para leitura digital.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q08",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A placa do Arduíno Uno R3 oferece diversas opções de fontes de tensão para experimentos. Assinale a opção que NÃO PODE ser utilizada como fonte de tensão:",
      "opcoes": [
        "5 volts",
        "3,3 volts",
        "1,1 volts",
        "GND (0 volts)"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "1,1V é a referência INTERNA do ADC — não é um pino de alimentação disponível na placa. Não existe saída de 1,1V no Arduino Uno.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q09",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Na leitura de tensões entre 0 e 5V na entrada analógica, com base no número de contagens do Arduíno Uno, quantos dígitos depois da vírgula podemos usar?",
      "opcoes": [
        "Nenhum (0)",
        "Um dígito",
        "Dois dígitos",
        "Três dígitos"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "Resolução = 5V/1023 ≈ 4,89mV. Tensão mínima representável: ~0,00489V → dois dígitos após a vírgula em volts (casas dos centésimos).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q10",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "No experimento de leitura de valores de tensão na porta analógica do Arduíno Uno, há cuidados especiais ao fazer a leitura de uma tensão externa. Identifique ao menos dois destes problemas.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "1) Ruído: a tensão externa pode trazer ruído eletromagnético que interfere na leitura. 2) Compartilhamento do GND: é obrigatório conectar o GND da fonte externa ao GND do Arduino, caso contrário a leitura fica errada (referência flutuante). 3) Não exceder a tensão Vref (5V) para não danificar o ADC.",
      "resposta_esperada": "1) Ruído: a tensão externa pode trazer ruído eletromagnético que interfere na leitura. 2) Compartilhamento do GND: é obrigatório conectar o GND da fonte externa ao GND do Arduino, caso contrário a leitura fica errada (referência flutuante). 3) Não exceder a tensão Vref (5V) para não danificar o ADC.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q11",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Associe as ações de correção ao problema correspondente:\n  Cálculo da Média Móvel → ?  |  Calibração → ?  |  Substituir fonte USB por fonte externa → ?",
      "opcoes": [
        "Média=Inexatidão | Calibração=Ruído | USB=Instabilidade de tensão",
        "Média=Ruído | Calibração=Inexatidão | USB=Instabilidade de tensão",
        "Média=Instabilidade | Calibração=Ruído | USB=Inexatidão",
        "Todas resolvem todos os problemas"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Média Móvel: cancela ruído aleatório. Calibração: corrige offset sistemático (inexatidão). Fonte externa: elimina instabilidade da tensão de referência USB.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_q12",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Alguns projetos exigem leitura simultânea de diversos valores analógicos. Até quantos valores podem ser lidos simultaneamente (de forma multiplexada) por uma placa Arduíno Uno?",
      "opcoes": [
        "7",
        "6",
        "2",
        "Apenas 1"
      ],
      "resposta": "D",
      "respostas": [
        "D"
      ],
      "explicacao": "O ATMega328P tem UM ADC multiplexado entre os 6 canais analógicos. Lê APENAS 1 canal por vez — não é simultâneo, é sequencial (multiplexado).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_i01",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para comparar o valor do timer0 com o registro B, qual o vetor de interrupção deve ser utilizado?",
      "opcoes": [
        "9",
        "12",
        "15",
        "16"
      ],
      "resposta": "D",
      "respostas": [
        "D"
      ],
      "explicacao": "No ATMega328P, TIMER0 COMPB corresponde ao vetor de interrupção 16 (endereço 0x001C). TIMER0 COMPA = 15, TIMER1 COMPB = 13, TIMER2 COMPB = 9.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_i02",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para medir o tempo consumido entre dois eventos externos específicos, qual o tipo de interrupção deve ser utilizada?",
      "opcoes": [
        "Captura de Evento no timer1",
        "External interrupt request 0 e 1",
        "Pin change interrupt request 0",
        "Analog Comparator"
      ],
      "resposta": "A",
      "respostas": [
        "A"
      ],
      "explicacao": "A Captura de Evento (Input Capture) do Timer1 registra automaticamente o valor do contador no momento de um evento externo no pino ICP1 — projetado exatamente para medir intervalos de tempo entre dois eventos.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_i03",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MULTI",
      "tier": "",
      "pergunta": "Os timers 0, 1 e 2 possuem características semelhantes, mas há algumas diferenças entre eles. Identifique as DUAS alternativas que identificam estas diferenças.",
      "opcoes": [
        "Um dos timers possui 16 bits",
        "Um dos timers utiliza um clock mais lento",
        "Um dos timers possui um vetor de interrupção a mais que os outros",
        "Um dos timers não pode ser alterado pelo usuário"
      ],
      "resposta": [
        "A",
        "C"
      ],
      "respostas": [
        "A",
        "C"
      ],
      "explicacao": "Timer1 é o único de 16 bits (Timer0 e Timer2 são 8 bits). Timer1 também tem o vetor CAPT (Captura de Evento), totalizando 4 vetores contra 3 dos outros (COMPA, COMPB, OVF).",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_i04",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Das funções abaixo, uma delas está disponível nos 3 timers do Arduíno. Qual é ela?",
      "opcoes": [
        "Retardo de tempo",
        "Contadores de milissegundos e microssegundos",
        "PWM",
        "Emissão de tons (áudio)"
      ],
      "resposta": "C",
      "respostas": [
        "C"
      ],
      "explicacao": "PWM está disponível nos 3 timers: Timer0 → pinos 5 e 6; Timer1 → pinos 9 e 10; Timer2 → pinos 3 e 11. delay()/millis()/micros() usam apenas Timer0; tone() usa Timer2.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_p01",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Identifique, entre as opções abaixo, qual é a única que NÃO É uma linguagem de programação utilizada em PLCs:",
      "opcoes": [
        "LD (Ladder)",
        "C++",
        "FCB (Function Block Diagram)",
        "SFC (Sequential Function Chart)"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "PLCs seguem o padrão IEC 61131-3: Ladder (LD), Function Block Diagram (FBD), Structured Text (ST), Instruction List (IL) e Sequential Function Chart (SFC). C++ é linguagem de propósito geral — não faz parte desse padrão.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_p02",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Associe as características típicas à linguagem de programação para Sistemas Embarcados Abertos: Python, Assembly e C++.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Assembly: Alta performance, baixa portabilidade (acesso direto ao hardware, código específico por arquitetura). C++: Boa performance e portabilidade, complexidade baixa comparado ao Assembly (padrão em SE abertos como Arduino). Python: Facilidade para acesso a bibliotecas de Aprendizado de Máquina, Reconhecimento de Imagens etc (alto nível, ecosistema ML rico).",
      "resposta_esperada": "Assembly: Alta performance, baixa portabilidade (acesso direto ao hardware, código específico por arquitetura). C++: Boa performance e portabilidade, complexidade baixa comparado ao Assembly (padrão em SE abertos como Arduino). Python: Facilidade para acesso a bibliotecas de Aprendizado de Máquina, Reconhecimento de Imagens etc (alto nível, ecosistema ML rico).",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_p03",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Para converter um programa escrito em Ladder para um sistema de automação proprietário para um sistema aberto em C++, utilizamos:",
      "opcoes": [
        "Um compilador cruzado",
        "Um compilador source-to-source",
        "É necessário desenvolver de novo todo o código"
      ],
      "resposta": "B",
      "respostas": [
        "B"
      ],
      "explicacao": "Um compilador source-to-source (transpiler) traduz código entre linguagens de programação mantendo o mesmo nível de abstração — ex: Ladder → C++. Compilador cruzado gera código para outra arquitetura de hardware, não muda a linguagem.",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "av_p04",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "tipo": "ESCREVA",
      "tier": "",
      "pergunta": "Dos protocolos UART, I2C, SPI, ZigBee, CAN, LoRa e ESP-Now: identifique quais são sem fio e coloque-os em ordem crescente de alcance (1=menor, 3=maior). Os demais são cabeados.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Sem fio em ordem crescente de alcance: 1) ZigBee (~10–100m, WPAN), 2) ESP-Now (~200–400m, Wi-Fi proprietário Espressif), 3) LoRa (km de alcance, LPWAN). Cabeados: UART, I2C, SPI, CAN.",
      "resposta_esperada": "Sem fio em ordem crescente de alcance: 1) ZigBee (~10–100m, WPAN), 2) ESP-Now (~200–400m, Wi-Fi proprietário Espressif), 3) LoRa (km de alcance, LPWAN). Cabeados: UART, I2C, SPI, CAN.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q01",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Um sensor de pressão é testado 10 vezes no mesmo ponto e retorna:\n  5,01 / 5,00 / 5,02 / 4,99 / 5,01 / 5,00 / 5,02 / 5,01 / 5,00 / 5,01 bar\nO valor real é 4,80 bar. Como você classifica esse sensor?\n(Cite: precisão, exatidão, tipo de erro)",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Alta PRECISÃO (variação < 0,02 bar — leituras muito agrupadas). Baixa EXATIDÃO (média ≈ 5,007 bar está longe do real 4,80). Erro sistemático: o sensor sempre lê ~5% a mais. Diagnóstico: preciso e inexato.",
      "resposta_esperada": "Alta PRECISÃO (variação < 0,02 bar — leituras muito agrupadas). Baixa EXATIDÃO (média ≈ 5,007 bar está longe do real 4,80). Erro sistemático: o sensor sempre lê ~5% a mais. Diagnóstico: preciso e inexato.",
      "passos": [
        "Passo 1 — Analise a DISPERSÃO das leituras:\n  Valores: 5,01 / 5,00 / 5,02 / 4,99 / 5,01 / 5,00 / 5,02 / 5,01 / 5,00 / 5,01\n  Variação máxima = 5,02 − 4,99 = 0,03 bar → leituras muito agrupadas.\n  → Alta PRECISÃO (o sensor é estável, repete o mesmo valor).",
        "Passo 2 — Calcule a MÉDIA das leituras:\n  Soma = 5,01+5,00+5,02+4,99+5,01+5,00+5,02+5,01+5,00+5,01 = 50,07\n  Média = 50,07 / 10 = 5,007 bar\n  Valor real = 4,80 bar → diferença = 5,007 − 4,80 = 0,207 bar (≈ 5% a mais).",
        "Passo 3 — Classifique a EXATIDÃO:\n  A média (5,007) está LONGE do real (4,80).\n  → Baixa EXATIDÃO. O sensor tem um vício — erro sistemático constante.",
        "Conclusão — Diagnóstico final:\n  ✓ Precisão: ALTA   (leituras agrupadas, variação < 0,03 bar)\n  ✗ Exatidão: BAIXA  (média distante do valor real)\n  Tipo de erro: SISTEMÁTICO (sempre lê ~5% a mais)\n  Analogia: atirador com tiros agrupados, mas todos longe do centro."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q02",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Um sensor retorna para o mesmo ponto de 4,80 bar:\n  4,85 / 4,79 / 4,75 / 4,83 / 4,81 / 4,78 / 4,80 / 4,82 / 4,76 / 4,81 bar\nComo você classifica esse sensor?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Baixa PRECISÃO (variação de 0,10 bar — leituras espalhadas). Alta EXATIDÃO (média ≈ 4,80 bar muito próxima do real). Ruído aleatório sem erro sistemático. Diagnóstico: impreciso e exato.",
      "resposta_esperada": "Baixa PRECISÃO (variação de 0,10 bar — leituras espalhadas). Alta EXATIDÃO (média ≈ 4,80 bar muito próxima do real). Ruído aleatório sem erro sistemático. Diagnóstico: impreciso e exato.",
      "passos": [
        "Passo 1 — Analise a DISPERSÃO:\n  Valores vão de 4,75 a 4,85 bar → variação = 0,10 bar.\n  Leituras espalhadas → Baixa PRECISÃO.",
        "Passo 2 — Calcule a MÉDIA:\n  Soma = 4,85+4,79+4,75+4,83+4,81+4,78+4,80+4,82+4,76+4,81 = 48,00\n  Média = 48,00 / 10 = 4,80 bar\n  Valor real = 4,80 bar → diferença = 0,00 bar!",
        "Conclusão:\n  ✗ Precisão: BAIXA  (leituras espalhadas, variação = 0,10 bar)\n  ✓ Exatidão: ALTA   (média = valor real)\n  Tipo de erro: ALEATÓRIO (ruído) — a média RESOLVE, mas cada leitura isolada é imprecisa.\n  Analogia: atirador com mão tremendo, mas a média dos tiros cai no centro."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q03",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Um voltímetro tem exatidão de ± (1,5% + 4 dígitos na casa 0,1V).\nVocê mede 20,0 V. Qual é a faixa de valores possíveis para o valor real?\n(Mostre o cálculo passo a passo.)",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "1,5% de 20,0 = 0,30 V. + 4 dígitos na casa 0,1V = +0,40 V. Erro total = ±0,70 V. Faixa: 20,0 − 0,70 = 19,30 V   até   20,0 + 0,70 = 20,70 V.",
      "resposta_esperada": "1,5% de 20,0 = 0,30 V. + 4 dígitos na casa 0,1V = +0,40 V. Erro total = ±0,70 V. Faixa: 20,0 − 0,70 = 19,30 V   até   20,0 + 0,70 = 20,70 V.",
      "passos": [
        "A fórmula de exatidão ± (X% + N dígitos) tem DUAS partes:\n  • Parte percentual: aplica sobre o valor LIDO\n  • Parte de dígitos: é a menor resolução do display multiplicada por N",
        "Parte 1 — Erro percentual:\n  1,5% de 20,0 V = 0,015 × 20,0 = 0,30 V",
        "Parte 2 — Erro de dígitos:\n  Casa decimal mais baixa do display = 0,1 V\n  4 dígitos × 0,1 V = 0,40 V",
        "Erro total = soma das duas partes:\n  ±(0,30 + 0,40) = ±0,70 V",
        "Faixa possível para o valor real:\n  Mínimo: 20,0 − 0,70 = 19,30 V\n  Máximo: 20,0 + 0,70 = 20,70 V\n  O valor real está ENTRE 19,30 V e 20,70 V."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q04",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Por que a média móvel com vetor circular é preferível à média simples em sistemas embarcados?\n(Explique em termos de complexidade computacional.)",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Média simples: recalcula a soma de TODAS as N amostras a cada nova medição — O(N) operações, cresce com N. Média móvel circular: faz apenas 1 subtração (remove a mais antiga) e 1 adição (insere a nova) — O(1), independente de N. Muito mais rápida em MCUs com N grande.",
      "resposta_esperada": "Média simples: recalcula a soma de TODAS as N amostras a cada nova medição — O(N) operações, cresce com N. Média móvel circular: faz apenas 1 subtração (remove a mais antiga) e 1 adição (insere a nova) — O(1), independente de N. Muito mais rápida em MCUs com N grande.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q05",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Um sensor ultrassônico sempre mede 1 cm a menos que a distância real.\n(A) Isso é um problema de precisão ou de exatidão?\n(B) A média resolve? Justifique.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "(A) Exatidão — é um erro sistemático constante de −1 cm. Não é ruído aleatório. (B) A média NÃO resolve: ela vai convergir de forma muito estável para um valor que ainda erra por 1 cm. Solução: calibração — aplicar offset de +1 cm no software.",
      "resposta_esperada": "(A) Exatidão — é um erro sistemático constante de −1 cm. Não é ruído aleatório. (B) A média NÃO resolve: ela vai convergir de forma muito estável para um valor que ainda erra por 1 cm. Solução: calibração — aplicar offset de +1 cm no software.",
      "passos": [
        "Parte A — Identificar o tipo de problema:\n  O sensor SEMPRE mede 1 cm a menos — o erro é CONSTANTE.\n  Erro constante = erro SISTEMÁTICO → problema de EXATIDÃO.\n  (Se fosse imprecisão, o erro seria aleatório: ora +1, ora −1, ora +2...)",
        "Parte B — A média resolve?\n  A média resolve RUÍDO ALEATÓRIO (imprecisão).\n  Mas aqui o erro é sistemático: CADA leitura já está 1 cm abaixo.\n  Média de (real−1) = (real−1) → ainda erra 1 cm.\n  → A média NÃO resolve.",
        "Solução correta:\n  CALIBRAÇÃO: comparar com referência externa, medir o desvio (−1 cm)\n  e aplicar correção no software: distancia_real = leitura + 1;\n  A média pode ser usada EM CONJUNTO para eliminar ruído adicional,\n  mas o offset de calibração é obrigatório."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q06",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Cite 3 causas de não-linearidade em sensores e 2 formas de mitigar o problema.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Causas: temperatura (afeta resposta do sensor), envelhecimento do componente, região de operação fora da especificação (extremos da faixa). Mitigação: (1) limitar a faixa de operação (usar só a região linear, perde resolução); (2) correção matemática com polinômio de calibração.",
      "resposta_esperada": "Causas: temperatura (afeta resposta do sensor), envelhecimento do componente, região de operação fora da especificação (extremos da faixa). Mitigação: (1) limitar a faixa de operação (usar só a região linear, perde resolução); (2) correção matemática com polinômio de calibração.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q07",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "CALC",
      "tier": "S",
      "pergunta": "Você precisa medir pH de 0,0 a 14,0 com resolução de 0,01 unidades.\nQuantos bits de ADC são necessários?\n(Digite apenas o número de bits mínimo.)",
      "opcoes": [],
      "resposta": 11,
      "respostas": [
        "11"
      ],
      "explicacao": "Valores distintos: (14,00 − 0,00) / 0,01 + 1 = 1401. 2^10 = 1024 (insuficiente). 2^11 = 2048 ≥ 1401 → 11 bits mínimo.",
      "resposta_esperada": "",
      "passos": [
        "Passo 1 — Quantos valores distintos são necessários?\n  Faixa: 0,00 a 14,00  |  Resolução: 0,01\n  N_valores = (14,00 − 0,00) / 0,01 + 1\n            = 1400 + 1 = 1401 valores distintos",
        "Passo 2 — Quantos bits cobrem 1401 valores?\n  2^10 = 1024  → insuficiente (1024 < 1401)\n  2^11 = 2048  → suficiente  (2048 ≥ 1401)  ✓",
        "Resposta: 11 bits mínimo.\n  O Arduino Uno tem 10 bits → NÃO seria suficiente para este sensor.\n  Precisaria de ADC externo de 12 bits (ex: ADS1115)."
      ],
      "unidade": "bits",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q08",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Com referência interna de 1,1 V e ADC de 10 bits:\n(A) Qual é o passo em mV?\n(B) Qual a faixa máxima mensurável?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "(A) Passo = 1,1V / (2^10 − 1) = 1,1 / 1023 ≈ 1,075 mV por step. (B) Faixa máxima: 0 a 1,1 V. Sinal acima de 1,1 V satura o ADC — não é mensurável.",
      "resposta_esperada": "(A) Passo = 1,1V / (2^10 − 1) = 1,1 / 1023 ≈ 1,075 mV por step. (B) Faixa máxima: 0 a 1,1 V. Sinal acima de 1,1 V satura o ADC — não é mensurável.",
      "passos": [
        "Parte A — Calcular o passo (resolução):\n  Fórmula: passo = Vref / (2^N − 1)\n  passo = 1,1 V / (2^10 − 1) = 1,1 / 1023 ≈ 0,001075 V = 1,075 mV\n  Ou seja: cada passo do ADC equivale a ~1,075 mV.",
        "Parte B — Faixa mensurável:\n  O ADC só mede de 0 V até Vref.\n  Com Vref = 1,1 V interna → faixa = 0 a 1,1 V.\n  Qualquer sinal acima de 1,1 V SATURA o ADC (retorna 1023 sempre).\n  Use Vref interna de 1,1 V apenas para sinais pequenos (sensores de temperatura, etc.)."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q09",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "O que acontece se você chamar analogReference(EXTERNAL) e depois chamar analogRead() ANTES de conectar um sinal ao pino AREF?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Pode danificar o ATMega328P permanentemente. O datasheet proíbe chamar analogRead() antes de configurar o AREF externo: o circuito interno de referência pode colidir eletricamente com o pino AREF, causando corrente excessiva e dano ao chip.",
      "resposta_esperada": "Pode danificar o ATMega328P permanentemente. O datasheet proíbe chamar analogRead() antes de configurar o AREF externo: o circuito interno de referência pode colidir eletricamente com o pino AREF, causando corrente excessiva e dano ao chip.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q10",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Por que o Diodo Zener é uma referência pior que o chip 5040AIDG4?\n(Use números: ppm/°C e exatidão.)",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Zener: coeficiente de temperatura ≈ 700 ppm/°C, exatidão variável. 5040AIDG4: 3 ppm/°C, exatidão 0,05%. Para variação de 10°C: Zener muda 0,7% (35 mV em 5V); chip muda 0,003% (0,15 mV). O chip é ~233× mais estável em temperatura e muito mais exato.",
      "resposta_esperada": "Zener: coeficiente de temperatura ≈ 700 ppm/°C, exatidão variável. 5040AIDG4: 3 ppm/°C, exatidão 0,05%. Para variação de 10°C: Zener muda 0,7% (35 mV em 5V); chip muda 0,003% (0,15 mV). O chip é ~233× mais estável em temperatura e muito mais exato.",
      "passos": [
        "Comparando coeficientes de temperatura:\n  Zener:      700 ppm/°C\n  5040AIDG4:    3 ppm/°C\n  ppm = partes por milhão por grau Celsius — quanto menor, melhor.",
        "Calculando o impacto para ΔT = 10°C:\n  Zener:     700 × 10 = 7000 ppm = 0,7% → 0,7% × 5V = 35 mV de desvio\n  5040AIDG4:   3 × 10 =   30 ppm = 0,003% → 0,003% × 5V = 0,15 mV de desvio\n  Diferença: Zener é ~233× pior em estabilidade de temperatura.",
        "Comparando exatidão:\n  Zener: exatidão variável (depende do lote, temperatura de fabricação)\n  5040AIDG4: exatidão garantida de 0,05%\n\n  Conclusão: para medições precisas, use SEMPRE chip de referência dedicado."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q11",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Um sensor de corrente tem saída de 0,5V (0A) a 4,5V (50A).\nVocê vai conectá-lo ao Arduino (ADC 0–5V).\nQual o problema e como resolver?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Problema: o sensor usa apenas 0,5V–4,5V dos 5V disponíveis no ADC — desperdiça ~20% da resolução em cada extremo. Resolução efetiva: ~818 valores dos 1024 possíveis. Solução: circuito de condicionamento de sinal que remapeia 0,5–4,5V → 0–5V, usando amplificador operacional ou resistores de escala.",
      "resposta_esperada": "Problema: o sensor usa apenas 0,5V–4,5V dos 5V disponíveis no ADC — desperdiça ~20% da resolução em cada extremo. Resolução efetiva: ~818 valores dos 1024 possíveis. Solução: circuito de condicionamento de sinal que remapeia 0,5–4,5V → 0–5V, usando amplificador operacional ou resistores de escala.",
      "passos": [
        "Identificar o problema — comparar faixas:\n  Sensor: 0,5 V (0A) ... 4,5 V (50A) → faixa útil = 4,0 V\n  ADC:    0,0 V ........... 5,0 V    → faixa total = 5,0 V\n  O sensor não usa 0,5 V no início nem 0,5 V no final → desperdiça 1,0 V.",
        "Quantificar a perda de resolução:\n  ADC 10 bits = 1024 valores para 5,0 V\n  Faixa usada pelo sensor: 4,0 V / 5,0 V = 80% da faixa\n  Resolução efetiva: 80% × 1024 ≈ 819 valores (perdemos ~205 valores = ~20%)",
        "Solução — condicionamento de sinal:\n  Objetivo: remapear 0,5 V → 0 V  e  4,5 V → 5 V\n  Técnica: amplificador operacional em modo diferencial\n    → subtrai o offset (0,5 V) e amplifica o ganho (×5/4 = 1,25×)\n  Resultado: ADC usa 100% dos 1024 valores para medir a corrente."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q12",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Explique o funcionamento do WDT (Watchdog Timer) com uma analogia.\nDescreva os 3 estados do sistema: (1) funcionando, (2) travado, (3) após reset.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Analogia: um segurança que precisa bater ponto a cada 30 min. Se não bater (travou), o sistema dispara e chama o supervisor. (1) Funcionando: MCU alimenta o WDT periodicamente via wdt_reset() — contador não zera. (2) Travado: MCU para de alimentar o WDT; contador chega a zero → dispara RESET. (3) Após reset: MCU reinicia do zero, bootloader roda, código começa do início.",
      "resposta_esperada": "Analogia: um segurança que precisa bater ponto a cada 30 min. Se não bater (travou), o sistema dispara e chama o supervisor. (1) Funcionando: MCU alimenta o WDT periodicamente via wdt_reset() — contador não zera. (2) Travado: MCU para de alimentar o WDT; contador chega a zero → dispara RESET. (3) Após reset: MCU reinicia do zero, bootloader roda, código começa do início.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q13",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Compare as arquiteturas Flash e SAR de ADC:\n(A) Velocidade e resolução prática\n(B) Onde cada uma é usada",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Flash: cada nível tem comparador dedicado → conversão em tempo real (sem retardo). Mas precisa de 2^N−1 comparadores → impraticável para N > 8 bits. Usada em osciloscópios e vídeo de alta velocidade. SAR: busca binária — N ciclos para N bits → retardo proporcional. Circuito muito mais simples, viável para 10–16 bits. Usado no ATMega328P (10 bits) e microcontroladores em geral.",
      "resposta_esperada": "Flash: cada nível tem comparador dedicado → conversão em tempo real (sem retardo). Mas precisa de 2^N−1 comparadores → impraticável para N > 8 bits. Usada em osciloscópios e vídeo de alta velocidade. SAR: busca binária — N ciclos para N bits → retardo proporcional. Circuito muito mais simples, viável para 10–16 bits. Usado no ATMega328P (10 bits) e microcontroladores em geral.",
      "passos": [
        "Arquitetura FLASH — como funciona:\n  Tem um comparador para CADA nível de tensão possível.\n  Para N bits: precisa de 2^N − 1 comparadores.\n  Ex: 8 bits → 255 comparadores. 10 bits → 1023. 12 bits → 4095.\n  → Conversão IMEDIATA (1 ciclo de clock), mas circuito enorme.",
        "Arquitetura SAR — como funciona:\n  Faz uma BUSCA BINÁRIA: testa bit a bit do mais para o menos significativo.\n  Para N bits: precisa de N ciclos de clock.\n  Ex: 10 bits → 10 ciclos. Muito mais simples e compacto.\n  → Usado no ATMega328P e na maioria dos MCUs.",
        "Comparativo e uso:\n  | Aspecto      | Flash         | SAR          |\n  | Velocidade   | Máxima (1 ciclo) | Média (N ciclos) |\n  | Resolução    | Até ~8 bits   | 10–16 bits   |\n  | Circuito     | Enorme        | Compacto     |\n  | Uso          | Osciloscópio, vídeo | MCUs, sensores |"
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q14",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "CALC",
      "tier": "S",
      "pergunta": "Um sinal de áudio tem componentes até 8 kHz.\nQual a frequência mínima de amostragem segundo o Teorema de Nyquist?\n(Digite o valor em Hz, sem ponto ou vírgula.)",
      "opcoes": [],
      "resposta": 16000,
      "respostas": [
        "16000"
      ],
      "explicacao": "Nyquist: f_s ≥ 2 × f_máx = 2 × 8.000 = 16.000 Hz. O Arduino Uno atinge ~10.000 SA/s → NÃO consegue amostrar sem aliasing. Precisaria de ADC externo ou prescaler do ADC ajustado.",
      "resposta_esperada": "",
      "passos": [
        "O Teorema de Nyquist diz:\n  Para reconstruir um sinal sem distorção (aliasing),\n  a frequência de amostragem deve ser no mínimo o DOBRO\n  da maior frequência presente no sinal.",
        "Aplicando a fórmula:\n  f_sinal_máx = 8.000 Hz (áudio até 8 kHz)\n  f_amostragem_mín = 2 × f_sinal_máx\n                   = 2 × 8.000\n                   = 16.000 Hz  (16 kHz)",
        "O Arduino Uno consegue?\n  ADC do ATMega328P padrão: ~10.000 amostras/segundo\n  Necessário:               16.000 SA/s\n  10.000 < 16.000 → NÃO consegue sem aliasing!\n  Solução: ajustar o prescaler do ADC ou usar ADC externo."
      ],
      "unidade": "Hz",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q15",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Por que o Arduino Uno não possui DAC?\nQual é a alternativa mais comum e como ela funciona?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "O ATMega328P não inclui DAC por razões de custo e simplicidade de hardware. Alternativa: PWM — chaveamento rápido da saída digital controlando o Duty Cycle. A carga (e.g., filtro RC) responde à tensão MÉDIA. Não é uma tensão analógica real — tem ripple (variação) em torno da média.",
      "resposta_esperada": "O ATMega328P não inclui DAC por razões de custo e simplicidade de hardware. Alternativa: PWM — chaveamento rápido da saída digital controlando o Duty Cycle. A carga (e.g., filtro RC) responde à tensão MÉDIA. Não é uma tensão analógica real — tem ripple (variação) em torno da média.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q16",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "tipo": "CALC",
      "tier": "S",
      "pergunta": "Calcule a tensão média de saída de um sinal PWM com:\n  Duty Cycle = 37,5%   e   Vcc = 3,3 V\n(Digite o resultado em V com 2 casas decimais.)",
      "opcoes": [],
      "resposta": 1.24,
      "respostas": [
        "1.24"
      ],
      "explicacao": "V_média = Duty Cycle × Vcc = 0,375 × 3,3 = 1,2375 ≈ 1,24 V.",
      "resposta_esperada": "",
      "passos": [
        "PWM — o que é Duty Cycle?\n  Duty Cycle é a fração do tempo em que o sinal está em HIGH (Vcc).\n  37,5% → sinal fica HIGH 37,5% do período e LOW 62,5% do período.",
        "Fórmula da tensão média:\n  V_média = Duty Cycle × Vcc\n  V_média = 0,375 × 3,3 V\n  V_média = 1,2375 V ≈ 1,24 V",
        "Interpretação:\n  A carga (filtro RC, motor) responde à tensão MÉDIA de 1,24 V.\n  O sinal real oscila entre 0 V e 3,3 V rapidamente —\n  o filtro RC suaviza essa oscilação, entregando ~1,24 V contínuos."
      ],
      "unidade": "V",
      "tolerancia": 0.02,
      "itens": []
    },
    {
      "id": "sc_q17",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Qual a diferença entre Arquitetura Von Neumann e Harvard?\nPor que o ATMega328P usa Harvard?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Von Neumann: um único barramento para instruções E dados → não pode buscar instrução e dado ao mesmo tempo → gargalo (bottleneck). Harvard: barramentos SEPARADOS → busca simultânea de instrução e dado → maior throughput. ATMega328P usa Harvard porque executa 1 instrução por ciclo de clock — precisa de eficiência máxima com hardware simples.",
      "resposta_esperada": "Von Neumann: um único barramento para instruções E dados → não pode buscar instrução e dado ao mesmo tempo → gargalo (bottleneck). Harvard: barramentos SEPARADOS → busca simultânea de instrução e dado → maior throughput. ATMega328P usa Harvard porque executa 1 instrução por ciclo de clock — precisa de eficiência máxima com hardware simples.",
      "passos": [
        "Von Neumann — um único barramento:\n  Instruções e dados compartilham o MESMO barramento e memória.\n  Problema: para buscar uma instrução, o barramento fica ocupado.\n  Não pode buscar dado ao mesmo tempo → 'gargalo de Von Neumann'.\n  Exemplo: PCs x86 modernos (com caches para contornar o problema).",
        "Harvard — barramentos separados:\n  Memória de programa (Flash) e memória de dados (SRAM) são SEPARADAS.\n  Cada uma tem seu próprio barramento.\n  → CPU pode buscar a PRÓXIMA instrução enquanto lê/escreve um dado.\n  → Pipeline eficiente: 1 instrução executada por ciclo de clock.",
        "Por que o ATMega328P usa Harvard?\n  O ATMega328P executa 1 instrução por ciclo (16 MIPS a 16 MHz).\n  Com Harvard: Flash (instrução) + SRAM (dado) acessados simultaneamente.\n  Hardware simples + performance máxima para MCU de 8 bits.\n  Memórias separadas: 32 KB Flash (programa) | 2 KB SRAM (dados) | 1 KB EEPROM."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q18",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Escreva o código C (registradores diretos) para:\n  (A) Configurar PD3 como entrada com pull-up\n  (B) Configurar PD7 como saída\n  (C) Ler o estado de PD3 em uma variável uint8_t estado",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "DDRD  &= ~(1 << 3);       // PD3 = entrada (bit DDR = 0)\nPORTD |=  (1 << 3);       // pull-up em PD3\nDDRD  |=  (1 << 7);       // PD7 = saída (bit DDR = 1)\nuint8_t estado = (PIND >> 3) & 0x01;  // lê PD3 isolado",
      "resposta_esperada": "DDRD  &= ~(1 << 3);       // PD3 = entrada (bit DDR = 0)\nPORTD |=  (1 << 3);       // pull-up em PD3\nDDRD  |=  (1 << 7);       // PD7 = saída (bit DDR = 1)\nuint8_t estado = (PIND >> 3) & 0x01;  // lê PD3 isolado",
      "passos": [
        "Regras dos registradores de GPIO:\n  DDRx  → Direção: bit=0 entrada, bit=1 saída\n  PORTx → Saída (se DDR=1) ou Pull-up (se DDR=0, bit=1)\n  PINx  → Leitura do estado físico do pino (sempre leitura)\n\n  Operações: OR (|=) seta bit  |  AND+NOT (&= ~) limpa bit",
        "A — PD3 como ENTRADA com pull-up:\n  DDR bit 3 = 0 (entrada):  DDRD &= ~(1 << 3);\n  PORT bit 3 = 1 (pull-up): PORTD |= (1 << 3);\n  O pull-up mantém o pino em HIGH quando nada está conectado.",
        "B — PD7 como SAÍDA:\n  DDR bit 7 = 1 (saída): DDRD |= (1 << 7);\n  Para acender: PORTD |= (1<<7);  Para apagar: PORTD &= ~(1<<7);",
        "C — Ler PD3 em uma variável:\n  PIND contém o estado dos 8 pinos de D.\n  Para isolar apenas o bit 3:\n    (PIND >> 3) desloca 3 posições à direita\n    & 0x01 mascara, mantendo só o bit 0\n  uint8_t estado = (PIND >> 3) & 0x01;\n  → estado = 1 (pino HIGH) ou 0 (pino LOW)"
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q19",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "O que é o registrador PIND?\nPor que ele é somente leitura?\nO que acontece em alguns ATMegas se você escrever nele?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "PIND é o registrador de leitura física dos pinos da porta D. É somente leitura porque reflete o estado elétrico REAL do pino — você não pode forçar esse valor, só o hardware externo pode. Curiosidade: em alguns ATMegas, escrever 1 no PINx INVERTE o bit correspondente no PORTx — comportamento específico, não o uso normal.",
      "resposta_esperada": "PIND é o registrador de leitura física dos pinos da porta D. É somente leitura porque reflete o estado elétrico REAL do pino — você não pode forçar esse valor, só o hardware externo pode. Curiosidade: em alguns ATMegas, escrever 1 no PINx INVERTE o bit correspondente no PORTx — comportamento específico, não o uso normal.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q20",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "tipo": "CALC",
      "tier": "A",
      "pergunta": "Qual o valor DECIMAL do registrador DDRD se apenas os pinos PD4 e PD6 forem configurados como SAÍDA e todos os outros como entrada?\n(Lembre: DDRx bit=1 → saída, bit=0 → entrada.)",
      "opcoes": [],
      "resposta": 80,
      "respostas": [
        "80"
      ],
      "explicacao": "PD4 = bit 4 → valor 16. PD6 = bit 6 → valor 64. DDRD = 0b0101_0000 = 16 + 64 = 80.",
      "resposta_esperada": "",
      "passos": [
        "Montar o registrador bit a bit:\n  Bit 7 6 5 4 3 2 1 0\n      0 1 0 1 0 0 0 0   (PD6=saída=1, PD4=saída=1, resto=entrada=0)",
        "Converter binário para decimal:\n  Bit 6 = 2^6 = 64\n  Bit 4 = 2^4 = 16\n  DDRD = 64 + 16 = 80",
        "Verificação:\n  80 em binário = 0b01010000 = 0x50\n  Bits 4 e 6 estão em 1 → PD4 e PD6 como saída ✓\n  Bits 0,1,2,3,5,7 estão em 0 → restante como entrada ✓"
      ],
      "unidade": "(decimal)",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q21",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Qual a diferença entre polling e interrupção?\nDê um exemplo de situação onde cada um é mais adequado.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Polling: MCU verifica continuamente em loop se o evento ocorreu → simples, mas desperdiça 100% de CPU enquanto espera. Interrupção: MCU faz outras tarefas e é 'acordado' apenas quando o evento ocorre → eficiente, menor latência. Polling é melhor quando o evento é muito frequente (verificar é tão rápido quanto a ISR) ou quando latência de configuração supera o ganho. Interrupção é melhor para eventos esporádicos (botão, recepção serial, timer).",
      "resposta_esperada": "Polling: MCU verifica continuamente em loop se o evento ocorreu → simples, mas desperdiça 100% de CPU enquanto espera. Interrupção: MCU faz outras tarefas e é 'acordado' apenas quando o evento ocorre → eficiente, menor latência. Polling é melhor quando o evento é muito frequente (verificar é tão rápido quanto a ISR) ou quando latência de configuração supera o ganho. Interrupção é melhor para eventos esporádicos (botão, recepção serial, timer).",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q22",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Você quer gerar uma interrupção a cada 500 ms usando o Timer 1 (16 bits) com clock de 16 MHz em modo CTC.\nQual prescaler e qual valor de OCR1A usar?\n(Mostre a conta.)",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "OCR1A = (f_clock / prescaler) × t − 1\nCom prescaler 256: (16.000.000 / 256) × 0,5 − 1 = 62.500 − 1 = 31.249 (cabe em 16 bits! max=65535). ✔\nCódigo:\n  TCCR1B |= (1 << WGM12) | (1 << CS12);  // CTC + prescaler 256\n  OCR1A = 31249;",
      "resposta_esperada": "OCR1A = (f_clock / prescaler) × t − 1\nCom prescaler 256: (16.000.000 / 256) × 0,5 − 1 = 62.500 − 1 = 31.249 (cabe em 16 bits! max=65535). ✔\nCódigo:\n  TCCR1B |= (1 << WGM12) | (1 << CS12);  // CTC + prescaler 256\n  OCR1A = 31249;",
      "passos": [
        "Fórmula do CTC para Timer 1:\n  OCR1A = (f_clock / prescaler × t) − 1\n  onde t = período desejado (em segundos)\n  Timer 1 é 16 bits → OCR1A máximo = 65535",
        "Escolher o prescaler — queremos t = 500 ms = 0,5 s:\n  Tentativa prescaler 64:\n    OCR1A = (16.000.000 / 64) × 0,5 − 1 = 125.000 − 1 = 124.999\n    124.999 > 65535 → NÃO cabe! ✗\n\n  Tentativa prescaler 256:\n    OCR1A = (16.000.000 / 256) × 0,5 − 1 = 31.250 − 1 = 31.249\n    31.249 ≤ 65535 → CABE! ✓",
        "Código final:\n  TCCR1B |= (1 << WGM12);   // modo CTC\n  TCCR1B |= (1 << CS12);    // prescaler 256\n  OCR1A = 31249;             // 500 ms\n  TIMSK1 |= (1 << OCIE1A);  // habilitar interrupção CTC\n  sei();                     // habilitar interrupções globais"
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q23",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Por que variáveis compartilhadas entre uma ISR e o código principal devem ser declaradas como volatile?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Sem volatile, o compilador pode otimizar mantendo a variável em um registrador de CPU. Se a ISR atualiza a variável na memória RAM, o código principal não vê a mudança (continua lendo do registrador em cache). O volatile força o compilador a reler da RAM a cada acesso, garantindo visibilidade entre contextos (ISR e loop principal).",
      "resposta_esperada": "Sem volatile, o compilador pode otimizar mantendo a variável em um registrador de CPU. Se a ISR atualiza a variável na memória RAM, o código principal não vê a mudança (continua lendo do registrador em cache). O volatile força o compilador a reler da RAM a cada acesso, garantindo visibilidade entre contextos (ISR e loop principal).",
      "passos": [
        "O problema — otimização do compilador:\n  O compilador C é inteligente: se ele vê que uma variável\n  não muda 'aparentemente' dentro de um bloco, pode mantê-la\n  em um registrador de CPU (mais rápido que a RAM).\n  Para o compilador, a ISR é 'invisível' — ela pode ser chamada a qualquer momento.",
        "O que acontece sem volatile:\n  1. loop() lê a variável → compilador guarda o valor no registrador R24.\n  2. ISR é chamada e ATUALIZA a variável na RAM.\n  3. loop() lê de novo → mas lê do REGISTRADOR R24 (valor antigo)!\n  → O loop() nunca vê a atualização feita pela ISR.",
        "O que volatile faz:\n  volatile uint8_t flag = 0;\n  → Diz ao compilador: 'sempre leia este valor da MEMÓRIA RAM,\n     nunca faça cache em registrador de CPU'.\n  → ISR atualiza → loop() lê e VÊ a atualização imediatamente.\n\n  Regra: TODA variável acessada em ISR E no código principal = volatile."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q24",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Qual a diferença entre o modo Normal e o modo CTC do Timer 1?\nQual é mais eficiente para gerar interrupções periódicas?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Modo Normal: contador sobe de 0 até 65535 e transborda → você precisa reiniciar TCNT1 = 0 manualmente dentro da ISR (adiciona instrução e variação de timing). Modo CTC: hardware zera o contador automaticamente ao atingir OCR1A → ISR menor, timing mais preciso, sem intervenção manual. CTC é mais eficiente para interrupções periódicas precisas.",
      "resposta_esperada": "Modo Normal: contador sobe de 0 até 65535 e transborda → você precisa reiniciar TCNT1 = 0 manualmente dentro da ISR (adiciona instrução e variação de timing). Modo CTC: hardware zera o contador automaticamente ao atingir OCR1A → ISR menor, timing mais preciso, sem intervenção manual. CTC é mais eficiente para interrupções periódicas precisas.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q25",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Você quer conectar um módulo ESP8266 (nível lógico 3,3V) ao pino TX de um Arduino Uno (5V). O que deve ser feito e por quê?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "O TX do Arduino é 5V; o RX do ESP8266 suporta no máximo 3,3V. Conectar direto pode danificar o ESP permanentemente. Soluções: (1) Divisor de tensão — R1=10kΩ + R2=20kΩ → V_out = 5V × 20/(10+20) = 3,33V. (2) Conversor de nível bidirecional (level shifter) — mais seguro e bidirecional.",
      "resposta_esperada": "O TX do Arduino é 5V; o RX do ESP8266 suporta no máximo 3,3V. Conectar direto pode danificar o ESP permanentemente. Soluções: (1) Divisor de tensão — R1=10kΩ + R2=20kΩ → V_out = 5V × 20/(10+20) = 3,33V. (2) Conversor de nível bidirecional (level shifter) — mais seguro e bidirecional.",
      "passos": [
        "Por que há problema?\n  Arduino Uno (ATMega): nível lógico HIGH = 5V\n  ESP8266: pinos tolerantes a no máximo 3,3V\n  Conectar 5V diretamente no RX do ESP → pode danificá-lo permanentemente.",
        "Solução 1 — Divisor de tensão resistivo:\n  Vout = Vin × R2 / (R1 + R2)\n  Queremos Vout ≈ 3,3V com Vin = 5V:\n  3,3 / 5 = R2 / (R1 + R2) → R1/R2 = (5−3,3)/3,3 ≈ 0,515\n  Usando R1 = 10kΩ e R2 = 20kΩ:\n  Vout = 5 × 20/(10+20) = 5 × 0,667 = 3,33V ✓",
        "Solução 2 — Level Shifter (conversor de nível):\n  Circuito dedicado (ex: TXS0108E, BSS138)\n  Converte bidirecional: 5V ↔ 3,3V\n  Mais robusto e seguro para comunicação serial bidirecional (TX e RX).\n  Ideal quando tanto TX quanto RX precisam de conversão."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q26",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Descreva o formato completo de um frame UART transmitindo o byte 0xAA (10101010 em binário) com configuração 8N1.\nIndique: IDLE, start bit, dados (LSB primeiro), stop bit.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "0xAA = 10101010b. LSB primeiro → sequência: 0,1,0,1,0,1,0,1. Frame completo na linha:\n  IDLE(1) → START(0) → 0,1,0,1,0,1,0,1 → STOP(1) → IDLE(1)\n8N1 = 8 bits de dados, Nenhuma paridade, 1 stop bit.",
      "resposta_esperada": "0xAA = 10101010b. LSB primeiro → sequência: 0,1,0,1,0,1,0,1. Frame completo na linha:\n  IDLE(1) → START(0) → 0,1,0,1,0,1,0,1 → STOP(1) → IDLE(1)\n8N1 = 8 bits de dados, Nenhuma paridade, 1 stop bit.",
      "passos": [
        "Decodificar a configuração 8N1:\n  8 → 8 bits de dados\n  N → Nenhuma paridade (No parity)\n  1 → 1 stop bit\n  Total de bits no frame: 1 start + 8 dados + 1 stop = 10 bits",
        "Converter o byte 0xAA para binário LSB primeiro:\n  0xAA = 1010 1010 em binário (MSB → LSB)\n  UART transmite o LSB PRIMEIRO:\n  Bit 0 = 0  (menos significativo primeiro)\n  Bit 1 = 1\n  Bit 2 = 0\n  Bit 3 = 1\n  Bit 4 = 0\n  Bit 5 = 1\n  Bit 6 = 0\n  Bit 7 = 1  (mais significativo por último)",
        "Frame completo na linha serial:\n  IDLE HIGH  → linha em 1 quando nada é transmitido\n  START  (0) → sempre LOW para indicar início\n  DADOS  0,1,0,1,0,1,0,1  (LSB → MSB)\n  STOP   (1) → sempre HIGH para indicar fim\n  IDLE HIGH  → retorna ao repouso\n\n  Diagrama:  ___ /0/1/0/1/0/1/0/1\\___"
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q27",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "No I2C, o mestre envia o endereço 0x55 mas nenhum dispositivo com esse endereço está conectado.\n(A) O que acontece no barramento?\n(B) Como o mestre detecta que o dispositivo não existe?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "(A) O mestre envia o endereço 0x55 + bit R/W e aguarda o ACK (SDA puxado para LOW pelo escravo). Como nenhum dispositivo existe, ninguém puxa SDA → linha fica HIGH → NACK. (B) O mestre detecta NACK (SDA=1 na janela de ACK). No Arduino, Wire.endTransmission() retorna 2 (NACK no endereço).",
      "resposta_esperada": "(A) O mestre envia o endereço 0x55 + bit R/W e aguarda o ACK (SDA puxado para LOW pelo escravo). Como nenhum dispositivo existe, ninguém puxa SDA → linha fica HIGH → NACK. (B) O mestre detecta NACK (SDA=1 na janela de ACK). No Arduino, Wire.endTransmission() retorna 2 (NACK no endereço).",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q28",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "tipo": "ESCREVA",
      "tier": "A",
      "pergunta": "Compare ESP-NOW e Wi-Fi para envio de dados de um sensor remoto alimentado por bateria:\nConsidere: overhead, velocidade de conexão e consumo de energia.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "ESP-NOW: sem handshake TCP, sem DHCP, sem DNS → conexão instantânea (~1ms). Pacote até 250 bytes. Para bateria: faz deep sleep, acorda, envia em ~1ms e dorme. Wi-Fi: precisa associar ao AP, obter IP via DHCP, estabelecer TCP → centenas de ms a segundos. Fica acordado muito mais tempo. Para sensor em bateria: ESP-NOW ganha em overhead, velocidade e consumo de energia.",
      "resposta_esperada": "ESP-NOW: sem handshake TCP, sem DHCP, sem DNS → conexão instantânea (~1ms). Pacote até 250 bytes. Para bateria: faz deep sleep, acorda, envia em ~1ms e dorme. Wi-Fi: precisa associar ao AP, obter IP via DHCP, estabelecer TCP → centenas de ms a segundos. Fica acordado muito mais tempo. Para sensor em bateria: ESP-NOW ganha em overhead, velocidade e consumo de energia.",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q29",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Um sistema MQTT tem sensores publicando em fabrica/+/temperatura.\nUm dashboard assina fabrica/#.\nUm alarme assina fabrica/linha1/temperatura.\nO sensor da linha 1 publica 85°C. O que cada subscriber recebe?",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "Sensor publica em: fabrica/linha1/temperatura com valor 85°C. Dashboard (assina fabrica/#): RECEBE ✓ — # cobre qualquer coisa abaixo de fabrica/. Alarme (assina fabrica/linha1/temperatura): RECEBE ✓ — tópico exato. Se houvesse subscriber em fabrica/linha2/temperatura: NÃO receberia (tópico diferente).",
      "resposta_esperada": "Sensor publica em: fabrica/linha1/temperatura com valor 85°C. Dashboard (assina fabrica/#): RECEBE ✓ — # cobre qualquer coisa abaixo de fabrica/. Alarme (assina fabrica/linha1/temperatura): RECEBE ✓ — tópico exato. Se houvesse subscriber em fabrica/linha2/temperatura: NÃO receberia (tópico diferente).",
      "passos": [
        "O sensor publica em qual tópico exato?\n  O sensor é da linha 1 → publica em: fabrica/linha1/temperatura\n  Valor publicado: 85°C",
        "Wildcard # (hash) — Dashboard assina fabrica/#:\n  # substitui TODOS os níveis restantes do tópico.\n  fabrica/# recebe: fabrica/qualquercoisa/temperatura,\n                    fabrica/linha1/sensor, fabrica/tudo/isso/aqui etc.\n  fabrica/linha1/temperatura ESTÁ dentro de fabrica/# → RECEBE ✓",
        "Tópico exato — Alarme assina fabrica/linha1/temperatura:\n  Tópico publicado = fabrica/linha1/temperatura\n  Tópico assinado  = fabrica/linha1/temperatura\n  São IGUAIS → RECEBE ✓",
        "Wildcard + (plus) — o que o enunciado menciona:\n  fabrica/+/temperatura substitui EXATAMENTE 1 nível.\n  fabrica/linha1/temperatura → + = linha1 → RECEBE ✓\n  fabrica/linha2/temperatura → + = linha2 → também RECEBERIA ✓\n\n  Resumo:\n  Dashboard (fabrica/#): RECEBE tudo ✓\n  Alarme (tópico exato): RECEBE apenas linha1 ✓"
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sc_q30",
      "origem": "avaliacao",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "tipo": "ESCREVA",
      "tier": "S",
      "pergunta": "Você projeta um sistema de irrigação que liga a bomba por exatamente 5 segundos ao receber um comando MQTT.\nQual nível de QoS você usaria? Por quê?\n(Pense: o que acontece se a mensagem for duplicada?)",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "QoS 2 (Exactly Once). A ação de ligar a bomba por 5s NÃO é idempotente. Com QoS 1 (at least once), se a mensagem duplicar: bomba liga 5s, desliga, e liga mais 5s inesperadamente — desperdício e possível dano. QoS 0 pode perder o comando. QoS 2 garante entrega exatamente 1 vez via handshake de 4 etapas (PUBLISH → PUBREC → PUBREL → PUBCOMP).",
      "resposta_esperada": "QoS 2 (Exactly Once). A ação de ligar a bomba por 5s NÃO é idempotente. Com QoS 1 (at least once), se a mensagem duplicar: bomba liga 5s, desliga, e liga mais 5s inesperadamente — desperdício e possível dano. QoS 0 pode perder o comando. QoS 2 garante entrega exatamente 1 vez via handshake de 4 etapas (PUBLISH → PUBREC → PUBREL → PUBCOMP).",
      "passos": [
        "Revisar os três níveis de QoS:\n  QoS 0 — At most once:    entrega sem confirmação, pode PERDER.\n  QoS 1 — At least once:   confirma entrega, mas pode DUPLICAR.\n  QoS 2 — Exactly once:    handshake 4 etapas, garante EXATAMENTE 1 entrega.",
        "Analisar o que acontece se a mensagem DUPLICAR (QoS 1):\n  1ª entrega: bomba liga → 5 segundos → desliga ✓\n  2ª entrega (duplicata): bomba liga de NOVO → 5 segundos → desliga ✗\n  Problema: irrigação dupla = desperdício de água + possível dano ao sistema.",
        "Analisar o que acontece se a mensagem SE PERDER (QoS 0):\n  Nenhuma entrega → bomba não liga → plantação sem água.\n  Para uma ação crítica como irrigação: INACEITÁVEL.",
        "Conclusão — Escolha QoS 2:\n  A ação NÃO é idempotente (ligar a bomba 2× ≠ ligar 1×).\n  QoS 2 garante exatamente 1 entrega via handshake de 4 etapas:\n    Publisher → PUBLISH\n    Broker    → PUBREC  (received)\n    Publisher → PUBREL  (release)\n    Broker    → PUBCOMP (complete)\n  Overhead maior, mas obrigatório para comandos não-idempotentes."
      ],
      "unidade": "",
      "tolerancia": 0,
      "itens": []
    },
    {
      "id": "sim1_p2_q1",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A qualidade de uma medição depende de parâmetros como precisão, exatidão e linearidade. Identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 53,
      "respostas": [
        "53"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "A precisão de um sistema de medição está relacionada à sua estabilidade e repetibilidade, independentemente de o valor medido ser correto ou não;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "A exatidão de uma medição está diretamente ligada à ausência de ruído aleatório; sistemas exatos são necessariamente precisos;",
          "correto": false,
          "motivo": "ERRADO: precisão e exatidão são INDEPENDENTES."
        },
        {
          "valor": "04",
          "texto": "O cálculo de média — simples ou móvel — é uma técnica eficaz para reduzir os efeitos do ruído aleatório sobre a precisão de uma medição;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "A não-linearidade de um sensor provoca erros de medição distribuídos uniformemente por toda a faixa de operação;",
          "correto": false,
          "motivo": "ERRADO: ocorre principalmente nos EXTREMOS da faixa."
        },
        {
          "valor": "16",
          "texto": "Um sensor que sempre retorna 5% acima do valor real, com leituras muito estáveis, é caracterizado como preciso e inexato;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "A inexatidão é considerada o problema mais grave, pois a informação correta não está disponível sem uma referência externa;",
          "correto": true,
          "motivo": ""
        }
      ],
      "numero": 1,
      "peso": "01+04+16+32 = 53",
      "gabarito": {}
    },
    {
      "id": "sim1_p2_q2",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A qualidade da medição em sistemas digitais depende de referência de tensão, ruído e resolução do ADC. Identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 29,
      "respostas": [
        "29"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "A tensão de referência determina o valor máximo mensurável pelo ADC; se ela oscilar, toda a medição é afetada mesmo que o sinal esteja estável;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "O coeficiente de temperatura de uma referência é em ppm/°C; quanto maior esse valor, melhor a estabilidade;",
          "correto": false,
          "motivo": "ERRADO: quanto MENOR o ppm/°C, MELHOR. 3 ppm/°C >> 700 ppm/°C."
        },
        {
          "valor": "04",
          "texto": "No Arduino Uno com analogReference(EXTERNAL), não se deve chamar analogRead() antes de configurar o AREF, pois pode danificar o microcontrolador;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "O WDT reinicializa o MCU quando este deixa de alimentá-lo dentro do intervalo configurado, protegendo contra travamentos;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "Um ADC de 10 bits com Vref=5V possui passo de aproximadamente 4,89 mV, correspondendo a 1024 valores distintos;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "Ruído de alta intensidade em ambientes industriais pode alterar registradores do MCU, mas nunca impede a operação do ADC;",
          "correto": false,
          "motivo": "ERRADO: ruído intenso PODE impedir a operação do ADC."
        }
      ],
      "numero": 2,
      "peso": "01+04+08+16 = 29",
      "gabarito": {}
    },
    {
      "id": "sim1_p2_q3",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre conversão de sinais — ADC, DAC, PWM e amostragem — identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 53,
      "respostas": [
        "53"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "Na arquitetura Flash do ADC, o número de comparadores cresce exponencialmente (2^N - 1 para N bits), tornando-a impraticável para alta resolução;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "O Teorema de Nyquist estabelece que a frequência de amostragem deve ser pelo menos IGUAL à maior componente do sinal;",
          "correto": false,
          "motivo": "ERRADO: deve ser pelo menos o DOBRO (2× f_máx)."
        },
        {
          "valor": "04",
          "texto": "O PWM simula saída analógica controlando o Duty Cycle; o efeito vem da tensão média na saída;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "O Arduino Uno possui DAC integrado de 8 bits nos pinos marcados com (~);",
          "correto": false,
          "motivo": "ERRADO: Arduino Uno NÃO possui DAC. Os pinos (~) geram PWM."
        },
        {
          "valor": "16",
          "texto": "O ADC do Arduino Uno usa arquitetura SAR com 10 bits e pode multiplexar até 8 entradas analógicas;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "Um DAC R-2R usa apenas dois valores de resistores (R e 2R), independentemente do número de bits;",
          "correto": true,
          "motivo": ""
        }
      ],
      "numero": 3,
      "peso": "01+04+16+32 = 53",
      "gabarito": {}
    },
    {
      "id": "sim1_p2_q4",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre a arquitetura do ATMega328P e manipulação de registradores, identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 27,
      "respostas": [
        "27"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "O ATMega328P usa Arquitetura Harvard, com barramentos separados para programa (Flash) e dados (SRAM), permitindo acesso simultâneo;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "Na Harvard do ATMega328P, instrução = 16 bits e dado = 8 bits — tamanhos diferentes são normais;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "04",
          "texto": "O registrador DDRx define a direção dos pinos: bit 0 = saída e bit 1 = entrada;",
          "correto": false,
          "motivo": "ERRADO: DDRx bit 0 = ENTRADA, bit 1 = SAÍDA. Invertido na afirmativa."
        },
        {
          "valor": "08",
          "texto": "O registrador PINx é somente leitura e reflete o estado elétrico atual de cada pino;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "Para ativar um bit específico de um registrador sem alterar os demais, usa-se reg |= (1 << n);",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "A EEPROM do ATMega328P é uma memória volátil de 1 KB para armazenar dados temporários durante a execução;",
          "correto": false,
          "motivo": "ERRADO: EEPROM é NÃO VOLÁTIL. Persiste sem energia."
        }
      ],
      "numero": 4,
      "peso": "01+02+08+16 = 27",
      "gabarito": {}
    },
    {
      "id": "sim1_p2_q5",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre interrupções, timers e desenvolvimento de software para SE, identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 29,
      "respostas": [
        "29"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "Uma ISR deve ser construída de forma a ser a mais curta possível, evitando delay() ou comunicação serial dentro dela;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "O Timer 0 do ATMega328P tem 16 bits de resolução e controla millis(), micros() e delay();",
          "correto": false,
          "motivo": "ERRADO: Timer 0 tem 8 bits (0-255). Timer 1 tem 16 bits."
        },
        {
          "valor": "04",
          "texto": "Variáveis compartilhadas entre ISR e código principal devem ser declaradas com volatile para garantir leitura sempre da memória;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "Com clock de 16 MHz e prescaler 256, o Timer 1 conta até 62.500 gerando 1 interrupção por segundo;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "A norma IEC 61131-3 define 5 linguagens para PLCs: LD, FBD, ST, IL e SFC, sendo a IL a descontinuada;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "Cross compilers geram código executável para o mesmo dispositivo onde o compilador está sendo executado, acelerando a compilação;",
          "correto": false,
          "motivo": "ERRADO: cross compiler gera para OUTRO dispositivo (ex: PC → AVR)."
        }
      ],
      "numero": 5,
      "peso": "01+04+08+16 = 29",
      "gabarito": {}
    },
    {
      "id": "sim1_p2_q6",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "ABERTA",
      "tier": "",
      "pergunta": "QUESTÃO ABERTA (obrigatória, não opcional): No projeto de um sistema de monitoramento de temperatura, você precisa: (A) Medir temperatura de 0,0 a 50,0 °C com resolução de 0,1 °C — calcule o número mínimo de bits de ADC necessário e verifique se o Arduino Uno é suficiente. (B) O sensor entrega tensão de 0 a 12 V DC. Projete um divisor resistivo compatível com a entrada A0 do Arduino Uno (0–5 V, impedância > 10 MΩ). Apresente R1, R2, corrente, potência e esboço do circuito.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [],
      "numero": 6,
      "peso": "",
      "gabarito": {
        "parte_a": "Valores distintos: (50,0 - 0,0) / 0,1 + 1 = 501 valores. 2^8 = 256 (insuficiente). 2^9 = 512 >= 501 → 9 bits mínimo. Arduino Uno tem 10 bits (1024 valores) → SUFICIENTE.",
        "parte_b": "Vout/Vin = R2/(R1+R2) = 5/12. Portanto R1/R2 = 7/5 = 1,4. Escolha: R2 = 10 kΩ, R1 = 14 kΩ (usar 15 kΩ padrão → Vout ≈ 4,8 V). Corrente: i = 12 / (15k+10k) = 480 µA. Potência R1: P = (480e-6)^2 × 15000 ≈ 3,46 mW (usar 1/8 W). Potência R2: P = (480e-6)^2 × 10000 ≈ 2,30 mW (usar 1/8 W). Impedância: 25 kΩ << 10 MΩ. OK. Esboço: Vin ─[R1=15kΩ]─┬─ A0 | [R2=10kΩ] | GND"
      }
    },
    {
      "id": "sim2_p2_q1",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "A UART é um dos protocolos de comunicação serial mais usados em SE. Identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 45,
      "respostas": [
        "45"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "A UART é assíncrona — não usa clock compartilhado; sincronização pelo baud rate configurado em ambos;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "Na conexão UART entre dois dispositivos, TX de A conecta em TX de B e RX em RX;",
          "correto": false,
          "motivo": "ERRADO: conexão é CRUZADA — TX-A→RX-B, RX-A←TX-B."
        },
        {
          "valor": "04",
          "texto": "Os bits de dados em UART são enviados com o LSB (menos significativo) primeiro;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "Conectar 5V diretamente ao pino RX de um ESP8266 (3,3V) pode danificar permanentemente o módulo;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "A configuração SERIAL_8N1 indica 8 bits de dados, 1 bit de paridade par e 1 stop bit;",
          "correto": false,
          "motivo": "ERRADO: 8N1 = 8 bits, NENHUMA paridade (N=None), 1 stop."
        },
        {
          "valor": "32",
          "texto": "A UART suporta full-duplex — transmissão e recepção simultâneas em fios separados;",
          "correto": true,
          "motivo": ""
        }
      ],
      "numero": 1,
      "peso": "01+04+08+32 = 45",
      "gabarito": {}
    },
    {
      "id": "sim2_p2_q2",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre o protocolo I2C, identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 13,
      "respostas": [
        "13"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "O I2C foi criado pela Philips em 1982 e usa 2 fios (SDA e SCL) para conectar múltiplos dispositivos;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "No I2C, o Start bit é gerado com SDA subindo enquanto SCL está alto; o Stop com SDA descendo;",
          "correto": false,
          "motivo": "ERRADO: Start = SDA DESCE (SCL alto). Stop = SDA SOBE (SCL alto). Invertido."
        },
        {
          "valor": "04",
          "texto": "Cada dispositivo I2C tem endereço de 7 bits; bit R/W=0 indica que o mestre escreve no escravo;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "O bit ACK no I2C é gerado pelo receptor: SDA em LOW = confirmação; SDA em HIGH = NACK;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "O I2C é full-duplex, permitindo transmissão e recepção simultâneas;",
          "correto": false,
          "motivo": "ERRADO: I2C é HALF-DUPLEX. SDA é compartilhado."
        },
        {
          "valor": "32",
          "texto": "Os resistores de pull-up são opcionais no I2C e só necessários para distâncias maiores que 1 metro;",
          "correto": false,
          "motivo": "ERRADO: pull-ups são OBRIGATÓRIOS. SDA e SCL são open-drain."
        }
      ],
      "numero": 2,
      "peso": "01+04+08 = 13",
      "gabarito": {}
    },
    {
      "id": "sim2_p2_q3",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre os protocolos de comunicação sem fio e sua comparação, identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 61,
      "respostas": [
        "61"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "O ESP-NOW permite comunicação direta entre ESPs sem necessidade de roteador Wi-Fi;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "No ESP-NOW, os dispositivos são identificados por endereços IP atribuídos dinamicamente;",
          "correto": false,
          "motivo": "ERRADO: ESP-NOW usa MAC Address, não IP."
        },
        {
          "valor": "04",
          "texto": "O pacote máximo do ESP-NOW é de 250 bytes — suficiente para a maioria dos dados de sensores;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "O protocolo LoRa oferece o maior alcance estudado (até 10 km) com a menor taxa (<5 kbps);",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "O SPI usa 4 fios (MOSI, MISO, SCK e CS) e é o mais rápido dos protocolos cabeados estudados (até 65 Mbps);",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "O CAN é usado em automação industrial e automotivo, assíncrono, até 1 km e 1 Mbps com múltiplos nós;",
          "correto": true,
          "motivo": ""
        }
      ],
      "numero": 3,
      "peso": "01+04+08+16+32 = 61",
      "gabarito": {}
    },
    {
      "id": "sim2_p2_q4",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre MQTT e seus mecanismos, identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 29,
      "respostas": [
        "29"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "O MQTT foi criado em 1999 por Stanford-Clark (IBM) e Nipper para monitorar sensores em oleodutos via satélite;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "02",
          "texto": "No MQTT, os publishers enviam mensagens diretamente aos subscribers sem intermediários;",
          "correto": false,
          "motivo": "ERRADO: o BROKER é o intermediário obrigatório no MQTT."
        },
        {
          "valor": "04",
          "texto": "O wildcard '+' substitui exatamente 1 nível de tópico; '#' substitui vários e só aparece no final;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "No QoS 2, cada mensagem passa por handshake de 4 etapas garantindo entrega exatamente uma vez;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "QoS 1 garante entrega confirmada, mas pode duplicar; o receptor deve ser idempotente;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "HTTP WebSockets suporta retained messages e QoS configurável, sendo equivalente ao MQTT para IoT;",
          "correto": false,
          "motivo": "ERRADO: HTTP WebSockets NÃO tem retained messages nem QoS. São características exclusivas do MQTT."
        }
      ],
      "numero": 4,
      "peso": "01+04+08+16 = 29",
      "gabarito": {}
    },
    {
      "id": "sim2_p2_q5",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "MC",
      "tier": "",
      "pergunta": "Sobre o processo de desenvolvimento de SE, linguagens e ferramentas, identifique as afirmativas CORRETAS:",
      "opcoes": [],
      "resposta": 62,
      "respostas": [
        "62"
      ],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [
        {
          "valor": "01",
          "texto": "Na fase de Definição de Requisitos, apenas engenheiros eletrônicos participam, pois os requisitos são exclusivamente de hardware;",
          "correto": false,
          "motivo": "ERRADO: Definição de Requisitos é MULTIDISCIPLINAR."
        },
        {
          "valor": "02",
          "texto": "O RTOS é usado em MCUs com múltiplas tarefas em tempo real, tratando sincronismo e prioridades;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "04",
          "texto": "A linguagem Assembly oferece máxima performance e menor código, porém com portabilidade praticamente nula;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "08",
          "texto": "O OpenPLC suporta as 5 linguagens da IEC 61131-3 e roda em Arduino, ESP e Raspberry Pi;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "16",
          "texto": "O bootloader permite carregar novos sketches via USB sem necessidade de programador ISP externo;",
          "correto": true,
          "motivo": ""
        },
        {
          "valor": "32",
          "texto": "O método ISP usa SPI com conector ICSP de 6 pinos; o sinal RESET inicia o modo de programação;",
          "correto": true,
          "motivo": ""
        }
      ],
      "numero": 5,
      "peso": "02+04+08+16+32 = 62",
      "gabarito": {}
    },
    {
      "id": "sim2_p2_q6",
      "origem": "simulado",
      "prova": "p2",
      "topico": "p2_simulado",
      "tipo": "ABERTA",
      "tier": "",
      "pergunta": "QUESTÃO ABERTA (obrigatória): Uma fábrica quer monitorar temperatura e pressão em 2 linhas (linha1 e linha2), cada uma com sensores e válvulas atuadoras. (A) Proponha uma estrutura de tópicos MQTT adequada para sensores e atuadores. (B) Indique os wildcards que um dashboard de temperatura geral e um sistema de log completo devem usar. (C) Justifique o nível de QoS para leituras de sensor e para comandos de atuadores.",
      "opcoes": [],
      "resposta": "",
      "respostas": [],
      "explicacao": "",
      "resposta_esperada": "",
      "passos": [],
      "unidade": "",
      "tolerancia": 0,
      "itens": [],
      "numero": 6,
      "peso": "",
      "gabarito": {
        "parte_a": "Tópicos: fabrica/linha1/sensor/temperatura, fabrica/linha1/sensor/pressao, fabrica/linha2/sensor/temperatura, fabrica/linha2/sensor/pressao, fabrica/linha1/atuador/valvula/cmd, fabrica/linha2/atuador/valvula/cmd",
        "parte_b": "Dashboard de temperatura: fabrica/+/sensor/temperatura (+ substitui linha1, linha2, etc.). Log completo: fabrica/# (recebe tudo abaixo de fabrica/).",
        "parte_c": "Sensores: QoS 0 — perder 1 leitura é aceitável (próxima chega em breve). Menor overhead. Atuadores: QoS 2 — comando de válvula não é idempotente. Duplicar pode causar problema (abrir e fechar inesperadamente). QoS 2 garante exatamente 1 entrega."
      }
    }
  ],
  "simulados": [
    {
      "id": "sim1_p2",
      "titulo": "Simulado 1 — P2 (Medição, ADC, Registradores, Timers, SE)",
      "prova": "p2",
      "instrucoes": "Em cada questão, some os valores das afirmativas CORRETAS. Afirmativas incorretas marcadas como corretas ANULAM itens somados corretamente. Você pode deixar UMA das questões 1-5 em branco. A questão 6 é aberta e obrigatória.",
      "questoes": [
        {
          "id": "sim1_p2_q1",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "A qualidade de uma medição depende de parâmetros como precisão, exatidão e linearidade. Identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 53,
          "respostas": [
            "53"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "A precisão de um sistema de medição está relacionada à sua estabilidade e repetibilidade, independentemente de o valor medido ser correto ou não;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "A exatidão de uma medição está diretamente ligada à ausência de ruído aleatório; sistemas exatos são necessariamente precisos;",
              "correto": false,
              "motivo": "ERRADO: precisão e exatidão são INDEPENDENTES."
            },
            {
              "valor": "04",
              "texto": "O cálculo de média — simples ou móvel — é uma técnica eficaz para reduzir os efeitos do ruído aleatório sobre a precisão de uma medição;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "A não-linearidade de um sensor provoca erros de medição distribuídos uniformemente por toda a faixa de operação;",
              "correto": false,
              "motivo": "ERRADO: ocorre principalmente nos EXTREMOS da faixa."
            },
            {
              "valor": "16",
              "texto": "Um sensor que sempre retorna 5% acima do valor real, com leituras muito estáveis, é caracterizado como preciso e inexato;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "A inexatidão é considerada o problema mais grave, pois a informação correta não está disponível sem uma referência externa;",
              "correto": true,
              "motivo": ""
            }
          ],
          "numero": 1,
          "peso": "01+04+16+32 = 53",
          "gabarito": {}
        },
        {
          "id": "sim1_p2_q2",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "A qualidade da medição em sistemas digitais depende de referência de tensão, ruído e resolução do ADC. Identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 29,
          "respostas": [
            "29"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "A tensão de referência determina o valor máximo mensurável pelo ADC; se ela oscilar, toda a medição é afetada mesmo que o sinal esteja estável;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "O coeficiente de temperatura de uma referência é em ppm/°C; quanto maior esse valor, melhor a estabilidade;",
              "correto": false,
              "motivo": "ERRADO: quanto MENOR o ppm/°C, MELHOR. 3 ppm/°C >> 700 ppm/°C."
            },
            {
              "valor": "04",
              "texto": "No Arduino Uno com analogReference(EXTERNAL), não se deve chamar analogRead() antes de configurar o AREF, pois pode danificar o microcontrolador;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "O WDT reinicializa o MCU quando este deixa de alimentá-lo dentro do intervalo configurado, protegendo contra travamentos;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "Um ADC de 10 bits com Vref=5V possui passo de aproximadamente 4,89 mV, correspondendo a 1024 valores distintos;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "Ruído de alta intensidade em ambientes industriais pode alterar registradores do MCU, mas nunca impede a operação do ADC;",
              "correto": false,
              "motivo": "ERRADO: ruído intenso PODE impedir a operação do ADC."
            }
          ],
          "numero": 2,
          "peso": "01+04+08+16 = 29",
          "gabarito": {}
        },
        {
          "id": "sim1_p2_q3",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre conversão de sinais — ADC, DAC, PWM e amostragem — identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 53,
          "respostas": [
            "53"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "Na arquitetura Flash do ADC, o número de comparadores cresce exponencialmente (2^N - 1 para N bits), tornando-a impraticável para alta resolução;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "O Teorema de Nyquist estabelece que a frequência de amostragem deve ser pelo menos IGUAL à maior componente do sinal;",
              "correto": false,
              "motivo": "ERRADO: deve ser pelo menos o DOBRO (2× f_máx)."
            },
            {
              "valor": "04",
              "texto": "O PWM simula saída analógica controlando o Duty Cycle; o efeito vem da tensão média na saída;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "O Arduino Uno possui DAC integrado de 8 bits nos pinos marcados com (~);",
              "correto": false,
              "motivo": "ERRADO: Arduino Uno NÃO possui DAC. Os pinos (~) geram PWM."
            },
            {
              "valor": "16",
              "texto": "O ADC do Arduino Uno usa arquitetura SAR com 10 bits e pode multiplexar até 8 entradas analógicas;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "Um DAC R-2R usa apenas dois valores de resistores (R e 2R), independentemente do número de bits;",
              "correto": true,
              "motivo": ""
            }
          ],
          "numero": 3,
          "peso": "01+04+16+32 = 53",
          "gabarito": {}
        },
        {
          "id": "sim1_p2_q4",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre a arquitetura do ATMega328P e manipulação de registradores, identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 27,
          "respostas": [
            "27"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "O ATMega328P usa Arquitetura Harvard, com barramentos separados para programa (Flash) e dados (SRAM), permitindo acesso simultâneo;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "Na Harvard do ATMega328P, instrução = 16 bits e dado = 8 bits — tamanhos diferentes são normais;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "04",
              "texto": "O registrador DDRx define a direção dos pinos: bit 0 = saída e bit 1 = entrada;",
              "correto": false,
              "motivo": "ERRADO: DDRx bit 0 = ENTRADA, bit 1 = SAÍDA. Invertido na afirmativa."
            },
            {
              "valor": "08",
              "texto": "O registrador PINx é somente leitura e reflete o estado elétrico atual de cada pino;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "Para ativar um bit específico de um registrador sem alterar os demais, usa-se reg |= (1 << n);",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "A EEPROM do ATMega328P é uma memória volátil de 1 KB para armazenar dados temporários durante a execução;",
              "correto": false,
              "motivo": "ERRADO: EEPROM é NÃO VOLÁTIL. Persiste sem energia."
            }
          ],
          "numero": 4,
          "peso": "01+02+08+16 = 27",
          "gabarito": {}
        },
        {
          "id": "sim1_p2_q5",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre interrupções, timers e desenvolvimento de software para SE, identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 29,
          "respostas": [
            "29"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "Uma ISR deve ser construída de forma a ser a mais curta possível, evitando delay() ou comunicação serial dentro dela;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "O Timer 0 do ATMega328P tem 16 bits de resolução e controla millis(), micros() e delay();",
              "correto": false,
              "motivo": "ERRADO: Timer 0 tem 8 bits (0-255). Timer 1 tem 16 bits."
            },
            {
              "valor": "04",
              "texto": "Variáveis compartilhadas entre ISR e código principal devem ser declaradas com volatile para garantir leitura sempre da memória;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "Com clock de 16 MHz e prescaler 256, o Timer 1 conta até 62.500 gerando 1 interrupção por segundo;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "A norma IEC 61131-3 define 5 linguagens para PLCs: LD, FBD, ST, IL e SFC, sendo a IL a descontinuada;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "Cross compilers geram código executável para o mesmo dispositivo onde o compilador está sendo executado, acelerando a compilação;",
              "correto": false,
              "motivo": "ERRADO: cross compiler gera para OUTRO dispositivo (ex: PC → AVR)."
            }
          ],
          "numero": 5,
          "peso": "01+04+08+16 = 29",
          "gabarito": {}
        },
        {
          "id": "sim1_p2_q6",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "ABERTA",
          "tier": "",
          "pergunta": "QUESTÃO ABERTA (obrigatória, não opcional): No projeto de um sistema de monitoramento de temperatura, você precisa: (A) Medir temperatura de 0,0 a 50,0 °C com resolução de 0,1 °C — calcule o número mínimo de bits de ADC necessário e verifique se o Arduino Uno é suficiente. (B) O sensor entrega tensão de 0 a 12 V DC. Projete um divisor resistivo compatível com a entrada A0 do Arduino Uno (0–5 V, impedância > 10 MΩ). Apresente R1, R2, corrente, potência e esboço do circuito.",
          "opcoes": [],
          "resposta": "",
          "respostas": [],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [],
          "numero": 6,
          "peso": "",
          "gabarito": {
            "parte_a": "Valores distintos: (50,0 - 0,0) / 0,1 + 1 = 501 valores. 2^8 = 256 (insuficiente). 2^9 = 512 >= 501 → 9 bits mínimo. Arduino Uno tem 10 bits (1024 valores) → SUFICIENTE.",
            "parte_b": "Vout/Vin = R2/(R1+R2) = 5/12. Portanto R1/R2 = 7/5 = 1,4. Escolha: R2 = 10 kΩ, R1 = 14 kΩ (usar 15 kΩ padrão → Vout ≈ 4,8 V). Corrente: i = 12 / (15k+10k) = 480 µA. Potência R1: P = (480e-6)^2 × 15000 ≈ 3,46 mW (usar 1/8 W). Potência R2: P = (480e-6)^2 × 10000 ≈ 2,30 mW (usar 1/8 W). Impedância: 25 kΩ << 10 MΩ. OK. Esboço: Vin ─[R1=15kΩ]─┬─ A0 | [R2=10kΩ] | GND"
          }
        }
      ]
    },
    {
      "id": "sim2_p2",
      "titulo": "Simulado 2 — P2 (UART, I2C, ESP-NOW, MQTT, HTTP, Projeto SE)",
      "prova": "p2",
      "instrucoes": "Em cada questão, some os valores das afirmativas CORRETAS. Afirmativas incorretas marcadas como corretas ANULAM itens somados corretamente. Você pode deixar UMA das questões 1-5 em branco. A questão 6 é aberta e obrigatória.",
      "questoes": [
        {
          "id": "sim2_p2_q1",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "A UART é um dos protocolos de comunicação serial mais usados em SE. Identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 45,
          "respostas": [
            "45"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "A UART é assíncrona — não usa clock compartilhado; sincronização pelo baud rate configurado em ambos;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "Na conexão UART entre dois dispositivos, TX de A conecta em TX de B e RX em RX;",
              "correto": false,
              "motivo": "ERRADO: conexão é CRUZADA — TX-A→RX-B, RX-A←TX-B."
            },
            {
              "valor": "04",
              "texto": "Os bits de dados em UART são enviados com o LSB (menos significativo) primeiro;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "Conectar 5V diretamente ao pino RX de um ESP8266 (3,3V) pode danificar permanentemente o módulo;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "A configuração SERIAL_8N1 indica 8 bits de dados, 1 bit de paridade par e 1 stop bit;",
              "correto": false,
              "motivo": "ERRADO: 8N1 = 8 bits, NENHUMA paridade (N=None), 1 stop."
            },
            {
              "valor": "32",
              "texto": "A UART suporta full-duplex — transmissão e recepção simultâneas em fios separados;",
              "correto": true,
              "motivo": ""
            }
          ],
          "numero": 1,
          "peso": "01+04+08+32 = 45",
          "gabarito": {}
        },
        {
          "id": "sim2_p2_q2",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre o protocolo I2C, identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 13,
          "respostas": [
            "13"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "O I2C foi criado pela Philips em 1982 e usa 2 fios (SDA e SCL) para conectar múltiplos dispositivos;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "No I2C, o Start bit é gerado com SDA subindo enquanto SCL está alto; o Stop com SDA descendo;",
              "correto": false,
              "motivo": "ERRADO: Start = SDA DESCE (SCL alto). Stop = SDA SOBE (SCL alto). Invertido."
            },
            {
              "valor": "04",
              "texto": "Cada dispositivo I2C tem endereço de 7 bits; bit R/W=0 indica que o mestre escreve no escravo;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "O bit ACK no I2C é gerado pelo receptor: SDA em LOW = confirmação; SDA em HIGH = NACK;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "O I2C é full-duplex, permitindo transmissão e recepção simultâneas;",
              "correto": false,
              "motivo": "ERRADO: I2C é HALF-DUPLEX. SDA é compartilhado."
            },
            {
              "valor": "32",
              "texto": "Os resistores de pull-up são opcionais no I2C e só necessários para distâncias maiores que 1 metro;",
              "correto": false,
              "motivo": "ERRADO: pull-ups são OBRIGATÓRIOS. SDA e SCL são open-drain."
            }
          ],
          "numero": 2,
          "peso": "01+04+08 = 13",
          "gabarito": {}
        },
        {
          "id": "sim2_p2_q3",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre os protocolos de comunicação sem fio e sua comparação, identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 61,
          "respostas": [
            "61"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "O ESP-NOW permite comunicação direta entre ESPs sem necessidade de roteador Wi-Fi;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "No ESP-NOW, os dispositivos são identificados por endereços IP atribuídos dinamicamente;",
              "correto": false,
              "motivo": "ERRADO: ESP-NOW usa MAC Address, não IP."
            },
            {
              "valor": "04",
              "texto": "O pacote máximo do ESP-NOW é de 250 bytes — suficiente para a maioria dos dados de sensores;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "O protocolo LoRa oferece o maior alcance estudado (até 10 km) com a menor taxa (<5 kbps);",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "O SPI usa 4 fios (MOSI, MISO, SCK e CS) e é o mais rápido dos protocolos cabeados estudados (até 65 Mbps);",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "O CAN é usado em automação industrial e automotivo, assíncrono, até 1 km e 1 Mbps com múltiplos nós;",
              "correto": true,
              "motivo": ""
            }
          ],
          "numero": 3,
          "peso": "01+04+08+16+32 = 61",
          "gabarito": {}
        },
        {
          "id": "sim2_p2_q4",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre MQTT e seus mecanismos, identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 29,
          "respostas": [
            "29"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "O MQTT foi criado em 1999 por Stanford-Clark (IBM) e Nipper para monitorar sensores em oleodutos via satélite;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "02",
              "texto": "No MQTT, os publishers enviam mensagens diretamente aos subscribers sem intermediários;",
              "correto": false,
              "motivo": "ERRADO: o BROKER é o intermediário obrigatório no MQTT."
            },
            {
              "valor": "04",
              "texto": "O wildcard '+' substitui exatamente 1 nível de tópico; '#' substitui vários e só aparece no final;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "No QoS 2, cada mensagem passa por handshake de 4 etapas garantindo entrega exatamente uma vez;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "QoS 1 garante entrega confirmada, mas pode duplicar; o receptor deve ser idempotente;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "HTTP WebSockets suporta retained messages e QoS configurável, sendo equivalente ao MQTT para IoT;",
              "correto": false,
              "motivo": "ERRADO: HTTP WebSockets NÃO tem retained messages nem QoS. São características exclusivas do MQTT."
            }
          ],
          "numero": 4,
          "peso": "01+04+08+16 = 29",
          "gabarito": {}
        },
        {
          "id": "sim2_p2_q5",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "MC",
          "tier": "",
          "pergunta": "Sobre o processo de desenvolvimento de SE, linguagens e ferramentas, identifique as afirmativas CORRETAS:",
          "opcoes": [],
          "resposta": 62,
          "respostas": [
            "62"
          ],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [
            {
              "valor": "01",
              "texto": "Na fase de Definição de Requisitos, apenas engenheiros eletrônicos participam, pois os requisitos são exclusivamente de hardware;",
              "correto": false,
              "motivo": "ERRADO: Definição de Requisitos é MULTIDISCIPLINAR."
            },
            {
              "valor": "02",
              "texto": "O RTOS é usado em MCUs com múltiplas tarefas em tempo real, tratando sincronismo e prioridades;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "04",
              "texto": "A linguagem Assembly oferece máxima performance e menor código, porém com portabilidade praticamente nula;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "08",
              "texto": "O OpenPLC suporta as 5 linguagens da IEC 61131-3 e roda em Arduino, ESP e Raspberry Pi;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "16",
              "texto": "O bootloader permite carregar novos sketches via USB sem necessidade de programador ISP externo;",
              "correto": true,
              "motivo": ""
            },
            {
              "valor": "32",
              "texto": "O método ISP usa SPI com conector ICSP de 6 pinos; o sinal RESET inicia o modo de programação;",
              "correto": true,
              "motivo": ""
            }
          ],
          "numero": 5,
          "peso": "02+04+08+16+32 = 62",
          "gabarito": {}
        },
        {
          "id": "sim2_p2_q6",
          "origem": "simulado",
          "prova": "p2",
          "topico": "p2_simulado",
          "tipo": "ABERTA",
          "tier": "",
          "pergunta": "QUESTÃO ABERTA (obrigatória): Uma fábrica quer monitorar temperatura e pressão em 2 linhas (linha1 e linha2), cada uma com sensores e válvulas atuadoras. (A) Proponha uma estrutura de tópicos MQTT adequada para sensores e atuadores. (B) Indique os wildcards que um dashboard de temperatura geral e um sistema de log completo devem usar. (C) Justifique o nível de QoS para leituras de sensor e para comandos de atuadores.",
          "opcoes": [],
          "resposta": "",
          "respostas": [],
          "explicacao": "",
          "resposta_esperada": "",
          "passos": [],
          "unidade": "",
          "tolerancia": 0,
          "itens": [],
          "numero": 6,
          "peso": "",
          "gabarito": {
            "parte_a": "Tópicos: fabrica/linha1/sensor/temperatura, fabrica/linha1/sensor/pressao, fabrica/linha2/sensor/temperatura, fabrica/linha2/sensor/pressao, fabrica/linha1/atuador/valvula/cmd, fabrica/linha2/atuador/valvula/cmd",
            "parte_b": "Dashboard de temperatura: fabrica/+/sensor/temperatura (+ substitui linha1, linha2, etc.). Log completo: fabrica/# (recebe tudo abaixo de fabrica/).",
            "parte_c": "Sensores: QoS 0 — perder 1 leitura é aceitável (próxima chega em breve). Menor overhead. Atuadores: QoS 2 — comando de válvula não é idempotente. Duplicar pode causar problema (abrir e fechar inesperadamente). QoS 2 garante exatamente 1 entrega."
          }
        }
      ]
    }
  ],
  "aulas": [
    {
      "id": "p1_01_introducao",
      "arquivo": "p1_01_introducao.md",
      "prova": "p1",
      "topico": "p1_definicao",
      "topicoNome": "Definição e Classificação de SE",
      "titulo": "P1 01 Introducao",
      "conteudo": "# Introdução a Sistemas Embarcados\n\n---\n\n<!-- Slide 1 -->\nProfessor Marco Câmara\nSistemas Embarcados\nUCSAL 2026-01 v1.3\n\n<!-- Slide 2 -->\nDefinição\nUm sistema embarcado é um sistema computadorizado construído para uma\naplicação especíﬁca. Por isto mesmo, normalmente não suporta itens que não\nestejam relacionados à execução da aplicação. Seu hardware e software têm limitações.\nO hardware normalmente é mais lento para reduzir o consumo de energia, e oferece\napenas recursos mínimos essenciais para suporte ao seu conjunto especíﬁco de\nperiféricos.\nO software tipicamente precisa ter comportamento determinístico (sempre oferece o\nmesmo tempo de execução), e, em certos casos, em tempo real (reagindo sempre de\nforma imediata a eventos). Em alguns sistemas, o software precisa ser tolerante a\nfalhas, com degradação controlada (considere por exemplo um satélite ou um\nmarcador preso ao corpo de uma baleia). Em outros, o software precisa comunicar o\nerro imediatamente após o primeiro sinal de falha(considere um monitor cardíaco).\n[Making Embedded Systems - White, Elecia]\n\n<!-- Slide 3 -->\nDefinição\nUm sistema embarcado é um sistema eletrônico\nmicroprocessado que, após ser programado, possui uma\nfunção especíﬁca que geralmente não pode ser alterada. Uma\nimpressora, por exemplo, mesmo possuindo um processador\nque poderia ser utilizado para qualquer tipo de atividade, tem\nsua funcionalidade restrita apenas à impressão de páginas.\nUm computador de propósito geral, no entanto, pode ser\nutilizado num instante como um ambiente de entretenimento,\nem outro como estação de trabalho, ou até mesmo um\ntelefone.\n[Programação de Sistemas Embarcados - Almeida, Rodrigo M A]\n\n<!-- Slide 4 -->\nDefinição\nUm sistema embarcado é um sistema eletrônico\nmicroprocessado, completamente encapsulado, dedicado ao\ndispositivo ou sistema que ele controla. Diferentemente de\ncomputadores de propósito geral, como o computador\npessoal, um sistema embarcado realiza um conjunto de tarefas\npredeﬁnidas, geralmente com requisitos especíﬁcos. Já que o\nsistema é dedicado a tarefas especíﬁcas, através de engenharia\npode-se otimizar o projeto reduzindo tamanho, recursos e\ncusto do produto.\n[Wikipedia]\n\n<!-- Slide 5 -->\nDefinição (+ algumas)\nInterface com o usuário\nSistemas embarcados podem operar sem nenhuma ou muito pouca interação\ncom seus usuários.\nOmnipresentes\nPraticamente todo equipamento elétrico, mecânico ou químico atual é um\nsistema embarcado;\nCarregadores de celular, eletrodomésticos, semáforos, automóveis, aviões,\nmotores industriais, equipamentos médicos etc.\nDiversos níveis de complexidade e custo\nSistemas embarcados controlam desde um eletrodoméstico simples, como um\nliquidiicador, até um foguete recuperável da SpaceX.\n\n<!-- Slide 6 -->\nComplexidade e Custo\nNa área de TI, a variedade é comum em\nqualquer tipo de dispositivo\nComputadores possuem grande variação de\ncomplexidade e custo;\nNo entanto, sistemas embarcados oferecem um\nespectro ainda maior.\nPY32F002A,\nutilizado em\nsistemas simples,\ncusta US$ 0.08\nXQR5VFX130,\nutilizado na\nindústria\naeroespacial,\ncusta US$ 40,000\n40000 / 0,08 = 500.000 vezes mais caro\n\n<!-- Slide 7 -->\nDefinição (+ algumas)\nComputação de Borda (Edge Computing)\nDistribuição do processamento, permitindo tratar dados no ponto de\ncoleta;\nComputação local reduz a largura de banda do canal de comunicação;\nTransmitir menos dados ⇒mais segurança;\nPode-se atuar imediatamente no local sem consultas a um ponto central;\nAumenta a resiliência do ambiente, já que mesmo em caso de falhas de\ncomunicação, algumas decisões continuam sendo tomadas.\nEmbora pareçam antagônicas, a computação de borda pode conviver\ncom a computação em nuvem.\n"
    },
    {
      "id": "p1_02_historia_motivacao",
      "arquivo": "p1_02_historia_motivacao.md",
      "prova": "p1",
      "topico": "p1_definicao",
      "topicoNome": "Definição e Classificação de SE",
      "titulo": "P1 02 Historia Motivacao",
      "conteudo": "# História e Motivação dos SE\n\n---\n\n<!-- Slide 8 -->\nMotivação e história\nSempre houve demanda pela automação de tarefas repetitivas, por\ndiversos motivos. Entre eles:\nAumento da performance\nRedução de Custos\nPadronização\nSegurança\n\n<!-- Slide 9 -->\nMotivação e história\nSempre houve demanda pela automação de tarefas repetitivas,\npor diversos motivos. Entre eles:\nA revolução industrial praticamente foi deinida por esta\ndemanda\nAutômatos complexos serviram de inspiração para as máquinas de tear\nOs autômatos durante algum tempo eram dispositivos mecânicos: roda d’água,\nrelógio, semáforos, e até robôs !\nAumento da performance\nRedução de Custos\nPadronização\nSegurança\n\n<!-- Slide 10 -->\nMotivação e história\nSempre houve demanda pela automação de tarefas repetitivas, por\ndiversos motivos. Entre eles:\nA revolução industrial praticamente foi deinida por esta demanda\nAutômatos complexos serviram de inspiração para as máquinas de tear\nOs autômatos durante algum tempo eram dispositivos mecânicos: roda d’água,\nrelógio, semáforos, e até robôs !\nDispositivos mecânicos acabaram sendo substituídos por\neletrônicos, e depois digitais, e inalmente microprocessados\nRedução de custos pela escala de produção;\nMaior simplicidade de projeto, fabricação e manutenção.\nAumento da performance\nRedução de Custos\nPadronização\nSegurança\n\n<!-- Slide 11 -->\nMotivação e história\nSempre houve demanda pela automação de tarefas repetitivas, por\ndiversos motivos. Entre eles:\nA revolução industrial praticamente foi deinida por esta demanda\nAutômatos complexos serviram de inspiração para as máquinas de tear\nOs autômatos durante algum tempo eram dispositivos mecânicos: roda d’água,\nrelógio, semáforos, e até robôs !\nDispositivos mecânicos acabaram sendo substituídos por\neletrônicos, e depois digitais, e inalmente microprocessados\nRedução de custos pela escala de produção;\nMaior simplicidade de projeto, fabricação e manutenção.\nAumento da performance\nRedução de Custos\nPadronização\nSegurança\nAlguns autores adotam uma classiﬁcação dos\nsistemas embarcados em função da arquitetura\ndos processadores (pequena ou média escala,\nou “complexa). Outros usam a “geração\" dos\ndispositivos (1ª a 4ª gerações). Como este tipo\nde classiﬁcação inevitavelmente ﬁcará defasada\nà medida em que evoluem os dispositivos, não\nadotaremos esta estratégia.\n\n<!-- Slide 12 -->\nUm pouco de história\n1780\n1840\n2700aC\n87aC\nÁbaco\n(Mesopotâmia)\nAnticítera\n(Grécia)\nMoinho de Vento\nHorizontal (Pérsia)\nRoda D’Água\n(China)\nTear a vapor\n(Inglaterra)\nMáq.Babbage\n(Inglaterra)\n1940\nBombe\n(Inglaterra)\nMotor Elétrico\n(Alemanha)\n1952\nControle Numérico\n(EUA)\n1960\nCirc.Integrado\n(EUA)\nInternet\nIoT\nSistemas\nEmbarcados\n\n<!-- Slide 13 -->\nUm pouco de história\nOs beneícios da eletricidade foram rapidamente\naproveitados\nMotores, válvulas, solenóides;\nBotões, Relês, Chaves Magnéticas;\nCircuitos elétricos.\nCircuitos eletrônicos analógicos foram o próximo passo\nAutomação “inteligente”;\nMaior coniabilidade, menor ocupação de espaço etc.\nChegada da eletrônica digital e a Lógica Fixa\nPortas lógicas permitiam lógicas complexas, e até programação sequencial;\nComportamento mais estável, obedecendo à lógica digital e binária;\n\n<!-- Slide 14 -->\nLógica Fixa\nFuncionalidade Digital\nÉ virtualmente possível implementar\nqualquer lógica especíica através de\nprojeto combinacional/sequencial;\nPode-se obter níveis elevados de\nperformance.\nPontos negativos\nBaixa lexibilidade e portabilidade;\nComplexidade gera custos elevados;\nProjeto, Implementação e Manutenção\nTipicamente tem dimensões maiores.\n\n<!-- Slide 15 -->\nLógica Fixa (implementação)\nDiscreta\nOperações lógicas básicas (E, OU, XOR etc);\nComponentes eletrônicos analógicos complementares.\nIntegrada\nFuncionalidade implementada totalmente, ou em grande parte, em circuito\nintegrado especíico;\nPode utilizar inclusive circuitos digitais personalizável, como os FPGA (Field\nProgrammable Gate Array), deinidos por HDL (Hardware Deinition\nLanguage). Os FPGAs serão abordados posteriormente.\n\n<!-- Slide 16 -->\nUm pouco de história\nSistemas microcontrolados\nLógica implementada no irmware;\nUm único microcontrolador admite ininitos projetos;\nPLC (Programmable Logic Controller)\nTecnologia proprietária, e largamente utilizada em projetos de automação;\nVantagens\nRecursos embutidos permitem novas funcionalidades tipicamente inviáveis em\nsistemas de Lógica Fixa, que exigiriam novo projeto;\nPermitem atualizações pós-venda;\nMicrocontroladores substituem dezenas de componentes discretos, reduzindo custos;\nTambém há redução de consumo energético e espaço ocupado.\n\n<!-- Slide 17 -->\nUm pouco de história\nSistemas microcontrolados\nLógica implementada no irmware;\nUm único microcontrolador admite ininitos projetos;\nPLC (Programmable Logic Controller)\nTecnologia proprietária, e largamente utilizada em projetos de automação;\nVantagens\nRecursos embutidos permitem novas funcionalidades tipicamente inviáveis em\nsistemas de Lógica Fixa, que exigiriam novo projeto;\nPermitem atualizações pós-venda;\nMicrocontroladores substituem dezenas de componentes discretos, reduzindo custos;\nTambém há redução de consumo energético e espaço ocupado.\nComo são de uso especíﬁco, e\nﬁcam “embutidos” no hardware,\nos softwares para sistemas\nembarcados são muitas vezes\nidenﬁcados como ﬁrmware.\n\n<!-- Slide 18 -->\nUm pouco de história\nAté hoje, a liderança está com as soluções proprietárias\nSiemens, Schneider, Honeywell, Yokogawa, entre outros, são nomes fortes;\nTipicamente são soluções de altíssima coniabilidade, porém alto custo.\nSistemas abertos para automação\nÉ um movimento mais recente, porém poderoso;\nO mercado oferece microcontroladores de baixo custo;\nEstá disponível farta documentação técnica;\nHá diversas iniciativas para suporte à automação por sistemas abertos;\nUm exemplo é a OpenPLC, projeto de um brasileiro, Thiago Rodrigues Alves;\nNo inal, tudo acaba em software (irmware, no caso).\nSistemas Microcontrolados ⇒SISTEMAS EMBARCADOS.\nou \"embutidos\"\n\n<!-- Slide 19 -->\nUm pouco de história\nMicroprocessadores\n1968: surge a Intel.\n4 bits: Intel 4004, 4040\n8 bits: Intel 8008, 8080, 8085\n16 bits: Intel 8086, 8088, 80186 &\n80188, 80286\n32 bits: 80386, 80486, Intel Pentium,\nPentium Pro, II, II xeon, III, IV, Dual\nCore\n64 bits: Intel Core 2, i3, i5, i7, i9\nMicrocontroladores\n1971: TMS1000, da Texas\n1976: Intel 8048\n1980: Intel 8051\n1990 ➠: surgiram diversos\nfornecedores (Atmel, Microchip,\nExpressif , RaspBerry Foundation etc)\nMicrocontroladores surgiram paralelamente aos\nmicroprocessadores, porém com objetivos diferentes;\n\n<!-- Slide 20 -->\nUm pouco de história\nMicroprocessadores\n1968: surge a Intel.\n4 bits: Intel 4004, 4040\n8 bits: Intel 8008, 8080, 8085\n16 bits: Intel 8086, 8088, 80186 &\n80188, 80286\n32 bits: 80386, 80486, Intel Pentium,\nPentium Pro, II, II xeon, III, IV, Dual\nCore\n64 bits: Intel Core 2, i3, i5, i7, i9\nMicrocontroladores\n1971: TMS1000, da Texas\n1976: Intel 8048\n1980: Intel 8051\n1990 ➠: surgiram diversos\nfornecedores (Atmel, Microchip,\nExpressif , RaspBerry Foundation etc)\nMicrocontroladores surgiram paralelamente aos\nmicroprocessadores, porém com objetivos diferentes;\nMicrocontrolador Intel 8051\n"
    },
    {
      "id": "p1_03_classificacao_se",
      "arquivo": "p1_03_classificacao_se.md",
      "prova": "p1",
      "topico": "p1_definicao",
      "topicoNome": "Definição e Classificação de SE",
      "titulo": "P1 03 Classificacao Se",
      "conteudo": "# Classificação de Sistemas Embarcados\n\n---\n\n<!-- Slide 21 -->\nClassificação de Sistemas embarcados\nAutônomos ou “isolados\"\nSão independentes, não precisam de\nservidores ou acesso à internet;\nRecursos de rede, quando existem, são\nlocais, para acesso a sensores,\natuadores, ou a sub-sistemas.\nEm rede;\nDe tempo real;\nMóveis.\n\n<!-- Slide 22 -->\nClassificação de Sistemas embarcados\nAutônomos ou “isolados\";\nEm rede\nDependem de recursos externos, seja como\nservidores, ou mesmo para comunicação\ncom outros sistemas independentes;\nIncorporam a IoT (Internet das Coisas),\nque devido à sua abrangência e\ndiversidade, deve-se tratar como um tema\nà parte;\nRepresentam um desaio para a segurança.\nDe tempo real;\n\n<!-- Slide 23 -->\nClassificação de Sistemas embarcados\nAutônomos ou “isolados”;\nEm rede;\nDe tempo real\nPrecisam obedecer a requisitos de tempo de resposta:\nSistemas Soft Real Time operam mesmo diante de falhas na\nobediência a estes requisitos;\nSistemas Hard Real Time têm requisitos rígidos, que não\npodem ser desobedecidos.\nMóveis.\n\n<!-- Slide 24 -->\nClassificação de Sistemas embarcados\nAutônomos ou “isolados\"\nEm rede;\nDe tempo real;\nMóveis\nTipicamente estão em dispositivos de pequeno\nporte, portáteis e com restrições severas de\nconsumo energético;\nCelular é um sistema embarcado ?!?\n\n<!-- Slide 25 -->\nClassificação de Sistemas embarcados\n⊃IoT\n\n<!-- Slide 26 -->\nClassificação de Sistemas embarcados\n⊃IoT\n* IoT Analytics Research 2023\n\n<!-- Slide 27 -->\nAplicações de Sistemas embarcados\nAutomotivas\nAplicação comum dos Sistemas\nembarcados;\nEnvolve praticamente todos os\ncomponentes de um sistema completo;\nNos anos 70, o único equipamento\neletrônico de um automóvel era o\nrádio !\nIndustriais\nMédicas\n\n<!-- Slide 28 -->\nAplicações de Sistemas embarcados\nAutomotivas\nHoje qualquer automóvel possui um\nSistema embarcado (o Celta já tinha !);\nTemos ignição e injeção eletrônica,\ncomputador de bordo, ABS, EBD, Airbag,\nsuspensão ativa, travas elétricas, direção\nelétrica assistida, ar-condicionado, cruize\ncontrol …\nTipicamente são múltiplos sistemas de\ndiferentes fornecedores, interligados.\nIndustriais\n\n<!-- Slide 29 -->\nAplicações de Sistemas embarcados\nAutomotivas\n“Montadora\" produz carroceria e\nmotor. Os demais componentes são de\nfabricantes diversos (painel da\nVisteon, Freio da Bosch, Controle do\nMotor da Magnet Marelli, Ar-\ncondicionado da Denso etc). Isto exige\numa rede padronizada interligando os\ncomponentes do Sistema embarcado;\nProtocolo CAN, porta OBD…\nIndustriais\n\n<!-- Slide 30 -->\nAplicações de Sistemas embarcados\nAmbiente Externo\nSensores\nAtuadores\nÓtica\nMecânica\nTérmica\nElétrica\nMagnética\nQuímica\nInterfaces Especíﬁcas\nEletrônica de Potência\nFonte de Alimentação\nProcessamento\nde Sinais\nAnalógicos\nProcessamento\nde Sinais\nDigitais\nSist. de Controle\nComunicação Externa\nMicrocontrolador\nDSP\nRTOS\n\n<!-- Slide 31 -->\nAplicações de Sistemas embarcados\nAutomotivas\nIndustriais\nEspecialistas identiicam quatro Revoluções Industriais. A primeira ocorreu no inal do\nséculo 18. A segunda, no inal do século 19, está relacionada à aplicação da eletricidade\ne a criação da linha de montagem;\nÉ na terceira, do inal do século 20, que foram adotados os Sistemas embarcados,\ninclusive com os primeiros esforços de desenvolvimento da Internet das Coisas (IoT);\nEspecialistas dizem que estamos passando pela 4ª Revolução Industrial, a chamada\nIndústria 4.0. Os destaques agora são a CPS, a AI, o ML, o Big Data e a Robótica.\nMédicas\n\n<!-- Slide 32 -->\nAplicações de Sistemas embarcados\nAutomotivas\nIndustriais\nEspecialistas identiicam quatro Revoluções Industriais. A primeira ocorreu no inal do\nséculo 18. A segunda, no inal do século 19, está relacionada à aplicação da eletricidade\ne a criação da linha de montagem;\nÉ na terceira, do inal do século 20, que foram adotados os Sistemas embarcados,\ninclusive com os primeiros esforços de desenvolvimento da Internet das Coisas (IoT);\nEspecialistas dizem que estamos passando pela 4ª Revolução Industrial, a chamada\nIndústria 4.0. Os destaques agora são a CPS, a AI, o ML, o Big Data e a Robótica.\nMédicas\nCyber-Physical Systems: o conceito envolve a\nintegração dos dispositivos e máquinas físicos\ncom sistemas digitais “inteligentes\". Esta\npermite o monitoramento em tempo real,\nanálise e controle dos processos industriais.\n\n<!-- Slide 33 -->\nAplicações de Sistemas embarcados\nAutomotivas\nIndustriais\nA Indústria 4.0 obviamente considera a evolução do IoT, inclusive integrada à\nComputação em Nuvem. Outra tecnologia considerada em alguns casos é a Digital\nTwin, para simulação, testes e manutenção preditiva;\nMais recentemente se discute a implantação da Indústria 5.0. O foco é a\nhiperpersonalização, o bem estar humano e a sustentabilidade (ESG ?);\nAplicações Industriais possuem exigências especíicas quanto à operação 24x7, em\nambientes ruidosos, segurança e estabilidade.\nMédicas\n\n<!-- Slide 34 -->\nAplicações de Sistemas embarcados\nAutomotivas\nIndustriais\nMédicas\nDispositivos “vestíveis\" com sensores biométricos de\nbatimento cardíaco, oximetria, temperatura corporal,\npressão sanguínea etc;\nAlguns sistemas podem gerar sinais vitais (marca-\npasso), funcionar como próteses, robôs cirúrgicos etc;\nRequisitos críticos de estabilidade e segurança.\nOutras aplicações\n"
    },
    {
      "id": "p1_04_iot",
      "arquivo": "p1_04_iot.md",
      "prova": "p1",
      "topico": "p1_iot",
      "topicoNome": "IoT e Protocolos de Comunicação",
      "titulo": "P1 04 Iot",
      "conteudo": "# IoT — Internet das Coisas\n\n---\n\n<!-- Slide 35 -->\nAplicações de Sistemas embarcados\nIndustriais\nMédicas\nOutras aplicações\nCarros autônomos;\nAutomação Residencial;\nAgricultura de precisão;\nDrones dos mais diversos modelos;\nEquipamentos e armamento militares;\nEquipamentos de Rede e Telecom (switch, roteador, sistemas redundantes etc);\nRobôs diversos (do aspirador doméstico às maravilhas da Boston Dynamics);\n\n<!-- Slide 36 -->\nCaracterísticas\nAs principais características da Internet das Coisas são:\nSlides gentilmente cedidos pelo Prof. André Brasil Vieieira Wyzykowski\nIntrodução ao IoT\nA IoT pode ser caracterizada como uma rede mundial\nde coisas/objetos/dispositivos interconectados que se\ncomportam como entidades ativas [Roman et al. 2011b];\nAs coisas (dispositivos) na IoT, muitas vezes, possuem\nrestrições de recursos como memória RAM ou ROM,\npoder de processamento e energia [Hummen et al.\n2013];\nMecanismos de comunicação de alguns dispositivos, na\nmaioria das vezes sem fio, possuem baixa potência de\ntransmissão e baixa taxa de dados [Mahalle et al. 2010];\n\n<!-- Slide 37 -->\nCaracterísticas\nAs principais características da Internet das Coisas são:\nIntrodução ao IoT\nIntegra coisas (dispositivos) heterogêneos, o que demanda\numa preocupação em relação a interoperabilidade entre\nestes [Atzori et al. 2010,Mahalle et al. 2012];\nPode ser caracterizada como um ambiente contendo um\ngrande número computadores ou dispositivos invisíveis que\ncolaboram com o usuário, ou seja, um ambiente pervasivo\ne ubíquo [Hanumanthappa e Singh 2012];\nNa IoT, os usuários podem interagir com as coisas em seu\nambiente físico e virtual de diversas maneiras [Mahalle et\nal. 2012].\nSlides gentilmente cedidos pelo Prof. André Brasil Vieieira Wyzykowski\n\n<!-- Slide 38 -->\nCaracterísticas\nInformações retiradas do artigo:\nhttps://wiki.inf.ufpr.br/maziero/lib/exe/fetch.php?\nmedia=ceseg:2013-sbseg-mc4.pdf\nIntrodução ao IoT\nA rede possui uma topologia dinâmica, pois muitos nós\nentram e saem da rede com frequência [Mahalle et al.\n2012,Hanumanthappa e Singh 2012];\nHá uma grande quantidade de coisas (dispositivos) com\nciclo curto de vida, o que exige uma alta capacidade de\ngerenciamento [Fongen 2012];\nSlides gentilmente cedidos pelo Prof. André Brasil Vieieira Wyzykowski\n\n<!-- Slide 39 -->\nIoT X segurança\nO conceito da IoT é conectar “tudo”, e\nquanto mais acessos à rede existirem,\nmaiores são os riscos de segurança;\nMétodos criptográicos seguros exigem\nprocessamento rápido e vigilância\ncontínua, o que atenta contra as\ncaracterísticas dos dispositivos IoT !\nCapacidade limitada de processamento;\nBaixo consumo energético.\nSão inúmeros os casos de crimes que\nexploram as vulnerabilidades dos\nsistemas IoT.\n\n<!-- Slide 40 -->\nIoT X segurança\nLadrão 1\nLadrão 2\nO ladrão 1 tenta\nabrir o carro,\nprovocando o envio\ndo sinal para a\nchave.\nO veículo\ntransmite o sinal\nde rádio que é lido\npelo dispositivo do\nladrão 1.\nO ladrão 1\ntransmite o sinal\npara o ladrão 2,\nque está perto da\nchave.\nA chave responde ao\nsinal do Ladrão 2, que\ncapta a transmissão e a\nenvia para o Ladrão 1,\nquero sua vez a\ntransmite para o carro,\nabrindo o mesmo e\ndando acesso ao botão\nda ignição.\nRoubo de carro por\nrelay attack\nChave do carro está\npróxima do Ladrão 2\n\n<!-- Slide 41 -->\nIoT X segurança\nLadrão 1\nLadrão 2\nO ladrão 1 tenta\nabrir o carro,\nprovocando o envio\ndo sinal para a\nchave.\nO veículo\ntransmite o sinal\nde rádio que é lido\npelo dispositivo do\nladrão 1.\nO ladrão 1\ntransmite o sinal\npara o ladrão 2,\nque está perto da\nchave.\nA chave responde ao\nsinal do Ladrão 2, que\ncapta a transmissão e a\nenvia para o Ladrão 1,\nquero sua vez a\ntransmite para o carro,\nabrindo o mesmo e\ndando acesso ao botão\nda ignição.\nRoubo de carro por\nrelay attack\nChave do carro está\npróxima do Ladrão 2\n\n<!-- Slide 42 -->\nIoT X segurança\nLadrão 1\nLadrão 2\nO ladrão 1 tenta\nabrir o carro,\nprovocando o envio\ndo sinal para a\nchave.\nO veículo\ntransmite o sinal\nde rádio que é lido\npelo dispositivo do\nladrão 1.\nO ladrão 1\ntransmite o sinal\npara o ladrão 2,\nque está perto da\nchave.\nA chave responde ao\nsinal do Ladrão 2, que\ncapta a transmissão e a\nenvia para o Ladrão 1,\nquero sua vez a\ntransmite para o carro,\nabrindo o mesmo e\ndando acesso ao botão\nda ignição.\nRoubo de carro por\nrelay attack\nChave do carro está\npróxima do Ladrão 2\n\n<!-- Slide 43 -->\nIoT X segurança\nLadrão 1\nLadrão 2\nO ladrão 1 tenta\nabrir o carro,\nprovocando o envio\ndo sinal para a\nchave.\nO veículo\ntransmite o sinal\nde rádio que é lido\npelo dispositivo do\nladrão 1.\nO ladrão 1\ntransmite o sinal\npara o ladrão 2,\nque está perto da\nchave.\nA chave responde ao\nsinal do Ladrão 2, que\ncapta a transmissão e a\nenvia para o Ladrão 1,\nquero sua vez a\ntransmite para o carro,\nabrindo o mesmo e\ndando acesso ao botão\nda ignição.\nRoubo de carro por\nrelay attack\nChave do carro está\npróxima do Ladrão 2\n\n<!-- Slide 44 -->\nIoT X segurança\nStalking com\no AirTag\n\n<!-- Slide 45 -->\nIoT X segurança\nStalking com\no AirTag\n\n<!-- Slide 46 -->\nIoT X segurança\nStalking com\no AirTag\n\n<!-- Slide 47 -->\nIoT X segurança\nStalking com\no AirTag\n\n<!-- Slide 48 -->\nIoT X segurança\n\n<!-- Slide 49 -->\nIoT X segurança\nOutras implementações também\nforam alvos de ataque, embora\nnão sejam tão bem\ndocumentadas na imprensa.\nQuais seriam os próximos alvos?\nSistemas Médicos (assassinato)?\nSistemas Aviônicos (terrorismo)?\nÉ claro que é necessária\nprecaução, mas também não\ndevemos exagerar …\n\n<!-- Slide 50 -->\nIoT e as Redes\nÉ inegável que a tecnologia IoT depende da qualidade das redes\nde comunicação, embora existam outros aspectos também\nimportantes, como os Sistemas Operacionais e aplicações\nsuportadas;\nA tecnologia IoT adota múltiplos protocolos, alguns já existentes\nantes do seu surgimento, como o Wi-Fi, e outros bem ajustados às\nsuas características:\nBaixa demanda de largura de banda;\nBaixo consumo energético;\nAcesso típico sem io.\nTecnologias como BlueTooth, RFID, ZigBee, NFC e LoWPAN estão\nentre elas.\n\n<!-- Slide 51 -->\nIoT e as Redes (alcance)\nA IoT normalmente está associada a redes com baixo alcance. No entanto,\nalguns protocolos mais recentes têm expandido seu alcance, como a LoRaWAN,\npor exemplo;\nNovas aplicações como telemetria, medição de consumo residencial de água, luz\ne gás, gestão de trânsito e agropecuária podem ser possíveis.\nWPAN\nWLAN\nWWAN\n10 a 100m\n100 a 1000m\n5 a 100km\n"
    },
    {
      "id": "p1_05_hardware",
      "arquivo": "p1_05_hardware.md",
      "prova": "p1",
      "topico": "p1_hardware",
      "topicoNome": "Hardware: µP vs µC + Arquiteturas",
      "titulo": "P1 05 Hardware",
      "conteudo": "# Microprocessador vs Microcontrolador e Arquiteturas\n\n---\n\n<!-- Slide 52 -->\nHW de Sistemas Embarcados\nNo sistema embarcado, o HW é um conjunto de componentes\nDispositivo \"processador\";\nSensores diversos;\nAtuadores;\nInterfaces e protocolos de comunicação;\nFontes de alimentação;\nComponentes eletrônicos diversos.\nEscolher corretamente cada um dos componentes é essencial\nA portabilidade pode ser inviável;\nO hardware determina os parâmetros de projeto, inclusive de irmware.\nOutro fator importante são as condições ambientais\nAcesso, proteção, temperatura, vibração, EMI etc.\n\n<!-- Slide 53 -->\nProcessador\nUm sistema embarcado de automação moderno tipicamente\nexige um processador. Temos algumas opções:\nCISC Intel i9-13900H\n14 núcleos\n20 threads\n24MB cache\nClock 2.6GHz até 5.4GHz\nConsumo de 45W\n64 GB DDR5\nSSD 1TB PCIe NVM M.2\n\n<!-- Slide 54 -->\nProcessador\nUm sistema embarcado de automação moderno tipicamente\nexige um processador. Temos algumas opções:\nRISC Apple M3 Max\n14 núcleos\n40 núcleos GPUs\n16 núcleos neurais\nClock 2.7GHz até 4.1GHz\nConsumo de 78W\n36 GB Memória Uniicada\nSSD 1TB\n\n<!-- Slide 55 -->\nProcessador\nUm sistema embarcado de automação moderno tipicamente\nexige um processador;\nSão máquinas maravilhosas, rápidas e modernas, MAS …\nDesempenho e capacidade extraordinária de armazenamento não\nsão tão importantes neste tipo de aplicação !\nQuais são os requisitos típicos de um processador para um\nsistema de automação ?\nConsumo baixo de energia;\nDimensões reduzidas;\nCusto acessível.\n\n<!-- Slide 56 -->\nProcessador\nMicroprocessadores\nTipicamente contém uma ULA,\nUnidade de Controle, registradores e\nmemória cache;\nExige componentes externos\nessenciais, como memórias,\nbarramentos, clock, interfaces de E/S\netc;\nProjetados para múltiplos usos;\nDevido a esta dependências, sistemas\nmicroprocessados ocupam mais\nespaço;\nTipicamente baseados na arquitetura\nVon Neumann.\nMicrocontroladores\nAlém dos componentes presentes em\num microprocessador, condensa\nperiféricos como memória, clock,\ninterfaces de E/S diversas,\nconversores A/D e D/A, e portas de\nacesso GPIO (SoC);\nProjetados para uso especíico;\nTipicamente são limitados em\nperformance e capacidade para\nredução do consumo, tamanho e\ncusto;\nTipicamente baseados na arquitetura\nde Harvard.\n\n<!-- Slide 57 -->\nProcessador\nMicroprocessadores\nMicrocontroladores\n\n<!-- Slide 58 -->\nMicroprocessadores\nDiagrama\nfuncional em\nblocos de um\nprocessador Intel\n(Sandy Bridge)\n\n<!-- Slide 59 -->\nMicroprocessadores\nhttps://bit.ly/3xf8Vr3\n\n<!-- Slide 60 -->\nOpções de Processador\nMicroprocessadores\nMicrocontroladores\n\n<!-- Slide 61 -->\nMicrocontroladores\nSoC (System on a Chip)\n* Placa de protótipo baseada no ESP32.\n\n<!-- Slide 62 -->\nArquitetura Básica\nVon Neumann\nConceito desenvolvido pela equipe de John\nVon Neumann no IAS (Institute for\nAdvanced Studies) da Universidade de\nPrinceton em 1946;\nTornou-se um padrão de fato, inspirando\nprojetos até os dias atuais (\"Esta\nmáquina é Von Neumann ?”)\nEstabeleceu o padrão de armazenamento\ndo código executável na memória do\ndispositivo;\nExecuta uma instrução em dois ciclos;\nPossui um barramento de cada tipo\n(dados, endereços e controle).\nHarvard\nConceito desenvolvido para o computador\nMark I, desenvolvido por Howard Aiken em\n1937.\nSepara memórias de uso especíico (dados e\ninstruções), que são acessíveis por\nbarramentos diferentes;\nOtimiza o acesso, economizando espaço e\nreduzindo o consumo;\nMelhora a segurança.\nComum em microcontroladores, e em\nprocessadores DSP (Digital Signal Processing);\nConsegue buscar uma instrução enquanto\nexecuta outra. Isso aumenta o desempenho\npara aplicações em tempo real.\n\n<!-- Slide 63 -->\nProcessador (consumo)\nUm Sistema Embarcado deve consumir o mínimo essencial à\nsua operação, principalmente pela aplicação típica em\ndispositivos móveis.\nTodo o projeto de hardware deve levar isto em consideração,\nmas o ponto fundamental é o microcontrolador, que\nnormalmente é o componente que mais consome no Sistema.\nAlgumas ações são efetivas para redução de consumo do\nmicrocontrolador:\nRedução do clock;\nRedução da tensão de alimentação;\nModo “sleep\"\n\n<!-- Slide 64 -->\nMicrocontroladores\n\n<!-- Slide 65 -->\nSBCs X Microcontroladores\nSingle Board Computers\nOferecem recursos de um computador\nconvencional, além de GPIOs para acesso\ndireto a sensores e atuadores;\nCapazes de executar versões simpliicadas do\nLinux, suportando aplicações complexas.\nMicrocontroladores\nProjetados para uso especíico, com foco\nna redução de consumo e dimensões;\nExigem irmware especíico, com suporte\nreduzido a funções mais complexas.\nRaspberry Pi 5\nESP32 P4\n\n<!-- Slide 66 -->\nUm processador exige companhia !\nMicroprocessadores precisam de muitos\ncomponentes externos essenciais à sua\noperação;\nMicrocontroladores são menos exigentes, mas\nmesmo assim não podem ser usados de forma\nisolada.\nPlacas de Protótipo\nTambém chamadas de “kits de\ndesenvolvimento” (development kits), elas\npermitem testar protótipos com menor\nesforço;\nNa foto temos uma das placas desenvolvidas\ncom o EXP32 da Espressif.\nPlaca de Protótipo EXP32\nMódulo\nMini-1 ESP32\nGPIOs\nGPIOs\nLED “On”\n3,3V\nRegulador (LDO)\n5V →3,3V\nConversor USB/\nSerial (UART)\nBoot\nMicro-USB\nReset\nPlacas de Protótipo\n\n<!-- Slide 67 -->\nProcessador (placa)\nMicrocontrolador\nem Placa de\nProtótipo\nSBC (Single Board\nComputer)\nMicroprocessador\nem Placa Mãe\n(motherboard)\nNão faz sentido aumentar complexidade, e com isto consumo,\ntamanho e custo …\n\n<!-- Slide 68 -->\nProcessador (dimensões)\nDimensões\nEste é um aspecto fundamental em projetos\nembarcados, determinando inclusive a\nviabilidade, ou não, de algumas aplicações;\nMicrocontrolador\nAtualmente, com a miniaturização em larga\nescala dos componentes, o número de\ncomponentes internos não impõe limites\nmínimos às dimensões do CI;\nNo entanto, reduzir o número de pinos afeta\no tamanho signiicativamente, mas diiculta\nas interfaces, limitando as aplicações;\nOutro fator é o tipo de pino (PTH ou SMD)\nPTH - Plated-Through Hole\nSMD - Surface Mount Device\nPlaca de Protótipo PIC10F322\nPTH\nSMD\n\n<!-- Slide 69 -->\nMicrocontroladores\n\n<!-- Slide 70 -->\nPinos e dimensões\nPIC10F322\n6 pinos\nATTiny85\n8 pinos\nSMD\nPTH\nQFN\nESP32 SoC\n48 pinos\nATMega328P\n28 pinos\n3,4 cm\n\n<!-- Slide 71 -->\nTipo Conexão e dimensões\nOutro fator importante é a forma de\nconexão ao circuito:\nPTH - Plated-Through Hole\nSMD - Surface Mount Device\nTamanho dos componentes SMD é muito\nmenor, especialmente com encapsulamento\nBGA (Ball Grid Array) pela redução do\nespaço ocupado pelos pinos.\nTamanho afeta positiva ou negativamente\ndiversos aspectos:\nDissipação de calor;\nCusto de Produção;\nInterferência;\nConiabilidade;\nManutenção.\nPTH\nSMD\nBGA\n\n<!-- Slide 72 -->\nEncapsulamentos (PTH)\nSIP - Single In-Line Package\nDIP - Dual In-Line Package\nRAM\nResistor Network\nDIP-28 ATMega328P\n(Arduíno Uno)\n\n<!-- Slide 73 -->\nEncapsulamentos (SMD)\nSOIC - Small Outline Integrated Circuit\nQFP - Quad Flat Package\nSOIC-18\nPIC16F627A\nQFP-44\nPIC16F877\n\n<!-- Slide 74 -->\nEncapsulamentos (SMD)\nBGA - Ball Grid Array\n"
    },
    {
      "id": "p1_06_arduino_uno",
      "arquivo": "p1_06_arduino_uno.md",
      "prova": "p1",
      "topico": "p1_arduino",
      "topicoNome": "Arduino Uno R3 e GPIOs",
      "titulo": "P1 06 Arduino Uno",
      "conteudo": "# Arduino Uno R3, ATMega328P e GPIOs\n\n---\n\n<!-- Slide 75 -->\nO famoso Arduino Uno\nO Arduíno Uno v3 certamente é a placa\nde protótipo mais conhecida no mundo.\nEla utiliza o ATMega328P,\nmicrocontrolador da Microchip;\nSuportado por uma documentação\nextensa, disponível para qualquer\npessoa interessada, é o dispositivo mais\nutilizado em laboratórios e cursos de\nsistemas embarcados no mundo inteiro.\nEmbora descontinuado pelo projeto Arduíno, similares do mesmo\ncontinuam a ser produzidos e vendidos por outros fabricantes, e isso\ndeve continuar por muitos anos.\nArduíno Uno R3\n\n<!-- Slide 76 -->\nO famoso Arduino Uno\nTudo começou na Itália em 2005;\nTecnologia aberta (existem diversos\nfabricantes produzindo produtos\nsimilares), o que acabou por reduzir\nsigniicativamente seu custo;\nO mais correto é chamar de “Projeto\nArduíno”, já que são diversos\ndispositivos;\nO Arduíno Uno versão 3 é baseado no microcontrolador\nATMega328P, fabricado pela Microchip.\nArduíno Uno R3\n\n<!-- Slide 77 -->\nO famoso Arduino Uno\nNão há idelidade a uma família de\nmicrocontroladores, e nem a um\nfabricante especíico dentro do projeto\nArduíno;\nUm bom exemplo ocorre no Arduíno Uno\nv4. Ele sucedeu a v3, mas utiliza um outro\nmicrocontrolador, de outro fabricante: o\nRenesas RA4M1 32-bit ARM® Cortex®;\nApesar disto, a compatibilidade básica foi\nmantida;\nAs duas versões têm as mesmas características ísicas, e também\ncompatibilidade nas conexões elétricas;\nArduíno Uno R4 Wi-Fi\n\n<!-- Slide 78 -->\nO famoso Arduino Uno\nO desenvolvimento de sketches na nova\nversão pode ser realizado utilizando a\nmesma linguagem, sintaxe e ambiente\nde desenvolvimento;\nPor outro lado, o acesso a recursos de\nbaixo nível exige revisão de projetos\nfeitos para a versão 3;\nIsso reforça como é fundamental\ndiferenciar microcontroladores e placas\nde protótipo.\nArduíno Uno R4 Wi-Fi\n\n<!-- Slide 79 -->\nO ATMega328P\nAlgumas características são do\nmicrocontrolador, e não da placa de\nprotótipo. Vamos então falar do\nATMega328P:\nOriginalmente desenvolvido pela Atmel, comprada pela Microchip em 2016, e\nestá disponível nos formatos PTH (igura) e SMP;\nUma das características importantes que afetam as aplicações do Arduíno Uno\nR3 é a memória. No ATMega328P, temos 1KB de EPROM, 2 KB de SRAM, e 32 KB\nde memória Flash;\nEstas características podem ser bastante diferentes em outros\nmicrocontroladores, mesmo aqueles utilizados em outras placas do projeto\nArduíno. A versão R4, por exemplo, tem 16 vezes mais SRAM (32KB), e 8 vezes\nmais Flash (256KB).\n\n<!-- Slide 80 -->\nConhecendo o Arduíno Uno R3\nMicrocontrolador ATMega328P\n\n<!-- Slide 81 -->\nConhecendo o Arduíno Uno R3\nOs componentes adicionais do\nUno R3 simplificam as\naplicações:\nReduz necessidade de capacitação\nem eletrônica;\nOferecem recursos fundamentais para\naplicações de Sistemas Embarcados.\nNo caso do Arduíno Uno R3,\ntemos:\nBotão de Reset;\nControladora e porta USB tipo A;\nClock Externo a Quartzo;\nRegulador de Tensão (5V);\nConexões diversas;\nComponentes eletrônicos diversos.\nArduíno Uno R3\n\n<!-- Slide 82 -->\nConhecendo o Arduíno Uno R3\nBotão de\nRESET\nO RESET é um recurso\nimportante, mas nem sempre\ndisponível:\nO Raspberry Pi 5 não tem;\nReinicializa o sketch armazenado na\nmemória Flash;\nNão “apaga” o código, nem coloca o\ndispositivo em um modo especial.\n\n<!-- Slide 83 -->\nConhecendo o Arduíno Uno R3\nBotão de\nRESET\nControladora\nUSB\nLembrar que:\nA porta USB é prioritariamente uma\nporta de comunicação, e não de\nalimentação !\nApenas pequenos projetos devem\nser alimentados pela placa de\nprotótipo;\nEventuais problemas elétricos\npodem afetar o computador\nconectado.\n\n<!-- Slide 84 -->\nConhecendo o Arduíno Uno R3\nBotão de\nRESET\nControladora\nUSB\nObjetivos prioritários:\nTransferir sketches do compilador\ncruzado;\nCompartilhar teclado e tela do\ncomputador com o Arduíno Uno:\nDispositivos de E/S;\nDebug de sketches.\nAcesso direto exige HID (Human\nInterface Device), indisponível no\nArduíno Uno R3.\n\n<!-- Slide 85 -->\nConhecendo o Arduíno Uno R3\nCristal de Clock\nO clock sincroniza processador,\nmemória, barramentos e\nperiféricos;\nQuanto à sua performance:\nSe for baixa, pode tornar a operação lenta\ndemais - porém reduz consumo;\nSe for alta, apesar de impor tempos de\nresposta muito baixos para os componentes,\npode viabilizar aplicações em tempo real;\nEstabilidade:\nSe não existirem operações síncronas, as\nexigências são baixas (1 ~ 5 %);\ṇ Um relógio atrasa até 14 minutos por dia\ncom 1% de estabilidade.\nPara aplicações síncronas, é um item crítico;\ṇ Ex: ADC, DAC e comunicação de dados.\n\n<!-- Slide 86 -->\nConhecendo o Arduíno Uno R3\nCristal de Clock\nExistem algumas opções para\nimplementação do clock:\nOscilador RC interno;\nOscilador RC externo;\nOscilador com cristal de quartzo.\nAs opções diferem na estabilidade,\ntamanho, consumo e custo;\nFatores externos (ou internos)\nafetam a estabilidade:\nTemperatura, alimentação, interferências\nelétricas e vibração;\nO Arduíno Uno R3 usa um cristal\nde 16MHz em seu oscilador.\n\n<!-- Slide 87 -->\nConhecendo o Arduíno Uno R3\nCristal de Clock\nExistem algumas opções para\nimplementação do clock:\nOscilador RC interno;\nOscilador RC externo;\nOscilador com cristal de quartzo.\nAs opções diferem na estabilidade,\ntamanho, consumo e custo;\nFatores externos (ou internos)\nafetam a estabilidade:\nTemperatura, alimentação, interferências\nelétricas e vibração;\nO Arduíno Uno R3 usa um cristal\nde 16MHz em seu oscilador.\n\n<!-- Slide 88 -->\nOpções clock ATMega328P\n\n<!-- Slide 89 -->\nOpções clock ATMega328P\n\n<!-- Slide 90 -->\nConhecendo o Arduíno Uno R3\nComunicação e Alimentação\nEntrada USB\nProvê comunicação com o\ncomputador (e alimentação).\nEntrada Fonte DC Externa\nProvê alimentação a partir de fonte\nde 5 a 17V, 1A;\nNão se recomenda >12V\n(aquecimento componentes).\nPortas Analógicas\nPortas Digitais\n\n<!-- Slide 91 -->\nConhecendo o Arduíno Uno R3\nRegulador\nde Tensão\n(5V)\nA alimentação é crítica:\nQueda de tensão por descarga da bateria, ou\nfalhas de projeto, podem provocar alteração de\ncomportamento;\nRuído injetado na alimentação é uma das fontes\nde instabilidade mais diíceis de diagnosticar. O\npróprio circuito digital é uma fonte de ruído;\nUm surto de tensão, mesmo pequeno, pode\ndaniicar diversos componentes.\nComo evitar problemas?\nEscolha cuidadosa das fontes de alimentação;\nRegulador de tensão (5V) e capacitores de\ndesacoplamento foram inseridos na placa de\nprotótipo.\nCapacitor de\nDesacoplamento\n\n<!-- Slide 92 -->\nConhecendo o Arduíno Uno R3\nAlimentação (pinos)\nSaídas de 5V e 3,3V\nCorrente máxima de 150mA\nEntrada Vin\nAlimentação de 5V ≥100mA\nPortas Analógicas\nPortas Digitais\n\n<!-- Slide 93 -->\nA linha Uno oferece conectores\nfêmea para fios jumper\nDupont, sem uso de solda ou\nmesmo uma protoboard.\nEmbora simples, estas\nconexões têm alguns\nproblemas:\nContatos instáveis, especialmente\npara sistemas mais complexos;\nBaixa condutividade;\nSuportam correntes pequenas.\nPor outro lado, outras placas de protótipo podem exigir o uso de\nprotoboards. Projetos complexos podem exigir inclusive uma placa de\ncircuito impresso, mesmo para protótipos.\nConectores Arduíno Uno R3\n\n<!-- Slide 94 -->\nGPIOs do Arduíno Uno R3\nGPIO: Generic Purpose Input\nOutput\nAlimentação\nPortas Analógicas\nPortas Digitais\n\n<!-- Slide 95 -->\nGPIOs do Arduíno Uno R3\nAlimentação\nPortas Analógicas\nEntradas com ADC\n10 bits (0~1023)\n= 0V\n1023 = 5V (ou conf. IOREF)\nADC externo p/ resoluções maiores\nFunções Especiais\nI2C (SCL e SDA): portas A5 e A4\nPortas Digitais\nI2C\n\n<!-- Slide 96 -->\nAlimentação\nPortas Analógicas\nEntradas com ADC\n10 bits (0~1023)\n= 0V\n1023 = 5V (ou conf. IOREF)\nADC externo p/ resoluções maiores\nFunções Especiais\nI2C (SCL e SDA): portas A5 e A4\nPortas Digitais\nGPIOs do Arduíno Uno R3\n\n<!-- Slide 97 -->\nGPIOs do Arduíno Uno R3\nAlimentação\nPortas Analógicas\nPortas Digitais\n\n<!-- Slide 98 -->\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nPWM\nGPIOs do Arduíno Uno R3\n\n<!-- Slide 99 -->\nGPIOs do Arduíno Uno R3\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nPWM\n\n<!-- Slide 100 -->\nGPIOs do Arduíno Uno R3\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nUART\n\n<!-- Slide 101 -->\nGPIOs do Arduíno Uno R3\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nAs portas UART têm outra\nfunção:\nInternamente as portas estão\nconectadas a um conversor USB-\nSerial, habilitando a porta USB da\nplaca de protótipo.\nQuando o Arduíno Uno R3 estiver\nconectado via porta USB a um\ncomputador, é conveniente não\nutilizá-las para UART.\n\n<!-- Slide 102 -->\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nGPIOs do Arduíno Uno R3\nPortas 2 e 3:\nPinos ísicos para sinais de\ninterrupção externa;\nPermitem a gestão de eventos\nísicos em tempo real;\nAlém das interrupções externas, o\nArduíno Uno suporta interrupções\ninternas, como por exemplo\nbaseadas nos temporizadores.\n\n<!-- Slide 103 -->\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nGPIOs do Arduíno Uno R3\nPortas 10 a 13:\nSuportam comunicação SPI (Serial\nPeripheral Interface), que também é um\nprotocolo de comunicação para periféricos\nexternos;\nComparado ao I2C, o SPI é mais complexo,\nporém oferece performance maior;\nUma função comum em alguns\nmicrocontroladores é o uso do SPI para a\nprogramação ISP (In-System Programming).\nO Arduíno Uno R3, por exemplo, possui um\nconector de 6 pinos especíico para esta\nfunção.\n\n<!-- Slide 104 -->\nAlimentação\nPortas Analógicas\nPortas Digitais\nEntrada ou Saída\nConfigurada via SW\nSaídas marcadas com ~ são PWM\n(Pulse Width Modulation)\n< 20mA (máx.40 mA); total 200mA\nFunções especiais\nUART: Rx/Tx (portas 0 e 1)\nInterrupções: INT0 e 1 (portas 2 e 3)\nSPI: SS,MOSI,MISO,SCK(p. 10~13)\nPino 13: LED interno\nGPIOs do Arduíno Uno R3\n\n<!-- Slide 105 -->\nShields para o Arduíno Uno\nEthernet e\ncartão SD\n\n<!-- Slide 106 -->\nShields para o Arduíno Uno\nMotores\n\n<!-- Slide 107 -->\nShields para o Arduíno Uno\nDidático\n\n<!-- Slide 108 -->\nShields para o Arduíno Uno\nCNC e\nImpressora 3D\n\n<!-- Slide 109 -->\nArduíno : outras placas\n\n<!-- Slide 110 -->\nA família PIC\nFabricados pela Microchip, a família de\nmicrocontroladores PIC (Peripheral\nInterface Controller ou Programmable\nIntelligent Computer) é uma das mais\nreconhecidas no mercado de Sistemas\nEmbarcados;\nPrimeiros produtos surgiram nos anos\n80 dividindo o protagonismo com o 8051\nda Intel. - durante décadas eles eram as\núnicas opções para estudantes e\npesquisadores;\nApenas em 2015 a Microchip lançou\nprodutos de menor custo e\ncomplexidade.\nPIC16F877A, um dos microcontroladores mais\npopulares do mundo.\n\n<!-- Slide 111 -->\nKits Desenvolvimento PIC\nAdvanced PIC-\nMicrocontroler Kit\nMCU Development Board\nCuriosity Nano\nOs produtos “mais didáticos” para estudantes e projetistas inicialmente\neram grandes e caros;\nDesenvolvimento a baixo custo exigia capacitação em eletrônica;\nA solução de software também era (e ainda é) consideravelmente mais\ncomplexa para iniciantes (MPLAB X IDE da Microchip).\n\n<!-- Slide 112 -->\nSéries de CPs \"PIC\"\nSéries evoluíram em torno do tamanho da palavra de instruções,\npermitindo instruções cada vez mais completas, mas ainda\nclassificadas como RISC;\nOutro ponto de destaque são as milhares de aplicações\nprofissionais em automação e sistemas embarcados.\n\n<!-- Slide 113 -->\nCPs PIC - Exemplos\nA tabela mostra modelos “populares”. É importante perceber o\nbaixo consumo da linha de produtos. A isto alinha-se a robustez, o\nque ajuda a explicar o sucesso dos microcontroladores PIC.\n\n<!-- Slide 114 -->\nA família ESP\nFabricada pela Espressif, uma empresa\nde Xangai fundada em 2008, a família\nESP é uma das mais conhecidas no\nmercado de Sistemas Embarcados;\nO primeiro produto, o ESP8266, surgiu\nem 2014, trazendo pela primeira vez a\nconectividade Wi-Fi para\nmicrocontroladores. Em setembro de\n2016 foi lançada a linha ESP32;\nA família conta com diversos tipos e\nmodelos de produtos, e têm a liderança\nem projetos IoT.\nESP8266 Node MCU e ESP32 WROOM,\nduas das placas de protótipo mais\npopulares da Espressif\n\n<!-- Slide 115 -->\nEvolução da família ESP\n\n<!-- Slide 116 -->\nFormatos do ESP32\nSoC\nMódulo\nPlaca de Protótipo\nSoC: para grandes fabricantes;\nMódulo: fabricantes menores e hobbyistas avançados;\nPlaca de Protótipo: desenvolvedores e hobbyistas.\n\n<!-- Slide 117 -->\nSéries do ESP32 / SoCs\nA série original e a “S” voltam-se para aplicações gerais IoT. A\nsérie “C” tem foco em eficiência e segurança, a “H” para redes\nMesh e a P para processamento avançado;\nDentro de cada série estão disponíveis diversos modelos.\n\n<!-- Slide 118 -->\nMódulos ESP32\nWROOM\nWROVER\nMINI\nWROOM (Wireless Room): modelo básico;\nWROVER (Wireless Room with RAM Overlay): evolução do WROOM;\nMINI: modelo compacto para projetos com espaço reduzido.\n\n<!-- Slide 119 -->\nIdentificação de ESP32\n\n<!-- Slide 120 -->\nIdentificação de ESP32\n\n<!-- Slide 121 -->\nA família Raspberry\nA Raspberry Pi Foundation, fundada\nem 2008, teve como primeiro produto\no Raspberry Pi 1 Model B, um SBC\nlançado em fevereiro de 2012. Nesta\nlinha, o produto mais recente é\nRaspberry Pi 5, lançado em 2023, com\n2,4 GHz de clock, e até 8GBytes de\nRAM.\nEm 2021, foi lançada a placa de\nprotótipo Raspberry Pi Pico. Nesta\nlinha, o produto mais recente é o\nRaspberry Pi Pico 2W com 520KB de\nRAM, e processador RP2350.\nRaspberry Pi 5\nRaspberry Pi Pico 2W\n\n<!-- Slide 122 -->\nRaspberry Pi: Placas CP\n\n<!-- Slide 123 -->\nRaspberry Pi: SBCs\n\n<!-- Slide 124 -->\nUno Q: A Arduíno entra no jogo\nQualcomm® comprou a fundação\nArduíno® em 7/10/2025\nInicialmente fabricava\nchipsets CDMA para celulares;\nProprietária da NXP Semicon-\ndutores e da marca Snapdragon;\nO Arduino Q foi o primeiro\nfruto desta fusão\nProduto híbrido (microprocessador e\nmicrocontrolador na mesma placa);\nPlaca de protótipo + SBC;\nFisicamente compatível com a linha Arduíno Uno, em tamanho e furos de ixação;\nUSB-C multifunção (comunicação, alimentação, teclado, mouse, storage e entrada/saída áudio e vídeo).\n\n<!-- Slide 125 -->\nUno Q: A Arduíno entra no jogo\nMicroprocessador QRB2210\nARM Cortex-A53 c/ quatro núcleos\nClock de 2GHz\nGPU Adreno 702\n2 processadores de imagem\nDSP integrado\nDisponível com 2GB RAM (4GB em breve)\nRoda Debian Linux\nMicrocontrolador STM32U585\nARM Cortex-M33\nClock de 130MHz\n2MB memória Flash\n768KB SRAM\nSuporta RTOS Zephyr\n\n<!-- Slide 126 -->\nUno Q: A Arduíno entra no jogo\nComunicação\nWi-Fi 5 (802.11ac - 2,4 e 5GHz);\nBluetooth 5.1 e BLE;\nAlimentação de 3,3V\nDiferente da linha, mas tolera os 5V originais, inclusive shields originais;\nPinos A0 e A1 não toleram 5V, mas podem funcionar como saídas DAC;\nPinos A2 e A3 agora incorporam também um ampliicador operacional;\nEliminada a entrada para fonte externa, mas Vin suporta até 24V.\nE muito mais …\n3 barramentos I2C (inclusive o original nos pinos A4 e A5);\nJumpers de coniguração, debug serial e saída de 1,8V;\nQuatro LEDs indicativos, além de matriz de LED na placa;\n2 conectores JMISK de alta performance no lado do microcontrolador (2 câmeras, display etc).\nPor enquanto, é bom ter paciência …\n"
    },
    {
      "id": "p1_07_eletrica_basica",
      "arquivo": "p1_07_eletrica_basica.md",
      "prova": "p1",
      "topico": "p1_eletron",
      "topicoNome": "Eletrônica: R, C, Diodos, Transistores",
      "titulo": "P1 07 Eletrica Basica",
      "conteudo": "# Eletrônica Básica: Lei de Ohm, Resistores\n\n---\n\n<!-- Slide 127 -->\nEletrônica em SE\nDesaios de um projeto de HW\nNão é um conhecimento nativo de um engenheiro de software;\nA rotina de desenvolvimento em HW é bem diferente;\nTestes podem ser destrutivos - a veriicação prévia precisa ser exaustiva.\nIntegração HW & SW\nHW instável provocará problemas, independente da qualidade do SW;\nProblemas no SW podem daniicar o HW.\nDiversidade de componentes\nAo contrário do desenvolvimento de SW, não há um conjunto ixo de\ninstruções e comandos;\nSurgem novos sensores, atuadores e protocolos quase diariamente.\n\n<!-- Slide 128 -->\nConceitos Básicos\nGrandezas:\nTensão, Corrente, Campos\nelétrico e magnético;\nComponentes:\nResistores, Capacitores e\nIndutores;\nDiodos e transistores;\nAmplificadores\nOperacionais;\nPortas Lógicas;\n\n<!-- Slide 129 -->\nTensão elétrica\nÉ a diferença de potencial entre dois\npontos, medida em Volts\nTipicamente um dos pontos é o “terra\" (GND),\ncom a tensão de zero volts;\nQuando contínua, pode ser positiva ou\nnegativa; Também pode ser alternada;\nProvoca a circulação de corrente, que se move\ndo ponto de tensão mais alto para o de tensão\nmais baixa.\nPode ser causada por 3 efeitos\nCampo elétrico estático;\nCampo eletromagnético variável;\nCorrente sob ação de um campo magnético.\nAnalogia mecânica: energia potencial.\n\n<!-- Slide 130 -->\nCorrente elétrica\nFluxo ordenado de cargas dentro de\num condutor, medido em Ampères\nPara ser condutor, o material tipicamente\ntem elétrons livres em movimento\ndesordenado;\nOcorre quando provocada pela existência de\numa tensão elétrica entre as extremidades\ndo condutor;\nQuando contínua, o sentido do fluxo\ndetermina o seu sinal; pode também ser\nalternada.\nAnalogia mecânica: energia\ncinética;\nResistores se opõem à circulação da\ncorrente elétrica.\n\n<!-- Slide 131 -->\nCampo Elétrico\nÉ um campo de força criado\npela eletricidade estática\nSe inicia na carga positiva e termina\nna carga negativa;\nÉ provocado pela ação de cargas\nelétricas (elétrons, prótons e íons);\nUm campo elétrico variável provoca um campo magnético, e\nvice-versa;\nCapacitores se opõem à alteração de um campo elétrico.\n\n<!-- Slide 132 -->\nCampo Magnético\nÉ um campo de força criado por\nmateriais ferromagnéticos ou pela\ncirculação de corrente elétrica\nFormam círculos concêntricos\nperpendiculares à circulação da corrente;\nA orientação do campo pode ser\nrepresentada pela “regra da mão direita\".\nUm campo elétrico variável provoca\num campo magnético, e vice-versa;\nIndutores se opõem à alteração de\num campo magnético.\n\n<!-- Slide 133 -->\nResistor\nOferece resistência à passagem\nda corrente, e é medido em\nohms (Ω)\nRemove energia do circuito\ntransformando-a em potência térmica,\nque portanto precisa ser dissipada;\nReduz a corrente em circulação;\nProvoca uma queda de tensão entre as\nsuas extremidades.\nEstá relacionado à tensão e a\ncorrente em um circuito com\nbase na Lei de Ohm\nDesenvolvida pelo físico alemão Georg\nSimon Ohm em 1827, baseada no\ntrabalho de Fourier;\n9V\n+\nV\nR\nled\n\n<!-- Slide 134 -->\nResistor\nOferece resistência à passagem\nda corrente, e é medido em\nohms (Ω)\nRemove energia do circuito\ntransformando-a em potência térmica,\nque portanto precisa ser dissipada;\nReduz a corrente em circulação;\nProvoca uma queda de tensão entre as\nsuas extremidades.\nEstá relacionado à tensão e a\ncorrente em um circuito com\nbase na Lei de Ohm\nDesenvolvida pelo físico alemão Georg\nSimon Ohm em 1827, baseada no\ntrabalho de Fourier;\nV\nI\nR\n÷\n×\n÷\n\n<!-- Slide 135 -->\nTipos de Resistores\n\n<!-- Slide 136 -->\nResistores PTH - Potência\nTem relação com o tamanho\nResistores menores dissipam menos\npotência;\nA temperatura (inclusive externa) afeta o\nvalor da resistência !\nEm alguns casos, pode estar\ngravada no corpo;\nProjetos devem contemplar\noperação abaixo do limite.\n1/8 W\n1/4 W\n1/2 W\n1 W\n3 W\n\n<!-- Slide 137 -->\nResistores SMD - Potência\n\n<!-- Slide 138 -->\nResistores - Resistência em \n(código válido para maior parte dos resistores PTH)\n3 faixas (20% tolerância), 4 faixas (comum), 5 faixas (precisão)\n\n<!-- Slide 139 -->\nResistores - Resistência em \n\n<!-- Slide 140 -->\nResistores - Resistência em \nLaranja (3)\nBranco (9)\nLaranja ( x 103)\nPrata (10% tolerância)\n\n<!-- Slide 141 -->\nEm resistores SMD, o valor\nnormalmente vem gravado no\ncorpo\nTipicamente usam um código\nnumérico de 3 dígitos;\nTal como as duas primeiras faixas de\num resistor PTH, os dois primeiros\nnúmeros indicam os dígitos\nsignificativos, o terceiro é o\nmultiplicador;\n\"104\" por exemplo é igual a 100KΩ.\nSe houverem quatro dígitos, vale a\nregra para resistores PTH com cinco\nfaixas. Os três primeiros são dígitos\nsignificativos, e o último é o\nmultiplicador.\nResistores - Resistência em \n\n<!-- Slide 142 -->\nEm resistores SMD, o valor\nnormalmente vem gravado no\ncorpo\nTipicamente usam um código\nnumérico de 3 dígitos;\nTal como as duas primeiras faixas de\num resistor PTH, os dois primeiros\nnúmeros indicam os dígitos\nsignificativos, o terceiro é o\nmultiplicador;\n\"104\" por exemplo é igual a 100KΩ.\nSe houverem quatro dígitos, vale a\nregra para resistores PTH com cinco\nfaixas. Os três primeiros são dígitos\nsignificativos, e o último é o\nmultiplicador.\nResistores - Resistência em \n0,05 - 1W\nTamanho 2512 (6,35 x 3mm)\n\n<!-- Slide 143 -->\nEm resistores SMD, o valor\nnormalmente vem gravado no\ncorpo\nTipicamente usam um código\nnumérico de 3 dígitos;\nTal como as duas primeiras faixas de\num resistor PTH, os dois primeiros\nnúmeros indicam os dígitos\nsignificativos, o terceiro é o\nmultiplicador;\n\"104\" por exemplo é igual a 100KΩ.\nSe houverem quatro dígitos, vale a\nregra para resistores PTH com cinco\nfaixas. Os três primeiros são dígitos\nsignificativos, e o último é o\nmultiplicador.\nResistores - Resistência em \n5,1 M- 1/4W\nTamanho 1206 (3,2 x 1,6mm)\n\n<!-- Slide 144 -->\nResistores em Série\nA resistência total é igual à soma\ndas resistências individuais;\nO arranjo permite:\nDistribuir a potência dissipada;\nSubstituir resistências individuais;\nAumentar a proteção contra descargas\nelétricas.\nR1\nR2\nR3\nRT\n≡\nRT = R1 + R2 + R3\nPular 1\nresistor\npode ser\nfácil\n\n<!-- Slide 145 -->\nResistores em Série\nA resistência total é igual à soma\ndas resistências individuais;\nO arranjo permite:\nDistribuir a potência dissipada;\nSubstituir resistências individuais;\nAumentar a proteção contra descargas\nelétricas.\nR1\nR2\nR3\nRT\n≡\nRT = R1 + R2 + R3\nPular\nvários é\nmais\ndifícil\n\n<!-- Slide 146 -->\nResistores em Série\nA resistência total é igual à soma\ndas resistências individuais;\nO arranjo permite:\nDistribuir a potência dissipada;\nSubstituir resistências individuais;\nAumentar a proteção contra descargas\nelétricas.\nExistem, no entanto, aplicações\nmais \"nobres\", como o divisor de\ntensão.\nR1\nR2\nR3\nRT\n≡\nRT = R1 + R2 + R3\n\n<!-- Slide 147 -->\nResistores em Paralelo\nA resistência total é menor que a\nmenor das resistências individuais;\nO arranjo permite:\nDistribuir a potência dissipada;\nSubstituir resistências individuais.\nR1\nR2\nR3\nRt = 1\nR1 + 1\nR2 + 1\nR3\n\n<!-- Slide 148 -->\nR - Valores Comerciais\nNorma IEC 60063:1963 estabeleceu as “séries E\"\n* (IEC - International Electrotechnical Comission)\nCada década (0,1-1; 1-10 …) está dividida em “n\" espaços\nlogarítmicos, a depender da tolerância:\n20% de tolerância, 5 espaços (5 x 20% = 100%) e 6 valores (série E-6);\n10% de tolerância envolve 12 valores (série E-12). Veja o cálculo:\n12 = 1,21\nCada valor é 21% maior que o anterior, com ajustes de aproximação e escala.\nhttps://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-values/#\n\n<!-- Slide 149 -->\nR - Valores Comerciais\nNorma IEC 60063:1963 estabeleceu as “séries E\"\n* (IEC - International Electrotechnical Comission)\nCada década (0,1-1; 1-10 …) está dividida em “n\" espaços\nlogarítmicos, a depender da tolerância:\n20% de tolerância, 5 espaços (5 x 20% = 100%) e 6 valores (série E-6);\n10% de tolerância envolve 12 valores (série E-12). Veja o cálculo:\n12 = 1,21\nCada valor é 21% maior que o anterior, com ajustes de aproximação e escala.\nhttps://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-values/#\n\n<!-- Slide 150 -->\nR - Valores Comerciais\nhttps://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-values/#\nSérie E-6\n10 15 22\n33 47 68\nSérie E-12 (10%)\n10 12 15 18 22 27\n33 39 47 56 68 82\nSérie E-24 (5% e 1%)\n10 11 12 13 15 16 18 20\n22 24 27 30 33 36 39 43\n47 51 56 62 68 75 82 91\nAs séries valem para outros\ncomponentes:\nCapacitores;\nIndutores;\nDiodos Zener.\nA partir da série E-48 os\ncomponentes têm valores\ncom 3 dígitos;\nOutras séries:\nE-96;\nE-192.\nSérie E-48 (2% e 1%)\n100 105 110 115 121 127 133 140 147 154 162 169\n178 187 196 205 215 226 237 249 261 274 287 301\n316 332 348 365 383 402 422 442 464 487 511 536\n562 590 619 649 681 715 750 787 825 866 909 953\n\n<!-- Slide 151 -->\nR - Acendendo um LED\nResistência de R:\nO cálculo é aplicação direta da lei de\nOhm:\nTensão: 9 - Vled = 9 - 2 = 7 V\nCorrente: 10mA\nR = 7 / 0,01 = 700 \nValor comercial mais próximo é 680\nPotência de R:\ni = 7 / 680 = 0,01A (10mA)\nP = R x i2 = 680 x 0,012 = 0,068 W\nValor comercial é 1/8 W (0,125 W)\n9V\n+\nV\nR\nled\n\n<!-- Slide 152 -->\nR - de 5V para 3,3V\nDivisor de tensão\nCorrente baixa entre o GPIO de saída no\nArduíno e o terra;\n5% da corrente máxima (20mA) = 1mA;\n(R1 + R2) = 5V / 1mA = 5 K\nR2 / (R1 + R2) = 3,3 / 5\nR2 = 0,66 * 5K≦3,3K(valor comercial)\nR1 = 5K- 3,3K≧1,7K\nR1 = 1,8K(valor comercial)\nR1\nR2\nGPIO (out)\nArduíno Uno\nGPIO (in)\nESP01\nVmáx 5V\nVmáx 3,3V\nCorrente na carga\nEntradas GPIO são de alta impedância (entre 100 Ke 1 M);\nR2 em paralelo com 100 K= ( 1 / 3,3K+ 1 / 100K)-1 = 3,2 K;\nVariação de 3% para o menor valor de impedância.\n100 K\n\n<!-- Slide 153 -->\nR - Pull-Up / Pull-Down\nO problema das entradas desconectadas\nÉ importante SEMPRE deinir um valor padrão para\numa entrada desconectada;\nRuídos elétricos podem determinar o valor de uma\nentrada desconectada;\n5% da corrente máxima (20mA) = 1mA;\nR = 5V / 1mA = 4,7 K\nPull-Down: pino funciona como fonte (source);\nPull-Up: pino funciona como dreno (sink)\nR\nArduíno Uno\nGPIO (in)\n5V\nBotão\nde\nPressão\n\n<!-- Slide 154 -->\nR - Pull-Up / Pull-Down\nR\nArduíno Uno\nGPIO (in)\n5V\nBotão\nde\nPressão\nO problema das entradas desconectadas\nÉ importante SEMPRE deinir um valor padrão para\numa entrada desconectada;\nRuídos elétricos podem determinar o valor de uma\nentrada desconectada;\n5% da corrente máxima (20mA) = 1mA;\nR = 5V / 1mA = 4,7 K\nPull-Down: pino funciona como fonte (source);\nPull-Up: pino funciona como dreno (sink)\n"
    },
    {
      "id": "p1_08_capacitores",
      "arquivo": "p1_08_capacitores.md",
      "prova": "p1",
      "topico": "p1_eletron",
      "topicoNome": "Eletrônica: R, C, Diodos, Transistores",
      "titulo": "P1 08 Capacitores",
      "conteudo": "# Capacitores em Sistemas Embarcados\n\n---\n\n<!-- Slide 155 -->\nCapacitor\nAcumula tensão sob a forma de campo\nelétrico interno do componente, e é\nmedido em faradays (F), tipicamente\nsub-múltiplos\nLembra uma bateria com carga e descarga\nmuito rápida;\nDiversas aplicações na eletrônica analógica,\ncom algumas particularmente importantes em\nsistemas embarcados.\n+\n+\nCapacitor\nConvencional\nCapacitor\nPolarizado\n\n<!-- Slide 156 -->\nCapacitor - Operação\nQuando conectado a uma\nfonte de tensão, acumula\ncarga\nNão há circulação de corrente\nentre os terminais, e sim\napenas o acúmulo de carga;\n+\nC\nR\n\n<!-- Slide 157 -->\nCapacitor - Operação\n+\nC\nR\n+++\ni\nQuando conectado a uma\nfonte de tensão, acumula\ncarga\nNão há circulação de corrente\nentre os terminais, e sim\napenas o acúmulo de carga;\n\n<!-- Slide 158 -->\nCapacitor - Operação\n+\nC\nR\n+\n+\n+\n+ +\n+ + +++ +\n+\n+\n+\n+\n+\n+\n+ + + + + + +\n- --\n-\n-- ---\n-\n-- -- ---- -- -\nQuando conectado a uma\nfonte de tensão, acumula\ncarga\nNão há circulação de corrente\nentre os terminais, e sim\napenas o acúmulo de carga;\nA carga ica disponível até que circule corrente de descarga no sentido contrário;\nNormalmente é especiicado pela capacitância e tensão de operação. Algumas\ncaracterísticas especíicas do tipo de capacitor também podem inluenciar a aplicação;\nA capacidade, e principalmente a tensão de operação, determinam o tamanho.\n\n<!-- Slide 159 -->\nCapacitor - Carga e Descarga\nCorrente ininita ?\nNa teoria sim !\nVale para carga e descarga;\nLimitada pelas resistências\ninternas;\nCorrente ininita ?\nRf : resistência da fonte de tensão;\nRc : resistência dos condutores;\nRcs : resistência série do capacitor.\n+V\nC\ni\nRf\nRcs\nRc\n\n<!-- Slide 160 -->\nCapacitor - Carga e Descarga\nC\nR\ni\nA corrente inicial pode ser\ncalculada pela lei de ohm, mas\nela cai rapidamente à medida\nem que o capacitor é carregado.\nit→0 = V\nR\nt\ni\nV/R\n+V\nCorrente ininita ?\nNa teoria sim !\nVale para carga e descarga;\nLimitada pelas resistências\ninternas;\nCorrente ininita ?\nRf : resistência da fonte de tensão;\nRc : resistência dos condutores;\nRcs : resistência série do capacitor.\nR = Rf + Rc + Rcs\n\n<!-- Slide 161 -->\nCapacitor - Carga e Descarga\nC\nR\nTensão sobre o capacitor tem\ncomportamento inverso\nInicialmente zero, tende a crescer\nrapidamente, até alcançar a tensão da\nfonte;\nQuanto maior a corrente, mas rápido\no crescimento.\n+V\nt\nVc\n+V\ni\n}Vc\n\n<!-- Slide 162 -->\nTipos de Capacitor\n1. Eletrolítico\nAlta capacitância, polarizado,\npossui pequena indutância parasita\n2. Poliéster\nAutorenerativo\n3. Cerâmico\nUm dos mais comuns\n4. Tântalo\nSubstituem os eletrolíticos,\npolarizados, + vida útil, - espaço\n5. Mica\nMuito estável, usado em circuitos\nque exigem precisão\n6. SMD\n7. Variáveis\nhttps://www.mundodaeletrica.com.br/tipos-de-capacitores/\n\n<!-- Slide 163 -->\nCapacitores em Série\nA capacitância total é menor que a\nmenor das capacitâncias individuais;\nO arranjo permite:\nDistribuir a tensão acumulada;\nSubstituir capacitâncias individuais;\nEliminar a polaridade (ver C1 e C2).\nC1\nCt = 1\nC1 + 1\nC2 + 1\nC3\nC2\n+\n+\nC3\n≡\nCt\n\n<!-- Slide 164 -->\nCapacitores em Paralelo\nA capacitância total é a soma das\ncapacitâncias individuais;\nO arranjo permite:\nSubstituir capacitares individuais;\nAgregar características de dois tipos diferentes\nde capacitor (na igura, C1 é eletrolítico e C2\ncerâmico).\nC3\nCT = C1 + C2 + C3\nC2\nC1\n+\n\n<!-- Slide 165 -->\nCapacitor - Desacoplamento\nÉ comum encontramos\ninterferências na linha de\nalimentação, derivadas:\ndo próprio circuito;\nde equipamentos ligados na mesma fonte\nde alimentação;\nde interferência eletromagnética.\nVdd\nCircuito Digital\nVcc\n100 nF\nInterferência de alta frequência pode ser mitigada\nCapacitores de 100nF instalados bem próximos à entrada de alimentação;\n(cálculo foge do escopo da disciplina)\nProteção advém da carga e descarga instantânea do capacitor;\nMicrocontroladores e circuitos integrados digitais são particularmente sensíveis a este\nproblema.\n\n<!-- Slide 166 -->\nCapacitor - Estabiliza tensão\nSe houver instabilidade de\nbaixa frequência na tensão\nde alimentação, usamos um\ncapacitor maior\nIsolado, ou em conjunto com\nanterior;\nCapacitores eletrolíticos não são tão\neficientes em altas frequências;\nV\n100 nF\ndd\nCircuito Digital\nVcc\n+\n10 F\nAlém destas aplicações …\nCapacitores são essenciais em diversos circuitos analógicos;\nCompõem filtros dos mais diversos tipos, fontes de alimentação,\nacopladores e desacopladores, sintonizadores, e dezenas de outras\naplicações.\n\n<!-- Slide 167 -->\nCapacitância Parasita\nQuaisquer condutores próximos\nformam um capacitor\nValor afetado pela geometria do componente,\ndo chip, ou mesmo da PCB ou cabos;\nValores típicos bem pequenos (<5pF);\nEstes capacitores operam tal como\nqualquer outro;\nQual os impactos desta capacitância\nAtrasos e falhas - vamos ver?\nCpin\nCpin\nCﬁo\n\n<!-- Slide 168 -->\nRepresentação Binária\nRepresentação interna de valores binários\nFaixas de Valores de 0 e 1\nFaixas grandes suportam erros\nO risco está na \"região indeterminada”, que diicilmente é utilizada\n\n<!-- Slide 169 -->\nC\nR\n+V\nt\nVc\n+V\ni\n}Vc\nRegião Indeterminada\nAtraso na representação digital\nÉ necessário aguardar carga do\ncapacitor parasita;\nA carga ica mais rápida se a corrente\nfor aumentada (maior consumo);\n0 (zero)\n1 (um)\nCapacitância Parasita\n\n<!-- Slide 170 -->\nC\nR\n+V\nt\nVc\n+V\ni\n}Vc\natraso\nCapacitância Parasita\nAtraso na representação digital\nÉ necessário aguardar carga do\ncapacitor parasita;\nA carga ica mais rápida se a corrente\nfor aumentada (maior consumo);\n\n<!-- Slide 171 -->\nC\nR\n+V\nt\nVc\n+V\ni\n}Vc\nReduzindo R, ou seja, aumentando a\ncorrente, a tensão sobre o capacitor\nchega mais rápido a V+.\natraso\nCapacitância Parasita\nAtraso na representação digital\nÉ necessário aguardar carga do\ncapacitor parasita;\nA carga ica mais rápida se a corrente\nfor aumentada (maior consumo);\n\n<!-- Slide 172 -->\nC\nR\n+V\nt\nVc\n+V\ni\n}Vc\nReduzindo R, ou seja, aumentando a\ncorrente, a tensão sobre o capacitor\nchega mais rápido a V+.\natraso\nCapacitância Parasita\nAtraso na representação digital\nÉ necessário aguardar carga do\ncapacitor parasita;\nA carga ica mais rápida se a corrente\nfor aumentada (maior consumo);\n\n<!-- Slide 173 -->\nC\nR\n+V\nt\nVc\n+V\ni\n}Vc\nReduzindo R, ou seja, aumentando a\ncorrente, a tensão sobre o capacitor\nchega mais rápido a V+.\natraso\nCapacitância Parasita\nAtraso na representação digital\nÉ necessário aguardar carga do\ncapacitor parasita;\nA carga ica mais rápida se a corrente\nfor aumentada (maior consumo);\n\n<!-- Slide 174 -->\nt\nVc\n+V\nperíodo\nCapacitância Parasita\nPossível falha na\nrepresentação\nO tempo para carga não pode\nser maior que meio período do\nsinal digital;\nValores precisam estar fora da\nregião indeterminada;\nQuanto maior a performance,\nmenor será o período.\n\n<!-- Slide 175 -->\nRegião Indeterminada\nOk, mas com atraso\nt\nVc\n+V\nperíodo\nCapacitância Parasita\nPossível falha na\nrepresentação\nO tempo para carga não pode\nser maior que meio período do\nsinal digital;\nValores precisam estar fora da\nregião indeterminada;\nQuanto maior a performance,\nmenor será o período.\n\n<!-- Slide 176 -->\nt\nVc\n+V\nperíodo\nCapacitância Parasita\nPossível falha na\nrepresentação\nO tempo para carga não pode\nser maior que meio período do\nsinal digital;\nValores precisam estar fora da\nregião indeterminada;\nQuanto maior a performance,\nmenor será o período.\n\n<!-- Slide 177 -->\nt\nVc\n+V\nperíodo\nCapacitância Parasita\nPossível falha na\nrepresentação\nO tempo para carga não pode\nser maior que meio período do\nsinal digital;\nValores precisam estar fora da\nregião indeterminada;\nQuanto maior a performance,\nmenor será o período.\n\n<!-- Slide 178 -->\nRegião Indeterminada\nFalha !\nt\nVc\n+V\nperíodo\nCapacitância Parasita\nPossível falha na\nrepresentação\nO tempo para carga não pode\nser maior que meio período do\nsinal digital;\nValores precisam estar fora da\nregião indeterminada;\nQuanto maior a performance,\nmenor será o período.\nPara resolver, é necessário acelerar a carga, aumentando a corrente\n(e o consumo).\n"
    },
    {
      "id": "p1_09_semicondutores",
      "arquivo": "p1_09_semicondutores.md",
      "prova": "p1",
      "topico": "p1_eletron",
      "topicoNome": "Eletrônica: R, C, Diodos, Transistores",
      "titulo": "P1 09 Semicondutores",
      "conteudo": "# Semicondutores e Diodos\n\n---\n\n<!-- Slide 179 -->\nSemicondutores\nEm um átomo, os elétrons podem\nocupar determinadas órbitas ou\nníveis de energia\nSão sete: k, l, m, n, o, p e q\nO nível mais externo é chamado de nível de\nvalência;\nPara conduzir uma corrente elétrica, os\nelétrons precisam saltar do nível de valência\npara o nível de condução.\nA existência de níveis ou bandas de energia “proibidas\" entre a condução\ne a valência determinam o tipo de material\nNão existe banda proibida: CONDUTOR\nExiste uma banda proibida de grande dimensão: ISOLANTE\nExiste uma banda proibida de pequena dimensão: SEMICONDUTOR\nIsolante\nCondutor\nSemicondutor\nCondução\nCondução\nCondução\nValência\nValência\nValência\nProibido\nProibido\nhttps://www.feis.unesp.br/Home/departamentos/engenhariaeletrica/capitulo_1_diodos#:~:text=Germânio é outro elemento\ntetravalente,e de outros componentes semicondutores.&text=Falta de elétrons livres no,constituir-se numa vantagem enorme.\n\n<!-- Slide 180 -->\nBandas de Valência e Condução\nNível de\nFermi\nBanda de\nValência\nBanda de\nCondução\n\n<!-- Slide 181 -->\nSemicondutores\nPara nosso estudo, interessa conhecer os semicondutores\nBanda de valência próxima da banda de condução;\nTemperatura, choques mecânicos, luz, radiação e, obviamente, tensão e corrente\nelétrica podem fazer os elétrons migrarem de banda. Com “elétrons livres”, o\nmaterial funciona como um condutor;\nO elemento semicondutor mais comum é o Silício, que possui 4 elétrons na camada\nde valência. É o segundo elemento mais comum na Terra, mas outros materiais\npodem ser utilizados, como o Germânio;\nSemicondutores tipo “N\" e tipo “P\"\nSão produzidos pela dopagem do Silício com “impurezas\";\nTipo “N”: dopagem com átomos pentavalentes como o Fósforo (sobra um elétron\npor átomo), tornando o material propenso a liberar elétrons;\nTipo “P”: dopagem com átomos trivalentes como o Alumínio (falta um elétron por\nátomo), tornando o material propenso a receber elétrons.\n\n<!-- Slide 182 -->\nJunção Semicondutora\nTipo “N\"\nTipo “P”\n0,7 V\nObtida pela junção de dois\nmateriais dopados de forma\ndiferente\nNa junção, ocorre migração dos elétrons\nem excesso do material N para o material\nP, formando a camada de depleção;\nDiferença de potencial (≈0,7V no silício)\nimpede a continuidade de circulação de\ncorrente.\n* No germânio, a tensão é de 0,3V.\n\n<!-- Slide 183 -->\nJunção Semicondutora\nTipo “N\"\nTipo “P”\n+\nE quando a junção é polarizada?\nCom o material N ligado ao positivo,\naumenta a camada de depleção, e não\ncircula corrente;\nInvertendo, desde que a tensão seja\nmaior que a diferença de potencial da\njunção, haverá circulação de corrente.\n\n<!-- Slide 184 -->\nJunção Semicondutora\n+\nTipo “N\"\nTipo “P”\nR\nV > 0,7V\nE quando a junção é polarizada?\nCom o material N ligado ao positivo,\naumenta a camada de depleção, e não\ncircula corrente;\nInvertendo, desde que a tensão seja\nmaior que a diferença de potencial da\njunção, haverá circulação de corrente.\n\n<!-- Slide 185 -->\nDiodo: usando a junção P-N\nSó permite a circulação de corrente\nem um sentido\nExige tensão mínima limite (≈0,7V);\nCorrente só circula no sentido contrário se\na tensão aplicada ultrapassar a tensão de\nruptura;\nUm tipo especíico de diodo aproveita este\nefeito (chamado de “efeito zener”) para\noutras aplicações.\n9V\n+\nV\nR\nlimite\n9V\n+\nV\nR\nzener\nDiodo Comum\nDiodo Zener\n\n<!-- Slide 186 -->\nDiodo: curva característica\nTensão\naproximadamente\nconstante em\nfunção da corrente\nhttps://www.researchgate.net/ﬁgure/Figura-2-Curva-caracteristica-\ndo-diodo-Fonte-2-Para-boa-parte-dos-diodos-trabalhar_ﬁg2_309644229\n\n<!-- Slide 187 -->\nTipos de Diodo\n1. Retiicador\nFontes de alimentação, suporta altas\ncorrentes;\n2. SMD\n3. Alta potência\nPara correntes elevadas;\n4. Sinal\nUtilizados em circuitos de alta\nfrequência. Frequentemente são de\ngermânio;\n5. Duplo\n2 diodos em contra-posição;\n6. Ponte retiicadora\nArranjo de 4 diodos para fontes de\nalimentação\n7. LED\n8. Display de 7 segmentos\n\n<!-- Slide 188 -->\nDiodo: portas lógicas simples\nPorta AND (E)\nQualquer entrada (E1 a E3) no nível zero\nprovoca o nível zero na saída;\nApenas se todas as entradas estiverem em\nnível um garantimos a saída no nível 1;\nO resistor impede um curto-circuito.\nR\nVcc\nPorta OR (OU)\nQualquer entrada (E1 a E3) no nível um\nprovoca o nível um na saída;\nApenas se todas as entradas estiverem no\nnível zero garantimos a saída no nível zero;\nO resistor impede um curto-circuito.\nSaída\nE1\nE2\nE3\nR\nSaída\nE1\nE2\nE3\n\n<!-- Slide 189 -->\nDiodo: proteção de circuitos\nEm circuitos digitais, são\nutilizados para proteção\nDiodos comuns impedem polarização\ninvertida;\nProteção funciona inclusive para\npulsos reversos de alta tensão (relês).\nR\nSaída Digital\nGPIO (out)\nVcc\n0→1\niB\niC\n\n<!-- Slide 190 -->\nDiodo: proteção de circuitos\nEm circuitos digitais, são\nutilizados para proteção\nDiodos comuns impedem polarização\ninvertida;\nProteção funciona inclusive para\npulsos reversos de alta tensão (relês).\nR\nSaída Digital\nGPIO (out)\nVcc\n1→0\n\n<!-- Slide 191 -->\nDiodo: proteção de circuitos\nEm circuitos digitais, são\nutilizados para proteção\nDiodos comuns impedem polarização\ninvertida;\nProteção funciona inclusive para\npulsos reversos de alta tensão (relês).\nR\nSaída Digital\nGPIO (out)\nVcc\n\n<!-- Slide 192 -->\nDiodo: proteção de circuitos\nEm circuitos digitais, são\nutilizados para proteção\nDiodos comuns impedem polarização\ninvertida;\nProteção funciona inclusive para\npulsos reversos de alta tensão (relês).\nR\nSaída Digital\nGPIO (out)\nVcc\nDiodos zener protegem entradas\ndigitais sensíveis\nProteção contra inversão de polaridade;\nProteção contra sobretensões;\nFusível em série contra sobrecorrentes.\nGPIO (in)\nEnt. Digital\nVmáx 3,3V\nFusível\n\n<!-- Slide 193 -->\nDiodo: proteção de circuitos\nEm circuitos digitais, são\nutilizados para proteção\nDiodos comuns impedem polarização\ninvertida;\nProteção funciona inclusive para\npulsos reversos de alta tensão (relês).\nR\nSaída Digital\nGPIO (out)\nVcc\nDiodos zener protegem entradas\ndigitais sensíveis\nProteção contra inversão de polaridade;\nProteção contra sobretensões;\nFusível em série contra sobrecorrentes.\nGPIO (in)\nEnt. Digital\nVmáx 3,3V\n- V\nFusível\n\n<!-- Slide 194 -->\nDiodo: proteção de circuitos\nEm circuitos digitais, são\nutilizados para proteção\nDiodos comuns impedem polarização\ninvertida;\nProteção funciona inclusive para\npulsos reversos de alta tensão (relês).\nR\nSaída Digital\nGPIO (out)\nVcc\nDiodos zener protegem entradas\ndigitais sensíveis\nProteção contra inversão de polaridade;\nProteção contra sobretensões;\nFusível em série contra sobrecorrentes.\nGPIO (in)\nEnt. Digital\nVmáx 3,3V\nFusível\n> 3,3 V\n"
    },
    {
      "id": "p1_10_transistores",
      "arquivo": "p1_10_transistores.md",
      "prova": "p1",
      "topico": "p1_eletron",
      "topicoNome": "Eletrônica: R, C, Diodos, Transistores",
      "titulo": "P1 10 Transistores",
      "conteudo": "# Transistores BJT como Chave\n\n---\n\n<!-- Slide 195 -->\nO Transistor\nSão dois os principais tipos:\nBipolar de Junção: controlado pela\ncorrente que circula pela base;\nEfeito de Campo: controlado pela tensão\npresente no gate.\nBipolar NPN\nJ-FET Canal N\nibase\n\n<!-- Slide 196 -->\nO Transistor\nSão dois os principais tipos:\nBipolar de Junção: controlado pela\ncorrente que circula pela base;\nEfeito de Campo: controlado pela tensão\npresente no gate.\nTransistores Bipolares\nPodem ser do tipo NPN ou PNP;\nAplicações Típicas\nChaveadores;\nAmpliicadores.\nBipolar NPN\nJ-FET Canal N\nibase\n\n<!-- Slide 197 -->\nTransistor: duas junções\nN\nP\nN (+dopado)\nEmissor\nColetor\nBase\nSimilar ao diodo, mas…\nTemos duas camadas de depleção;\nO emissor tem uma dopagem maior.\nCom isso, a camada de depleção entre\nbase e emissor libera elétrons em\nexcesso;\n\n<!-- Slide 198 -->\nTransistor: duas junções\nN\nP\nN (+dopado)\nEmissor\nColetor\n+\nRb\nV > 0,7V\nSe izermos circular uma\ncorrente entre a base e o\nemissor:\nA camada de depleção correspondente\ndesaparecerá, e ainda icarão elétrons\nlivres devido à diferença na dopagem;\nSimilar ao diodo, mas…\nTemos duas camadas de depleção;\nO emissor tem uma dopagem maior.\nCom isso, a camada de depleção entre\nbase e emissor libera elétrons em\nexcesso;\nBase\n\n<!-- Slide 199 -->\nEmissor\nColetor\n+\nRb\nBase\nVb\n+\nRL (carga)\nVc > Vb\nN\nP\nN (+dopado)\nSimilar ao diodo, mas…\nTemos duas camadas de depleção;\nO emissor tem uma dopagem maior.\nCom isso, a camada de depleção entre\nbase e emissor libera elétrons em\nexcesso;\nUma corrente entre coletor e\nemissor será controlada pela\ncorrente de base.\nSe izermos circular uma\ncorrente entre a base e o\nemissor:\nA camada de depleção correspondente\ndesaparecerá, e ainda icarão elétrones\nlivres devido à diferença na dopagem;\nTransistor: duas junções\n\n<!-- Slide 200 -->\nTransistor\nEspeciicações estão associadas ao\ncódigo do componente\nCódigo normalmente vem impresso no corpo\ndo transistor, além de número do lote e\noutras especiicações;\nNa igura ao lado, temos o BC548, transístor\nNPN popular de baixa potência.\nNa folha de dados (datasheet),\nencontramos, entre outras coisas, a\n\"pinagem\" do componente.\nC\nB\nE\n\n<!-- Slide 201 -->\nPolarizando um Transistor\n“Polarizar” um transístor é projetar as correntes\nque devem passar pelos seus terminais\nic = x ib (é o ganho do transístor)\nie = ic + ib\nVbe ≈0,7 V (queda na junção)\nNo PNP, o sentido de circulação da corrente se inverte.\nA depender dos valores, o transistor pode icar em\n3 diferentes “zonas”:\nCorte, Ativa (ampliicação) e Saturação;\nPara operar como chave, nos interessa as zonas de\ncorte e saturação;\nValor prático para ib é 10% de ic para operar na zona\nde saturação independente de .\n9V\n+\nRc\nRb\nib\nic\nie\n"
    },
    {
      "id": "p1_11_memoria",
      "arquivo": "p1_11_memoria.md",
      "prova": "p1",
      "topico": "p1_memoria",
      "topicoNome": "Memória ATMega328P",
      "titulo": "P1 11 Memoria",
      "conteudo": "# Eletrônica nos CUs: Barramentos e Dispositivos\n\n---\n\n<!-- Slide 202 -->\nEletrônica nos CUs\nEm ambientes embarcados, a necessidade de conexão com\nambientes externos determina aplicação de conceitos de\neletrônica;\nAlém de microcontroladores, é típico encontrar diversos\ncomponentes externos fundamentais.\n\n<!-- Slide 203 -->\nOs componentes\ntrocam informações;\nNa arquitetura de Von\nNeumann são 3 os\nbarramentos:\nEndereços\nDados\nControle\nAs setas indicam o\nluxo de informações pelos barramentos:\nApenas a CPU escreve no barramento de endereços, mas lê e escreve no barramento de dados;\nA Memória pode ser escrita ou lida (barramento de dados);\nO mesmo acontece com os periféricos de Entrada/Saída;\nTodos escrevem e lêem no barramento de controle, a depender do sinal.\nBarramentos\n\n<!-- Slide 204 -->\nBarramentos\nFan-out no barramento de endereços:\nSupondo 16 GBytes de memória, e palavra de 64 bits, temos:\nbilhões de palavras\nCada uma das palavras precisa ler o barramento de endereços para\nidentiicar o destinatário.\nMesmo para correntes de entrada baixas (Ex.10uA), teríamos um\nconsumo de 2 x 109 x 10-6= 2000A ?!?\nO problema exige soluções especíicas !\n16x1024x1024x1024x8\n= 1024x1024x1024x2 ≈2\nBarramento de Endereços\n\n<!-- Slide 205 -->\nBarramentos\nTri-state no barramento de dados:\nComo duas saídas diferentes de memória podem compartilhar o mesmo\nbarramento em uma leitura da CPU? (curto-circuito ?!?)\nO terceiro estado (desconectado) é essencial;\nApenas dois dispositivos icam “ativos”: UM emissor e um receptor.\nBarramento de Dados\n\n<!-- Slide 206 -->\nBarramentos\nAlguns sinais tipicamente presentes no barramento de\nControle:\nBREQ (Bus Request): requisição de barramentos por um periférico que\npassará a controlar o ambiente. Ex: DMA (Direct Memory Access)\nCLK (Clock): sinal de clock;\nINTR (Interrupt Request): solicitação de interrupção externa;\nR/W (Read/Write): identiica o tipo de operação que será feita na\nmemória ou periférico. Em algumas arquiteturas, há pinos separados;\nRDY (Ready): sinaliza a conclusão de alguns procedimentos;\nRST (Reset): reinicialização dos componentes.\nÉ comum termos sinais ativos em nível zero, o que é\nrepresentado pela barra acima do sinal correspondente.\nBarramento de Sinais de Controle\n\n<!-- Slide 207 -->\nBarramentos\nVantagens\nA ampliação do número de dispositivos e usuários é trivial;\nBaixo custo.\nDesvantagens\nCompartilhamento pode provocar retenção de tráfego, com\nqueda de desempenho, e possível jitter associado.\n\n<!-- Slide 208 -->\nDispositivos Adicionais\nCircuitos/chips especíicos podem ser incluídos em um projeto\nBuffers\nPermite a interconexão de circuitos com performances diferentes;\nPodem ser unidirecionais ou bidirecionais.\nLatches\nDrivers\nClock externo\nMemórias\nPeriféricos\n\n<!-- Slide 209 -->\nDispositivos Adicionais\nCircuitos/chips especíicos podem ser incluídos em um projeto\nBuffers\nLatches\nAgrega a capacidade de “memorizar\" temporariamente o valor de saída;\nSão apenas unidirecionais.\nDrivers\nClock externo\nMemórias\nPeriféricos\n\n<!-- Slide 210 -->\nDispositivos Adicionais\nCircuitos/chips especíicos podem ser incluídos em um projeto\nBuffers\nLatches\nDrivers\nCompatibiliza saídas digitais de baixa potência com cargas elevadas;\nEm algumas situações, agregam circuitos analógicos especializados para controle de cargas\nespecíicas, como motores brushless, de passo, sistemas trifásicos etc.\nClock externo\nMemórias\nPeriféricos\n\n<!-- Slide 211 -->\nDispositivos Adicionais\nCircuitos/chips especíicos podem ser incluídos em um projeto\nBuffers\nLatches\nDrivers\nClock externo\nÉ muito comum a existência de circuitos internos de clock nos microcontroladores, mas a\ndemanda por maior exatidão e precisão pode exigir circuitos externos de maior qualidade.\nMemórias\nPeriféricos\n\n<!-- Slide 212 -->\nDispositivos Adicionais\nCircuitos/chips especíicos podem ser incluídos em um projeto\nBuffers\nLatches\nDrivers\nClock externo\nMemórias externas:\nEsta é uma demanda essencial nos microprocessadores;\nRAM externa não é suportada por microcontroladores, e é complexa até em SBCs como o\nRaspberry Pi. Já EEPROMs são acessíveis por interfaces externas.\nPeriféricos\n\n<!-- Slide 213 -->\nDispositivos Adicionais\nCircuitos/chips especíicos podem ser incluídos em um projeto\nBuffers\nLatches\nDrivers\nClock externo\nMemórias\nPeriféricos:\nAté mesmo em placas de protótipo às vezes são oferecidos RPCs, interfaces de rede,\nsensores de temperatura, transmissores de rádio, displays etc.\n"
    },
    {
      "id": "p2_08_registradores_avancado",
      "arquivo": "p2_08_registradores_avancado.md",
      "prova": "p1",
      "topico": "p1_memoria",
      "topicoNome": "Memória ATMega328P",
      "titulo": "P2 08 Registradores Avancado",
      "conteudo": "# Memória ATMega328P e Registradores DDR/PORT/PIN\n\n---\n\n<!-- Slide 51 -->\nMemória no ATMega328P\nO ATMega328P não segue a arquitetura\npadrão Von Neumann\nA Memória que armazena o programa é diferente\nda memória que contém as variáveis;\nSão 3 tipos de memória\ndiferentes;\nO ATMega328P possui 3 tipos diferentes de\nmemória (Flash, SRAM e EEPROM).\n\"Arquitetura Harvard\"\nGanho de performance por permitir acesso\nsimultâneo às instruções e aos dados;\nTamanho que contém uma instrução (16 bits)\npode ser diferente da palavra de dados (8 bits);\nProcessadores modernos misturam Von\nNeumann com Harvard, através do uso do cache.\n\n<!-- Slide 52 -->\nMemória no ATMega328P\n32 KB (palavras de 16\nbits)\nBootloader\nSketch do\nUsuário\nProgramas (Flash)\n0x0000h\n0x3FFFh\n0x0000h\n0x08FFh\n2304 B (Registr. + 2 KB,\npalavras de 8 bits)\n32 Registradores\n64 Registr. E/S\n160 Registr. E/S Ext.\n0x0020h\n0x0060h\n0x0100h\nVariáveis\nDados (SRAM)\n1 KB (palavras de 8\nbits)\nEEPROM\n0x0000h\n0x03FFh\nInformações\nnão voláteis\n\n<!-- Slide 53 -->\nATMega328P em blocos\nOs registradores controlam toda a\noperação do ATMega328P\nMuitos são acessados indiretamente\nquando usamos o conjunto de\ninstruções padrão do Arduíno;\nAlguns recursos exigem acesso\ndireto\nInterrupções de Relógio;\nAlteração de frequência PWM;\nManipulação “criativa\" de portas.\nAcesso via registradores\nCódigos menores, e mais rápidos;\nManipulação e consulta binária.\n\n<!-- Slide 54 -->\nAcesso Binário\nBits dos registradores agregam funções na mesma palavra\nAlterações e consultas bit-a-bit;\nOperações lógicas binárias: E, OU, NÃO, deslocamento.\nRegistradores de 8 ou 16 bits\nRegistradores de 16 bits tipicamente são tratados byte a byte.\nAtivando bits (set bits)\nDiretamente pela carga da palavra;\nCarga de bit com operação OU (OR).\nDesativando bits (reset bits)\nDesativação de bit com operação E (AND).\n\n<!-- Slide 55 -->\nAcesso Binário - exemplo\nProjeto básico com\nArduíno Uno\nLer botão;\nSe apertado, acende LED; caso\ncontrário, apaga.\nDesenvolvimento do teste\nTeste inicial com código em C\npadrão do Arduíno;\nMigração de parte do código,\ndesta vez manipulando\ndiretamente os registradores.\n\n<!-- Slide 56 -->\nAcesso Binário - exemplo\nComponentes\nalimentados pelo\nArduíno Uno\nLED (digital 5);\nBotão de Leitura (digital 2);\nPull-Up interno.\n330\n5V\nBotão\nde\nPressão\n5V\n\n<!-- Slide 57 -->\nProjeto Básico\nSketch deine entrada e saída\nPino 2 utilizado para leitura do botão,\ncom uso de PullUp interno;\nPino 5 utilizado para ativar o LED.\nFunção básica Arduíno\npinMode();\nOpera indiretamente com registradores.\n\n<!-- Slide 58 -->\n\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0004\u0005\n  \n\u0001\u0002\u0003\u0004 \u0006\u0007\u0004 \n  \n\u0001\u0002\u0003\u0004 \u0006\u0007\u0004 \n  \n\u0001\u0002\u0003\u0004 \u0006\u0007\u0004 \n \u0005\n\u0001\u0002\u0003\u0004\u000e\u0006\u0007\u0004\u000e\n  \n\u0001\u0002\u0003\u0004\u000f\u0006\u0007\u0004\u000f\u0006\n  \n\u0001\u0010\u0004\u0011\u0006\u0007\u0012\u0005\n\u000e\u0013\n\u0001\u0014\u0015\u0010\u0016\u0006\u0007\u0012 \n\u000e \n\u0001\u0014\u0016\u0010\u0015\u0006\u0007\u0012 \n\u000e \n\u0001\u0010\u0010\u0006\u0007\u0012 \n\u000e \n\u0001\u0016\u0004\u000e\u0006\u0007\u0012\u000e\n\u000e\u0005\n\u0001\u0015\u0004\u0007\u0006\u0007\u0012\u000f\n\u000e \n\u0001\u0002\u0015\u0017\u000e\u0006\u0007\u0003 \n\u000e \n\u0001\u0002\u0015\u0017\u000f\u0006\u0007\u0003 \n\u000e \n\u0001\u0018\u000e\u0006\u0007\u0003\u0005\n\u000e\u000e\n\u0001\u0018\u000f\u0006\u0007\u0003 \n \n\u0001\u0015\u0017\u0018\u000e\u0006\u0007\u0003 \n\u0005\n\u0001\u0015\u0017\u0018\u000f\u0006\u0007\u0003 \n \n\u0001\u0018\u0019\u0003\u0006\u0007\u0003\u000e\n \n\u0001\u001a\u0019\u0003\u0006\u0007\u0003\u000f\n \n\u001b\u0017\u0003\n \n\n\u0004\u0004\n \n\u0002\n\u0004\u0004\n \u000f\n\u0002\u001a\n\n \u000e\n\u0019\u0018\u0002\u001f\u000e\n\u0013\n\u0019\u0018\u0002\u001f \n\u000e\u000f\n\u001a\n\u0010\n\u0018\n\u000e\n\u0002\u001b\u0017\u0003\n  \n\u000e\n \n \n \n\u0005\n \n\u000e\n \n \n \n\u0005\n \n \n \n\u000e\n \n \n \n\u0005\n \n \n \n\u0013\n\u000e\u000f\n\u000e\n \n \n \n\u0005\n \n\u000e\n\u000e\n \n \n \n \n\u000e\n \n \n \n\u0007 \u000e\n\u0007 \u000e\n\u0007  \n\u0007  \n\u000e\n\u0015\u0017\n \n\u0016!\u0018\n \n \n\u0001\u0002\u0015\u0017\u000f\"\u0015\u0017\u0018\u000e\u0006\u0007\u0003\u000e\n \n\u0001\u0002\u0015\u0017 \"\u0007\u0004\u0015\u0017\u0018\u000e\u000e\u0006\u0007\u0004 \n\u0005\n\u0001\u0004\u0018\u0010\"#$\u0012\"\u0002\u0015\u0017 \"\u0018\u0016\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n\u000e \n\u0001\u0015\u0017\u0018 \"\u0015\u0004\u0007\u000e\"\u0004\u001f\u0011\u000f\u0006\u0007\u0004 \n  \n\u0001\u0015\u0017\u0018\u0005\"\u0002\u0015\u0017 \u0006\u0007\u0003 \n\u000e\u000f\n\u0001\u0016\u0004\u000f\u0012\"\u0015\u0017\u0018\u000f\u0006\u0007\u0003\u000f\n \n\u0001\u0016\u0004\u000e\u0002\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0004 \n  \n\u0001\u0007\u0004\u0015\u0017\u0018\u0005\u0006\u0007\u0012\u0005\n\u000e\u0013\n\u0001\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n \u000f\n\u0001\u0007\u0004\u0015\u0017\u0018 \"\u0016\u0004\u000f\u0002\"\u0016\u0004\u000e\u0004\u0006\u0007\u0012 \n \u000e\n\u0001\u0007\u0004\u0015\u0017\u0018\u0013\"\u0016\u0004\u000e\u0012\u0006\u0007\u0004\u0005\n \u0005\n\u0001\u0007\u0004\u0015\u0017\u0018\u000e\u000f\u0006\u0007\u0004 \n  \n\u0001\u0007\u0003\u000f\"\u0014\u0015\u0010\u0016\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n\u000e \n\u0001\u0007\u0003\u0015\"\u0014\u0016\u0010\u0015\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n\u000e \n\u0001\u001a\u0018\u0010\"\u0002\u0015\u0017\u0005\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n\u000e \n\u0001\u001a\u0019\u0003\u000e\"\u0002\u0015\u0017\u000e\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n \n\u0001\u0010\u0004\u001f\u0011\"\u0007\u0004\u0015\u0017\u0018\u000e\u0006\u0007\u0012\u000e\n\u000e\u0005\n\u0001\u0010\u0010\"\u0007\u0004\u0015\u0017\u0018\u000f\u0006\u0007\u0012\u000f\n\u000e \n\u0001\u0018\u000e\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n\u000e \n\u0001\u0018\u0019\u0003\u000e\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n\u0013\n\u0001\u0019\u0004\u0011\"\u0002\u0015\u0017 \"\u0007\u0004\u0015\u0017\u0018\u000e \u0006\u0007\u0003\u0005\n\u000e\u000e\n\u0002\n\u0004\u0004\n  \n\u0003%\n \u0013\n\u0003&\n \u000f\n\u001b\u0017\u0003\n \n\u0007\u0002\u0003\n  \n\u001a\n\u0010\n\u0018\u0001\u0007\u0004\u000e\"\u0003$\u0006\n  \n!\u0004\u0002\u0007\n  \n!\u001b\u0017\u0003\n  \n!\n\u0004\u0004\n \u000e\n\n\u0004\u0004\n \n\u0019\u0018\u0002\u001f\u000e\n\u000e\n\u0019\u0018\u0002\u001f \u0001\u0007\u0004\u000f\u0006\n \n\u000e\n \n \n \n\u0005\n \n \n\u000e\n \n\u000e\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n\u000e\n \n\u0005\n \n \n \n\u000e\n \n \n \n\u0005\n\u0015\u0017\n\u000e\n\u0016\u0017\"\u0016\n\n \n\u0017\u0004\"\n\u0012\n \n\u0016!\u0018\n\u0005\n\u001b\u0017\u0003\n \n\u000e\n \n \n \n\u0005\n \n \n \n \n\u000e\nEsquemático Arduíno\nUno\nDiagrama esquemático do Arduíno Uno v3\n\n<!-- Slide 59 -->\nRegistradores pinos 2, 5 ?\nPino 5: PD5\nPino 2: PD2\n(ambos na porta D)\n\n<!-- Slide 60 -->\nArduíno: portas B, C e D\nPorta B\nPorta D\nPorta C\n\n<!-- Slide 61 -->\nRegistradores - Porta D\nDatasheet do ATMega328P\nO registrador DDR determina quais são\nos pinos que serão utilizados como\nentrada (valor 0) ou saída (valor 1)\n\n<!-- Slide 62 -->\nRegistradores - Porta D\nDatasheet do ATMega328P\nO registrador PORT determina, no caso de SAÍDA, qual\no valor a ser apresentado; no caso de entrada, habilita\no resistor interno de PullUp (1), ou desabilita (0)\n\n<!-- Slide 63 -->\nRegistradores - Porta D\nDatasheet do ATMega328P\nO registrador PIN, que deve ser\ntratado apenas para leitura,\npossui o status atual de cada pino\n\n<!-- Slide 64 -->\nAcesso Binário - exemplo\nSketch deine pino 5 como saída e\npino 2 como entrada\n1º passo: carregar 1 no bit 5 do\nregistrador DDRD;\n2º passo: carregar 1 no bit 2 do\nregistrador PORTD;\nAtribuindo o valor da palavra\nEm binário:\nDDRD\n= B00100000;\nPORTD = B00000100;\nOu, em decimal:\nDDRD\n= 32;\nPORTD =\n2;\n\n<!-- Slide 65 -->\nAcesso Binário - exemplo\nAtribuindo o valor ao BIT !\nOperação OU com conteúdo anterior:\nDDRD\n|= B00100000;\nPORTD |= B00000100;\nEmbora funcione, este procedimento\nforça a criação de uma constante, e de\numa variável provisória (lento?);\nExiste um procedimento mais comum\npara este tipo de operação, que utiliza o\nregistro de deslocamento.\n\n<!-- Slide 66 -->\nAcesso Binário - exemplo\nAtivando o bit 5 em DDRD:\nCriamos uma palavra com o bit desejado\nativo:\n( 1 << pinoLed )\n\n<!-- Slide 67 -->\nAcesso Binário - exemplo\nAtivando o bit 5 em DDRD:\nCriamos uma palavra com o bit desejado\nativo:\n( 1 << 0 )\n\n<!-- Slide 68 -->\nAcesso Binário - exemplo\nAtivando o bit 5 em DDRD:\nCriamos uma palavra com o bit desejado\nativo:\n(1<<pinoLed)\nFazemos uma operação OU ( | ) com o valor\natual de DDRD:\nDDRD =( 1 << pinoLed ) | DDRD;\n?\n?\n?\n?\n?\n?\n?\n?\nOU\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\nTodos os bits de DDRD são\nmantidos, exceto o bit 5, que\nassume o valor 1.\n\n<!-- Slide 69 -->\nAcesso Binário - exemplo\nDesativando o bit 5 em DDRD:\nCriamos uma palavra com o bit desejado\nativo:\n(1<<pinoLed)\nInvertemos a palavra bit-a-bit ( ~ );\nFazemos uma operação E (& ) com o valor\natual de DDRD:\nDDRD = ~( 1 << pinoLed ) & DDRD;\n?\n?\n?\n?\n?\n?\n?\n?\nE\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\n?\nTodos os bits de DDRD são\nmantidos, exceto o bit 5, que\nassume o valor 0.\n\n<!-- Slide 70 -->\nAcesso Binário - exemplo\nPara ativar o bit 2 de PORTD em\nDDRD, o processo é similar\nCriamos uma palavra com o bit desejado\nativo:\n(1<<pinoBotao)\nFazemos uma operação OU ( | ) com o\nvalor atual de PORTD:\nPORTD =( 1 << pinoBotao ) |\nPORTD;\n\n<!-- Slide 71 -->\nAcesso Binário - exemplo\nPara leitura do Botão, utilizamos\no registro PIND\nCriamos uma palavra colocando 1 no bit\na ser lido:\n( 1 << pinoBotao )\nFazemos uma operação E ( & ) com o\nvalor atual de PIND:\n( 1 << pinoBotao ) & PIND;\nRevertemos o deslocamento para colocar\no bit testado na posição zero:\nbotao = ( ( 1 << pinoBotao )\n& PIND ) >> 2;\nO valor será 1 (verdadeiro) ou 0 (falso), a\ndepender do valor lido na posição\ndesejada do PIND.\n\n<!-- Slide 72 -->\nAcesso Binário - exemplo\nPara acender ou apagar o LED,\nos processos são bem similares\nCriamos uma palavra com o bit desejado\nativo:\n( 1 << pinoLed )\nFazemos uma operação OU ( | ) com o\nvalor atual de PORTD:\nif( botão == LOW ) {\nPORTD = ~( 1 << pinoLed )\n& PORTD;\n} else {\nPORTD =( 1 << pinoLed ) |\nPORTD;\n}\n"
    },
    {
      "id": "p1_12_registradores_gpio",
      "arquivo": "p1_12_registradores_gpio.md",
      "prova": "p1",
      "topico": "p1_registr",
      "topicoNome": "Registradores e Operações Binárias",
      "titulo": "P1 12 Registradores Gpio",
      "conteudo": "# GPIOs, Dispositivos de E/S e Medição Analógica\n\n---\n\n<!-- Slide 214 -->\nDispositivos de\nEntrada e Saída\n\n<!-- Slide 215 -->\nInterface na Prática\nA tensão elétrica dos sinais trocados com o\nmundo externo codiicam a informação\ntransferida\nPortas digitais ESCREVEM E LEEM sinais\ncodiicados digitalmente\nTensão alta (HIGH) = 1;\nTensão baixa (LOW) = 0;\nPortas analógicas LEEM sinais codiicados\nanalogicamente\nO valor da tensão indica o valor analógico;\nTeoricamente, existem “ininitos\" valores (na\nprática não. Por quê? )\nSinais Elétricos\n(valores de tensão digitais)\nSinais Elétricos\n(valores de tensão analógicos)\n\n<!-- Slide 216 -->\nDispositivos de Entrada\nChaves e Botões;\nTeclados (ex. teclado de membrana);\nSensores digitais (chuva, presença e movimento, chave\nmagnética, gases, sensor de digital etc);\nSensores analógicos (potenciômetro, umidade, pressão,\niluminação, temperatura, ultrasom, tensão, corrente, campo\nmagnético etc);\nSensores de pulsos (luxo d’água, contadores etc);\nDispositivos especiais (giroscópio, acelerômetro, RTC).\n\n<!-- Slide 217 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores;\nPull Up ou Pull Down\nEfeito Bouncing\nDebouncing por HW ou SW\n\n<!-- Slide 218 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores\nExistem sob a forma de foto-diodos, foto-transistores etc;\nNo foto-transistor do exemplo, quem excita a base é a luz\ndo LED interno;\nEmbora tipicamente operem como chave, podem atuar\ncomo ampliicadores;\nPromovem isolamento típico de alguns milhares de volts\n(5.300V), com resistência de 1011.\nNa placa do exemplo, notem o espaço de isolamento.\nFiguras: https://en.wikipedia.org/wiki/Opto-isolator; Especiﬁcação: TIL111\n\n<!-- Slide 219 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores;\nPull Up ou Pull Down\nEfeito Bouncing\nDebouncing por HW ou SW\n\n<!-- Slide 220 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores;\nPull Up ou Pull Down\nEfeito Bouncing\nDebouncing por HW ou SW\n\n<!-- Slide 221 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores;\nPull Up ou Pull Down\nEfeito Bouncing\nDebouncing por HW ou SW\n\n<!-- Slide 222 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores;\nPull Up ou Pull Down\nEfeito Bouncing\nDebouncing: HW ou SW\n// Constantes para indicar número dos pinos utilizados\nconst int buttonPin = 2;\nconst int ledPin = 13;\n// Variables will change:\nint ledState = HIGH;\n// status atual do pino de saída (LED)\nint buttonState;\n// status atual do pino de entrada\nint lastButtonState = LOW; // status anterior do pino de entrada\nunsigned long lastDebounceTime = 0; // ultimo momento em que o pino mudou de status\nunsigned long debounceDelay = 50;\n// tempo para o “debounce”\nvoid setup() {\npinMode(buttonPin, INPUT);\npinMode(ledPin, OUTPUT);\ndigitalWrite(ledPin, ledState);\n// Deine status atual da saída\n}\nhttps://docs.arduino.cc/built-in-examples/digital/Debounce/\nDeboucing por Software\n\n<!-- Slide 223 -->\nDispositivos de Entrada\nChaves e Botões\nMétodo básico de entrada;\nChaves momentâneas, ixas e encoders;\nFoto-isoladores;\nPull Up ou Pull Down\nEfeito Bouncing\nDebouncing: HW ou SW\nvoid loop() {\n// Lê o status atual do botão de entrada\nint reading = digitalRead(buttonPin);\n// Se o status do botão mudou, seja por ação do operador, seja por ruído, comece a contar o tempo\nif (reading != lastButtonState) lastDebounceTime = millis();\n// Se decorreu o tempo deinido para o “debounce”\nif ((millis() - lastDebounceTime) > debounceDelay) {\n// Se o status mudou\nif (reading != buttonState) {\nbuttonState = reading;\n// Altere o status do LED apenas se o status for HIGH\nif (buttonState == HIGH) {\nledState = !ledState;\n}\n}\n}\n// Deina o status do LED\ndigitalWrite(ledPin, ledState);\n// Salva a leitura para a próxima execução do loop\nlastButtonState = reading;\n}\n\n<!-- Slide 224 -->\nTeclados (ex. teclado de membrana)\nCruzamento de Linhas X Colunas\nVarredura via SW\nAnalisar combinações?\nDispositivos de Entrada\n\n<!-- Slide 225 -->\nDispositivos de Entrada\nSensores digitais (chuva, presença e movimento, chave\nmagnética, gases, leitura de digitais etc)\nFuncionam como chaves (sem bouncing);\nAlguns permitem ajuste da sensibilidade para ativação;\n\n<!-- Slide 226 -->\nDispositivos de Saída\nLEDs\nSaída analógica típica para testes;\nAdmite modulação via PWM;\nVermelho, Verde, Amarelo, Azul, Branco e RGB (3 saídas).\n\n<!-- Slide 227 -->\nDispositivos de Saída\nDisplays (7 segm., matriciais, LCD, TFT, OLED)\nInterface convencional ou de rede (i2C, por exemplo);\nCátodo ou Anodo comum;\n\n<!-- Slide 228 -->\nDispositivos Saída (Relês)\nNem todo dispositivo pode ser acionado\npor um transístor\nCargas AC ou de alta potência;\nNecessidade de isolamento;\nRelês são dispositivos mecânicos\n⬆Promovem grande isolamento;\n⬆Suportam cargas DC ou AC;\n⬇São lentos;\n⬇Consomem potência signiicativa;\n⬇Vida útil é baixa\nSuportam até 300.000 acionamentos (típ)\n“Relês\" de estado sólido\n⬆São rápidos;\n⬆Consomem pouca potência;\n⬆Vida útil elevada;\nSuportam até 10.000.000 de acionamentos (típ)\nTem isolamento inferior aos relês\nSuportam cargas AC\n[Moraes, Cícero Couto] Engenharia de Automação Industrial 2ªEd. p.27\n\n<!-- Slide 229 -->\nDispositivos de Saída\nServos, motores convencionais e de passo\n\n<!-- Slide 230 -->\nEntradas Analógicas\nSensores analógicos (iluminação, potenciômetro, umidade,\npeso, pressão, temperatura, ultrasom, corrente, tensão,\ncampo magnético etc)\n\n<!-- Slide 231 -->\nEntrada: Divisor de Tensão\nCom a circulação de corrente\npelo potenciômetro, a tensão no\ncursor varia de acordo com a\nposição do mesmo;\nA posição do cursor determina,\nentão, a tensão obtida;\nO potenciômetro funciona como\num sensor de posição angular, e\nassim é utilizado em diversas\nsituações.\n\n<!-- Slide 232 -->\nSensores “medem” tensão elétrica\nTensão elétrica é injetada em uma porta\nanalógica do microcontrolador\nTensão elétrica precisa estar dentro dos\nlimites do microcontrolador;\nNo Arduíno, pode estar entre 0 e 5V.\nNa porta analógica, a tensão é\nconvertida para um número inteiro pelo\nconversor analógico/digital interno;\nNúmero é determinado pela quantidade\nde bits do conversor analógico digital\nNo Arduíno Uno R3, o conversor é de 10bits\n210 = 1024\nt\nx\n0V\n5V\n1023\n\n<!-- Slide 233 -->\nTensão é convertida para um número\nMedições são proporcionais graças à\nlinearidade* do sensor;\nConversão é básica, por regra de 3\nt - 0\nx - 0\n5 - 0\n1023 - 0\nt\nx\n1023\n5 . x\nt = 1023\n* Veremos depois\nt\nx\n0V\n5V\n1023\n=\n=\n\n<!-- Slide 234 -->\nMedição analógica básica\nMedição de Tensões Disponíveis no\npróprio Arduíno\nSem componentes externos;\nAvaliar as medições com base no valor\nnumérico medido pelo ADC;\nAlimentação\nvia USB\nEntrada a ser medida\n\n<!-- Slide 235 -->\nMedição analógica básica\nOs resultados serão vistos no Monitor Serial\nUtilizaremos a entrada A0 do Arduíno\nSalvamos o valor lido anteriormente\nLeitura analógica da entrada\nMostra apenas se houver alteração\nNúmero de amostragens < 10 por segundo\n\n<!-- Slide 236 -->\nMedição analógica básica\nCircuito básico, com apenas um Arduíno e\num cabo\nSimplicidade, sem equip. externos.\nEscolha da tensão de entrada:\n5V (Vcc)\n3,3V (saída de alimentação)\n0V (GND)\n"
    },
    {
      "id": "p2_01_medicao_analogica",
      "arquivo": "p2_01_medicao_analogica.md",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "topicoNome": "Precisão, Exatidão e Linearidade",
      "titulo": "P2 01 Medicao Analogica",
      "conteudo": "# Medição Analógica Básica\n\n---\n\n<!-- Slide 1 -->\nMedição analógica básica\nCircuito básico, com apenas um Arduíno e\num cabo\nSimplicidade, sem equip. externos.\nEscolha da tensão de entrada:\n5V (Vcc)\n3,3V (saída de alimentação)\n0V (GND)\n\n<!-- Slide 2 -->\nMedição analógica básica\nO que percebemos?\nEntradas desconectadas são\n“dominadas” pelo ruído;\nHá alguma instabilidade quando\nmedimos a tensão de 3,3V.\nEspeciicação básica\nConversor A/D de 10 bits\n(0~1023).\nCuidado com a conexão !\nInterligar portas erradas pode\ndaniicar o Arduíno, e até a porta\nUSB do seu computador !\n\n<!-- Slide 3 -->\nInstabilidade\nA instabilidade é um sintoma da falta de precisão;\nMas o que é “precisão\" ?\nA precisão, exatidão e a resolução, além da linearidade, são\nparâmetros importantes, e serão discutidos posteriormente;\nA imprecisão costuma afetar mais os valores intermediários\nde uma escala (no caso do experimento, seus efeitos\napareceram mais na medição dos 3,3V).\n\n<!-- Slide 4 -->\nMedição analógica típica\nMedição de Tensão Externa 0~5V;\nSem ajuste de escala;\nReferência: Vcc (5V);\nMedição numérica e de tensão;\nApenas o Arduíno, sem componentes externos.\nAlimentação\nvia USB\nEntrada a ser medida\nGND de referência\n\n<!-- Slide 5 -->\nMedição analógica típica\nArduíno Uno\nPorta USB\nAlimentação\nReferência (Ground = GND)\nTensão a ser medida\nReferência (Ground = GND)\nA0\nFonte\nExterna\n\n<!-- Slide 6 -->\nMedição analógica típica\nO valor da tensão não é inteiro\nCálculo da tensão\n(usamos a casa decimal para garantir o processamento das\nconstantes como “ﬂoat”)\nO valor da tensão terá 2 casas decimais\n\n<!-- Slide 7 -->\nMedição analógica típica\nO que percebemos?\nA exatidão é razoável;\nAs tensões foram representadas\ncom 2 dígitos decimais;\nPercebe-se alguma instabilidade\nnos valores medidos, exceto para\n0 e 5V.\nCuidado importante !\nNão há qualquer proteção da\nentrada, logo tensões negativas,\nou superiores a 5V podem\ndaniicar o Arduíno !\n\n<!-- Slide 8 -->\nCasas Decimais\nO número de casas decimais não é só uma “escolha”; ele\ndepende diretamente da resolução;\nOutro parâmetro também importante é o “número de\ncontagens”;\nVamos ver estes parâmetros ?\n"
    },
    {
      "id": "p2_02_precisao_exatidao",
      "arquivo": "p2_02_precisao_exatidao.md",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "topicoNome": "Precisão, Exatidão e Linearidade",
      "titulo": "P2 02 Precisao Exatidao",
      "conteudo": "# Precisão, Exatidão e Linearidade\n\n---\n\n<!-- Slide 9 -->\nPrecisão e Exatidão\nA informação é instável e imprecisa\nNota-se também um erro de medição, mesmo que façamos uma média;\nVamos entender cada um dos parâmetros?\nPouco preciso,\npouco exato\n\n<!-- Slide 10 -->\nPrecisão e Exatidão\nPouco preciso,\npouco exato\nMuito preciso,\npouco exato\nPrecisão não tem relação\ncom a obtenção do valor\nexato\nSe o valor medido for ixo, medições\nprecisas retornarão valores sempre\nmuito próximos;\nOu seja, para valores ixos, a medição\nserá estável, mesmo que errada.\n\n<!-- Slide 11 -->\nPrecisão e Exatidão\nPouco preciso,\npouco exato\nPouco preciso,\nmuito exato\nExatidão não tem relação com precisão (ou estabilidade)\nMuitas vezes medições exatas perdem precisão devido à presença de erros\naleatórios (ruído branco, ou aleatório);\nNestes casos, a média dos valores medidos é muito próxima do valor real.\n\n<!-- Slide 12 -->\nPrecisão e Exatidão\nPouco preciso,\npouco exato\nMuito preciso\nmuito exato\nExatidão não tem relação com precisão (ou estabilidade)\nMuitas vezes medições exatas perdem precisão devido à presença de erros\naleatórios (ruído branco, ou aleatório);\nNestes casos, a média dos valores medidos é muito próxima do valor real.\n\n<!-- Slide 13 -->\nPrecisão\nSe a causa for um ruído com\ncaracterísticas aleatórias\nCálculo da média pode resolver;\nSolução Típica: média simples;\nNúmero de amostragens depende\ndo desvio padrão\nExatidão\nNormalmente a inexatidão é\num problema mais grave\nA informação correta não está\ndisponível;\nSe houver precisão, no entanto, a\ncomparação com outra medição\nmais exata pode determinar um\npadrão para correção do erro;\nA exatidão é um percentual\nEx.: ± (2% + 2) signiica 2% de\nexatidão + 2. Se estiver lendo 10,0,\no valor pode estar entre 9,78 e\n10,22.\nM1\nA1 A2 A3 A4 A5 A6 A7 A8 A9 A10…\nM2\nMédias móveis normalmente são\nmelhores devido à performance\nA1 A2 A3 A4 A5 A6 A7 A8 A9 A10\nM7\n\n<!-- Slide 14 -->\nDesafio: Média Móvel\nComo aumentar a precisão no experimento?\nVamos implementar o algoritmo de Média Móvel?\n\n<!-- Slide 15 -->\nMédia Móvel\nGuarda medição no vetor\nIncrementa o vetor de forma circular 0⟳16\nAcumula as 16 últimas medições\nCalcula a média dos valores acumulados\n\n<!-- Slide 16 -->\nLinearidade\nO comportamento da leitura nem\nsempre corresponde ao\ncomportamento real do valor\nmedido\nA não-linearidade provoca erros de\nmedição em parte dos pontos avaliados;\nÉ comum encontrar a não-linearidade\nnos extremos da faixa de valores\nmensuráveis;\nEm algumas situações, pode valer a pena\nlimitar a faixa de valores medidos, e com\nisso a resolução;\nEm casos especíicos, pode-se corrigir a\nnão-linearidade matematicamente.\n\n<!-- Slide 17 -->\nPrecisão, Exatidão e Linearidade\nNenhum destes parâmetros tem relação obrigatória com\nmedições digitais !\nQualquer tipo de medida, inclusive com instrumentos analógicos ou manuais, é\nafetada pela precisão, exatidão e linearidade;\nNo entanto, medições digitais em sistemas automatizados também precisam ser\navaliadas nestes aspectos.\nFatores Universais\nReferência\nRuídos\nEscala\nFatores em Medições Digitais\nResolução\nTaxa de Amostragem\n"
    },
    {
      "id": "p2_03_media_movel",
      "arquivo": "p2_03_media_movel.md",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "topicoNome": "Precisão, Exatidão e Linearidade",
      "titulo": "P2 03 Media Movel",
      "conteudo": "# Média Móvel, Referências e Ruído\n\n---\n\n<!-- Slide 14 -->\nDesafio: Média Móvel\nComo aumentar a precisão no experimento?\nVamos implementar o algoritmo de Média Móvel?\n\n<!-- Slide 15 -->\nMédia Móvel\nGuarda medição no vetor\nIncrementa o vetor de forma circular 0⟳16\nAcumula as 16 últimas medições\nCalcula a média dos valores acumulados\n\n<!-- Slide 16 -->\nLinearidade\nO comportamento da leitura nem\nsempre corresponde ao\ncomportamento real do valor\nmedido\nA não-linearidade provoca erros de\nmedição em parte dos pontos avaliados;\nÉ comum encontrar a não-linearidade\nnos extremos da faixa de valores\nmensuráveis;\nEm algumas situações, pode valer a pena\nlimitar a faixa de valores medidos, e com\nisso a resolução;\nEm casos especíicos, pode-se corrigir a\nnão-linearidade matematicamente.\n\n<!-- Slide 17 -->\nPrecisão, Exatidão e Linearidade\nNenhum destes parâmetros tem relação obrigatória com\nmedições digitais !\nQualquer tipo de medida, inclusive com instrumentos analógicos ou manuais, é\nafetada pela precisão, exatidão e linearidade;\nNo entanto, medições digitais em sistemas automatizados também precisam ser\navaliadas nestes aspectos.\nFatores Universais\nReferência\nRuídos\nEscala\nFatores em Medições Digitais\nResolução\nTaxa de Amostragem\n\n<!-- Slide 18 -->\nReferência\nQualquer medição baseia-se em uma referência;\nMicrocontroladores e sensores podem usar tipicamente\numa das seguintes fontes de referência:\nTensão de Alimentação;\nTensão de Referência Interna;\nTensão de Referência Externa.\nReferências possuem exatidão e precisão pré-deinidas\nQuanto melhor a referência, melhor a medição (e maior o custo);\nFatores externos, como a temperatura, muitas vezes afetam as referências.\n\n<!-- Slide 19 -->\nFontes de Referência\nDiodo Zener\nTensões diversas;\nTomar cuidado com a\nlinearidade;\nAfetado pela temperatura\n(700ppm/oC)\n\n<!-- Slide 20 -->\nFontes de Referência\nReferências Programáveis de\nPrecisão\nEx.: TL431 (Texas)\nTensão ajustável de 2,5 a 36V;\n0,5% de Exatidão;\nAfetado pela temperatura\n(600ppm/oC).\n\n<!-- Slide 21 -->\nFontes de Referência\nChips especializados\nEx.: 5040AIDG4 (Texas)\n4,096 Volts\n0,05% de exatidão;\n3 ppm/oC\n\n<!-- Slide 22 -->\nEx: Referência no Arduíno\nanalogReference( DEFAULT ) : utiliza Vcc, e varia com ela.\nanalogReference( INTERNAL ) : utiliza referência interna de 1,1V\nMedir valor efetivo (medir pino AREF durante operação normal).\nanalogReference( EXTERNAL ) : utiliza tensão de entrada no pino AREF\n0V < Referência <= 5V (a qualidade da referência determinará a exatidão das medidas);\nNão usar analogRead() antes de mudar a referência, pois isso pode daniicar o Arduíno.\nPor padrão, o Arduíno utiliza a\ntensão de alimentação (5V) como\nreferência;\nOutras referências exigem software e até\nhardware especíico;\nApós mudança, as primeiras medições\npodem ser imprecisas.\n\n<!-- Slide 23 -->\nTratando o ruído\nA melhor opção é buscar a\nredução do ruído no sensor,\ncircuito ou meio ambiente\nQualidade do sensor e\ncomponentes;\nProximidade de Fontes de ruído;\nConexão e cabos;\nAlimentação elétrica;\nRuídos tipicamente afetam a precisão\nQuando aleatórios, ruídos podem ser reduzidos por algoritmos de média;\nSe o desvio padrão for elevado, o número de amostragens necessárias pode ser grande.\n\n<!-- Slide 24 -->\nRuído causa problemas graves\nFontes de ruído de alta intensidade\npodem provocar problemas ainda\nmais sérios\nComum em indústrias, e outra aplicações, como\nsistemas automotivos embarcados;\nRuídos podem impedir a operação de ADCs;\nRuídos podem alterar registros internos do\nMCU;\nRuídos podem provocar “travamento\".\nDesign e projeto eletrônico podem reduzir impactos\nBlindagem e aterramento;\nLayout da PCB e outras questões;\nComo evitar o travamento em aplicações embarcadas de automação?\n\n<!-- Slide 25 -->\nWDT (Watch Dog Timer)\nDatasheet do ATMega328P\n\n<!-- Slide 26 -->\nWDT (Watch Dog Timer)\nMCUs sujeitas a \"travamento\"\nEspera por dispositivo que não responde;\nEndereço da instrução corrompido, etc.\nOperação básica do WDT:\nContador baseado em clock independente;\nAo atingir contagem determinada, envia\nsinal de RESET ao MCU;\nMCU evita o RESET enviando ele mesmo um sinal de RESET para o WDT;\nEnquanto o MCU enviar periodicamente o sinal, tudo funciona bem;\nDiante da eventual falha no envio do sinal (por um travamento), o WDT\nreinicializa o MCU, permitindo que tudo volte à operação.\n"
    },
    {
      "id": "p2_precisao_exatidao",
      "arquivo": "p2_precisao_exatidao.md",
      "prova": "p2",
      "topico": "p2_precisao_exatidao",
      "topicoNome": "Precisão, Exatidão e Linearidade",
      "titulo": "P2 Precisao Exatidao",
      "conteudo": "# Precisão, Exatidão e Linearidade\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** S | **Tópico:** `precisao_exatidao`\n\n\n\n<!-- Slide 1 -->\n📖 O que é Qualidade de Medição?\n\nTodo sensor, ADC e sistema de medição tem imperfeições. O valor lido **raramente é o valor real**. Entender as fontes dessas diferenças é fundamental pra projetar qualquer sistema sério.\n\nExistem dois tipos de erro bem distintos — e a prova vai te cobrar os dois:\n\n\n\n<!-- Slide 2 -->\n🎯 Precisão (Repeatability / Stability)\n\n**Precisão é sobre estabilidade.** Um sistema preciso sempre retorna o mesmo valor ao medir a mesma coisa — não importa se o valor está certo ou errado.\n\n> **Analogia do Atirador:** Um atirador tem um vício — os tiros sempre desviam pra esquerda. Mas esse desvio é *consistente*: todos os tiros caem agrupados. Esse atirador é **muito preciso** (agrupados), mas **pouco exato** (longe do centro).\n\n**Causa da imprecisão:** ruído aleatório (ruído branco). Faz a leitura \"pular\" pra cima e pra baixo sem padrão previsível.\n\n**Como resolver:** Cálculo de média (simples ou móvel). O ruído aleatório se cancela com muitas amostras.\n\n\n\n<!-- Slide 3 -->\n🎯 Exatidão (Accuracy)\n\n**Exatidão é sobre estar certo.** Um sistema exato retorna valor próximo ao real — mesmo que as leituras individuais sejam instáveis.\n\n> **Analogia:** Outro atirador sem vício de mira, mas com a mão tremendo. Os tiros se espalham pelo alvo, mas a **média** de todos cai perto do centro. **Pouco preciso**, mas **muito exato**.\n\n**Causa da inexatidão:** erro sistemático. Algo no sistema introduz um desvio constante — referência ruim, sensor mal calibrado, temperatura afetando componente.\n\n**Como resolver:** Comparar com referência mais exata e calcular fator de correção. A média **NÃO resolve** inexatidão.\n\n\n\n<!-- Slide 4 -->\n⚠️ Os Quatro Casos\n\n| Precisão | Exatidão | O que acontece |\n|----------|----------|----------------|\n| Baixa | Baixa | Tiros espalhados E longe do centro |\n| Alta | Baixa | Tiros agrupados, mas longe do centro ← **erro sistemático** |\n| Baixa | Alta | Tiros espalhados, mas a **média** cai no centro |\n| Alta | Alta | Tiros agrupados no centro ← **ideal** |\n\n\n▶ **PROVA:** Precisão e exatidão são **independentes** — um não implica o outro. Essa é a pegadinha clássica.\n\n▶ **PROVA:** Inexatidão é o problema **mais grave** — sem referência externa, não há como saber que está errado.\n\n▶ **PROVA:** Média resolve **imprecisão** (ruído aleatório). Média **NÃO resolve** inexatidão (erro sistemático).\n\n\n\n<!-- Slide 5 -->\n📐 Exatidão como Percentual\n\nFabricantes expressam exatidão como fórmula. Ex.:\n\n```\nExatidão: ± (2% + 2)\n→ 2% do valor lido + 2 unidades da última casa decimal\n```\n\n**Exemplo:** lendo 10,0 V com exatidão ± (2% + 2):\n- 2% de 10,0 = 0,20\n- + 2 na última casa (centésimos) = + 0,02\n- Erro total = ±0,22 V\n- Valor real pode estar entre **9,78 V e 10,22 V**\n\n\n\n<!-- Slide 6 -->\n📏 Linearidade\n\nO comportamento da leitura **nem sempre corresponde** ao comportamento real do sinal medido.\n\n- Não-linearidade ocorre principalmente nos **extremos** da faixa de operação\n- Provoca erros em **pontos específicos**, não uniformemente em toda a faixa\n- **Soluções:** limitar a faixa (perde resolução) ou corrigir matematicamente (polinômio)\n\n```c\n// Exemplo: correção polinomial de 2ª ordem\n// valor_real = a * leitura^2 + b * leitura + c\nfloat corrige(float leitura) {\n    float a = 0.0003, b = 0.98, c = -1.2;\n    return a * leitura * leitura + b * leitura + c;\n}\n```\n\n▶ **PROVA:** Não-linearidade ocorre nos **extremos** da faixa, NÃO uniformemente.\n\n\n\n<!-- Slide 7 -->\n🔄 Média Móvel com Vetor Circular\n\nTécnica eficiente pra reduzir ruído. Melhor que a média simples porque é O(1) em vez de O(N).\n\n```c\n#define NUM_AMOSTRAS 16\n\nint vetor[NUM_AMOSTRAS];\nint indice = 0;\nlong soma = 0;\n\nint mediaMovel(int novaAmostra) {\n    soma -= vetor[indice];          // remove a mais antiga\n    vetor[indice] = novaAmostra;    // grava nova\n    soma += novaAmostra;            // adiciona nova à soma\n    indice = (indice + 1) % NUM_AMOSTRAS;  // avança circular\n    return soma / NUM_AMOSTRAS;     // retorna média\n}\n```\n\n▶ **PROVA:** Média móvel usa **vetor circular** — não desloca os elementos, apenas atualiza um índice.\n\n\n\n<!-- Slide 8 -->\n📌 Resumo Rápido\n\n- **Precisão** = estabilidade | ruído aleatório | resolve com **média**\n- **Exatidão** = estar certo | erro sistemático | resolve com **calibração**\n- **Linearidade** = relação entrada×saída linear | não-linearidade nos extremos\n- Exatidão ≠ Precisão (são INDEPENDENTES)\n- Inexatidão = problema mais grave\n"
    },
    {
      "id": "p2_referencias_ruido_wdt",
      "arquivo": "p2_referencias_ruido_wdt.md",
      "prova": "p2",
      "topico": "p2_referencias_ruido_wdt",
      "topicoNome": "Referências, Ruído, WDT e Resolução",
      "titulo": "P2 Referencias Ruido Wdt",
      "conteudo": "# Referência, Ruído, WDT, Escalas e Resolução\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** S | **Tópico:** `referencias_ruido_resolucao`\n\n\n\n<!-- Slide 1 -->\n🔋 Referência de Tensão\n\nTodo ADC precisa saber \"qual é o máximo\". Esse máximo é definido pela **tensão de referência (Vref)**.\n\nSe Vref = 5 V e o ADC tem 10 bits:\n- Tensão 5,0 V → leitura digital = 1023\n- Tensão 2,5 V → leitura digital = 511\n- **Se a referência oscilar, TODA a medição fica errada.**\n\n### As 3 Fontes de Referência\n\n| Fonte | Vantagem | Desvantagem |\n|-------|----------|-------------|\n| **Tensão de Alimentação (Vcc)** | Zero custo | Instável, varia com carga |\n| **Referência Interna** | Mais estável que Vcc | Limitada (1,1 V no ATMega) |\n| **Referência Externa** | Melhor exatidão | Precisa de chip dedicado |\n\n### Chips de Referência — Coeficiente de Temperatura\n\n| Componente | Exatidão | Coef. Temperatura | Qualidade |\n|------------|----------|-------------------|-----------|\n| Diodo Zener | Variável | ~700 ppm/°C | Baixa |\n| TL431 (Texas) | 0,5% | ~600 ppm/°C | Média |\n| 5040AIDG4 (Texas) | **0,05%** | **3 ppm/°C** | Alta |\n\n▶ **PROVA:** Quanto **menor** o ppm/°C, **melhor** a referência. 700 ppm/°C é ruim; 3 ppm/°C é excelente.\n\n### Referência no Arduino\n\n```c\nanalogReference(DEFAULT);   // Vcc (5V) — varia com carga\nanalogReference(INTERNAL);  // Ref. interna 1,1V — mais estável\nanalogReference(EXTERNAL);  // Tensão no pino AREF (0V < ref ≤ 5V)\n```\n\n▶ **PROVA:** **NÃO** chamar `analogRead()` antes de configurar `EXTERNAL` — pode danificar o ATMega328P.\n\n\n\n<!-- Slide 2 -->\n📡 Ruído — Tipos e Soluções\n\nRuído é qualquer perturbação indesejada no sinal.\n\n**Fontes comuns:**\n- Ruído térmico (todo resistor gera)\n- Chaveamento digital (o próprio MCU gera)\n- Interferência eletromagnética (motores, transformadores)\n- Acoplamento capacitivo entre fios próximos\n\n**Como reduzir na fonte (sempre preferível):**\n- Qualidade dos componentes\n- Distância de fontes de interferência\n- Cabos mais curtos / blindados / trançados\n- Capacitores de bypass na alimentação\n\n### Quando o ruído é grave demais\n\nEm ambientes industriais, ruído intenso pode:\n- Impedir operação do ADC\n- **Alterar registradores internos do MCU**\n- **Provocar travamento** (PC aponta pra endereço inválido)\n\nSolução para travamento: **WDT** ↓\n\n\n\n<!-- Slide 3 -->\n🐕 WDT — Watch Dog Timer\n\nO WDT é um contador independente que **reseta o MCU** se ele travar.\n\n**Lógica:**\n1. MCU funcionando → alimenta o WDT periodicamente (reinicia o contador)\n2. MCU trava → não alimenta o WDT\n3. Contador chega a zero → **RESET do MCU**\n4. MCU reinicia → volta a funcionar normalmente\n\n```c\n#include <avr/wdt.h>\n\nvoid setup() {\n    wdt_enable(WDTO_2S);  // timeout de 2 segundos\n}\n\nvoid loop() {\n    // ... código normal ...\n    wdt_reset();  // \"alimenta o cão\" — se não executar em 2s: RESET\n}\n```\n\n▶ **PROVA:** O MCU **evita** o reset enviando ele mesmo um sinal ao WDT. Sem o sinal (travamento) → WDT reseta o MCU.\n\n\n\n<!-- Slide 4 -->\n📊 Escalas\n\nAdequam a leitura à faixa do ADC para maximizar a resolução.\n\n**Problema típico:** Sensor entrega 0–2,5 V; ADC aceita 0–5 V → só usa metade dos 1024 valores → perde 50% da resolução.\n\n**Solução:** Divisor de tensão que remapeia o sinal para cobrir toda a faixa 0–5 V.\n\n**Cuidados:**\n- Avaliar **impedâncias** (corrente mínima para o ADC funcionar)\n- Unificar o \"zero volts\" (GND comum)\n- Cuidado com sinais negativos (precisam de offset)\n- Proteger entradas acima de Vref\n\n▶ **PROVA:** Escalas usam **divisores de tensão** e servem pra manter a resolução máxima do ADC.\n\n\n\n<!-- Slide 5 -->\n🔢 Resolução do ADC\n\n**Resolução** = capacidade de distinguir valores distintos. Medida em bits.\n\n| Resolução | Valores (2ⁿ) | Passo com Vref=5V |\n|-----------|-------------|-------------------|\n| 8 bits | 256 | 19,5 mV |\n| **10 bits (Arduino)** | **1024** | **4,88 mV** |\n| 12 bits | 4.096 | 1,22 mV |\n| 16 bits | 65.536 | 0,076 mV |\n\n**Arduino Uno — ADC de 10 bits:**\n- Com Vref = 5 V → passo ≈ **4,89 mV**\n- Com Vref interna 1,1 V → passo ≈ **1 mV**\n\n### Como Calcular Bits Necessários\n\n**Pergunta clássica de prova:** \"Quantos bits preciso?\"\n\n1. Calcule o número de valores distintos necessários\n2. Encontre N tal que 2ᴺ ≥ nº de valores\n\n**Exemplo:** Termômetro de 0,0 a 42,0 °C com passo 0,1 °C:\n- Valores = (42,0 - 0,0) / 0,1 + 1 = **421 valores**\n- 2⁸ = 256 → insuficiente\n- **2⁹ = 512 ≥ 421 → 9 bits** ✓\n\n▶ **PROVA:** Saber calcular 2ⁿ ≥ nº de valores. Arduino tem 10 bits → 1024 valores.\n\n\n\n<!-- Slide 6 -->\n📌 Resumo Rápido\n\n- Vref instável → medição errada inteira\n- ppm/°C → menor é melhor (3 ppm >> 700 ppm)\n- `analogReference(EXTERNAL)` → não usar `analogRead()` antes!\n- WDT = cão de guarda → MCU deve alimentar periodicamente\n- Escala = divisor de tensão → aproveita toda a faixa do ADC\n- Resolução = 2ⁿ valores → Arduino = 10 bits = 1024 = 4,89 mV/passo\n"
    },
    {
      "id": "p2_04_escalas_adc",
      "arquivo": "p2_04_escalas_adc.md",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "topicoNome": "ADC, DAC, PWM e Amostragem (Nyquist)",
      "titulo": "P2 04 Escalas Adc",
      "conteudo": "# Escalas e Resolução\n\n---\n\n<!-- Slide 27 -->\nEscalas\nAdequam a leitura à faixa de valores\ndas entradas\nDevem ser dimensionadas para manter a resolução\nmáxima;\nTipicamente usam Divisores de Tensão;\nAvaliar impedâncias;\nCuidado com a qualidade dos componentes.\nOutros \"detalhes\"\nUniicar o \"zero volts”;\nMedições diferenciais;\nAlgumas escalas não começam em zero;\nMedição de valores negativos;\nProteção de entradas.\n\n<!-- Slide 28 -->\nEscalas\n0V\n2,5V\n0V\n5V\nSaída Sensor\nEntrada ADC\nResolução\nperdida\nAdequam a leitura à faixa de valores\ndas entradas\nDevem ser dimensionadas para manter a resolução\nmáxima;\nTipicamente usam Divisores de Tensão;\nAvaliar impedâncias;\nCuidado com a qualidade dos componentes.\nOutros \"detalhes\"\nUniicar o \"zero volts”;\nMedições diferenciais;\nAlgumas escalas não começam em zero;\nMedição de valores negativos;\nProteção de entradas.\n\n<!-- Slide 29 -->\nEscalas\nAdequam a leitura à faixa de valores\ndas entradas\nDevem ser dimensionadas para manter a resolução\nmáxima;\nTipicamente usam Divisores de Tensão;\nAvaliar impedâncias;\nCuidado com a qualidade dos componentes.\nOutros \"detalhes\"\nUniicar o \"zero volts”;\nMedições diferenciais;\nAlgumas escalas não começam em zero;\nMedição de valores negativos;\nProteção de entradas.\n\n<!-- Slide 30 -->\nEscalas\nManter\ncorrentes\nmínimas\nAdequam a leitura à faixa de valores\ndas entradas\nDevem ser dimensionadas para manter a resolução\nmáxima;\nTipicamente usam Divisores de Tensão;\nAvaliar impedâncias;\nCuidado com a qualidade dos componentes.\nOutros \"detalhes\"\nUniicar o \"zero volts”;\nMedições diferenciais;\nAlgumas escalas não começam em zero;\nMedição de valores negativos;\nProteção de entradas.\n\n<!-- Slide 31 -->\nEscalas\nAdequam a leitura à faixa de valores\ndas entradas\nDevem ser dimensionadas para manter a resolução\nmáxima;\nTipicamente usam Divisores de Tensão;\nAvaliar impedâncias;\nCuidado com a qualidade dos componentes.\nOutros \"detalhes\"\nUniicar o \"zero volts”;\nMedições diferenciais;\nAlgumas escalas não começam em zero;\nMedição de valores negativos;\nProteção de entradas.\n\n<!-- Slide 32 -->\nEscalas\nAdequam a leitura à faixa de valores\ndas entradas\nDevem ser dimensionadas para manter a resolução\nmáxima;\nTipicamente usam Divisores de Tensão;\nAvaliar impedâncias;\nCuidado com a qualidade dos componentes.\nOutros \"detalhes\"\nUniicar o \"zero volts”;\nMedições diferenciais;\nAlgumas escalas não começam em zero;\nMedição de valores negativos;\nProteção de entradas.\n\n<!-- Slide 33 -->\nResolução\nParâmetro mais usado\nem medições digitais;\nMedida em bits, é a\ncapacidade de identiicar\nvalores diferentes,\nmesmo que próximos;\nOutra forma de avaliar é\na “contagem”: quantos\ndiferentes valores podem\nser representados ?\nQuem determina a resolução é o ADC (Conversor Analógico / Digital);\nVídeo mostra a “disputa\" de dois equipamentos de alta resolução. Notem que, mesmo\npossuindo a mesma quantidade de dígitos, há diferenças.\n\n<!-- Slide 34 -->\nResolução\nExiste resolução em medidas analógicas ?\nEm medições digitais, a resolução é\ndeinida em bits, já que o sinal de entrada\nprecisa ser convertido para um número\ndigital e binário;\nResolução de 2 bits: 4 valores diferentes;\n5V\n0V\n1,67V\n3,33V\n?\n\n<!-- Slide 35 -->\nResolução\nExiste resolução em medidas analógicas ?\nEm medições digitais, a resolução é\ndeinida em bits, já que o sinal de entrada\nprecisa ser convertido para um número\ndigital e binário;\nResolução de 2 bits: 4 valores diferentes;\nResolução de 3 bits: 8 valores diferentes;\n\n<!-- Slide 36 -->\nResolução\nExiste resolução em medidas analógicas ?\nEm medições digitais, a resolução é\ndeinida em bits, já que o sinal de entrada\nprecisa ser convertido para um número\ndigital e binário;\nResolução de 2 bits: 4 valores diferentes;\nResolução de 3 bits: 8 valores diferentes;\nResolução de 4 bits: 16 valores diferentes;\n\n<!-- Slide 37 -->\nResolução\nExiste resolução em medidas analógicas ?\nEm medições digitais, a resolução é\ndeinida em bits, já que o sinal de entrada\nprecisa ser convertido para um número\ndigital e binário;\nResolução de 2 bits: 4 valores diferentes;\nResolução de 3 bits: 8 valores diferentes;\nResolução de 4 bits: 16 valores diferentes;\nArduíno: 10 bits de resolução no ADC\nSão 4,89mV entre dois valores ( 5V / 1023 ). Isso implica em 3 dígitos (0,00 a 5,00V), pois\no terceiro dígito (mV) não pode ser usado. Como são 500 valores, temos “500 contagens”;\nCom a referência de 1,1V, teríamos 1mV. Isso implicaria em 4 dígitos, ou 1100 \"contagens\".\n\n<!-- Slide 38 -->\nResolução - como calcular\nE se, dados os limites de uma\nmedição, eu precisar calcular a\nresolução?\nQual a resolução necessária para\ntermos “x\" contagens?\nNo vídeo, os equipamentos\npossuem 6 1/2 dígitos, logo:\nDe 0 a 1.999.999: 2 milhões de\nvalores;\n221 = 2.097.152 →são 21 bits;\nVocê não vai conseguir fazer com um\nArduíno.\n\n<!-- Slide 39 -->\nResolução - como calcular\nOutro exemplo: termômetro\ndigital;\nMedir temperaturas até 42,00C\nDe 0,0 até 42,0: 421 valores;\n29 = 512 →são 9 bits;\nEste dá para fazer com o Arduíno!\n\n<!-- Slide 40 -->\nE/S Analógicas X Digitais\nGrandezas Digitais e Analógicas\nprecisam ser processadas\nconstantemente;\nPara manipular informações\nanalógicas, há dois desaios:\nLeitura:\nADCs (Analog to Digital Converters);\nEscrita:\nDACs (Digital to Analog Converters);\nPWM (Pulse Width Modulation).\n"
    },
    {
      "id": "p2_05_arquitetura_adc",
      "arquivo": "p2_05_arquitetura_adc.md",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "topicoNome": "ADC, DAC, PWM e Amostragem (Nyquist)",
      "titulo": "P2 05 Arquitetura Adc",
      "conteudo": "# ADC: Arquitetura e Amostragem\n\n---\n\n<!-- Slide 40 -->\nE/S Analógicas X Digitais\nGrandezas Digitais e Analógicas\nprecisam ser processadas\nconstantemente;\nPara manipular informações\nanalógicas, há dois desaios:\nLeitura:\nADCs (Analog to Digital Converters);\nEscrita:\nDACs (Digital to Analog Converters);\nPWM (Pulse Width Modulation).\n\n<!-- Slide 41 -->\nADC: como funciona?\nArquitetura Paralela\nUm divisor resistivo divide a tensão de referência máxima\nem intervalos;\nAs saídas do divisor resistivo são comparadas com o valor\nda entrada analógica através de “n\" comparadores,\ngerando uma tabela verdade com “n\" saídas;\nAs “n\" saídas são convertidas para o número binário\ncorrespondente.\nA arquitetura é rápida (tempo real), mas sua\ncomplexidade é muito grande para resoluções\nmaiores;\nOutras arquiteturas são mais adequadas para\nresoluções mais altas\nPipeline, SAR, Sigma-Delta\nEstas arquiteturas geram retardo, e são muito\ndependentes da linearidade, ruído, exatidão e precisão.\n\n<!-- Slide 42 -->\nADC: como funciona?\nArquitetura Paralela\nUm divisor resistivo divide a tensão de referência máxima\nem intervalos;\nAs saídas do divisor resistivo são comparadas com o valor\nda entrada analógica através de “n\" comparadores,\ngerando uma tabela verdade com “n\" saídas;\nAs “n\" saídas são convertidas para o número binário\ncorrespondente.\nA arquitetura é rápida (tempo real), mas sua\ncomplexidade é muito grande para resoluções\nmaiores;\nOutras arquiteturas são mais adequadas para\nresoluções mais altas\nPipeline, SAR, Sigma-Delta\nEstas arquiteturas geram retardo, e são muito\ndependentes da linearidade, ruído, exatidão e precisão.\n\n<!-- Slide 43 -->\nAmostragem\nAs medições são realizadas em um\ndeterminado momento, onde o valor\nmedido é registrado;\nA quantidade de medições em um\ndeterminado período é chamada de taxa de\namostragem\nÉ necessária uma frequência de amostragem mínima para\nconseguirmos efetivamente representar um determinado\nsinal, e suas variações com o tempo;\nO teorema de Nyquist diz que, para uma amostragem\nininita, uma frequência de amostragem pelo menos 2 vezes\nsuperior à maior componente de frequência do sinal é\ncapaz de representar adequadamente o sinal original;\nSinais digitais, devido às suas harmônicas, podem ter\nfrequências de amostragem ideais muito elevadas.\nA frequência de amostragem está relacionada à performance do ADC.\n\n<!-- Slide 44 -->\nAmostragem\nA taxa de amostragem está associada\nà aplicação\nSe você quer ler um valor ixo, ou com variação\nlenta, a taxa pode ser menor;\nSe você deseja analisar o comportamento de\num sinal que varia rapidamente, a taxa precisa\nser maior;\nUm voltímetro tem taxa típica de 4 SA/s (sem\nconsiderar cálculo de média);\nUm osciloscópio tem taxa típica de 1 GSA/s\n(você não vai conseguir fazer isto com um\nArduíno).\n?\n\n<!-- Slide 45 -->\nO ADC do Arduíno\nHardware do ADC\nUma amostragem é, na verdade, uma\ncomparação;\nCapacitor para \"iltro de ruído\nanalógico”;\nO iltro é mais eiciente para ruídos de\nfrequência mais alta.\nMultiplexação de 8 diferentes\nentradas analógicas\nPoderíamos ter mais?\nTudo é uma questão de performance e aplicação.\n?\n\n<!-- Slide 46 -->\nADC externo\nADS1115 - 16 bits com interface i2C\nAté 860 SA/s;\n4 canais de entrada ou …\n2 canais diferenciais;\nAmpliicador de ganho programável.\nINA219 - 12 bits com interface i2C\nAté 128 SA/s;\nLeitor de Tensão e Corrente.\nADS1252 - 24 bits com interface SPI\n"
    },
    {
      "id": "p2_06_dac",
      "arquivo": "p2_06_dac.md",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "topicoNome": "ADC, DAC, PWM e Amostragem (Nyquist)",
      "titulo": "P2 06 Dac",
      "conteudo": "# DAC: Resistores Ponderados e R-2R\n\n---\n\n<!-- Slide 47 -->\nDAC: como funciona?\nUm DAC converte uma entrada\ndigital em uma saída de “n\" níveis,\nsimulando um valor analógico\nQuanto mais bits, “mais analógico\";\nPropriedades: resolução,\nmonotonicidade, linearidade, exatidão e\ntempo de acomodação.\nExistem basicamente 2 tipos de DAC\nDAC por Resistores Ponderados;\nDAC por Rede R-2R em escada.\nO Arduíno Uno não possui DAC\nintegrado\n\n<!-- Slide 48 -->\nDAC: como funciona?\nDAC por Resistores Ponderados\nSequência de resistores acompanham as\npotências de 2 representadas por cada\ndígito do número;\nComplexidade associada à precisão dos\nresistores, especialmente para muitos\ndígitos;\nNa igura temos um exemplo com entrada\nde 3 bits.\n\n<!-- Slide 49 -->\nDAC: como funciona?\nDAC por Rede R-2R em escada\nA vantagem clara está nos dois únicos\nvalores para os resistores, facilitando a\nconstrução;\nNa igura temos um exemplo com entrada\nde 3 bits.\nParâmetros\nResolução: número de bits\nMonotonicidade: crescimento constante\nLinearidade\nExatidão\nTempo de acomodação: tempo\nnecessário para a saída representar uma\nmudança entre o menor e maior valor\nbinário na entrada.\n\n<!-- Slide 50 -->\nPWM: como funciona?\nPulse Width Modulation: Modulação\npor Largura de Pulso;\nOpção mais comum para simular uma\nsaída analógica\nMicrocontrolador controla o percentual de\ntempo da saída no nível 1;\nO percentual é chamado de “ciclo de\ntrabalho”, ou Duty Cycle;\nO efeito “analógico\" vem da tensão média\nna saída.\nArduíno Uno\nFrequência típica 490Hz, mas pode subir\naté 4MHz;\nResolução para ajuste do Duty Cycle: 8 bits\n"
    },
    {
      "id": "p2_07_pwm",
      "arquivo": "p2_07_pwm.md",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "topicoNome": "ADC, DAC, PWM e Amostragem (Nyquist)",
      "titulo": "P2 07 Pwm",
      "conteudo": "# PWM: Modulação por Largura de Pulso\n\n---\n\n<!-- Slide 50 -->\nPWM: como funciona?\nPulse Width Modulation: Modulação\npor Largura de Pulso;\nOpção mais comum para simular uma\nsaída analógica\nMicrocontrolador controla o percentual de\ntempo da saída no nível 1;\nO percentual é chamado de “ciclo de\ntrabalho”, ou Duty Cycle;\nO efeito “analógico\" vem da tensão média\nna saída.\nArduíno Uno\nFrequência típica 490Hz, mas pode subir\naté 4MHz;\nResolução para ajuste do Duty Cycle: 8 bits\n\n<!-- Slide 51 -->\nMemória no ATMega328P\nO ATMega328P não segue a arquitetura\npadrão Von Neumann\nA Memória que armazena o programa é diferente\nda memória que contém as variáveis;\nSão 3 tipos de memória\ndiferentes;\nO ATMega328P possui 3 tipos diferentes de\nmemória (Flash, SRAM e EEPROM).\n\"Arquitetura Harvard\"\nGanho de performance por permitir acesso\nsimultâneo às instruções e aos dados;\nTamanho que contém uma instrução (16 bits)\npode ser diferente da palavra de dados (8 bits);\nProcessadores modernos misturam Von\nNeumann com Harvard, através do uso do cache.\n"
    },
    {
      "id": "p2_adc_dac_pwm",
      "arquivo": "p2_adc_dac_pwm.md",
      "prova": "p2",
      "topico": "p2_adc_dac_pwm",
      "topicoNome": "ADC, DAC, PWM e Amostragem (Nyquist)",
      "titulo": "P2 Adc Dac Pwm",
      "conteudo": "# ADC, DAC, PWM e Amostragem\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** S | **Tópico:** `adc_dac_pwm`\n\n\n\n<!-- Slide 1 -->\n🔄 O Problema Central\n\nO mundo real é analógico. Microcontroladores são digitais. Para se comunicarem:\n\n- **MCU lê o mundo → ADC** (Analógico → Digital)\n- **MCU controla o mundo → DAC ou PWM** (Digital → Analógico)\n\n\n\n<!-- Slide 2 -->\n📥 ADC — Analógico para Digital\n\n### Arquitetura Flash (Paralela)\n\nA mais rápida — funciona em tempo real, sem retardo.\n\n**Como funciona:**\n1. Divisor resistivo divide a Vref em N intervalos\n2. N comparadores verificam cada nível\n3. A saída dos comparadores forma uma tabela verdade\n4. Codificador converte para número binário\n\n**Problema:** 10 bits → 1023 comparadores. 16 bits → 65.535. Inviável para alta resolução.\n\n### Outras Arquiteturas (alta resolução, com retardo)\n\n| Arquitetura | Velocidade | Resolução | Uso |\n|-------------|------------|-----------|-----|\n| Flash | Tempo real | Baixa (≤8 bits) | Osciloscópio |\n| **SAR** | Moderada | **Alta (10–16 bits)** | **ATMega328P** |\n| Sigma-Delta | Lenta | Muito alta (18–24 bits) | Áudio, instrumentação |\n| Pipeline | Alta | Alta | Comunicações |\n\n▶ **PROVA:** SAR = Successive Approximation Register = busca binária = N ciclos para N bits = **usado no ATMega328P**.\n\n### ADC do Arduino em Detalhe\n\n- Arquitetura **SAR**, 10 bits\n- **Multiplexador de 8 entradas** (A0–A7) — uma por vez\n- Capacitor interno faz filtro de ruído analógico (mais eficiente em alta frequência)\n- Sample & Hold \"congela\" o sinal para a conversão\n\n### ADCs Externos\n\n| Modelo | Bits | Interface | Taxa |\n|--------|------|-----------|------|\n| INA219 | 12 | I2C | 128 SA/s |\n| ADS1115 | 16 | I2C | 860 SA/s |\n| ADS1252 | 24 | SPI | — |\n\n\n\n<!-- Slide 3 -->\n📡 Amostragem e Teorema de Nyquist\n\n**Taxa de amostragem** = quantas amostras por segundo (SA/s ou Hz).\n\n### Teorema de Nyquist\n\n> Para representar fielmente um sinal com componentes até F_max Hz, amostrar em **pelo menos 2 × F_max**.\n\n`f_amostragem ≥ 2 × f_máxima_do_sinal`\n\n**Se não respeitar:** aliasing — o sinal parece ter frequência diferente da real.\n\n| Aplicação | Freq. máx. | Taxa mínima |\n|-----------|-----------|-------------|\n| Temperatura | ~0,01 Hz | 0,02 SA/s |\n| Áudio voz (telefone) | 4.000 Hz | 8.000 SA/s |\n| Áudio CD | 20.000 Hz | 44.100 SA/s |\n| Voltímetro | quase DC | ~4 SA/s |\n| Arduino (analogRead) | — | ~10.000 SA/s |\n\n▶ **PROVA:** Nyquist = **2× a maior frequência**, não igual. Confundir isso é erro clássico.\n\n\n\n<!-- Slide 4 -->\n📤 DAC — Digital para Analógico\n\nConverte número digital em tensão analógica de N níveis.\n\n**Arduino Uno NÃO tem DAC integrado.** Os pinos (~) fazem PWM, não DAC verdadeiro.\n\n### Tipo 1: Resistores Ponderados\n\nResistores com valores R, 2R, 4R, 8R... proporcional às potências de 2.\n- **Problema:** para muitos bits, a relação entre maior e menor resistor é 2ᴺ:1. Difícil manter precisão.\n\n### Tipo 2: Rede R-2R em Escada\n\n```\nBit3      Bit2      Bit1      Bit0\n |         |         |         |\n[2R]      [2R]      [2R]      [2R]\n |         |         |         |\n─+──[R]───+──[R]───+──[R]───+── saída\n           |         |         |\n          [2R]      [2R]      [2R]\n           |         |         |\n          GND       GND       GND\n```\n\n**Vantagem:** apenas **dois valores de resistor** (R e 2R) independente do número de bits.\n\n▶ **PROVA:** R-2R = só dois valores de resistor. Resistores ponderados = 2ᴺ valores diferentes.\n\n### Parâmetros do DAC\n\n| Parâmetro | Significado |\n|-----------|-------------|\n| Resolução | Número de bits |\n| Monotonicidade | Saída sempre cresce quando entrada cresce |\n| Linearidade | Relação entrada×saída é linear? |\n| Exatidão | Quão próxima é a saída do valor teórico? |\n| Tempo de acomodação | Tempo pra estabilizar após mudança |\n\n\n\n<!-- Slide 5 -->\n🔊 PWM — Pulse Width Modulation\n\nA alternativa mais comum ao DAC. Controla o **percentual de tempo em nível alto (Duty Cycle)**.\n\nO componente de carga responde à **tensão média**.\n\n```\nDuty Cycle = 0%:   ________________  → Tensão média = 0 V\nDuty Cycle = 50%:  ‾‾__‾‾__‾‾__    → Tensão média = 2,5 V\nDuty Cycle = 100%: ‾‾‾‾‾‾‾‾‾‾‾‾    → Tensão média = 5 V\n```\n\n`Tensão média = Duty Cycle (%) × Vcc`\n\n### PWM no Arduino Uno\n\n```c\nanalogWrite(9, 0);    // 0% duty cycle → LED apagado\nanalogWrite(9, 128);  // 50% duty cycle → meia potência\nanalogWrite(9, 255);  // 100% duty cycle → potência máxima\n```\n\n- Valor de 0 a 255 → **8 bits de resolução**\n- Frequência padrão: **490 Hz** (pinos 3, 9, 10, 11) / **980 Hz** (pinos 5 e 6)\n- Pode subir até ~4 MHz via registradores\n- **Pinos com PWM no Uno:** 3, 5, 6, 9, 10, 11 (marcados com ~)\n\n▶ **PROVA:** Arduino Uno **NÃO tem DAC**. PWM simula analógico pela tensão **média**. Resolução do PWM = **8 bits**.\n\n\n\n<!-- Slide 6 -->\n📌 Resumo Rápido\n\n- ADC: Flash (rápido, poucos bits) / SAR (ATMega = 10 bits) / Sigma-Delta (24 bits)\n- Nyquist: amostrar ≥ **2× a freq. máxima** do sinal\n- DAC R-2R: só **2 valores** de resistor (R e 2R)\n- Arduino Uno: **sem DAC**, PWM nos pinos ~\n- PWM: Duty Cycle controla tensão média → `tensão = DC% × Vcc`\n- PWM Arduino: **8 bits**, 490 Hz padrão\n"
    },
    {
      "id": "p2_atmega_registradores",
      "arquivo": "p2_atmega_registradores.md",
      "prova": "p2",
      "topico": "p2_atmega_registradores",
      "topicoNome": "ATMega328P: Harvard, Memória e Registradores",
      "titulo": "P2 Atmega Registradores",
      "conteudo": "# ATMega328P — Memória, Registradores e Acesso Binário\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** S | **Tópico:** `atmega_registradores`\n\n\n\n<!-- Slide 1 -->\n🏗️ Arquitetura Harvard vs Von Neumann\n\n| Aspecto | Von Neumann | Harvard (ATMega328P) |\n|---------|-------------|----------------------|\n| Barramentos | 1 compartilhado | **2 separados** |\n| Acesso simultâneo | Não | **Sim** |\n| Tamanho instrução | = dado | **Pode ser diferente** |\n| Performance | Gargalo | **Maior** |\n\n**ATMega328P:** instrução = **16 bits** (Flash); dado = **8 bits** (SRAM).\n\n▶ **PROVA:** ATMega328P = **Arquitetura Harvard**, NÃO Von Neumann.\n\n\n\n<!-- Slide 2 -->\n💾 Os 3 Tipos de Memória\n\n| Memória | Função | Tamanho | Volátil? | Palavras |\n|---------|--------|---------|----------|---------|\n| **Flash** | Programa (sketch + bootloader) | **32 KB** | Não | 16 bits |\n| **SRAM** | Variáveis + registradores | **2.304 B** | Sim | 8 bits |\n| **EEPROM** | Dados não voláteis do usuário | **1 KB** | Não | 8 bits |\n\n**Mapa da SRAM:**\n```\n0x0000: 32 registradores de trabalho (R0–R31)\n0x0020: 64 registradores de E/S (DDR, PORT, PIN, timers...)\n0x0060: 160 registradores de E/S estendidos\n0x0100: Variáveis do usuário (pilha cresce daqui)\n0x08FF: Fim da SRAM\n```\n\n▶ **PROVA:** EEPROM = **não volátil** (persiste sem energia). SRAM = **volátil** (perde ao desligar).\n\n\n\n<!-- Slide 3 -->\n⚙️ Registradores de Porta — DDR, PORT, PIN\n\nAs portas B, C e D controlam os pinos digitais:\n\n| Porta | Pinos Arduino |\n|-------|---------------|\n| Porta D | Pinos 0–7 (PD0–PD7) |\n| Porta B | Pinos 8–13 (PB0–PB5) |\n| Porta C | Pinos A0–A5 (PC0–PC5) |\n\nCada porta tem 3 registradores de 8 bits:\n\n| Registrador | Função |\n|-------------|--------|\n| **DDRx** | Direção: **0 = entrada**, **1 = saída** |\n| **PORTx** | Se saída: valor a apresentar. Se entrada: **1 = pull-up ligado**, 0 = desligado |\n| **PINx** | **Somente leitura** — estado elétrico atual do pino |\n\n▶ **PROVA:** DDR = 0 → entrada; DDR = 1 → saída. Muita gente inverte. PIN = somente leitura.\n\n\n\n<!-- Slide 4 -->\n🔣 Operações Bit-a-Bit — A Base de Tudo\n\nPara manipular registradores sem destruir os outros bits:\n\n### Criar Máscara: Operador de Deslocamento `<<`\n\n```c\n(1 << 0) = 00000001   // bit 0\n(1 << 5) = 00100000   // bit 5\n(1 << n) = ...        // bit n\n```\n\n### Ativar (SET) — Operação OU `|=`\n\n```c\nDDRD |= (1 << 5);    // ativa bit 5 de DDRD, mantém os outros\n// equivale a: DDRD = DDRD | 00100000\n```\n\n### Desativar (RESET) — Operação E+NOT `&= ~`\n\n```c\nDDRD &= ~(1 << 5);   // desativa bit 5 de DDRD, mantém os outros\n// equivale a: DDRD = DDRD & 11011111\n```\n\n### Inverter (TOGGLE) — Operação XOR `^=`\n\n```c\nPORTB ^= (1 << PB5);  // inverte bit 5 de PORTB\n// se era 1 → vira 0; se era 0 → vira 1 (pisca LED!)\n```\n\n### Ler um Bit Específico\n\n```c\n// Verifica se bit 2 de PIND está em 1:\nif ((PIND & (1 << 2)) != 0) { ... }\n\n// Obtém 0 ou 1 no bit 0:\nuint8_t val = (PIND >> 2) & 0x01;\n```\n\n▶ **PROVA:** SET = `|=`, RESET = `&= ~`, TOGGLE = `^=`. Saber de cor.\n\n\n\n<!-- Slide 5 -->\n💡 Exemplo Completo — Botão Acende LED\n\n**Hardware:** LED no pino 5 (PD5), Botão no pino 2 (PD2) com pull-up interno.\n\n```c\nconst int pinoLed   = 5;  // PD5\nconst int pinoBotao = 2;  // PD2\n\nvoid setup() {\n    // PD5 como saída (LED)\n    DDRD |= (1 << pinoLed);\n\n    // PD2 como entrada com pull-up\n    DDRD  &= ~(1 << pinoBotao);  // entrada\n    PORTD |=  (1 << pinoBotao);  // pull-up ligado\n}\n\nvoid loop() {\n    // Lê o botão (0 = pressionado, pq pull-up inverte lógica)\n    uint8_t botao = (PIND >> pinoBotao) & 0x01;\n\n    if (botao == 0) {\n        PORTD |= (1 << pinoLed);   // acende (HIGH)\n    } else {\n        PORTD &= ~(1 << pinoLed);  // apaga (LOW)\n    }\n}\n```\n\n\n\n<!-- Slide 6 -->\n📌 Resumo Rápido\n\n- Harvard: barramentos separados → acesso simultâneo → mais rápido\n- Flash 32KB, SRAM 2KB, EEPROM 1KB\n- DDR: 0=entrada, 1=saída | PORT: valor/pull-up | PIN: somente leitura\n- SET → `|= (1<<n)` | RESET → `&= ~(1<<n)` | TOGGLE → `^= (1<<n)`\n- Pinos 0–7 = Porta D | 8–13 = Porta B | A0–A5 = Porta C\n"
    },
    {
      "id": "p2_09_interrupcoes",
      "arquivo": "p2_09_interrupcoes.md",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "topicoNome": "Interrupções, ISR e Timers",
      "titulo": "P2 09 Interrupcoes",
      "conteudo": "# Interrupções Externas, ISR e Timers\n\n---\n\n<!-- Slide 73 -->\nDispositivos de Entrada\nSensores de pulsos (luxo d’água, contadores etc)\n\n<!-- Slide 74 -->\nInterrupções\nUma das formas mais eicazes de controlar operações de\nentrada e saída;\nPodem ser acionadas por eventos internos (ex. timers) ou\nexternos (ex. sinais elétricos);\nProvocam o desvio de execução do sketch para uma\nInterrupt Service Routine (ISR) especíica. Ao término da\nISR, a execução retorna ao ponto original;\nA ISR deve ser construída com alguns cuidados especiais.\n\n<!-- Slide 75 -->\nExecução de Programa\nInício\nBusca da instrução\nDecodiﬁcação\nBusca de operandos\nExecução\nInterrupção?\nNão\nCiclo de Busca\n(fetch)\nSim\nCiclo de\nExecução\nDesvio para ISR (Interrupt\nService Routine)\n\n<!-- Slide 76 -->\nInterrupções ATMega328P\nUm microcontrolador normalmente possui\nvetores de interrupções\nAssociam cada interrupção a uma (ISR);\nA tabela ao lado mostra os vetores do\nATMega328P; alguns deles estão associados a 3\ndiferentes timers (0, 1 e 2);\nEm todos há 2 funções de comparação, e uma de\noverlow.\nDatasheet do ATMega328P\nVector\nProgram\nAddress\nSource\nInterrupt Deﬁnition\nRESET\nExternal pin, power-on reset, brown-out\nreset and watchdog\nsystem reset\nINT0\nExternal interrupt request 0\nINT1\nExternal interrupt request 1\nPCINT0\nPin change interrupt request 0\nPCINT1\nPin change interrupt request 1\nA\nPCINT2\nPin change interrupt request 2\nC\nWDT\nWatchdog time-out interrupt\nE\nTIMER2 COMPA\nTimer/Counter2 compare match A\nTIMER2 COMPB\nTimer/Counter2 compare match B\nTIMER2 OVF\nTimer/Counter2 overﬂow\nTIMER1 CAPT\nTimer/Counter1 capture event\nTIMER1 COMPA\nTimer/Counter1 compare match A\nTIMER1 COMPB\nTimer/Counter1 compare match B\n1A\nTIMER1 OVF\nTimer/Counter1 overﬂow\n1C\nTIMER0 COMPA\nTimer/Counter0 compare match A\n1E\nTIMER0 COMPB\nTimer/Counter0 compare match B\nTIMER0 OVF\nTimer/Counter0 overﬂow\nSPI, STC\nSPI serial transfer complete\nUSART, RX\nUSART Rx complete\nUSART, UDRE\nUSART, data register empty\nUSART, TX\nUSART, Tx complete\n2A\nADC\nADC conversion complete\n2C\nEE READY\nEEPROM ready\n2E\nANALOG COMP\nAnalog comparator\nTWI\n2-wire serial interface\nSPM READY\nStore program memory ready\n\n<!-- Slide 77 -->\nInterrupções ATMega328P\nOs 3 timers também estão associados a registradores especíicos\nRegistradores são modiicados automaticamente, sem a necessidade de código especíico;\nModiicações dependem direta ou indiretamente do Clock do sistema.\nDatasheet do ATMega328P\n}16 bits\n\n<!-- Slide 78 -->\nInterrupções ATMega328P\nNo Arduíno Uno, o clock é de 16 MHz\nCada microcontrolador tem sua própria taxa de clock;\nO clock pode ser dividido por valores pré-deinidos (prescaler);\nO clock pode ter seu valor comparado para gerar interrupções .\nDatasheet do ATMega328P\nClock (16MHz)\nPrescaler (ex. 8)\nUm ciclo a cada 1/16 MHz = 62,5 nS\nUm ciclo a cada 1/2 MHz = 500 nS\n\n<!-- Slide 79 -->\nInterrupções ATMega328P\nNo Arduíno Uno, o clock é de 16 MHz\nCada microcontrolador tem sua própria taxa de clock;\nO clock pode ser dividido por valores pré-deinidos (prescaler);\nO clock pode ter seu valor comparado para gerar interrupções .\nDatasheet do ATMega328P\nTimer\nTamanho\nInterrupções\nPossíveis\nUso no Arduíno Uno\n8 bits\n(0 ~ 255)\nComparação\nOverﬂow\ndelay(), millis(), micros()\nanalogWrite() pinos 5 e 6\n16 bits\n(0 ~ 65535)\nComparação\nOverﬂow\nCaptura de Entrada\nFunções para servos\nanalogWrite() pinos 9 e 10\n8 bits\n(0 ~ 255)\nComparação\nOverﬂow\ntone()\nanalogWrite() pinos 3 e 11\n\n<!-- Slide 80 -->\nInterrupções ATMega328P\nDeinindo o prescaler (ex. timer 1)\nO timer 1 não afeta millis();\nProcesso é similar nos demais timers.\n(*) Datasheet do ATMega328P\n\n<!-- Slide 81 -->\nInterrupções (prática)\nPara testar as interrupções com\ntimers, vamos modiicar o\nclássico “Blink”;\nO código original pode ser\nobtido em\nArquivos→Exemplos→Basics→Blink\nVamos iniciar o processo\ntestando o código original\nLED_BUILTIN = 13\n\n<!-- Slide 82 -->\n\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0004\u0005\n  \n\u0001\u0002\u0003\u0004 \u0006\u0007\u0004 \n  \n\u0001\u0002\u0003\u0004 \u0006\u0007\u0004 \n  \n\u0001\u0002\u0003\u0004 \u0006\u0007\u0004 \n \u0005\n\u0001\u0002\u0003\u0004\u000e\u0006\u0007\u0004\u000e\n  \n\u0001\u0002\u0003\u0004\u000f\u0006\u0007\u0004\u000f\u0006\n  \n\u0001\u0010\u0004\u0011\u0006\u0007\u0012\u0005\n\u000e\u0013\n\u0001\u0014\u0015\u0010\u0016\u0006\u0007\u0012 \n\u000e \n\u0001\u0014\u0016\u0010\u0015\u0006\u0007\u0012 \n\u000e \n\u0001\u0010\u0010\u0006\u0007\u0012 \n\u000e \n\u0001\u0016\u0004\u000e\u0006\u0007\u0012\u000e\n\u000e\u0005\n\u0001\u0015\u0004\u0007\u0006\u0007\u0012\u000f\n\u000e \n\u0001\u0002\u0015\u0017\u000e\u0006\u0007\u0003 \n\u000e \n\u0001\u0002\u0015\u0017\u000f\u0006\u0007\u0003 \n\u000e \n\u0001\u0018\u000e\u0006\u0007\u0003\u0005\n\u000e\u000e\n\u0001\u0018\u000f\u0006\u0007\u0003 \n \n\u0001\u0015\u0017\u0018\u000e\u0006\u0007\u0003 \n\u0005\n\u0001\u0015\u0017\u0018\u000f\u0006\u0007\u0003 \n \n\u0001\u0018\u0019\u0003\u0006\u0007\u0003\u000e\n \n\u0001\u001a\u0019\u0003\u0006\u0007\u0003\u000f\n \n\u001b\u0017\u0003\n \n\n\u0004\u0004\n \n\u0002\n\u0004\u0004\n \u000f\n\u0002\u001a\n\n \u000e\n\u0019\u0018\u0002\u001f\u000e\n\u0013\n\u0019\u0018\u0002\u001f \n\u000e\u000f\n\u001a\n\u0010\n\u0018\n\u000e\n\u0002\u001b\u0017\u0003\n  \n\u000e\n \n \n \n\u0005\n \n\u000e\n \n \n \n\u0005\n \n \n \n\u000e\n \n \n \n\u0005\n \n \n \n\u0013\n\u000e\u000f\n\u000e\n \n \n \n\u0005\n \n\u000e\n\u000e\n \n \n \n \n\u000e\n \n \n \n\u0007 \u000e\n\u0007 \u000e\n\u0007  \n\u0007  \n\u000e\n\u0015\u0017\n \n\u0016!\u0018\n \n \n\u0001\u0002\u0015\u0017\u000f\"\u0015\u0017\u0018\u000e\u0006\u0007\u0003\u000e\n \n\u0001\u0002\u0015\u0017 \"\u0007\u0004\u0015\u0017\u0018\u000e\u000e\u0006\u0007\u0004 \n\u0005\n\u0001\u0004\u0018\u0010\"#$\u0012\"\u0002\u0015\u0017 \"\u0018\u0016\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n\u000e \n\u0001\u0015\u0017\u0018 \"\u0015\u0004\u0007\u000e\"\u0004\u001f\u0011\u000f\u0006\u0007\u0004 \n  \n\u0001\u0015\u0017\u0018\u0005\"\u0002\u0015\u0017 \u0006\u0007\u0003 \n\u000e\u000f\n\u0001\u0016\u0004\u000f\u0012\"\u0015\u0017\u0018\u000f\u0006\u0007\u0003\u000f\n \n\u0001\u0016\u0004\u000e\u0002\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0004 \n  \n\u0001\u0007\u0004\u0015\u0017\u0018\u0005\u0006\u0007\u0012\u0005\n\u000e\u0013\n\u0001\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n \u000f\n\u0001\u0007\u0004\u0015\u0017\u0018 \"\u0016\u0004\u000f\u0002\"\u0016\u0004\u000e\u0004\u0006\u0007\u0012 \n \u000e\n\u0001\u0007\u0004\u0015\u0017\u0018\u0013\"\u0016\u0004\u000e\u0012\u0006\u0007\u0004\u0005\n \u0005\n\u0001\u0007\u0004\u0015\u0017\u0018\u000e\u000f\u0006\u0007\u0004 \n  \n\u0001\u0007\u0003\u000f\"\u0014\u0015\u0010\u0016\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n\u000e \n\u0001\u0007\u0003\u0015\"\u0014\u0016\u0010\u0015\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n\u000e \n\u0001\u001a\u0018\u0010\"\u0002\u0015\u0017\u0005\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n\u000e \n\u0001\u001a\u0019\u0003\u000e\"\u0002\u0015\u0017\u000e\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n \n\u0001\u0010\u0004\u001f\u0011\"\u0007\u0004\u0015\u0017\u0018\u000e\u0006\u0007\u0012\u000e\n\u000e\u0005\n\u0001\u0010\u0010\"\u0007\u0004\u0015\u0017\u0018\u000f\u0006\u0007\u0012\u000f\n\u000e \n\u0001\u0018\u000e\"\u0007\u0004\u0015\u0017\u0018 \u0006\u0007\u0012 \n\u000e \n\u0001\u0018\u0019\u0003\u000e\"\u0015\u0017\u0018 \u0006\u0007\u0003 \n\u0013\n\u0001\u0019\u0004\u0011\"\u0002\u0015\u0017 \"\u0007\u0004\u0015\u0017\u0018\u000e \u0006\u0007\u0003\u0005\n\u000e\u000e\n\u0002\n\u0004\u0004\n  \n\u0003%\n \u0013\n\u0003&\n \u000f\n\u001b\u0017\u0003\n \n\u0007\u0002\u0003\n  \n\u001a\n\u0010\n\u0018\u0001\u0007\u0004\u000e\"\u0003$\u0006\n  \n!\u0004\u0002\u0007\n  \n!\u001b\u0017\u0003\n  \n!\n\u0004\u0004\n \u000e\n\n\u0004\u0004\n \n\u0019\u0018\u0002\u001f\u000e\n\u000e\n\u0019\u0018\u0002\u001f \u0001\u0007\u0004\u000f\u0006\n \n\u000e\n \n \n \n\u0005\n \n \n\u000e\n \n\u000e\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n \n\u0005\n\u000e\n \n \n \n \n \n\u000e\n \n\u0005\n \n \n \n\u000e\n \n \n \n\u0005\n\u0015\u0017\n\u000e\n\u0016\u0017\"\u0016\n\n \n\u0017\u0004\"\n\u0012\n \n\u0016!\u0018\n\u0005\n\u001b\u0017\u0003\n \n\u000e\n \n \n \n\u0005\n \n \n \n \n\u000e\nEsquemático Arduíno\nUno\nDiagrama esquemático do Arduíno Uno v3\n\n<!-- Slide 83 -->\nEsquemático Arduíno\nUno\nDiagrama esquemático do Arduíno Uno v3\nPB5\n\n<!-- Slide 84 -->\nInterrupções (prática)\nTemos o mesmo código, mas\nagora com registradores;\nOutra opção é apenas inverter o\nvalor do registrador\nPORTB ^= (1 << PB5 );\nA operação OU-Exclusivo ( ^ ) inverte o valor do bit.\nFunção delay(1000) mantém o\nprocessador “ocupado\" por 1s;\nVamos usar o timer1 para\nsubstituir a função !\n\n<!-- Slide 85 -->\nPreparando o timer1\nEmbora o TCCR1A não seja necessário, ele precisa sofrer reset;\nO Arduíno grava o TCCR1A por padrão para operar o PWM;\nBasta o comando TCCR1A = 0;\n\n<!-- Slide 86 -->\nPreparando o timer1\nUma mudança do LED a cada segundo\nClock de 16MHz = 16 milhões de ciclos por segundo\nContagem máxima do timer1 é 65.536\n16.000.000 / 64\n= 250.000\n⇒inválido (> contagem máxima)\n16.000.000 / 256\n=\n62.500\n⇒válido (escolhido) !\n16.000.000 / 1.024 =\n15.625 ⇒válido !\nPrescaler = 256; Contador = 62.500;\n\n<!-- Slide 87 -->\nPreparando o timer1\nDeinindo o prescaler\nTCCR1B |= (1 << CS12 );\nTCCR1B &= ~(1 << CS11 );\nTCCR1B &= ~(1 << CS10 );\nPara usar o contador\nDeinimos a interrupção pela comparação com o registro A;\nTIMSK1 = (1 << OCIE1A );\nInput Capture\nOverﬂow\n\n<!-- Slide 88 -->\nPreparando o timer1\nCarga do registro A\nDeinimos constantes para facilitar o acesso aos registradores de 16 bits:\nconst uint16_t t1_carga = 0;\nconst uint16_t t1_comparador = 62500;\nRegistradores são carregados dentro da ISR:\nISR( TIMER1_COMPA_vect ) {\nTCNT1 = t1_carga;\nPORTB ^= ( 1 << PB5 );\n}\nTambém é importante habilitar as interrupções\nsei();\n\n<!-- Slide 89 -->\nCódigo Final\nEstrutura loop() só possui delay()\nNenhum código afetará a operação do\nblink();\nISR() pode ser ainda menor\nModo CTC pode ser habilitado;\ntimer1 zera ao alcançar registro A;\nObjetivo é fazer ISR() o menor\npossível.\n(*) Código inspirado no material da SparkFun “Level Up Your\nArduíno Code: Timer Interrupts”\n"
    },
    {
      "id": "p2_10_timers",
      "arquivo": "p2_10_timers.md",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "topicoNome": "Interrupções, ISR e Timers",
      "titulo": "P2 10 Timers",
      "conteudo": "# Timers — Prescaler, OCR e Código Final\n\n---\n\n<!-- Slide 84 -->\nInterrupções (prática)\nTemos o mesmo código, mas\nagora com registradores;\nOutra opção é apenas inverter o\nvalor do registrador\nPORTB ^= (1 << PB5 );\nA operação OU-Exclusivo ( ^ ) inverte o valor do bit.\nFunção delay(1000) mantém o\nprocessador “ocupado\" por 1s;\nVamos usar o timer1 para\nsubstituir a função !\n\n<!-- Slide 85 -->\nPreparando o timer1\nEmbora o TCCR1A não seja necessário, ele precisa sofrer reset;\nO Arduíno grava o TCCR1A por padrão para operar o PWM;\nBasta o comando TCCR1A = 0;\n\n<!-- Slide 86 -->\nPreparando o timer1\nUma mudança do LED a cada segundo\nClock de 16MHz = 16 milhões de ciclos por segundo\nContagem máxima do timer1 é 65.536\n16.000.000 / 64\n= 250.000\n⇒inválido (> contagem máxima)\n16.000.000 / 256\n=\n62.500\n⇒válido (escolhido) !\n16.000.000 / 1.024 =\n15.625 ⇒válido !\nPrescaler = 256; Contador = 62.500;\n\n<!-- Slide 87 -->\nPreparando o timer1\nDeinindo o prescaler\nTCCR1B |= (1 << CS12 );\nTCCR1B &= ~(1 << CS11 );\nTCCR1B &= ~(1 << CS10 );\nPara usar o contador\nDeinimos a interrupção pela comparação com o registro A;\nTIMSK1 = (1 << OCIE1A );\nInput Capture\nOverﬂow\n\n<!-- Slide 88 -->\nPreparando o timer1\nCarga do registro A\nDeinimos constantes para facilitar o acesso aos registradores de 16 bits:\nconst uint16_t t1_carga = 0;\nconst uint16_t t1_comparador = 62500;\nRegistradores são carregados dentro da ISR:\nISR( TIMER1_COMPA_vect ) {\nTCNT1 = t1_carga;\nPORTB ^= ( 1 << PB5 );\n}\nTambém é importante habilitar as interrupções\nsei();\n\n<!-- Slide 89 -->\nCódigo Final\nEstrutura loop() só possui delay()\nNenhum código afetará a operação do\nblink();\nISR() pode ser ainda menor\nModo CTC pode ser habilitado;\ntimer1 zera ao alcançar registro A;\nObjetivo é fazer ISR() o menor\npossível.\n(*) Código inspirado no material da SparkFun “Level Up Your\nArduíno Code: Timer Interrupts”\n"
    },
    {
      "id": "p2_interrupcoes_timers",
      "arquivo": "p2_interrupcoes_timers.md",
      "prova": "p2",
      "topico": "p2_interrupcoes_timers",
      "topicoNome": "Interrupções, ISR e Timers",
      "titulo": "P2 Interrupcoes Timers",
      "conteudo": "# Interrupções, ISR e Timers\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** S | **Tópico:** `interrupcoes_timers`\n\n\n\n<!-- Slide 1 -->\n❓ Por que Interrupções?\n\n**Polling (varredura):** MCU fica em loop verificando continuamente se algo aconteceu. Desperdiça CPU, resposta lenta.\n\n**Interrupção:** MCU faz outras coisas normalmente. Quando o evento ocorre, é \"interrompido\" automaticamente para tratar.\n\n> **Analogia:** Polling = olhar pro telefone a cada 5 segundos. Interrupção = telefone tem campainha.\n\n\n\n<!-- Slide 2 -->\n⚡ Como Funciona\n\n```\nCiclo normal:\n  Busca instrução → Decodifica → Executa → Verifica interrupção?\n                                                ↓ Sim\n                                     Salva estado (PC, registradores)\n                                     Salta para ISR\n                                     Executa ISR\n                                     Restaura estado\n                                     Retorna ao ponto original\n```\n\n### Regras da ISR\n\n- ISR deve ser a **mais curta possível**\n- **Proibido** dentro de ISR: `delay()`, `Serial.print()`, cálculos pesados\n- Variáveis compartilhadas com o `loop()` devem ser `volatile`\n\n▶ **PROVA:** ISR = menor possível. Durante a ISR, outras interrupções ficam bloqueadas.\n\n\n\n<!-- Slide 3 -->\n📋 Vetores de Interrupção — ATMega328P\n\n| Vetor | Nome | Evento |\n|-------|------|--------|\n| 1 | **RESET** | Liga MCU, power-on, brown-out, WDT ← **prioridade máxima** |\n| 2 | INT0 | Sinal externo no pino 2 |\n| 3 | INT1 | Sinal externo no pino 3 |\n| 7 | WDT | Watchdog timer |\n| 8–10 | TIMER2 | Timer2 (COMPA, COMPB, OVF) |\n| 11–14 | TIMER1 | Timer1 (CAPT, COMPA, COMPB, OVF) |\n| 15–17 | TIMER0 | Timer0 (COMPA, COMPB, OVF) |\n| 22 | ADC | Conversão ADC completa |\n| 25 | TWI | I2C |\n\n▶ **PROVA:** RESET tem prioridade máxima (vetor 1).\n\n\n\n<!-- Slide 4 -->\n⏱️ Os 3 Timers do ATMega328P\n\n| Timer | Bits | Contagem máx. | Uso no Arduino |\n|-------|------|---------------|----------------|\n| **Timer 0** | 8 bits | 255 | `delay()`, `millis()`, `micros()`, `analogWrite()` pinos 5 e 6 |\n| **Timer 1** | **16 bits** | **65.535** | Servos, `analogWrite()` pinos 9 e 10, captura |\n| **Timer 2** | 8 bits | 255 | `tone()`, `analogWrite()` pinos 3 e 11 |\n\n▶ **PROVA:** Timer 0 controla `millis()` — **não altere seu prescaler**! Use o **Timer 1** pra interrupções próprias.\n\n\n\n<!-- Slide 5 -->\n🔧 Prescaler — Dividindo o Clock\n\nClock do Arduino Uno = **16 MHz** = 16 milhões ciclos/s.\n\nTimer 1 estouraria a cada 4,1 ms sem prescaler. Para intervalos maiores:\n\n| Prescaler | Clock efetivo | Período 1 ciclo | Máximo Timer 1 |\n|-----------|---------------|-----------------|----------------|\n| 1 | 16 MHz | 62,5 ns | 4,1 ms |\n| 8 | 2 MHz | 500 ns | 32,8 ms |\n| 64 | 250 kHz | 4 µs | 262 ms |\n| **256** | **62,5 kHz** | **16 µs** | **~1,05 s** |\n| 1024 | 15,625 kHz | 64 µs | ~4,19 s |\n\n**Bits CS12/CS11/CS10 no TCCR1B:**\n\n| CS12 | CS11 | CS10 | Prescaler |\n|------|------|------|-----------|\n| 0 | 0 | 1 | 1 |\n| 0 | 1 | 0 | 8 |\n| 0 | 1 | 1 | 64 |\n| **1** | **0** | **0** | **256** |\n| 1 | 0 | 1 | 1024 |\n\n\n\n<!-- Slide 6 -->\n🧮 Cálculo — Timer 1 a 1 segundo\n\n**Objetivo:** gerar 1 interrupção por segundo com clock de 16 MHz.\n\n```\nf_clock = 16.000.000 Hz\nOCR1A = f_clock / prescaler / f_desejada - 1\n\nCom prescaler = 256:\nOCR1A = 16.000.000 / 256 / 1 - 1 = 62.499\n\nVerificação: 16.000.000 / 64 = 250.000 → maior que 65.535 → inválido!\n             16.000.000 / 256 = 62.500 → cabe em 16 bits → válido! ✓\n             16.000.000 / 1024 = 15.625 → também válido\n```\n\n▶ **PROVA:** Saber calcular prescaler e OCR1A. 16M/256 = 62.500 → 1 Hz com Timer 1.\n\n\n\n<!-- Slide 7 -->\n💻 Código Completo — Timer 1 substituindo `delay()`\n\n```c\nvoid setup() {\n    // LED no pino 13 (PB5) como saída\n    DDRB |= (1 << PB5);\n\n    // === Configura Timer 1 ===\n    TCCR1A = 0;           // reseta (Arduino usa pra PWM por padrão)\n    TCCR1B = 0;           // zera\n\n    // Prescaler = 256 (CS12=1, CS11=0, CS10=0)\n    TCCR1B |= (1 << CS12);\n\n    // Modo CTC: timer zera automaticamente ao atingir OCR1A\n    TCCR1B |= (1 << WGM12);\n\n    // Valor de comparação: 62.499 (≈1 Hz)\n    OCR1A = 62499;\n\n    // Habilita interrupção por comparação\n    TIMSK1 = (1 << OCIE1A);\n\n    // Habilita interrupções globais\n    sei();\n}\n\nvolatile bool ledState = false;\n\n// ISR disparada a cada 1 segundo\nISR(TIMER1_COMPA_vect) {\n    PORTB ^= (1 << PB5);       // toggle do LED (1 instrução!)\n    ledState = !ledState;       // atualiza variável compartilhada\n}\n\nvoid loop() {\n    // livre pra fazer outras coisas!\n    // o LED pisca pela ISR, independentemente do loop\n}\n```\n\n### Por que `volatile`?\n\nSem `volatile`, o compilador pode guardar `ledState` num registrador de CPU. Se a ISR atualiza na memória, o `loop()` lê o valor antigo (do registrador). `volatile` força reler da memória sempre.\n\n### Modo CTC vs Modo Normal\n\n| Aspecto | Modo Normal | Modo CTC |\n|---------|-------------|----------|\n| Zerar TCNT | Manual na ISR (`TCNT1 = 0`) | **Automático** ao atingir OCR1A |\n| ISR | Precisa de linha extra | **Menor** |\n| Timing | Pequena variação | **Mais preciso** |\n\n\n\n<!-- Slide 8 -->\n📌 Resumo Rápido\n\n- Interrupção = campainha; Polling = ficar verificando\n- ISR = curta, sem delay(), variáveis compartilhadas = volatile\n- Timer 0 = 8 bits = millis/delay (não mexa!)\n- Timer 1 = **16 bits** = interrupções customizadas\n- 16 MHz / 256 = 62.500 → 1 Hz no Timer 1\n- Modo CTC = zera automático = ISR menor = timing mais preciso\n- SET = `|=`, RESET = `&=~`, TOGGLE = `^=`\n"
    },
    {
      "id": "p2_11_projeto_se",
      "arquivo": "p2_11_projeto_se.md",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "topicoNome": "Projeto de SE, Software e Linguagens",
      "titulo": "P2 11 Projeto Se",
      "conteudo": "# Projeto SE: Fases, Software e Comunicação\n\n---\n\n<!-- Slide 90 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nA demanda por SE hoje está em todas as áreas\nEsta icando diícil encontrar um equipamento meramente mecânico ou eletrônico;\nSistemas embarcados melhoram as funcionalidades, aumentam a vida útil, reduzem custo;\nCaminho similar ao da informatização, da internet, e agora da IA.\n\n<!-- Slide 91 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nDeinição de requisitos\nEnvolve diversas disciplinas;\nExige um trabalho bem cuidadoso, para garantir longevidade ao equipamento;\nPode mudar inclusive durante o ciclo de vida do produto (atualização de software).\n\n<!-- Slide 92 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nProjetos multidisciplinares\nPodem inclusive envolver outras áreas (química, bioísica, agronomia, medicina etc);\nDesenvolvidos de forma virtual com auxílio de ferramentas CAx (CAD, CAM, CAE etc);\nHá forte interação entre projetos (espaço ocupado, peso, consumo de energia etc).\n\n<!-- Slide 93 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nProjeto Eletrônico\nTambém é multidisciplinar (elétrica, eletrônica, microcontroladores, sensores, controle etc);\nEnvolve deinição da plataforma (microcontrolador?), sensores, atuadores e componentes;\nIntegração forte com o projeto de software.\n\n<!-- Slide 94 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nProjeto Software\nFortemente afetado pelos requisitos do projeto, e escolhas no projeto eletrônico;\nExige deinições e sofre efeitos bem diferentes dos demais projetos;\nÉ o nosso objeto de estudo nesta aula.\n\n<!-- Slide 95 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nDesign e Simulação\nHá riqueza de ferramentas de software para apoio nesta etapa de projeto;\nTipicamente é possível simular a maior parte dos componentes do projeto;\nComportamentos observados na simulação podem afetar o projeto, exigindo ajustes.\n\n<!-- Slide 96 -->\nFases do Projeto de SE\nDemanda\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nConfecção de Protótipo\nTipicamente, a confecção de um modelo ísico e operacional do projeto é essencial;\nO comportamento do modelo ainda pode afetar o projeto, exigindo modiicações.\n\n<!-- Slide 97 -->\nFases do Projeto de SE\nDeﬁnição\nRequisitos\nProjeto\nMecânico\nProjeto\nEletrônico\nProjeto\nSoftware\nDesign e\nSimulação\nConfecção\nde\nProtótipo\nFabricação\n(projeto piloto,\ntestes ﬁnais?)\nVenda\nImplantação\nSuporte\nDescarte\nDocumentação\nSeleção Fornecedores\nTreinamento\nEtapas posteriores\nObviamente o trabalho não acaba no protótipo;\nUm projeto exige muitas outras preocupações, que podem\ninclusive afetar as primeiras etapas\n\n<!-- Slide 98 -->\nSoftware em SE\nQuem executará o software?\nDeinição tipicamente ocorre durante o projeto de hardware;\nSoluções proprietárias (PLCs);\n\n<!-- Slide 99 -->\nSoftware em SE\nQuem executará o software?\nDeinição tipicamente ocorre durante o projeto de hardware;\nhttps://ladderlogicworld.com/plc-manufacturers/#google_vignette\nOs dez maiores fabricantes:\nFabricantes\nMarca\nSiemens\nSimatic\nRockwell Automation\nAllen Bradley\nMitsubishi Electric\nMelsec\nSchneider Electric\nModicon\nOmron\nSysmac\nEmerson Electric (GE)\nRX3i & VersaMax (GE Fanuc)\nKeyence\nKV & V-8000\nABB (B&R Automation)\nAC500 X20 & X90\nBosch\nRexroth ICL\nHitachi\nEH & H\n\n<!-- Slide 100 -->\nSoftware em SE\nNorma IEC 61131-3 (1993 ~ 2013)\nPromover interoperabilidade entre diferentes fabricantes de PLCs;\nDeine, entre outras coisas, 5 linguagens de programação padrão\nLD (Ladder Diagram) - gráica;\nFBD (Function Block Diagram) - gráica;\nST (Structured Text) - textual;\nIL (Instruction List) - textual (descontinuada);\nSFC (Sequencial Function Chart) - gráica.\nTecnologia, no entanto, continua fechada\nNão há acesso ao software, nem à arquitetura de hardware;\nRestrições levaram à busca por plataformas abertas;\nMotivação para estudo dos microcontroladores em sistemas de\nautomação, ou seja, nossa disciplina !\n\n<!-- Slide 101 -->\nSoftware em SE\nMicrocontroladores utilizados em PLCs\nEm sistemas menores, linha PIC e ARM Cortes M3 ou M4, ou FPGAs;\nEm sistemas de grande porte, ARM Cortes A8 e A9, e microprocessadores.\nTecnologia aberta\nPromove a redução signiicativa de custos;\nGarante lexibilidade, por não depender de soluções proprietárias.\nOpenPLC - uma iniciativa de tecnologia aberta\nIniciativa do projeto de doutorado de Thiago Rodrigues Alves\nSuporta as 5 linguagem padrão deinidas pela IEC 61131-3\nPode ser executada nas plataformas PIC, Arduíno, ESP, Raspberry Pi etc.\nhttps://autonomylogic.com/\nhttps://www.youtube.com/watch?v=cNg-tXZynJE\n\n<!-- Slide 102 -->\nPrograma “aberto\" MCUs\nCódigo Fonte:\ninstr.1\ninstr.2\ninstr.3\n.\n.\ninstr.n\ntest.java\ntest.c\ninstr.1, instr.2, instr.3 …\ntest.asm\nMCU\nCompilador C\nBibliotecas C\n#include\nCompilador\nJava\nBibliotecas\nJava\nimport\nJVM\nJava\nVirtual\nMachine\nInterpretador\nPython\nBibliotecas\nPython\nimport\nPVM\nPython\nVirtual\nMachine\nProgramação Assembly\n• Não há necessidade de compilação, exceto para\nconversão dos mnemônicos em instruções de\nlinguagem de máquina com o \"Assembler\";\n• Maior performance e menor código possível;\n• Baixíssima portabilidade;\n•Alta complexidade\n\n<!-- Slide 103 -->\nConjunto de Instruções\nPIC16F877 Instruction Set https://ww1.microchip.com/downloads/en/DeviceDoc/31029a.pdf\n\n<!-- Slide 104 -->\nConjunto de Instruções\nDeine instruções em “linguagem de máquina”\nreconhecidas pelo dispositivo\nA programação tipicamente é realizada em “assembly”, que representa\ncada instrução com uma sigla (mneumônico);\nVeremos outras formas mais simples de programar um\nmicrocontrolador ao longo da disciplina.\nArquiteturas RISC x CISC\n(Reduced / Complete) Instruction Set Computer;\nO PIC16F877, por exemplo, possui apenas 35 instruções (RISC),\ndivididas em seis grupos;\nRISC tipicamente oferece performance maior, porém traz desaios para a\nprogramação.\n\n<!-- Slide 105 -->\nPrograma “aberto\" MCUs\nCódigo Fonte:\ninstr.1\ninstr.2\ninstr.3\n.\n.\ninstr.n\ntest.java\ntest.c\ninstr.1, instr.2, instr.3 …\ntest.asm\nMCU\nCompilador C\nBibliotecas C\n#include\nCompilador\nJava\nBibliotecas\nJava\nimport\nJVM\nJava\nVirtual\nMachine\nInterpretador\nPython\nBibliotecas\nPython\nimport\nPVM\nPython\nVirtual\nMachine\nProgramação C, C++\n• Boa performance e código reduzido;\n• Boa portabilidade, embora aceite código\nespecíico;\n• Complexidade baixa;\n• Bom conjunto de bibliotecas para funções\nbásicas.\n\n<!-- Slide 106 -->\nPrograma “aberto\" MCUs\nCódigo Fonte:\ninstr.1\ninstr.2\ninstr.3\n.\n.\ninstr.n\ntest.java\ntest.c\ninstr.1, instr.2, instr.3 …\ntest.asm\nMCU\nCompilador C\nBibliotecas C\n#include\nCompilador\nJava\nBibliotecas\nJava\nimport\nJVM\nJava\nVirtual\nMachine\nInterpretador\nPython\nBibliotecas\nPython\nimport\nPVM\nPython\nVirtual\nMachine\nProgramação Java\n• Incomum na programação de SE;\n• Incorpora o conceito de Máquina Virtual, que\ntrouxe um nível elevado de portabilidade.\n\n<!-- Slide 107 -->\nPrograma “aberto\" MCUs\nCódigo Fonte:\ninstr.1\ninstr.2\ninstr.3\n.\n.\ninstr.n\ntest.java\ntest.c\ninstr.1, instr.2, instr.3 …\ntest.asm\nMCU\nCompilador C\nBibliotecas C\n#include\nCompilador\nJava\nBibliotecas\nJava\nimport\nJVM\nJava\nVirtual\nMachine\nInterpretador\nPython\nBibliotecas\nPython\nimport\nPVM\nPython\nVirtual\nMachine\nProgramação Python\n• Tipicamente é interpretada, e não compilada.\nOpera inclusive em modo interativo;\n• Possui um conjunto robusto de bibliotecas com\nfuncionalidades de IA, aprendizado de máquina,\nreconhecimento de imagens etc.\n\n<!-- Slide 108 -->\nCompiladores especiais\nCross Compilers\nCriam códigos executáveis para dispositivos diferentes de onde o\ncompilador foi executado;\nTipicamente utilizado na programação de MCUs e outros dispositivos\nque não suportam adequadamente a operação de um compilador;\nTambém são utilizados na programação de celulares, smartwatches etc.\nSource-to-source Compilers\nTransforma um código fonte escrito em uma linguagem de\nprogramação para outra linguagem;\nExistem exemplos para converter LD (Ladder Diagram) para C++, por\nexemplo.\n\n<!-- Slide 109 -->\nSoftware em SE\nParâmetros importantes a serem avaliados\nPerformance: quanto mais baixo o nível, mais rápido;\nOcupação de Memória: quanto mais baixo o nível, menor ocupação;\nGrau de abstração: quanto mais alto o nível, maior a abstração;\nPortabilidade: linguagens de alto nível e Máquinas Virtuais ajudam;\nReuso & Bibliotecas: maior a participação de mercado ajuda;\nDocumentação e recursos de apoio: idem acima.\nCabe ao projetista a análise\nCusto e tempo de desenvolvimento/testes;\nDireitos autorais.\n\n<!-- Slide 110 -->\nOutros componentes de SW\nSoftware Básico\nBootloader\nNos computadores, carrega o SO da unidade de disco;\nSoftware de inicialização, tipicamente associado a uma placa de protótipo;\nConiguração Básica de módulos internos (Wi-Fi, UART etc)\nPermite a carga de sketches;\nSistema Operacional\nTipicamente ausente nos MCUs, pode ser encontrado nos SBC (Single Board Computers);\nIncorpora funcionalidades importantes, porém consome recursos para sua execução.\nRTOS (Real Time Operational System)\nPara microcontroladores, especialmente em aplicações multitarefa e em tempo real;\nTrata problemas de compartilhamento de recursos, sincronismo e priorização.\nIntegração com recursos na nuvem\nDiversos recursos são oferecidos na nuvem, especialmente para IoT.\n\n<!-- Slide 111 -->\nCarga da memória Flash\nEm um microcontrolador, o sketch,\nalém de outros componentes, icam\narmazenados na memória Flash do\ndispositivo;\nNão há interfaces acessíveis\ndiretamente pelo programador. Sendo\nassim, são duas as opções para carga da\nFlash:\nAcesso via USB nas placas de protótipo,\ncomandado pelo bootloader previamente\ngravado no microcontrolador;\nAcesso via ISP (In-Circuit Serial\nProgrammer) por um device programmer.\nPICkit 3, device programmer\npopular para microcontrola-\ndores da linha PIC\n\n<!-- Slide 112 -->\nCarga via USB\nAlgumas placas de protótipo\noferecem portas USB integradas\nLinha Arduíno;\nLinha ESP.\nAlgumas oferecem conexões através\nde adaptadores USB externos\nEx.: ESP01 (ao lado)\nCom o bootloader previamente carregado\nna Flash, basta conectar um computador\ncom uma IDE instalada, e seguir o\nprocedimento indicado pelo fabricante.\n\n<!-- Slide 113 -->\n* D10 é utilizado apenas no ISP.\nDevice Programmer\nUma placa de protótipo pode ser usada como\ndevice programmer. No exemplo, temos 2\nArduínos Uno, um \"programando\" o outro;\nA memória Flash do\nATMega328P deste Arduíno\nUno está sendo gravada.\nEste Arduíno é o device\nprogrammer, conectado ao\ncomputador com a IDE\ndevidamente conﬁgurada.\nISP\nDestino\nPino Conector ICSP\nVcc\nVcc\nGND\nGND\nMOSI/D11\nMOSI\nMISO/D12\nMISO\nSCK/D13\nSCK\nD10 (*)\nReset\nNa família Arduíno, temos um\nconector dedicado, o ICSP (In-Circuit\nSerial Programming).\n\n<!-- Slide 114 -->\n* D10 é utilizado apenas no ISP.\nDevice Programmer\nUma placa de protótipo pode ser usada como\ndevice programmer. No exemplo, temos 2\nArduínos Uno, um \"programando\" o outro;\nA memória Flash do\nATMega328P deste Arduíno\nUno está sendo gravada.\nEste Arduíno é o device\nprogrammer, conectado ao\ncomputador com a IDE\ndevidamente conﬁgurada.\nISP\nDestino\nPino Conector ICSP\nVcc\nVcc\nGND\nGND\nMOSI/D11\nMOSI\nMISO/D12\nMISO\nSCK/D13\nSCK\nD10 (*)\nReset\nNa família Arduíno, temos um\nconector dedicado, o ICSP (In-Circuit\nSerial Programming).\n\n<!-- Slide 115 -->\n“Programadores\" externos\nOferecem solução mais robusta:\nNão dependem de conexões temporárias;\nSão fornecidas pelos fabricantes dos\nmicrocontroladores.\nNa família Arduíno temos algumas\nopções, como USBasp e o AVRISP MkII;\nNa família PIC, o PICKit 3 é bastante\nutilizado;\nESP32 utiliza ISP por UART, ou\nprogramadores para módulos sem\ninterfaces;\nOutros métodos: JTAG e SWD.\nProgramador USBasp em um Arduíno Uno\nPICKIT3 - programação da linha PIC\n\n<!-- Slide 116 -->\nISP: Conexão e Protocolo\nConexão e protocolo depende da linha de\nmicrocontrolador;\nNa linha Arduíno e PIC, é utilizado o SPI, com um\nconector dedicado de 6 pinos na linha Arduíno\n(ICSP);\nOs pinos conectados são similares aqueles\nutilizados no SPI, saindo do programador:\nMOSI : Envio de dados;\nMISO : Recebe dados;\nSCK: clock síncrono gerado pelo programador;\nVTG e GND: pinos de alimentação..\nRESET: utilizado para iniciar o modo de programação.\nNo ESP32, utiliza-se o SPI com UART ou JTAG\nConector ICSP (linha Arduino)\n\n<!-- Slide 117 -->\nDispositivos de Entrada\nDispositivos especiais (giroscópio, acelerômetro, RTC)\n\n<!-- Slide 118 -->\nComunicação em SE\nEm Sistemas Embarcados,\nmicrocontroladores e sensores\nprecisam se comunicar\nSinais elétricos (portas analog./digitais);\nInterfaces cabeadas;\nInterfaces sem io.\nHá diversos padrões internacionais\nTambém há soluções proprietárias\nEx. ESP-Now\nIlustração gerada no imagine.art (IA)\nUART\nZigBee\nBluetooth\ni2C\nEthernet\nCAN\nSPI\nWi-Fi\nLoRa\n\n<!-- Slide 119 -->\nComunicação - Protocolos\nProtocolo Mídia\nTaxa\nAlcance Aplicação Típica\nUART\nCabeada\n< 5Mbps\n1 Km\nMuito simples, 2 ios, baixa performance, dois pontos,\nassíncrono, full-duplex, compatibilidade universal.\ni2C\nCabeada\n< 5Mbps\n100 m\nSimples, barramento 2 ios, baixa performance, até 1008\npontos, síncrono, Half-duplex, múltiplos controladores.\nSPI\nCabeada\n< 65Mbps\n10 m\nComplex.Média, barramento 4 ios, alta performance, “n\"\npontos (?), síncrono, full-duplex, 1 controlador.\nZigBee\nSem io\n< 250 Kbps 100 m\nSimples, topologias estrela, árvore ou mesh, baixa\nperformance, nº pontos (topologia ?) e baixo consumo.\nCAN\nCabeada\n< 1 Mbps\n1 Km\nComplex.Média, barramento 2 ios, média performance,\n“n\" pontos, assíncrono, full-duplex, 1 controlador.\nLoRa\nSem io\n< 5 Kbps\n10 Km\nSimples, topologia estrela ou mesh, baixíssima\nperformance, “n” pontos, baixo consumo.\nESP-Now\nSem io\n< 1 Mbps\n480 m\nSimples, topologia estrela ou ponto a ponto, alta\nperformance, 20 pontos, baixo consumo.\n\n<!-- Slide 120 -->\nA opção UART\nÉ um protocolo clássico, base de\ntodas as comunicações seriais,\ncomo o RS-232, por exemplo;\nÉ assíncrono (não utiliza clock);\nSimplex, Half ou Full-duplex;\nTx\nRx\nGND\nTx\nRx\nGND\n\n<!-- Slide 121 -->\nA opção UART\nÉ um protocolo clássico, base de\ntodas as comunicações seriais,\ncomo o RS-232, por exemplo;\nÉ assíncrono (não utiliza clock);\nSimplex, Half ou Full-duplex;\nCompatibilizar níveis de tensão\nMicrocontroladores e sensores nem\nsempre usam o mesmo nível de tensão;\n3,3 V →5V : ok ?\n5V →3,3V : não interligar !\nDivisores de tensão ou conversores de\nnível (foto) podem ser utilizados.\n\n<!-- Slide 122 -->\nA opção UART\nÉ um protocolo clássico, base de\ntodas as comunicações seriais,\ncomo o RS-232, por exemplo;\nÉ assíncrono (não utiliza clock);\nSimplex, Half ou Full-duplex;\nCompatibilizar níveis de tensão;\nSão 3 as informações de\nconiguração:\nTaxa de transferência;\nComprimento em bits (5 a 9, típico 7-8);\nstart e stop bits;\nTaxas Típicas\n4.800 bps\n9.600 bps\n19.200 bps\n57.600 bps\n115.200 bps\n\n<!-- Slide 123 -->\nUART Formato de quadro\nbits de dados (8)\n1000 0010 (LSB) = 0100 0001 (“A\")\nlivre\n(nível 1)\nlivre\n(nível 1)\n1 start bit\n(rampa descida)\n1 stop bit\n(rampa subida)\nparidade\n(opcional, e neste caso, par)\n(*) Nível 1: “mark”; nível 0: \"space\"\n\n<!-- Slide 124 -->\nUART Programação\nTomando como exemplo o Arduíno, temos os seguintes\nprocedimentos para transmissão e recepção:\nTransmissão:\nFunciona como uma impressão serial;\nO processo envolve:\nSerial.begin( taxa,[configuração] )\nFunção Serial.print p/ transmissão.\nRecepção:\nVarredura frequente do buffer de\nentrada, ou por interrupção.\nO processo envolve:\nSerial.begin( taxa,[configuração] )\nVerificar Serial.available()\nArmazenar mensagem em variável\ninChar = Serial.read()\n(*) Conﬁguração Padrão: 8 bits de dados, 1 de parada, sem paridade (SERIAL_8N1)\n\n<!-- Slide 125 -->\nA opção I2C\nProtocolo criado pela Philips em 1982\nO I2C não deine todos os seus aspectos;\nNome, conector, e até mesmo tensão de operação são variáveis;\nÉ muito comum internamente em celulares e outros dispositivos.\nOpera em diversos modos\nUtiliza 2 ios: SCL (clock) e SDA (serial data)\nStandard (Sm)\n100Kbps\nHigh-Speed (Hs)\n1,7Mbps\nFast (Fm)\n400Kbps\nHigh-Speed (Hs)\n3,4Mbps\nFast plus (Fm+)\n1Mbps\nUltra-Fast (UFm)\n5Mbps (Unidirecional)\n\n<!-- Slide 126 -->\nI2C - Topologia\nBarramento único\nAdmite entrada e saída de dispositivos a qualquer momento;\nCada dispositivo possui um endereço que o identiica.\nSDA\nSCL\nVcc\n\n<!-- Slide 127 -->\nI2C - Formato de Quadro\n(*) Slides obtidos no vídeo “Understanding I2C” da Rohde Schwarz\n\n<!-- Slide 128 -->\nI2C - Formato de Quadro\nO valor “1\" identiica que o\nbarramento está livre;\nSequência determina star bit\nSDA desce, seguido por SCL;\n\n<!-- Slide 129 -->\nI2C - Formato de Quadro\nCada dispositivo tem\num endereço de 7\nbits\nComeça pelo MSB;\nEndereço pode ser ixo,\nou modiicado por\nalterações na placa de\ncircuito impresso do\ndispositivo.\n\n<!-- Slide 130 -->\nI2C - Formato de Quadro\nO bit R/W vem logo após o endereço, e é deinido pelo Master\n0 →Mestre escreve no escravo;\n1 →Mestre lê o escravo;\n\n<!-- Slide 131 -->\nI2C - Formato de Quadro\nDeinido pelo receptor, vai\npara zero para\nconirmação\n1 →Condição livre do\nbarramento = NACK;\nACK após dados\nConirme recebimento dos\ndados;\nACK após endereço do\nescravo\nEscravo com aquele endereço\nexiste;\nPronto para ler / escrever, de\nacordo com R/W.\n\n<!-- Slide 132 -->\nI2C - Topologia\nÉ comum encaminhar mais de um bloco de dados\nCada bloco individual tem sua conirmação (Ack) especíica;\nO I2C não deine conteúdos, qualquer bloco pode transmitir\nqualquer coisa, mas …\n… é comum, na escrita de registradores de periféricos, que o primeiro bloco\ncontenha o encereço, e o segundo os dados a serem escritos, por exemplo.\n\n<!-- Slide 133 -->\nI2C - Formato de Quadro\nTudo ocorre de forma similar ao\nstart bit;\nA sequência inversa determina\nstop bit\nSCL sobe, seguido por SDA;\n\n<!-- Slide 134 -->\nI2C Programação\nTomando como exemplo o Arduíno, temos os seguintes\nprocedimentos para transmissão e recepção:\nTransmissão:\nO processo envolve:\n#include wire.h\nwire.begin( endereço )\nwire.write( mensagem )\nRecepção:\nO processo envolve:\n#include wire.h\nwire.begin( endereço )\nChar = wire.read\n\n<!-- Slide 135 -->\nA opção\nProtocolo proprietário da Expressif, fabricante do ESP8266\ne ESP32\nUtiliza o transceptor de 2,4 GHz já existente para Bluetooth e Wi-Fi;\nUtiliza um padrão de transmissão similar aos teclados e mouses sem io;\nNão exige infraestrutura Wi-Fi (roteador, por exemplo);\nAceita comunicação uni e bidirecional com conexões persistentes;\nAlgumas limitações\nMaior pacote deve ter 250 Bytes (mas permanece útil para SE);\nPodem haver entre 6 e 20 estações, a depender do modo de operação, e\ndo uso de criptograia.\n\n<!-- Slide 136 -->\nESP-NOW Unidirecional\nUm emissor (iniciator) e um\nreceptor (responder);\nIniciator\nResponder\n\n<!-- Slide 137 -->\nESP-NOW Unidirecional\nUm emissor (iniciator) e um\nreceptor (responder);\nUm emissor e vários receptores\nindividualmente, ou em broadcast\n(para todos);\nIniciator\nResponder\nResponder\nResponder\n\n<!-- Slide 138 -->\nESP-NOW Unidirecional\nUm emissor (iniciator) e um\nreceptor (responder);\nUm emissor e vários receptores\nindividualmente, ou em broadcast\n(para todos);\nVários emissores individualmente\nou simultaneamente;\nResponder\nIniciator\nIniciator\nIniciator\n\n<!-- Slide 139 -->\nESP-NOW Bidirecional\nDois dispositivos podem transmitir\ne ler ao mesmo tempo, atuando\nsimultaneamente como emissor e\nreceptor;\nIniciator /\nResponder\nIniciator /\nResponder\n\n<!-- Slide 140 -->\nESP-NOW Bidirecional\nDois dispositivos podem transmitir\ne ler ao mesmo tempo, atuando\nsimultaneamente como emissor e\nreceptor;\nTodos os dispositivos podem se\ncomunicar com qualquer outro nas\nduas direções.\nIniciator /\nResponder\nIniciator /\nResponder\nIniciator /\nResponder\nIniciator /\nResponder\n\n<!-- Slide 141 -->\nESP-NOW Endereçamento\nUtilizar o MAC Address do\ndispositivo para identiicá-lo como\ndestinatário;\nO MAC Address é um número\nhexadecimal de 6 dígitos único\ngravado pelo fabricante;\n(*) O ESP-NOW não suporta endereços de\nbroadcast (FF:FF:FF:FF:FF:FF), mas existe\nforma de fazer um pseudo-broadcast.\nPara obter o endereço, pode-se usar\no sketch ao lado, ou mesmo veriicar\nas mensagens de inicialização do\ndispositivo.\n\n<!-- Slide 142 -->\nFunções de callback\nPara a comunicação usando o ESP-NOW, utilizamos duas\nfunções, chamadas na transmissão e recepção:\nesp_now_register_send_cb()\nUtilizada na transmissão, retorna\nstatus de envio e recepção;\nO processo envolve:\nIniciar o ESP-NOW\nRegistrar a função de callback\nAdicionar um receptor (MAC\nAddress)\nEnviar a mensagem\nesp_now_register_rcb_cb()\nUtilizada na recepção, retorna os\ndados recebidos;\nO processo envolve:\nIniciar o ESP-NOW\nRegistrar a função de callback\nSalvar a mensagem recebida\n\n<!-- Slide 143 -->\nReceptor\n\n<!-- Slide 144 -->\nTransmissor\n\n<!-- Slide 145 -->\nProtocolos para IoT\nAssim como no OSI, os protocolos\nIoT também são dispostos em\ncamadas. Há modelos\nalternativos:\n3 camadas: percepção, rede e\naplicação;\n4 camadas: percepção, suporte,\nrede e aplicação;\n5 camadas: percepção, transporte,\nprocessamento, aplicação e negócios.\nDiversidade grande de protocolos, alguns novos, aplicados em IoT. Nas\ncamadas mais altas, entre outros, temos:\nHTTP: Hiper Text Transfer Protocol\nMQTT: Message Queuing Telemetry Transport\n\n<!-- Slide 146 -->\nHTTP (Hiper Text Transfer Protocol)\nO protocolo utiliza o TCP, e vem sendo aproveitado para outras\naplicações diferentes do objetivo inicial (navegadores WEB)\nSimplicidade de especiicação de protocolo\nEstabilidade operacional\nTradicionalmente, o HTTP operava com requisições e respostas\nCada acesso envolvia o estabelecimento de uma conexão, transferência\ndas informações e encerramento da conexão;\nPara garantir aplicações em tempo real / interativas, surgiu o HTTP\nWebsockets e o HTTP Push;\n\n<!-- Slide 147 -->\nHTTP (Hiper Text Transfer Protocol)\nHTTP Websockets\nPermite conexões persistentes e bidirecionais;\nHTTP Push\nTambém chamado de HTTP Streaming, permite que servidores\nenviem respostas aos seus clientes independentes de requisições;\nPermite atualizações em tempo real e comunicações orientadas a\neventos;\nAplicação\nO uso do HTTP é particularmente interessante quando a aplicação tem\ninteração via WEB;\n\n<!-- Slide 148 -->\nMQTT (Message Queuing Telemetry Transport)\nCriado por Andy Standor-Clark (IBM) e Arlen Nipper (Cirrus Link)\n[1999]\nOriginalmente criado para monitorar sensores em oleodutos através de satélites, foi\nliberado ao público em 2010, na sua versão 3.1;\nVersão 5.0 (atual) lançada em março de 2019;\nSatélites com poucos recursos, e muito caros. Os objetivos eram:\nPacotes de tamanho reduzido;\nConexões TCP/IP persistentes e com cabeçalho reduzido;\nModelo de publicação e assinatura;\nOpções de entrega coniáveis em redes pouco coniáveis.\nProtocolo leve, com payload binário\nUma mensagem MQTT pode ter apenas 2 Bytes !\nClientes/dispositivos de baixo consumo;\nTaxas de transferência reduzidas (Ex.LoRa);\n\n<!-- Slide 149 -->\nMQTT - Topologia\nBroker\npublish\npublish\npublish\npublish\npublish\nsubscribe\nsubscribe\nsubscribe\nsubscribe\n\n<!-- Slide 150 -->\nModelo de Publicação / Assinatura\nDeine dois componentes: os clientes e os brokers;\nClientes podem publicar (publishers) ou acessar informações (subscribers)\nO acesso tipicamente se dá através de uma estrutura de tópicos pré-deinida,\nonde clientes são “assinantes” ou através de iltros especíicos;\nBrokers atuam como intermediários, responsáveis por receber informações\n\"publicadas\", e entregar estas informações para os clientes “assinantes”\nDisponíveis em plataformas abertas e gratuitas (Ex. Mosquitto, HiveMQ etc);\nSeu modelo “desacoplado\" habilita aplicações eicientes e escaláveis\nSuporte a ambientes com comunicação instável ?\nIndependência dos processos de envio e recepção;\nNão é necessário um POST para cada cliente, como no HTTP.\nMQTT - Topologia\n\n<!-- Slide 151 -->\nMQTT - Tópicos\ncasa/terreo/sala/temperatura\ncasa/terreo/sala/brilho\ncasa/terreo/porta/status\ncasa/terreo/cozinha/luz\ncasa/1oPav/suite/temperatura\ncasa/1oPav/suite/brilho\ncasa/1oPav/quarto/temperatura\ncasa/1oPav/quarto/brilho\njardim/luz\njardim/umidade\njardim/irrigação\npublisher\nsubscriber\nsubscriber\n\n<!-- Slide 152 -->\nMQTT - Tópicos\nWildcards (coringas): o MQTT admite\ndois caracteres especiais que\nfuncionam como coringas na\nidentiicação de tópicos:\ncasa/terreo/sala/temperatura\ncasa/terreo/sala/brilho\ncasa/terreo/porta/status\ncasa/terreo/cozinha/luz\ncasa/1oPav/suite/temperatura\ncasa/1oPav/suite/brilho\ncasa/1oPav/quarto/temperatura\ncasa/1oPav/quarto/brilho\njardim/luz\njardim/umidade\njardim/irrigação\n\n<!-- Slide 153 -->\nMQTT - Tópicos\nWildcards (coringas): o MQTT admite\ndois caracteres especiais que\nfuncionam como coringas na\nidentiicação de tópicos:\n+ : para substituição de um nível. Se um assinante\nselecionar o tópico casa/1oPav/+/temperatura ,\nele receberá as informações de temperatura dos\ndois cômodos do primeiro pavimento;\n# : se for assinado o tópico casa/terreo/# , o\nassinante receberá todas as informações\nenviadas para os quatro primeiros tópicos.\ncasa/terreo/sala/temperatura\ncasa/terreo/sala/brilho\ncasa/terreo/porta/status\ncasa/terreo/cozinha/luz\ncasa/1oPav/suite/temperatura\ncasa/1oPav/suite/brilho\ncasa/1oPav/quarto/temperatura\ncasa/1oPav/quarto/brilho\njardim/luz\njardim/umidade\njardim/irrigação\n\n<!-- Slide 154 -->\nMQTT - Tópicos\nWildcards (coringas): o MQTT admite\ndois caracteres especiais que\nfuncionam como coringas na\nidentiicação de tópicos:\n+ : para substituição de um nível. Se um assinante\nselecionar o tópico casa/1oPav/+/temperatura ,\nele receberá as informações de temperatura dos\ndois cômodos do primeiro pavimento;\n# : se for assinado o tópico casa/terreo/# , o\nassinante receberá todas as informações\nenviadas para os quatro primeiros tópicos.\ncasa/terreo/sala/temperatura\ncasa/terreo/sala/brilho\ncasa/terreo/porta/status\ncasa/terreo/cozinha/luz\ncasa/1oPav/suite/temperatura\ncasa/1oPav/suite/brilho\ncasa/1oPav/quarto/temperatura\ncasa/1oPav/quarto/brilho\njardim/luz\njardim/umidade\njardim/irrigação\n\n<!-- Slide 155 -->\nMQTT - QoS\nNível 0 (at most once)\nCada mensagem é enviada apenas uma vez;\nNão há requerimento de conirmação - mensagens podem ser perdidas;\nMenor tamanho de mensagem;\nNível 1 (at least once)\nCada mensagem precisa ser conirmada;\nSe a falha de rede ocorrer na conirmação, mensagens podem chegar mais de uma vez;\nMensagens precisam ser idempotentes;\nNível 2 (exactly once)\nCada mensagem só chega uma vez, e é conirmada;\nProtocolo complexo (4 etapas de handshake) - mensagens maiores e mais lentas;\nSessões persistentes\nMensagens Nível 1 e 2 são enileiradas para envio após eventuais falhas temporárias de rede.\n\n<!-- Slide 156 -->\nHTTP x MQTT\nHTTP WEBSOCKETS\nMQTT\nModelo\nFull-duplex, Bidirecional\nPublicação / Assinatura\nEndereçamento\nURIs\nTópicos\nProtocolo de Transporte\nTCP\nTCP, UDP\nAcompanhamento Cliente\nN/D\nMensagens\nRetenção de Mensagens\nN/D\nSim\nModo de envio de mensagens\nBidirecional\nAssíncrono\nArquitetura\nCliente/Servidor\nCliente/Servidor\nConﬁabilidade das Mensagens\nWebSockets\nQoS níveis 1 e 2\n\n<!-- Slide 157 -->\nFim\n"
    },
    {
      "id": "p2_projeto_se_software",
      "arquivo": "p2_projeto_se_software.md",
      "prova": "p2",
      "topico": "p2_projeto_se_software",
      "topicoNome": "Projeto de SE, Software e Linguagens",
      "titulo": "P2 Projeto Se Software",
      "conteudo": "# Projeto de SE, Software e Linguagens\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** A | **Tópico:** `projeto_se_software`\n\n\n\n<!-- Slide 1 -->\n🏭 Fases do Projeto de SE\n\n```\nDemanda → Requisitos → [Mec + Elet + SW em paralelo] → Simulação → Protótipo → Fabricação → Venda\n```\n\n### Fase 1 — Definição de Requisitos\n\n- Envolve **múltiplas disciplinas** (não só eletrônica!)\n- Define o que o sistema DEVE e NÃO DEVE fazer\n- Pode mudar durante o ciclo de vida (atualizações OTA)\n\n▶ **PROVA:** Definição de requisitos = **multidisciplinar**. Não é exclusividade de uma área.\n\n### Fase 2 — Projeto Multidisciplinar (paralelo)\n\n**Projeto Mecânico:** caixa, dimensões, peso. Usa ferramentas CAD/CAM/CAE.\n\n**Projeto Eletrônico:**\n- Escolha da plataforma (qual MCU?)\n- Sensores, atuadores, componentes\n- Esquemático + layout PCB\n\n**Projeto de Software:**\n- Fortemente afetado pelos requisitos e pelo hardware\n- **É nosso objeto de estudo** na disciplina\n\n### Fases Finais\n\nDesign e Simulação → Protótipo → Fabricação → Venda → Suporte → Descarte.\nAlém disso: Documentação, Treinamento, Seleção de Fornecedores.\n\n\n\n<!-- Slide 2 -->\n🏭 PLCs e a Norma IEC 61131-3\n\n**PLC** = Programmable Logic Controller. Computador industrial para automação.\n- Hardware robusto (temperatura, vibração, EMI)\n- Tecnologia **fechada e proprietária** por fabricante\n- Solução motivou busca por plataformas abertas\n\n### Norma IEC 61131-3 — As 5 Linguagens\n\n| Linguagem | Tipo | Situação |\n|-----------|------|---------|\n| **LD** — Ladder Diagram | Gráfica | Ativa |\n| **FBD** — Function Block Diagram | Gráfica | Ativa |\n| **SFC** — Sequential Function Chart | Gráfica | Ativa |\n| **ST** — Structured Text | Textual | Ativa |\n| **IL** — Instruction List | Textual | **Descontinuada** |\n\n▶ **PROVA:** São **5 linguagens**: LD, FBD, ST, IL, SFC. **IL foi descontinuada**. Cai muito em prova.\n\n**OpenPLC:** Iniciativa open source de Thiago Rodrigues Alves. Suporta as 5 linguagens e roda em Arduino, ESP, Raspberry Pi.\n\n\n\n<!-- Slide 3 -->\n💻 Linguagens de Programação para MCUs\n\n| Linguagem | Performance | Portabilidade | Complexidade | Uso em SE |\n|-----------|-------------|---------------|--------------|-----------|\n| **Assembly** | Máxima | Mínima | Alta | Rotinas críticas |\n| **C / C++** | Alta | Boa | Baixa | **Dominante em SE** |\n| **Java** | Média | Alta (JVM) | Média | Incomum em SE |\n| **Python** | Baixa | Alta | Mínima | MicroPython (ESP, RP2040) |\n\n### RISC vs CISC\n\n| Aspecto | RISC | CISC |\n|---------|------|------|\n| Instruções | Poucas, simples | Muitas, complexas |\n| Performance | Alta | Variável |\n| Exemplo | **PIC16F877 (35 instruções)**, AVR, ARM | x86 (Intel/AMD) |\n\n▶ **PROVA:** PIC16F877 = **35 instruções** = RISC. Frase clássica de prova.\n\n### Compiladores Especiais\n\n**Cross Compiler:** gera executável para arquitetura **diferente** de onde compila.\n- Ex.: compilar no PC (x86) para rodar no ATMega (AVR)\n- Essencial para MCUs sem recursos para rodar compilador\n\n**Source-to-Source (Transpiler):** converte código de uma linguagem para outra.\n- Ex.: LD (Ladder) → C++\n\n▶ **PROVA:** Cross compiler = gera código para **outro** dispositivo, não o mesmo.\n\n\n\n<!-- Slide 4 -->\n🔧 Outros Componentes de Software\n\n### Bootloader\n- Roda antes do sketch\n- Configura hardware básico (clock, periféricos)\n- Permite carregar novo sketch via USB\n- Ocupa os últimos ~2 KB da Flash\n\n### Sistema Operacional\n- Tipicamente **ausente** em MCUs simples\n- Presente em **SBCs** (Raspberry Pi, BeagleBone — rodam Linux)\n- Consome recursos (memória, CPU)\n\n### RTOS — Real Time Operating System\n- Para MCUs com **múltiplas tarefas em tempo real**\n- Exemplos: FreeRTOS, Zephyr, RTEMS\n- Oferece: escalonamento com prioridades, semáforos, mutexes, filas\n- Garante **determinismo** — tarefa de alta prioridade roda dentro do tempo máximo\n\n▶ **PROVA:** RTOS = multitarefa em tempo real + determinismo. Diferente de SO convencional.\n\n\n\n<!-- Slide 5 -->\n📌 Resumo Rápido\n\n- Requisitos = multidisciplinar, pode mudar durante o ciclo de vida\n- IEC 61131-3 = **5 linguagens** (LD, FBD, ST, IL, SFC) — **IL descontinuada**\n- C/C++ = dominante em SE\n- **PIC16F877 = 35 instruções = RISC**\n- Cross compiler = gera para **outro** dispositivo\n- Bootloader = carga de sketch via USB (sem ISP externo)\n- RTOS = tempo real + determinismo + escalonamento\n"
    },
    {
      "id": "p2_comunicacao_uart_i2c",
      "arquivo": "p2_comunicacao_uart_i2c.md",
      "prova": "p2",
      "topico": "p2_comunicacao_uart_i2c",
      "topicoNome": "Comunicação: UART, I2C, SPI, ESP-NOW",
      "titulo": "P2 Comunicacao Uart I2C",
      "conteudo": "# Comunicação em SE — UART, I2C, SPI, ESP-NOW\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** S | **Tópico:** `comunicacao_uart_i2c`\n\n\n\n<!-- Slide 1 -->\n📡 Visão Geral dos Protocolos\n\n| Protocolo | Mídia | Taxa | Alcance | Pontos | Sinc. | Duplex |\n|-----------|-------|------|---------|--------|-------|--------|\n| **UART** | Cabeada | <5 Mbps | 1 km | 2 | Assíncrono | Full |\n| **I2C** | Cabeada | <5 Mbps | 100 m | 1.008 | Síncrono | Half |\n| **SPI** | Cabeada | <65 Mbps | 10 m | N | Síncrono | Full |\n| CAN | Cabeada | <1 Mbps | 1 km | N | Assíncrono | Full |\n| LoRa | Sem fio | <5 Kbps | **10 km** | N | — | — |\n| **ESP-NOW** | Sem fio | <1 Mbps | 480 m | 20 | — | Bi |\n\n\n\n<!-- Slide 2 -->\n🔌 UART — Universal Asynchronous Receiver-Transmitter\n\n### Características\n\n- Protocolo **assíncrono** — sem clock compartilhado\n- **Ponto a ponto** (só 2 dispositivos)\n- **Full-duplex** (TX e RX independentes)\n- Sincronização pelo **baud rate** configurado em ambos os lados\n\n### Topologia — Conexão Cruzada!\n\n```\nDispositivo A          Dispositivo B\n    TX ────────────────── RX\n    RX ────────────────── TX\n   GND ────────────────── GND\n```\n\n▶ **PROVA:** TX de um vai para RX do outro. Conectar TX→TX = ERRADO, não transmite nada.\n\n### Frame UART (8N1)\n\n```\nIDLE: ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\n           ┌── D0 D1 D2 D3 D4 D5 D6 D7 ──┐\n      ‾‾‾‾‾                               ‾‾‾‾‾\n      START                                STOP\n```\n\n- **IDLE:** linha em nível ALTO (1)\n- **Start bit:** nível BAIXO (0) → avisa início\n- **8 bits de dados:** LSB primeiro!\n- **Paridade (opcional):** par, ímpar ou nenhuma\n- **Stop bit:** nível ALTO (1)\n\n▶ **PROVA:** UART envia **LSB primeiro**. SERIAL_8N1 = 8 bits, **Nenhuma paridade** (N=None), 1 stop.\n\n### Compatibilidade de Tensão\n\n- 3,3 V → pino 5 V: geralmente OK\n- **5 V → pino 3,3 V: PROIBIDO!** (danifica o chip) → usar divisor resistivo ou level shifter\n\n### Taxas Típicas\n\n| Taxa | Período por bit |\n|------|----------------|\n| 9.600 bps | 104 µs |\n| 115.200 bps | 8,68 µs |\n\n### Programação (Arduino)\n\n```c\nSerial.begin(9600);             // inicia com baud rate\nSerial.begin(9600, SERIAL_8N1); // configuração explícita\n\n// Transmissão:\nSerial.print(\"Texto\");   // sem newline\nSerial.println(\"Texto\"); // com \\r\\n\nSerial.write(0x41);      // byte direto ('A')\n\n// Recepção:\nif (Serial.available() > 0) {\n    char c = Serial.read();\n}\n```\n\n\n\n<!-- Slide 3 -->\n🔗 I2C — Inter-Integrated Circuit\n\n### Características\n\n- Criado pela **Philips em 1982**\n- Apenas **2 fios: SDA (dados) e SCL (clock)**\n- Até **1.008 dispositivos** no mesmo barramento\n- **Half-duplex** (não transmite e recebe ao mesmo tempo)\n- Resistores de pull-up **obrigatórios** (SDA e SCL são open-drain)\n\n### Modos\n\n| Modo | Taxa |\n|------|------|\n| Standard | 100 kbps |\n| Fast | 400 kbps |\n| Fast Plus | 1 Mbps |\n| High-Speed | até 3,4 Mbps |\n\n### Frame I2C — Passo a Passo\n\n1. **Barramento livre:** SDA = HIGH, SCL = HIGH\n2. **Start bit:** SDA **DESCE** enquanto SCL está HIGH\n3. **Endereço:** 7 bits (MSB primeiro) + bit **R/W**\n   - R/W = **0 → Mestre ESCREVE** no escravo\n   - R/W = **1 → Mestre LÊ** o escravo\n4. **ACK:** receptor puxa SDA para LOW (confirmação)\n   - **ACK = 0** (LOW) = OK\n   - **NACK = 1** (HIGH) = erro ou dispositivo ausente\n5. **Dados:** 8 bits + ACK, repetido quantas vezes precisar\n6. **Stop bit:** SDA **SOBE** enquanto SCL está HIGH\n\n▶ **PROVA:** Start = SDA **desce**. Stop = SDA **sobe**. R/W=0 → escreve. ACK = LOW = confirmação.\n\n### Endereços Comuns\n\n| Dispositivo | Endereço |\n|-------------|---------|\n| MPU-6050 (acelerômetro/giroscópio) | 0x68 ou 0x69 |\n| SSD1306 (OLED) | 0x3C ou 0x3D |\n| AT24Cxx (EEPROM) | 0x50–0x57 |\n| DS3231 (RTC) | 0x68 |\n\n### Programação (Arduino — biblioteca Wire)\n\n```c\n#include <Wire.h>\n\nvoid setup() {\n    Wire.begin();  // inicia como mestre\n}\n\n// Escrever no registrador de um escravo:\nvoid escreveReg(uint8_t endereco, uint8_t reg, uint8_t dado) {\n    Wire.beginTransmission(endereco);  // START + endereço + W\n    Wire.write(reg);                   // registrador alvo\n    Wire.write(dado);                  // valor\n    Wire.endTransmission();            // STOP\n}\n\n// Ler N bytes de um escravo:\nvoid leReg(uint8_t endereco, uint8_t reg, uint8_t* buf, int n) {\n    Wire.beginTransmission(endereco);\n    Wire.write(reg);\n    Wire.endTransmission(false);       // Restart (sem STOP)\n    Wire.requestFrom(endereco, n);\n    for (int i = 0; i < n && Wire.available(); i++)\n        buf[i] = Wire.read();\n}\n```\n\n\n\n<!-- Slide 4 -->\n📶 ESP-NOW — Comunicação Sem Roteador\n\n### Características\n\n- Protocolo **proprietário da Espressif** (fabricante do ESP8266/ESP32)\n- Usa o transceptor **2,4 GHz** já presente no chip\n- **Sem roteador Wi-Fi** — comunicação direta\n- Latência mínima (sem DHCP, sem DNS, sem TCP handshake)\n\n### Limitações\n\n- Pacote máximo: **250 bytes**\n- Máximo **20 estações** (com criptografia: 10)\n- Endereçamento por **MAC Address** (não por IP)\n\n### Modos\n\n- **Unidirecional:** initiator → responder(es)\n- **Bidirecional:** cada dispositivo é initiator E responder ao mesmo tempo\n\n### Funções Principais\n\n```c\n#include <esp_now.h>\n#include <WiFi.h>\n\n// Callback de envio (chamada após transmissão)\nvoid onEnvio(const uint8_t* mac, esp_now_send_status_t status) {\n    Serial.println(status == ESP_NOW_SEND_SUCCESS ? \"OK\" : \"FALHA\");\n}\n\n// Callback de recepção (chamada ao receber dado)\nvoid onRecepcao(const uint8_t* mac, const uint8_t* dados, int len) {\n    memcpy(&meusDados, dados, sizeof(meusDados));\n}\n\nvoid setup() {\n    WiFi.mode(WIFI_STA);\n    esp_now_init();\n    esp_now_register_send_cb(onEnvio);\n    esp_now_register_recv_cb(onRecepcao);\n\n    // Adiciona receptor pelo MAC Address\n    esp_now_peer_info_t receptor = {};\n    memcpy(receptor.peer_addr, mac_receptor, 6);\n    esp_now_add_peer(&receptor);\n}\n```\n\n▶ **PROVA:** ESP-NOW usa **MAC Address** (não IP). Sem roteador. Pacote máximo = **250 bytes**.\n\n\n\n<!-- Slide 5 -->\n📌 Resumo Rápido\n\n- UART: assíncrono, TX→RX cruzado, LSB primeiro, 8N1, **5V→3,3V = perigo**\n- I2C: Philips/1982, SDA+SCL, start=SDA desce, R/W 0=escreve, ACK=LOW, pull-ups obrigatórios\n- SPI: 4 fios (MOSI/MISO/SCK/CS), mais rápido (65 Mbps), 1 controlador\n- ESP-NOW: sem roteador, MAC Address, 250 bytes, 20 dispositivos\n- LoRa: **maior alcance** (10 km) + menor taxa (<5 kbps)\n"
    },
    {
      "id": "p2_iot_http_mqtt",
      "arquivo": "p2_iot_http_mqtt.md",
      "prova": "p2",
      "topico": "p2_iot_mqtt_http",
      "topicoNome": "IoT: HTTP e MQTT",
      "titulo": "P2 Iot Http Mqtt",
      "conteudo": "# Protocolos IoT — HTTP e MQTT\n\n<!-- Slide 0 -->\n\n> **Prova:** P2 | **Tier:** A | **Tópico:** `iot_mqtt_http`\n\n\n\n<!-- Slide 1 -->\n🌐 IoT — Camadas\n\nProtocolos IoT são organizados em camadas:\n\n- **3 camadas:** percepção → rede → aplicação\n- **4 camadas:** percepção → suporte → rede → aplicação\n- **5 camadas:** percepção → transporte → processamento → aplicação → negócios\n\nNas camadas de aplicação: **HTTP** e **MQTT**.\n\n\n\n<!-- Slide 2 -->\n🌍 HTTP em IoT\n\n- Usa **TCP** como transporte\n- Modelo clássico: **requisição → resposta** (abre conexão → transfere → fecha)\n- Problema para IoT: overhead enorme para dados frequentes\n\n### HTTP WebSockets\n\n- Conexão **persistente e bidirecional**\n- Cliente faz \"upgrade\" da conexão HTTP → vira canal aberto\n- Ideal para: dashboards em tempo real, chat\n\n### HTTP Push (Server-Sent Events)\n\n- Servidor envia dados **sem nova requisição** do cliente\n- **Unidirecional** (servidor → cliente)\n- Usado para atualizações em tempo real orientadas a eventos\n\n**Quando usar HTTP:** aplicação com interação via browser web.\n\n\n\n<!-- Slide 3 -->\n📨 MQTT — Message Queuing Telemetry Transport\n\n### A História\n\n- Criado em **1999** por **Andy Stanford-Clark (IBM)** e **Arlen Nipper (Cirrus Link)**\n- Objetivo: monitorar **sensores em oleodutos via satélite**\n- Problemas: banda cara, conexão instável, dispositivos com recursos mínimos\n- Solução: protocolo **leve** (até **2 bytes** por mensagem!)\n- Aberto ao público em **2010** (versão 3.1); versão atual: **5.0 (2019)**\n\n▶ **PROVA:** MQTT = IBM + 1999 + oleodutos + satélite. Uma mensagem pode ter **2 bytes**.\n\n### Modelo Pub/Sub — O Coração do MQTT\n\n**Componentes:**\n\n| Componente | Função |\n|------------|--------|\n| **Publisher** | Publica dados em um tópico |\n| **Subscriber** | Assina tópicos para receber dados |\n| **Broker** | Intermediário — recebe publicações e entrega aos assinantes |\n\n**Publishers e Subscribers não se conhecem.** O broker é o único ponto de contato.\n\n**Brokers populares:** Mosquitto (open source), HiveMQ, EMQX, AWS IoT Core.\n\n▶ **PROVA:** No MQTT, publishers **NÃO enviam direto** para subscribers. O **broker** é o intermediário.\n\n### Tópicos — Estrutura Hierárquica\n\n```\ncasa/terreo/sala/temperatura\ncasa/terreo/sala/umidade\ncasa/1oPav/quarto1/temperatura\nfabrica/linha1/motor/corrente\njardim/irrigacao/status\n```\n\n### Wildcards (Coringas)\n\n| Wildcard | Substitui | Exemplo |\n|----------|-----------|---------|\n| `+` | **1 nível** | `casa/+/sala/temperatura` → todos os andares |\n| `#` | **1 ou mais níveis** (final) | `casa/terreo/#` → tudo no térreo |\n\n▶ **PROVA:** `+` = 1 nível. `#` = vários níveis (sempre no final do tópico).\n\n\n\n<!-- Slide 4 -->\n🎯 QoS — Quality of Service\n\n### QoS 0 — At Most Once (No máximo uma vez)\n\n```\nPublisher → [PUBLISH] → Broker → [PUBLISH] → Subscriber\n```\n\n- Envia **1 vez**, sem confirmação\n- Pode **perder** mensagem\n- **Menor overhead** (1 pacote)\n- Uso: dados onde perder 1 leitura é aceitável\n\n### QoS 1 — At Least Once (Ao menos uma vez)\n\n```\nPublisher → [PUBLISH] → Broker\nPublisher ← [PUBACK] ← Broker\n(se não receber PUBACK → reenvia)\n```\n\n- Garante entrega, mas pode **duplicar**\n- Receptor deve ser **idempotente**\n- Uso: alertas onde perder é inaceitável, mas duplicar é OK\n\n▶ **PROVA:** QoS 1 pode duplicar → receptor precisa ser **idempotente** (processar 2x não causa problema).\n\n### QoS 2 — Exactly Once (Exatamente uma vez)\n\n```\nPublisher → [PUBLISH] → Broker   (1)\nPublisher ← [PUBREC] ← Broker    (2)\nPublisher → [PUBREL] → Broker    (3)\nPublisher ← [PUBCOMP] ← Broker   (4)\n```\n\n- **Handshake de 4 etapas**\n- Garante exatamente 1 entrega, sem perdas e sem duplicatas\n- **Maior overhead**, mais lento\n- Uso: comandos críticos (ex.: acionar válvula, transferência financeira)\n\n▶ **PROVA:** QoS 2 = **4 etapas** = PUBLISH → PUBREC → PUBREL → PUBCOMP.\n\n### Sessões Persistentes\n\nCom sessões persistentes, o broker **enfileira** mensagens de QoS 1 e 2 quando o subscriber está offline. Ao reconectar, recebe tudo que perdeu. (Esse era o requisito dos oleodutos!)\n\n\n\n<!-- Slide 5 -->\n⚖️ HTTP WebSockets vs MQTT\n\n| Critério | HTTP WebSockets | MQTT |\n|----------|-----------------|------|\n| Modelo | Full-duplex bidirecional | **Pub/Sub** |\n| Endereçamento | URIs | **Tópicos** |\n| Retenção de mensagens | ❌ | **✅** |\n| QoS configurável | ❌ | **✅ (0/1/2)** |\n| Overhead | Moderado | **Mínimo (2 bytes!)** |\n| Escalabilidade | Moderada | **Alta** |\n\n\n\n<!-- Slide 6 -->\n📌 Resumo Rápido\n\n- HTTP: TCP, req/resposta, WebSockets (persistente/bi), Push (servidor→cliente)\n- MQTT: IBM/1999/satélite, **broker intermediário**, payload mínimo 2 bytes\n- `+` = 1 nível | `#` = vários níveis (final)\n- QoS 0: fire & forget | QoS 1: ao menos 1x (duplica) | QoS 2: exatamente 1x (4 etapas)\n- QoS 1 → idempotência | QoS 2 → PUBLISH→PUBREC→PUBREL→PUBCOMP\n"
    }
  ],
  "flashcards": [
    {
      "id": "fc_001",
      "termo": "Von Neumann",
      "definicao": "Memória única para dados e instruções. Um barramento. 2 ciclos por instrução. Microprocessadores.",
      "prova": "p1"
    },
    {
      "id": "fc_002",
      "termo": "Harvard",
      "definicao": "Memórias separadas (Flash=código, SRAM=dados). Barramentos diferentes. Pipeline possível. Microcontroladores.",
      "prova": "p1"
    },
    {
      "id": "fc_003",
      "termo": "DDRD",
      "definicao": "Data Direction Register Porta D. Bit=0 → entrada. Bit=1 → saída.\nEx: DDRD |= (1<<5) → pino 5 como saída.",
      "prova": "p1"
    },
    {
      "id": "fc_004",
      "termo": "PORTD (saída)",
      "definicao": "Define o valor na saída (0 ou 1).\nEx: PORTD |= (1<<5) → seta pino 5 HIGH.\nPORTD &= ~(1<<5) → seta pino 5 LOW.",
      "prova": "p1"
    },
    {
      "id": "fc_005",
      "termo": "PORTD (entrada)",
      "definicao": "Com pino configurado como entrada:\nbit=1 → habilita pull-up interno.\nbit=0 → desabilita pull-up (flutuante).",
      "prova": "p1"
    },
    {
      "id": "fc_006",
      "termo": "PIND",
      "definicao": "Registrador de LEITURA da porta D. Somente leitura.\nbotao = (PIND & (1<<PD2)) >> 2;",
      "prova": "p1"
    },
    {
      "id": "fc_007",
      "termo": "ADC 10 bits Arduino",
      "definicao": "0 a 1023 valores. Tensão = (leitura/1023) × Vref.\nVref=5V → resolução = 4,89mV por contagem.\nFunção: analogRead(pinoA).",
      "prova": "p2"
    },
    {
      "id": "fc_008",
      "termo": "PWM Arduino",
      "definicao": "Pinos: 3,5,6,9,10,11 (marcados com ~).\nResolução 8 bits (0-255). Freq. típica 490Hz.\nFunção: analogWrite(pino, 0-255).",
      "prova": "p2"
    },
    {
      "id": "fc_009",
      "termo": "Pull-Up",
      "definicao": "Resistor entre Vcc e entrada.\nBotão aberto → lê HIGH. Botão GND → lê LOW.\nR típico: 4,7KΩ a 10KΩ.",
      "prova": "p1"
    },
    {
      "id": "fc_010",
      "termo": "Cap. desacoplamento",
      "definicao": "100nF entre Vcc e GND próximo ao CI.\nFiltra ruídos de alta frequência na alimentação.\nEssencial para microcontroladores.",
      "prova": "p1"
    },
    {
      "id": "fc_011",
      "termo": "UART",
      "definicao": "2 fios (Tx,Rx). Assíncrono. Full-duplex.\n<5Mbps. 2 pontos. Formato: start+dados(8)+paridade+stop.",
      "prova": "p1"
    },
    {
      "id": "fc_012",
      "termo": "I2C",
      "definicao": "2 fios (SDA,SCL). Síncrono. Half-duplex.\n<5Mbps. Até 1008 dispositivos. Endereço 7 bits.",
      "prova": "p1"
    },
    {
      "id": "fc_013",
      "termo": "SPI",
      "definicao": "4 fios (MOSI,MISO,SCK,SS). Síncrono. Full-duplex.\n<65Mbps. 1 mestre, múltiplos escravos via SS.",
      "prova": "p1"
    },
    {
      "id": "fc_014",
      "termo": "Precisão",
      "definicao": "Reprodutibilidade — medições sempre próximas entre si.\nSolução p/ imprecisão aleatória: MÉDIA.",
      "prova": "p2"
    },
    {
      "id": "fc_015",
      "termo": "Exatidão",
      "definicao": "Proximidade do valor real — pode ser imprecisa.\nSolução p/ inexatidão sistemática: CALIBRAÇÃO.",
      "prova": "p2"
    },
    {
      "id": "fc_016",
      "termo": "Nyquist",
      "definicao": "Taxa de amostragem ≥ 2 × frequência máxima\npara representar corretamente o sinal original.",
      "prova": "p2"
    },
    {
      "id": "fc_017",
      "termo": "WDT",
      "definicao": "Watch Dog Timer. Clock independente.\nMCU deve resetá-lo periodicamente via wdt_reset().\nSe MCU travar → WDT reseta o sistema.",
      "prova": "p2"
    },
    {
      "id": "fc_018",
      "termo": "ISR",
      "definicao": "Interrupt Service Routine.\nDeve ser CURTA. Sem delay(). Sem Serial.\nVariáveis compartilhadas → volatile.",
      "prova": "p2"
    },
    {
      "id": "fc_019",
      "termo": "Timer1",
      "definicao": "16 bits (0-65535). Não afeta millis().\nPrescaler 256 + OCR1A=62500 → 1 segundo exato.",
      "prova": "p2"
    },
    {
      "id": "fc_020",
      "termo": "Prescaler",
      "definicao": "Divisor do clock p/ o timer.\nValores Timer1: 1, 8, 64, 256, 1024.\nPrescaler 256 → 16M/256 = 62.500 Hz no timer.",
      "prova": "p2"
    },
    {
      "id": "fc_021",
      "termo": "Flash ATMega328P",
      "definicao": "32KB. Sketch/programa. Não volátil.\nGravada via USB (bootloader) ou ISP.",
      "prova": "p1"
    },
    {
      "id": "fc_022",
      "termo": "SRAM ATMega328P",
      "definicao": "2KB. Variáveis, pilha, heap. VOLÁTIL.\nPerde ao desligar. Registradores E/S mapeados aqui.",
      "prova": "p1"
    },
    {
      "id": "fc_023",
      "termo": "EEPROM ATMega328P",
      "definicao": "1KB. Dados não-voláteis.\nSobrevive ao desligamento.\nEscrita por software com biblioteca EEPROM.",
      "prova": "p1"
    },
    {
      "id": "fc_024",
      "termo": "DAC R-2R",
      "definicao": "Rede de resistores em escada com 2 valores (R e 2R).\nVantagem: só 2 tipos de resistor facilitam fabricação.",
      "prova": "p2"
    },
    {
      "id": "fc_025",
      "termo": "Relay Attack",
      "definicao": "Ataque IoT: ladrão 1 próx. ao carro captura sinal.\nLadrão 2 próx. à chave retransmite.\nCarro abre pensando que chave está perto.",
      "prova": "p1"
    },
    {
      "id": "fc_026",
      "termo": "Hard RT vs Soft RT",
      "definicao": "Hard RT: requisitos de tempo rígidos, não violáveis. Ex: airbag.\nSoft RT: pode operar mesmo com atrasos. Ex: streaming.",
      "prova": "p1"
    },
    {
      "id": "fc_027",
      "termo": "Transistor BJT — zonas",
      "definicao": "Corte: chave ABERTA (sem corrente de base).\nSaturação: chave FECHADA.\nAtiva: amplificação linear (NÃO usado em drivers).",
      "prova": "p1"
    },
    {
      "id": "fc_028",
      "termo": "Capacitor eletrolítico vs tântalo",
      "definicao": "São bastante similares.\nTântalo: menor tamanho, vida útil muito superior.\nAmbos são polarizados.",
      "prova": "p1"
    },
    {
      "id": "fc_029",
      "termo": "Tri-state",
      "definicao": "Permite que múltiplos dispositivos compartilhem barramento.\nDispositivo 'solta' o barramento (alta impedância) quando não transmite.",
      "prova": "p1"
    },
    {
      "id": "fc_030",
      "termo": "Tipo N vs Tipo P",
      "definicao": "Tipo N: dopagem pentavalente (Fósforo) → elétrons livres (doador).\nTipo P: dopagem trivalente (Alumínio) → buracos (receptor).",
      "prova": "p1"
    },
    {
      "id": "fc_031",
      "termo": "Precisão",
      "definicao": "Estabilidade/repetibilidade. Ruído aleatório. Resolve com média.",
      "prova": "p2"
    },
    {
      "id": "fc_032",
      "termo": "Exatidão",
      "definicao": "Proximidade do valor real. Erro sistemático. Resolve com calibração.",
      "prova": "p2"
    },
    {
      "id": "fc_033",
      "termo": "Precisão vs Exatidão",
      "definicao": "INDEPENDENTES! Um não implica o outro. Inexatidão é o problema mais grave.",
      "prova": "p2"
    },
    {
      "id": "fc_034",
      "termo": "ppm/°C na referência",
      "definicao": "Coeficiente de temperatura. Menor = melhor. Zener: 700; 5040AIDG4: 3 ppm/°C.",
      "prova": "p2"
    },
    {
      "id": "fc_035",
      "termo": "WDT",
      "definicao": "Watch Dog Timer. MCU alimenta periodicamente. Trava? Contador zera → RESET.",
      "prova": "p2"
    },
    {
      "id": "fc_036",
      "termo": "Resolução ADC Arduino",
      "definicao": "10 bits → 1024 valores → 4,89 mV/passo com Vref=5V.",
      "prova": "p2"
    },
    {
      "id": "fc_037",
      "termo": "Cálculo de bits ADC",
      "definicao": "Contar valores distintos, achar N: 2^N >= nº valores. Ex: 421 valores → 9 bits.",
      "prova": "p2"
    },
    {
      "id": "fc_038",
      "termo": "ADC SAR",
      "definicao": "Successive Approximation Register. Usado no ATMega328P. Busca binária em N ciclos.",
      "prova": "p2"
    },
    {
      "id": "fc_039",
      "termo": "Nyquist",
      "definicao": "f_amostragem >= 2 x f_máxima. Não respeitar = aliasing.",
      "prova": "p2"
    },
    {
      "id": "fc_040",
      "termo": "DAC R-2R",
      "definicao": "Rede em escada com APENAS dois valores: R e 2R. Não importa o nº de bits.",
      "prova": "p2"
    },
    {
      "id": "fc_041",
      "termo": "PWM Arduino",
      "definicao": "8 bits (0-255). 490 Hz padrão. Tensão média = Duty% x Vcc. SEM DAC real.",
      "prova": "p2"
    },
    {
      "id": "fc_042",
      "termo": "Arquitetura Harvard",
      "definicao": "Barramentos separados para instrução (16 bits) e dado (8 bits). Acesso simultâneo.",
      "prova": "p2"
    },
    {
      "id": "fc_043",
      "termo": "DDRx",
      "definicao": "Data Direction Register. 0=entrada, 1=saída.",
      "prova": "p2"
    },
    {
      "id": "fc_044",
      "termo": "PINx",
      "definicao": "Somente leitura. Estado elétrico atual dos pinos.",
      "prova": "p2"
    },
    {
      "id": "fc_045",
      "termo": "SET um bit",
      "definicao": "reg |= (1 << n)",
      "prova": "p2"
    },
    {
      "id": "fc_046",
      "termo": "RESET um bit",
      "definicao": "reg &= ~(1 << n)",
      "prova": "p2"
    },
    {
      "id": "fc_047",
      "termo": "TOGGLE um bit",
      "definicao": "reg ^= (1 << n)",
      "prova": "p2"
    },
    {
      "id": "fc_048",
      "termo": "Timer 0 vs Timer 1",
      "definicao": "Timer 0: 8 bits, millis/delay. Timer 1: 16 bits, interrupções seguras.",
      "prova": "p2"
    },
    {
      "id": "fc_049",
      "termo": "16 MHz / 256 prescaler",
      "definicao": "62.500 contagens/segundo → OCR1A = 62500 → 1 Hz no Timer 1.",
      "prova": "p2"
    },
    {
      "id": "fc_050",
      "termo": "volatile em ISR",
      "definicao": "Força reler da RAM (não de registrador de CPU). Obrigatório em variáveis compartilhadas.",
      "prova": "p2"
    },
    {
      "id": "fc_051",
      "termo": "IEC 61131-3",
      "definicao": "5 linguagens: LD, FBD, SFC, ST, IL. IL foi DESCONTINUADA.",
      "prova": "p2"
    },
    {
      "id": "fc_052",
      "termo": "Cross Compiler",
      "definicao": "Compila no PC para rodar no MCU (outro dispositivo). Ex: GCC-AVR.",
      "prova": "p2"
    },
    {
      "id": "fc_053",
      "termo": "PIC16F877",
      "definicao": "35 instruções, RISC, 6 grupos.",
      "prova": "p2"
    },
    {
      "id": "fc_054",
      "termo": "UART topologia",
      "definicao": "Ponto a ponto, CRUZADO: TX-A→RX-B, RX-A←TX-B. LSB primeiro. Assíncrono.",
      "prova": "p2"
    },
    {
      "id": "fc_055",
      "termo": "I2C criação",
      "definicao": "Philips, 1982. SDA + SCL. Até 1008 dispositivos. Half-duplex. Pull-ups obrigatórios.",
      "prova": "p2"
    },
    {
      "id": "fc_056",
      "termo": "I2C Start/Stop",
      "definicao": "Start: SDA DESCE (SCL=HIGH). Stop: SDA SOBE (SCL=HIGH).",
      "prova": "p2"
    },
    {
      "id": "fc_057",
      "termo": "I2C R/W bit",
      "definicao": "0 = mestre ESCREVE no escravo. 1 = mestre LÊ o escravo.",
      "prova": "p2"
    },
    {
      "id": "fc_058",
      "termo": "ESP-NOW",
      "definicao": "Espressif, 2,4 GHz, sem roteador, MAC Address, 250 bytes, 20 pares.",
      "prova": "p2"
    },
    {
      "id": "fc_059",
      "termo": "MQTT criação",
      "definicao": "IBM + Cirrus Link, 1999, oleodutos via satélite, payload mínimo 2 bytes.",
      "prova": "p2"
    },
    {
      "id": "fc_060",
      "termo": "MQTT wildcards",
      "definicao": "+ = 1 nível. # = vários níveis (sempre no final).",
      "prova": "p2"
    },
    {
      "id": "fc_061",
      "termo": "MQTT QoS 0",
      "definicao": "At most once. Fire & forget. Pode perder. 1 pacote.",
      "prova": "p2"
    },
    {
      "id": "fc_062",
      "termo": "MQTT QoS 1",
      "definicao": "At least once. Confirmado, pode duplicar. Receptor deve ser idempotente.",
      "prova": "p2"
    },
    {
      "id": "fc_063",
      "termo": "MQTT QoS 2",
      "definicao": "Exactly once. 4 etapas: PUBLISH→PUBREC→PUBREL→PUBCOMP.",
      "prova": "p2"
    },
    {
      "id": "fc_064",
      "termo": "MQTT Broker",
      "definicao": "Intermediário. Publishers e subscribers não se conhecem. Ex: Mosquitto, HiveMQ.",
      "prova": "p2"
    }
  ],
  "legacyHtml": [
    "simulado_p1.html",
    "simulado_p1b.html",
    "simulado_p2.html",
    "simulado_p2b.html",
    "simulado_p2c.html"
  ],
  "contagens": {
    "questoes": 189,
    "simulados": 2,
    "aulas": 31,
    "flashcards": 64
  }
};
