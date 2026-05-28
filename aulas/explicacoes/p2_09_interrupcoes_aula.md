# Interrupções Externas, ISR e Timers

## O problema do polling, e por que interrupções são elegantes

Imagina que você está esperando uma encomenda em casa. Você tem duas opções: ficar na janela olhando a rua a cada 5 segundos (polling), ou simplesmente aguardar o entregador tocar a campainha (interrupção). A segunda opção é obviamente mais eficiente, você pode fazer outras coisas enquanto espera.

É exatamente isso que **interrupções** fazem no microcontrolador. Em vez de o processador ficar em loop verificando "chegou algo? chegou algo? chegou algo?", um evento externo (botão pressionado, timer estourando, dado chegando na serial) **interrompe imediatamente** o que está sendo executado e desvia para uma rotina especial.

Eu adoro falar de interrupções. Sabe por quê? Porque é onde o embedded se separa do software comum. Programadores de PC raramente pensam em tempo de resposta em microsegundos. Em sistemas embarcados, isso é crítico.

---

## Como funciona uma interrupção

1. O programa está executando normalmente (qualquer linha do `loop()`)
2. Um evento ocorre, botão pressionado, timer estourou, byte recebido
3. O processador **pausa** o que estava fazendo, salva o contexto (registradores, ponteiro de programa)
4. Executa a **ISR** (Interrupt Service Routine. Rotina de Serviço de Interrupção)
5. Ao terminar a ISR, **restaura o contexto** e continua de onde parou

Do ponto de vista do `loop()`, é como se nada tivesse acontecido, mas a ISR foi executada no meio.

---

## Interrupções no ATMega328P

O ATMega328P tem múltiplas fontes de interrupção. As mais usadas no Arduino:

- **INT0 e INT1**: interrupções externas nos pinos 2 e 3. Podem disparar por borda de subida, borda de descida, nível baixo ou qualquer mudança.
- **PCINT**: interrupções por mudança de estado em qualquer pino (grupos de pinos)
- **Timer0, Timer1, Timer2**: interrupções de overflow ou comparação dos timers
- **ADC**: interrupção ao completar uma conversão
- **USART**: dado recebido ou buffer de transmissão vazio
- **TWI/I2C, SPI**: comunicação serial

No Arduino, a forma mais simples é `attachInterrupt()`:

```cpp
attachInterrupt(digitalPinToInterrupt(2), minhaISR, FALLING);
```

Isso configura uma interrupção no pino 2 que chama `minhaISR` toda vez que o sinal cai de HIGH para LOW.

---

## A regra de ouro das ISRs: RÁPIDO e SIMPLES

> **PROVA:** Vocês acreditam que alguém colocou `delay()` dentro de uma ISR? `delay()` depende do Timer0 para funcionar. Dentro de uma ISR, interrupções estão desabilitadas. O Timer0 não dispara. O `delay()` fica travado para sempre. O programa congela. Não existe erro mais clássico de iniciante em embedded.

Regras absolutas para ISR, e isso é matéria de prova:

1. **Nada de `delay()`** dentro da ISR. Nunca. O `delay()` depende do Timer0, e dentro da ISR as interrupções ficam desabilitadas, então o Timer0 não dispara e o programa trava para sempre.
2. **Nada de `Serial.print()`** dentro da ISR, porque usa buffer interno e pode bloquear.
3. **Variáveis compartilhadas com o loop principal precisam ser declaradas `volatile`**, senão o compilador pode otimizá-las de um jeito que a ISR nunca consegue atualizar o valor que o loop enxerga.
4. A ISR faz o mínimo possível, geralmente só seta uma flag ou incrementa um contador, e deixa o processamento real para o `loop()`.

O experimento de sala mostra exatamente isso: uma ISR que só seta um booleano, e o `loop()` que lê esse booleano e processa. É o padrão correto. O código em si você vai ver na aula prática, mas o conceito é o que importa aqui.

---

## Timers: o coração do tempo no ATMega328P

O ATMega328P tem três timers:

- **Timer0** (8 bits): usado pelo Arduino para `delay()`, `millis()` e `micros()`. **Não mexa nele** sem saber o que está fazendo. Se você mudar o prescaler do Timer0, suas funções de tempo param de funcionar corretamente. Isso é sagrado.

- **Timer1** (16 bits): o mais versátil. 65536 valores de contagem em vez de 256. Ótimo para gerar intervalos de tempo precisos, PWM de alta resolução ou contar pulsos externos.

- **Timer2** (8 bits): similar ao Timer0, mas independente. Usado para PWM no pino 3 e 11, ou para gerar frequências precisas.

---

## Prescaler: controlando a velocidade do timer

O clock do ATMega328P no Arduino Uno é **16 MHz**. Isso significa 16 milhões de ciclos por segundo. O timer conta um passo a cada ciclo. Um Timer de 8 bits estouraria (overflow) 16.000.000 / 256 = **62.500 vezes por segundo**. Rápido demais para a maioria das aplicações.

O **prescaler** divide o clock do timer antes de alimentá-lo. Opções para os timers: 1, 8, 64, 256, 1024.

Com prescaler 1024 no Timer1 (16 bits):
```
Frequência efetiva = 16 MHz / 1024 = 15.625 Hz
Período de um ciclo = 1 / 15.625 ≈ 64 µs
Tempo até overflow (65536 contagens) = 65536 × 64 µs ≈ 4,19 segundos
```

Para gerar uma interrupção a cada 1 segundo exato com Timer1 e prescaler 1024:
```
Contagens necessárias = 1s / 64µs = 15.625
Carregar OCR1A = 15.625 - 1 = 15.624
```

O registrador **OCR1A** (Output Compare Register A do Timer1) define o valor de comparação. Quando o timer chega nesse valor, dispara a interrupção de comparação (TIMER1_COMPA_vect).

Eu uso isso em todo projeto que faz aquisição periódica de dados. É muito mais elegante que `delay()`, o programa continua rodando enquanto o timer conta no hardware.

> **PROVA:** Diferença entre overflow e comparação no timer: overflow dispara quando o contador zera (volta de 255 ou 65535 para 0). Comparação dispara quando o contador bate no valor do OCR. Comparação permite intervalos exatos sem depender do tempo de overflow.
