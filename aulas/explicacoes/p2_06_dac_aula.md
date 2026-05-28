# DAC: Conversor Digital-Analógico

## O caminho inverso: do número para a tensão

Enquanto o ADC converte tensão em número, o **DAC** (Digital-to-Analog Converter) faz o inverso: pega um número digital e gera uma tensão analógica proporcional. Simples no conceito, mas o "como" é muito interessante.

---

## DAC por Resistores Ponderados

A implementação mais intuitiva. A ideia: cada bit do número digital controla uma chave que conecta um resistor à linha de saída. O valor do resistor é **proporcional ao peso do bit**.

Para um DAC de 4 bits (R é o resistor base):
- Bit 3 (MSB, peso 8): resistor R
- Bit 2 (peso 4): resistor 2R
- Bit 1 (peso 2): resistor 4R
- Bit 0 (LSB, peso 1): resistor 8R

Quando você ativa bits, correntes passam pelos resistores e se somam. A tensão de saída é proporcional à soma ponderada.

O problema? Perceba que o resistor do bit mais significativo vale R e o do bit menos significativo vale 8R. Para um DAC de 10 bits, o último resistor precisa valer 512R. Se R = 1kΩ, você precisa de um resistor de 512kΩ com a mesma precisão. **Resistores com essa relação de tolerância exata são caros e difíceis de fabricar**. Por isso essa arquitetura não escala bem para alta resolução.

---

## DAC por Rede R-2R em Escada

A solução elegante. Usa apenas **dois valores de resistor**: R e 2R. Em qualquer quantidade de bits, você só precisa desses dois valores.

A rede R-2R funciona por divisão de tensão em cascata. Cada estágio divide a contribuição do bit anterior pela metade, criando o efeito de ponderação binária sem precisar de resistores de valores radicalmente diferentes.

Vantagens:
- Apenas dois valores de resistor → mais fácil de fabricar com precisão
- Escala bem para alta resolução (8, 12, 16 bits)
- Implementável com resistores SMD em uma faixa de tolerância controlável

> **PROVA:** Vocês acreditam que alguém me disse que "DAC é só ligar o PWM num capacitor"? PWM filtrado é uma aproximação de analógico, não é um DAC real. A tensão média do PWM pode simular um sinal analógico para cargas de resposta lenta, mas a saída tem ripple, não é contínua, e tem limitações severas. DAC de verdade gera tensão estável e precisa.

---

## O Arduino Uno não tem DAC

Fato importante: o ATMega328P **não tem DAC de hardware**. O Arduino Uno não gera tensão analógica verdadeira. A função `analogWrite()` não é analógica, ela gera **PWM**, que é digital, e pode ser filtrada externamente para parecer analógica.

Se você precisar de saída analógica real com um Arduino, precisa de um DAC externo, como o MCP4725 (12 bits, I2C).
