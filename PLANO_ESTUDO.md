# Plano de Estudo — Sistemas Embarcados (Prof. Marco Câmara)
**Prova 2 — 9 de junho de 2026 (segunda-feira)**
Nota atual: 5,4 | Meta mínima na P2: **6,7** (para garantir média ≥ 6,05)

---

## Mapa de Tópicos

### PROVA 1 — Tópicos para Revisar (slides 0–236)

| # | Tópico | Peso Provável | Revisar? |
|---|--------|--------------|---------|
| 1 | Definição e classificação de SE (autônomo, rede, tempo real, móvel) | Alto | Sim |
| 2 | Motivação histórica + Lógica Fixa vs. Microcontrolado | Médio | Sim |
| 3 | IoT: características, segurança (relay attack, AirTag) | Alto | Sim |
| 4 | Redes IoT: WPAN, WLAN, WWAN, ZigBee, LoRa | Médio | Sim |
| 5 | Microprocessador vs. Microcontrolador (diferenças) | **Crítico** | Sim |
| 6 | Arquitetura Von Neumann vs. Harvard | **Crítico** | Sim |
| 7 | Arduino Uno R3 — componentes, GPIOs, pinos especiais | **Crítico** | Sim |
| 8 | Eletrônica: Resistores (lei de Ohm, divisor de tensão, pull-up/down) | **Crítico** | Sim |
| 9 | Eletrônica: Capacitores (desacoplamento, capacitância parasita) | Alto | Sim |
| 10 | Semicondutores, Diodos e Transistores (BJT como chave) | Médio | Sim |
| 11 | Memória ATMega328P: Flash, SRAM, EEPROM | Alto | Sim |
| 12 | Registradores: DDRD, PORTD, PIND + operações binárias (&, |, ~, <<) | **Crítico** | Sim |

### PROVA 2 — Tópicos Novos (slides 237–307 já vistos em aula)

| # | Tópico | Peso Provável |
|---|--------|--------------|
| 1 | Medição analógica básica + instabilidade | Alto |
| 2 | Precisão vs. Exatidão vs. Linearidade | **Crítico** |
| 3 | Média Móvel (algoritmo e implementação) | Alto |
| 4 | Resolução em bits e contagens | **Crítico** |
| 5 | Referências: Vcc, Interna (1,1V), Externa (AREF) | Alto |
| 6 | Taxa de Amostragem e Teorema de Nyquist | Médio |
| 7 | WDT (Watch Dog Timer) | Médio |
| 8 | Escalas e divisor de tensão para ADC | Alto |
| 9 | ADC: arquitetura paralela, SAR, Sigma-Delta | Médio |
| 10 | DAC: resistores ponderados e rede R-2R | Médio |
| 11 | PWM: Duty Cycle, frequência, resolução 8 bits | **Crítico** |
| 12 | Registradores ATMega328P (acesso binário, operações) | **Crítico** |
| 13 | Interrupções: ISR, vetores, INT0/INT1 | **Crítico** |
| 14 | Timers 0, 1 e 2: prescaler, comparação, overflow | **Crítico** |
| 15 | Fases do Projeto de SE (requisitos → protótipo) | Médio |

---

## Cronograma Detalhado (27 mai → 9 jun)

### Legenda
- **FÁCIL** = dia livre para estudo longo (2–4h)
- **DIFÍCIL** = estágio + aula (máx. 1h, revisar material curto)

---

### SEMANA 1 — Revisão da Prova 1 (base sólida)

| Dia | Tipo | Foco | Atividade |
|-----|------|------|-----------|
| **Ter 27/05** (hoje) | DIFÍCIL | Orientação | Leia este plano, organize materiais. 30 min. |
| **Qua 28/05** | FÁCIL | Microcontrolador vs. Microprocessador + Arquiteturas | Escreva 1 página comparando Von Neumann x Harvard. Faça um esquema das diferenças entre µP e µC. |
| **Qui 29/05** | DIFÍCIL | Arduino Uno R3 | Revise apenas os pinos: quais são PWM, UART, SPI, I2C, interrupções. Escreva de memória. |
| **Sex 30/05** | FÁCIL | Eletrônica: Resistores + Capacitores | Resolva 3 exercícios de lei de Ohm, 1 divisor de tensão, 1 pull-up. Escreva explicação do capacitor de desacoplamento. |
| **Sáb 31/05** | FÁCIL | Registradores + Operações Binárias | Pratique operações: ativar bit com OR, desativar com AND+NOT, ler com AND. Refaça o exemplo LED+Botão do slide sem olhar. |
| **Dom 01/06** | FÁCIL | IoT + Classificação SE + Revisão Semana | Escreva definições de todas as classificações. Revise tudo da semana, identifique dúvidas. |

