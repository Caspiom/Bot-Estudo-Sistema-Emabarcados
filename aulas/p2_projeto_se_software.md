# Projeto de SE, Software e Linguagens

<!-- Slide 0 -->

> **Prova:** P2 | **Tier:** A | **Tópico:** `projeto_se_software`



<!-- Slide 1 -->
🏭 Fases do Projeto de SE

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



<!-- Slide 2 -->
🏭 PLCs e a Norma IEC 61131-3

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



<!-- Slide 3 -->
💻 Linguagens de Programação para MCUs

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



<!-- Slide 4 -->
🔧 Outros Componentes de Software

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



<!-- Slide 5 -->
📌 Resumo Rápido

- Requisitos = multidisciplinar, pode mudar durante o ciclo de vida
- IEC 61131-3 = **5 linguagens** (LD, FBD, ST, IL, SFC) — **IL descontinuada**
- C/C++ = dominante em SE
- **PIC16F877 = 35 instruções = RISC**
- Cross compiler = gera para **outro** dispositivo
- Bootloader = carga de sketch via USB (sem ISP externo)
- RTOS = tempo real + determinismo + escalonamento
