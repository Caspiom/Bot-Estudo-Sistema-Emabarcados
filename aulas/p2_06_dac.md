# DAC: Resistores Ponderados e R-2R

---

<!-- Slide 47 -->
DAC: como funciona?
Um DAC converte uma entrada
digital em uma saída de “n" níveis,
simulando um valor analógico
Quanto mais bits, “mais analógico";
Propriedades: resolução,
monotonicidade, linearidade, exatidão e
tempo de acomodação.
Existem basicamente 2 tipos de DAC
DAC por Resistores Ponderados;
DAC por Rede R-2R em escada.
O Arduíno Uno não possui DAC
integrado

<!-- Slide 48 -->
DAC: como funciona?
DAC por Resistores Ponderados
Sequência de resistores acompanham as
potências de 2 representadas por cada
dígito do número;
Complexidade associada à precisão dos
resistores, especialmente para muitos
dígitos;
Na igura temos um exemplo com entrada
de 3 bits.

<!-- Slide 49 -->
DAC: como funciona?
DAC por Rede R-2R em escada
A vantagem clara está nos dois únicos
valores para os resistores, facilitando a
construção;
Na igura temos um exemplo com entrada
de 3 bits.
Parâmetros
Resolução: número de bits
Monotonicidade: crescimento constante
Linearidade
Exatidão
Tempo de acomodação: tempo
necessário para a saída representar uma
mudança entre o menor e maior valor
binário na entrada.

<!-- Slide 50 -->
PWM: como funciona?
Pulse Width Modulation: Modulação
por Largura de Pulso;
Opção mais comum para simular uma
saída analógica
Microcontrolador controla o percentual de
tempo da saída no nível 1;
O percentual é chamado de “ciclo de
trabalho”, ou Duty Cycle;
O efeito “analógico" vem da tensão média
na saída.
Arduíno Uno
Frequência típica 490Hz, mas pode subir
até 4MHz;
Resolução para ajuste do Duty Cycle: 8 bits
