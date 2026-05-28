# Projeto SE: Fases, Software e Comunicação

---

<!-- Slide 90 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
A demanda por SE hoje está em todas as áreas
Esta icando diícil encontrar um equipamento meramente mecânico ou eletrônico;
Sistemas embarcados melhoram as funcionalidades, aumentam a vida útil, reduzem custo;
Caminho similar ao da informatização, da internet, e agora da IA.

<!-- Slide 91 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Deinição de requisitos
Envolve diversas disciplinas;
Exige um trabalho bem cuidadoso, para garantir longevidade ao equipamento;
Pode mudar inclusive durante o ciclo de vida do produto (atualização de software).

<!-- Slide 92 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Projetos multidisciplinares
Podem inclusive envolver outras áreas (química, bioísica, agronomia, medicina etc);
Desenvolvidos de forma virtual com auxílio de ferramentas CAx (CAD, CAM, CAE etc);
Há forte interação entre projetos (espaço ocupado, peso, consumo de energia etc).

<!-- Slide 93 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Projeto Eletrônico
Também é multidisciplinar (elétrica, eletrônica, microcontroladores, sensores, controle etc);
Envolve deinição da plataforma (microcontrolador?), sensores, atuadores e componentes;
Integração forte com o projeto de software.

<!-- Slide 94 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Projeto Software
Fortemente afetado pelos requisitos do projeto, e escolhas no projeto eletrônico;
Exige deinições e sofre efeitos bem diferentes dos demais projetos;
É o nosso objeto de estudo nesta aula.

<!-- Slide 95 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Design e Simulação
Há riqueza de ferramentas de software para apoio nesta etapa de projeto;
Tipicamente é possível simular a maior parte dos componentes do projeto;
Comportamentos observados na simulação podem afetar o projeto, exigindo ajustes.

<!-- Slide 96 -->
Fases do Projeto de SE
Demanda
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Confecção de Protótipo
Tipicamente, a confecção de um modelo ísico e operacional do projeto é essencial;
O comportamento do modelo ainda pode afetar o projeto, exigindo modiicações.

<!-- Slide 97 -->
Fases do Projeto de SE
Deﬁnição
Requisitos
Projeto
Mecânico
Projeto
Eletrônico
Projeto
Software
Design e
Simulação
Confecção
de
Protótipo
Fabricação
(projeto piloto,
testes ﬁnais?)
Venda
Implantação
Suporte
Descarte
Documentação
Seleção Fornecedores
Treinamento
Etapas posteriores
Obviamente o trabalho não acaba no protótipo;
Um projeto exige muitas outras preocupações, que podem
inclusive afetar as primeiras etapas

<!-- Slide 98 -->
Software em SE
Quem executará o software?
Deinição tipicamente ocorre durante o projeto de hardware;
Soluções proprietárias (PLCs);

<!-- Slide 99 -->
Software em SE
Quem executará o software?
Deinição tipicamente ocorre durante o projeto de hardware;
https://ladderlogicworld.com/plc-manufacturers/#google_vignette
Os dez maiores fabricantes:
Fabricantes
Marca
Siemens
Simatic
Rockwell Automation
Allen Bradley
Mitsubishi Electric
Melsec
Schneider Electric
Modicon
Omron
Sysmac
Emerson Electric (GE)
RX3i & VersaMax (GE Fanuc)
Keyence
KV & V-8000
ABB (B&R Automation)
AC500 X20 & X90
Bosch
Rexroth ICL
Hitachi
EH & H

<!-- Slide 100 -->
Software em SE
Norma IEC 61131-3 (1993 ~ 2013)
Promover interoperabilidade entre diferentes fabricantes de PLCs;
Deine, entre outras coisas, 5 linguagens de programação padrão
LD (Ladder Diagram) - gráica;
FBD (Function Block Diagram) - gráica;
ST (Structured Text) - textual;
IL (Instruction List) - textual (descontinuada);
SFC (Sequencial Function Chart) - gráica.
Tecnologia, no entanto, continua fechada
Não há acesso ao software, nem à arquitetura de hardware;
Restrições levaram à busca por plataformas abertas;
Motivação para estudo dos microcontroladores em sistemas de
automação, ou seja, nossa disciplina !

