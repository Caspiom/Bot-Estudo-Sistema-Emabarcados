# Interrupções Externas, ISR e Timers

---

<!-- Slide 73 -->
Dispositivos de Entrada
Sensores de pulsos (luxo d’água, contadores etc)

<!-- Slide 74 -->
Interrupções
Uma das formas mais eicazes de controlar operações de
entrada e saída;
Podem ser acionadas por eventos internos (ex. timers) ou
externos (ex. sinais elétricos);
Provocam o desvio de execução do sketch para uma
Interrupt Service Routine (ISR) especíica. Ao término da
ISR, a execução retorna ao ponto original;
A ISR deve ser construída com alguns cuidados especiais.

<!-- Slide 75 -->
Execução de Programa
Início
Busca da instrução
Decodiﬁcação
Busca de operandos
Execução
Interrupção?
Não
Ciclo de Busca
(fetch)
Sim
Ciclo de
Execução
Desvio para ISR (Interrupt
Service Routine)

<!-- Slide 76 -->
Interrupções ATMega328P
Um microcontrolador normalmente possui
vetores de interrupções
Associam cada interrupção a uma (ISR);
A tabela ao lado mostra os vetores do
ATMega328P; alguns deles estão associados a 3
diferentes timers (0, 1 e 2);
Em todos há 2 funções de comparação, e uma de
overlow.
Datasheet do ATMega328P
Vector
Program
Address
Source
Interrupt Deﬁnition
RESET
External pin, power-on reset, brown-out
reset and watchdog
system reset
INT0
External interrupt request 0
INT1
External interrupt request 1
PCINT0
Pin change interrupt request 0
PCINT1
Pin change interrupt request 1
A
PCINT2
Pin change interrupt request 2
C
WDT
Watchdog time-out interrupt
E
TIMER2 COMPA
Timer/Counter2 compare match A
TIMER2 COMPB
Timer/Counter2 compare match B
TIMER2 OVF
Timer/Counter2 overﬂow
TIMER1 CAPT
Timer/Counter1 capture event
TIMER1 COMPA
Timer/Counter1 compare match A
TIMER1 COMPB
Timer/Counter1 compare match B
1A
TIMER1 OVF
Timer/Counter1 overﬂow
1C
TIMER0 COMPA
Timer/Counter0 compare match A
1E
TIMER0 COMPB
Timer/Counter0 compare match B
TIMER0 OVF
Timer/Counter0 overﬂow
SPI, STC
SPI serial transfer complete
USART, RX
USART Rx complete
USART, UDRE
USART, data register empty
USART, TX
USART, Tx complete
2A
ADC
ADC conversion complete
2C
EE READY
EEPROM ready
2E
ANALOG COMP
Analog comparator
TWI
2-wire serial interface
SPM READY
Store program memory ready

<!-- Slide 77 -->
Interrupções ATMega328P
Os 3 timers também estão associados a registradores especíicos
Registradores são modiicados automaticamente, sem a necessidade de código especíico;
Modiicações dependem direta ou indiretamente do Clock do sistema.
Datasheet do ATMega328P
}16 bits

<!-- Slide 78 -->
Interrupções ATMega328P
No Arduíno Uno, o clock é de 16 MHz
Cada microcontrolador tem sua própria taxa de clock;
O clock pode ser dividido por valores pré-deinidos (prescaler);
O clock pode ter seu valor comparado para gerar interrupções .
Datasheet do ATMega328P
Clock (16MHz)
Prescaler (ex. 8)
Um ciclo a cada 1/16 MHz = 62,5 nS
Um ciclo a cada 1/2 MHz = 500 nS

<!-- Slide 79 -->
Interrupções ATMega328P
No Arduíno Uno, o clock é de 16 MHz
Cada microcontrolador tem sua própria taxa de clock;
O clock pode ser dividido por valores pré-deinidos (prescaler);
O clock pode ter seu valor comparado para gerar interrupções .
Datasheet do ATMega328P
Timer
Tamanho
Interrupções
Possíveis
Uso no Arduíno Uno
8 bits
(0 ~ 255)
Comparação
Overﬂow
delay(), millis(), micros()
analogWrite() pinos 5 e 6
16 bits
(0 ~ 65535)
Comparação
Overﬂow
Captura de Entrada
Funções para servos
analogWrite() pinos 9 e 10
8 bits
(0 ~ 255)
Comparação
Overﬂow
tone()
analogWrite() pinos 3 e 11

<!-- Slide 80 -->
Interrupções ATMega328P
Deinindo o prescaler (ex. timer 1)
O timer 1 não afeta millis();
Processo é similar nos demais timers.
(*) Datasheet do ATMega328P

<!-- Slide 81 -->
Interrupções (prática)
Para testar as interrupções com
timers, vamos modiicar o
clássico “Blink”;
O código original pode ser
obtido em
Arquivos→Exemplos→Basics→Blink
Vamos iniciar o processo
testando o código original
LED_BUILTIN = 13

<!-- Slide 82 -->
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

<!-- Slide 83 -->
Esquemático Arduíno
Uno
Diagrama esquemático do Arduíno Uno v3
PB5

<!-- Slide 84 -->
Interrupções (prática)
Temos o mesmo código, mas
agora com registradores;
Outra opção é apenas inverter o
valor do registrador
PORTB ^= (1 << PB5 );
A operação OU-Exclusivo ( ^ ) inverte o valor do bit.
Função delay(1000) mantém o
processador “ocupado" por 1s;
Vamos usar o timer1 para
substituir a função !

<!-- Slide 85 -->
Preparando o timer1
Embora o TCCR1A não seja necessário, ele precisa sofrer reset;
O Arduíno grava o TCCR1A por padrão para operar o PWM;
Basta o comando TCCR1A = 0;

<!-- Slide 86 -->
Preparando o timer1
Uma mudança do LED a cada segundo
Clock de 16MHz = 16 milhões de ciclos por segundo
Contagem máxima do timer1 é 65.536
16.000.000 / 64
= 250.000
⇒inválido (> contagem máxima)
16.000.000 / 256
=
62.500
⇒válido (escolhido) !
16.000.000 / 1.024 =
15.625 ⇒válido !
Prescaler = 256; Contador = 62.500;

<!-- Slide 87 -->
Preparando o timer1
Deinindo o prescaler
TCCR1B |= (1 << CS12 );
TCCR1B &= ~(1 << CS11 );
TCCR1B &= ~(1 << CS10 );
Para usar o contador
Deinimos a interrupção pela comparação com o registro A;
TIMSK1 = (1 << OCIE1A );
Input Capture
Overﬂow

<!-- Slide 88 -->
Preparando o timer1
Carga do registro A
Deinimos constantes para facilitar o acesso aos registradores de 16 bits:
const uint16_t t1_carga = 0;
const uint16_t t1_comparador = 62500;
Registradores são carregados dentro da ISR:
ISR( TIMER1_COMPA_vect ) {
TCNT1 = t1_carga;
PORTB ^= ( 1 << PB5 );
}
Também é importante habilitar as interrupções
sei();

<!-- Slide 89 -->
Código Final
Estrutura loop() só possui delay()
Nenhum código afetará a operação do
blink();
ISR() pode ser ainda menor
Modo CTC pode ser habilitado;
timer1 zera ao alcançar registro A;
Objetivo é fazer ISR() o menor
possível.
(*) Código inspirado no material da SparkFun “Level Up Your
Arduíno Code: Timer Interrupts”
