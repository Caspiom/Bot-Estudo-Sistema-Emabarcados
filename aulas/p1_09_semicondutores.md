# Semicondutores e Diodos

---

<!-- Slide 179 -->
Semicondutores
Em um átomo, os elétrons podem
ocupar determinadas órbitas ou
níveis de energia
São sete: k, l, m, n, o, p e q
O nível mais externo é chamado de nível de
valência;
Para conduzir uma corrente elétrica, os
elétrons precisam saltar do nível de valência
para o nível de condução.
A existência de níveis ou bandas de energia “proibidas" entre a condução
e a valência determinam o tipo de material
Não existe banda proibida: CONDUTOR
Existe uma banda proibida de grande dimensão: ISOLANTE
Existe uma banda proibida de pequena dimensão: SEMICONDUTOR
Isolante
Condutor
Semicondutor
Condução
Condução
Condução
Valência
Valência
Valência
Proibido
Proibido
https://www.feis.unesp.br/Home/departamentos/engenhariaeletrica/capitulo_1_diodos#:~:text=Germânio é outro elemento
tetravalente,e de outros componentes semicondutores.&text=Falta de elétrons livres no,constituir-se numa vantagem enorme.

<!-- Slide 180 -->
Bandas de Valência e Condução
Nível de
Fermi
Banda de
Valência
Banda de
Condução

<!-- Slide 181 -->
Semicondutores
Para nosso estudo, interessa conhecer os semicondutores
Banda de valência próxima da banda de condução;
Temperatura, choques mecânicos, luz, radiação e, obviamente, tensão e corrente
elétrica podem fazer os elétrons migrarem de banda. Com “elétrons livres”, o
material funciona como um condutor;
O elemento semicondutor mais comum é o Silício, que possui 4 elétrons na camada
de valência. É o segundo elemento mais comum na Terra, mas outros materiais
podem ser utilizados, como o Germânio;
Semicondutores tipo “N" e tipo “P"
São produzidos pela dopagem do Silício com “impurezas";
Tipo “N”: dopagem com átomos pentavalentes como o Fósforo (sobra um elétron
por átomo), tornando o material propenso a liberar elétrons;
Tipo “P”: dopagem com átomos trivalentes como o Alumínio (falta um elétron por
átomo), tornando o material propenso a receber elétrons.

<!-- Slide 182 -->
Junção Semicondutora
Tipo “N"
Tipo “P”
0,7 V
Obtida pela junção de dois
materiais dopados de forma
diferente
Na junção, ocorre migração dos elétrons
em excesso do material N para o material
P, formando a camada de depleção;
Diferença de potencial (≈0,7V no silício)
impede a continuidade de circulação de
corrente.
* No germânio, a tensão é de 0,3V.

<!-- Slide 183 -->
Junção Semicondutora
Tipo “N"
Tipo “P”
+
E quando a junção é polarizada?
Com o material N ligado ao positivo,
aumenta a camada de depleção, e não
circula corrente;
Invertendo, desde que a tensão seja
maior que a diferença de potencial da
junção, haverá circulação de corrente.

<!-- Slide 184 -->
Junção Semicondutora
+
Tipo “N"
Tipo “P”
R
V > 0,7V
E quando a junção é polarizada?
Com o material N ligado ao positivo,
aumenta a camada de depleção, e não
circula corrente;
Invertendo, desde que a tensão seja
maior que a diferença de potencial da
junção, haverá circulação de corrente.

<!-- Slide 185 -->
Diodo: usando a junção P-N
Só permite a circulação de corrente
em um sentido
Exige tensão mínima limite (≈0,7V);
Corrente só circula no sentido contrário se
a tensão aplicada ultrapassar a tensão de
ruptura;
Um tipo especíico de diodo aproveita este
efeito (chamado de “efeito zener”) para
outras aplicações.
9V
+
V
R
limite
9V
+
V
R
zener
Diodo Comum
Diodo Zener

