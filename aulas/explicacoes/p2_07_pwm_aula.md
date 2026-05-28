# PWM: Modulação por Largura de Pulso

## O que é PWM e por que é tão útil

**PWM**. Pulse Width Modulation, Modulação por Largura de Pulso, é uma técnica para controlar a quantidade de energia entregue a uma carga usando um sinal digital que alterna entre 0 e 1 em alta frequência.

A chave do PWM é o **duty cycle** (ciclo de trabalho): a fração do tempo em que o sinal está em nível alto.

- Duty cycle 0% → sinal sempre em 0 → carga recebe energia zero
- Duty cycle 50% → metade do tempo em 1, metade em 0 → carga recebe 50% da energia
- Duty cycle 100% → sinal sempre em 1 → carga recebe energia máxima

---

## Exemplos práticos

**Controle de brilho de LED:** `analogWrite(9, 127)` gera PWM com duty cycle ~50% no pino 9. O LED pisca tão rápido que o olho humano não percebe, enxerga apenas metade do brilho. Simples e eficiente.

**Controle de velocidade de motor DC:** Em vez de desperdiçar energia num resistor para reduzir a tensão do motor (como se fazia antigamente), você usa PWM. O motor recebe pulsos rápidos de 5V. A inércia mecânica do motor suaviza os pulsos, ele roda mais devagar sem desperdiçar energia em calor. Muito mais eficiente.

**Servo motor:** Servos usam PWM com frequência fixa de 50 Hz. A posição é controlada pela largura do pulso: 1 ms = 0°, 1,5 ms = 90°, 2 ms = 180°. O Arduino tem a biblioteca Servo que abstrai isso.

---

## PWM no ATMega328P

O ATMega328P tem **3 timers** (Timer0, Timer1, Timer2) que geram PWM em hardware. Os pinos PWM do Arduino Uno (indicados com ~) são: 3, 5, 6, 9, 10, 11.

A função `analogWrite(pino, valor)` aceita valor de **0 a 255** (8 bits). Isso mapeia para 0% a 100% de duty cycle.

> **PROVA:** `analogWrite()` não gera tensão analógica. Gera **PWM**. A tensão de saída continua sendo 0V ou 5V, apenas a proporção de tempo em cada estado muda. Se você ligar um voltímetro, vai medir uma tensão "média" devido ao tempo de resposta do instrumento, mas o sinal real é digital pulsado.

---

## PWM como substituto de DAC

Passando o sinal PWM por um **filtro passa-baixa** (resistor + capacitor), os pulsos se tornam uma tensão DC aproximada. Para cargas de resposta lenta (como um display de nível, um aquecedor), isso funciona bem como saída analógica improvisada.

A desvantagem: o filtro RC tem tempo de resposta lento, e sempre há algum ripple residual. Para áudio ou controle preciso, não é adequado. Para isso, você usa um DAC externo de verdade.
