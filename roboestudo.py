#!/usr/bin/env python3
"""
RoboEstudo — Tutor Interativo de Sistemas Embarcados
Prof. Marco Câmara — UCSAL 2026-01 | Prova 2: 9/jun
"""

import json, os, random, time, sys
from pathlib import Path

# ── CORES ANSI ──────────────────────────────────────────────
class C:
    RESET = "\033[0m"; BOLD = "\033[1m"; DIM = "\033[2m"
    RED = "\033[91m"; GREEN = "\033[92m"; YELLOW = "\033[93m"
    BLUE = "\033[94m"; MAGENTA = "\033[95m"; CYAN = "\033[96m"
    WHITE = "\033[97m"

def cls():
    os.system("clear" if os.name != "nt" else "cls")

def hr(c=C.BLUE):
    print(f"{c}{'─'*62}{C.RESET}")

def title(text, c=C.CYAN):
    hr(c); print(f"{C.BOLD}{c}  {text}{C.RESET}"); hr(c)

def ask(prompt=""):
    try:
        return input(f"{C.YELLOW}{prompt}{C.RESET}").strip()
    except (KeyboardInterrupt, EOFError):
        print("\n\nAté logo! 👋"); sys.exit(0)

def pause():
    ask("\n  [Enter para continuar...]")

# ── TÓPICOS ─────────────────────────────────────────────────
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

