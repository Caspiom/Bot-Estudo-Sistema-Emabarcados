# Eletrônica nos CUs: Barramentos e Dispositivos

---

<!-- Slide 202 -->
Eletrônica nos CUs
Em ambientes embarcados, a necessidade de conexão com
ambientes externos determina aplicação de conceitos de
eletrônica;
Além de microcontroladores, é típico encontrar diversos
componentes externos fundamentais.

<!-- Slide 203 -->
Os componentes
trocam informações;
Na arquitetura de Von
Neumann são 3 os
barramentos:
Endereços
Dados
Controle
As setas indicam o
luxo de informações pelos barramentos:
Apenas a CPU escreve no barramento de endereços, mas lê e escreve no barramento de dados;
A Memória pode ser escrita ou lida (barramento de dados);
O mesmo acontece com os periféricos de Entrada/Saída;
Todos escrevem e lêem no barramento de controle, a depender do sinal.
Barramentos

<!-- Slide 204 -->
Barramentos
Fan-out no barramento de endereços:
Supondo 16 GBytes de memória, e palavra de 64 bits, temos:
bilhões de palavras
Cada uma das palavras precisa ler o barramento de endereços para
identiicar o destinatário.
Mesmo para correntes de entrada baixas (Ex.10uA), teríamos um
consumo de 2 x 109 x 10-6= 2000A ?!?
O problema exige soluções especíicas !
16x1024x1024x1024x8
= 1024x1024x1024x2 ≈2
Barramento de Endereços

<!-- Slide 205 -->
Barramentos
Tri-state no barramento de dados:
Como duas saídas diferentes de memória podem compartilhar o mesmo
barramento em uma leitura da CPU? (curto-circuito ?!?)
O terceiro estado (desconectado) é essencial;
Apenas dois dispositivos icam “ativos”: UM emissor e um receptor.
Barramento de Dados

<!-- Slide 206 -->
Barramentos
Alguns sinais tipicamente presentes no barramento de
Controle:
BREQ (Bus Request): requisição de barramentos por um periférico que
passará a controlar o ambiente. Ex: DMA (Direct Memory Access)
CLK (Clock): sinal de clock;
INTR (Interrupt Request): solicitação de interrupção externa;
R/W (Read/Write): identiica o tipo de operação que será feita na
memória ou periférico. Em algumas arquiteturas, há pinos separados;
RDY (Ready): sinaliza a conclusão de alguns procedimentos;
RST (Reset): reinicialização dos componentes.
É comum termos sinais ativos em nível zero, o que é
representado pela barra acima do sinal correspondente.
Barramento de Sinais de Controle

<!-- Slide 207 -->
Barramentos
Vantagens
A ampliação do número de dispositivos e usuários é trivial;
Baixo custo.
Desvantagens
Compartilhamento pode provocar retenção de tráfego, com
queda de desempenho, e possível jitter associado.

<!-- Slide 208 -->
Dispositivos Adicionais
Circuitos/chips especíicos podem ser incluídos em um projeto
Buffers
Permite a interconexão de circuitos com performances diferentes;
Podem ser unidirecionais ou bidirecionais.
Latches
Drivers
Clock externo
Memórias
Periféricos

<!-- Slide 209 -->
Dispositivos Adicionais
Circuitos/chips especíicos podem ser incluídos em um projeto
Buffers
Latches
Agrega a capacidade de “memorizar" temporariamente o valor de saída;
São apenas unidirecionais.
Drivers
Clock externo
Memórias
Periféricos

<!-- Slide 210 -->
Dispositivos Adicionais
Circuitos/chips especíicos podem ser incluídos em um projeto
Buffers
Latches
Drivers
Compatibiliza saídas digitais de baixa potência com cargas elevadas;
Em algumas situações, agregam circuitos analógicos especializados para controle de cargas
especíicas, como motores brushless, de passo, sistemas trifásicos etc.
Clock externo
Memórias
Periféricos

<!-- Slide 211 -->
Dispositivos Adicionais
Circuitos/chips especíicos podem ser incluídos em um projeto
Buffers
Latches
Drivers
Clock externo
É muito comum a existência de circuitos internos de clock nos microcontroladores, mas a
demanda por maior exatidão e precisão pode exigir circuitos externos de maior qualidade.
Memórias
Periféricos

<!-- Slide 212 -->
Dispositivos Adicionais
Circuitos/chips especíicos podem ser incluídos em um projeto
Buffers
Latches
Drivers
Clock externo
Memórias externas:
Esta é uma demanda essencial nos microprocessadores;
RAM externa não é suportada por microcontroladores, e é complexa até em SBCs como o
Raspberry Pi. Já EEPROMs são acessíveis por interfaces externas.
Periféricos

<!-- Slide 213 -->
Dispositivos Adicionais
Circuitos/chips especíicos podem ser incluídos em um projeto
Buffers
Latches
Drivers
Clock externo
Memórias
Periféricos:
Até mesmo em placas de protótipo às vezes são oferecidos RPCs, interfaces de rede,
sensores de temperatura, transmissores de rádio, displays etc.
