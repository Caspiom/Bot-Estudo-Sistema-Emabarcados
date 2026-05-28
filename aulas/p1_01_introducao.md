# Introdução a Sistemas Embarcados

---

<!-- Slide 1 -->
Professor Marco Câmara
Sistemas Embarcados
UCSAL 2026-01 v1.3

<!-- Slide 2 -->
Definição
Um sistema embarcado é um sistema computadorizado construído para uma
aplicação especíﬁca. Por isto mesmo, normalmente não suporta itens que não
estejam relacionados à execução da aplicação. Seu hardware e software têm limitações.
O hardware normalmente é mais lento para reduzir o consumo de energia, e oferece
apenas recursos mínimos essenciais para suporte ao seu conjunto especíﬁco de
periféricos.
O software tipicamente precisa ter comportamento determinístico (sempre oferece o
mesmo tempo de execução), e, em certos casos, em tempo real (reagindo sempre de
forma imediata a eventos). Em alguns sistemas, o software precisa ser tolerante a
falhas, com degradação controlada (considere por exemplo um satélite ou um
marcador preso ao corpo de uma baleia). Em outros, o software precisa comunicar o
erro imediatamente após o primeiro sinal de falha(considere um monitor cardíaco).
[Making Embedded Systems - White, Elecia]

<!-- Slide 3 -->
Definição
Um sistema embarcado é um sistema eletrônico
microprocessado que, após ser programado, possui uma
função especíﬁca que geralmente não pode ser alterada. Uma
impressora, por exemplo, mesmo possuindo um processador
que poderia ser utilizado para qualquer tipo de atividade, tem
sua funcionalidade restrita apenas à impressão de páginas.
Um computador de propósito geral, no entanto, pode ser
utilizado num instante como um ambiente de entretenimento,
em outro como estação de trabalho, ou até mesmo um
telefone.
[Programação de Sistemas Embarcados - Almeida, Rodrigo M A]

<!-- Slide 4 -->
Definição
Um sistema embarcado é um sistema eletrônico
microprocessado, completamente encapsulado, dedicado ao
dispositivo ou sistema que ele controla. Diferentemente de
computadores de propósito geral, como o computador
pessoal, um sistema embarcado realiza um conjunto de tarefas
predeﬁnidas, geralmente com requisitos especíﬁcos. Já que o
sistema é dedicado a tarefas especíﬁcas, através de engenharia
pode-se otimizar o projeto reduzindo tamanho, recursos e
custo do produto.
[Wikipedia]

<!-- Slide 5 -->
Definição (+ algumas)
Interface com o usuário
Sistemas embarcados podem operar sem nenhuma ou muito pouca interação
com seus usuários.
Omnipresentes
Praticamente todo equipamento elétrico, mecânico ou químico atual é um
sistema embarcado;
Carregadores de celular, eletrodomésticos, semáforos, automóveis, aviões,
motores industriais, equipamentos médicos etc.
Diversos níveis de complexidade e custo
Sistemas embarcados controlam desde um eletrodoméstico simples, como um
liquidiicador, até um foguete recuperável da SpaceX.

<!-- Slide 6 -->
Complexidade e Custo
Na área de TI, a variedade é comum em
qualquer tipo de dispositivo
Computadores possuem grande variação de
complexidade e custo;
No entanto, sistemas embarcados oferecem um
espectro ainda maior.
PY32F002A,
utilizado em
sistemas simples,
custa US$ 0.08
XQR5VFX130,
utilizado na
indústria
aeroespacial,
custa US$ 40,000
40000 / 0,08 = 500.000 vezes mais caro

<!-- Slide 7 -->
Definição (+ algumas)
Computação de Borda (Edge Computing)
Distribuição do processamento, permitindo tratar dados no ponto de
coleta;
Computação local reduz a largura de banda do canal de comunicação;
Transmitir menos dados ⇒mais segurança;
Pode-se atuar imediatamente no local sem consultas a um ponto central;
Aumenta a resiliência do ambiente, já que mesmo em caso de falhas de
comunicação, algumas decisões continuam sendo tomadas.
Embora pareçam antagônicas, a computação de borda pode conviver
com a computação em nuvem.
