# ADC: Arquitetura e Amostragem

## Como o ADC realmente funciona por dentro

Existem várias arquiteturas de conversor analógico-digital. Vamos ver as principais.

### Arquitetura Paralela (Flash ADC)

A mais rápida de todas. Usa **2^N - 1 comparadores** em paralelo, cada um com uma referência diferente. O sinal de entrada é comparado com todas as referências ao mesmo tempo. O resultado sai em um único ciclo de clock.

O problema? Um ADC Flash de 10 bits precisaria de **1023 comparadores**. Isso consome área de chip absurda e energia proporcional. Por isso essa arquitetura é usada apenas para ADCs de baixa resolução e altíssima velocidade, como os conversores de rádio frequência, que precisam amostrar gigahertz.

### Arquitetura SAR (Successive Approximation Register)

Essa é a usada no **ATMega328P**. É o equilíbrio perfeito entre velocidade e complexidade. Funciona como uma balança de dois pratos com pesos binários:

1. Você começa com o bit mais significativo: "o sinal é maior que Vref/2?"
2. Se sim, mantém esse bit em 1 e testa o próximo: "é maior que 3×Vref/4?"
3. Vai refinando bit a bit até determinar todos os 10 bits

São exatamente **N comparações** para N bits. Para 10 bits, 10 comparações. Muito mais eficiente que o Flash.

No Arduino, o ADC SAR opera a uma frequência de clock dividida do clock principal. A frequência de clock do ADC recomendada é entre 50 kHz e 200 kHz para máxima precisão. O Arduino divide o clock de 16 MHz por um prescaler, padrão de 128 → 125 kHz.

---

## Amostragem: o Teorema de Nyquist

Quando você faz medições analógicas, está **amostrando** um sinal contínuo. O **Teorema de Nyquist** diz: para reconstruir um sinal fielmente, você precisa amostrá-lo com frequência **pelo menos duas vezes maior que a frequência máxima do sinal**.

Exemplo: você quer medir um sinal de áudio com frequência máxima de 20 kHz. Precisa amostrar a pelo menos 40 kHz. O CD usa 44,1 kHz por esse motivo.

Se você amostrar devagar demais, ocorre **aliasing**, frequências altas aparecem como frequências baixas falsas no sinal digitalizado. É como filmar um ventilador girando rápido: dependendo da taxa de frames da câmera, parece que está girando devagar ou até ao contrário.

Para o Arduino medindo temperatura ou posição de potenciômetro, Nyquist não é problema, o sinal muda em hertz, não quilohertz. Mas para sinais de áudio ou vibração, é crítico.

---

## O ADC do Arduino: características práticas

O ADC do ATMega328P tem:
- **10 bits** de resolução
- **6 canais multiplexados** (A0 a A5), mas lê um por vez
- Referência configurável: DEFAULT (Vcc), INTERNAL (1,1V), EXTERNAL (pino AREF)
- Frequência de operação ideal: 50–200 kHz

**Leitura multiplexada** significa que os 6 pinos analógicos compartilham um único conversor. Quando você chama `analogRead(A2)`, o multiplexador conecta A2 ao ADC, faz a conversão (leva ~104 µs no Arduino padrão), e retorna o resultado.

> **PROVA:** Vocês acreditam que alguém achou que o Arduino lê os 6 canais analógicos simultaneamente? Não. Um por vez. O multiplexador seleciona um canal, converte, passa pro próximo. Se você quer 6 leituras simultâneas, precisa de 6 ADCs externos, ou aceita o offset de tempo entre as leituras.

---

## ADC Externo: quando o interno não é suficiente

O ADS1115 é um exemplo de ADC externo popular com o Arduino. Características:
- **16 bits** de resolução (contra 10 do interno)
- Interface **I2C**, só precisa de 2 fios além da alimentação
- 4 canais com ganho programável (PGA)
- Resolução de ~0,1 mV com referência interna

Quando usar? Quando você precisa de precisão muito maior, pesar objetos em gramas, medir correntes muito pequenas, monitorar tensão de célula de combustível.

O custo: é mais lento que o ADC interno (máximo ~860 amostras/segundo) e precisa de código adicional para comunicação I2C.
