# Eletrônica Básica: Lei de Ohm, Resistores

---

<!-- Slide 127 -->
Eletrônica em SE
Desaios de um projeto de HW
Não é um conhecimento nativo de um engenheiro de software;
A rotina de desenvolvimento em HW é bem diferente;
Testes podem ser destrutivos - a veriicação prévia precisa ser exaustiva.
Integração HW & SW
HW instável provocará problemas, independente da qualidade do SW;
Problemas no SW podem daniicar o HW.
Diversidade de componentes
Ao contrário do desenvolvimento de SW, não há um conjunto ixo de
instruções e comandos;
Surgem novos sensores, atuadores e protocolos quase diariamente.

<!-- Slide 128 -->
Conceitos Básicos
Grandezas:
Tensão, Corrente, Campos
elétrico e magnético;
Componentes:
Resistores, Capacitores e
Indutores;
Diodos e transistores;
Amplificadores
Operacionais;
Portas Lógicas;

<!-- Slide 129 -->
Tensão elétrica
É a diferença de potencial entre dois
pontos, medida em Volts
Tipicamente um dos pontos é o “terra" (GND),
com a tensão de zero volts;
Quando contínua, pode ser positiva ou
negativa; Também pode ser alternada;
Provoca a circulação de corrente, que se move
do ponto de tensão mais alto para o de tensão
mais baixa.
Pode ser causada por 3 efeitos
Campo elétrico estático;
Campo eletromagnético variável;
Corrente sob ação de um campo magnético.
Analogia mecânica: energia potencial.

<!-- Slide 130 -->
Corrente elétrica
Fluxo ordenado de cargas dentro de
um condutor, medido em Ampères
Para ser condutor, o material tipicamente
tem elétrons livres em movimento
desordenado;
Ocorre quando provocada pela existência de
uma tensão elétrica entre as extremidades
do condutor;
Quando contínua, o sentido do fluxo
determina o seu sinal; pode também ser
alternada.
Analogia mecânica: energia
cinética;
Resistores se opõem à circulação da
corrente elétrica.

<!-- Slide 131 -->
Campo Elétrico
É um campo de força criado
pela eletricidade estática
Se inicia na carga positiva e termina
na carga negativa;
É provocado pela ação de cargas
elétricas (elétrons, prótons e íons);
Um campo elétrico variável provoca um campo magnético, e
vice-versa;
Capacitores se opõem à alteração de um campo elétrico.

<!-- Slide 132 -->
Campo Magnético
É um campo de força criado por
materiais ferromagnéticos ou pela
circulação de corrente elétrica
Formam círculos concêntricos
perpendiculares à circulação da corrente;
A orientação do campo pode ser
representada pela “regra da mão direita".
Um campo elétrico variável provoca
um campo magnético, e vice-versa;
Indutores se opõem à alteração de
um campo magnético.

<!-- Slide 133 -->
Resistor
Oferece resistência à passagem
da corrente, e é medido em
ohms (Ω)
Remove energia do circuito
transformando-a em potência térmica,
que portanto precisa ser dissipada;
Reduz a corrente em circulação;
Provoca uma queda de tensão entre as
suas extremidades.
Está relacionado à tensão e a
corrente em um circuito com
base na Lei de Ohm
Desenvolvida pelo físico alemão Georg
Simon Ohm em 1827, baseada no
trabalho de Fourier;
9V
+
V
R
led

<!-- Slide 134 -->
Resistor
Oferece resistência à passagem
da corrente, e é medido em
ohms (Ω)
Remove energia do circuito
transformando-a em potência térmica,
que portanto precisa ser dissipada;
Reduz a corrente em circulação;
Provoca uma queda de tensão entre as
suas extremidades.
Está relacionado à tensão e a
corrente em um circuito com
base na Lei de Ohm
Desenvolvida pelo físico alemão Georg
Simon Ohm em 1827, baseada no
trabalho de Fourier;
V
I
R
÷
×
÷

<!-- Slide 135 -->
Tipos de Resistores

<!-- Slide 136 -->
Resistores PTH - Potência
Tem relação com o tamanho
Resistores menores dissipam menos
potência;
A temperatura (inclusive externa) afeta o
valor da resistência !
Em alguns casos, pode estar
gravada no corpo;
Projetos devem contemplar
operação abaixo do limite.
1/8 W
1/4 W
1/2 W
1 W
3 W

