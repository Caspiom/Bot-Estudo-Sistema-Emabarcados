# data/avaliacoes/p2_simulado_estilo_prova.py
# ─────────────────────────────────────────────────────────────────────────────
# Simulados no estilo EXATO da 2ª Avaliação do Prof. Marco Câmara — UCSAL
# Formato: soma dos valores dos itens corretos (01, 02, 04, 08, 16, 32)
# Itens incorretos marcados como corretos ANULAM itens somados
#
# COMO USAR: importar AVALIACOES_P2 no modo avaliacao.py
# ─────────────────────────────────────────────────────────────────────────────

AVALIACOES_P2 = [

    # ─────────────────────────────────────────────────────────────────────────
    # SIMULADO 1 — Conteúdo slides pág. 244-392
    # ─────────────────────────────────────────────────────────────────────────
    {
        "id": "sim1_p2",
        "titulo": "Simulado 1 — P2 (Medição, ADC, Registradores, Timers, SE)",
        "instrucoes": (
            "Em cada questão, some os valores das afirmativas CORRETAS. "
            "Afirmativas incorretas marcadas como corretas ANULAM itens somados corretamente. "
            "Você pode deixar UMA das questões 1-5 em branco. A questão 6 é aberta e obrigatória."
        ),
        "questoes": [
            {
                "numero": 1,
                "peso": "01+04+16+32 = 53",
                "enunciado": (
                    "A qualidade de uma medição depende de parâmetros como precisão, exatidão e "
                    "linearidade. Identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "A precisão de um sistema de medição está relacionada à sua estabilidade e repetibilidade, independentemente de o valor medido ser correto ou não;", "correto": True},
                    {"valor": "02", "texto": "A exatidão de uma medição está diretamente ligada à ausência de ruído aleatório; sistemas exatos são necessariamente precisos;", "correto": False, "motivo": "ERRADO: precisão e exatidão são INDEPENDENTES."},
                    {"valor": "04", "texto": "O cálculo de média — simples ou móvel — é uma técnica eficaz para reduzir os efeitos do ruído aleatório sobre a precisão de uma medição;", "correto": True},
                    {"valor": "08", "texto": "A não-linearidade de um sensor provoca erros de medição distribuídos uniformemente por toda a faixa de operação;", "correto": False, "motivo": "ERRADO: ocorre principalmente nos EXTREMOS da faixa."},
                    {"valor": "16", "texto": "Um sensor que sempre retorna 5% acima do valor real, com leituras muito estáveis, é caracterizado como preciso e inexato;", "correto": True},
                    {"valor": "32", "texto": "A inexatidão é considerada o problema mais grave, pois a informação correta não está disponível sem uma referência externa;", "correto": True},
                ],
                "resposta": 53,
            },
            {
                "numero": 2,
                "peso": "01+04+08+16 = 29",
                "enunciado": (
                    "A qualidade da medição em sistemas digitais depende de referência de tensão, "
                    "ruído e resolução do ADC. Identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "A tensão de referência determina o valor máximo mensurável pelo ADC; se ela oscilar, toda a medição é afetada mesmo que o sinal esteja estável;", "correto": True},
                    {"valor": "02", "texto": "O coeficiente de temperatura de uma referência é em ppm/°C; quanto maior esse valor, melhor a estabilidade;", "correto": False, "motivo": "ERRADO: quanto MENOR o ppm/°C, MELHOR. 3 ppm/°C >> 700 ppm/°C."},
                    {"valor": "04", "texto": "No Arduino Uno com analogReference(EXTERNAL), não se deve chamar analogRead() antes de configurar o AREF, pois pode danificar o microcontrolador;", "correto": True},
                    {"valor": "08", "texto": "O WDT reinicializa o MCU quando este deixa de alimentá-lo dentro do intervalo configurado, protegendo contra travamentos;", "correto": True},
                    {"valor": "16", "texto": "Um ADC de 10 bits com Vref=5V possui passo de aproximadamente 4,89 mV, correspondendo a 1024 valores distintos;", "correto": True},
                    {"valor": "32", "texto": "Ruído de alta intensidade em ambientes industriais pode alterar registradores do MCU, mas nunca impede a operação do ADC;", "correto": False, "motivo": "ERRADO: ruído intenso PODE impedir a operação do ADC."},
                ],
                "resposta": 29,
            },
            {
                "numero": 3,
                "peso": "01+04+16+32 = 53",
                "enunciado": (
                    "Sobre conversão de sinais — ADC, DAC, PWM e amostragem — "
                    "identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "Na arquitetura Flash do ADC, o número de comparadores cresce exponencialmente (2^N - 1 para N bits), tornando-a impraticável para alta resolução;", "correto": True},
                    {"valor": "02", "texto": "O Teorema de Nyquist estabelece que a frequência de amostragem deve ser pelo menos IGUAL à maior componente do sinal;", "correto": False, "motivo": "ERRADO: deve ser pelo menos o DOBRO (2× f_máx)."},
                    {"valor": "04", "texto": "O PWM simula saída analógica controlando o Duty Cycle; o efeito vem da tensão média na saída;", "correto": True},
                    {"valor": "08", "texto": "O Arduino Uno possui DAC integrado de 8 bits nos pinos marcados com (~);", "correto": False, "motivo": "ERRADO: Arduino Uno NÃO possui DAC. Os pinos (~) geram PWM."},
                    {"valor": "16", "texto": "O ADC do Arduino Uno usa arquitetura SAR com 10 bits e pode multiplexar até 8 entradas analógicas;", "correto": True},
                    {"valor": "32", "texto": "Um DAC R-2R usa apenas dois valores de resistores (R e 2R), independentemente do número de bits;", "correto": True},
                ],
                "resposta": 53,
            },
            {
                "numero": 4,
                "peso": "01+02+08+16 = 27",
                "enunciado": (
                    "Sobre a arquitetura do ATMega328P e manipulação de registradores, "
                    "identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "O ATMega328P usa Arquitetura Harvard, com barramentos separados para programa (Flash) e dados (SRAM), permitindo acesso simultâneo;", "correto": True},
                    {"valor": "02", "texto": "Na Harvard do ATMega328P, instrução = 16 bits e dado = 8 bits — tamanhos diferentes são normais;", "correto": True},
                    {"valor": "04", "texto": "O registrador DDRx define a direção dos pinos: bit 0 = saída e bit 1 = entrada;", "correto": False, "motivo": "ERRADO: DDRx bit 0 = ENTRADA, bit 1 = SAÍDA. Invertido na afirmativa."},
                    {"valor": "08", "texto": "O registrador PINx é somente leitura e reflete o estado elétrico atual de cada pino;", "correto": True},
                    {"valor": "16", "texto": "Para ativar um bit específico de um registrador sem alterar os demais, usa-se reg |= (1 << n);", "correto": True},
                    {"valor": "32", "texto": "A EEPROM do ATMega328P é uma memória volátil de 1 KB para armazenar dados temporários durante a execução;", "correto": False, "motivo": "ERRADO: EEPROM é NÃO VOLÁTIL. Persiste sem energia."},
                ],
                "resposta": 27,
            },
            {
                "numero": 5,
                "peso": "01+04+08+16 = 29",
                "enunciado": (
                    "Sobre interrupções, timers e desenvolvimento de software para SE, "
                    "identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "Uma ISR deve ser construída de forma a ser a mais curta possível, evitando delay() ou comunicação serial dentro dela;", "correto": True},
                    {"valor": "02", "texto": "O Timer 0 do ATMega328P tem 16 bits de resolução e controla millis(), micros() e delay();", "correto": False, "motivo": "ERRADO: Timer 0 tem 8 bits (0-255). Timer 1 tem 16 bits."},
                    {"valor": "04", "texto": "Variáveis compartilhadas entre ISR e código principal devem ser declaradas com volatile para garantir leitura sempre da memória;", "correto": True},
                    {"valor": "08", "texto": "Com clock de 16 MHz e prescaler 256, o Timer 1 conta até 62.500 gerando 1 interrupção por segundo;", "correto": True},
                    {"valor": "16", "texto": "A norma IEC 61131-3 define 5 linguagens para PLCs: LD, FBD, ST, IL e SFC, sendo a IL a descontinuada;", "correto": True},
                    {"valor": "32", "texto": "Cross compilers geram código executável para o mesmo dispositivo onde o compilador está sendo executado, acelerando a compilação;", "correto": False, "motivo": "ERRADO: cross compiler gera para OUTRO dispositivo (ex: PC → AVR)."},
                ],
                "resposta": 29,
            },
            {
                "numero": 6,
                "tipo": "aberta",
                "enunciado": (
                    "QUESTÃO ABERTA (obrigatória, não opcional): "
                    "No projeto de um sistema de monitoramento de temperatura, você precisa: "
                    "(A) Medir temperatura de 0,0 a 50,0 °C com resolução de 0,1 °C — calcule o número "
                    "mínimo de bits de ADC necessário e verifique se o Arduino Uno é suficiente. "
                    "(B) O sensor entrega tensão de 0 a 12 V DC. Projete um divisor resistivo "
                    "compatível com a entrada A0 do Arduino Uno (0–5 V, impedância > 10 MΩ). "
                    "Apresente R1, R2, corrente, potência e esboço do circuito."
                ),
                "gabarito": {
                    "parte_a": (
                        "Valores distintos: (50,0 - 0,0) / 0,1 + 1 = 501 valores. "
                        "2^8 = 256 (insuficiente). 2^9 = 512 >= 501 → 9 bits mínimo. "
                        "Arduino Uno tem 10 bits (1024 valores) → SUFICIENTE."
                    ),
                    "parte_b": (
                        "Vout/Vin = R2/(R1+R2) = 5/12. Portanto R1/R2 = 7/5 = 1,4. "
                        "Escolha: R2 = 10 kΩ, R1 = 14 kΩ (usar 15 kΩ padrão → Vout ≈ 4,8 V). "
                        "Corrente: i = 12 / (15k+10k) = 480 µA. "
                        "Potência R1: P = (480e-6)^2 × 15000 ≈ 3,46 mW (usar 1/8 W). "
                        "Potência R2: P = (480e-6)^2 × 10000 ≈ 2,30 mW (usar 1/8 W). "
                        "Impedância: 25 kΩ << 10 MΩ. OK. "
                        "Esboço: Vin ─[R1=15kΩ]─┬─ A0 | [R2=10kΩ] | GND"
                    ),
                },
            },
        ],
    },

    # ─────────────────────────────────────────────────────────────────────────
    # SIMULADO 2 — Comunicação e IoT
    # ─────────────────────────────────────────────────────────────────────────
    {
        "id": "sim2_p2",
        "titulo": "Simulado 2 — P2 (UART, I2C, ESP-NOW, MQTT, HTTP, Projeto SE)",
        "instrucoes": (
            "Em cada questão, some os valores das afirmativas CORRETAS. "
            "Afirmativas incorretas marcadas como corretas ANULAM itens somados corretamente. "
            "Você pode deixar UMA das questões 1-5 em branco. A questão 6 é aberta e obrigatória."
        ),
        "questoes": [
            {
                "numero": 1,
                "peso": "01+04+08+32 = 45",
                "enunciado": (
                    "A UART é um dos protocolos de comunicação serial mais usados em SE. "
                    "Identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "A UART é assíncrona — não usa clock compartilhado; sincronização pelo baud rate configurado em ambos;", "correto": True},
                    {"valor": "02", "texto": "Na conexão UART entre dois dispositivos, TX de A conecta em TX de B e RX em RX;", "correto": False, "motivo": "ERRADO: conexão é CRUZADA — TX-A→RX-B, RX-A←TX-B."},
                    {"valor": "04", "texto": "Os bits de dados em UART são enviados com o LSB (menos significativo) primeiro;", "correto": True},
                    {"valor": "08", "texto": "Conectar 5V diretamente ao pino RX de um ESP8266 (3,3V) pode danificar permanentemente o módulo;", "correto": True},
                    {"valor": "16", "texto": "A configuração SERIAL_8N1 indica 8 bits de dados, 1 bit de paridade par e 1 stop bit;", "correto": False, "motivo": "ERRADO: 8N1 = 8 bits, NENHUMA paridade (N=None), 1 stop."},
                    {"valor": "32", "texto": "A UART suporta full-duplex — transmissão e recepção simultâneas em fios separados;", "correto": True},
                ],
                "resposta": 45,
            },
            {
                "numero": 2,
                "peso": "01+04+08 = 13",
                "enunciado": (
                    "Sobre o protocolo I2C, identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "O I2C foi criado pela Philips em 1982 e usa 2 fios (SDA e SCL) para conectar múltiplos dispositivos;", "correto": True},
                    {"valor": "02", "texto": "No I2C, o Start bit é gerado com SDA subindo enquanto SCL está alto; o Stop com SDA descendo;", "correto": False, "motivo": "ERRADO: Start = SDA DESCE (SCL alto). Stop = SDA SOBE (SCL alto). Invertido."},
                    {"valor": "04", "texto": "Cada dispositivo I2C tem endereço de 7 bits; bit R/W=0 indica que o mestre escreve no escravo;", "correto": True},
                    {"valor": "08", "texto": "O bit ACK no I2C é gerado pelo receptor: SDA em LOW = confirmação; SDA em HIGH = NACK;", "correto": True},
                    {"valor": "16", "texto": "O I2C é full-duplex, permitindo transmissão e recepção simultâneas;", "correto": False, "motivo": "ERRADO: I2C é HALF-DUPLEX. SDA é compartilhado."},
                    {"valor": "32", "texto": "Os resistores de pull-up são opcionais no I2C e só necessários para distâncias maiores que 1 metro;", "correto": False, "motivo": "ERRADO: pull-ups são OBRIGATÓRIOS. SDA e SCL são open-drain."},
                ],
                "resposta": 13,
            },
            {
                "numero": 3,
                "peso": "01+04+08+16+32 = 61",
                "enunciado": (
                    "Sobre os protocolos de comunicação sem fio e sua comparação, "
                    "identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "O ESP-NOW permite comunicação direta entre ESPs sem necessidade de roteador Wi-Fi;", "correto": True},
                    {"valor": "02", "texto": "No ESP-NOW, os dispositivos são identificados por endereços IP atribuídos dinamicamente;", "correto": False, "motivo": "ERRADO: ESP-NOW usa MAC Address, não IP."},
                    {"valor": "04", "texto": "O pacote máximo do ESP-NOW é de 250 bytes — suficiente para a maioria dos dados de sensores;", "correto": True},
                    {"valor": "08", "texto": "O protocolo LoRa oferece o maior alcance estudado (até 10 km) com a menor taxa (<5 kbps);", "correto": True},
                    {"valor": "16", "texto": "O SPI usa 4 fios (MOSI, MISO, SCK e CS) e é o mais rápido dos protocolos cabeados estudados (até 65 Mbps);", "correto": True},
                    {"valor": "32", "texto": "O CAN é usado em automação industrial e automotivo, assíncrono, até 1 km e 1 Mbps com múltiplos nós;", "correto": True},
                ],
                "resposta": 61,
            },
            {
                "numero": 4,
                "peso": "01+04+08+16 = 29",
                "enunciado": (
                    "Sobre MQTT e seus mecanismos, identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "O MQTT foi criado em 1999 por Stanford-Clark (IBM) e Nipper para monitorar sensores em oleodutos via satélite;", "correto": True},
                    {"valor": "02", "texto": "No MQTT, os publishers enviam mensagens diretamente aos subscribers sem intermediários;", "correto": False, "motivo": "ERRADO: o BROKER é o intermediário obrigatório no MQTT."},
                    {"valor": "04", "texto": "O wildcard '+' substitui exatamente 1 nível de tópico; '#' substitui vários e só aparece no final;", "correto": True},
                    {"valor": "08", "texto": "No QoS 2, cada mensagem passa por handshake de 4 etapas garantindo entrega exatamente uma vez;", "correto": True},
                    {"valor": "16", "texto": "QoS 1 garante entrega confirmada, mas pode duplicar; o receptor deve ser idempotente;", "correto": True},
                    {"valor": "32", "texto": "HTTP WebSockets suporta retained messages e QoS configurável, sendo equivalente ao MQTT para IoT;", "correto": False, "motivo": "ERRADO: HTTP WebSockets NÃO tem retained messages nem QoS. São características exclusivas do MQTT."},
                ],
                "resposta": 29,
            },
            {
                "numero": 5,
                "peso": "02+04+08+16+32 = 62",
                "enunciado": (
                    "Sobre o processo de desenvolvimento de SE, linguagens e ferramentas, "
                    "identifique as afirmativas CORRETAS:"
                ),
                "itens": [
                    {"valor": "01", "texto": "Na fase de Definição de Requisitos, apenas engenheiros eletrônicos participam, pois os requisitos são exclusivamente de hardware;", "correto": False, "motivo": "ERRADO: Definição de Requisitos é MULTIDISCIPLINAR."},
                    {"valor": "02", "texto": "O RTOS é usado em MCUs com múltiplas tarefas em tempo real, tratando sincronismo e prioridades;", "correto": True},
                    {"valor": "04", "texto": "A linguagem Assembly oferece máxima performance e menor código, porém com portabilidade praticamente nula;", "correto": True},
                    {"valor": "08", "texto": "O OpenPLC suporta as 5 linguagens da IEC 61131-3 e roda em Arduino, ESP e Raspberry Pi;", "correto": True},
                    {"valor": "16", "texto": "O bootloader permite carregar novos sketches via USB sem necessidade de programador ISP externo;", "correto": True},
                    {"valor": "32", "texto": "O método ISP usa SPI com conector ICSP de 6 pinos; o sinal RESET inicia o modo de programação;", "correto": True},
                ],
                "resposta": 62,
            },
            {
                "numero": 6,
                "tipo": "aberta",
                "enunciado": (
                    "QUESTÃO ABERTA (obrigatória): "
                    "Uma fábrica quer monitorar temperatura e pressão em 2 linhas (linha1 e linha2), "
                    "cada uma com sensores e válvulas atuadoras. "
                    "(A) Proponha uma estrutura de tópicos MQTT adequada para sensores e atuadores. "
                    "(B) Indique os wildcards que um dashboard de temperatura geral e um sistema de "
                    "log completo devem usar. "
                    "(C) Justifique o nível de QoS para leituras de sensor e para comandos de atuadores."
                ),
                "gabarito": {
                    "parte_a": (
                        "Tópicos: "
                        "fabrica/linha1/sensor/temperatura, fabrica/linha1/sensor/pressao, "
                        "fabrica/linha2/sensor/temperatura, fabrica/linha2/sensor/pressao, "
                        "fabrica/linha1/atuador/valvula/cmd, fabrica/linha2/atuador/valvula/cmd"
                    ),
                    "parte_b": (
                        "Dashboard de temperatura: fabrica/+/sensor/temperatura "
                        "(+ substitui linha1, linha2, etc.). "
                        "Log completo: fabrica/# (recebe tudo abaixo de fabrica/)."
                    ),
                    "parte_c": (
                        "Sensores: QoS 0 — perder 1 leitura é aceitável (próxima chega em breve). "
                        "Menor overhead. "
                        "Atuadores: QoS 2 — comando de válvula não é idempotente. "
                        "Duplicar pode causar problema (abrir e fechar inesperadamente). "
                        "QoS 2 garante exatamente 1 entrega."
                    ),
                },
            },
        ],
    },
]

if __name__ == "__main__":
    for av in AVALIACOES_P2:
        print(f"\n{'='*60}")
        print(f"  {av['titulo']}")
        print(f"{'='*60}")
        for q in av["questoes"]:
            if q.get("tipo") == "aberta":
                print(f"  Q{q['numero']}: ABERTA")
            else:
                corretas = [i["valor"] for i in q["itens"] if i["correto"]]
                print(f"  Q{q['numero']}: resposta={q['resposta']} | corretas={corretas}")
