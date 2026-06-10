# ADC, DAC, PWM e Amostragem

<!-- Slide 0 -->

> **Prova:** P2 | **Tier:** S | **Tópico:** `adc_dac_pwm`



<!-- Slide 1 -->
🔄 O Problema Central

O mundo real é analógico. Microcontroladores são digitais. Para se comunicarem:

- **MCU lê o mundo → ADC** (Analógico → Digital)
- **MCU controla o mundo → DAC ou PWM** (Digital → Analógico)



<!-- Slide 2 -->
📥 ADC — Analógico para Digital

### Arquitetura Flash (Paralela)

A mais rápida — funciona em tempo real, sem retardo.

**Como funciona:**
1. Divisor resistivo divide a Vref em N intervalos
2. N comparadores verificam cada nível
3. A saída dos comparadores forma uma tabela verdade
4. Codificador converte para número binário

**Problema:** 10 bits → 1023 comparadores. 16 bits → 65.535. Inviável para alta resolução.

### Outras Arquiteturas (alta resolução, com retardo)

| Arquitetura | Velocidade | Resolução | Uso |
|-------------|------------|-----------|-----|
| Flash | Tempo real | Baixa (≤8 bits) | Osciloscópio |
| **SAR** | Moderada | **Alta (10–16 bits)** | **ATMega328P** |
| Sigma-Delta | Lenta | Muito alta (18–24 bits) | Áudio, instrumentação |
| Pipeline | Alta | Alta | Comunicações |

▶ **PROVA:** SAR = Successive Approximation Register = busca binária = N ciclos para N bits = **usado no ATMega328P**.

### ADC do Arduino em Detalhe

- Arquitetura **SAR**, 10 bits
- **Multiplexador de 8 entradas** (A0–A7) — uma por vez
- Capacitor interno faz filtro de ruído analógico (mais eficiente em alta frequência)
- Sample & Hold "congela" o sinal para a conversão

### ADCs Externos

| Modelo | Bits | Interface | Taxa |
|--------|------|-----------|------|
| INA219 | 12 | I2C | 128 SA/s |
| ADS1115 | 16 | I2C | 860 SA/s |
| ADS1252 | 24 | SPI | — |



<!-- Slide 3 -->
📡 Amostragem e Teorema de Nyquist

**Taxa de amostragem** = quantas amostras por segundo (SA/s ou Hz).

### Teorema de Nyquist

> Para representar fielmente um sinal com componentes até F_max Hz, amostrar em **pelo menos 2 × F_max**.

`f_amostragem ≥ 2 × f_máxima_do_sinal`

**Se não respeitar:** aliasing — o sinal parece ter frequência diferente da real.

| Aplicação | Freq. máx. | Taxa mínima |
|-----------|-----------|-------------|
| Temperatura | ~0,01 Hz | 0,02 SA/s |
| Áudio voz (telefone) | 4.000 Hz | 8.000 SA/s |
| Áudio CD | 20.000 Hz | 44.100 SA/s |
| Voltímetro | quase DC | ~4 SA/s |
| Arduino (analogRead) | — | ~10.000 SA/s |

▶ **PROVA:** Nyquist = **2× a maior frequência**, não igual. Confundir isso é erro clássico.



<!-- Slide 4 -->
📤 DAC — Digital para Analógico

Converte número digital em tensão analógica de N níveis.

**Arduino Uno NÃO tem DAC integrado.** Os pinos (~) fazem PWM, não DAC verdadeiro.

### Tipo 1: Resistores Ponderados

Resistores com valores R, 2R, 4R, 8R... proporcional às potências de 2.
- **Problema:** para muitos bits, a relação entre maior e menor resistor é 2ᴺ:1. Difícil manter precisão.

### Tipo 2: Rede R-2R em Escada

```
Bit3      Bit2      Bit1      Bit0
 |         |         |         |
[2R]      [2R]      [2R]      [2R]
 |         |         |         |
─+──[R]───+──[R]───+──[R]───+── saída
           |         |         |
          [2R]      [2R]      [2R]
           |         |         |
          GND       GND       GND
```

**Vantagem:** apenas **dois valores de resistor** (R e 2R) independente do número de bits.

▶ **PROVA:** R-2R = só dois valores de resistor. Resistores ponderados = 2ᴺ valores diferentes.

### Parâmetros do DAC

| Parâmetro | Significado |
|-----------|-------------|
| Resolução | Número de bits |
| Monotonicidade | Saída sempre cresce quando entrada cresce |
| Linearidade | Relação entrada×saída é linear? |
| Exatidão | Quão próxima é a saída do valor teórico? |
| Tempo de acomodação | Tempo pra estabilizar após mudança |



<!-- Slide 5 -->
🔊 PWM — Pulse Width Modulation

A alternativa mais comum ao DAC. Controla o **percentual de tempo em nível alto (Duty Cycle)**.

O componente de carga responde à **tensão média**.

```
Duty Cycle = 0%:   ________________  → Tensão média = 0 V
Duty Cycle = 50%:  ‾‾__‾‾__‾‾__    → Tensão média = 2,5 V
Duty Cycle = 100%: ‾‾‾‾‾‾‾‾‾‾‾‾    → Tensão média = 5 V
```

`Tensão média = Duty Cycle (%) × Vcc`

### PWM no Arduino Uno

```c
analogWrite(9, 0);    // 0% duty cycle → LED apagado
analogWrite(9, 128);  // 50% duty cycle → meia potência
analogWrite(9, 255);  // 100% duty cycle → potência máxima
```

- Valor de 0 a 255 → **8 bits de resolução**
- Frequência padrão: **490 Hz** (pinos 3, 9, 10, 11) / **980 Hz** (pinos 5 e 6)
- Pode subir até ~4 MHz via registradores
- **Pinos com PWM no Uno:** 3, 5, 6, 9, 10, 11 (marcados com ~)

▶ **PROVA:** Arduino Uno **NÃO tem DAC**. PWM simula analógico pela tensão **média**. Resolução do PWM = **8 bits**.



<!-- Slide 6 -->
📌 Resumo Rápido

- ADC: Flash (rápido, poucos bits) / SAR (ATMega = 10 bits) / Sigma-Delta (24 bits)
- Nyquist: amostrar ≥ **2× a freq. máxima** do sinal
- DAC R-2R: só **2 valores** de resistor (R e 2R)
- Arduino Uno: **sem DAC**, PWM nos pinos ~
- PWM: Duty Cycle controla tensão média → `tensão = DC% × Vcc`
- PWM Arduino: **8 bits**, 490 Hz padrão