---

### SEMANA 2 — Conteúdo da Prova 2

| Dia | Tipo | Foco | Atividade |
|-----|------|------|-----------|
| **Seg 02/06** | DIFÍCIL | Precisão, Exatidão, Linearidade | Releia os 3 conceitos no slide. Escreva a diferença com exemplos próprios. 45 min. |
| **Ter 03/06** | DIFÍCIL | Resolução + Referência ADC | Escreva a fórmula de resolução. Calcule exemplos: 10 bits com 5V, com 1,1V. |
| **Qua 04/06** | FÁCIL | ADC, DAC e PWM | Escreva como funciona cada um. Calcule: quantas contagens para medir 0–100°C com 1°C de precisão? Implemente (no papel) um sketch PWM simples. |
| **Qui 05/06** | DIFÍCIL | Interrupções + Timers | Releia os vetores de interrupção. Escreva o processo de configurar o Timer1 para 1 segundo (prescaler 256, comparador 62500). |
| **Sex 06/06** | FÁCIL | Comunicação: UART, I2C, SPI, ESP-NOW | Faça uma tabela comparativa dos protocolos (fios, velocidade, mestre/escravo, alcance). Escreva o formato de quadro do UART e I2C. |
| **Sáb 07/06** | FÁCIL | Simulado + Revisão Geral | Monte 15 perguntas e responda sem consulta. Revise tudo que errou. Foco nos tópicos "Crítico". |
| **Dom 08/06** | FÁCIL | Revisão Final Leve | Releia os mapas e resumos escritos. Não estude conteúdo novo. Descanse bem. |
| **Seg 09/06** | **PROVA** | — | Boa sorte! |

---

## Estratégias de Estudo

### Para quem aprende escrevendo (seu perfil):

**1. Técnica "Explicar para si mesmo"**
Ao estudar um tópico, feche o material e escreva em 1 página como se estivesse explicando para um colega. Se travar, abra o slide, leia e tente de novo. Funciona especialmente bem para:
- Diferenças µP vs µC
- Precisão vs Exatidão
- Como funciona o ADC

**2. Mapas Mentais Escritos**
Para tópicos com muitas subdivisões (ex: GPIOs do Arduino), faça um mapa no papel. É mais rápido rever um mapa do que um slide longo.

**3. Formulário de Fórmulas**
Crie 1 folha com todas as fórmulas e conceitos numéricos:
- Lei de Ohm: V = R × I
- Resistores em série/paralelo
- Resolução: 2^n valores, 2^n - 1 contagens
- Tensão ADC: V = (leitura / 1023) × Vref
- Pull-up: R = Vcc / (5% × Imax) ≈ 4,7 KΩ

**4. Flashcards de Conceitos**
Para cada protocolo de comunicação, escreva em um cartão:
- Frente: nome do protocolo
- Verso: fios necessários, velocidade, sincronia, full/half-duplex, uso típico

---

## Materiais e Vídeos Recomendados

### YouTube (assistir pontualmente, não substituir leitura)

| Tópico | Busca Sugerida |
|--------|---------------|
| Arquitetura Harvard vs Von Neumann | "Harvard vs Von Neumann Architecture explained" |
| ADC funcionamento | "How ADC works Arduino analogRead" |
| PWM conceito | "PWM explicado Arduino português" |
| I2C protocolo | "I2C protocol explained Rohde Schwarz" (canal oficial) |
| Timer Interrupt Arduino | "Arduino Timer Interrupt tutorial" |
| Pull-up Pull-down | "Arduino pull up pull down resistor" |

### Ferramentas Online Gratuitas
- **Wokwi** (wokwi.com) — Simulador de Arduino no browser. Teste circuitos sem hardware.
- **Arduino IDE** — Execute e modifique os sketches dos slides.
- **calculink.com** — Calculadora de código de cores de resistores.

---

## Prioridade por Importância (do mais ao menos crítico)

### Tier S — Não pode errar
1. Operações com registradores binárias (AND, OR, NOT, shift)
2. Diferença Precisão vs Exatidão vs Linearidade
3. Resolução em bits (fórmula e cálculo)
4. Interrupções e Timers (configuração do prescaler)
5. Arduino Uno R3 — GPIOs e funções especiais

### Tier A — Alta probabilidade
6. Microprocessador vs. Microcontrolador vs. SBC
7. Von Neumann vs. Harvard
8. PWM (Duty Cycle)
9. ADC: princípio de funcionamento
10. Divisor de tensão e pull-up/pull-down