<!-- Slide 186 -->
Diodo: curva característica
Tensão
aproximadamente
constante em
função da corrente
https://www.researchgate.net/ﬁgure/Figura-2-Curva-caracteristica-
do-diodo-Fonte-2-Para-boa-parte-dos-diodos-trabalhar_ﬁg2_309644229

<!-- Slide 187 -->
Tipos de Diodo
1. Retiicador
Fontes de alimentação, suporta altas
correntes;
2. SMD
3. Alta potência
Para correntes elevadas;
4. Sinal
Utilizados em circuitos de alta
frequência. Frequentemente são de
germânio;
5. Duplo
2 diodos em contra-posição;
6. Ponte retiicadora
Arranjo de 4 diodos para fontes de
alimentação
7. LED
8. Display de 7 segmentos

<!-- Slide 188 -->
Diodo: portas lógicas simples
Porta AND (E)
Qualquer entrada (E1 a E3) no nível zero
provoca o nível zero na saída;
Apenas se todas as entradas estiverem em
nível um garantimos a saída no nível 1;
O resistor impede um curto-circuito.
R
Vcc
Porta OR (OU)
Qualquer entrada (E1 a E3) no nível um
provoca o nível um na saída;
Apenas se todas as entradas estiverem no
nível zero garantimos a saída no nível zero;
O resistor impede um curto-circuito.
Saída
E1
E2
E3
R
Saída
E1
E2
E3

<!-- Slide 189 -->
Diodo: proteção de circuitos
Em circuitos digitais, são
utilizados para proteção
Diodos comuns impedem polarização
invertida;
Proteção funciona inclusive para
pulsos reversos de alta tensão (relês).
R
Saída Digital
GPIO (out)
Vcc
0→1
iB
iC

<!-- Slide 190 -->
Diodo: proteção de circuitos
Em circuitos digitais, são
utilizados para proteção
Diodos comuns impedem polarização
invertida;
Proteção funciona inclusive para
pulsos reversos de alta tensão (relês).
R
Saída Digital
GPIO (out)
Vcc
1→0

<!-- Slide 191 -->
Diodo: proteção de circuitos
Em circuitos digitais, são
utilizados para proteção
Diodos comuns impedem polarização
invertida;
Proteção funciona inclusive para
pulsos reversos de alta tensão (relês).
R
Saída Digital
GPIO (out)
Vcc

<!-- Slide 192 -->
Diodo: proteção de circuitos
Em circuitos digitais, são
utilizados para proteção
Diodos comuns impedem polarização
invertida;
Proteção funciona inclusive para
pulsos reversos de alta tensão (relês).
R
Saída Digital
GPIO (out)
Vcc
Diodos zener protegem entradas
digitais sensíveis
Proteção contra inversão de polaridade;
Proteção contra sobretensões;
Fusível em série contra sobrecorrentes.
GPIO (in)
Ent. Digital
Vmáx 3,3V
Fusível

<!-- Slide 193 -->
Diodo: proteção de circuitos
Em circuitos digitais, são
utilizados para proteção
Diodos comuns impedem polarização
invertida;
Proteção funciona inclusive para
pulsos reversos de alta tensão (relês).
R
Saída Digital
GPIO (out)
Vcc
Diodos zener protegem entradas
digitais sensíveis
Proteção contra inversão de polaridade;
Proteção contra sobretensões;
Fusível em série contra sobrecorrentes.
GPIO (in)
Ent. Digital
Vmáx 3,3V
- V
Fusível

<!-- Slide 194 -->
Diodo: proteção de circuitos
Em circuitos digitais, são
utilizados para proteção
Diodos comuns impedem polarização
invertida;
Proteção funciona inclusive para
pulsos reversos de alta tensão (relês).
R
Saída Digital
GPIO (out)
Vcc
Diodos zener protegem entradas
digitais sensíveis
Proteção contra inversão de polaridade;
Proteção contra sobretensões;
Fusível em série contra sobrecorrentes.
GPIO (in)
Ent. Digital
Vmáx 3,3V
Fusível
> 3,3 V
