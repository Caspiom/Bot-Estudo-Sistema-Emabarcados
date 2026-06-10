# Protocolos IoT — HTTP e MQTT

<!-- Slide 0 -->

> **Prova:** P2 | **Tier:** A | **Tópico:** `iot_mqtt_http`



<!-- Slide 1 -->
🌐 IoT — Camadas

Protocolos IoT são organizados em camadas:

- **3 camadas:** percepção → rede → aplicação
- **4 camadas:** percepção → suporte → rede → aplicação
- **5 camadas:** percepção → transporte → processamento → aplicação → negócios

Nas camadas de aplicação: **HTTP** e **MQTT**.



<!-- Slide 2 -->
🌍 HTTP em IoT

- Usa **TCP** como transporte
- Modelo clássico: **requisição → resposta** (abre conexão → transfere → fecha)
- Problema para IoT: overhead enorme para dados frequentes

### HTTP WebSockets

- Conexão **persistente e bidirecional**
- Cliente faz "upgrade" da conexão HTTP → vira canal aberto
- Ideal para: dashboards em tempo real, chat

### HTTP Push (Server-Sent Events)

- Servidor envia dados **sem nova requisição** do cliente
- **Unidirecional** (servidor → cliente)
- Usado para atualizações em tempo real orientadas a eventos

**Quando usar HTTP:** aplicação com interação via browser web.



<!-- Slide 3 -->
📨 MQTT — Message Queuing Telemetry Transport

### A História

- Criado em **1999** por **Andy Stanford-Clark (IBM)** e **Arlen Nipper (Cirrus Link)**
- Objetivo: monitorar **sensores em oleodutos via satélite**
- Problemas: banda cara, conexão instável, dispositivos com recursos mínimos
- Solução: protocolo **leve** (até **2 bytes** por mensagem!)
- Aberto ao público em **2010** (versão 3.1); versão atual: **5.0 (2019)**

▶ **PROVA:** MQTT = IBM + 1999 + oleodutos + satélite. Uma mensagem pode ter **2 bytes**.

### Modelo Pub/Sub — O Coração do MQTT

**Componentes:**

| Componente | Função |
|------------|--------|
| **Publisher** | Publica dados em um tópico |
| **Subscriber** | Assina tópicos para receber dados |
| **Broker** | Intermediário — recebe publicações e entrega aos assinantes |

**Publishers e Subscribers não se conhecem.** O broker é o único ponto de contato.

**Brokers populares:** Mosquitto (open source), HiveMQ, EMQX, AWS IoT Core.

▶ **PROVA:** No MQTT, publishers **NÃO enviam direto** para subscribers. O **broker** é o intermediário.

### Tópicos — Estrutura Hierárquica

```
casa/terreo/sala/temperatura
casa/terreo/sala/umidade
casa/1oPav/quarto1/temperatura
fabrica/linha1/motor/corrente
jardim/irrigacao/status
```

### Wildcards (Coringas)

| Wildcard | Substitui | Exemplo |
|----------|-----------|---------|
| `+` | **1 nível** | `casa/+/sala/temperatura` → todos os andares |
| `#` | **1 ou mais níveis** (final) | `casa/terreo/#` → tudo no térreo |

▶ **PROVA:** `+` = 1 nível. `#` = vários níveis (sempre no final do tópico).



<!-- Slide 4 -->
🎯 QoS — Quality of Service

### QoS 0 — At Most Once (No máximo uma vez)

```
Publisher → [PUBLISH] → Broker → [PUBLISH] → Subscriber
```

- Envia **1 vez**, sem confirmação
- Pode **perder** mensagem
- **Menor overhead** (1 pacote)
- Uso: dados onde perder 1 leitura é aceitável

### QoS 1 — At Least Once (Ao menos uma vez)

```
Publisher → [PUBLISH] → Broker
Publisher ← [PUBACK] ← Broker
(se não receber PUBACK → reenvia)
```

- Garante entrega, mas pode **duplicar**
- Receptor deve ser **idempotente**
- Uso: alertas onde perder é inaceitável, mas duplicar é OK

▶ **PROVA:** QoS 1 pode duplicar → receptor precisa ser **idempotente** (processar 2x não causa problema).

### QoS 2 — Exactly Once (Exatamente uma vez)

```
Publisher → [PUBLISH] → Broker   (1)
Publisher ← [PUBREC] ← Broker    (2)
Publisher → [PUBREL] → Broker    (3)
Publisher ← [PUBCOMP] ← Broker   (4)
```

- **Handshake de 4 etapas**
- Garante exatamente 1 entrega, sem perdas e sem duplicatas
- **Maior overhead**, mais lento
- Uso: comandos críticos (ex.: acionar válvula, transferência financeira)

▶ **PROVA:** QoS 2 = **4 etapas** = PUBLISH → PUBREC → PUBREL → PUBCOMP.

### Sessões Persistentes

Com sessões persistentes, o broker **enfileira** mensagens de QoS 1 e 2 quando o subscriber está offline. Ao reconectar, recebe tudo que perdeu. (Esse era o requisito dos oleodutos!)



<!-- Slide 5 -->
⚖️ HTTP WebSockets vs MQTT

| Critério | HTTP WebSockets | MQTT |
|----------|-----------------|------|
| Modelo | Full-duplex bidirecional | **Pub/Sub** |
| Endereçamento | URIs | **Tópicos** |
| Retenção de mensagens | ❌ | **✅** |
| QoS configurável | ❌ | **✅ (0/1/2)** |
| Overhead | Moderado | **Mínimo (2 bytes!)** |
| Escalabilidade | Moderada | **Alta** |



<!-- Slide 6 -->
📌 Resumo Rápido

- HTTP: TCP, req/resposta, WebSockets (persistente/bi), Push (servidor→cliente)
- MQTT: IBM/1999/satélite, **broker intermediário**, payload mínimo 2 bytes
- `+` = 1 nível | `#` = vários níveis (final)
- QoS 0: fire & forget | QoS 1: ao menos 1x (duplica) | QoS 2: exatamente 1x (4 etapas)
- QoS 1 → idempotência | QoS 2 → PUBLISH→PUBREC→PUBREL→PUBCOMP
