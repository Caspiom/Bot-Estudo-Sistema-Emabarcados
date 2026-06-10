# Projeto de SE, Software e Linguagens

> **Prova:** P2 | **Tier:** A | **Tópico:** `projeto_se_software`

---

## 🏭 Fases do Projeto de SE

```
Demanda → Requisitos → [Mec + Elet + SW em paralelo] → Simulação → Protótipo → Fabricação → Venda
```

### Fase 1 — Definição de Requisitos

- Envolve **múltiplas disciplinas** (não só eletrônica!)
- Define o que o sistema DEVE e NÃO DEVE fazer
- Pode mudar durante o ciclo de vida (atualizações OTA)

▶ **PROVA:** Definição de requisitos = **multidisciplinar**. Não é exclusividade de uma área.

### Fase 2 — Projeto Multidisciplinar (paralelo)

**Projeto Mecânico:** caixa, dimensões, peso. Usa ferramentas CAD/CAM/CAE.

**Projeto Eletrônico:**
- Escolha da plataforma (qual MCU?)
- Sensores, atuadores, componentes
- Esquemático + layout PCB

**Projeto de Software:**
- Fortemente afetado pelos requisitos e pelo hardware
- **É nosso objeto de estudo** na disciplina

### Fases Finais

Design e Simulação → Protótipo → Fabricação → Venda → Suporte → Descarte.
Além disso: Documentação, Treinamento, Seleção de Fornecedores.

---

## 🏭 PLCs e a Norma IEC 61131-3

**PLC** = Programmable Logic Controller. Computador industrial para automação.
- Hardware robusto (temperatura, vibração, EMI)
- Tecnologia **fechada e proprietária** por fabricante
- Solução motivou busca por plataformas abertas

### Norma IEC 61131-3 — As 5 Linguagens

| Linguagem | Tipo | Situação |
|-----------|------|---------|
| **LD** — Ladder Diagram | Gráfica | Ativa |
| **FBD** — Function Block Diagram | Gráfica | Ativa |
| **SFC** — Sequential Function Chart | Gráfica | Ativa |
| **ST** — Structured Text | Textual | Ativa |
| **IL** — Instruction List | Textual | **Descontinuada** |

▶ **PROVA:** São **5 linguagens**: LD, FBD, ST, IL, SFC. **IL foi descontinuada**. Cai muito em prova.

**OpenPLC:** Iniciativa open source de Thiago Rodrigues Alves. Suporta as 5 linguagens e roda em Arduino, ESP, Raspberry Pi.

---

## 💻 Linguagens de Programação para MCUs

| Linguagem | Performance | Portabilidade | Complexidade | Uso em SE |
|-----------|-------------|---------------|--------------|-----------|
| **Assembly** | Máxima | Mínima | Alta | Rotinas críticas |
| **C / C++** | Alta | Boa | Baixa | **Dominante em SE** |
| **Java** | Média | Alta (JVM) | Média | Incomum em SE |
| **Python** | Baixa | Alta | Mínima | MicroPython (ESP, RP2040) |

### RISC vs CISC

| Aspecto | RISC | CISC |
|---------|------|------|
| Instruções | Poucas, simples | Muitas, complexas |
| Performance | Alta | Variável |
| Exemplo | **PIC16F877 (35 instruções)**, AVR, ARM | x86 (Intel/AMD) |

▶ **PROVA:** PIC16F877 = **35 instruções** = RISC. Frase clássica de prova.

### Compiladores Especiais

**Cross Compiler:** gera executável para arquitetura **diferente** de onde compila.
- Ex.: compilar no PC (x86) para rodar no ATMega (AVR)
- Essencial para MCUs sem recursos para rodar compilador

**Source-to-Source (Transpiler):** converte código de uma linguagem para outra.
- Ex.: LD (Ladder) → C++

▶ **PROVA:** Cross compiler = gera código para **outro** dispositivo, não o mesmo.

---

## 🔧 Outros Componentes de Software

### Bootloader
- Roda antes do sketch
- Configura hardware básico (clock, periféricos)
- Permite carregar novo sketch via USB
- Ocupa os últimos ~2 KB da Flash

### Sistema Operacional
- Tipicamente **ausente** em MCUs simples
- Presente em **SBCs** (Raspberry Pi, BeagleBone — rodam Linux)
- Consome recursos (memória, CPU)

