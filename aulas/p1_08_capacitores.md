# Capacitores em Sistemas Embarcados

---

<!-- Slide 155 -->
Capacitor
Acumula tensão sob a forma de campo
elétrico interno do componente, e é
medido em faradays (F), tipicamente
sub-múltiplos
Lembra uma bateria com carga e descarga
muito rápida;
Diversas aplicações na eletrônica analógica,
com algumas particularmente importantes em
sistemas embarcados.
+
+
Capacitor
Convencional
Capacitor
Polarizado

<!-- Slide 156 -->
Capacitor - Operação
Quando conectado a uma
fonte de tensão, acumula
carga
Não há circulação de corrente
entre os terminais, e sim
apenas o acúmulo de carga;
+
C
R

<!-- Slide 157 -->
Capacitor - Operação
+
C
R
+++
i
Quando conectado a uma
fonte de tensão, acumula
carga
Não há circulação de corrente
entre os terminais, e sim
apenas o acúmulo de carga;

<!-- Slide 158 -->
Capacitor - Operação
+
C
R
+
+
+
+ +
+ + +++ +
+
+
+
+
+
+
+ + + + + + +
- --
-
-- ---
-
-- -- ---- -- -
Quando conectado a uma
fonte de tensão, acumula
carga
Não há circulação de corrente
entre os terminais, e sim
apenas o acúmulo de carga;
A carga ica disponível até que circule corrente de descarga no sentido contrário;
Normalmente é especiicado pela capacitância e tensão de operação. Algumas
características especíicas do tipo de capacitor também podem inluenciar a aplicação;
A capacidade, e principalmente a tensão de operação, determinam o tamanho.

<!-- Slide 159 -->
Capacitor - Carga e Descarga
Corrente ininita ?
Na teoria sim !
Vale para carga e descarga;
Limitada pelas resistências
internas;
Corrente ininita ?
Rf : resistência da fonte de tensão;
Rc : resistência dos condutores;
Rcs : resistência série do capacitor.
+V
C
i
Rf
Rcs
Rc

<!-- Slide 160 -->
Capacitor - Carga e Descarga
C
R
i
A corrente inicial pode ser
calculada pela lei de ohm, mas
ela cai rapidamente à medida
em que o capacitor é carregado.
it→0 = V
R
t
i
V/R
+V
Corrente ininita ?
Na teoria sim !
Vale para carga e descarga;
Limitada pelas resistências
internas;
Corrente ininita ?
Rf : resistência da fonte de tensão;
Rc : resistência dos condutores;
Rcs : resistência série do capacitor.
R = Rf + Rc + Rcs

<!-- Slide 161 -->
Capacitor - Carga e Descarga
C
R
Tensão sobre o capacitor tem
comportamento inverso
Inicialmente zero, tende a crescer
rapidamente, até alcançar a tensão da
fonte;
Quanto maior a corrente, mas rápido
o crescimento.
+V
t
Vc
+V
i
}Vc

<!-- Slide 162 -->
Tipos de Capacitor
1. Eletrolítico
Alta capacitância, polarizado,
possui pequena indutância parasita
2. Poliéster
Autorenerativo
3. Cerâmico
Um dos mais comuns
4. Tântalo
Substituem os eletrolíticos,
polarizados, + vida útil, - espaço
5. Mica
Muito estável, usado em circuitos
que exigem precisão
6. SMD
7. Variáveis
https://www.mundodaeletrica.com.br/tipos-de-capacitores/

<!-- Slide 163 -->
Capacitores em Série
A capacitância total é menor que a
menor das capacitâncias individuais;
O arranjo permite:
Distribuir a tensão acumulada;
Substituir capacitâncias individuais;
Eliminar a polaridade (ver C1 e C2).
C1
Ct = 1
C1 + 1
C2 + 1
C3
C2
+
+
C3
≡
Ct

<!-- Slide 164 -->
Capacitores em Paralelo
A capacitância total é a soma das
capacitâncias individuais;
O arranjo permite:
Substituir capacitares individuais;
Agregar características de dois tipos diferentes
de capacitor (na igura, C1 é eletrolítico e C2
cerâmico).
C3
CT = C1 + C2 + C3
C2
C1
+

<!-- Slide 165 -->
Capacitor - Desacoplamento
É comum encontramos
interferências na linha de
alimentação, derivadas:
do próprio circuito;
de equipamentos ligados na mesma fonte
de alimentação;
de interferência eletromagnética.
Vdd
Circuito Digital
Vcc
100 nF
Interferência de alta frequência pode ser mitigada
Capacitores de 100nF instalados bem próximos à entrada de alimentação;
(cálculo foge do escopo da disciplina)
Proteção advém da carga e descarga instantânea do capacitor;
Microcontroladores e circuitos integrados digitais são particularmente sensíveis a este
problema.