<!-- Slide 101 -->
Software em SE
Microcontroladores utilizados em PLCs
Em sistemas menores, linha PIC e ARM Cortes M3 ou M4, ou FPGAs;
Em sistemas de grande porte, ARM Cortes A8 e A9, e microprocessadores.
Tecnologia aberta
Promove a redução signiicativa de custos;
Garante lexibilidade, por não depender de soluções proprietárias.
OpenPLC - uma iniciativa de tecnologia aberta
Iniciativa do projeto de doutorado de Thiago Rodrigues Alves
Suporta as 5 linguagem padrão deinidas pela IEC 61131-3
Pode ser executada nas plataformas PIC, Arduíno, ESP, Raspberry Pi etc.
https://autonomylogic.com/
https://www.youtube.com/watch?v=cNg-tXZynJE

<!-- Slide 102 -->
Programa “aberto" MCUs
Código Fonte:
instr.1
instr.2
instr.3
.
.
instr.n
test.java
test.c
instr.1, instr.2, instr.3 …
test.asm
MCU
Compilador C
Bibliotecas C
#include
Compilador
Java
Bibliotecas
Java
import
JVM
Java
Virtual
Machine
Interpretador
Python
Bibliotecas
Python
import
PVM
Python
Virtual
Machine
Programação Assembly
• Não há necessidade de compilação, exceto para
conversão dos mnemônicos em instruções de
linguagem de máquina com o "Assembler";
• Maior performance e menor código possível;
• Baixíssima portabilidade;
•Alta complexidade

<!-- Slide 103 -->
Conjunto de Instruções
PIC16F877 Instruction Set https://ww1.microchip.com/downloads/en/DeviceDoc/31029a.pdf

<!-- Slide 104 -->
Conjunto de Instruções
Deine instruções em “linguagem de máquina”
reconhecidas pelo dispositivo
A programação tipicamente é realizada em “assembly”, que representa
cada instrução com uma sigla (mneumônico);
Veremos outras formas mais simples de programar um
microcontrolador ao longo da disciplina.
Arquiteturas RISC x CISC
(Reduced / Complete) Instruction Set Computer;
O PIC16F877, por exemplo, possui apenas 35 instruções (RISC),
divididas em seis grupos;
RISC tipicamente oferece performance maior, porém traz desaios para a
programação.

<!-- Slide 105 -->
Programa “aberto" MCUs
Código Fonte:
instr.1
instr.2
instr.3
.
.
instr.n
test.java
test.c
instr.1, instr.2, instr.3 …
test.asm
MCU
Compilador C
Bibliotecas C
#include
Compilador
Java
Bibliotecas
Java
import
JVM
Java
Virtual
Machine
Interpretador
Python
Bibliotecas
Python
import
PVM
Python
Virtual
Machine
Programação C, C++
• Boa performance e código reduzido;
• Boa portabilidade, embora aceite código
especíico;
• Complexidade baixa;
• Bom conjunto de bibliotecas para funções
básicas.

<!-- Slide 106 -->
Programa “aberto" MCUs
Código Fonte:
instr.1
instr.2
instr.3
.
.
instr.n
test.java
test.c
instr.1, instr.2, instr.3 …
test.asm
MCU
Compilador C
Bibliotecas C
#include
Compilador
Java
Bibliotecas
Java
import
JVM
Java
Virtual
Machine
Interpretador
Python
Bibliotecas
Python
import
PVM
Python
Virtual
Machine
Programação Java
• Incomum na programação de SE;
• Incorpora o conceito de Máquina Virtual, que
trouxe um nível elevado de portabilidade.

