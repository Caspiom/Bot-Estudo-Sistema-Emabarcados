# Média Móvel, Referências e Ruído

## O problema do ruído, e a solução mais elegante

Na aula anterior vimos que medições analógicas são instáveis. A leitura oscila em torno do valor real. A pergunta agora é: **o que você faz com isso?**

A solução mais simples é a **média móvel**. Em vez de usar a última leitura, você mantém um vetor com as últimas N leituras e usa a média delas. Assim, os picos de ruído são amortecidos, um valor muito alto ou muito baixo tem menos peso quando dividido por N.

```cpp
const int N = 10;
int leituras[N];
int indice = 0;
long soma = 0;

void loop() {
    soma -= leituras[indice];
    leituras[indice] = analogRead(A0);
    soma += leituras[indice];
    indice = (indice + 1) % N;
    float media = soma / (float)N;
}
```

Quanto maior o N, mais suave a leitura, mas também mais lenta a resposta a mudanças reais. É um trade-off. Para um sensor de temperatura que muda devagar, N=20 é ótimo. Para um sensor de vibração que muda rápido, N=20 te mata a resposta.

---

## O que é uma referência e por que ela importa tanto

Qualquer medição precisa de uma referência. Você mede corrente em relação a uma referência de potencial (GND). Você mede tensão em relação a uma referência de tensão. No ADC do Arduino, essa referência define o topo da escala, o que corresponde ao valor 1023.

O Arduino Uno oferece três opções de referência:

**1. DEFAULT**, usa Vcc (5V da alimentação). É a opção padrão. O problema? Vcc varia com a corrente consumida, com o cabo USB, com o carregador. Se Vcc oscilar, a referência oscila, e sua medição oscila junto. Vocês acreditam que alguém usou DEFAULT para medir tensão de bateria e ficou confuso porque a leitura mudava quando ligava um motor? É exatamente isso.

**2. INTERNAL**, usa a referência interna de 1,1V do ATMega328P. Mais estável que Vcc, mas limita o range da medição a 0–1,1V. Ótimo para sinais pequenos e precisos.

**3. EXTERNAL**, usa um chip de referência externo ligado ao pino AREF. Opção mais precisa de todas, mas exige componente adicional e cuidado extra.

> **PROVA:** Posso usar uma pilha alcalina como referência no pino AREF? **NÃO.** A pilha varia com a descarga, temperatura e corrente. Uma boa referência precisa ser estável, de baixo ruído e com tensão bem definida. Diodo Zener de precisão ou chip dedicado (como o LM4040), isso é referência.

---

## Cuidado ao trocar a referência no código

Existe um aviso importante do datasheet: **não chame `analogRead()` imediatamente após mudar a referência com `analogReference()`**. O capacitor interno do multiplexador do ADC precisa de tempo para se estabilizar na nova tensão. Se você ler antes disso, pode pegar um valor errado, ou pior, pode danificar o circuito se a tensão no pino AREF for incompatível.

Sempre faça uma leitura "descarte" após trocar a referência.

---

## Ruído: fontes e consequências

O ruído elétrico em sistemas embarcados tem várias origens:

- **Ruído de fonte de alimentação**, variações em Vcc causadas por carga do sistema
- **Ruído eletromagnético (EMI)**, cabos longos atuam como antenas, captam interferência de motores, relês, sinais RF
- **Ruído térmico**, inerente a qualquer resistor (ruído Johnson)
- **Ruído de quantização**, o próprio processo de conversão A/D introduz um erro de até ±½ LSB

Para combater ruído de alimentação: capacitor de desacoplamento próximo ao pino de referência, trilhas curtas, plano de terra sólido.

---

## WDT. Watch Dog Timer: quando o software trava

O **Watchdog Timer** (WDT) é um timer de hardware independente do processador. A ideia é simples: o software precisa "alimentar" o watchdog periodicamente. Se o programa travar, loop infinito, deadlock, falha, o watchdog não é alimentado, estoura, e **reinicia o microcontrolador automaticamente**.

No ATMega328P, o WDT é configurável: pode gerar um reset ou uma interrupção. É essencial em sistemas embarcados de missão crítica, um termostato, um controlador industrial, um equipamento médico. Nenhum desses pode ficar travado para sempre.

> **PROVA:** O WDT não tem a ver com medição analógica diretamente, mas aparece aqui porque qualquer sistema que faz leituras em loop deve ser protegido contra travamento. Em produção, nunca faça sistema embarcado sem watchdog.
