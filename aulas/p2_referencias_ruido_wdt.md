# Referência, Ruído, WDT, Escalas e Resolução

<!-- Slide 0 -->

> **Prova:** P2 | **Tier:** S | **Tópico:** `referencias_ruido_resolucao`



<!-- Slide 1 -->
🔋 Referência de Tensão

Todo ADC precisa saber "qual é o máximo". Esse máximo é definido pela **tensão de referência (Vref)**.

Se Vref = 5 V e o ADC tem 10 bits:
- Tensão 5,0 V → leitura digital = 1023
- Tensão 2,5 V → leitura digital = 511
- **Se a referência oscilar, TODA a medição fica errada.**

### As 3 Fontes de Referência

| Fonte | Vantagem | Desvantagem |
|-------|----------|-------------|
| **Tensão de Alimentação (Vcc)** | Zero custo | Instável, varia com carga |
| **Referência Interna** | Mais estável que Vcc | Limitada (1,1 V no ATMega) |
| **Referência Externa** | Melhor exatidão | Precisa de chip dedicado |

### Chips de Referência — Coeficiente de Temperatura

| Componente | Exatidão | Coef. Temperatura | Qualidade |
|------------|----------|-------------------|-----------|
| Diodo Zener | Variável | ~700 ppm/°C | Baixa |
| TL431 (Texas) | 0,5% | ~600 ppm/°C | Média |
| 5040AIDG4 (Texas) | **0,05%** | **3 ppm/°C** | Alta |

▶ **PROVA:** Quanto **menor** o ppm/°C, **melhor** a referência. 700 ppm/°C é ruim; 3 ppm/°C é excelente.

### Referência no Arduino

```c
analogReference(DEFAULT);   // Vcc (5V) — varia com carga
analogReference(INTERNAL);  // Ref. interna 1,1V — mais estável
analogReference(EXTERNAL);  // Tensão no pino AREF (0V < ref ≤ 5V)
```

▶ **PROVA:** **NÃO** chamar `analogRead()` antes de configurar `EXTERNAL` — pode danificar o ATMega328P.



<!-- Slide 2 -->
📡 Ruído — Tipos e Soluções

Ruído é qualquer perturbação indesejada no sinal.

**Fontes comuns:**
- Ruído térmico (todo resistor gera)
- Chaveamento digital (o próprio MCU gera)
- Interferência eletromagnética (motores, transformadores)
- Acoplamento capacitivo entre fios próximos

**Como reduzir na fonte (sempre preferível):**
- Qualidade dos componentes
- Distância de fontes de interferência
- Cabos mais curtos / blindados / trançados
- Capacitores de bypass na alimentação

### Quando o ruído é grave demais

Em ambientes industriais, ruído intenso pode:
- Impedir operação do ADC
- **Alterar registradores internos do MCU**
- **Provocar travamento** (PC aponta pra endereço inválido)

Solução para travamento: **WDT** ↓



<!-- Slide 3 -->
🐕 WDT — Watch Dog Timer

O WDT é um contador independente que **reseta o MCU** se ele travar.

**Lógica:**
1. MCU funcionando → alimenta o WDT periodicamente (reinicia o contador)
2. MCU trava → não alimenta o WDT
3. Contador chega a zero → **RESET do MCU**
4. MCU reinicia → volta a funcionar normalmente

```c
#include <avr/wdt.h>

void setup() {
    wdt_enable(WDTO_2S);  // timeout de 2 segundos
}

void loop() {
    // ... código normal ...
    wdt_reset();  // "alimenta o cão" — se não executar em 2s: RESET
}
```

▶ **PROVA:** O MCU **evita** o reset enviando ele mesmo um sinal ao WDT. Sem o sinal (travamento) → WDT reseta o MCU.



<!-- Slide 4 -->
📊 Escalas

Adequam a leitura à faixa do ADC para maximizar a resolução.

**Problema típico:** Sensor entrega 0–2,5 V; ADC aceita 0–5 V → só usa metade dos 1024 valores → perde 50% da resolução.

**Solução:** Divisor de tensão que remapeia o sinal para cobrir toda a faixa 0–5 V.

**Cuidados:**
- Avaliar **impedâncias** (corrente mínima para o ADC funcionar)
- Unificar o "zero volts" (GND comum)
- Cuidado com sinais negativos (precisam de offset)
- Proteger entradas acima de Vref

▶ **PROVA:** Escalas usam **divisores de tensão** e servem pra manter a resolução máxima do ADC.



<!-- Slide 5 -->
🔢 Resolução do ADC

**Resolução** = capacidade de distinguir valores distintos. Medida em bits.

| Resolução | Valores (2ⁿ) | Passo com Vref=5V |
|-----------|-------------|-------------------|
| 8 bits | 256 | 19,5 mV |
| **10 bits (Arduino)** | **1024** | **4,88 mV** |
| 12 bits | 4.096 | 1,22 mV |
| 16 bits | 65.536 | 0,076 mV |

**Arduino Uno — ADC de 10 bits:**
- Com Vref = 5 V → passo ≈ **4,89 mV**
- Com Vref interna 1,1 V → passo ≈ **1 mV**

### Como Calcular Bits Necessários

**Pergunta clássica de prova:** "Quantos bits preciso?"

1. Calcule o número de valores distintos necessários
2. Encontre N tal que 2ᴺ ≥ nº de valores

**Exemplo:** Termômetro de 0,0 a 42,0 °C com passo 0,1 °C:
- Valores = (42,0 - 0,0) / 0,1 + 1 = **421 valores**
- 2⁸ = 256 → insuficiente
- **2⁹ = 512 ≥ 421 → 9 bits** ✓

▶ **PROVA:** Saber calcular 2ⁿ ≥ nº de valores. Arduino tem 10 bits → 1024 valores.



<!-- Slide 6 -->
📌 Resumo Rápido

- Vref instável → medição errada inteira
- ppm/°C → menor é melhor (3 ppm >> 700 ppm)
- `analogReference(EXTERNAL)` → não usar `analogRead()` antes!
- WDT = cão de guarda → MCU deve alimentar periodicamente
- Escala = divisor de tensão → aproveita toda a faixa do ADC
- Resolução = 2ⁿ valores → Arduino = 10 bits = 1024 = 4,89 mV/passo