<!-- Slide 107 -->
Programa “aberto" MCUs
Código Fonte:
instr.1
instr.2
instr.3
.
.
instr.n
test.java
test.c
instr.1, instr.2, instr.3 …
test.asm
MCU
Compilador C
Bibliotecas C
#include
Compilador
Java
Bibliotecas
Java
import
JVM
Java
Virtual
Machine
Interpretador
Python
Bibliotecas
Python
import
PVM
Python
Virtual
Machine
Programação Python
• Tipicamente é interpretada, e não compilada.
Opera inclusive em modo interativo;
• Possui um conjunto robusto de bibliotecas com
funcionalidades de IA, aprendizado de máquina,
reconhecimento de imagens etc.

<!-- Slide 108 -->
Compiladores especiais
Cross Compilers
Criam códigos executáveis para dispositivos diferentes de onde o
compilador foi executado;
Tipicamente utilizado na programação de MCUs e outros dispositivos
que não suportam adequadamente a operação de um compilador;
Também são utilizados na programação de celulares, smartwatches etc.
Source-to-source Compilers
Transforma um código fonte escrito em uma linguagem de
programação para outra linguagem;
Existem exemplos para converter LD (Ladder Diagram) para C++, por
exemplo.

<!-- Slide 109 -->
Software em SE
Parâmetros importantes a serem avaliados
Performance: quanto mais baixo o nível, mais rápido;
Ocupação de Memória: quanto mais baixo o nível, menor ocupação;
Grau de abstração: quanto mais alto o nível, maior a abstração;
Portabilidade: linguagens de alto nível e Máquinas Virtuais ajudam;
Reuso & Bibliotecas: maior a participação de mercado ajuda;
Documentação e recursos de apoio: idem acima.
Cabe ao projetista a análise
Custo e tempo de desenvolvimento/testes;
Direitos autorais.

<!-- Slide 110 -->
Outros componentes de SW
Software Básico
Bootloader
Nos computadores, carrega o SO da unidade de disco;
Software de inicialização, tipicamente associado a uma placa de protótipo;
Coniguração Básica de módulos internos (Wi-Fi, UART etc)
Permite a carga de sketches;
Sistema Operacional
Tipicamente ausente nos MCUs, pode ser encontrado nos SBC (Single Board Computers);
Incorpora funcionalidades importantes, porém consome recursos para sua execução.
RTOS (Real Time Operational System)
Para microcontroladores, especialmente em aplicações multitarefa e em tempo real;
Trata problemas de compartilhamento de recursos, sincronismo e priorização.
Integração com recursos na nuvem
Diversos recursos são oferecidos na nuvem, especialmente para IoT.

<!-- Slide 111 -->
Carga da memória Flash
Em um microcontrolador, o sketch,
além de outros componentes, icam
armazenados na memória Flash do
dispositivo;
Não há interfaces acessíveis
diretamente pelo programador. Sendo
assim, são duas as opções para carga da
Flash:
Acesso via USB nas placas de protótipo,
comandado pelo bootloader previamente
gravado no microcontrolador;
Acesso via ISP (In-Circuit Serial
Programmer) por um device programmer.
PICkit 3, device programmer
popular para microcontrola-
dores da linha PIC

<!-- Slide 112 -->
Carga via USB
Algumas placas de protótipo
oferecem portas USB integradas
Linha Arduíno;
Linha ESP.
Algumas oferecem conexões através
de adaptadores USB externos
Ex.: ESP01 (ao lado)
Com o bootloader previamente carregado
na Flash, basta conectar um computador
com uma IDE instalada, e seguir o
procedimento indicado pelo fabricante.

<!-- Slide 113 -->
* D10 é utilizado apenas no ISP.
Device Programmer
Uma placa de protótipo pode ser usada como
device programmer. No exemplo, temos 2
Arduínos Uno, um "programando" o outro;
A memória Flash do
ATMega328P deste Arduíno
Uno está sendo gravada.
Este Arduíno é o device
programmer, conectado ao
computador com a IDE
devidamente conﬁgurada.
ISP
Destino
Pino Conector ICSP
Vcc
Vcc
GND
GND
MOSI/D11
MOSI
MISO/D12
MISO
SCK/D13
SCK
D10 (*)
Reset
Na família Arduíno, temos um
conector dedicado, o ICSP (In-Circuit
Serial Programming).

