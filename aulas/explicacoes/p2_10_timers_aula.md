# Timers. Prescaler, OCR e Configuração

## Como o Timer1 é configurado na prática

Vimos a teoria dos timers. Agora o que importa é entender o papel de cada registrador envolvido, o código do projeto prático é para a atividade de laboratório, mas o conceito é matéria de prova.

O exemplo clássico é gerar uma interrupção exatamente a cada 1 segundo usando o Timer1, sem travar o programa com `delay()`.

A sequência lógica é:

**1. Definir o clock efetivo do timer:** com clock de 16 MHz e prescaler 1024, o timer incrementa a uma frequência de 16.000.000 / 1024 ≈ 15.625 Hz. Cada incremento leva ~64 µs.

**2. Calcular o valor de comparação (OCR1A):** quantos incrementos cabem em 1 segundo? 15.625. O registrador OCR1A recebe 15.624 (o -1 existe porque o contador começa em 0 e vai de 0 até 15624, são 15625 passos).

**3. Modo CTC (Clear Timer on Compare Match):** quando o contador TCNT1 atinge OCR1A, ele reseta automaticamente para zero e dispara a interrupção. Perfeito para intervalos periódicos precisos.

**4. Habilitar a interrupção:** o registrador TIMSK1 (Timer Interrupt Mask) controla quais interrupções do timer estão ativas. Sem habilitá-lo, o timer conta mas nada acontece.

**5. Habilitar interrupções globais:** existe um "switch master" para todas as interrupções. Se ele estiver desligado, nenhuma interrupção ocorre, mesmo que o timer dispare.

> **PROVA:** Vocês acreditam que marcaram que o prescaler do Timer1 afeta o funcionamento do `delay()`? Não afeta. O `delay()` usa o **Timer0**, não o Timer1. O Timer1 e o Timer2 são livres para uso do programador sem comprometer as funções de tempo do Arduino. Timer0 é o intocável.

---

## Resumo dos registradores do Timer1

| Registrador | Função |
|-------------|--------|
| TCNT1 | Valor atual do contador (0 a 65535) |
| OCR1A | Valor de comparação canal A |
| OCR1B | Valor de comparação canal B |
| TCCR1A | Configuração de modo de onda (PWM) |
| TCCR1B | Modo CTC e prescaler |
| TIMSK1 | Habilita interrupções do Timer1 |

Isso vai aparecer na prova na forma de "o que acontece quando TCNT1 atinge OCR1A em modo CTC?", ele reseta para zero e dispara a interrupção TIMER1_COMPA_vect. Simples assim.
