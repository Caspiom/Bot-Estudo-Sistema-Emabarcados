# ADC: Arquitetura e Amostragem

---

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

<!-- Slide 41 -->
ADC: como funciona?
Arquitetura Paralela
Um divisor resistivo divide a tensão de referência máxima
em intervalos;
As saídas do divisor resistivo são comparadas com o valor
da entrada analógica através de “n" comparadores,
gerando uma tabela verdade com “n" saídas;
As “n" saídas são convertidas para o número binário
correspondente.
A arquitetura é rápida (tempo real), mas sua
complexidade é muito grande para resoluções
maiores;
Outras arquiteturas são mais adequadas para
resoluções mais altas
Pipeline, SAR, Sigma-Delta
Estas arquiteturas geram retardo, e são muito
dependentes da linearidade, ruído, exatidão e precisão.

<!-- Slide 42 -->
ADC: como funciona?
Arquitetura Paralela
Um divisor resistivo divide a tensão de referência máxima
em intervalos;
As saídas do divisor resistivo são comparadas com o valor
da entrada analógica através de “n" comparadores,
gerando uma tabela verdade com “n" saídas;
As “n" saídas são convertidas para o número binário
correspondente.
A arquitetura é rápida (tempo real), mas sua
complexidade é muito grande para resoluções
maiores;
Outras arquiteturas são mais adequadas para
resoluções mais altas
Pipeline, SAR, Sigma-Delta
Estas arquiteturas geram retardo, e são muito
dependentes da linearidade, ruído, exatidão e precisão.

<!-- Slide 43 -->
Amostragem
As medições são realizadas em um
determinado momento, onde o valor
medido é registrado;
A quantidade de medições em um
determinado período é chamada de taxa de
amostragem
É necessária uma frequência de amostragem mínima para
conseguirmos efetivamente representar um determinado
sinal, e suas variações com o tempo;
O teorema de Nyquist diz que, para uma amostragem
ininita, uma frequência de amostragem pelo menos 2 vezes
superior à maior componente de frequência do sinal é
capaz de representar adequadamente o sinal original;
Sinais digitais, devido às suas harmônicas, podem ter
frequências de amostragem ideais muito elevadas.
A frequência de amostragem está relacionada à performance do ADC.

<!-- Slide 44 -->
Amostragem
A taxa de amostragem está associada
à aplicação
Se você quer ler um valor ixo, ou com variação
lenta, a taxa pode ser menor;
Se você deseja analisar o comportamento de
um sinal que varia rapidamente, a taxa precisa
ser maior;
Um voltímetro tem taxa típica de 4 SA/s (sem
considerar cálculo de média);
Um osciloscópio tem taxa típica de 1 GSA/s
(você não vai conseguir fazer isto com um
Arduíno).
?

<!-- Slide 45 -->
O ADC do Arduíno
Hardware do ADC
Uma amostragem é, na verdade, uma
comparação;
Capacitor para "iltro de ruído
analógico”;
O iltro é mais eiciente para ruídos de
frequência mais alta.
Multiplexação de 8 diferentes
entradas analógicas
Poderíamos ter mais?
Tudo é uma questão de performance e aplicação.
?

<!-- Slide 46 -->
ADC externo
ADS1115 - 16 bits com interface i2C
Até 860 SA/s;
4 canais de entrada ou …
2 canais diferenciais;
Ampliicador de ganho programável.
INA219 - 12 bits com interface i2C
Até 128 SA/s;
Leitor de Tensão e Corrente.
ADS1252 - 24 bits com interface SPI
