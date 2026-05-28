# Arduino Uno R3, ATMega328P e GPIOs

---

<!-- Slide 75 -->
O famoso Arduino Uno
O Arduíno Uno v3 certamente é a placa
de protótipo mais conhecida no mundo.
Ela utiliza o ATMega328P,
microcontrolador da Microchip;
Suportado por uma documentação
extensa, disponível para qualquer
pessoa interessada, é o dispositivo mais
utilizado em laboratórios e cursos de
sistemas embarcados no mundo inteiro.
Embora descontinuado pelo projeto Arduíno, similares do mesmo
continuam a ser produzidos e vendidos por outros fabricantes, e isso
deve continuar por muitos anos.
Arduíno Uno R3

<!-- Slide 76 -->
O famoso Arduino Uno
Tudo começou na Itália em 2005;
Tecnologia aberta (existem diversos
fabricantes produzindo produtos
similares), o que acabou por reduzir
signiicativamente seu custo;
O mais correto é chamar de “Projeto
Arduíno”, já que são diversos
dispositivos;
O Arduíno Uno versão 3 é baseado no microcontrolador
ATMega328P, fabricado pela Microchip.
Arduíno Uno R3

<!-- Slide 77 -->
O famoso Arduino Uno
Não há idelidade a uma família de
microcontroladores, e nem a um
fabricante especíico dentro do projeto
Arduíno;
Um bom exemplo ocorre no Arduíno Uno
v4. Ele sucedeu a v3, mas utiliza um outro
microcontrolador, de outro fabricante: o
Renesas RA4M1 32-bit ARM® Cortex®;
Apesar disto, a compatibilidade básica foi
mantida;
As duas versões têm as mesmas características ísicas, e também
compatibilidade nas conexões elétricas;
Arduíno Uno R4 Wi-Fi

<!-- Slide 78 -->
O famoso Arduino Uno
O desenvolvimento de sketches na nova
versão pode ser realizado utilizando a
mesma linguagem, sintaxe e ambiente
de desenvolvimento;
Por outro lado, o acesso a recursos de
baixo nível exige revisão de projetos
feitos para a versão 3;
Isso reforça como é fundamental
diferenciar microcontroladores e placas
de protótipo.
Arduíno Uno R4 Wi-Fi

<!-- Slide 79 -->
O ATMega328P
Algumas características são do
microcontrolador, e não da placa de
protótipo. Vamos então falar do
ATMega328P:
Originalmente desenvolvido pela Atmel, comprada pela Microchip em 2016, e
está disponível nos formatos PTH (igura) e SMP;
Uma das características importantes que afetam as aplicações do Arduíno Uno
R3 é a memória. No ATMega328P, temos 1KB de EPROM, 2 KB de SRAM, e 32 KB
de memória Flash;
Estas características podem ser bastante diferentes em outros
microcontroladores, mesmo aqueles utilizados em outras placas do projeto
Arduíno. A versão R4, por exemplo, tem 16 vezes mais SRAM (32KB), e 8 vezes
mais Flash (256KB).

<!-- Slide 80 -->
Conhecendo o Arduíno Uno R3
Microcontrolador ATMega328P

<!-- Slide 81 -->
Conhecendo o Arduíno Uno R3
Os componentes adicionais do
Uno R3 simplificam as
aplicações:
Reduz necessidade de capacitação
em eletrônica;
Oferecem recursos fundamentais para
aplicações de Sistemas Embarcados.
No caso do Arduíno Uno R3,
temos:
Botão de Reset;
Controladora e porta USB tipo A;
Clock Externo a Quartzo;
Regulador de Tensão (5V);
Conexões diversas;
Componentes eletrônicos diversos.
Arduíno Uno R3

<!-- Slide 82 -->
Conhecendo o Arduíno Uno R3
Botão de
RESET
O RESET é um recurso
importante, mas nem sempre
disponível:
O Raspberry Pi 5 não tem;
Reinicializa o sketch armazenado na
memória Flash;
Não “apaga” o código, nem coloca o
dispositivo em um modo especial.

<!-- Slide 83 -->
Conhecendo o Arduíno Uno R3
Botão de
RESET
Controladora
USB
Lembrar que:
A porta USB é prioritariamente uma
porta de comunicação, e não de
alimentação !
Apenas pequenos projetos devem
ser alimentados pela placa de
protótipo;
Eventuais problemas elétricos
podem afetar o computador
conectado.

