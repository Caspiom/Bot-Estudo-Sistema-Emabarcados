# Classificação de Sistemas Embarcados

## Autônomos vs Conectados

A primeira grande divisão: o sistema precisa de comunicação externa para funcionar, ou opera sozinho?

**Sistemas autônomos (isolados):** funcionam completamente independentes de redes ou outros sistemas. Um controlador de motor de portão, um termostato bimetálico, o controle do seu micro-ondas. Recebe entradas de sensores locais, executa lógica interna, aciona atuadores locais. Fim.

**Sistemas conectados (em rede):** fazem parte de uma infraestrutura maior. Um controlador industrial que se comunica com um SCADA, um sensor de temperatura que envia dados para um servidor IoT, uma câmera de segurança IP. A conectividade é parte essencial da função.

E aí entra o conceito de **IoT (Internet of Things)**: sistemas embarcados conectados à internet que coletam, enviam e recebem dados. O IoT é um subconjunto dos sistemas conectados, não todo sistema conectado é IoT, mas todo dispositivo IoT é um sistema embarcado conectado.

---

## Classificação por aplicação

### Automotiva, a mais exigente

Vocês acreditam que um carro moderno tem mais de 100 microcontroladores? ECU do motor, ABS, airbag, controle de estabilidade, infotainment, sensores de estacionamento. Cada um com requisitos próprios de confiabilidade e tempo real.

O ambiente automotivo é brutal: temperatura variando de -40°C a +125°C sob o capô, vibração constante, picos de tensão na rede elétrica do veículo, interferência eletromagnética do motor. Os microcontroladores automotivos precisam ser certificados para essas condições. Não é o Arduino do seu projeto de sala de aula.

Além disso, sistemas de segurança veicular (airbag, ABS) têm requisitos de **safety** rigorosos, norma ISO 26262. Uma falha não pode resultar em comportamento perigoso.

### Industrial

Automação de fábricas, controle de processos químicos, robótica industrial. Requisitos: confiabilidade extrema (operação 24/7 por anos), resistência a EMI intensa (motores elétricos, inversores de frequência), comunicação por protocolos industriais (Modbus, PROFIBUS, CANbus).

### Ambiente Externo

Sistemas que ficam expostos ao clima: estações meteorológicas, rastreadores GPS, monitores de qualidade do ar. Desafios: impermeabilização, baixo consumo de energia (operação por bateria), temperatura extrema.

### Aplicações de Consumo

Os mais familiares: eletrodomésticos, brinquedos eletrônicos, wearables. Aqui o custo é o fator dominante, um chip de R$ 1 faz o mesmo trabalho que um de R$ 10 se o software for bem feito.

---

## Características de IoT

As principais características que definem IoT são:

**Conectividade:** todo dispositivo IoT precisa se comunicar. Pode ser Wi-Fi, Bluetooth, Zigbee, LoRa, LTE-M, depende do range, consumo e largura de banda necessários.

**Sensoriamento:** IoT coleta dados do mundo físico. Temperatura, umidade, localização, presença, vibração.

**Atuação:** muitos dispositivos IoT não são apenas coletores de dados, eles também atuam. Abrem válvulas, ligam motores, enviam notificações.

**Inteligência:** processamento local (edge) ou na nuvem (cloud) para tomar decisões com base nos dados.

> **PROVA:** IoT não é apenas "conectar coisas à internet". É o ecossistema completo: dispositivo embarcado + conectividade + processamento de dados + atuação. Um sensor sem conectividade não é IoT. Um servidor de dados sem sensor não é IoT.