# ── BANCO DE QUESTÕES ───────────────────────────────────────
# tipos: MC=múltipla escolha, ESCREVA=redação, CALC=cálculo, COMPLETE=preencha
QUESTOES = [

  # ════ P1: DEFINIÇÃO E CLASSIFICAÇÃO ════════════════════
  {"id":"d01","topico":"p1_definicao","tier":"A","tipo":"MC",
   "pergunta":"Qual característica distingue um sistema HARD Real Time de um SOFT Real Time?",
   "opcoes":["A) Hard RT é mais rápido","B) Hard RT não tolera falhas no tempo; Soft RT pode operar mesmo com falhas",
             "C) Hard RT usa mais memória","D) Soft RT não existe em SE"],
   "resposta":"B",
   "explicacao":"Hard RT: requisitos rígidos de tempo que NÃO podem ser violados (ex: airbag). Soft RT pode operar mesmo quando atrasa (ex: streaming)."},

  {"id":"d02","topico":"p1_definicao","tier":"B","tipo":"MC",
   "pergunta":"Qual classificação de SE depende de recursos externos como servidores ou internet?",
   "opcoes":["A) Autônomos","B) De tempo real","C) Em rede","D) Móveis"],
   "resposta":"C",
   "explicacao":"Sistemas Em Rede dependem de recursos externos e incorporam a IoT. Apresentam os maiores desafios de segurança."},

  {"id":"d03","topico":"p1_definicao","tier":"B","tipo":"ESCREVA",
   "pergunta":"Explique o conceito de Edge Computing e por que ele é importante para IoT.",
   "resposta_esperada":"Edge Computing = processamento no ponto de coleta dos dados. Benefícios: reduz largura de banda, aumenta segurança (transmite menos), permite atuação local imediata sem consultar servidor central, aumenta resiliência (funciona sem conexão). Pode coexistir com nuvem."},

  {"id":"d04","topico":"p1_definicao","tier":"A","tipo":"MC",
   "pergunta":"O airbag de um carro deve ser classificado como:",
   "opcoes":["A) Soft Real Time — pode atrasar um pouco","B) Hard Real Time — falhas no tempo custam vidas",
             "C) Em rede — usa CAN","D) Móvel — está em um veículo"],
   "resposta":"B",
   "explicacao":"Airbag tem requisito rígido de tempo de resposta — qualquer atraso é inaceitável. Hard Real Time."},

  # ════ P1: HARDWARE µP vs µC ════════════════════════════
  {"id":"h01","topico":"p1_hardware","tier":"S","tipo":"ESCREVA",
   "pergunta":"Liste 3 diferenças fundamentais entre Microprocessador e Microcontrolador.",
   "resposta_esperada":"1) µP só tem CPU (ULA+controle+registradores). µC integra CPU+memória+clock+GPIO+ADC (SoC). 2) µP precisa de componentes externos; µC é mais autossuficiente. 3) µP é projetado para múltiplos usos; µC para uso específico. 4) µP usa Von Neumann; µC usa Harvard. 5) µC tem menor consumo, custo e tamanho."},

  {"id":"h02","topico":"p1_hardware","tier":"S","tipo":"MC",
   "pergunta":"Qual arquitetura permite pipeline (buscar instrução enquanto executa outra)?",
   "opcoes":["A) Von Neumann","B) CISC","C) Harvard","D) x86"],
   "resposta":"C",
   "explicacao":"Harvard separa memórias de dados e instruções com barramentos diferentes → acesso simultâneo → pipeline. Von Neumann usa barramento único → gargalo."},

  {"id":"h03","topico":"p1_hardware","tier":"S","tipo":"MC",
   "pergunta":"O ATMega328P usa qual arquitetura de memória?",
   "opcoes":["A) Von Neumann — memória única","B) Harvard — Flash para código, SRAM para dados",
             "C) RISC puro — sem memória interna","D) Cache L1/L2 como Intel"],
   "resposta":"B",
   "explicacao":"ATMega328P é Harvard: Flash (32KB) = programa; SRAM (2KB) = dados/variáveis; EEPROM (1KB) = dados não-voláteis. Barramentos separados."},

  {"id":"h04","topico":"p1_hardware","tier":"S","tipo":"COMPLETE",
   "pergunta":"Complete: Em Von Neumann há _____ barramento(s) para dados e instruções.\nEm Harvard há _____ barramentos separados por tipo.",
   "resposta":"UM / DOIS (separados)",
   "explicacao":"Von Neumann: barramento único → bottleneck. Harvard: barramentos separados → acesso simultâneo → mais rápido."},

  # ════ P1: ARDUINO UNO R3 ════════════════════════════════
  {"id":"a01","topico":"p1_arduino","tier":"S","tipo":"ESCREVA",
   "pergunta":"Cite os pinos do Arduino Uno R3 que têm funções especiais e qual é cada função.",
   "resposta_esperada":"0,1: UART (Rx,Tx) — não usar com USB. 2,3: Interrupções INT0,INT1. 3,5,6,9,10,11: PWM (~). 10-13: SPI (SS,MOSI,MISO,SCK). A4,A5: I2C (SDA,SCL). 13: LED interno. A0-A5: ADC 10 bits (0-1023)."},

  {"id":"a02","topico":"p1_arduino","tier":"A","tipo":"MC",
   "pergunta":"Corrente máxima recomendada por pino digital do Arduino Uno R3?",
   "opcoes":["A) 5mA","B) 20mA normal, 40mA máx absoluto; total 200mA","C) 100mA","D) 1A"],
   "resposta":"B",
   "explicacao":"Cada pino: <20mA recomendado, máx 40mA. Total de todos os pinos: 200mA. Sempre use resistor para LEDs!"},

  {"id":"a03","topico":"p1_arduino","tier":"A","tipo":"MC",
   "pergunta":"Por que não usar pinos 0 e 1 enquanto o Arduino está conectado via USB?",
   "opcoes":["A) São apenas entradas","B) Estão conectados ao conversor USB-Serial — conflito",
             "C) USB danifica esses pinos","D) Arduino não tem UART"],
   "resposta":"B",
   "explicacao":"Pinos 0 e 1 estão ligados ao ATmega16U2 (conversor USB-Serial). Usá-los junto com USB causa conflito de dados."},

  {"id":"a04","topico":"p1_arduino","tier":"A","tipo":"CALC",
   "pergunta":"Calcule o resistor para um LED vermelho (Vled=2V, I=10mA) com fonte de 9V.",
   "resposta":"700","unidade":"Ω (comercial: 680Ω)","tolerancia":50,
   "explicacao":"V_R = 9-2 = 7V. R = 7/0,01 = 700Ω. Comercial: 680Ω. Potência: 680×(0,01)² = 0,068W → usar 1/8W."},

  # ════ P1: ELETRÔNICA ════════════════════════════════════
  {"id":"e01","topico":"p1_eletron","tier":"S","tipo":"ESCREVA",
   "pergunta":"Explique o que é e para que serve um resistor de Pull-Up. Dê um exemplo.",
   "resposta_esperada":"Pull-Up: resistor entre Vcc e o pino de entrada. Botão aberto → pino lê HIGH (puxado para Vcc). Botão pressionado (GND) → pino lê LOW. Evita que entradas flutuantes sejam afetadas por ruído. Exemplo: botão entre pino e GND, pull-up de 4,7KΩ para 5V. R ≈ Vcc/(5% × Imax) ≈ 4,7KΩ."},

  {"id":"e02","topico":"p1_eletron","tier":"A","tipo":"MC",
   "pergunta":"O capacitor de desacoplamento (bypass) tem função principal de:",
   "opcoes":["A) Armazenar energia","B) Filtrar interferências de alta frequência na alimentação do CI",
             "C) Converter CA em CC","D) Proteger contra curto"],
   "resposta":"B",
   "explicacao":"100nF próximo à alimentação filtra ruídos de alta frequência gerados pelo próprio circuito digital. Microcontroladores são muito sensíveis a ruídos na alimentação."},

  {"id":"e03","topico":"p1_eletron","tier":"A","tipo":"MC",
   "pergunta":"Em qual zona de operação o transistor BJT funciona como CHAVE FECHADA?",
   "opcoes":["A) Corte — sem corrente de base","B) Ativa — ampliação linear",
             "C) Saturação — máxima corrente coletor-emissor","D) Bloqueio"],
   "resposta":"C",
   "explicacao":"Corte = chave aberta (sem corrente base). Saturação = chave fechada (máxima condução). Prática: ib ≈ 10% de ic para garantir saturação independente do β."},

  {"id":"e04","topico":"p1_eletron","tier":"B","tipo":"MC",
   "pergunta":"O diodo zener polarizado inversamente acima da tensão de ruptura é usado como:",
   "opcoes":["A) Amplificador","B) Proteção contra sobretensão / regulador de tensão",
             "C) Chave digital","D) Capacitor"],
   "resposta":"B",
   "explicacao":"Efeito zener mantém tensão praticamente constante mesmo variando corrente. Usado como regulador de tensão e proteção de entradas digitais."},

  {"id":"e05","topico":"p1_eletron","tier":"A","tipo":"CALC",
   "pergunta":"Resistência total de 3 resistores em PARALELO: 10Ω, 10Ω e 5Ω?",
   "resposta":"2.5","unidade":"Ω","tolerancia":0.3,
   "explicacao":"1/Rt = 1/10+1/10+1/5 = 0,4. Rt = 2,5Ω. Sempre menor que o menor resistor individual."},

  # ════ P1: MEMÓRIA ════════════════════════════════════════
  {"id":"m01","topico":"p1_memoria","tier":"A","tipo":"ESCREVA",
   "pergunta":"Descreva os 3 tipos de memória do ATMega328P, tamanhos e para que cada uma serve.",
   "resposta_esperada":"FLASH (32KB): armazena o sketch/código. Não volátil. Gravada via USB ou ISP. | SRAM (2KB): variáveis e dados em execução (pilha, heap). Volátil — perde ao desligar. | EEPROM (1KB): dados não-voláteis que sobrevivem ao desligamento (calibrações, config). Escrita por software com biblioteca EEPROM."},

  {"id":"m02","topico":"p1_memoria","tier":"A","tipo":"MC",
   "pergunta":"Qual memória do ATMega328P perde conteúdo ao desligar?",
   "opcoes":["A) Flash","B) SRAM — variáveis e dados em execução","C) EEPROM","D) Todas"],
   "resposta":"B",
   "explicacao":"SRAM = volátil. Flash e EEPROM = não-voláteis. Por isso variáveis são perdidas ao reiniciar, mas o sketch permanece."},

  # ════ P1: REGISTRADORES ══════════════════════════════════
  {"id":"r01","topico":"p1_registr","tier":"S","tipo":"ESCREVA",
   "pergunta":"Escreva o código para ativar APENAS o bit 5 do DDRD sem alterar os outros bits.",
   "resposta_esperada":"DDRD |= (1 << 5);  — Cria máscara 00100000, faz OR com DDRD, ativa só o bit 5, preserva os demais. Alternativa: DDRD |= B00100000;"},

  {"id":"r02","topico":"p1_registr","tier":"S","tipo":"ESCREVA",
   "pergunta":"Escreva o código para DESATIVAR o bit 3 do PORTB sem afetar os outros bits.",
   "resposta_esperada":"PORTB &= ~(1 << 3);  — (1<<3)=00001000. NOT→11110111. AND com PORTB zera o bit 3, preserva todos os outros."},

  {"id":"r03","topico":"p1_registr","tier":"S","tipo":"MC",
   "pergunta":"O registrador DDR com bit em 0 (zero) configura o pino como:",
   "opcoes":["A) Saída digital","B) Entrada digital","C) Entrada analógica","D) PWM"],
   "resposta":"B",
   "explicacao":"DDR = Data Direction Register. 0=entrada (Input), 1=saída (Output). pinMode(pino,INPUT) escreve 0 no bit do DDR correspondente."},

  {"id":"r04","topico":"p1_registr","tier":"S","tipo":"MC",
   "pergunta":"Qual operação lógica INVERTE (toggle) um bit específico de um registrador?",
   "opcoes":["A) AND (&)","B) OR (|)","C) XOR (^)","D) NOT (~)"],
   "resposta":"C",
   "explicacao":"XOR: 0^1=1, 1^1=0. Portanto PORTB ^= (1<<PB5) inverte o LED a cada chamada. Usado no Blink com registradores."},

  {"id":"r05","topico":"p1_registr","tier":"S","tipo":"COMPLETE",
   "pergunta":"Para ler o botão no pino 2 (PD2) via registrador:\nbotao = ( (1 << ___ ) & _____ ) >> ____;",
   "resposta":"PD2 (ou 2) / PIND / 2",
   "explicacao":"PIND = registrador de leitura da porta D. Máscara (1<<PD2) isola o bit 2. Shift >>2 coloca resultado na posição 0 (retorna 0 ou 1)."},

  # ════ P1: IoT e COMUNICAÇÃO ══════════════════════════════
  {"id":"i01","topico":"p1_iot","tier":"A","tipo":"ESCREVA",
   "pergunta":"Compare UART e I2C: fios, velocidade e quantos dispositivos suporta cada um.",
   "resposta_esperada":"UART: 2 fios (Tx,Rx)+GND. <5Mbps. Apenas 2 pontos. Assíncrono. Full-duplex. | I2C: 2 fios (SDA,SCL)+GND. <5Mbps (Standard 100K, Fast 400K). Até 1008 dispositivos. Síncrono. Half-duplex. Endereço 7 bits por dispositivo."},

  {"id":"i02","topico":"p1_iot","tier":"A","tipo":"MC",
   "pergunta":"Qual protocolo usa 4 fios, é síncrono, full-duplex e tem até 65Mbps?",
   "opcoes":["A) UART","B) I2C","C) SPI","D) LoRa"],
   "resposta":"C",
   "explicacao":"SPI: MOSI, MISO, SCK, SS. Síncrono (usa clock SCK). Full-duplex. Até 65Mbps. Mais complexo mas muito mais rápido. Usado também para gravação ISP."},

  {"id":"i03","topico":"p1_iot","tier":"B","tipo":"MC",
   "pergunta":"No I2C, o bit ACK após o endereço indica que:",
   "opcoes":["A) O mestre confirmou","B) O escravo com aquele endereço existe e está pronto",
             "C) Mensagem corrompida","D) Barramento ocupado"],
   "resposta":"B",
   "explicacao":"Mestre envia endereço 7 bits + R/W. Se o escravo existir, puxa SDA para 0 (ACK). Caso contrário SDA fica em 1 (NACK)."},

  {"id":"i04","topico":"p1_iot","tier":"B","tipo":"MC",
   "pergunta":"O MQTT foi criado originalmente para:",
   "opcoes":["A) Navegadores web","B) Monitorar sensores em oleodutos via satélite",
             "C) Controle de PLCs","D) Streaming de vídeo"],
   "resposta":"B",
   "explicacao":"Criado em 1999 por IBM para sensores em oleodutos via satélite — baixa largura de banda, cara. Pacote mínimo de 2 bytes!"},

  {"id":"i05","topico":"p1_iot","tier":"B","tipo":"ESCREVA",
   "pergunta":"Explique o modelo Publicação/Assinatura do MQTT e o papel do Broker.",
   "resposta_esperada":"Publishers publicam mensagens em tópicos. Subscribers se inscrevem em tópicos. Broker é o intermediário: recebe publicações e distribui para assinantes. Modelo desacoplado: publisher não sabe quem vai receber, subscriber não sabe quem publicou. Escalável e eficiente para IoT."},

  # ════ P2: MEDIÇÃO ANALÓGICA ══════════════════════════════
  {"id":"q01","topico":"p2_medicao","tier":"S","tipo":"ESCREVA",
   "pergunta":"Explique a diferença entre PRECISÃO e EXATIDÃO. Use um exemplo concreto.",
   "resposta_esperada":"PRECISÃO: reprodutibilidade — valores sempre próximos entre si (mesmo que errados). EXATIDÃO: proximidade do valor real (pode variar muito). Exemplo: termômetro que sempre mostra 38°C com temperatura real de 36°C = preciso (consistente) mas inexato (erro sistemático). Um que varia 34-38°C em torno de 36°C = impreciso mas exato (média correta). Solução: média corrige imprecisão aleatória; calibração corrige inexatidão sistemática."},

  {"id":"q02","topico":"p2_medicao","tier":"S","tipo":"MC",
   "pergunta":"Sensor com imprecisão causada por ruído ALEATÓRIO. Melhor estratégia?",
   "opcoes":["A) Trocar o sensor","B) Calcular a média das leituras (ex: média móvel)",
             "C) Calibrar o offset","D) Aumentar resolução do ADC"],
   "resposta":"B",
   "explicacao":"Ruído aleatório tem média próxima de zero — a média das leituras cancela o ruído. Erro sistemático (inexatidão) requer calibração, pois não é cancelado por média."},

  {"id":"q03","topico":"p2_medicao","tier":"A","tipo":"MC",
   "pergunta":"A média móvel é preferida à média simples porque:",
   "opcoes":["A) É mais precisa matematicamente","B) Não requer cálculo",
             "C) Usa as N últimas amostras continuamente — melhor performance e mais dinâmica",
             "D) É mais fácil de implementar"],
   "resposta":"C",
   "explicacao":"Média móvel: buffer circular das N últimas amostras. Substitui a mais antiga pela nova. Mais eficiente e responde melhor a sinais variáveis."},

  {"id":"q04","topico":"p2_medicao","tier":"A","tipo":"ESCREVA",
   "pergunta":"O que é linearidade em medições? O que fazer quando não é perfeita?",
   "resposta_esperada":"Linearidade: correspondência proporcional entre valor real e valor medido ao longo de toda a faixa. Se não for linear, a leitura em certos pontos estará errada mesmo com boa precisão/exatidão. Soluções: 1) Limitar a faixa às regiões lineares (perde resolução). 2) Corrigir matematicamente com curva de calibração. Não-linearidade é comum nos extremos da faixa."},

  # ════ P2: ADC, DAC, PWM ══════════════════════════════════
  {"id":"v01","topico":"p2_adc","tier":"S","tipo":"CALC",
   "pergunta":"ADC 10 bits, Vref=5V. Qual tensão corresponde à leitura 512?",
   "resposta":"2.5","unidade":"V","tolerancia":0.05,
   "explicacao":"V = (512/1023) × 5 ≈ 2,50V. Dividir por 1023 (não 1024) pois o intervalo vai de 0 a 1023."},

  {"id":"v02","topico":"p2_adc","tier":"S","tipo":"CALC",
   "pergunta":"Quantos bits são necessários para medir 0 a 100°C com resolução de 0,5°C?",
   "resposta":"8","unidade":"bits","tolerancia":0,
   "explicacao":"Valores necessários = 100/0,5 + 1 = 201. 2^7=128 (insuficiente). 2^8=256 (suficiente). Resposta: 8 bits."},

  {"id":"v03","topico":"p2_adc","tier":"A","tipo":"MC",
   "pergunta":"Por que o Arduino Uno R3 NÃO possui DAC integrado?",
   "opcoes":["A) É muito caro","B) ATMega328P não inclui DAC; Arduino usa PWM como alternativa",
             "C) DAC não é útil em SE","D) DAC está só no ESP32"],
   "resposta":"B",
   "explicacao":"ATMega328P não tem DAC. Para saída analógica, Arduino usa PWM — o efeito 'analógico' vem da tensão média da saída filtrada."},

  {"id":"v04","topico":"p2_adc","tier":"S","tipo":"ESCREVA",
   "pergunta":"Explique o que é Duty Cycle no PWM e como ele simula uma saída analógica.",
   "resposta_esperada":"Duty Cycle = % do tempo em que a saída está em HIGH. DC=50% → saída em HIGH 50% do tempo → tensão média = 50% de Vcc = 2,5V. Um capacitor suaviza o sinal. Arduino Uno: resolução 8 bits (0-255), freq. típica 490Hz. analogWrite(pino, 127) → ~50% DC → ~2,5V."},

  {"id":"v05","topico":"p2_adc","tier":"A","tipo":"MC",
   "pergunta":"Referência analógica DEFAULT do Arduino Uno?",
   "opcoes":["A) 1,1V interna","B) 3,3V","C) Vcc (5V) — tensão de alimentação","D) Tensão no AREF"],
   "resposta":"C",
   "explicacao":"Default = Vcc (5V). Alternativas: INTERNAL (1,1V, mais resolução para sinais pequenos) ou EXTERNAL (pino AREF). Cuidado: não usar analogRead() antes de mudar referência!"},

  {"id":"v06","topico":"p2_adc","tier":"A","tipo":"MC",
   "pergunta":"Nyquist: para representar corretamente um sinal, a taxa de amostragem deve ser:",
   "opcoes":["A) Igual à freq. máxima","B) O dobro da frequência máxima do sinal",
             "C) 10× a frequência máxima","D) Independente da frequência"],
   "resposta":"B",
   "explicacao":"Nyquist: fs ≥ 2 × fmax. Para sinal de 1kHz → fs ≥ 2kHz. Arduino ADC: ~10kSa/s, suficiente para áudio de voz."},

  # ════ P2: INTERRUPÇÕES E TIMERS ══════════════════════════
  {"id":"t01","topico":"p2_interrup","tier":"S","tipo":"ESCREVA",
   "pergunta":"O que é uma ISR e quais cuidados especiais deve ter ao escrevê-la?",
   "resposta_esperada":"ISR = função chamada automaticamente quando ocorre interrupção. Processador pausa o código principal, executa ISR, retorna ao ponto original. Cuidados: 1) Deve ser CURTA. 2) Não usar delay() ou funções que dependam de tempo. 3) Variáveis compartilhadas com o main devem ser 'volatile'. 4) Não usar Serial.print(). 5) ISR não retorna valor."},

  {"id":"t02","topico":"p2_interrup","tier":"S","tipo":"CALC",
   "pergunta":"Timer1 do Arduino (16MHz), prescaler=256. Valor de OCR1A para interrupção a cada 1 segundo?",
   "resposta":"62500","unidade":"(adimensional)","tolerancia":0,
   "explicacao":"16.000.000 / 256 = 62.500 ciclos/s. OCR1A = 62500. Prescaler 64 daria 250.000 > 65535 (inválido p/ 16 bits). Prescaler 256 dá 62500 ✓"},

  {"id":"t03","topico":"p2_interrup","tier":"S","tipo":"MC",
   "pergunta":"Quais pinos do Arduino Uno suportam interrupções EXTERNAS (INT0, INT1)?",
   "opcoes":["A) Pinos 0 e 1","B) Pinos 2 e 3","C) Pinos 9 e 10","D) Pinos A0 e A1"],
   "resposta":"B",
   "explicacao":"Pino 2 = INT0, Pino 3 = INT1. Únicos pinos com interrupção externa dedicada no Uno. Permitem reagir imediatamente a eventos físicos."},

  {"id":"t04","topico":"p2_interrup","tier":"A","tipo":"MC",
   "pergunta":"O Timer0 controla delay(), millis() e micros(). Isso significa que:",
   "opcoes":["A) Não se deve reconfigurar o Timer0 para outros usos",
             "B) delay() é mais precisa que timer manual",
             "C) Timer0 pode ser substituído pelo Timer2 para isso",
             "D) Tempo é por hardware externo"],
   "resposta":"A",
   "explicacao":"Timer0 é usado internamente pelo Arduino para delay/millis/micros. Reconfigurá-lo quebra essas funções. Para temporizações manuais, use Timer1 (16 bits) ou Timer2."},

  {"id":"t05","topico":"p2_interrup","tier":"A","tipo":"ESCREVA",
   "pergunta":"Explique o WDT (Watch Dog Timer) e como resolve o problema de travamento.",
   "resposta_esperada":"WDT = timer com clock independente. Problema: MCU pode travar (loop infinito, endereço corrompido, espera sem resposta). Solução: WDT conta até valor pré-definido → se atingir, reseta o MCU. O MCU deve periodicamente resetar o WDT (wdt_reset()). Se o MCU travar, para de resetar o WDT → WDT reseta o sistema → operação restaurada."},

  {"id":"t06","topico":"p2_interrup","tier":"A","tipo":"MC",
   "pergunta":"Diferença entre Timer0 (8 bits) e Timer1 (16 bits)?",
   "opcoes":["A) Timer0 é mais preciso",
             "B) Timer1 conta até 65535 vs 255 — permite intervalos maiores sem mudar prescaler",
             "C) Timer1 só funciona com interrupção externa",
             "D) Timer0 tem mais prescalers"],
   "resposta":"B",
   "explicacao":"Timer0/2: 8 bits → 0 a 255. Timer1: 16 bits → 0 a 65535. Com 16MHz e prescaler 256: Timer0 dura ~4ms; Timer1 dura ~1 segundo inteiro."},
]

