# Escalas e Resolução

## O que é uma escala e por que ela existe

Você tem um sensor de temperatura que gera entre 0V e 0,5V para uma faixa de 0°C a 100°C. Você conecta isso no Arduino com referência de 5V. O que acontece? Você está usando apenas 10% da escala do ADC, os valores ficam todos comprimidos entre 0 e 102, de 1024 possíveis. Você jogou fora 90% da resolução do conversor.

**Escala** é o processo de adequar o sinal à faixa de operação do ADC. O objetivo é sempre usar o máximo da escala disponível, porque isso maximiza a resolução efetiva da medição.

Existem duas abordagens:
1. **Amplificar o sinal**, usar um amplificador operacional para esticar o sinal de 0–0,5V para 0–5V
2. **Reduzir a referência**, usar `analogReference(INTERNAL)` com 1,1V, fazendo o sinal de 0–0,5V ocupar 45% da escala

Ambas são válidas. A escolha depende do projeto.

---

## Resolução: quanto vale cada passo do ADC?

**Resolução** é o menor incremento que o conversor consegue detectar. Para um ADC de N bits com referência Vref:

```
Resolução = Vref / (2^N - 1)
```

Para o Arduino Uno (10 bits, Vref = 5V):
```
Resolução = 5V / 1023 ≈ 4,88 mV
```

Isso significa: variações menores que ~4,9 mV são invisíveis para o ADC. Ele não consegue distinguir 2,500V de 2,503V, ambos resultam no mesmo número inteiro.

> **PROVA:** "Existe resolução em medidas analógicas?". SIM. Qualquer sistema de medição tem uma resolução mínima. No ADC de 10 bits com 5V, é ~4,9 mV. Abaixo disso, o conversor não percebe diferença.

---

## Resolução não é sinônimo de precisão

Isso é sutil, mas importante. Um ADC de 16 bits tem resolução muito melhor que um de 10 bits, mas se a sua referência de tensão estiver oscilando, se houver ruído, se o circuito estiver mal projetado, você não vai aproveitar essa resolução.

Vocês acreditam que alguém colocou um ADC externo de 24 bits num projeto e ficou surpreso que as leituras ainda oscilavam? O problema era o ruído de alimentação. Resolução alta sem cuidado de projeto é desperdício.

---

## Como calcular a resolução a partir dos limites da medição

Às vezes o problema vem ao contrário: você quer medir de A a B com resolução mínima de X. Quantos bits precisa?

Exemplo: termômetro de -10°C a 110°C (range de 120°C), resolução mínima de 0,5°C.
```
Número de passos = 120 / 0,5 = 240 passos
Bits necessários: 2^8 = 256 > 240 → 8 bits são suficientes
```

Na prática, usa-se o mínimo de bits que cobre o problema com uma margem. Um ADC de 10 bits dá 1024 passos, ótimo para esse termômetro.

---

## Grandezas digitais vs analógicas

Uma dúvida clássica: botão, LED, relay, isso é digital ou analógico? **Digital**. Assume apenas dois estados discretos: ligado ou desligado, 0 ou 1, 0V ou 5V.

Temperatura, pressão, tensão de bateria, posição de potenciômetro, **analógico**. Varia continuamente.

O ADC faz a ponte entre os dois mundos. O DAC (que vem logo depois) faz o caminho inverso: digital → analógico.

> **PROVA:** Frequência de amostragem (sample rate) e resolução são coisas diferentes. Frequência diz quantas vezes por segundo você lê. Resolução diz quão fino é cada leitura. Um ADC pode ser rápido e grosseiro, ou lento e fino.