### RTOS — Real Time Operating System
- Para MCUs com **múltiplas tarefas em tempo real**
- Exemplos: FreeRTOS, Zephyr, RTEMS
- Oferece: escalonamento com prioridades, semáforos, mutexes, filas
- Garante **determinismo** — tarefa de alta prioridade roda dentro do tempo máximo

▶ **PROVA:** RTOS = multitarefa em tempo real + determinismo. Diferente de SO convencional.

---

## 📡 Gravação do MCU — Como o Código Chega ao Chip

### Carga via USB — Fluxo Normal (Arduino)

Quando você clica "Upload" na IDE:

```
1. avr-gcc compila → arquivo .hex (código de máquina AVR)
2. IDE chama avrdude com parâmetros do seu Arduino
3. avrdude comunica com o bootloader via USB/serial
4. Bootloader grava o sketch na Flash
5. Bootloader salta para o início do sketch
```

O Arduino Uno usa um chip conversor USB-Serial (ATmega16U2 ou CH340) que transforma USB → UART para o bootloader.

**Se o MCU vier "virgem"** (sem bootloader): precisa de um device programmer externo via ISP.

---

### ISP — In-Circuit Serial Programming

ISP = programação serial **enquanto o chip está no circuito** (sem remover o MCU).

Para Arduino/AVR, usa o protocolo **SPI em modo de programação**, com o conector **ICSP de 6 pinos**.

**Conector ICSP (vista de cima):**

```
┌────────────────┐
│ [MISO]  [Vcc ] │
│ [SCK ]  [MOSI] │
│ [RST ]  [GND ] │
└────────────────┘
```

| Sinal | Função |
|-------|--------|
| **MISO** | Master In / Slave Out (dados saindo do MCU a ser gravado) |
| **Vcc** | Alimentação |
| **SCK** | Clock síncrono (gerado pelo programador) |
| **MOSI** | Master Out / Slave In (dados entrando no MCU a ser gravado) |
| **RST** | RESET — **inicia o modo de programação** |
| **GND** | Terra |

▶ **PROVA:** ISP usa **SPI** com conector **ICSP de 6 pinos**. O sinal **RESET** é o que inicia o modo de programação.

**Fluxo do protocolo ISP:**

```
1. Programador mantém RST em LOW → entra no modo de programação
2. Envia sequência de comandos SPI para habilitar a programação
3. Para gravar: envia endereço da Flash + dados
4. MCU confirma cada byte gravado
5. Programador solta RST → MCU inicia normalmente
```

**Arduino como programador de outro Arduino:**

| Arduino Programador | → | Arduino Alvo (ICSP) |
|---------------------|---|---------------------|
| D11 (MOSI) | → | MOSI (pino 4) |
| D12 (MISO) | → | MISO (pino 1) |
| D13 (SCK) | → | SCK (pino 3) |
| D10 (RESET*) | → | RST (pino 5) |
| 5V | → | Vcc (pino 2) |
| GND | → | GND (pino 6) |

*D10 é usado só no ISP — não confundir com o SS do SPI normal.

---

### Programadores Externos

| Programador | Plataforma | Tipo |
|-------------|------------|------|
| **USBasp** | AVR/Arduino | Open source, barato, popular |
| **AVRISP MkII** | AVR/Arduino | Oficial Microchip/Atmel, mais robusto |
| **PICkit 3** | PIC | Oficial Microchip, acadêmico/profissional |

### Outros Protocolos de Gravação/Debug

| Protocolo | Padrão | Fios | Função |
|-----------|--------|------|--------|
| **JTAG** | IEEE 1149.1 | 4+ | Gravação + **debug em tempo real** (ver registradores) |
| **SWD** | — | 2 | Semelhante ao JTAG, menor. Usado em ARM (STM32) |

▶ **PROVA:** JTAG = grava + debugga em tempo real. SWD = JTAG com 2 fios (ARM). ISP = só gravação (AVR).

---

## 📌 Resumo Rápido

- Requisitos = multidisciplinar, pode mudar durante o ciclo de vida
- IEC 61131-3 = **5 linguagens** (LD, FBD, ST, IL, SFC) — **IL descontinuada**
- C/C++ = dominante em SE
- **PIC16F877 = 35 instruções = RISC**
- Cross compiler = gera para **outro** dispositivo
- Bootloader = carga de sketch via USB (sem ISP externo)
- RTOS = tempo real + determinismo + escalonamento
- ISP = SPI + ICSP 6 pinos + RST inicia programação (AVR/Arduino)
- JTAG = gravação + debug em tempo real | SWD = JTAG 2 fios (ARM)
