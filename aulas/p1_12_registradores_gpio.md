# GPIOs, Dispositivos de E/S e Medição Analógica

---

<!-- Slide 214 -->
Dispositivos de
Entrada e Saída

<!-- Slide 215 -->
Interface na Prática
A tensão elétrica dos sinais trocados com o
mundo externo codiicam a informação
transferida
Portas digitais ESCREVEM E LEEM sinais
codiicados digitalmente
Tensão alta (HIGH) = 1;
Tensão baixa (LOW) = 0;
Portas analógicas LEEM sinais codiicados
analogicamente
O valor da tensão indica o valor analógico;
Teoricamente, existem “ininitos" valores (na
prática não. Por quê? )
Sinais Elétricos
(valores de tensão digitais)
Sinais Elétricos
(valores de tensão analógicos)

<!-- Slide 216 -->
Dispositivos de Entrada
Chaves e Botões;
Teclados (ex. teclado de membrana);
Sensores digitais (chuva, presença e movimento, chave
magnética, gases, sensor de digital etc);
Sensores analógicos (potenciômetro, umidade, pressão,
iluminação, temperatura, ultrasom, tensão, corrente, campo
magnético etc);
Sensores de pulsos (luxo d’água, contadores etc);
Dispositivos especiais (giroscópio, acelerômetro, RTC).

<!-- Slide 217 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores;
Pull Up ou Pull Down
Efeito Bouncing
Debouncing por HW ou SW

<!-- Slide 218 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores
Existem sob a forma de foto-diodos, foto-transistores etc;
No foto-transistor do exemplo, quem excita a base é a luz
do LED interno;
Embora tipicamente operem como chave, podem atuar
como ampliicadores;
Promovem isolamento típico de alguns milhares de volts
(5.300V), com resistência de 1011.
Na placa do exemplo, notem o espaço de isolamento.
Figuras: https://en.wikipedia.org/wiki/Opto-isolator; Especiﬁcação: TIL111

<!-- Slide 219 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores;
Pull Up ou Pull Down
Efeito Bouncing
Debouncing por HW ou SW

<!-- Slide 220 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores;
Pull Up ou Pull Down
Efeito Bouncing
Debouncing por HW ou SW

<!-- Slide 221 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores;
Pull Up ou Pull Down
Efeito Bouncing
Debouncing por HW ou SW

<!-- Slide 222 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores;
Pull Up ou Pull Down
Efeito Bouncing
Debouncing: HW ou SW
// Constantes para indicar número dos pinos utilizados
const int buttonPin = 2;
const int ledPin = 13;
// Variables will change:
int ledState = HIGH;
// status atual do pino de saída (LED)
int buttonState;
// status atual do pino de entrada
int lastButtonState = LOW; // status anterior do pino de entrada
unsigned long lastDebounceTime = 0; // ultimo momento em que o pino mudou de status
unsigned long debounceDelay = 50;
// tempo para o “debounce”
void setup() {
pinMode(buttonPin, INPUT);
pinMode(ledPin, OUTPUT);
digitalWrite(ledPin, ledState);
// Deine status atual da saída
}
https://docs.arduino.cc/built-in-examples/digital/Debounce/
Deboucing por Software

<!-- Slide 223 -->
Dispositivos de Entrada
Chaves e Botões
Método básico de entrada;
Chaves momentâneas, ixas e encoders;
Foto-isoladores;
Pull Up ou Pull Down
Efeito Bouncing
Debouncing: HW ou SW
void loop() {
// Lê o status atual do botão de entrada
int reading = digitalRead(buttonPin);
// Se o status do botão mudou, seja por ação do operador, seja por ruído, comece a contar o tempo
if (reading != lastButtonState) lastDebounceTime = millis();
// Se decorreu o tempo deinido para o “debounce”
if ((millis() - lastDebounceTime) > debounceDelay) {
// Se o status mudou
if (reading != buttonState) {
buttonState = reading;
// Altere o status do LED apenas se o status for HIGH
if (buttonState == HIGH) {
ledState = !ledState;
}
}
}
// Deina o status do LED
digitalWrite(ledPin, ledState);
// Salva a leitura para a próxima execução do loop
lastButtonState = reading;
}

