# História e Motivação dos Sistemas Embarcados

## A demanda pela automação sempre existiu

A história dos sistemas embarcados começa muito antes do transistor. Desde que humanos começaram a fazer trabalho repetitivo, surgiu a vontade de automatizá-lo. Teares mecânicos programáveis, relógios, máquinas de escrever, todos são formas primitivas de sistemas que executam uma função de forma automática.

O salto real acontece com a eletricidade, no final do século XIX. De repente, é possível criar circuitos que tomam decisões com base em sinais elétricos. O motor elétrico substitui o vapor, o relé substitui a alavanca mecânica.

---

## Lógica Fixa: antes dos microprocessadores

Antes dos microcontroladores, o que controlava sistemas automatizados eram **circuitos de lógica fixa**: combinações de portas lógicas (AND, OR, NOT) montadas em hardware para executar uma função específica.

A vantagem da lógica fixa: velocidade e simplicidade. A desvantagem fatal: se você quisesse mudar o comportamento do sistema, precisava **redesenhar o circuito**. Soldar, recortar, refazer a placa. Era inflexível e caro.

Isso gerou uma necessidade clara: um circuito que pudesse ser "reprogramado" por software. O resultado foi o microprocessador.

---

## O surgimento dos microprocessadores

Em 1971, a Intel lança o 4004, o primeiro microprocessador comercial em um único chip. Quatro bits, destinado a calculadoras. Em 1974, o Intel 8080 de 8 bits abre caminho para os primeiros computadores pessoais.

Mas para sistemas embarcados, o microprocessador sozinho ainda era complicado: precisava de memória externa, circuitos de controle, decodificadores de endereço. Era caro e ocupava espaço.

---

## O microcontrolador: a revolução do "tudo em um chip"

A solução foi integrar tudo em um único chip: processador, memória RAM, memória Flash, pinos de I/O, timers, conversores A/D. Nasce o **microcontrolador**, o SoC (System on a Chip) dos sistemas embarcados.

Com isso, um único chip de alguns reais pode controlar um sistema completo. A programação é feita uma vez, gravada na Flash, e o sistema opera indefinidamente sem computador auxiliar.

Hoje a liderança do mercado de microcontroladores é de soluções proprietárias, famílias como PIC (Microchip), AVR (Atmel/Microchip), STM32 (STMicroelectronics), ESP32 (Espressif). Cada família tem características, ecossistema de ferramentas e mercados específicos.

> **PROVA:** Qual a diferença fundamental entre lógica fixa e microcontrolador? Lógica fixa tem comportamento determinado pelo hardware (circuito). Microcontrolador tem comportamento determinado pelo software (firmware). Mudar o comportamento é só re-gravar o código.

---

## Por que estudar história em Sistemas Embarcados?

Porque as restrições do passado explicam as decisões de hoje. Por que o AVR usa Harvard em vez de Von Neumann? Por que existe a distinção entre Flash e SRAM? Por que protocolos como UART existem? Cada escolha de design tem uma razão histórica e técnica.

Quem entende a origem entende o porquê. Quem entende o porquê não precisa decorar, conclui.
