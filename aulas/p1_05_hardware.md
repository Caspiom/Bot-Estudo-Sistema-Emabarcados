# Microprocessador vs Microcontrolador e Arquiteturas

---

<!-- Slide 52 -->
HW de Sistemas Embarcados
No sistema embarcado, o HW é um conjunto de componentes
Dispositivo "processador";
Sensores diversos;
Atuadores;
Interfaces e protocolos de comunicação;
Fontes de alimentação;
Componentes eletrônicos diversos.
Escolher corretamente cada um dos componentes é essencial
A portabilidade pode ser inviável;
O hardware determina os parâmetros de projeto, inclusive de irmware.
Outro fator importante são as condições ambientais
Acesso, proteção, temperatura, vibração, EMI etc.

<!-- Slide 53 -->
Processador
Um sistema embarcado de automação moderno tipicamente
exige um processador. Temos algumas opções:
CISC Intel i9-13900H
14 núcleos
20 threads
24MB cache
Clock 2.6GHz até 5.4GHz
Consumo de 45W
64 GB DDR5
SSD 1TB PCIe NVM M.2

<!-- Slide 54 -->
Processador
Um sistema embarcado de automação moderno tipicamente
exige um processador. Temos algumas opções:
RISC Apple M3 Max
14 núcleos
40 núcleos GPUs
16 núcleos neurais
Clock 2.7GHz até 4.1GHz
Consumo de 78W
36 GB Memória Uniicada
SSD 1TB

<!-- Slide 55 -->
Processador
Um sistema embarcado de automação moderno tipicamente
exige um processador;
São máquinas maravilhosas, rápidas e modernas, MAS …
Desempenho e capacidade extraordinária de armazenamento não
são tão importantes neste tipo de aplicação !
Quais são os requisitos típicos de um processador para um
sistema de automação ?
Consumo baixo de energia;
Dimensões reduzidas;
Custo acessível.

<!-- Slide 56 -->
Processador
Microprocessadores
Tipicamente contém uma ULA,
Unidade de Controle, registradores e
memória cache;
Exige componentes externos
essenciais, como memórias,
barramentos, clock, interfaces de E/S
etc;
Projetados para múltiplos usos;
Devido a esta dependências, sistemas
microprocessados ocupam mais
espaço;
Tipicamente baseados na arquitetura
Von Neumann.
Microcontroladores
Além dos componentes presentes em
um microprocessador, condensa
periféricos como memória, clock,
interfaces de E/S diversas,
conversores A/D e D/A, e portas de
acesso GPIO (SoC);
Projetados para uso especíico;
Tipicamente são limitados em
performance e capacidade para
redução do consumo, tamanho e
custo;
Tipicamente baseados na arquitetura
de Harvard.

<!-- Slide 57 -->
Processador
Microprocessadores
Microcontroladores

<!-- Slide 58 -->
Microprocessadores
Diagrama
funcional em
blocos de um
processador Intel
(Sandy Bridge)

<!-- Slide 59 -->
Microprocessadores
https://bit.ly/3xf8Vr3

<!-- Slide 60 -->
Opções de Processador
Microprocessadores
Microcontroladores

<!-- Slide 61 -->
Microcontroladores
SoC (System on a Chip)
* Placa de protótipo baseada no ESP32.

<!-- Slide 62 -->
Arquitetura Básica
Von Neumann
Conceito desenvolvido pela equipe de John
Von Neumann no IAS (Institute for
Advanced Studies) da Universidade de
Princeton em 1946;
Tornou-se um padrão de fato, inspirando
projetos até os dias atuais ("Esta
máquina é Von Neumann ?”)
Estabeleceu o padrão de armazenamento
do código executável na memória do
dispositivo;
Executa uma instrução em dois ciclos;
Possui um barramento de cada tipo
(dados, endereços e controle).
Harvard
Conceito desenvolvido para o computador
Mark I, desenvolvido por Howard Aiken em
1937.
Separa memórias de uso especíico (dados e
instruções), que são acessíveis por
barramentos diferentes;
Otimiza o acesso, economizando espaço e
reduzindo o consumo;
Melhora a segurança.
Comum em microcontroladores, e em
processadores DSP (Digital Signal Processing);
Consegue buscar uma instrução enquanto
executa outra. Isso aumenta o desempenho
para aplicações em tempo real.