<!-- Slide 114 -->
* D10 é utilizado apenas no ISP.
Device Programmer
Uma placa de protótipo pode ser usada como
device programmer. No exemplo, temos 2
Arduínos Uno, um "programando" o outro;
A memória Flash do
ATMega328P deste Arduíno
Uno está sendo gravada.
Este Arduíno é o device
programmer, conectado ao
computador com a IDE
devidamente conﬁgurada.
ISP
Destino
Pino Conector ICSP
Vcc
Vcc
GND
GND
MOSI/D11
MOSI
MISO/D12
MISO
SCK/D13
SCK
D10 (*)
Reset
Na família Arduíno, temos um
conector dedicado, o ICSP (In-Circuit
Serial Programming).

<!-- Slide 115 -->
“Programadores" externos
Oferecem solução mais robusta:
Não dependem de conexões temporárias;
São fornecidas pelos fabricantes dos
microcontroladores.
Na família Arduíno temos algumas
opções, como USBasp e o AVRISP MkII;
Na família PIC, o PICKit 3 é bastante
utilizado;
ESP32 utiliza ISP por UART, ou
programadores para módulos sem
interfaces;
Outros métodos: JTAG e SWD.
Programador USBasp em um Arduíno Uno
PICKIT3 - programação da linha PIC

<!-- Slide 116 -->
ISP: Conexão e Protocolo
Conexão e protocolo depende da linha de
microcontrolador;
Na linha Arduíno e PIC, é utilizado o SPI, com um
conector dedicado de 6 pinos na linha Arduíno
(ICSP);
Os pinos conectados são similares aqueles
utilizados no SPI, saindo do programador:
MOSI : Envio de dados;
MISO : Recebe dados;
SCK: clock síncrono gerado pelo programador;
VTG e GND: pinos de alimentação..
RESET: utilizado para iniciar o modo de programação.
No ESP32, utiliza-se o SPI com UART ou JTAG
Conector ICSP (linha Arduino)

<!-- Slide 117 -->
Dispositivos de Entrada
Dispositivos especiais (giroscópio, acelerômetro, RTC)

<!-- Slide 118 -->
Comunicação em SE
Em Sistemas Embarcados,
microcontroladores e sensores
precisam se comunicar
Sinais elétricos (portas analog./digitais);
Interfaces cabeadas;
Interfaces sem io.
Há diversos padrões internacionais
Também há soluções proprietárias
Ex. ESP-Now
Ilustração gerada no imagine.art (IA)
UART
ZigBee
Bluetooth
i2C
Ethernet
CAN
SPI
Wi-Fi
LoRa

<!-- Slide 119 -->
Comunicação - Protocolos
Protocolo Mídia
Taxa
Alcance Aplicação Típica
UART
Cabeada
< 5Mbps
1 Km
Muito simples, 2 ios, baixa performance, dois pontos,
assíncrono, full-duplex, compatibilidade universal.
i2C
Cabeada
< 5Mbps
100 m
Simples, barramento 2 ios, baixa performance, até 1008
pontos, síncrono, Half-duplex, múltiplos controladores.
SPI
Cabeada
< 65Mbps
10 m
Complex.Média, barramento 4 ios, alta performance, “n"
pontos (?), síncrono, full-duplex, 1 controlador.
ZigBee
Sem io
< 250 Kbps 100 m
Simples, topologias estrela, árvore ou mesh, baixa
performance, nº pontos (topologia ?) e baixo consumo.
CAN
Cabeada
< 1 Mbps
1 Km
Complex.Média, barramento 2 ios, média performance,
“n" pontos, assíncrono, full-duplex, 1 controlador.
LoRa
Sem io
< 5 Kbps
10 Km
Simples, topologia estrela ou mesh, baixíssima
performance, “n” pontos, baixo consumo.
ESP-Now
Sem io
< 1 Mbps
480 m
Simples, topologia estrela ou ponto a ponto, alta
performance, 20 pontos, baixo consumo.

