# Semicondutores e Diodos

## O material que mudou o mundo

Antes do transistor, computadores usavam válvulas termiônicas, dispositivos do tamanho de lâmpadas que consumiam watts e falhavam constantemente. O transistor de 1947, inventado na Bell Labs, mudou tudo. E o transistor é feito de **semicondutor**.

O semicondutor mais comum é o **silício** (Si). O nome vem de suas propriedades elétricas: nem condutor (como o cobre), nem isolante (como a borracha), algo no meio, controlável.

---

## Bandas de Energia

Para entender semicondutores, você precisa de um modelo básico de física do estado sólido. Elétrons em um cristal sólido só podem existir em certas faixas de energia, as **bandas de energia**.

**Banda de valência:** banda mais alta com elétrons em condições normais. Elétrons aqui estão "presos" aos átomos.

**Banda de condução:** banda acima da de valência. Elétrons aqui são livres para se mover, contribuem para a corrente elétrica.

**Gap de energia:** a separação entre as duas bandas.

- **Condutor (metal):** gap inexistente, elétrons transitam livremente. Alta condutividade.
- **Isolante:** gap enorme, elétrons raramente conseguem atravessar. Quase zero de condutividade.
- **Semicondutor:** gap pequeno, com energia térmica suficiente (ou dopagem), elétrons atravessam. Condutividade controlável.

---

## Dopagem: criando Tipo N e Tipo P

O silício puro (intrínseco) tem conductividade limitada. A **dopagem** é a adição intencional de impurezas para alterar as propriedades elétricas.

**Tipo N (Negativo):** dopagem com átomos que têm elétrons a mais (fósforo, arsênio). Esses elétrons extras ficam livres para conduzir corrente. Portadores majoritários são **elétrons** (carga negativa).

**Tipo P (Positivo):** dopagem com átomos que têm elétrons a menos (boro, alumínio). Criam "buracos", ausências de elétron que se comportam como portadores de carga positiva. Portadores majoritários são **buracos**.

Juntando N e P, você cria a junção PN, o elemento básico de diodos e transistores.

---

## A Junção P-N e a Zona de Depleção

Quando você coloca material Tipo P em contato com Tipo N, acontece algo interessante. Os elétrons livres do lado N migram para o lado P (onde há buracos para preencher), e os buracos do P migram para o N.

Essa migração cria uma região chamada **zona de depleção**: uma faixa sem portadores livres, com um campo elétrico interno. Esse campo elétrico cria uma barreira de potencial (≈ 0,6V para silício) que impede mais migração em condições de equilíbrio.

É essa barreira que dá ao diodo sua propriedade fundamental.

---

## O Diodo: a válvula de uma via

O diodo é simplesmente uma junção P-N encapsulada. Comportamento:

**Polarização direta (forward bias):** você aplica tensão positiva no lado P e negativa no N, reduz a barreira de potencial. Acima de ≈ 0,6V (silício), a barreira vence e corrente flui livremente. O diodo conduz.

**Polarização reversa (reverse bias):** tensão positiva no N, negativa no P, aumenta a barreira. Nenhuma corrente flui (exceto uma ínfima corrente de fuga). O diodo bloqueia.

Isso faz o diodo agir como uma **válvula unidirecional**.

---

## Tipos de Diodo relevantes para Sistemas Embarcados

**Diodo retificador:** converte AC em DC. Os quatro diodos de uma ponte retificadora transformam a tensão alternada da tomada em corrente contínua para o regulador da fonte.

**Diodo Zener:** projetado para operar em polarização reversa na **tensão de Zener** (V_z), onde conduz mesmo no sentido reverso mas sem se destruir (dentro dos limites de potência). Usado como regulador de tensão de referência.

**LED (Light Emitting Diode):** diodo que emite luz quando polarizado diretamente. A queda de tensão varia com a cor: vermelho ≈ 1,8-2V, verde ≈ 2-2,5V, azul/branco ≈ 3-3,5V.

**Diodo de proteção (flyback):** quando você desliga um indutor (bobina de relê, motor), a energia armazenada no campo magnético precisa ir a algum lugar. Sem proteção, cria um pico de tensão reversa que pode destruir o transistor ou pino do Arduino. O diodo flyback (em paralelo com o indutor, polarizado reversamente) absorve esse pico.

> **PROVA:** Vocês acreditam que alguém ligou um relê diretamente no pino do Arduino sem diodo de proteção? O relê tem uma bobina, é um indutor. Quando você desliga, a tensão na bobina sobe para dezenas de volts no sentido reverso. Sem o diodo flyback, essa tensão vai diretamente para o pino do ATMega. Adeus chip. Diodo de proteção é obrigatório em qualquer circuito com carga indutiva.