<!-- Slide 137 -->
Resistores SMD - Potência

<!-- Slide 138 -->
Resistores - Resistência em 
(código válido para maior parte dos resistores PTH)
3 faixas (20% tolerância), 4 faixas (comum), 5 faixas (precisão)

<!-- Slide 139 -->
Resistores - Resistência em 

<!-- Slide 140 -->
Resistores - Resistência em 
Laranja (3)
Branco (9)
Laranja ( x 103)
Prata (10% tolerância)

<!-- Slide 141 -->
Em resistores SMD, o valor
normalmente vem gravado no
corpo
Tipicamente usam um código
numérico de 3 dígitos;
Tal como as duas primeiras faixas de
um resistor PTH, os dois primeiros
números indicam os dígitos
significativos, o terceiro é o
multiplicador;
"104" por exemplo é igual a 100KΩ.
Se houverem quatro dígitos, vale a
regra para resistores PTH com cinco
faixas. Os três primeiros são dígitos
significativos, e o último é o
multiplicador.
Resistores - Resistência em 

<!-- Slide 142 -->
Em resistores SMD, o valor
normalmente vem gravado no
corpo
Tipicamente usam um código
numérico de 3 dígitos;
Tal como as duas primeiras faixas de
um resistor PTH, os dois primeiros
números indicam os dígitos
significativos, o terceiro é o
multiplicador;
"104" por exemplo é igual a 100KΩ.
Se houverem quatro dígitos, vale a
regra para resistores PTH com cinco
faixas. Os três primeiros são dígitos
significativos, e o último é o
multiplicador.
Resistores - Resistência em 
0,05 - 1W
Tamanho 2512 (6,35 x 3mm)

<!-- Slide 143 -->
Em resistores SMD, o valor
normalmente vem gravado no
corpo
Tipicamente usam um código
numérico de 3 dígitos;
Tal como as duas primeiras faixas de
um resistor PTH, os dois primeiros
números indicam os dígitos
significativos, o terceiro é o
multiplicador;
"104" por exemplo é igual a 100KΩ.
Se houverem quatro dígitos, vale a
regra para resistores PTH com cinco
faixas. Os três primeiros são dígitos
significativos, e o último é o
multiplicador.
Resistores - Resistência em 
5,1 M- 1/4W
Tamanho 1206 (3,2 x 1,6mm)

<!-- Slide 144 -->
Resistores em Série
A resistência total é igual à soma
das resistências individuais;
O arranjo permite:
Distribuir a potência dissipada;
Substituir resistências individuais;
Aumentar a proteção contra descargas
elétricas.
R1
R2
R3
RT
≡
RT = R1 + R2 + R3
Pular 1
resistor
pode ser
fácil

<!-- Slide 145 -->
Resistores em Série
A resistência total é igual à soma
das resistências individuais;
O arranjo permite:
Distribuir a potência dissipada;
Substituir resistências individuais;
Aumentar a proteção contra descargas
elétricas.
R1
R2
R3
RT
≡
RT = R1 + R2 + R3
Pular
vários é
mais
difícil

<!-- Slide 146 -->
Resistores em Série
A resistência total é igual à soma
das resistências individuais;
O arranjo permite:
Distribuir a potência dissipada;
Substituir resistências individuais;
Aumentar a proteção contra descargas
elétricas.
Existem, no entanto, aplicações
mais "nobres", como o divisor de
tensão.
R1
R2
R3
RT
≡
RT = R1 + R2 + R3

<!-- Slide 147 -->
Resistores em Paralelo
A resistência total é menor que a
menor das resistências individuais;
O arranjo permite:
Distribuir a potência dissipada;
Substituir resistências individuais.
R1
R2
R3
Rt = 1
R1 + 1
R2 + 1
R3

<!-- Slide 148 -->
R - Valores Comerciais
Norma IEC 60063:1963 estabeleceu as “séries E"
* (IEC - International Electrotechnical Comission)
Cada década (0,1-1; 1-10 …) está dividida em “n" espaços
logarítmicos, a depender da tolerância:
20% de tolerância, 5 espaços (5 x 20% = 100%) e 6 valores (série E-6);
10% de tolerância envolve 12 valores (série E-12). Veja o cálculo:
12 = 1,21
Cada valor é 21% maior que o anterior, com ajustes de aproximação e escala.
https://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-values/#

