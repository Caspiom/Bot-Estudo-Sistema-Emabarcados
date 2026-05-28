# Memória ATMega328P e Registradores DDR/PORT/PIN

## A memória do ATMega328P, e por que ela é diferente

O ATMega328P não segue a arquitetura Von Neumann (uma memória só para tudo). Ele usa a arquitetura **Harvard**: memórias separadas para dados e instruções, acessadas por barramentos independentes. Isso permite buscar uma instrução enquanto executa outra, mais eficiente para tempo real.

A memória se divide em três tipos:

**Flash (32 KB, palavras de 16 bits):** onde fica o seu sketch, gravado pelo IDE Arduino. É memória não-volátil, persiste sem energia. Cada instrução AVR ocupa 16 bits (ou 32 bits para algumas instruções especiais). Com 32 KB, você tem espaço para programas razoavelmente grandes, mas não é RAM, você não escreve aqui durante a execução.

**SRAM (2 KB):** memória de trabalho. Aqui ficam suas variáveis locais, globais, a pilha (stack) e o heap (malloc). Dois kilobytes parecem pouco, e são. Vocês acreditam que alguém declarou um array de 500 inteiros (1000 bytes, metade da SRAM) e ficou confuso com comportamento estranho? A pilha colidiu com o heap. Stack overflow silencioso.

**EEPROM (1 KB):** memória não-volátil para dados. Persiste sem energia, pode ser escrita e relida pelo sketch. Usada para salvar configurações, calibrações, contadores de horas de uso. Tem vida útil de ~100.000 ciclos de escrita, não use dentro de um loop rápido.

---

## Os registradores, o verdadeiro controle do hardware

Tudo no ATMega328P é controlado por **registradores**: palavras de 8 bits mapeadas em endereços específicos de memória. Quando você chama `pinMode()` e `digitalWrite()`, a biblioteca Arduino está, por baixo, escrevendo nesses registradores.

Para os pinos de I/O, existem três registradores por porta (B, C ou D):

- **DDRx** (Data Direction Register): define se cada pino é entrada (0) ou saída (1)
- **PORTx**: se saída → define o nível (0 = GND, 1 = 5V); se entrada com pull-up → ativa pull-up interno (1)
- **PINx**: leitura do estado atual do pino (somente leitura)

O Arduino Uno tem três portas:
- **Porta B** (DDRB, PORTB, PINB): pinos digitais 8 a 13
- **Porta C** (DDRC, PORTC, PINC): pinos analógicos A0 a A5
- **Porta D** (DDRD, PORTD, PIND): pinos digitais 0 a 7

---

## Acessando registradores diretamente

Isso é o que a gente faz no experimento de sala, e é importante entender o conceito por trás mesmo que você não precise decorar cada linha de código.

`pinMode()` e `digitalWrite()` são convenientes, mas têm overhead. Cada chamada passa por dezenas de instruções internas de verificação. Para aplicações normais não faz diferença, mas quando você precisa de velocidade real, acessa o registrador direto. A diferença é brutal: `digitalWrite(13, HIGH)` leva centenas de ciclos de clock. Escrever direto no registrador leva um único ciclo.

No experimento de sala, a gente configura o pino 5 (PD5) como saída escrevendo 1 no bit 5 do DDRD, e coloca em HIGH escrevendo 1 no bit 5 do PORTD. O ponto importante que o experimento demonstra é o seguinte: você usa a operação `|=` para ativar o bit sem alterar os outros pinos da mesma porta. Se você atribuísse um valor direto ao registrador inteiro, estaria zerando todos os outros bits da Porta D ao mesmo tempo.

Vocês acreditam que alguém fez exatamente isso num projeto com múltiplos LEDs e ficou confuso por que um apagava o outro? É o que acontece quando você escreve no registrador inteiro em vez de manipular bit a bit.

**Para ler o estado de um pino** usa-se o registrador PINx, não PORTx. Esse é um erro frequente: PORTx é de escrita (e ativa pull-up quando o pino é entrada), PINx é de leitura. Confundir os dois produz comportamento completamente errado, e o código compila normalmente, sem erro algum.

> **PROVA:** Para ler pino → PINx. Para escrever → PORTx. Para direção → DDRx. Três registradores, três funções. Isso é conceito de prova, entender o que cada um faz, não decorar código.