# ── FLASHCARDS ──────────────────────────────────────────────
FLASHCARDS = [
  ("Von Neumann","Memória única para dados e instruções. Um barramento. 2 ciclos por instrução. Microprocessadores."),
  ("Harvard","Memórias separadas (Flash=código, SRAM=dados). Barramentos diferentes. Pipeline possível. Microcontroladores."),
  ("DDRD","Data Direction Register Porta D. Bit=0 → entrada. Bit=1 → saída.\nEx: DDRD |= (1<<5) → pino 5 como saída."),
  ("PORTD (saída)","Define o valor na saída (0 ou 1).\nEx: PORTD |= (1<<5) → seta pino 5 HIGH.\nPORTD &= ~(1<<5) → seta pino 5 LOW."),
  ("PORTD (entrada)","Com pino configurado como entrada:\nbit=1 → habilita pull-up interno.\nbit=0 → desabilita pull-up (flutuante)."),
  ("PIND","Registrador de LEITURA da porta D. Somente leitura.\nbotao = (PIND & (1<<PD2)) >> 2;"),
  ("ADC 10 bits Arduino","0 a 1023 valores. Tensão = (leitura/1023) × Vref.\nVref=5V → resolução = 4,89mV por contagem.\nFunção: analogRead(pinoA)."),
  ("PWM Arduino","Pinos: 3,5,6,9,10,11 (marcados com ~).\nResolução 8 bits (0-255). Freq. típica 490Hz.\nFunção: analogWrite(pino, 0-255)."),
  ("Pull-Up","Resistor entre Vcc e entrada.\nBotão aberto → lê HIGH. Botão GND → lê LOW.\nR típico: 4,7KΩ a 10KΩ."),
  ("Cap. desacoplamento","100nF entre Vcc e GND próximo ao CI.\nFiltra ruídos de alta frequência na alimentação.\nEssencial para microcontroladores."),
  ("UART","2 fios (Tx,Rx). Assíncrono. Full-duplex.\n<5Mbps. 2 pontos. Formato: start+dados(8)+paridade+stop."),
  ("I2C","2 fios (SDA,SCL). Síncrono. Half-duplex.\n<5Mbps. Até 1008 dispositivos. Endereço 7 bits."),
  ("SPI","4 fios (MOSI,MISO,SCK,SS). Síncrono. Full-duplex.\n<65Mbps. 1 mestre, múltiplos escravos via SS."),
  ("Precisão","Reprodutibilidade — medições sempre próximas entre si.\nSolução p/ imprecisão aleatória: MÉDIA."),
  ("Exatidão","Proximidade do valor real — pode ser imprecisa.\nSolução p/ inexatidão sistemática: CALIBRAÇÃO."),
  ("Nyquist","Taxa de amostragem ≥ 2 × frequência máxima\npara representar corretamente o sinal original."),
  ("WDT","Watch Dog Timer. Clock independente.\nMCU deve resetá-lo periodicamente via wdt_reset().\nSe MCU travar → WDT reseta o sistema."),
  ("ISR","Interrupt Service Routine.\nDeve ser CURTA. Sem delay(). Sem Serial.\nVariáveis compartilhadas → volatile."),
  ("Timer1","16 bits (0-65535). Não afeta millis().\nPrescaler 256 + OCR1A=62500 → 1 segundo exato."),
  ("Prescaler","Divisor do clock p/ o timer.\nValores Timer1: 1, 8, 64, 256, 1024.\nPrescaler 256 → 16M/256 = 62.500 Hz no timer."),
  ("MQTT QoS","Nível 0: dispara e esquece.\nNível 1: confirma entrega (pode duplicar).\nNível 2: exatamente uma vez (4 etapas handshake)."),
  ("Flash ATMega328P","32KB. Sketch/programa. Não volátil.\nGravada via USB (bootloader) ou ISP."),
  ("SRAM ATMega328P","2KB. Variáveis, pilha, heap. VOLÁTIL.\nPerde ao desligar. Registradores E/S mapeados aqui."),
  ("EEPROM ATMega328P","1KB. Dados não-voláteis.\nSobrevive ao desligamento.\nEscrita por software com biblioteca EEPROM."),
  ("DAC R-2R","Rede de resistores em escada com 2 valores (R e 2R).\nVantagem: só 2 tipos de resistor facilitam fabricação."),
  ("Relay Attack","Ataque IoT: ladrão 1 próx. ao carro captura sinal.\nLadrão 2 próx. à chave retransmite.\nCarro abre pensando que chave está perto."),
  ("Hard RT vs Soft RT","Hard RT: requisitos de tempo rígidos, não violáveis. Ex: airbag.\nSoft RT: pode operar mesmo com atrasos. Ex: streaming."),
  ("Série E-12","Norma IEC 60063 p/ valores comerciais de resistores.\n12 valores por década (10% tolerância).\nEx: 10,12,15,18,22,27,33,39,47,56,68,82."),
  ("Capacitor (carga/descarga)","Corrente inicial = V/R (lei de Ohm).\nTensão sobe exponencialmente até Vfonte.\nCapacitância parasita causa atraso em sinais digitais."),
  ("ESP-NOW","Protocolo proprietário Espressif.\nUsa transceptor Wi-Fi/BT (2,4GHz). Sem roteador.\nAté 20 dispositivos. Pacotes ≤250 bytes. <1Mbps."),
]

