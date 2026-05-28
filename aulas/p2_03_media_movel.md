# Média Móvel, Referências e Ruído

---

<!-- Slide 14 -->
Desafio: Média Móvel
Como aumentar a precisão no experimento?
Vamos implementar o algoritmo de Média Móvel?

<!-- Slide 15 -->
Média Móvel
Guarda medição no vetor
Incrementa o vetor de forma circular 0⟳16
Acumula as 16 últimas medições
Calcula a média dos valores acumulados

<!-- Slide 16 -->
Linearidade
O comportamento da leitura nem
sempre corresponde ao
comportamento real do valor
medido
A não-linearidade provoca erros de
medição em parte dos pontos avaliados;
É comum encontrar a não-linearidade
nos extremos da faixa de valores
mensuráveis;
Em algumas situações, pode valer a pena
limitar a faixa de valores medidos, e com
isso a resolução;
Em casos especíicos, pode-se corrigir a
não-linearidade matematicamente.

<!-- Slide 17 -->
Precisão, Exatidão e Linearidade
Nenhum destes parâmetros tem relação obrigatória com
medições digitais !
Qualquer tipo de medida, inclusive com instrumentos analógicos ou manuais, é
afetada pela precisão, exatidão e linearidade;
No entanto, medições digitais em sistemas automatizados também precisam ser
avaliadas nestes aspectos.
Fatores Universais
Referência
Ruídos
Escala
Fatores em Medições Digitais
Resolução
Taxa de Amostragem

<!-- Slide 18 -->
Referência
Qualquer medição baseia-se em uma referência;
Microcontroladores e sensores podem usar tipicamente
uma das seguintes fontes de referência:
Tensão de Alimentação;
Tensão de Referência Interna;
Tensão de Referência Externa.
Referências possuem exatidão e precisão pré-deinidas
Quanto melhor a referência, melhor a medição (e maior o custo);
Fatores externos, como a temperatura, muitas vezes afetam as referências.

<!-- Slide 19 -->
Fontes de Referência
Diodo Zener
Tensões diversas;
Tomar cuidado com a
linearidade;
Afetado pela temperatura
(700ppm/oC)

<!-- Slide 20 -->
Fontes de Referência
Referências Programáveis de
Precisão
Ex.: TL431 (Texas)
Tensão ajustável de 2,5 a 36V;
0,5% de Exatidão;
Afetado pela temperatura
(600ppm/oC).

<!-- Slide 21 -->
Fontes de Referência
Chips especializados
Ex.: 5040AIDG4 (Texas)
4,096 Volts
0,05% de exatidão;
3 ppm/oC

<!-- Slide 22 -->
Ex: Referência no Arduíno
analogReference( DEFAULT ) : utiliza Vcc, e varia com ela.
analogReference( INTERNAL ) : utiliza referência interna de 1,1V
Medir valor efetivo (medir pino AREF durante operação normal).
analogReference( EXTERNAL ) : utiliza tensão de entrada no pino AREF
0V < Referência <= 5V (a qualidade da referência determinará a exatidão das medidas);
Não usar analogRead() antes de mudar a referência, pois isso pode daniicar o Arduíno.
Por padrão, o Arduíno utiliza a
tensão de alimentação (5V) como
referência;
Outras referências exigem software e até
hardware especíico;
Após mudança, as primeiras medições
podem ser imprecisas.

<!-- Slide 23 -->
Tratando o ruído
A melhor opção é buscar a
redução do ruído no sensor,
circuito ou meio ambiente
Qualidade do sensor e
componentes;
Proximidade de Fontes de ruído;
Conexão e cabos;
Alimentação elétrica;
Ruídos tipicamente afetam a precisão
Quando aleatórios, ruídos podem ser reduzidos por algoritmos de média;
Se o desvio padrão for elevado, o número de amostragens necessárias pode ser grande.

<!-- Slide 24 -->
Ruído causa problemas graves
Fontes de ruído de alta intensidade
podem provocar problemas ainda
mais sérios
Comum em indústrias, e outra aplicações, como
sistemas automotivos embarcados;
Ruídos podem impedir a operação de ADCs;
Ruídos podem alterar registros internos do
MCU;
Ruídos podem provocar “travamento".
Design e projeto eletrônico podem reduzir impactos
Blindagem e aterramento;
Layout da PCB e outras questões;
Como evitar o travamento em aplicações embarcadas de automação?

<!-- Slide 25 -->
WDT (Watch Dog Timer)
Datasheet do ATMega328P

<!-- Slide 26 -->
WDT (Watch Dog Timer)
MCUs sujeitas a "travamento"
Espera por dispositivo que não responde;
Endereço da instrução corrompido, etc.
Operação básica do WDT:
Contador baseado em clock independente;
Ao atingir contagem determinada, envia
sinal de RESET ao MCU;
MCU evita o RESET enviando ele mesmo um sinal de RESET para o WDT;
Enquanto o MCU enviar periodicamente o sinal, tudo funciona bem;
Diante da eventual falha no envio do sinal (por um travamento), o WDT
reinicializa o MCU, permitindo que tudo volte à operação.
