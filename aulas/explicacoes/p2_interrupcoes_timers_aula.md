# Interrupções, ISR e Timers

> **Prova:** P2 | **Tier:** S | **Tópico:** `interrupcoes_timers`

---

## ❓ Por que Interrupções?

**Polling (varredura):** MCU fica em loop verificando continuamente se algo aconteceu. Desperdiça CPU, resposta lenta.

**Interrupção:** MCU faz outras coisas normalmente. Quando o evento ocorre, é "interrompido" automaticamente para tratar.

> **Analogia:** Polling = olhar pro telefone a cada 5 segundos. Interrupção = telefone tem campainha.

---

## ⚡ Como Funciona

```
Ciclo normal:
  Busca instrução → Decodifica → Executa → Verifica interrupção?
                                                ↓ Sim
                                     Salva estado (PC, registradores)
                                     Salta para ISR
                                     Executa ISR
                                     Restaura estado
                                     Retorna ao ponto original
```

### Regras da ISR

- ISR deve ser a **mais curta possível**
- **Proibido** dentro de ISR: `delay()`, `Serial.print()`, cálculos pesados
- Variáveis compartilhadas com o `loop()` devem ser `volatile`

▶ **PROVA:** ISR = menor possível. Durante a ISR, outras interrupções ficam bloqueadas.

---

## 📋 Vetores de Interrupção — ATMega328P

| Vetor | Nome | Evento |
|-------|------|--------|
| 1 | **RESET** | Liga MCU, power-on, brown-out, WDT ← **prioridade máxima** |
| 2 | INT0 | Sinal externo no pino 2 |
| 3 | INT1 | Sinal externo no pino 3 |
| 7 | WDT | Watchdog timer |
| 8–10 | TIMER2 | Timer2 (COMPA, COMPB, OVF) |
| 11–14 | TIMER1 | Timer1 (CAPT, COMPA, COMPB, OVF) |
| 15–17 | TIMER0 | Timer0 (COMPA, COMPB, OVF) |
| 22 | ADC | Conversão ADC completa |
| 25 | TWI | I2C |

▶ **PROVA:** RESET tem prioridade máxima (vetor 1).

---

## ⏱️ Os 3 Timers do ATMega328P

| Timer | Bits | Contagem máx. | Uso no Arduino |
|-------|------|---------------|----------------|
| **Timer 0** | 8 bits | 255 | `delay()`, `millis()`, `micros()`, `analogWrite()` pinos 5 e 6 |
| **Timer 1** | **16 bits** | **65.535** | Servos, `analogWrite()` pinos 9 e 10, captura |
| **Timer 2** | 8 bits | 255 | `tone()`, `analogWrite()` pinos 3 e 11 |

▶ **PROVA:** Timer 0 controla `millis()` — **não altere seu prescaler**! Use o **Timer 1** pra interrupções próprias.

---

## 🔧 Prescaler — Dividindo o Clock

Clock do Arduino Uno = **16 MHz** = 16 milhões ciclos/s.

Timer 1 estouraria a cada 4,1 ms sem prescaler. Para intervalos maiores:

| Prescaler | Clock efetivo | Período 1 ciclo | Máximo Timer 1 |
|-----------|---------------|-----------------|----------------|
| 1 | 16 MHz | 62,5 ns | 4,1 ms |
| 8 | 2 MHz | 500 ns | 32,8 ms |
| 64 | 250 kHz | 4 µs | 262 ms |
| **256** | **62,5 kHz** | **16 µs** | **~1,05 s** |
| 1024 | 15,625 kHz | 64 µs | ~4,19 s |

**Bits CS12/CS11/CS10 no TCCR1B:**

| CS12 | CS11 | CS10 | Prescaler |
|------|------|------|-----------|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 8 |
| 0 | 1 | 1 | 64 |
| **1** | **0** | **0** | **256** |
| 1 | 0 | 1 | 1024 |

---

## 🧮 Cálculo — Timer 1 a 1 segundo

**Objetivo:** gerar 1 interrupção por segundo com clock de 16 MHz.

```
f_clock = 16.000.000 Hz
OCR1A = f_clock / prescaler / f_desejada - 1

Com prescaler = 256:
OCR1A = 16.000.000 / 256 / 1 - 1 = 62.499

Verificação: 16.000.000 / 64 = 250.000 → maior que 65.535 → inválido!
             16.000.000 / 256 = 62.500 → cabe em 16 bits → válido! ✓
             16.000.000 / 1024 = 15.625 → também válido
```

▶ **PROVA:** Saber calcular prescaler e OCR1A. 16M/256 = 62.500 → 1 Hz com Timer 1.

---

## 💻 Código Completo — Timer 1 substituindo `delay()`

```c
void setup() {
    // LED no pino 13 (PB5) como saída
    DDRB |= (1 << PB5);

    // === Configura Timer 1 ===
    TCCR1A = 0;           // reseta (Arduino usa pra PWM por padrão)
    TCCR1B = 0;           // zera

    // Prescaler = 256 (CS12=1, CS11=0, CS10=0)
    TCCR1B |= (1 << CS12);

    // Modo CTC: timer zera automaticamente ao atingir OCR1A
    TCCR1B |= (1 << WGM12);

    // Valor de comparação: 62.499 (≈1 Hz)
    OCR1A = 62499;

    // Habilita interrupção por comparação
    TIMSK1 = (1 << OCIE1A);

    // Habilita interrupções globais
    sei();
}

volatile bool ledState = false;

// ISR disparada a cada 1 segundo
ISR(TIMER1_COMPA_vect) {
    PORTB ^= (1 << PB5);       // toggle do LED (1 instrução!)
    ledState = !ledState;       // atualiza variável compartilhada
}

void loop() {
    // livre pra fazer outras coisas!
    // o LED pisca pela ISR, independentemente do loop
}
```

### Por que `volatile`?

Sem `volatile`, o compilador pode guardar `ledState` num registrador de CPU. Se a ISR atualiza na memória, o `loop()` lê o valor antigo (do registrador). `volatile` força reler da memória sempre.

### Modo CTC vs Modo Normal

| Aspecto | Modo Normal | Modo CTC |
|---------|-------------|----------|
| Zerar TCNT | Manual na ISR (`TCNT1 = 0`) | **Automático** ao atingir OCR1A |
| ISR | Precisa de linha extra | **Menor** |
| Timing | Pequena variação | **Mais preciso** |

---

## 📌 Resumo Rápido

- Interrupção = campainha; Polling = ficar verificando
- ISR = curta, sem delay(), variáveis compartilhadas = volatile
- Timer 0 = 8 bits = millis/delay (não mexa!)
- Timer 1 = **16 bits** = interrupções customizadas
- 16 MHz / 256 = 62.500 → 1 Hz no Timer 1
- Modo CTC = zera automático = ISR menor = timing mais preciso
- SET = `|=`, RESET = `&=~`, TOGGLE = `^=`
