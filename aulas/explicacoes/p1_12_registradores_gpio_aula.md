# GPIOs, Dispositivos de E/S e Medição Analógica

## A interface entre o microcontrolador e o mundo real

O microcontrolador processa dados, mas o mundo real não é feito de bits, é feito de botões, sensores, motores, LEDs, displays. A interface entre esses dois mundos são os **dispositivos de entrada e saída**, conectados pelos pinos GPIO.

---

## Dispositivos de Entrada

### Chaves e Botões: mais complexo do que parece

Um botão parece trivial. É uma chave, abre e fecha. Mas há dois problemas práticos que todo projeto embarcado precisa resolver.

**Pull-up ou Pull-down:** como vimos, pino flutuante capta ruído. Um botão ligado diretamente ao pino sem pull-up ou pull-down deixa o pino em estado indeterminado quando não pressionado. A solução: resistor de pull-up (pino em HIGH quando solto, LOW quando pressionado e conectado ao GND) ou pull-down (inverso). O ATMega tem pull-up interno, use com `pinMode(pino, INPUT_PULLUP)`.

**Debounce (anti-repique):** quando você pressiona um botão mecânico, o contato elétrico não é instantâneo. Há centenas de microsegundos a milissegundos de "rejeite", o contato bate e solta rapidamente várias vezes antes de estabilizar. Para o processador operando em MHz, isso parece múltiplos pressionamentos.

Solução em software: após detectar a primeira borda, aguardar 20-50 ms antes de verificar novamente. Solução em hardware: capacitor em paralelo com o botão para filtrar os picos transitórios.

Vocês acreditam que alguém me entregou um projeto de contador de botões que contava 3-5 ao invés de 1 a cada pressionamento? Debounce não implementado. Clássico.

### Teclados matriciais

Para teclados de 4×4 (16 teclas), usar 16 pinos seria desperdício. A solução é a matriz: 4 linhas + 4 colunas = 8 pinos, 16 teclas. O microcontrolador ativa uma linha por vez e lê as colunas para detectar qual tecla está pressionada naquela linha.

### Sensores digitais

Sensores de presença (PIR), chuva, chama, fornecem saída digital (HIGH/LOW). Simples de conectar. A complexidade está em interpretar os dados, um PIR pode ter tempo de ativação longo, um sensor de chuva pode precisar de debounce.

---

## Dispositivos de Saída

### LEDs: simples e poderosos

LEDs consomem 10-20 mA e precisam de tensão na direção correta. Resistor em série é obrigatório (revisão: R = (Vcc - V_led) / I). Sem resistor, o LED queima em menos de um segundo.

Displays de 7 segmentos são basicamente 7 LEDs organizados em forma de número. Para acionar múltiplos dígitos, usa-se multiplexação: acende um dígito por vez em alta velocidade, o olho percebe todos acesos simultaneamente por causa da persistência da visão.

### Relês: quando você precisa de tensão e corrente maiores

O relê é um interruptor controlado eletromagneticamente. Uma pequena corrente na bobina cria um campo magnético que atrai a lâmina e fecha (ou abre) o contato de potência.

A vantagem é o **isolamento elétrico**: o circuito de controle (Arduino, 5V) fica completamente separado do circuito de potência (pode ser 220V AC, 24V DC). Isso é essencial para segurança.

**Importante:** sempre use o diodo de proteção na bobina do relê (flyback diode). Sempre. Sem exceção.

### Servos, Motores DC, Motores de Passo

**Servo:** motor com feedback de posição interno. Você controla o ângulo (0° a 180°) via PWM. Muito usado em robótica.

**Motor DC:** velocidade controlada por PWM, direção por ponte H (driver que inverte a polaridade da tensão). O Arduino não aciona motor DC diretamente, a corrente necessária excede o limite dos pinos.

**Motor de passo (stepper):** move um ângulo fixo por pulso, permite posicionamento preciso sem encoder. Amplamente usado em impressoras 3D e CNC. Requer driver (A4988, DRV8825) pois consome mais corrente que o Arduino pode fornecer.

---

## Entradas Analógicas e Sensores

Sensores analógicos fornecem tensão proporcional à grandeza medida. O potenciômetro é o exemplo mais simples: resistor ajustável entre VCC e GND, com o cursor no pino analógico. Conforme você gira, a tensão no cursor varia de 0 a 5V.

Sensores de luminosidade (LDR), temperatura (NTC, LM35), umidade, pressão, todos funcionam gerando ou alterando uma tensão. Muitos precisam de um **divisor de tensão** para adaptar a faixa ao ADC do Arduino (0-5V).

**Divisor de tensão para sensor:** R1 em série com o sensor (que é um resistor variável) entre VCC e GND. O ponto médio vai ao pino analógico. Conforme a resistência do sensor muda, a tensão no ponto médio muda, e o ADC lê essa variação.

---

## Medição Analógica Básica no Arduino

A função `analogRead(pino)` retorna um valor de 0 a 1023. Para converter em tensão:

```
Tensão = (leitura / 1023.0) × Vref
```

Para converter para a grandeza medida (temperatura, por exemplo): você precisa da curva de calibração do sensor, a relação entre tensão e a grandeza física.

> **PROVA:** O ADC do Arduino tem 6 canais analógicos (A0-A5) mas **um único conversor multiplexado**. Ele lê um canal por vez. Leituras de múltiplos canais são sequenciais, não simultâneas. Se você precisa de leituras verdadeiramente simultâneas de múltiplos sinais, precisa de múltiplos ADCs externos.