<!-- Slide 120 -->
A opção UART
É um protocolo clássico, base de
todas as comunicações seriais,
como o RS-232, por exemplo;
É assíncrono (não utiliza clock);
Simplex, Half ou Full-duplex;
Tx
Rx
GND
Tx
Rx
GND

<!-- Slide 121 -->
A opção UART
É um protocolo clássico, base de
todas as comunicações seriais,
como o RS-232, por exemplo;
É assíncrono (não utiliza clock);
Simplex, Half ou Full-duplex;
Compatibilizar níveis de tensão
Microcontroladores e sensores nem
sempre usam o mesmo nível de tensão;
3,3 V →5V : ok ?
5V →3,3V : não interligar !
Divisores de tensão ou conversores de
nível (foto) podem ser utilizados.

<!-- Slide 122 -->
A opção UART
É um protocolo clássico, base de
todas as comunicações seriais,
como o RS-232, por exemplo;
É assíncrono (não utiliza clock);
Simplex, Half ou Full-duplex;
Compatibilizar níveis de tensão;
São 3 as informações de
coniguração:
Taxa de transferência;
Comprimento em bits (5 a 9, típico 7-8);
start e stop bits;
Taxas Típicas
4.800 bps
9.600 bps
19.200 bps
57.600 bps
115.200 bps