<!-- Slide 149 -->
R - Valores Comerciais
Norma IEC 60063:1963 estabeleceu as “séries E"
* (IEC - International Electrotechnical Comission)
Cada década (0,1-1; 1-10 …) está dividida em “n" espaços
logarítmicos, a depender da tolerância:
20% de tolerância, 5 espaços (5 x 20% = 100%) e 6 valores (série E-6);
10% de tolerância envolve 12 valores (série E-12). Veja o cálculo:
12 = 1,21
Cada valor é 21% maior que o anterior, com ajustes de aproximação e escala.
https://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-values/#

<!-- Slide 150 -->
R - Valores Comerciais
https://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-values/#
Série E-6
10 15 22
33 47 68
Série E-12 (10%)
10 12 15 18 22 27
33 39 47 56 68 82
Série E-24 (5% e 1%)
10 11 12 13 15 16 18 20
22 24 27 30 33 36 39 43
47 51 56 62 68 75 82 91
As séries valem para outros
componentes:
Capacitores;
Indutores;
Diodos Zener.
A partir da série E-48 os
componentes têm valores
com 3 dígitos;
Outras séries:
E-96;
E-192.
Série E-48 (2% e 1%)
100 105 110 115 121 127 133 140 147 154 162 169
178 187 196 205 215 226 237 249 261 274 287 301
316 332 348 365 383 402 422 442 464 487 511 536
562 590 619 649 681 715 750 787 825 866 909 953

<!-- Slide 151 -->
R - Acendendo um LED
Resistência de R:
O cálculo é aplicação direta da lei de
Ohm:
Tensão: 9 - Vled = 9 - 2 = 7 V
Corrente: 10mA
R = 7 / 0,01 = 700 
Valor comercial mais próximo é 680
Potência de R:
i = 7 / 680 = 0,01A (10mA)
P = R x i2 = 680 x 0,012 = 0,068 W
Valor comercial é 1/8 W (0,125 W)
9V
+
V
R
led

<!-- Slide 152 -->
R - de 5V para 3,3V
Divisor de tensão
Corrente baixa entre o GPIO de saída no
Arduíno e o terra;
5% da corrente máxima (20mA) = 1mA;
(R1 + R2) = 5V / 1mA = 5 K
R2 / (R1 + R2) = 3,3 / 5
R2 = 0,66 * 5K≦3,3K(valor comercial)
R1 = 5K- 3,3K≧1,7K
R1 = 1,8K(valor comercial)
R1
R2
GPIO (out)
Arduíno Uno
GPIO (in)
ESP01
Vmáx 5V
Vmáx 3,3V
Corrente na carga
Entradas GPIO são de alta impedância (entre 100 Ke 1 M);
R2 em paralelo com 100 K= ( 1 / 3,3K+ 1 / 100K)-1 = 3,2 K;
Variação de 3% para o menor valor de impedância.
100 K

<!-- Slide 153 -->
R - Pull-Up / Pull-Down
O problema das entradas desconectadas
É importante SEMPRE deinir um valor padrão para
uma entrada desconectada;
Ruídos elétricos podem determinar o valor de uma
entrada desconectada;
5% da corrente máxima (20mA) = 1mA;
R = 5V / 1mA = 4,7 K
Pull-Down: pino funciona como fonte (source);
Pull-Up: pino funciona como dreno (sink)
R
Arduíno Uno
GPIO (in)
5V
Botão
de
Pressão

<!-- Slide 154 -->
R - Pull-Up / Pull-Down
R
Arduíno Uno
GPIO (in)
5V
Botão
de
Pressão
O problema das entradas desconectadas
É importante SEMPRE deinir um valor padrão para
uma entrada desconectada;
Ruídos elétricos podem determinar o valor de uma
entrada desconectada;
5% da corrente máxima (20mA) = 1mA;
R = 5V / 1mA = 4,7 K
Pull-Down: pino funciona como fonte (source);
Pull-Up: pino funciona como dreno (sink)