# ── PROGRESSO ───────────────────────────────────────────────
PROGRESS_FILE = Path(__file__).parent / ".robo_progresso.json"

def load_progress():
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {"sessoes":0,"total_q":0,"total_c":0,
            "topicos":{k:{"f":0,"c":0} for k in TOPICOS},
            "erros":{}}

def save_progress(p):
    with open(PROGRESS_FILE,"w") as f:
        json.dump(p, f, indent=2, ensure_ascii=False)

# ── EXECUTORES DE QUESTÃO ────────────────────────────────────
def cabecalho_questao(q, n, total):
    tier_info = {"S":(C.RED,"⭐ CRÍTICO"),"A":(C.YELLOW,"🔶 IMPORTANTE"),"B":(C.BLUE,"🔷 COMPLEMENTAR")}
    cor, label = tier_info.get(q.get("tier","B"),(C.WHITE,""))
    print(f"\n{C.BOLD}{cor}  {label}{C.RESET}  {C.DIM}| {n}/{total} | {TOPICOS.get(q['topico'],'')}{C.RESET}")
    print(f"\n  {C.WHITE}{C.BOLD}{q['pergunta']}{C.RESET}\n")

def exec_mc(q):
    for op in q["opcoes"]:
        print(f"    {op}")
    print()
    while True:
        r = ask("  Sua resposta (A/B/C/D): ").upper()
        if r in "ABCD" and len(r)==1: break
        print(f"  {C.RED}Digite A, B, C ou D.{C.RESET}")
    acertou = r == q["resposta"]
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✅ CORRETO!{C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}❌ Incorreto. Resposta: {q['resposta']}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    return acertou

