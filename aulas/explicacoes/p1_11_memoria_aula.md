# Eletrônica nos CUs: Barramentos e Dispositivos

## Quando o microcontrolador não é suficiente sozinho

O ATMega328P é um sistema razoavelmente completo num chip, mas sistemas embarcados reais frequentemente precisam de mais: mais memória, displays, chips de comunicação, conversores especializados. Esses componentes precisam se comunicar com o processador de forma organizada.

Entra o conceito de **barramento**.

---

## Barramentos: a rodovia de dados do sistema

Um barramento é um conjunto de linhas de sinal compartilhadas por múltiplos componentes. Em vez de cada chip ter seu próprio fio para cada outro chip, todos compartilham as mesmas trilhas.

Existem três tipos fundamentais de barramento:

**Barramento de Dados:** transporta os dados propriamente ditos, os bytes que o processador lê ou escreve. Bidirecional.

**Barramento de Endereços:** diz qual posição de memória ou qual dispositivo está sendo acessado. Unidirecional (processador → memória).

**Barramento de Controle:** sinais de controle como leitura/escrita (R/W), habilitação de chip (CS, abreviação de Chip Select), clock. Garante que a comunicação ocorra na ordem correta.

---

## Fan-out: limite de conexões no barramento

Cada saída digital tem uma capacidade máxima de fornecer corrente. O **fan-out** é quantos dispositivos você pode conectar à mesma linha de barramento antes de a corrente total exigida ultrapassar o que a saída pode fornecer.

Vocês acreditam que alguém ligou 20 chips no mesmo barramento sem calcular fan-out? A tensão na linha cai, os dispositivos não reconhecem o nível lógico corretamente, e você tem comportamento aleatório no sistema. Fan-out é real e precisa ser calculado.

Solução quando o fan-out é excedido: **buffer de barramento**, um CI que lê o sinal e fornece corrente renovada para os dispositivos conectados.

---

## Tri-state: como múltiplos dispositivos compartilham o barramento de dados

O barramento de dados é bidirecional e compartilhado. Vários chips estão conectados nele. Mas se dois chips tentarem colocar dados no barramento ao mesmo tempo, um colocando HIGH e outro LOW na mesma linha, ocorre **curto-circuito** no barramento.

A solução é o **estado tri-state** (três estados): além de HIGH e LOW, existe um terceiro estado chamado **alta impedância (Hi-Z)**. Quando um dispositivo não está sendo acessado, seus pinos de dados entram em Hi-Z, é como se ele estivesse desconectado eletricamente do barramento, mesmo fisicamente conectado.

O processador ativa um chip de cada vez via sinal de Chip Select (CS). Somente o chip selecionado coloca dados no barramento; os outros ficam em Hi-Z.

---

## Latches e Buffers: expandindo a capacidade de I/O

Microcontroladores têm número limitado de pinos. Para sistemas que precisam de mais I/O, existem CIs dedicados:

**Buffer tri-state:** amplia o fan-out e adiciona o estado Hi-Z. Unidirecional, amplifica o sinal numa direção.

**Latch (trava):** armazena o estado de um byte e o mantém estável nas suas saídas. Útil para expandir pinos de saída, com 3 pinos do microcontrolador você controla um latch de 8 bits, que mantém os dados enquanto você faz outra coisa.

**Registrador de deslocamento:** a expansão mais simples de I/O. O 74HC595 (shift register de saída) recebe dados em série (3 fios) e os apresenta em paralelo (8 saídas). Para 24 saídas, você encadeia 3 chips com os mesmos 3 fios.

---

## Decodificador de endereços: mapeando dispositivos

Quando o processador coloca um endereço no barramento de endereços, algum mecanismo precisa determinar qual chip deve responder. Esse é o trabalho do **decodificador de endereços**.

Em sistemas simples, portas lógicas fazem isso. Em sistemas mais complexos, CIs decodificadores dedicados (como o 74HC138, que decodifica 3 bits em 8 saídas exclusivas) fazem o mapeamento.

Cada dispositivo no sistema tem um **espaço de endereços**: uma faixa de endereços que pertence a ele. O processador acessa endereço 0x0000-0x7FFF → memória Flash. 0x0100-0x04FF → SRAM. 0x0060-0x00FF → registradores de I/O. Esse mapeamento é definido no datasheet do microcontrolador.

> **PROVA:** Tri-state não é "três tensões", é dois estados lógicos (0 e 1) mais o estado de alta impedância (Hi-Z), onde o dispositivo se desconecta eletricamente do barramento. Essa distinção é importante: Hi-Z não é uma tensão, é uma desconexão lógica.
