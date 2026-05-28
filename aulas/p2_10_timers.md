# Timers — Prescaler, OCR e Código Final

---

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
