# Precisão, Exatidão e Linearidade

> **Prova:** P2 | **Tier:** S | **Tópico:** `precisao_exatidao`

---

## 📖 O que é Qualidade de Medição?

Todo sensor, ADC e sistema de medição tem imperfeições. O valor lido **raramente é o valor real**. Entender as fontes dessas diferenças é fundamental pra projetar qualquer sistema sério.

Existem dois tipos de erro bem distintos — e a prova vai te cobrar os dois:

---

## 🎯 Precisão (Repeatability / Stability)

**Precisão é sobre estabilidade.** Um sistema preciso sempre retorna o mesmo valor ao medir a mesma coisa — não importa se o valor está certo ou errado.

> **Analogia do Atirador:** Um atirador tem um vício — os tiros sempre desviam pra esquerda. Mas esse desvio é *consistente*: todos os tiros caem agrupados. Esse atirador é **muito preciso** (agrupados), mas **pouco exato** (longe do centro).

**Causa da imprecisão:** ruído aleatório (ruído branco). Faz a leitura "pular" pra cima e pra baixo sem padrão previsível.

**Como resolver:** Cálculo de média (simples ou móvel). O ruído aleatório se cancela com muitas amostras.

---

## 🎯 Exatidão (Accuracy)

**Exatidão é sobre estar certo.** Um sistema exato retorna valor próximo ao real — mesmo que as leituras individuais sejam instáveis.

> **Analogia:** Outro atirador sem vício de mira, mas com a mão tremendo. Os tiros se espalham pelo alvo, mas a **média** de todos cai perto do centro. **Pouco preciso**, mas **muito exato**.

**Causa da inexatidão:** erro sistemático. Algo no sistema introduz um desvio constante — referência ruim, sensor mal calibrado, temperatura afetando componente.

**Como resolver:** Comparar com referência mais exata e calcular fator de correção. A média **NÃO resolve** inexatidão.

---

## ⚠️ Os Quatro Casos

| Precisão | Exatidão | O que acontece |
|----------|----------|----------------|
| Baixa | Baixa | Tiros espalhados E longe do centro |
| Alta | Baixa | Tiros agrupados, mas longe do centro ← **erro sistemático** |
| Baixa | Alta | Tiros espalhados, mas a **média** cai no centro |
| Alta | Alta | Tiros agrupados no centro ← **ideal** |

---

▶ **PROVA:** Precisão e exatidão são **independentes** — um não implica o outro. Essa é a pegadinha clássica.

▶ **PROVA:** Inexatidão é o problema **mais grave** — sem referência externa, não há como saber que está errado.

▶ **PROVA:** Média resolve **imprecisão** (ruído aleatório). Média **NÃO resolve** inexatidão (erro sistemático).

---

## 📐 Exatidão como Percentual

Fabricantes expressam exatidão como fórmula. Ex.:

```
Exatidão: ± (2% + 2)
→ 2% do valor lido + 2 unidades da última casa decimal
```

**Exemplo:** lendo 10,0 V com exatidão ± (2% + 2):
- 2% de 10,0 = 0,20
- + 2 na última casa (centésimos) = + 0,02
- Erro total = ±0,22 V
- Valor real pode estar entre **9,78 V e 10,22 V**

---

## 📏 Linearidade

O comportamento da leitura **nem sempre corresponde** ao comportamento real do sinal medido.

- Não-linearidade ocorre principalmente nos **extremos** da faixa de operação
- Provoca erros em **pontos específicos**, não uniformemente em toda a faixa
- **Soluções:** limitar a faixa (perde resolução) ou corrigir matematicamente (polinômio)

```c
// Exemplo: correção polinomial de 2ª ordem
// valor_real = a * leitura^2 + b * leitura + c
float corrige(float leitura) {
    float a = 0.0003, b = 0.98, c = -1.2;
    return a * leitura * leitura + b * leitura + c;
}
```

▶ **PROVA:** Não-linearidade ocorre nos **extremos** da faixa, NÃO uniformemente.

---

## 🔄 Média Móvel com Vetor Circular

Técnica eficiente pra reduzir ruído. Melhor que a média simples porque é O(1) em vez de O(N).

```c
#define NUM_AMOSTRAS 16

int vetor[NUM_AMOSTRAS];
int indice = 0;
long soma = 0;

int mediaMovel(int novaAmostra) {
    soma -= vetor[indice];          // remove a mais antiga
    vetor[indice] = novaAmostra;    // grava nova
    soma += novaAmostra;            // adiciona nova à soma
    indice = (indice + 1) % NUM_AMOSTRAS;  // avança circular
    return soma / NUM_AMOSTRAS;     // retorna média
}
```

▶ **PROVA:** Média móvel usa **vetor circular** — não desloca os elementos, apenas atualiza um índice.

---

## 🗂️ Fatores da Qualidade — Universal vs Digital

| Fatores Universais | Fatores específicos de Medições Digitais |
|--------------------|------------------------------------------|
| Referência (zero e máximo da escala) | Resolução (quantos valores distintos) |
| Ruído (perturbações no sinal) | Taxa de Amostragem (frequência de medição) |
| Escala (adequar faixa do sensor ao ADC) | — |

> **Referência, ruído e escala existem em qualquer medição. Resolução e taxa de amostragem são desafios específicos do mundo digital.**

▶ **PROVA:** Saber classificar os fatores: quais são universais e quais são exclusivos de sistemas digitais.

---

## 📌 Resumo Rápido

- **Precisão** = estabilidade | ruído aleatório | resolve com **média**
- **Exatidão** = estar certo | erro sistemático | resolve com **calibração**
- **Linearidade** = relação entrada×saída linear | não-linearidade nos extremos
- Exatidão ≠ Precisão (são INDEPENDENTES)
- Inexatidão = problema mais grave
- Fatores universais: referência, ruído, escala
- Fatores digitais específicos: resolução, taxa de amostragem