<!-- Slide 224 -->
Teclados (ex. teclado de membrana)
Cruzamento de Linhas X Colunas
Varredura via SW
Analisar combinações?
Dispositivos de Entrada

<!-- Slide 225 -->
Dispositivos de Entrada
Sensores digitais (chuva, presença e movimento, chave
magnética, gases, leitura de digitais etc)
Funcionam como chaves (sem bouncing);
Alguns permitem ajuste da sensibilidade para ativação;

<!-- Slide 226 -->
Dispositivos de Saída
LEDs
Saída analógica típica para testes;
Admite modulação via PWM;
Vermelho, Verde, Amarelo, Azul, Branco e RGB (3 saídas).

<!-- Slide 227 -->
Dispositivos de Saída
Displays (7 segm., matriciais, LCD, TFT, OLED)
Interface convencional ou de rede (i2C, por exemplo);
Cátodo ou Anodo comum;

<!-- Slide 228 -->
Dispositivos Saída (Relês)
Nem todo dispositivo pode ser acionado
por um transístor
Cargas AC ou de alta potência;
Necessidade de isolamento;
Relês são dispositivos mecânicos
⬆Promovem grande isolamento;
⬆Suportam cargas DC ou AC;
⬇São lentos;
⬇Consomem potência signiicativa;
⬇Vida útil é baixa
Suportam até 300.000 acionamentos (típ)
“Relês" de estado sólido
⬆São rápidos;
⬆Consomem pouca potência;
⬆Vida útil elevada;
Suportam até 10.000.000 de acionamentos (típ)
Tem isolamento inferior aos relês
Suportam cargas AC
[Moraes, Cícero Couto] Engenharia de Automação Industrial 2ªEd. p.27

<!-- Slide 229 -->
Dispositivos de Saída
Servos, motores convencionais e de passo

<!-- Slide 230 -->
Entradas Analógicas
Sensores analógicos (iluminação, potenciômetro, umidade,
peso, pressão, temperatura, ultrasom, corrente, tensão,
campo magnético etc)

<!-- Slide 231 -->
Entrada: Divisor de Tensão
Com a circulação de corrente
pelo potenciômetro, a tensão no
cursor varia de acordo com a
posição do mesmo;
A posição do cursor determina,
então, a tensão obtida;
O potenciômetro funciona como
um sensor de posição angular, e
assim é utilizado em diversas
situações.

<!-- Slide 232 -->
Sensores “medem” tensão elétrica
Tensão elétrica é injetada em uma porta
analógica do microcontrolador
Tensão elétrica precisa estar dentro dos
limites do microcontrolador;
No Arduíno, pode estar entre 0 e 5V.
Na porta analógica, a tensão é
convertida para um número inteiro pelo
conversor analógico/digital interno;
Número é determinado pela quantidade
de bits do conversor analógico digital
No Arduíno Uno R3, o conversor é de 10bits
210 = 1024
t
x
0V
5V
1023

<!-- Slide 233 -->
Tensão é convertida para um número
Medições são proporcionais graças à
linearidade* do sensor;
Conversão é básica, por regra de 3
t - 0
x - 0
5 - 0
1023 - 0
t
x
1023
5 . x
t = 1023
* Veremos depois
t
x
0V
5V
1023
=
=

<!-- Slide 234 -->
Medição analógica básica
Medição de Tensões Disponíveis no
próprio Arduíno
Sem componentes externos;
Avaliar as medições com base no valor
numérico medido pelo ADC;
Alimentação
via USB
Entrada a ser medida

<!-- Slide 235 -->
Medição analógica básica
Os resultados serão vistos no Monitor Serial
Utilizaremos a entrada A0 do Arduíno
Salvamos o valor lido anteriormente
Leitura analógica da entrada
Mostra apenas se houver alteração
Número de amostragens < 10 por segundo

<!-- Slide 236 -->
Medição analógica básica
Circuito básico, com apenas um Arduíno e
um cabo
Simplicidade, sem equip. externos.
Escolha da tensão de entrada:
5V (Vcc)
3,3V (saída de alimentação)
0V (GND)
