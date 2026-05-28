# Transistores BJT como Chave

## O transistor: o dispositivo que define a era moderna

Dois transistores PN juntos, isso é o BJT (Bipolar Junction Transistor). Existem dois tipos: **NPN** e **PNP**, definidos pela ordem das camadas.

No NPN: uma camada P (base) entre duas N (emissor e coletor).
No PNP: uma camada N (base) entre duas P.

Para sistemas embarcados, o NPN é mais comum e mais intuitivo. Vamos focar nele.

---

## Os três terminais e o princípio de funcionamento

O BJT tem três terminais: **Emissor (E)**, **Base (B)** e **Coletor (C)**.

O princípio fundamental: **uma pequena corrente na base controla uma corrente muito maior entre coletor e emissor**. Isso é a amplificação.

Matematicamente: I_C = β × I_B, onde β (beta, ou hFE) é o ganho de corrente, tipicamente entre 50 e 300 para transistores comuns.

Em sistemas embarcados raramente usamos transistores para amplificar sinais analógicos. Usamos como **chave digital**, ligado ou desligado.

---

## Polarizando o transistor como chave

Para usar o BJT NPN como chave, você opera em dois estados:

**Zona de corte (chave aberta):** base sem corrente (ou tensão V_BE < 0,6V). Transistor bloqueado. I_C ≈ 0. A carga conectada ao coletor não recebe corrente.

**Zona de saturação (chave fechada):** base com corrente suficiente para "saturar" o transistor. V_CE cai para ≈ 0,2V. O transistor conduz ao máximo, a corrente é limitada apenas pela carga, não pelo transistor.

Para garantir saturação, calcula-se a corrente de base necessária: I_B = I_C / β, com uma margem de segurança. Na prática, usa-se o dobro do necessário para garantir saturação mesmo com variações de β.

---

## Por que usar transistor em vez de ligar direto no Arduino?

O pino do Arduino fornece no máximo **40 mA** (máximo absoluto) e idealmente não deve passar de 20 mA. Um motor DC pequeno pode consumir 500 mA. Um relê pode precisar de 100 mA para acionar a bobina.

O transistor resolve isso: o pino do Arduino fornece 1-5 mA para a base, e o transistor libera a corrente necessária para a carga pelo coletor, diretamente da fonte de alimentação, sem passar pelo Arduino.

> **PROVA:** Vocês acreditam que marcaram que um transistor em saturação amplifica o sinal? Na saturação, o transistor está completamente aberto, é uma chave fechada, não um amplificador. A tensão V_CE é fixa em ~0,2V independente da corrente de base. Amplificação ocorre na região ativa, não na saturação.

---

## Configuração típica para acionar um relê

Carga (relê) entre VCC e coletor. Base conectada ao pino Arduino via resistor de base (para limitar I_B). Emissor em GND. Diodo flyback em paralelo com a bobina do relê (catodo para VCC, anodo para coletor).

Quando o Arduino coloca o pino em HIGH: corrente flui pela base → transistor satura → corrente passa pelo relê → relê aciona.
Quando o Arduino coloca LOW: I_B = 0 → transistor corta → relê desliga → pico de tensão da bobina é absorvido pelo diodo.

---

## Darlington: amplificação em cascata

O **par Darlington** conecta dois transistores em cascata: o emissor do primeiro alimenta a base do segundo. O ganho total é β1 × β2, pode chegar a 10.000 ou mais.

Isso permite que uma corrente de base de microampères acione cargas de ampères. Usado em drivers de motor, relês de alta potência. O ULN2003 e ULN2803 são CIs populares com 7 ou 8 pares Darlington integrados, muito usados com Arduino para acionar múltiplos relês.

---

## Modos de operação, resumo

| Modo | V_BE | V_CE | Estado | Uso |
|------|------|------|--------|-----|
| Corte | < 0,6V | ≈ VCC | Desligado | Chave aberta |
| Ativo | ≈ 0,6V | entre | Amplificador | Áudio, RF |
| Saturação | > 0,6V | ≈ 0,2V | Ligado | Chave fechada |

Em sistemas embarcados: corte e saturação. Região ativa fica para eletrônica analógica.
