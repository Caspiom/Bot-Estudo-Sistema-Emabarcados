# PWM: Modulação por Largura de Pulso

---

<!-- Slide 50 -->
PWM: como funciona?
Pulse Width Modulation: Modulação
por Largura de Pulso;
Opção mais comum para simular uma
saída analógica
Microcontrolador controla o percentual de
tempo da saída no nível 1;
O percentual é chamado de “ciclo de
trabalho”, ou Duty Cycle;
O efeito “analógico" vem da tensão média
na saída.
Arduíno Uno
Frequência típica 490Hz, mas pode subir
até 4MHz;
Resolução para ajuste do Duty Cycle: 8 bits

<!-- Slide 51 -->
Memória no ATMega328P
O ATMega328P não segue a arquitetura
padrão Von Neumann
A Memória que armazena o programa é diferente
da memória que contém as variáveis;
São 3 tipos de memória
diferentes;
O ATMega328P possui 3 tipos diferentes de
memória (Flash, SRAM e EEPROM).
"Arquitetura Harvard"
Ganho de performance por permitir acesso
simultâneo às instruções e aos dados;
Tamanho que contém uma instrução (16 bits)
pode ser diferente da palavra de dados (8 bits);
Processadores modernos misturam Von
Neumann com Harvard, através do uso do cache.
