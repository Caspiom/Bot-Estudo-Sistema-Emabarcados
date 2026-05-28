# Projeto SE: Fases, Software e Comunicação

## As fases de um projeto de sistema embarcado

Desenvolver um sistema embarcado profissional não é sair codando. Tem um processo. E esse processo existe porque sistemas embarcados têm características que software de PC não tem: operam em campo, muitas vezes sem possibilidade de atualização fácil, às vezes em ambientes hostis, e falhas podem custar dinheiro, ou vidas.

### Demanda

Tudo começa com a necessidade. O que o sistema deve fazer? Quem vai usar? Em que ambiente? Quais são os requisitos de confiabilidade, consumo de energia, temperatura de operação, custo máximo por unidade?

Essa fase parece óbvia, mas é onde a maioria dos projetos fracassa. O cliente diz "quero um termostato". O engenheiro entrega um termostato. O cliente diz "mas eu queria que também mandasse SMS". A conversa sobre requisitos não foi completa.

### Definição

Com a demanda clara, você define: qual processador? Qual sistema operacional (ou bare-metal)? Quais periféricos? Qual linguagem? Qual protocolo de comunicação?

Essas decisões têm impacto enorme no projeto inteiro. Escolher um microcontrolador subdimensionado significa retrabalho. Escolher um superdimensionado aumenta custo e consumo.

### Projeto de Hardware e Software

HW e SW andam juntos. O esquemático do circuito define quais pinos têm qual função. O código depende dessa definição. Em projetos profissionais, HW e SW são desenvolvidos em paralelo, o time de firmware começa com um kit de desenvolvimento enquanto o hardware customizado está sendo fabricado.

### Testes, Produção e Manutenção

Sistema embarcado que vai para campo precisa de testes rigorosos, variação de temperatura, vibração, interferência eletromagnética, ciclos de ligar/desligar. Depois da produção, vem a manutenção: atualização de firmware (via ISP, UART bootloader ou wireless OTA).

---

## Software em sistemas embarcados

### Quem executa o software?

Essa é a primeira pergunta. Existem três cenários:

1. **Bare-metal / sem OS**: o código roda diretamente no hardware, sem sistema operacional. É o caso do Arduino. Simples, previsível, determinístico, você sabe exatamente quando cada linha executa.

2. **RTOS (Real-Time Operating System)**: um sistema operacional mínimo que gerencia múltiplas tarefas com prioridades. FreeRTOS é o mais popular. Permite estruturar código complexo em tarefas independentes.

3. **Linux embarcado**: em SBCs como Raspberry Pi. Tem todo o poder do Linux, mas não é determinístico em tempo real, o scheduler pode atrasar tarefas imprevisíveis.

### Conjunto de instruções e compiladores cruzados

O código que você escreve em C no PC não roda no ATMega, a arquitetura é diferente (x86 vs AVR). Por isso existe o **cross compiler**: um compilador que roda no PC mas gera código para outra arquitetura.

O Arduino IDE usa o **avr-gcc**, um GCC configurado para AVR. Quando você compila um sketch, ele gera um arquivo `.hex` (Intel HEX format) com as instruções em linguagem de máquina do ATMega328P.

---

## Gravação do firmware

### Via USB (bootloader)

O Arduino Uno tem um **bootloader** gravado de fábrica. Quando o Arduino é resetado, o bootloader aguarda alguns segundos por uma comunicação USB. Se o IDE está enviando o firmware, o bootloader o recebe e grava na Flash. Se não há comunicação, o bootloader cede o controle para o sketch gravado.

Isso é conveniente para desenvolvimento, mas o bootloader ocupa espaço na Flash (~512 bytes) e adiciona um delay de 1-2 segundos no boot.

### Via ISP (In-System Programming)

O ISP permite gravar a Flash diretamente, sem bootloader. É o método de produção: você conecta um programador ISP (AVRisp mkII, USBASP, etc.) nos 6 pinos ISP (MOSI, MISO, SCK, RESET, VCC, GND) e grava o firmware. Mais rápido, sem overhead de bootloader.

---

## Comunicação em sistemas embarcados

### UART, o clássico

**UART** (Universal Asynchronous Receiver-Transmitter) é o protocolo mais simples. Dois fios (TX e RX), velocidade configurável (baud rate), sem clock compartilhado. O `Serial.begin(9600)` do Arduino configura o UART.

É assíncrono: os dois lados precisam estar configurados com o mesmo baud rate. Erros de baud resultam em dados corrompidos, e essa é a causa número 1 de problemas de comunicação serial.

### I2C, multi-dispositivo com dois fios

**I2C** usa dois fios: **SDA** (dados) e **SCL** (clock). Um mestre controla o clock. Cada dispositivo tem um endereço único de 7 bits, dá para conectar até 127 dispositivos no mesmo barramento.

É mais lento que SPI, mas mais simples de cabear. Ideal para sensores (temperatura, pressão, acelerômetro) e displays. O protocolo tem confirmação (ACK), o dispositivo receptor confirma cada byte.

### ESP-NOW, comunicação sem fio proprietária da Espressif

O ESP-NOW é um protocolo da Espressif (fabricante do ESP8266/ESP32) para comunicação sem fio ponto-a-ponto de baixíssima latência. Não usa Wi-Fi tradicional, funciona na camada MAC do 802.11, sem necessidade de roteador ou rede.

Cada dispositivo ESP é identificado pelo seu endereço MAC. Você define quem fala com quem e troca pacotes de até 250 bytes. Latência típica: < 1 ms.

### MQTT, a espinha dorsal do IoT

**MQTT** (Message Queuing Telemetry Transport) é o protocolo de mensageria mais usado em IoT. Arquitetura publicador/assinante com um **broker** (servidor central) no meio.

Dispositivos publicam dados em **tópicos** (ex: `casa/sala/temperatura`). Outros dispositivos se inscrevem nesses tópicos e recebem os dados automaticamente. O broker garante a entrega.

O MQTT tem três níveis de QoS (Quality of Service):
- **QoS 0**: at most once, sem garantia de entrega
- **QoS 1**: at least once, garante entrega, pode duplicar
- **QoS 2**: exactly once, garante entrega única, mais overhead

Para IoT de baixo consumo (sensores de bateria), QoS 0 é suficiente. Para comandos críticos (abertura de trava, corte de energia), QoS 2.

> **PROVA:** Vocês acreditam que marcaram que o MQTT usa TCP diretamente? O MQTT usa TCP na camada de transporte, mas o protocolo em si define a semântica de publicação/assinatura e QoS por cima. HTTP também usa TCP, são coisas diferentes.
