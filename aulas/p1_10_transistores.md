# Transistores BJT como Chave

---

<!-- Slide 195 -->
O Transistor
São dois os principais tipos:
Bipolar de Junção: controlado pela
corrente que circula pela base;
Efeito de Campo: controlado pela tensão
presente no gate.
Bipolar NPN
J-FET Canal N
ibase

<!-- Slide 196 -->
O Transistor
São dois os principais tipos:
Bipolar de Junção: controlado pela
corrente que circula pela base;
Efeito de Campo: controlado pela tensão
presente no gate.
Transistores Bipolares
Podem ser do tipo NPN ou PNP;
Aplicações Típicas
Chaveadores;
Ampliicadores.
Bipolar NPN
J-FET Canal N
ibase

<!-- Slide 197 -->
Transistor: duas junções
N
P
N (+dopado)
Emissor
Coletor
Base
Similar ao diodo, mas…
Temos duas camadas de depleção;
O emissor tem uma dopagem maior.
Com isso, a camada de depleção entre
base e emissor libera elétrons em
excesso;

<!-- Slide 198 -->
Transistor: duas junções
N
P
N (+dopado)
Emissor
Coletor
+
Rb
V > 0,7V
Se izermos circular uma
corrente entre a base e o
emissor:
A camada de depleção correspondente
desaparecerá, e ainda icarão elétrons
livres devido à diferença na dopagem;
Similar ao diodo, mas…
Temos duas camadas de depleção;
O emissor tem uma dopagem maior.
Com isso, a camada de depleção entre
base e emissor libera elétrons em
excesso;
Base

<!-- Slide 199 -->
Emissor
Coletor
+
Rb
Base
Vb
+
RL (carga)
Vc > Vb
N
P
N (+dopado)
Similar ao diodo, mas…
Temos duas camadas de depleção;
O emissor tem uma dopagem maior.
Com isso, a camada de depleção entre
base e emissor libera elétrons em
excesso;
Uma corrente entre coletor e
emissor será controlada pela
corrente de base.
Se izermos circular uma
corrente entre a base e o
emissor:
A camada de depleção correspondente
desaparecerá, e ainda icarão elétrones
livres devido à diferença na dopagem;
Transistor: duas junções

<!-- Slide 200 -->
Transistor
Especiicações estão associadas ao
código do componente
Código normalmente vem impresso no corpo
do transistor, além de número do lote e
outras especiicações;
Na igura ao lado, temos o BC548, transístor
NPN popular de baixa potência.
Na folha de dados (datasheet),
encontramos, entre outras coisas, a
"pinagem" do componente.
C
B
E

<!-- Slide 201 -->
Polarizando um Transistor
“Polarizar” um transístor é projetar as correntes
que devem passar pelos seus terminais
ic = x ib (é o ganho do transístor)
ie = ic + ib
Vbe ≈0,7 V (queda na junção)
No PNP, o sentido de circulação da corrente se inverte.
A depender dos valores, o transistor pode icar em
3 diferentes “zonas”:
Corte, Ativa (ampliicação) e Saturação;
Para operar como chave, nos interessa as zonas de
corte e saturação;
Valor prático para ib é 10% de ic para operar na zona
de saturação independente de .
9V
+
Rc
Rb
ib
ic
ie
