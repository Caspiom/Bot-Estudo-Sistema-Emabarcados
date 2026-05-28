# Capacitores em Sistemas Embarcados

## O que um capacitor faz, de forma honesta

O capacitor acumula energia na forma de campo elétrico entre duas placas condutoras separadas por um isolante (dielétrico). A capacitância (C, em Farads) mede quanta carga ele consegue armazenar por volt.

Na prática cotidiana de sistemas embarcados, o capacitor tem três funções principais: **filtragem, desacoplamento e estabilização de tensão**. Vamos a cada uma.

---

## Operação: carga e descarga

Quando você conecta um capacitor a uma fonte de tensão, ele começa a carregar. A corrente é máxima no início (quando a tensão no capacitor é zero) e vai caindo conforme ele carrega. Quando a tensão no capacitor iguala a da fonte, a corrente vai a zero.

A carga e descarga seguem uma curva exponencial governada pela constante de tempo **τ = R × C**. Após 5τ, considera-se que o capacitor está totalmente carregado (ou descarregado).

Isso importa quando você projeta circuitos RC de temporização ou filtros. Um capacitor de 100 µF com resistor de 10 kΩ tem τ = 1 segundo. Tempo de carga completa ≈ 5 segundos. Se você quiser que um pino de entrada estabilize rapidamente, use capacitores menores ou resistores menores.

---

## Tipos de capacitor

**Eletrolítico:** capacitâncias grandes (1 µF a milhares de µF), mas **polarizado**, tem um polo positivo e um negativo claramente marcados. Invertê-lo pode fazê-lo explodir (literalmente, o dielétrico evapora, pressão aumenta, pop). Usado para filtragem de tensão de alimentação.

**Cerâmico:** pequeno, não-polarizado, pode ser usado em qualquer orientação. Capacitâncias menores (pF a µF). Mais estável com temperatura e frequência. Preferido para desacoplamento e filtros de sinal.

**Tântalo:** alternativa ao eletrolítico para capacitâncias médias em espaço menor. Também polarizado, e mais sensível à sobretensão que o eletrolítico. Caro, mas muito estável.

> **PROVA:** Eletrolítico é polarizado. Cerâmico não é. Se você inverter um eletrolítico em um circuito de corrente contínua, estará violando a polaridade. Resultado: aquecimento, vazamento, ou explosão do capacitor. Esse é um dos erros mais comuns em bancada.

---

## Capacitores em série e paralelo

**Série:** capacitância total **menor** que a menor individual. Fórmula igual à de resistores em paralelo: 1/Ct = 1/C1 + 1/C2... Dois capacitores iguais em série resultam em metade da capacitância, mas o dobro da tensão máxima suportada.

**Paralelo:** capacitância total é a **soma**. É o comportamento oposto dos resistores. Dois capacitores de 100 µF em paralelo = 200 µF.

---

## Desacoplamento: o capacitor invisível mas essencial

Em qualquer circuito digital, os chips consomem correntes em picos quando chavem de estado. O fio de alimentação tem uma pequena indutância (resistência às variações de corrente), e esses picos criam quedas de tensão momentâneas, ruído na alimentação.

O **capacitor de desacoplamento** fica fisicamente próximo do pino de alimentação do chip e fornece corrente imediata para esses picos, sem que o ruído se propague pela trilha de alimentação. É basicamente um reservatório local de energia.

Regra prática: um capacitor cerâmico de 100 nF próximo a cada CI digital. Em projetos com ATMega, você coloca um 100 nF entre VCC e GND do chip, o mais próximo possível do pino.

Vocês acreditam que alguém projetou uma placa sem capacitores de desacoplamento e ficou se perguntando por que o sistema travava aleatoriamente? Pois é. O chip resetava sozinho por queda de tensão transitória na alimentação.

---

## Estabilização de tensão: o capacitor grande na entrada

Além dos pequenos de desacoplamento, fontes de alimentação usam capacitores maiores (eletrolíticos de centenas de µF) para estabilizar a tensão de saída. Quando a carga aumenta subitamente (liga um motor), o capacitor fornece corrente enquanto o regulador reage. Sem ele, a tensão cai por alguns milissegundos, o suficiente para causar reset em microcontroladores sensíveis.

---

## Capacitância Parasita: o lado indesejado

Qualquer par de condutores próximos forma um capacitor, mesmo sem querer. Esse é o **capacitor parasita**.

Trilhas paralelas em PCB, fios próximos, até o próprio encapsulamento do chip, tudo contribui. Em circuitos de alta frequência, capacitâncias parasitas de poucos picofarads podem filtrar sinais, criar atrasos, ou acoplar ruído entre circuitos.

Por isso, projetos de alta frequência (RF, memória DDR, sinais GHz) requerem cuidado com o layout da PCB: trilhas curtas, plano de terra, separação entre linhas de sinal.

> **PROVA:** Capacitância parasita não é intencional, é um efeito colateral indesejado da geometria do circuito. Em baixa frequência (Arduino operando em KHz), é irrelevante. Em alta frequência (100 MHz+), domina o projeto.
