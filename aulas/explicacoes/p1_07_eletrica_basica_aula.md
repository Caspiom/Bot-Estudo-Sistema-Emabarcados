# Eletrônica Básica: Lei de Ohm e Resistores

## Por que um engenheiro de sistemas embarcados precisa de eletrônica

Aqui tem gente que acha que SE é só código. É um engano que custa caro. O código roda em hardware. O hardware tem limitações elétricas. Se você não entende essas limitações, vai queimar componente, criar comportamentos estranhos e não vai saber diagnosticar.

Vamos revisar os conceitos fundamentais com foco no que aparece em projetos embarcados reais.

---

## Tensão, Corrente e Resistência

**Tensão elétrica (V):** a diferença de potencial elétrico entre dois pontos. É a "pressão" que empurra os elétrons. Medida em Volts. A analogia da água: tensão é a pressão na cano.

**Corrente elétrica (I):** o fluxo de cargas (elétrons) por segundo. Medida em Ampères. Na analogia da água: corrente é a vazão.

**Resistência (R):** a oposição ao fluxo de corrente. Medida em Ohms (Ω). Na analogia: é o diâmetro do cano.

**Lei de Ohm:** V = R × I. Se você sabe dois dos três, calcula o terceiro. Simples, poderoso, e presente em qualquer cálculo de circuito.

---

## Resistores em sistemas embarcados

O resistor é o componente passivo mais comum. Dissipa energia na forma de calor, isso é crucial para dimensionamento.

**Potência dissipada:** P = V × I = V²/R = I²×R. Se você coloca um resistor de 100Ω entre 5V e GND: I = 5/100 = 50 mA, P = 5 × 0,05 = 0,25W. Esse resistor precisa suportar pelo menos 0,25W, um resistor de 1/4W (0,25W) está no limite. Use 1/2W para ter margem.

**Tamanho ≠ resistência.** Vocês acreditam que alguém achou que um resistor maior tem mais resistência? O tamanho do resistor PTH indica sua **capacidade de potência** (dissipação de calor), não seu valor de resistência. Um resistor gordo de 100Ω dissipa mais calor que um fininho de 100Ω, mas têm a mesma resistência.

**Código de cores (resistores PTH):** as faixas coloridas codificam o valor. As primeiras faixas são os dígitos significativos, a penúltima é o multiplicador, a última é a tolerância. Não precisa decorar todas as cores na prova, precisa entender o conceito e saber que existe.

**Resistores SMD:** o valor vem impresso diretamente. Ex: "103" = 10 × 10³ = 10 kΩ. "472" = 47 × 10² = 4,7 kΩ.

---

## Resistores em série e paralelo

**Série:** os resistores ficam em linha, a corrente passa por todos. Resistência total = R1 + R2 + R3. A tensão se divide proporcionalmente às resistências.

**Paralelo:** os resistores compartilham os mesmos dois nós. Resistência total = 1/(1/R1 + 1/R2 + ...). A tensão é igual em todos; a corrente se divide. A resistência total é sempre menor que o menor resistor individual.

---

## Aplicações práticas de resistores

**Limitador de corrente para LED:** LEDs precisam de corrente controlada, tipicamente 10-20 mA. Sem resistor, a corrente aumenta indefinidamente até queimar o LED (ou o pino do Arduino). O resistor limita: R = (Vcc - V_led) / I_desejado. Para LED vermelho (V_led ≈ 2V) com 5V e 10 mA: R = (5-2)/0,01 = 300Ω.

**Divisor de tensão:** dois resistores em série entre Vcc e GND, com o ponto médio sendo a saída. Muito usado para adaptar níveis de tensão, por exemplo, reduzir um sinal de 12V para 5V antes de conectar ao Arduino. Atenção: divisor de tensão não deve ser usado com cargas que consomem corrente significativa, pois altera a divisão.

**Pull-up e Pull-down:** pinos de entrada flutuantes assumem valores aleatórios de tensão, dominados por ruído. Um resistor de pull-up (conectado ao Vcc, tipicamente 10 kΩ) garante que o pino fique em HIGH quando não há sinal. Um pull-down (para GND) garante LOW. O ATMega328P tem pull-ups internos, você não precisa do resistor externo para casos simples.

> **PROVA:** Vocês acreditam que alguém calculou o resistor de LED usando só a tensão de 5V e esqueceu de subtrair a tensão do LED? R = Vcc/I está **errado**. O correto é R = (Vcc - V_led)/I. Isso é básico de circuito e aparece em qualquer projeto com LED.
