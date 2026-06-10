# ATMega328P — Memória, Registradores e Acesso Binário

<!-- Slide 0 -->

> **Prova:** P2 | **Tier:** S | **Tópico:** `atmega_registradores`



<!-- Slide 1 -->
🏗️ Arquitetura Harvard vs Von Neumann

| Aspecto | Von Neumann | Harvard (ATMega328P) |
|---------|-------------|----------------------|
| Barramentos | 1 compartilhado | **2 separados** |
| Acesso simultâneo | Não | **Sim** |
| Tamanho instrução | = dado | **Pode ser diferente** |
| Performance | Gargalo | **Maior** |

**ATMega328P:** instrução = **16 bits** (Flash); dado = **8 bits** (SRAM).

▶ **PROVA:** ATMega328P = **Arquitetura Harvard**, NÃO Von Neumann.



<!-- Slide 2 -->
💾 Os 3 Tipos de Memória

| Memória | Função | Tamanho | Volátil? | Palavras |
|---------|--------|---------|----------|---------|
| **Flash** | Programa (sketch + bootloader) | **32 KB** | Não | 16 bits |
| **SRAM** | Variáveis + registradores | **2.304 B** | Sim | 8 bits |
| **EEPROM** | Dados não voláteis do usuário | **1 KB** | Não | 8 bits |

**Mapa da SRAM:**
```
0x0000: 32 registradores de trabalho (R0–R31)
0x0020: 64 registradores de E/S (DDR, PORT, PIN, timers...)
0x0060: 160 registradores de E/S estendidos
0x0100: Variáveis do usuário (pilha cresce daqui)
0x08FF: Fim da SRAM
```

▶ **PROVA:** EEPROM = **não volátil** (persiste sem energia). SRAM = **volátil** (perde ao desligar).



<!-- Slide 3 -->
⚙️ Registradores de Porta — DDR, PORT, PIN

As portas B, C e D controlam os pinos digitais:

| Porta | Pinos Arduino |
|-------|---------------|
| Porta D | Pinos 0–7 (PD0–PD7) |
| Porta B | Pinos 8–13 (PB0–PB5) |
| Porta C | Pinos A0–A5 (PC0–PC5) |

Cada porta tem 3 registradores de 8 bits:

| Registrador | Função |
|-------------|--------|
| **DDRx** | Direção: **0 = entrada**, **1 = saída** |
| **PORTx** | Se saída: valor a apresentar. Se entrada: **1 = pull-up ligado**, 0 = desligado |
| **PINx** | **Somente leitura** — estado elétrico atual do pino |

▶ **PROVA:** DDR = 0 → entrada; DDR = 1 → saída. Muita gente inverte. PIN = somente leitura.



<!-- Slide 4 -->
🔣 Operações Bit-a-Bit — A Base de Tudo

Para manipular registradores sem destruir os outros bits:

### Criar Máscara: Operador de Deslocamento `<<`

```c
(1 << 0) = 00000001   // bit 0
(1 << 5) = 00100000   // bit 5
(1 << n) = ...        // bit n
```

### Ativar (SET) — Operação OU `|=`

```c
DDRD |= (1 << 5);    // ativa bit 5 de DDRD, mantém os outros
// equivale a: DDRD = DDRD | 00100000
```

### Desativar (RESET) — Operação E+NOT `&= ~`

```c
DDRD &= ~(1 << 5);   // desativa bit 5 de DDRD, mantém os outros
// equivale a: DDRD = DDRD & 11011111
```

### Inverter (TOGGLE) — Operação XOR `^=`

```c
PORTB ^= (1 << PB5);  // inverte bit 5 de PORTB
// se era 1 → vira 0; se era 0 → vira 1 (pisca LED!)
```

### Ler um Bit Específico

```c
// Verifica se bit 2 de PIND está em 1:
if ((PIND & (1 << 2)) != 0) { ... }

// Obtém 0 ou 1 no bit 0:
uint8_t val = (PIND >> 2) & 0x01;
```

▶ **PROVA:** SET = `|=`, RESET = `&= ~`, TOGGLE = `^=`. Saber de cor.



<!-- Slide 5 -->
💡 Exemplo Completo — Botão Acende LED

**Hardware:** LED no pino 5 (PD5), Botão no pino 2 (PD2) com pull-up interno.

```c
const int pinoLed   = 5;  // PD5
const int pinoBotao = 2;  // PD2

void setup() {
    // PD5 como saída (LED)
    DDRD |= (1 << pinoLed);

    // PD2 como entrada com pull-up
    DDRD  &= ~(1 << pinoBotao);  // entrada
    PORTD |=  (1 << pinoBotao);  // pull-up ligado
}

void loop() {
    // Lê o botão (0 = pressionado, pq pull-up inverte lógica)
    uint8_t botao = (PIND >> pinoBotao) & 0x01;

    if (botao == 0) {
        PORTD |= (1 << pinoLed);   // acende (HIGH)
    } else {
        PORTD &= ~(1 << pinoLed);  // apaga (LOW)
    }
}
```



<!-- Slide 6 -->
📌 Resumo Rápido

- Harvard: barramentos separados → acesso simultâneo → mais rápido
- Flash 32KB, SRAM 2KB, EEPROM 1KB
- DDR: 0=entrada, 1=saída | PORT: valor/pull-up | PIN: somente leitura
- SET → `|= (1<<n)` | RESET → `&= ~(1<<n)` | TOGGLE → `^= (1<<n)`
- Pinos 0–7 = Porta D | 8–13 = Porta B | A0–A5 = Porta C