<!-- Slide 63 -->
Processador (consumo)
Um Sistema Embarcado deve consumir o mínimo essencial à
sua operação, principalmente pela aplicação típica em
dispositivos móveis.
Todo o projeto de hardware deve levar isto em consideração,
mas o ponto fundamental é o microcontrolador, que
normalmente é o componente que mais consome no Sistema.
Algumas ações são efetivas para redução de consumo do
microcontrolador:
Redução do clock;
Redução da tensão de alimentação;
Modo “sleep"

<!-- Slide 64 -->
Microcontroladores

<!-- Slide 65 -->
SBCs X Microcontroladores
Single Board Computers
Oferecem recursos de um computador
convencional, além de GPIOs para acesso
direto a sensores e atuadores;
Capazes de executar versões simpliicadas do
Linux, suportando aplicações complexas.
Microcontroladores
Projetados para uso especíico, com foco
na redução de consumo e dimensões;
Exigem irmware especíico, com suporte
reduzido a funções mais complexas.
Raspberry Pi 5
ESP32 P4

<!-- Slide 66 -->
Um processador exige companhia !
Microprocessadores precisam de muitos
componentes externos essenciais à sua
operação;
Microcontroladores são menos exigentes, mas
mesmo assim não podem ser usados de forma
isolada.
Placas de Protótipo
Também chamadas de “kits de
desenvolvimento” (development kits), elas
permitem testar protótipos com menor
esforço;
Na foto temos uma das placas desenvolvidas
com o EXP32 da Espressif.
Placa de Protótipo EXP32
Módulo
Mini-1 ESP32
GPIOs
GPIOs
LED “On”
3,3V
Regulador (LDO)
5V →3,3V
Conversor USB/
Serial (UART)
Boot
Micro-USB
Reset
Placas de Protótipo

<!-- Slide 67 -->
Processador (placa)
Microcontrolador
em Placa de
Protótipo
SBC (Single Board
Computer)
Microprocessador
em Placa Mãe
(motherboard)
Não faz sentido aumentar complexidade, e com isto consumo,
tamanho e custo …

<!-- Slide 68 -->
Processador (dimensões)
Dimensões
Este é um aspecto fundamental em projetos
embarcados, determinando inclusive a
viabilidade, ou não, de algumas aplicações;
Microcontrolador
Atualmente, com a miniaturização em larga
escala dos componentes, o número de
componentes internos não impõe limites
mínimos às dimensões do CI;
No entanto, reduzir o número de pinos afeta
o tamanho signiicativamente, mas diiculta
as interfaces, limitando as aplicações;
Outro fator é o tipo de pino (PTH ou SMD)
PTH - Plated-Through Hole
SMD - Surface Mount Device
Placa de Protótipo PIC10F322
PTH
SMD

<!-- Slide 69 -->
Microcontroladores

<!-- Slide 70 -->
Pinos e dimensões
PIC10F322
6 pinos
ATTiny85
8 pinos
SMD
PTH
QFN
ESP32 SoC
48 pinos
ATMega328P
28 pinos
3,4 cm

<!-- Slide 71 -->
Tipo Conexão e dimensões
Outro fator importante é a forma de
conexão ao circuito:
PTH - Plated-Through Hole
SMD - Surface Mount Device
Tamanho dos componentes SMD é muito
menor, especialmente com encapsulamento
BGA (Ball Grid Array) pela redução do
espaço ocupado pelos pinos.
Tamanho afeta positiva ou negativamente
diversos aspectos:
Dissipação de calor;
Custo de Produção;
Interferência;
Coniabilidade;
Manutenção.
PTH
SMD
BGA

<!-- Slide 72 -->
Encapsulamentos (PTH)
SIP - Single In-Line Package
DIP - Dual In-Line Package
RAM
Resistor Network
DIP-28 ATMega328P
(Arduíno Uno)

<!-- Slide 73 -->
Encapsulamentos (SMD)
SOIC - Small Outline Integrated Circuit
QFP - Quad Flat Package
SOIC-18
PIC16F627A
QFP-44
PIC16F877

<!-- Slide 74 -->
Encapsulamentos (SMD)
BGA - Ball Grid Array