def exec_escreva(q):
    print(f"  {C.YELLOW}✍️  Escreva sua resposta (Enter em branco duas vezes para terminar):{C.RESET}\n")
    linhas = []
    while True:
        l = ask("  > ")
        if l == "" and linhas and linhas[-1] == "": break
        linhas.append(l)
    print(f"\n  {C.CYAN}📚 Resposta esperada:{C.RESET}\n  {q['resposta_esperada']}\n")
    print(f"  {C.YELLOW}Avalie-se honestamente:{C.RESET}")
    for n,d in [("1","Não sabia nada"),("2","Sabia pouco"),("3","Sabia parcialmente"),
                ("4","Sabia a maior parte"),("5","Sabia tudo / muito próximo")]:
        print(f"    {n} = {d}")
    while True:
        v = ask("\n  Nota (1-5): ")
        if v in "12345" and len(v)==1: v=int(v); break
    msgs = {5:f"{C.GREEN}🎯 Excelente!",4:f"{C.GREEN}✅ Bom!",
            3:f"{C.YELLOW}⚠️  Razoável — releia.",2:f"{C.RED}📖 Precisa de atenção.",
            1:f"{C.RED}📖 Escreva sobre este tópico hoje!"}
    print(f"\n  {msgs[v]}{C.RESET}")
    return v >= 4

