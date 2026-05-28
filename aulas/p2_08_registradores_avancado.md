# Memória ATMega328P e Registradores DDR/PORT/PIN

---

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

<!-- Slide 52 -->
Memória no ATMega328P
32 KB (palavras de 16
bits)
Bootloader
Sketch do
Usuário
Programas (Flash)
0x0000h
0x3FFFh
0x0000h
0x08FFh
2304 B (Registr. + 2 KB,
palavras de 8 bits)
32 Registradores
64 Registr. E/S
160 Registr. E/S Ext.
0x0020h
0x0060h
0x0100h
Variáveis
Dados (SRAM)
1 KB (palavras de 8
bits)
EEPROM
0x0000h
0x03FFh
Informações
não voláteis

<!-- Slide 53 -->
ATMega328P em blocos
Os registradores controlam toda a
operação do ATMega328P
Muitos são acessados indiretamente
quando usamos o conjunto de
instruções padrão do Arduíno;
Alguns recursos exigem acesso
direto
Interrupções de Relógio;
Alteração de frequência PWM;
Manipulação “criativa" de portas.
Acesso via registradores
Códigos menores, e mais rápidos;
Manipulação e consulta binária.

<!-- Slide 54 -->
Acesso Binário
Bits dos registradores agregam funções na mesma palavra
Alterações e consultas bit-a-bit;
Operações lógicas binárias: E, OU, NÃO, deslocamento.
Registradores de 8 ou 16 bits
Registradores de 16 bits tipicamente são tratados byte a byte.
Ativando bits (set bits)
Diretamente pela carga da palavra;
Carga de bit com operação OU (OR).
Desativando bits (reset bits)
Desativação de bit com operação E (AND).

<!-- Slide 55 -->
Acesso Binário - exemplo
Projeto básico com
Arduíno Uno
Ler botão;
Se apertado, acende LED; caso
contrário, apaga.
Desenvolvimento do teste
Teste inicial com código em C
padrão do Arduíno;
Migração de parte do código,
desta vez manipulando
diretamente os registradores.

<!-- Slide 56 -->
Acesso Binário - exemplo
Componentes
alimentados pelo
Arduíno Uno
LED (digital 5);
Botão de Leitura (digital 2);
Pull-Up interno.
330
5V
Botão
de
Pressão
5V

<!-- Slide 57 -->
Projeto Básico
Sketch deine entrada e saída
Pino 2 utilizado para leitura do botão,
com uso de PullUp interno;
Pino 5 utilizado para ativar o LED.
Função básica Arduíno
pinMode();
Opera indiretamente com registradores.

<!-- Slide 58 -->

  
  
  
  
  
  
 

  

  


 
 
 
 
 
 



 
 
 
 
 


 
 
 

 
 

 

 

 


 


 


 


 






  

 
 
 

 

 
 
 

 
 
 

 
 
 

 
 
 



 
 
 

 


 
 
 
 

 
 
 
 
 
  
  


 
!
 
 
"
 
 " 

"#$" ""  
 
 "" 
  
"  

"
 
"  
  


  
 
 "" 
 
"
 
 
  
""  
 
""  
 
""  
 
""  
 
"

"
 
"  
 
"  

" " 



  
%
 
&
 

 

  


"$
  
!
  
!
  
!

 


 


 
 

 
 
 

 
 

 


 
 
 
 
 
 


 
 
 
 
 
 


 
 
 
 
 
 


 
 
 
 
 
 


 
 
 
 
 

 

 
 
 

 
 
 



"

 
"

 
!


 

 
 
 

 
 
 
 

Esquemático Arduíno
Uno
Diagrama esquemático do Arduíno Uno v3

<!-- Slide 59 -->
Registradores pinos 2, 5 ?
Pino 5: PD5
Pino 2: PD2
(ambos na porta D)

<!-- Slide 60 -->
Arduíno: portas B, C e D
Porta B
Porta D
Porta C

<!-- Slide 61 -->
Registradores - Porta D
Datasheet do ATMega328P
O registrador DDR determina quais são
os pinos que serão utilizados como
entrada (valor 0) ou saída (valor 1)