<!-- Slide 123 -->
UART Formato de quadro
bits de dados (8)
1000 0010 (LSB) = 0100 0001 (“A")
livre
(nível 1)
livre
(nível 1)
1 start bit
(rampa descida)
1 stop bit
(rampa subida)
paridade
(opcional, e neste caso, par)
(*) Nível 1: “mark”; nível 0: "space"

<!-- Slide 124 -->
UART Programação
Tomando como exemplo o Arduíno, temos os seguintes
procedimentos para transmissão e recepção:
Transmissão:
Funciona como uma impressão serial;
O processo envolve:
Serial.begin( taxa,[configuração] )
Função Serial.print p/ transmissão.
Recepção:
Varredura frequente do buffer de
entrada, ou por interrupção.
O processo envolve:
Serial.begin( taxa,[configuração] )
Verificar Serial.available()
Armazenar mensagem em variável
inChar = Serial.read()
(*) Conﬁguração Padrão: 8 bits de dados, 1 de parada, sem paridade (SERIAL_8N1)

<!-- Slide 125 -->
A opção I2C
Protocolo criado pela Philips em 1982
O I2C não deine todos os seus aspectos;
Nome, conector, e até mesmo tensão de operação são variáveis;
É muito comum internamente em celulares e outros dispositivos.
Opera em diversos modos
Utiliza 2 ios: SCL (clock) e SDA (serial data)
Standard (Sm)
100Kbps
High-Speed (Hs)
1,7Mbps
Fast (Fm)
400Kbps
High-Speed (Hs)
3,4Mbps
Fast plus (Fm+)
1Mbps
Ultra-Fast (UFm)
5Mbps (Unidirecional)

<!-- Slide 126 -->
I2C - Topologia
Barramento único
Admite entrada e saída de dispositivos a qualquer momento;
Cada dispositivo possui um endereço que o identiica.
SDA
SCL
Vcc

<!-- Slide 127 -->
I2C - Formato de Quadro
(*) Slides obtidos no vídeo “Understanding I2C” da Rohde Schwarz

<!-- Slide 128 -->
I2C - Formato de Quadro
O valor “1" identiica que o
barramento está livre;
Sequência determina star bit
SDA desce, seguido por SCL;

<!-- Slide 129 -->
I2C - Formato de Quadro
Cada dispositivo tem
um endereço de 7
bits
Começa pelo MSB;
Endereço pode ser ixo,
ou modiicado por
alterações na placa de
circuito impresso do
dispositivo.

<!-- Slide 130 -->
I2C - Formato de Quadro
O bit R/W vem logo após o endereço, e é deinido pelo Master
0 →Mestre escreve no escravo;
1 →Mestre lê o escravo;

<!-- Slide 131 -->
I2C - Formato de Quadro
Deinido pelo receptor, vai
para zero para
conirmação
1 →Condição livre do
barramento = NACK;
ACK após dados
Conirme recebimento dos
dados;
ACK após endereço do
escravo
Escravo com aquele endereço
existe;
Pronto para ler / escrever, de
acordo com R/W.

<!-- Slide 132 -->
I2C - Topologia
É comum encaminhar mais de um bloco de dados
Cada bloco individual tem sua conirmação (Ack) especíica;
O I2C não deine conteúdos, qualquer bloco pode transmitir
qualquer coisa, mas …
… é comum, na escrita de registradores de periféricos, que o primeiro bloco
contenha o encereço, e o segundo os dados a serem escritos, por exemplo.

<!-- Slide 133 -->
I2C - Formato de Quadro
Tudo ocorre de forma similar ao
start bit;
A sequência inversa determina
stop bit
SCL sobe, seguido por SDA;

<!-- Slide 134 -->
I2C Programação
Tomando como exemplo o Arduíno, temos os seguintes
procedimentos para transmissão e recepção:
Transmissão:
O processo envolve:
#include wire.h
wire.begin( endereço )
wire.write( mensagem )
Recepção:
O processo envolve:
#include wire.h
wire.begin( endereço )
Char = wire.read

<!-- Slide 135 -->
A opção
Protocolo proprietário da Expressif, fabricante do ESP8266
e ESP32
Utiliza o transceptor de 2,4 GHz já existente para Bluetooth e Wi-Fi;
Utiliza um padrão de transmissão similar aos teclados e mouses sem io;
Não exige infraestrutura Wi-Fi (roteador, por exemplo);
Aceita comunicação uni e bidirecional com conexões persistentes;
Algumas limitações
Maior pacote deve ter 250 Bytes (mas permanece útil para SE);
Podem haver entre 6 e 20 estações, a depender do modo de operação, e
do uso de criptograia.

<!-- Slide 136 -->
ESP-NOW Unidirecional
Um emissor (iniciator) e um
receptor (responder);
Iniciator
Responder

<!-- Slide 137 -->
ESP-NOW Unidirecional
Um emissor (iniciator) e um
receptor (responder);
Um emissor e vários receptores
individualmente, ou em broadcast
(para todos);
Iniciator
Responder
Responder
Responder

<!-- Slide 138 -->
ESP-NOW Unidirecional
Um emissor (iniciator) e um
receptor (responder);
Um emissor e vários receptores
individualmente, ou em broadcast
(para todos);
Vários emissores individualmente
ou simultaneamente;
Responder
Iniciator
Iniciator
Iniciator

<!-- Slide 139 -->
ESP-NOW Bidirecional
Dois dispositivos podem transmitir
e ler ao mesmo tempo, atuando
simultaneamente como emissor e
receptor;
Iniciator /
Responder
Iniciator /
Responder

<!-- Slide 140 -->
ESP-NOW Bidirecional
Dois dispositivos podem transmitir
e ler ao mesmo tempo, atuando
simultaneamente como emissor e
receptor;
Todos os dispositivos podem se
comunicar com qualquer outro nas
duas direções.
Iniciator /
Responder
Iniciator /
Responder
Iniciator /
Responder
Iniciator /
Responder

<!-- Slide 141 -->
ESP-NOW Endereçamento
Utilizar o MAC Address do
dispositivo para identiicá-lo como
destinatário;
O MAC Address é um número
hexadecimal de 6 dígitos único
gravado pelo fabricante;
(*) O ESP-NOW não suporta endereços de
broadcast (FF:FF:FF:FF:FF:FF), mas existe
forma de fazer um pseudo-broadcast.
Para obter o endereço, pode-se usar
o sketch ao lado, ou mesmo veriicar
as mensagens de inicialização do
dispositivo.

<!-- Slide 142 -->
Funções de callback
Para a comunicação usando o ESP-NOW, utilizamos duas
funções, chamadas na transmissão e recepção:
esp_now_register_send_cb()
Utilizada na transmissão, retorna
status de envio e recepção;
O processo envolve:
Iniciar o ESP-NOW
Registrar a função de callback
Adicionar um receptor (MAC
Address)
Enviar a mensagem
esp_now_register_rcb_cb()
Utilizada na recepção, retorna os
dados recebidos;
O processo envolve:
Iniciar o ESP-NOW
Registrar a função de callback
Salvar a mensagem recebida

<!-- Slide 143 -->
Receptor

<!-- Slide 144 -->
Transmissor

<!-- Slide 145 -->
Protocolos para IoT
Assim como no OSI, os protocolos
IoT também são dispostos em
camadas. Há modelos
alternativos:
3 camadas: percepção, rede e
aplicação;
4 camadas: percepção, suporte,
rede e aplicação;
5 camadas: percepção, transporte,
processamento, aplicação e negócios.
Diversidade grande de protocolos, alguns novos, aplicados em IoT. Nas
camadas mais altas, entre outros, temos:
HTTP: Hiper Text Transfer Protocol
MQTT: Message Queuing Telemetry Transport

<!-- Slide 146 -->
HTTP (Hiper Text Transfer Protocol)
O protocolo utiliza o TCP, e vem sendo aproveitado para outras
aplicações diferentes do objetivo inicial (navegadores WEB)
Simplicidade de especiicação de protocolo
Estabilidade operacional
Tradicionalmente, o HTTP operava com requisições e respostas
Cada acesso envolvia o estabelecimento de uma conexão, transferência
das informações e encerramento da conexão;
Para garantir aplicações em tempo real / interativas, surgiu o HTTP
Websockets e o HTTP Push;

<!-- Slide 147 -->
HTTP (Hiper Text Transfer Protocol)
HTTP Websockets
Permite conexões persistentes e bidirecionais;
HTTP Push
Também chamado de HTTP Streaming, permite que servidores
enviem respostas aos seus clientes independentes de requisições;
Permite atualizações em tempo real e comunicações orientadas a
eventos;
Aplicação
O uso do HTTP é particularmente interessante quando a aplicação tem
interação via WEB;

<!-- Slide 148 -->
MQTT (Message Queuing Telemetry Transport)
Criado por Andy Standor-Clark (IBM) e Arlen Nipper (Cirrus Link)
[1999]
Originalmente criado para monitorar sensores em oleodutos através de satélites, foi
liberado ao público em 2010, na sua versão 3.1;
Versão 5.0 (atual) lançada em março de 2019;
Satélites com poucos recursos, e muito caros. Os objetivos eram:
Pacotes de tamanho reduzido;
Conexões TCP/IP persistentes e com cabeçalho reduzido;
Modelo de publicação e assinatura;
Opções de entrega coniáveis em redes pouco coniáveis.
Protocolo leve, com payload binário
Uma mensagem MQTT pode ter apenas 2 Bytes !
Clientes/dispositivos de baixo consumo;
Taxas de transferência reduzidas (Ex.LoRa);

<!-- Slide 149 -->
MQTT - Topologia
Broker
publish
publish
publish
publish
publish
subscribe
subscribe
subscribe
subscribe

<!-- Slide 150 -->
Modelo de Publicação / Assinatura
Deine dois componentes: os clientes e os brokers;
Clientes podem publicar (publishers) ou acessar informações (subscribers)
O acesso tipicamente se dá através de uma estrutura de tópicos pré-deinida,
onde clientes são “assinantes” ou através de iltros especíicos;
Brokers atuam como intermediários, responsáveis por receber informações
"publicadas", e entregar estas informações para os clientes “assinantes”
Disponíveis em plataformas abertas e gratuitas (Ex. Mosquitto, HiveMQ etc);
Seu modelo “desacoplado" habilita aplicações eicientes e escaláveis
Suporte a ambientes com comunicação instável ?
Independência dos processos de envio e recepção;
Não é necessário um POST para cada cliente, como no HTTP.
MQTT - Topologia

<!-- Slide 151 -->
MQTT - Tópicos
casa/terreo/sala/temperatura
casa/terreo/sala/brilho
casa/terreo/porta/status
casa/terreo/cozinha/luz
casa/1oPav/suite/temperatura
casa/1oPav/suite/brilho
casa/1oPav/quarto/temperatura
casa/1oPav/quarto/brilho
jardim/luz
jardim/umidade
jardim/irrigação
publisher
subscriber
subscriber

<!-- Slide 152 -->
MQTT - Tópicos
Wildcards (coringas): o MQTT admite
dois caracteres especiais que
funcionam como coringas na
identiicação de tópicos:
casa/terreo/sala/temperatura
casa/terreo/sala/brilho
casa/terreo/porta/status
casa/terreo/cozinha/luz
casa/1oPav/suite/temperatura
casa/1oPav/suite/brilho
casa/1oPav/quarto/temperatura
casa/1oPav/quarto/brilho
jardim/luz
jardim/umidade
jardim/irrigação

<!-- Slide 153 -->
MQTT - Tópicos
Wildcards (coringas): o MQTT admite
dois caracteres especiais que
funcionam como coringas na
identiicação de tópicos:
+ : para substituição de um nível. Se um assinante
selecionar o tópico casa/1oPav/+/temperatura ,
ele receberá as informações de temperatura dos
dois cômodos do primeiro pavimento;
# : se for assinado o tópico casa/terreo/# , o
assinante receberá todas as informações
enviadas para os quatro primeiros tópicos.
casa/terreo/sala/temperatura
casa/terreo/sala/brilho
casa/terreo/porta/status
casa/terreo/cozinha/luz
casa/1oPav/suite/temperatura
casa/1oPav/suite/brilho
casa/1oPav/quarto/temperatura
casa/1oPav/quarto/brilho
jardim/luz
jardim/umidade
jardim/irrigação

<!-- Slide 154 -->
MQTT - Tópicos
Wildcards (coringas): o MQTT admite
dois caracteres especiais que
funcionam como coringas na
identiicação de tópicos:
+ : para substituição de um nível. Se um assinante
selecionar o tópico casa/1oPav/+/temperatura ,
ele receberá as informações de temperatura dos
dois cômodos do primeiro pavimento;
# : se for assinado o tópico casa/terreo/# , o
assinante receberá todas as informações
enviadas para os quatro primeiros tópicos.
casa/terreo/sala/temperatura
casa/terreo/sala/brilho
casa/terreo/porta/status
casa/terreo/cozinha/luz
casa/1oPav/suite/temperatura
casa/1oPav/suite/brilho
casa/1oPav/quarto/temperatura
casa/1oPav/quarto/brilho
jardim/luz
jardim/umidade
jardim/irrigação

<!-- Slide 155 -->
MQTT - QoS
Nível 0 (at most once)
Cada mensagem é enviada apenas uma vez;
Não há requerimento de conirmação - mensagens podem ser perdidas;
Menor tamanho de mensagem;
Nível 1 (at least once)
Cada mensagem precisa ser conirmada;
Se a falha de rede ocorrer na conirmação, mensagens podem chegar mais de uma vez;
Mensagens precisam ser idempotentes;
Nível 2 (exactly once)
Cada mensagem só chega uma vez, e é conirmada;
Protocolo complexo (4 etapas de handshake) - mensagens maiores e mais lentas;
Sessões persistentes
Mensagens Nível 1 e 2 são enileiradas para envio após eventuais falhas temporárias de rede.

<!-- Slide 156 -->
HTTP x MQTT
HTTP WEBSOCKETS
MQTT
Modelo
Full-duplex, Bidirecional
Publicação / Assinatura
Endereçamento
URIs
Tópicos
Protocolo de Transporte
TCP
TCP, UDP
Acompanhamento Cliente
N/D
Mensagens
Retenção de Mensagens
N/D
Sim
Modo de envio de mensagens
Bidirecional
Assíncrono
Arquitetura
Cliente/Servidor
Cliente/Servidor
Conﬁabilidade das Mensagens
WebSockets
QoS níveis 1 e 2

<!-- Slide 157 -->
Fim
