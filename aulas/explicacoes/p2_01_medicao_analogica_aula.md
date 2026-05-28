# Medição Analógica Básica

## O mundo é analógico. O Arduino não.

Deixa eu te fazer uma pergunta simples: a temperatura lá fora agora é 27°C ou 28°C? Nem um nem outro, é 27,4°C. O mundo real não respeita números inteiros. Tensão, temperatura, pressão, luminosidade, tudo varia de forma **contínua**. E aí você chega com seu Arduino achando que vai medir isso direto. Não vai.

O ATMega328P tem um **Conversor Analógico-Digital de 10 bits**, o famoso ADC. Ele pega essa tensão contínua e transforma num número inteiro de **0 a 1023**. Por quê 1023? Porque 2¹⁰ = 1024 valores, contando o zero. Então o range é 0 até 1023. Isso vai cair na prova, pode anotar.

---

## O experimento básico, e o que ele nos ensina

Você liga o Arduino no computador, abre o monitor serial e chama `analogRead()` nos pinos. Sem sensor, sem nada, só o Arduino e um cabo. Você mede as tensões disponíveis na própria placa: **5V**, **3,3V** e **0V (GND)**.

Simples, né? Aí vem a primeira surpresa: deixa um pino analógico **desconectado** e olha o que acontece. O valor oscila como maluco, 234, 891, 17, 602. Nenhum critério. Vocês acreditam que alguém me entregou um projeto achando que pino flutuante era "valor zero"? Pino desconectado não é zero. Pino desconectado é uma **antena** captando ruído eletromagnético do ambiente.

A solução é simples: nunca deixe entrada analógica sem referência. Ou você liga um sinal, ou coloca um resistor de pull-down pro GND.

---

## Instabilidade: o inimigo número um da medição

Mesmo ligando os 3,3V direto no pino, a leitura oscila. Você vê 674, 672, 675, 673. Isso é **instabilidade**, e é um sintoma de falta de **precisão**, conceito que merece aula própria, e vai ter.

Por enquanto: instabilidade não é defeito do Arduino. É a realidade de qualquer sistema de medição. Ruído elétrico existe, interferência existe, o cabo atua como antena. O que você faz com isso? Filtra. Mas isso vem depois.

---

## Cuidado com o que você conecta onde

Marco vai repetir isso até o dia que você se aposentar: **conectar coisa errada no lugar errado pode danificar o Arduino e até a porta USB do computador**. Não é exagero dramático. O ATMega328P opera com 0 a 5V. Você injeta 12V num pino de entrada? Adeus chip. Você cria um curto no pino de saída direto pro GND com corrente alta? O regulador agradece, na forma de fumaça.

Confira o circuito antes de ligar. Sempre.

---

## A conta da tensão, e o problema das casas decimais

A leitura do `analogRead()` vai de 0 a 1023. Para converter para tensão em volts:

```
Tensão = leitura × (Vref / 1023)
```

Com referência de 5V: cada passo vale aproximadamente **4,9 mV**.

Agora presta atenção porque isso aparece na prova: **o número de casas decimais não é escolha estética**. Ele representa a resolução real da medição. Com 4,9 mV por passo, exibir quatro casas decimais (`0,0000`) é mentira pura, você não tem essa resolução. Dois dígitos (`0,00`) já descartam informação. O correto é três (`0,000`), compatível com a resolução do conversor.

> **PROVA:** Vocês acreditam que alguém me entregou um relatório com a tensão medida como "3,30000000V"? Com ADC de 10 bits? A resolução é ~4,9 mV. Exibir mais que três casas é ilusão, não precisão.
