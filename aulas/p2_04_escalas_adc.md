# Escalas e Resolução

---

<!-- Slide 27 -->
Escalas
Adequam a leitura à faixa de valores
das entradas
Devem ser dimensionadas para manter a resolução
máxima;
Tipicamente usam Divisores de Tensão;
Avaliar impedâncias;
Cuidado com a qualidade dos componentes.
Outros "detalhes"
Uniicar o "zero volts”;
Medições diferenciais;
Algumas escalas não começam em zero;
Medição de valores negativos;
Proteção de entradas.

<!-- Slide 28 -->
Escalas
0V
2,5V
0V
5V
Saída Sensor
Entrada ADC
Resolução
perdida
Adequam a leitura à faixa de valores
das entradas
Devem ser dimensionadas para manter a resolução
máxima;
Tipicamente usam Divisores de Tensão;
Avaliar impedâncias;
Cuidado com a qualidade dos componentes.
Outros "detalhes"
Uniicar o "zero volts”;
Medições diferenciais;
Algumas escalas não começam em zero;
Medição de valores negativos;
Proteção de entradas.

<!-- Slide 29 -->
Escalas
Adequam a leitura à faixa de valores
das entradas
Devem ser dimensionadas para manter a resolução
máxima;
Tipicamente usam Divisores de Tensão;
Avaliar impedâncias;
Cuidado com a qualidade dos componentes.
Outros "detalhes"
Uniicar o "zero volts”;
Medições diferenciais;
Algumas escalas não começam em zero;
Medição de valores negativos;
Proteção de entradas.

<!-- Slide 30 -->
Escalas
Manter
correntes
mínimas
Adequam a leitura à faixa de valores
das entradas
Devem ser dimensionadas para manter a resolução
máxima;
Tipicamente usam Divisores de Tensão;
Avaliar impedâncias;
Cuidado com a qualidade dos componentes.
Outros "detalhes"
Uniicar o "zero volts”;
Medições diferenciais;
Algumas escalas não começam em zero;
Medição de valores negativos;
Proteção de entradas.

<!-- Slide 31 -->
Escalas
Adequam a leitura à faixa de valores
das entradas
Devem ser dimensionadas para manter a resolução
máxima;
Tipicamente usam Divisores de Tensão;
Avaliar impedâncias;
Cuidado com a qualidade dos componentes.
Outros "detalhes"
Uniicar o "zero volts”;
Medições diferenciais;
Algumas escalas não começam em zero;
Medição de valores negativos;
Proteção de entradas.

<!-- Slide 32 -->
Escalas
Adequam a leitura à faixa de valores
das entradas
Devem ser dimensionadas para manter a resolução
máxima;
Tipicamente usam Divisores de Tensão;
Avaliar impedâncias;
Cuidado com a qualidade dos componentes.
Outros "detalhes"
Uniicar o "zero volts”;
Medições diferenciais;
Algumas escalas não começam em zero;
Medição de valores negativos;
Proteção de entradas.

<!-- Slide 33 -->
Resolução
Parâmetro mais usado
em medições digitais;
Medida em bits, é a
capacidade de identiicar
valores diferentes,
mesmo que próximos;
Outra forma de avaliar é
a “contagem”: quantos
diferentes valores podem
ser representados ?
Quem determina a resolução é o ADC (Conversor Analógico / Digital);
Vídeo mostra a “disputa" de dois equipamentos de alta resolução. Notem que, mesmo
possuindo a mesma quantidade de dígitos, há diferenças.

<!-- Slide 34 -->
Resolução
Existe resolução em medidas analógicas ?
Em medições digitais, a resolução é
deinida em bits, já que o sinal de entrada
precisa ser convertido para um número
digital e binário;
Resolução de 2 bits: 4 valores diferentes;
5V
0V
1,67V
3,33V
?

<!-- Slide 35 -->
Resolução
Existe resolução em medidas analógicas ?
Em medições digitais, a resolução é
deinida em bits, já que o sinal de entrada
precisa ser convertido para um número
digital e binário;
Resolução de 2 bits: 4 valores diferentes;
Resolução de 3 bits: 8 valores diferentes;

<!-- Slide 36 -->
Resolução
Existe resolução em medidas analógicas ?
Em medições digitais, a resolução é
deinida em bits, já que o sinal de entrada
precisa ser convertido para um número
digital e binário;
Resolução de 2 bits: 4 valores diferentes;
Resolução de 3 bits: 8 valores diferentes;
Resolução de 4 bits: 16 valores diferentes;

<!-- Slide 37 -->
Resolução
Existe resolução em medidas analógicas ?
Em medições digitais, a resolução é
deinida em bits, já que o sinal de entrada
precisa ser convertido para um número
digital e binário;
Resolução de 2 bits: 4 valores diferentes;
Resolução de 3 bits: 8 valores diferentes;
Resolução de 4 bits: 16 valores diferentes;
Arduíno: 10 bits de resolução no ADC
São 4,89mV entre dois valores ( 5V / 1023 ). Isso implica em 3 dígitos (0,00 a 5,00V), pois
o terceiro dígito (mV) não pode ser usado. Como são 500 valores, temos “500 contagens”;
Com a referência de 1,1V, teríamos 1mV. Isso implicaria em 4 dígitos, ou 1100 "contagens".

<!-- Slide 38 -->
Resolução - como calcular
E se, dados os limites de uma
medição, eu precisar calcular a
resolução?
Qual a resolução necessária para
termos “x" contagens?
No vídeo, os equipamentos
possuem 6 1/2 dígitos, logo:
De 0 a 1.999.999: 2 milhões de
valores;
221 = 2.097.152 →são 21 bits;
Você não vai conseguir fazer com um
Arduíno.

<!-- Slide 39 -->
Resolução - como calcular
Outro exemplo: termômetro
digital;
Medir temperaturas até 42,00C
De 0,0 até 42,0: 421 valores;
29 = 512 →são 9 bits;
Este dá para fazer com o Arduíno!

<!-- Slide 40 -->
E/S Analógicas X Digitais
Grandezas Digitais e Analógicas
precisam ser processadas
constantemente;
Para manipular informações
analógicas, há dois desaios:
Leitura:
ADCs (Analog to Digital Converters);
Escrita:
DACs (Digital to Analog Converters);
PWM (Pulse Width Modulation).
