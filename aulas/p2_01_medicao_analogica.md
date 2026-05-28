# Medição Analógica Básica

---

<!-- Slide 1 -->
Medição analógica básica
Circuito básico, com apenas um Arduíno e
um cabo
Simplicidade, sem equip. externos.
Escolha da tensão de entrada:
5V (Vcc)
3,3V (saída de alimentação)
0V (GND)

<!-- Slide 2 -->
Medição analógica básica
O que percebemos?
Entradas desconectadas são
“dominadas” pelo ruído;
Há alguma instabilidade quando
medimos a tensão de 3,3V.
Especiicação básica
Conversor A/D de 10 bits
(0~1023).
Cuidado com a conexão !
Interligar portas erradas pode
daniicar o Arduíno, e até a porta
USB do seu computador !

<!-- Slide 3 -->
Instabilidade
A instabilidade é um sintoma da falta de precisão;
Mas o que é “precisão" ?
A precisão, exatidão e a resolução, além da linearidade, são
parâmetros importantes, e serão discutidos posteriormente;
A imprecisão costuma afetar mais os valores intermediários
de uma escala (no caso do experimento, seus efeitos
apareceram mais na medição dos 3,3V).

<!-- Slide 4 -->
Medição analógica típica
Medição de Tensão Externa 0~5V;
Sem ajuste de escala;
Referência: Vcc (5V);
Medição numérica e de tensão;
Apenas o Arduíno, sem componentes externos.
Alimentação
via USB
Entrada a ser medida
GND de referência

<!-- Slide 5 -->
Medição analógica típica
Arduíno Uno
Porta USB
Alimentação
Referência (Ground = GND)
Tensão a ser medida
Referência (Ground = GND)
A0
Fonte
Externa

<!-- Slide 6 -->
Medição analógica típica
O valor da tensão não é inteiro
Cálculo da tensão
(usamos a casa decimal para garantir o processamento das
constantes como “ﬂoat”)
O valor da tensão terá 2 casas decimais

<!-- Slide 7 -->
Medição analógica típica
O que percebemos?
A exatidão é razoável;
As tensões foram representadas
com 2 dígitos decimais;
Percebe-se alguma instabilidade
nos valores medidos, exceto para
0 e 5V.
Cuidado importante !
Não há qualquer proteção da
entrada, logo tensões negativas,
ou superiores a 5V podem
daniicar o Arduíno !

<!-- Slide 8 -->
Casas Decimais
O número de casas decimais não é só uma “escolha”; ele
depende diretamente da resolução;
Outro parâmetro também importante é o “número de
contagens”;
Vamos ver estes parâmetros ?
