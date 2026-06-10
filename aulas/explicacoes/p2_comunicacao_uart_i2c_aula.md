# Comunicação em SE — UART, I2C, SPI, ESP-NOW

> **Prova:** P2 | **Tier:** S | **Tópico:** `comunicacao_uart_i2c`

---

## 📡 Visão Geral dos Protocolos

| Protocolo | Mídia | Taxa | Alcance | Pontos | Sinc. | Duplex |
|-----------|-------|------|---------|--------|-------|--------|
| **UART** | Cabeada | <5 Mbps | 1 km | 2 | Assíncrono | Full |
| **I2C** | Cabeada | <5 Mbps | 100 m | 1.008 | Síncrono | Half |
| **SPI** | Cabeada | <65 Mbps | 10 m | N | Síncrono | Full |
| CAN | Cabeada | <1 Mbps | 1 km | N | Assíncrono | Full |
| LoRa | Sem fio | <5 Kbps | **10 km** | N | — | — |
| **ESP-NOW** | Sem fio | <1 Mbps | 480 m | 20 | — | Bi |

---

## 🔌 UART — Universal Asynchronous Receiver-Transmitter

### Características

- Protocolo **assíncrono** — sem clock compartilhado
- **Ponto a ponto** (só 2 dispositivos)
- **Full-duplex** (TX e RX independentes)
- Sincronização pelo **baud rate** configurado em ambos os lados

### Topologia — Conexão Cruzada!

```
Dispositivo A          Dispositivo B
    TX ────────────────── RX
    RX ────────────────── TX
   GND ────────────────── GND
```

▶ **PROVA:** TX de um vai para RX do outro. Conectar TX→TX = ERRADO, não transmite nada.

### Frame UART (8N1)

```
IDLE: ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
           ┌── D0 D1 D2 D3 D4 D5 D6 D7 ──┐
      ‾‾‾‾‾                               ‾‾‾‾‾
      START                                STOP
```

- **IDLE:** linha em nível ALTO (1)
- **Start bit:** nível BAIXO (0) → avisa início
- **8 bits de dados:** LSB primeiro!
- **Paridade (opcional):** par, ímpar ou nenhuma
- **Stop bit:** nível ALTO (1)

▶ **PROVA:** UART envia **LSB primeiro**. SERIAL_8N1 = 8 bits, **Nenhuma paridade** (N=None), 1 stop.

### Compatibilidade de Tensão

- 3,3 V → pino 5 V: geralmente OK
- **5 V → pino 3,3 V: PROIBIDO!** (danifica o chip) → usar divisor resistivo ou level shifter

### Taxas Típicas

| Taxa | Período por bit |
|------|----------------|
| 9.600 bps | 104 µs |
| 115.200 bps | 8,68 µs |

### Programação (Arduino)

```c
Serial.begin(9600);             // inicia com baud rate
Serial.begin(9600, SERIAL_8N1); // configuração explícita

// Transmissão:
Serial.print("Texto");   // sem newline
Serial.println("Texto"); // com \r\n
Serial.write(0x41);      // byte direto ('A')

// Recepção:
if (Serial.available() > 0) {
    char c = Serial.read();
}
```

---

## 🔗 I2C — Inter-Integrated Circuit

### Características

- Criado pela **Philips em 1982**
- Apenas **2 fios: SDA (dados) e SCL (clock)**
- Até **1.008 dispositivos** no mesmo barramento
- **Half-duplex** (não transmite e recebe ao mesmo tempo)
- Resistores de pull-up **obrigatórios** (SDA e SCL são open-drain)

### Modos

| Modo | Taxa |
|------|------|
| Standard | 100 kbps |
| Fast | 400 kbps |
| Fast Plus | 1 Mbps |
| High-Speed | até 3,4 Mbps |

### Frame I2C — Passo a Passo

1. **Barramento livre:** SDA = HIGH, SCL = HIGH
2. **Start bit:** SDA **DESCE** enquanto SCL está HIGH
3. **Endereço:** 7 bits (MSB primeiro) + bit **R/W**
   - R/W = **0 → Mestre ESCREVE** no escravo
   - R/W = **1 → Mestre LÊ** o escravo