<!-- Slide 62 -->
Registradores - Porta D
Datasheet do ATMega328P
O registrador PORT determina, no caso de SAÍDA, qual
o valor a ser apresentado; no caso de entrada, habilita
o resistor interno de PullUp (1), ou desabilita (0)

<!-- Slide 63 -->
Registradores - Porta D
Datasheet do ATMega328P
O registrador PIN, que deve ser
tratado apenas para leitura,
possui o status atual de cada pino

<!-- Slide 64 -->
Acesso Binário - exemplo
Sketch deine pino 5 como saída e
pino 2 como entrada
1º passo: carregar 1 no bit 5 do
registrador DDRD;
2º passo: carregar 1 no bit 2 do
registrador PORTD;
Atribuindo o valor da palavra
Em binário:
DDRD
= B00100000;
PORTD = B00000100;
Ou, em decimal:
DDRD
= 32;
PORTD =
2;

<!-- Slide 65 -->
Acesso Binário - exemplo
Atribuindo o valor ao BIT !
Operação OU com conteúdo anterior:
DDRD
|= B00100000;
PORTD |= B00000100;
Embora funcione, este procedimento
força a criação de uma constante, e de
uma variável provisória (lento?);
Existe um procedimento mais comum
para este tipo de operação, que utiliza o
registro de deslocamento.

<!-- Slide 66 -->
Acesso Binário - exemplo
Ativando o bit 5 em DDRD:
Criamos uma palavra com o bit desejado
ativo:
( 1 << pinoLed )

<!-- Slide 67 -->
Acesso Binário - exemplo
Ativando o bit 5 em DDRD:
Criamos uma palavra com o bit desejado
ativo:
( 1 << 0 )

<!-- Slide 68 -->
Acesso Binário - exemplo
Ativando o bit 5 em DDRD:
Criamos uma palavra com o bit desejado
ativo:
(1<<pinoLed)
Fazemos uma operação OU ( | ) com o valor
atual de DDRD:
DDRD =( 1 << pinoLed ) | DDRD;
?
?
?
?
?
?
?
?
OU
?
?
?
?
?
?
?
?
?
?
?
?
?
?
?
Todos os bits de DDRD são
mantidos, exceto o bit 5, que
assume o valor 1.

<!-- Slide 69 -->
Acesso Binário - exemplo
Desativando o bit 5 em DDRD:
Criamos uma palavra com o bit desejado
ativo:
(1<<pinoLed)
Invertemos a palavra bit-a-bit ( ~ );
Fazemos uma operação E (& ) com o valor
atual de DDRD:
DDRD = ~( 1 << pinoLed ) & DDRD;
?
?
?
?
?
?
?
?
E
?
?
?
?
?
?
?
?
?
?
?
?
?
?
?
Todos os bits de DDRD são
mantidos, exceto o bit 5, que
assume o valor 0.

<!-- Slide 70 -->
Acesso Binário - exemplo
Para ativar o bit 2 de PORTD em
DDRD, o processo é similar
Criamos uma palavra com o bit desejado
ativo:
(1<<pinoBotao)
Fazemos uma operação OU ( | ) com o
valor atual de PORTD:
PORTD =( 1 << pinoBotao ) |
PORTD;

<!-- Slide 71 -->
Acesso Binário - exemplo
Para leitura do Botão, utilizamos
o registro PIND
Criamos uma palavra colocando 1 no bit
a ser lido:
( 1 << pinoBotao )
Fazemos uma operação E ( & ) com o
valor atual de PIND:
( 1 << pinoBotao ) & PIND;
Revertemos o deslocamento para colocar
o bit testado na posição zero:
botao = ( ( 1 << pinoBotao )
& PIND ) >> 2;
O valor será 1 (verdadeiro) ou 0 (falso), a
depender do valor lido na posição
desejada do PIND.

<!-- Slide 72 -->
Acesso Binário - exemplo
Para acender ou apagar o LED,
os processos são bem similares
Criamos uma palavra com o bit desejado
ativo:
( 1 << pinoLed )
Fazemos uma operação OU ( | ) com o
valor atual de PORTD:
if( botão == LOW ) {
PORTD = ~( 1 << pinoLed )
& PORTD;
} else {
PORTD =( 1 << pinoLed ) |
PORTD;
}