<!-- Slide 84 -->
Conhecendo o Arduíno Uno R3
Botão de
RESET
Controladora
USB
Objetivos prioritários:
Transferir sketches do compilador
cruzado;
Compartilhar teclado e tela do
computador com o Arduíno Uno:
Dispositivos de E/S;
Debug de sketches.
Acesso direto exige HID (Human
Interface Device), indisponível no
Arduíno Uno R3.

<!-- Slide 85 -->
Conhecendo o Arduíno Uno R3
Cristal de Clock
O clock sincroniza processador,
memória, barramentos e
periféricos;
Quanto à sua performance:
Se for baixa, pode tornar a operação lenta
demais - porém reduz consumo;
Se for alta, apesar de impor tempos de
resposta muito baixos para os componentes,
pode viabilizar aplicações em tempo real;
Estabilidade:
Se não existirem operações síncronas, as
exigências são baixas (1 ~ 5 %);
̣ Um relógio atrasa até 14 minutos por dia
com 1% de estabilidade.
Para aplicações síncronas, é um item crítico;
̣ Ex: ADC, DAC e comunicação de dados.

<!-- Slide 86 -->
Conhecendo o Arduíno Uno R3
Cristal de Clock
Existem algumas opções para
implementação do clock:
Oscilador RC interno;
Oscilador RC externo;
Oscilador com cristal de quartzo.
As opções diferem na estabilidade,
tamanho, consumo e custo;
Fatores externos (ou internos)
afetam a estabilidade:
Temperatura, alimentação, interferências
elétricas e vibração;
O Arduíno Uno R3 usa um cristal
de 16MHz em seu oscilador.

<!-- Slide 87 -->
Conhecendo o Arduíno Uno R3
Cristal de Clock
Existem algumas opções para
implementação do clock:
Oscilador RC interno;
Oscilador RC externo;
Oscilador com cristal de quartzo.
As opções diferem na estabilidade,
tamanho, consumo e custo;
Fatores externos (ou internos)
afetam a estabilidade:
Temperatura, alimentação, interferências
elétricas e vibração;
O Arduíno Uno R3 usa um cristal
de 16MHz em seu oscilador.

<!-- Slide 88 -->
Opções clock ATMega328P

<!-- Slide 89 -->
Opções clock ATMega328P

<!-- Slide 90 -->
Conhecendo o Arduíno Uno R3
Comunicação e Alimentação
Entrada USB
Provê comunicação com o
computador (e alimentação).
Entrada Fonte DC Externa
Provê alimentação a partir de fonte
de 5 a 17V, 1A;
Não se recomenda >12V
(aquecimento componentes).
Portas Analógicas
Portas Digitais

<!-- Slide 91 -->
Conhecendo o Arduíno Uno R3
Regulador
de Tensão
(5V)
A alimentação é crítica:
Queda de tensão por descarga da bateria, ou
falhas de projeto, podem provocar alteração de
comportamento;
Ruído injetado na alimentação é uma das fontes
de instabilidade mais diíceis de diagnosticar. O
próprio circuito digital é uma fonte de ruído;
Um surto de tensão, mesmo pequeno, pode
daniicar diversos componentes.
Como evitar problemas?
Escolha cuidadosa das fontes de alimentação;
Regulador de tensão (5V) e capacitores de
desacoplamento foram inseridos na placa de
protótipo.
Capacitor de
Desacoplamento

<!-- Slide 92 -->
Conhecendo o Arduíno Uno R3
Alimentação (pinos)
Saídas de 5V e 3,3V
Corrente máxima de 150mA
Entrada Vin
Alimentação de 5V ≥100mA
Portas Analógicas
Portas Digitais

<!-- Slide 93 -->
A linha Uno oferece conectores
fêmea para fios jumper
Dupont, sem uso de solda ou
mesmo uma protoboard.
Embora simples, estas
conexões têm alguns
problemas:
Contatos instáveis, especialmente
para sistemas mais complexos;
Baixa condutividade;
Suportam correntes pequenas.
Por outro lado, outras placas de protótipo podem exigir o uso de
protoboards. Projetos complexos podem exigir inclusive uma placa de
circuito impresso, mesmo para protótipos.
Conectores Arduíno Uno R3

<!-- Slide 94 -->
GPIOs do Arduíno Uno R3
GPIO: Generic Purpose Input
Output
Alimentação
Portas Analógicas
Portas Digitais

<!-- Slide 95 -->
GPIOs do Arduíno Uno R3
Alimentação
Portas Analógicas
Entradas com ADC
10 bits (0~1023)
= 0V
1023 = 5V (ou conf. IOREF)
ADC externo p/ resoluções maiores
Funções Especiais
I2C (SCL e SDA): portas A5 e A4
Portas Digitais
I2C