4. **ACK:** receptor puxa SDA para LOW (confirmação)
   - **ACK = 0** (LOW) = OK
   - **NACK = 1** (HIGH) = erro ou dispositivo ausente
5. **Dados:** 8 bits + ACK, repetido quantas vezes precisar
6. **Stop bit:** SDA **SOBE** enquanto SCL está HIGH

▶ **PROVA:** Start = SDA **desce**. Stop = SDA **sobe**. R/W=0 → escreve. ACK = LOW = confirmação.

### Endereços Comuns

| Dispositivo | Endereço |
|-------------|---------|
| MPU-6050 (acelerômetro/giroscópio) | 0x68 ou 0x69 |
| SSD1306 (OLED) | 0x3C ou 0x3D |
| AT24Cxx (EEPROM) | 0x50–0x57 |
| DS3231 (RTC) | 0x68 |

### Programação (Arduino — biblioteca Wire)

```c
#include <Wire.h>

void setup() {
    Wire.begin();  // inicia como mestre
}

// Escrever no registrador de um escravo:
void escreveReg(uint8_t endereco, uint8_t reg, uint8_t dado) {
    Wire.beginTransmission(endereco);  // START + endereço + W
    Wire.write(reg);                   // registrador alvo
    Wire.write(dado);                  // valor
    Wire.endTransmission();            // STOP
}

// Ler N bytes de um escravo:
void leReg(uint8_t endereco, uint8_t reg, uint8_t* buf, int n) {
    Wire.beginTransmission(endereco);
    Wire.write(reg);
    Wire.endTransmission(false);       // Restart (sem STOP)
    Wire.requestFrom(endereco, n);
    for (int i = 0; i < n && Wire.available(); i++)
        buf[i] = Wire.read();
}
```

---

## 📶 ESP-NOW — Comunicação Sem Roteador

### Características

- Protocolo **proprietário da Espressif** (fabricante do ESP8266/ESP32)
- Usa o transceptor **2,4 GHz** já presente no chip
- **Sem roteador Wi-Fi** — comunicação direta
- Latência mínima (sem DHCP, sem DNS, sem TCP handshake)

### Limitações

- Pacote máximo: **250 bytes**
- Máximo **20 estações** (com criptografia: 10)
- Endereçamento por **MAC Address** (não por IP)

### Modos

- **Unidirecional:** initiator → responder(es)
- **Bidirecional:** cada dispositivo é initiator E responder ao mesmo tempo

### Funções Principais

```c
#include <esp_now.h>
#include <WiFi.h>

// Callback de envio (chamada após transmissão)
void onEnvio(const uint8_t* mac, esp_now_send_status_t status) {
    Serial.println(status == ESP_NOW_SEND_SUCCESS ? "OK" : "FALHA");
}

// Callback de recepção (chamada ao receber dado)
void onRecepcao(const uint8_t* mac, const uint8_t* dados, int len) {
    memcpy(&meusDados, dados, sizeof(meusDados));
}

void setup() {
    WiFi.mode(WIFI_STA);
    esp_now_init();
    esp_now_register_send_cb(onEnvio);
    esp_now_register_recv_cb(onRecepcao);

    // Adiciona receptor pelo MAC Address
    esp_now_peer_info_t receptor = {};
    memcpy(receptor.peer_addr, mac_receptor, 6);
    esp_now_add_peer(&receptor);
}
```

▶ **PROVA:** ESP-NOW usa **MAC Address** (não IP). Sem roteador. Pacote máximo = **250 bytes**.

---

## 📌 Resumo Rápido

- UART: assíncrono, TX→RX cruzado, LSB primeiro, 8N1, **5V→3,3V = perigo**
- I2C: Philips/1982, SDA+SCL, start=SDA desce, R/W 0=escreve, ACK=LOW, pull-ups obrigatórios
- SPI: 4 fios (MOSI/MISO/SCK/CS), mais rápido (65 Mbps), 1 controlador
- ESP-NOW: sem roteador, MAC Address, 250 bytes, 20 dispositivos
- LoRa: **maior alcance** (10 km) + menor taxa (<5 kbps)