def exec_calc(q):
    print(f"  {C.YELLOW}🔢 Unidade esperada: {q.get('unidade','')}{C.RESET}\n")
    while True:
        r = ask("  Resultado: ").replace(",",".")
        try: val = float(r); break
        except: print(f"  {C.RED}Digite apenas o número.{C.RESET}")
    correto = float(q["resposta"])
    tol = float(q.get("tolerancia",0))
    acertou = abs(val - correto) <= max(tol, 0.001)
    if acertou:
        print(f"\n  {C.GREEN}{C.BOLD}✅ CORRETO! ({correto} {q.get('unidade','')}){C.RESET}")
    else:
        print(f"\n  {C.RED}{C.BOLD}❌ Incorreto. Correto: {correto} {q.get('unidade','')}{C.RESET}")
    print(f"\n  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    return acertou

def exec_complete(q):
    print(f"  {C.YELLOW}✏️  Preencha os espaços em branco:{C.RESET}\n")
    ask("  Sua resposta: ")
    print(f"\n  {C.CYAN}✅ Esperado:{C.RESET} {q['resposta']}")
    print(f"  {C.CYAN}💡 {q['explicacao']}{C.RESET}")
    while True:
        v = ask("\n  Você acertou? (s/n): ").lower()
        if v in ("s","n","sim","não","nao"): break
    return v.startswith("s")

def rodar_questao(q, n, total, prog):
    cabecalho_questao(q, n, total)
    t = q["tipo"]
    if t=="MC":      acertou = exec_mc(q)
    elif t=="ESCREVA": acertou = exec_escreva(q)
    elif t=="CALC":  acertou = exec_calc(q)
    else:            acertou = exec_complete(q)
    prog["total_q"] += 1
    prog["total_c"] += int(acertou)
    tp = q["topico"]
    prog["topicos"].setdefault(tp,{"f":0,"c":0})
    prog["topicos"][tp]["f"] += 1
    prog["topicos"][tp]["c"] += int(acertou)
    if not acertou:
        prog["erros"][q["id"]] = prog["erros"].get(q["id"],0) + 1
    return acertou

# ── MODOS ────────────────────────────────────────────────────
def barra(pct, w=28):
    f = int(pct/100*w)
    cor = C.GREEN if pct>=70 else C.YELLOW if pct>=50 else C.RED
    return f"{cor}{'█'*f}{'░'*(w-f)} {pct:.0f}%{C.RESET}"

def resultado_sessao(corretas, total):
    cls(); title("RESULTADO", C.GREEN if corretas/total>=0.7 else C.YELLOW)
    pct = corretas/total*100
    nota = 5 + pct/100*5
    print(f"\n  Acertos: {C.BOLD}{corretas}/{total}{C.RESET}  {barra(pct)}")
    print(f"  Nota estimada: {C.BOLD}{nota:.1f}/10{C.RESET}\n")
    if pct>=80: print(f"  {C.GREEN}🏆 Ótimo! Você domina este conteúdo!{C.RESET}")
    elif pct>=60: print(f"  {C.YELLOW}📚 Bom progresso! Revise os erros.{C.RESET}")
    else: print(f"  {C.RED}📖 Atenção! Releia e tente novamente.{C.RESET}")

def modo_topico(prog):
    cls(); title("ESTUDO POR TÓPICO", C.CYAN)
    prefixo = escolher_prova()
    lista = [(k,n) for k,n in TOPICOS.items() if k.startswith(prefixo)]
    for i,(k,n) in enumerate(lista,1):
        tp = prog["topicos"].get(k,{"f":0,"c":0})
        f,c = tp["f"],tp["c"]
        s = f"({c}/{f})" if f>0 else "(não iniciado)"
        print(f"  {C.YELLOW}[{i}]{C.RESET} {n} {C.DIM}{s}{C.RESET}")
    print(f"  {C.YELLOW}[0]{C.RESET} Voltar\n")
    while True:
        e = ask("  Escolha: ")
        if e=="0": return
        try:
            idx = int(e)-1
            if 0<=idx<len(lista): break
        except: pass
        print(f"  {C.RED}Inválido.{C.RESET}")
    key = lista[idx][0]
    qs = [q for q in QUESTOES if q["topico"]==key]
    random.shuffle(qs)
    cls(); title(f"TÓPICO: {TOPICOS[key]}", C.CYAN)
    print(f"\n  {C.DIM}{len(qs)} questões{C.RESET}\n"); pause()
    corretas = 0
    for i,q in enumerate(qs,1):
        cls(); hr()
        corretas += int(rodar_questao(q,i,len(qs),prog))
        save_progress(prog); pause()
    resultado_sessao(corretas, len(qs)); pause()

def escolher_prova():
    """Retorna prefixo de filtro: 'p1_', 'p2_' ou '' (todas)."""
    print(f"\n  {C.BOLD}Filtrar por prova?{C.RESET}")
    print(f"  {C.YELLOW}[1]{C.RESET} 📗 Prova 1 (slides 0–236) — revisão")
    print(f"  {C.YELLOW}[2]{C.RESET} 📘 Prova 2 (slides 237–307) — conteúdo novo")
    print(f"  {C.YELLOW}[3]{C.RESET} 🔀 Todas (misto)\n")
    while True:
        e = ask("  Escolha: ")
        if e=="1": return "p1_"
        if e=="2": return "p2_"
        if e=="3": return ""
        print(f"  {C.RED}Digite 1, 2 ou 3.{C.RESET}")

def modo_quiz(prog, n=10):
    cls(); title("⚡ QUIZ INTELIGENTE", C.MAGENTA)
    prefixo = escolher_prova()
    # Prioriza questões que o aluno errou mais
    erros = prog.get("erros",{})
    pool = [q for q in QUESTOES if q["topico"].startswith(prefixo)]
    pool = sorted(pool, key=lambda q: -erros.get(q["id"],0))
    tier_s = [q for q in pool if q.get("tier")=="S"]
    tier_a = [q for q in pool if q.get("tier")=="A"]
    tier_b = [q for q in pool if q.get("tier")=="B"]
    # Mix: 40% S, 40% A, 20% B
    ns = min(4, len(tier_s)); na = min(4, len(tier_a)); nb = min(2, len(tier_b))
    qs = random.sample(tier_s,ns) + random.sample(tier_a,na) + random.sample(tier_b,nb)
    if not qs: qs = pool
    qs = qs[:n]; random.shuffle(qs)
    label = {"p1_":"Prova 1","p2_":"Prova 2","":"Todas as provas"}.get(prefixo,"")
    cls(); title(f"⚡ QUIZ — {label} — {len(qs)} questões", C.MAGENTA)
    pause()
    corretas = 0
    for i,q in enumerate(qs,1):
        cls(); hr()
        corretas += int(rodar_questao(q,i,len(qs),prog))
        save_progress(prog); pause()
    resultado_sessao(corretas, len(qs)); pause()

FLASHCARDS_P1 = [c for c in FLASHCARDS if c[0] in (
    "Von Neumann","Harvard","DDRD","PORTD (saída)","PORTD (entrada)","PIND",
    "ADC 10 bits Arduino","PWM Arduino","Pull-Up","Cap. desacoplamento",
    "UART","I2C","SPI","Flash ATMega328P","SRAM ATMega328P","EEPROM ATMega328P",
    "DAC R-2R","Relay Attack","Hard RT vs Soft RT","Série E-12","Capacitor (carga/descarga)","ESP-NOW")]
FLASHCARDS_P2 = [c for c in FLASHCARDS if c[0] in (
    "ADC 10 bits Arduino","PWM Arduino","Precisão","Exatidão","Nyquist",
    "WDT","ISR","Timer1","Prescaler","MQTT QoS","DAC R-2R")]

def modo_flashcards(prog):
    cls(); title("🃏 FLASHCARDS", C.MAGENTA)
    prefixo = escolher_prova()
    if prefixo=="p1_": cards = list(FLASHCARDS_P1)
    elif prefixo=="p2_": cards = list(FLASHCARDS_P2)
    else: cards = list(FLASHCARDS)
    random.shuffle(cards)
    print(f"\n  {len(cards)} cards. Leia o termo, tente lembrar antes de virar.\n"); pause()
    acertos = 0
    for i,(termo,defin) in enumerate(cards,1):
        cls()
        print(f"\n  {C.DIM}Card {i}/{len(cards)}{C.RESET}")
        print(f"\n  {'─'*52}")
        print(f"  {C.CYAN}{C.BOLD}  {termo}{C.RESET}")
        print(f"  {'─'*52}\n")
        ask("  [Enter para ver a definição]")
        print(f"\n  {C.GREEN}{defin}{C.RESET}\n")
        while True:
            v = ask("  Você sabia? (s/n): ").lower()
            if v in ("s","n","sim","não","nao"): break
        if v.startswith("s"):
            acertos += 1; print(f"  {C.GREEN}+1 ✓{C.RESET}")
        else:
            print(f"  {C.RED}Anote para revisar.{C.RESET}")
        time.sleep(0.4)
    resultado_sessao(acertos, len(cards)); pause()

def modo_progresso(prog):
    cls(); title("📊 SEU PROGRESSO", C.CYAN)
    tq,tc = prog["total_q"],prog["total_c"]
    print(f"\n  Sessões: {prog['sessoes']}  |  Questões: {tq}  |  Acertos: {tc}")
    if tq>0:
        pct=tc/tq*100
        print(f"  Aproveitamento: {barra(pct)}")
        print(f"  Nota estimada:  {C.BOLD}{5+pct/100*5:.1f}/10{C.RESET}")
    print(f"\n  {C.BOLD}Por tópico:{C.RESET}\n")
    for k,n in TOPICOS.items():
        tp=prog["topicos"].get(k,{"f":0,"c":0})
        f,c=tp["f"],tp["c"]
        if f==0: print(f"  {C.DIM}  {n}: não iniciado{C.RESET}")
        else:
            p=c/f*100
            cor=C.GREEN if p>=70 else C.YELLOW if p>=50 else C.RED
            print(f"  {cor}  {n}: {c}/{f} ({p:.0f}%){C.RESET}")
    erros = prog.get("erros",{})
    if erros:
        top_erros = sorted(erros.items(),key=lambda x:-x[1])[:5]
        print(f"\n  {C.RED}{C.BOLD}Top questões para rever:{C.RESET}")
        for qid,cnt in top_erros:
            q = next((x for x in QUESTOES if x["id"]==qid),None)
            if q: print(f"  {C.RED}  [{cnt}x] {q['pergunta'][:65]}...{C.RESET}")
    print(); pause()

# ── MENU PRINCIPAL ───────────────────────────────────────────
def menu():
    prog = load_progress()
    prog["sessoes"] = prog.get("sessoes",0) + 1
    while True:
        cls()
        print(f"""
{C.CYAN}{C.BOLD}
  ╔══════════════════════════════════════════════════╗
  ║      🤖  ROBOESTUDO — SISTEMAS EMBARCADOS        ║
  ║      Prof. Marco Câmara — UCSAL 2026-01          ║
  ║         📅 Prova 2: 9 de junho (segunda)          ║
  ╚══════════════════════════════════════════════════╝
{C.RESET}""")
        tq,tc = prog["total_q"],prog["total_c"]
        if tq>0:
            pct=tc/tq*100
            nota=5+pct/100*5
            cor=C.GREEN if pct>=70 else C.YELLOW if pct>=50 else C.RED
            print(f"  {C.DIM}Progresso: {tc}/{tq} ({pct:.0f}%) | Nota estimada: {cor}{nota:.1f}/10{C.RESET}\n")
        hr()
        print(f"\n  {C.BOLD}O que vamos fazer?{C.RESET}\n")
        print(f"  {C.YELLOW}[1]{C.RESET} 📚 Estudo por Tópico")
        print(f"  {C.YELLOW}[2]{C.RESET} ⚡ Quiz Inteligente  {C.DIM}(prioriza seus pontos fracos){C.RESET}")
        print(f"  {C.YELLOW}[3]{C.RESET} 🃏 Flashcards")
        print(f"  {C.YELLOW}[4]{C.RESET} 📊 Ver Progresso")
        print(f"  {C.YELLOW}[5]{C.RESET} 🚪 Sair\n")
        e = ask("  Escolha: ")
        if   e=="1": modo_topico(prog)
        elif e=="2": modo_quiz(prog)
        elif e=="3": modo_flashcards(prog)
        elif e=="4": modo_progresso(prog)
        elif e=="5":
            cls(); save_progress(prog)
            print(f"\n  {C.GREEN}{C.BOLD}💪 Bons estudos! Você consegue na prova de 9/06!{C.RESET}\n")
            break

if __name__ == "__main__":
    menu()