<!-- Slide 96 -->
Alimentação
Portas Analógicas
Entradas com ADC
10 bits (0~1023)
= 0V
1023 = 5V (ou conf. IOREF)
ADC externo p/ resoluções maiores
Funções Especiais
I2C (SCL e SDA): portas A5 e A4
Portas Digitais
GPIOs do Arduíno Uno R3

<!-- Slide 97 -->
GPIOs do Arduíno Uno R3
Alimentação
Portas Analógicas
Portas Digitais

<!-- Slide 98 -->
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
PWM
GPIOs do Arduíno Uno R3

<!-- Slide 99 -->
GPIOs do Arduíno Uno R3
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
PWM

<!-- Slide 100 -->
GPIOs do Arduíno Uno R3
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
UART

<!-- Slide 101 -->
GPIOs do Arduíno Uno R3
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
As portas UART têm outra
função:
Internamente as portas estão
conectadas a um conversor USB-
Serial, habilitando a porta USB da
placa de protótipo.
Quando o Arduíno Uno R3 estiver
conectado via porta USB a um
computador, é conveniente não
utilizá-las para UART.

<!-- Slide 102 -->
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
GPIOs do Arduíno Uno R3
Portas 2 e 3:
Pinos ísicos para sinais de
interrupção externa;
Permitem a gestão de eventos
ísicos em tempo real;
Além das interrupções externas, o
Arduíno Uno suporta interrupções
internas, como por exemplo
baseadas nos temporizadores.

<!-- Slide 103 -->
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
GPIOs do Arduíno Uno R3
Portas 10 a 13:
Suportam comunicação SPI (Serial
Peripheral Interface), que também é um
protocolo de comunicação para periféricos
externos;
Comparado ao I2C, o SPI é mais complexo,
porém oferece performance maior;
Uma função comum em alguns
microcontroladores é o uso do SPI para a
programação ISP (In-System Programming).
O Arduíno Uno R3, por exemplo, possui um
conector de 6 pinos especíico para esta
função.

<!-- Slide 104 -->
Alimentação
Portas Analógicas
Portas Digitais
Entrada ou Saída
Configurada via SW
Saídas marcadas com ~ são PWM
(Pulse Width Modulation)
< 20mA (máx.40 mA); total 200mA
Funções especiais
UART: Rx/Tx (portas 0 e 1)
Interrupções: INT0 e 1 (portas 2 e 3)
SPI: SS,MOSI,MISO,SCK(p. 10~13)
Pino 13: LED interno
GPIOs do Arduíno Uno R3

<!-- Slide 105 -->
Shields para o Arduíno Uno
Ethernet e
cartão SD

<!-- Slide 106 -->
Shields para o Arduíno Uno
Motores

<!-- Slide 107 -->
Shields para o Arduíno Uno
Didático

<!-- Slide 108 -->
Shields para o Arduíno Uno
CNC e
Impressora 3D

<!-- Slide 109 -->
Arduíno : outras placas

<!-- Slide 110 -->
A família PIC
Fabricados pela Microchip, a família de
microcontroladores PIC (Peripheral
Interface Controller ou Programmable
Intelligent Computer) é uma das mais
reconhecidas no mercado de Sistemas
Embarcados;
Primeiros produtos surgiram nos anos
80 dividindo o protagonismo com o 8051
da Intel. - durante décadas eles eram as
únicas opções para estudantes e
pesquisadores;
Apenas em 2015 a Microchip lançou
produtos de menor custo e
complexidade.
PIC16F877A, um dos microcontroladores mais
populares do mundo.

<!-- Slide 111 -->
Kits Desenvolvimento PIC
Advanced PIC-
Microcontroler Kit
MCU Development Board
Curiosity Nano
Os produtos “mais didáticos” para estudantes e projetistas inicialmente
eram grandes e caros;
Desenvolvimento a baixo custo exigia capacitação em eletrônica;
A solução de software também era (e ainda é) consideravelmente mais
complexa para iniciantes (MPLAB X IDE da Microchip).

<!-- Slide 112 -->
Séries de CPs "PIC"
Séries evoluíram em torno do tamanho da palavra de instruções,
permitindo instruções cada vez mais completas, mas ainda
classificadas como RISC;
Outro ponto de destaque são as milhares de aplicações
profissionais em automação e sistemas embarcados.

<!-- Slide 113 -->
CPs PIC - Exemplos
A tabela mostra modelos “populares”. É importante perceber o
baixo consumo da linha de produtos. A isto alinha-se a robustez, o
que ajuda a explicar o sucesso dos microcontroladores PIC.

