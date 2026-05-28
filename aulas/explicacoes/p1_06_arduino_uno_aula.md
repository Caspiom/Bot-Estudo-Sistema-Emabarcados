# Arduino Uno R3, ATMega328P e GPIOs

## O Arduino: democratização dos sistemas embarcados

O Arduino nasceu em 2005 numa escola de design em Ivrea, Itália. A proposta era simples e poderosa: criar uma plataforma de prototipagem de sistemas embarcados acessível para quem não tem formação em engenharia eletrônica. IDE simples, linguagem C simplificada, placa com USB integrado.

Funcionou além do esperado. O Arduino virou padrão de fato para prototipagem, educação e projetos maker. Não pela eficiência, porque ele não é o mais eficiente. Mas pela facilidade e pelo ecossistema: bibliotecas prontas, comunidade enorme, shields para tudo.

O Arduino Uno R3 é a versão mais icônica. ATMega328P no coração, formato reconhecível, 14 pinos digitais e 6 analógicos expostos em conectores fêmea.

---

## O ATMega328P, o chip que importa

O Arduino é apenas uma placa de desenvolvimento. O que realmente executa o código é o **ATMega328P**, um microcontrolador de 8 bits da família AVR da Microchip (antiga Atmel).

Características principais que você precisa saber:
- Arquitetura **Harvard** de 8 bits
- Clock de até **16 MHz** (no Arduino Uno, oscilador a cristal de 16 MHz)
- **32 KB Flash**, onde seu sketch fica gravado
- **2 KB SRAM**, memória de trabalho (variáveis, pilha)
- **1 KB EEPROM**, não-volátil, para dados persistentes
- **23 pinos de I/O** configuráveis
- ADC de **10 bits**, 6 canais
- 3 timers (Timer0 de 8 bits, Timer1 de 16 bits, Timer2 de 8 bits)
- Interfaces UART, I2C (TWI), SPI

---

## Os componentes adicionais do Arduino Uno

O ATMega328P sozinho não faz tudo. O Arduino Uno adiciona:

**Cristal de Clock:** o ATMega tem oscilador interno (8 MHz), mas para aplicações que precisam de timing preciso usa-se um cristal externo. No Arduino Uno, um cristal de 16 MHz garante clock estável e preciso. Variação de frequência do cristal: ±50 ppm (partes por milhão), muito mais estável que o oscilador interno.

**Regulador de Tensão:** o Arduino pode ser alimentado por USB (5V) ou por fonte externa (7-12V). O regulador linear NCP1117 converte a tensão de entrada para 5V estabilizados. Detalhe: reguladores lineares dissipam a diferença de tensão como calor. Com 12V de entrada e 200 mA de carga: (12-5)×0,2 = 1,4W de calor. Para cargas maiores, o regulador esquenta.

**Chip USB-Serial (ATMega16U2):** o PC não se comunica diretamente com o ATMega328P. Um segundo microcontrolador (ATMega16U2) faz a conversão USB↔UART. É ele que aparece como "porta COM" no seu computador. O Arduino Leonardo e Pro Micro eliminaram esse chip usando o USB nativo do ATMega32U4.

**Botão de Reset:** reinicia o microcontrolador. Também é ativado automaticamente quando o IDE Arduino envia um novo sketch, um pulso na linha DTR do USB-serial provoca o reset, que ativa o bootloader por alguns segundos.

---

## GPIOs: General Purpose Input/Output

Os 14 pinos digitais do Arduino Uno (D0 a D13) são GPIOs, pinos de uso geral configuráveis como entrada ou saída. Você define a direção no código.

**Como entrada:** lê o estado lógico do pino. HIGH (≈5V) ou LOW (≈0V). Exemplo clássico: ler um botão.

**Como saída:** o pino fornece ou drena corrente. Em HIGH: o pino sai para ~5V, capaz de fornecer até 40 mA (máximo absoluto; usar 20 mA como prática segura). Em LOW: o pino absorve corrente em direção ao GND.

**Limitação importante:** o ATMega328P pode fornecer no máximo **200 mA no total** por todos os pinos combinados. E no máximo **40 mA por pino**. Para acionar cargas maiores (motor, relê, solenoide), você precisa de um driver, transistor, MOSFET ou CI driver.

---

## Shields: expandindo o Arduino

Os shields são placas que se encaixam nos conectores do Arduino, adicionando funcionalidades:

- **Ethernet/Wi-Fi shield:** conectividade de rede
- **Motor shield:** driver para motores DC e de passo (correntes maiores que o Arduino consegue fornecer)
- **Protoboard shield / Shield didático:** área de prototipagem integrada
- **CNC shield:** para impressoras 3D e CNC, controlando múltiplos motores de passo

O conceito de shield é interessante: padroniza o formato físico e elétrico, permite empilhar módulos. Mas em produção, você raramente usa shields, integra tudo em uma placa customizada.

---

## Outras plataformas de referência

O Arduino não está sozinho. Cada família tem seu nicho:

**ESP32 (Espressif):** microcontrolador dual-core 32 bits com Wi-Fi e Bluetooth integrados. Mais poderoso e mais barato que o Arduino para projetos IoT. Virou a escolha padrão para dispositivos conectados.

**PIC (Microchip):** família veterana, muito usada em indústria. Ecossistema robusto, ferramentas profissionais (MPLAB X). Menos popular na academia, mas presente em incontáveis produtos comerciais.

**Raspberry Pi:** SBC com processador ARM, rodando Linux. Não é um microcontrolador, é um computador completo numa placa pequena. Para projetos que precisam de Python, processamento de vídeo, interface gráfica.

**Arduino Uno Q:** versão recente com processador Qualcomm. Mais poderoso, mas mantém a compatibilidade de pinos. Mostra que a plataforma Arduino evolui para acompanhar IoT e edge computing.

> **PROVA:** Vocês acreditam que marcaram "Raspberry Pi é um microcontrolador"? Raspberry Pi usa um **microprocessador** ARM. Tem RAM separada, roda Linux, precisa de sistema de arquivos. É um SBC, não um microcontrolador.