### Tier B — Pode cair
11. Protocolos de comunicação (tabela comparativa)
12. IoT: características e segurança
13. Classificação de SE
14. Capacitor de desacoplamento e capacitância parasita
15. DAC (resistores ponderados, rede R-2R)

---

## Resumo dos Conceitos-Chave

### Arquitetura Von Neumann vs Harvard

| | Von Neumann | Harvard |
|--|-------------|---------|
| Memória | Única (dados + instruções) | Separada |
| Barramento | Único | Separado por tipo |
| Performance | Menor | Maior (pipeline) |
| Uso em SE | Microprocessadores | Microcontroladores, DSP |
| Exemplo | Intel x86 | ATMega328P |

### GPIOs do Arduino Uno R3 — Resumo

| Pino(s) | Função Especial |
|---------|----------------|
| 0, 1 | UART (Rx, Tx) |
| 2, 3 | Interrupções externas (INT0, INT1) |
| 3, 5, 6, 9, 10, 11 | PWM (~) |
| 10–13 | SPI (SS, MOSI, MISO, SCK) |
| A4, A5 | I2C (SDA, SCL) |
| 13 | LED interno |
| A0–A5 | ADC 10 bits (0–5V → 0–1023) |

### Fórmulas Importantes

```
Tensão (Lei de Ohm):    V = R × I
Potência:               P = V × I = R × I²
Resistores série:       Rt = R1 + R2 + R3
Resistores paralelo:    1/Rt = 1/R1 + 1/R2 + 1/R3
Divisor de tensão:      Vout = Vin × R2 / (R1 + R2)

ADC 10 bits:            Tensão = (leitura / 1023) × Vref
Resolução:              n bits → 2^n valores → 2^n - 1 contagens
Resolução mínima:       2^n ≥ nº de valores desejados

Timer1 (1 segundo):     16.000.000 / prescaler_256 = 62.500
```

### Precisão × Exatidão × Linearidade

- **Precisão**: estabilidade das medições (valores sempre próximos entre si)
- **Exatidão**: proximidade do valor real (pode ter erro sistemático)
- **Linearidade**: correspondência proporcional ao longo de toda a faixa
- Média aritmética resolve **falta de precisão** (ruído aleatório)
- Calibração corrige **falta de exatidão** (erro sistemático)

### Protocolos de Comunicação — Tabela Rápida

| Protocolo | Fios | Velocidade | Tipo | Pontos |
|-----------|------|-----------|------|--------|
| UART | 2 (Tx, Rx) | <5 Mbps | Assíncrono, full-duplex | 2 |
| I2C | 2 (SDA, SCL) | <5 Mbps | Síncrono, half-duplex | até 1008 |
| SPI | 4 (MOSI, MISO, SCK, SS) | <65 Mbps | Síncrono, full-duplex | n |
| UART/RS-232 | 2 | <5 Mbps | Assíncrono | 2 |
| ESP-NOW | sem fio | <1 Mbps | Proprietário Espressif | até 20 |
| LoRa | sem fio | <5 Kbps | Assíncrono | n |

### Configuração do Timer1 para 1 segundo (Arduino 16MHz)

```cpp
// Setup
TCCR1A = 0;                  // Reseta registrador A
TCCR1B = 0;                  // Reseta registrador B
TCCR1B |= (1 << CS12);       // Prescaler = 256
TCCR1B &= ~(1 << CS11);
TCCR1B &= ~(1 << CS10);
TIMSK1 |= (1 << OCIE1A);     // Habilita interrupção por comparação
OCR1A = 62500;               // Comparador (16MHz / 256 = 62500)
sei();                        // Habilita interrupções globais

// ISR
ISR(TIMER1_COMPA_vect) {
  TCNT1 = 0;                 // Reinicia contador
  PORTB ^= (1 << PB5);      // Inverte LED (pino 13)
}
```

### WDT (Watch Dog Timer)

- MCU pode "travar" (endereço corrompido, espera infinita)
- WDT tem clock independente
- Se MCU não resetar o WDT no tempo definido → WDT reseta o MCU
- MCU usa `wdt_reset()` periodicamente para evitar reset indesejado

---

## Dicas Finais

1. **Não tente aprender tudo de novo** — foque no que é Tier S e A
2. **Escreva sempre à mão** durante o estudo (seu ponto forte)
3. **Wokwi.com** é excelente para testar código sem ter o Arduino físico
4. **Faça exercícios de cálculo**: lei de Ohm, divisor de tensão, resolução ADC
5. **Na prova**: se travar em uma questão, pule e volte depois
6. **Durma bem** no domingo (8/06) — descanso vale mais que revisar às 2h da manhã
