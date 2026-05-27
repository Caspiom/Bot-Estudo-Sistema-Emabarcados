# 🤖 RoboEstudo — Sistemas Embarcados

Tutor interativo de terminal para a disciplina **Sistemas Embarcados** do Prof. Marco Câmara (UCSAL 2026-01).

Estuda com base nos slides da disciplina: múltipla escolha, questões dissertativas, cálculos e flashcards — com filtro por Prova 1 ou Prova 2.

---

## Requisitos

- Python 3.8+
- Sem dependências externas (só biblioteca padrão)

---

## Como usar

```bash
python3 roboestudo.py
```

---

## Modos disponíveis

| Modo | Descrição |
|------|-----------|
| 📚 **Estudo por Tópico** | Escolhe P1 ou P2, depois o tópico específico |
| ⚡ **Quiz Inteligente** | Questões mistas que priorizam seus pontos fracos |
| 🃏 **Flashcards** | Termos e definições para revisar rápido |
| 📊 **Ver Progresso** | Aproveitamento por tópico + nota estimada |

---

## Tipos de exercício

- **Múltipla escolha** com explicação detalhada
- **Questões dissertativas** — você escreve e se autoavalia (1–5)
- **Cálculos** — lei de Ohm, resolução ADC, configuração de Timer
- **Complete o código** — registradores, operações binárias

---

## Conteúdo coberto

### Prova 1 (slides 0–236)
- Definição e classificação de SE (autônomo, rede, tempo real, móvel)
- Hardware: microprocessador vs microcontrolador
- Arquitetura Von Neumann vs Harvard
- Arduino Uno R3 — GPIOs e funções especiais
- Eletrônica: resistores, capacitores, diodos, transistores
- Memória do ATMega328P (Flash, SRAM, EEPROM)
- Registradores e operações binárias (DDR, PORT, PIN)
- IoT e protocolos de comunicação (UART, I2C, SPI, MQTT)

### Prova 2 (slides 237–307)
- Medição analógica: precisão, exatidão, linearidade
- Média móvel
- Resolução em bits e contagens
- Referências ADC (Vcc, interna, externa)
- Taxa de amostragem e Teorema de Nyquist
- ADC, DAC e PWM
- WDT (Watch Dog Timer)
- Interrupções (ISR) e Timers (prescaler, comparador)

---

## Progresso

O arquivo `.robo_progresso.json` salva seu progresso localmente entre sessões. Ele está no `.gitignore` — cada pessoa tem o seu próprio.

---

## Slides

Os PDFs dos slides **não estão incluídos** no repositório (arquivos muito grandes). Baixe pelo link da turma e coloque na mesma pasta.

---

## Estrutura

```
.
├── roboestudo.py     # Tutor interativo
├── PLANO_ESTUDO.md   # Cronograma + resumo dos conteúdos
└── README.md
```