<!-- Slide 114 -->
A família ESP
Fabricada pela Espressif, uma empresa
de Xangai fundada em 2008, a família
ESP é uma das mais conhecidas no
mercado de Sistemas Embarcados;
O primeiro produto, o ESP8266, surgiu
em 2014, trazendo pela primeira vez a
conectividade Wi-Fi para
microcontroladores. Em setembro de
2016 foi lançada a linha ESP32;
A família conta com diversos tipos e
modelos de produtos, e têm a liderança
em projetos IoT.
ESP8266 Node MCU e ESP32 WROOM,
duas das placas de protótipo mais
populares da Espressif

<!-- Slide 115 -->
Evolução da família ESP

<!-- Slide 116 -->
Formatos do ESP32
SoC
Módulo
Placa de Protótipo
SoC: para grandes fabricantes;
Módulo: fabricantes menores e hobbyistas avançados;
Placa de Protótipo: desenvolvedores e hobbyistas.

<!-- Slide 117 -->
Séries do ESP32 / SoCs
A série original e a “S” voltam-se para aplicações gerais IoT. A
série “C” tem foco em eficiência e segurança, a “H” para redes
Mesh e a P para processamento avançado;
Dentro de cada série estão disponíveis diversos modelos.

<!-- Slide 118 -->
Módulos ESP32
WROOM
WROVER
MINI
WROOM (Wireless Room): modelo básico;
WROVER (Wireless Room with RAM Overlay): evolução do WROOM;
MINI: modelo compacto para projetos com espaço reduzido.

<!-- Slide 119 -->
Identificação de ESP32

<!-- Slide 120 -->
Identificação de ESP32

<!-- Slide 121 -->
A família Raspberry
A Raspberry Pi Foundation, fundada
em 2008, teve como primeiro produto
o Raspberry Pi 1 Model B, um SBC
lançado em fevereiro de 2012. Nesta
linha, o produto mais recente é
Raspberry Pi 5, lançado em 2023, com
2,4 GHz de clock, e até 8GBytes de
RAM.
Em 2021, foi lançada a placa de
protótipo Raspberry Pi Pico. Nesta
linha, o produto mais recente é o
Raspberry Pi Pico 2W com 520KB de
RAM, e processador RP2350.
Raspberry Pi 5
Raspberry Pi Pico 2W

<!-- Slide 122 -->
Raspberry Pi: Placas CP

<!-- Slide 123 -->
Raspberry Pi: SBCs

<!-- Slide 124 -->
Uno Q: A Arduíno entra no jogo
Qualcomm® comprou a fundação
Arduíno® em 7/10/2025
Inicialmente fabricava
chipsets CDMA para celulares;
Proprietária da NXP Semicon-
dutores e da marca Snapdragon;
O Arduino Q foi o primeiro
fruto desta fusão
Produto híbrido (microprocessador e
microcontrolador na mesma placa);
Placa de protótipo + SBC;
Fisicamente compatível com a linha Arduíno Uno, em tamanho e furos de ixação;
USB-C multifunção (comunicação, alimentação, teclado, mouse, storage e entrada/saída áudio e vídeo).

<!-- Slide 125 -->
Uno Q: A Arduíno entra no jogo
Microprocessador QRB2210
ARM Cortex-A53 c/ quatro núcleos
Clock de 2GHz
GPU Adreno 702
2 processadores de imagem
DSP integrado
Disponível com 2GB RAM (4GB em breve)
Roda Debian Linux
Microcontrolador STM32U585
ARM Cortex-M33
Clock de 130MHz
2MB memória Flash
768KB SRAM
Suporta RTOS Zephyr

<!-- Slide 126 -->
Uno Q: A Arduíno entra no jogo
Comunicação
Wi-Fi 5 (802.11ac - 2,4 e 5GHz);
Bluetooth 5.1 e BLE;
Alimentação de 3,3V
Diferente da linha, mas tolera os 5V originais, inclusive shields originais;
Pinos A0 e A1 não toleram 5V, mas podem funcionar como saídas DAC;
Pinos A2 e A3 agora incorporam também um ampliicador operacional;
Eliminada a entrada para fonte externa, mas Vin suporta até 24V.
E muito mais …
3 barramentos I2C (inclusive o original nos pinos A4 e A5);
Jumpers de coniguração, debug serial e saída de 1,8V;
Quatro LEDs indicativos, além de matriz de LED na placa;
2 conectores JMISK de alta performance no lado do microcontrolador (2 câmeras, display etc).
Por enquanto, é bom ter paciência …
