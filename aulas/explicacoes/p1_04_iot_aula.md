# IoT. Internet das Coisas

## A ideia central: conectar tudo

A Internet das Coisas é a extensão da internet para objetos físicos. Não é só computadores e celulares na rede, são sensores, atuadores, veículos, eletrodomésticos, equipamentos industriais, todo comunicando-se e trocando dados.

O número é impressionante: estimativas apontam para dezenas de bilhões de dispositivos IoT conectados na próxima década. Cada um com processamento embarcado, conectividade, e propósito específico.

---

## Características da IoT

**Heterogeneidade:** dispositivos IoT são radicalmente diferentes entre si. Um sensor de temperatura industrial, uma câmera IP e um rastreador GPS têm hardware, software e protocolos completamente distintos. IoT é um ecossistema diverso, não uma plataforma uniforme.

**Escalabilidade:** a rede IoT precisa suportar desde dezenas até milhões de dispositivos. Os protocolos e infraestrutura precisam escalar.

**Baixo consumo:** a maioria dos dispositivos IoT opera por bateria por meses ou anos. Isso impõe restrições severas ao processamento, comunicação e hardware.

**Segurança:** talvez o maior desafio. Dispositivos IoT são alvos de ataques porque são numerosos, muitas vezes mal protegidos, e conectados à internet.

---

## IoT e Segurança, o problema real

Aqui o Marco fica indignado, e com razão. Vocês acreditam que existem câmeras de segurança industriais com senha padrão "admin/admin" expostas diretamente na internet? E que botnets foram criadas com centenas de milhares dessas câmeras para fazer ataques DDoS?

O problema é estrutural. Desenvolvedores de IoT focam em funcionalidade e custo, não em segurança. Dispositivos com recursos limitados têm dificuldade de rodar criptografia pesada. Atualizações de firmware são raras ou impossíveis. E o usuário final não tem ideia de que seu termostato inteligente pode estar participando de um ataque.

**Por que criptografia forte é difícil em IoT:**
- Processadores lentos e memória escassa limitam algoritmos pesados
- RSA, TLS e AES têm overhead significativo para um microcontrolador de 8 bits a 8 MHz
- Protocolos simplificados (como MQTT sem TLS) foram criados exatamente para acomodar essas limitações

**Tecnologias específicas de segurança para IoT:**
- TLS leve (mTLS com certificados menores)
- DTLS (TLS sobre UDP para protocolos sem conexão)
- Autenticação por token em vez de senha
- Redes segregadas (VLAN IoT separada da rede corporativa)

---

## IoT e as Redes, o problema do alcance

A IoT normalmente está associada a redes de **baixo alcance e baixo consumo**. Por quê? Porque a maioria dos sensores está em locais sem infraestrutura (campo aberto, indústria, cidade) e opera por bateria.

As principais tecnologias de conectividade para IoT:

**Wi-Fi (IEEE 802.11):** alto desempenho, alto consumo. Bom para dispositivos próximos ao roteador com alimentação elétrica. Ideal para câmeras, smart speakers.

**Bluetooth / BLE:** curto alcance (10-100m), baixíssimo consumo no modo BLE. Ideal para wearables, sensores de saúde, dispositivos pessoais.

**Zigbee / Z-Wave:** redes mesh de baixo consumo para automação residencial. Cada dispositivo pode retransmitir o sinal dos vizinhos, aumentando o alcance da rede como um todo.

**LoRa / LoRaWAN:** alcance de quilômetros, consumo mínimo, mas baixíssima taxa de dados (bytes por transmissão, não megabytes). Perfeito para sensores rurais, rastreamento de ativos.

**LTE-M / NB-IoT:** celular de baixo consumo para IoT. Cobre onde tem torre celular, boa para dispositivos móveis (rastreadores GPS de veículos, por exemplo).

> **PROVA:** A escolha de tecnologia de conectividade depende de três fatores: alcance necessário, taxa de dados, e consumo de energia. Não existe "melhor" tecnologia IoT, existe a certa para cada aplicação.