<!-- Slide 166 -->
Capacitor - Estabiliza tensão
Se houver instabilidade de
baixa frequência na tensão
de alimentação, usamos um
capacitor maior
Isolado, ou em conjunto com
anterior;
Capacitores eletrolíticos não são tão
eficientes em altas frequências;
V
100 nF
dd
Circuito Digital
Vcc
+
10 F
Além destas aplicações …
Capacitores são essenciais em diversos circuitos analógicos;
Compõem filtros dos mais diversos tipos, fontes de alimentação,
acopladores e desacopladores, sintonizadores, e dezenas de outras
aplicações.

<!-- Slide 167 -->
Capacitância Parasita
Quaisquer condutores próximos
formam um capacitor
Valor afetado pela geometria do componente,
do chip, ou mesmo da PCB ou cabos;
Valores típicos bem pequenos (<5pF);
Estes capacitores operam tal como
qualquer outro;
Qual os impactos desta capacitância
Atrasos e falhas - vamos ver?
Cpin
Cpin
Cﬁo

<!-- Slide 168 -->
Representação Binária
Representação interna de valores binários
Faixas de Valores de 0 e 1
Faixas grandes suportam erros
O risco está na "região indeterminada”, que diicilmente é utilizada

<!-- Slide 169 -->
C
R
+V
t
Vc
+V
i
}Vc
Região Indeterminada
Atraso na representação digital
É necessário aguardar carga do
capacitor parasita;
A carga ica mais rápida se a corrente
for aumentada (maior consumo);
0 (zero)
1 (um)
Capacitância Parasita

<!-- Slide 170 -->
C
R
+V
t
Vc
+V
i
}Vc
atraso
Capacitância Parasita
Atraso na representação digital
É necessário aguardar carga do
capacitor parasita;
A carga ica mais rápida se a corrente
for aumentada (maior consumo);

<!-- Slide 171 -->
C
R
+V
t
Vc
+V
i
}Vc
Reduzindo R, ou seja, aumentando a
corrente, a tensão sobre o capacitor
chega mais rápido a V+.
atraso
Capacitância Parasita
Atraso na representação digital
É necessário aguardar carga do
capacitor parasita;
A carga ica mais rápida se a corrente
for aumentada (maior consumo);

<!-- Slide 172 -->
C
R
+V
t
Vc
+V
i
}Vc
Reduzindo R, ou seja, aumentando a
corrente, a tensão sobre o capacitor
chega mais rápido a V+.
atraso
Capacitância Parasita
Atraso na representação digital
É necessário aguardar carga do
capacitor parasita;
A carga ica mais rápida se a corrente
for aumentada (maior consumo);

<!-- Slide 173 -->
C
R
+V
t
Vc
+V
i
}Vc
Reduzindo R, ou seja, aumentando a
corrente, a tensão sobre o capacitor
chega mais rápido a V+.
atraso
Capacitância Parasita
Atraso na representação digital
É necessário aguardar carga do
capacitor parasita;
A carga ica mais rápida se a corrente
for aumentada (maior consumo);

<!-- Slide 174 -->
t
Vc
+V
período
Capacitância Parasita
Possível falha na
representação
O tempo para carga não pode
ser maior que meio período do
sinal digital;
Valores precisam estar fora da
região indeterminada;
Quanto maior a performance,
menor será o período.

<!-- Slide 175 -->
Região Indeterminada
Ok, mas com atraso
t
Vc
+V
período
Capacitância Parasita
Possível falha na
representação
O tempo para carga não pode
ser maior que meio período do
sinal digital;
Valores precisam estar fora da
região indeterminada;
Quanto maior a performance,
menor será o período.

<!-- Slide 176 -->
t
Vc
+V
período
Capacitância Parasita
Possível falha na
representação
O tempo para carga não pode
ser maior que meio período do
sinal digital;
Valores precisam estar fora da
região indeterminada;
Quanto maior a performance,
menor será o período.

<!-- Slide 177 -->
t
Vc
+V
período
Capacitância Parasita
Possível falha na
representação
O tempo para carga não pode
ser maior que meio período do
sinal digital;
Valores precisam estar fora da
região indeterminada;
Quanto maior a performance,
menor será o período.

<!-- Slide 178 -->
Região Indeterminada
Falha !
t
Vc
+V
período
Capacitância Parasita
Possível falha na
representação
O tempo para carga não pode
ser maior que meio período do
sinal digital;
Valores precisam estar fora da
região indeterminada;
Quanto maior a performance,
menor será o período.
Para resolver, é necessário acelerar a carga, aumentando a corrente
(e o consumo).
