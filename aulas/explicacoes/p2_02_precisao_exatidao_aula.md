# Precisão, Exatidão e Linearidade

## Três conceitos que todo mundo confunde, inclusive gente formada

Deixa eu te contar uma coisa que acontece todo semestre. Eu pergunto na prova: "qual a diferença entre precisão e exatidão?" E aí vem a resposta: "é a mesma coisa, professor". Vocês acreditam que alguém escreveu isso? Não é a mesma coisa. Nunca foi. E você vai sair daqui sabendo a diferença.

---

## Precisão: reprodutibilidade

**Precisão** é a capacidade de obter o mesmo resultado repetidamente. Uma medição precisa é **consistente**, mesmo que esteja errada.

Pensa num atirador de arco e flecha. Se ele acerta o mesmo ponto toda vez, mas esse ponto está no canto do alvo, longe do centro, ele é **preciso** mas **não é exato**. As flechas estão agrupadas. A variação é pequena. A reprodutibilidade é alta. Mas o valor está errado.

No Arduino: se você mede a tensão de 3,3V repetidamente e sempre lê 672, 672, 672, isso é precisão. Consistente. Estável.

---

## Exatidão: proximidade do valor real

**Exatidão** é o quão próximo você está do valor verdadeiro. Não importa se você é consistente, o que importa é se você acerta.

O mesmo atirador, agora ele manda cada flecha num lugar diferente, mas todas ficam espalhadas ao redor do centro. Ele é **pouco preciso** (as flechas variam), mas em média ele é **exato** (o centro médio está no alvo).

No Arduino: se você mede 3,3V e lê valores como 670, 675, 668, 673, há variação (pouca precisão), mas a média (~671) corresponde a ~3,28V, que é próximo do real. Isso é exatidão sem precisão.

---

## E quando você tem os dois problemas?

Pode ser preciso e inexato ao mesmo tempo: sempre lê 650 quando deveria ler 673. Consistente no erro. Isso chama **offset**, um deslocamento sistemático.

Pode ser impreciso e inexato: valores espalhados e longe do real. Esse é o pior caso.

> **PROVA:** Vocês acreditam que marcaram "medição precisa e exata são sinônimos"? Preciso = reprodutível. Exato = correto. São ortogonais, você pode ter um sem o outro.

---

## Linearidade: o comportamento ao longo da escala

**Linearidade** é o terceiro parâmetro, e esse é o mais traiçoeiro. Um sensor pode ser preciso e exato em alguns pontos da escala, mas ter um comportamento não-linear em outros.

Imagina que você calibrou seu sensor de temperatura em 0°C e em 100°C, funciona perfeitamente. Mas em 50°C ele lê 47°C. Isso é **não-linearidade**: o erro varia ao longo da faixa de medição, de forma não previsível.

No contexto do Arduino, o ADC interno tem uma certa não-linearidade, especialmente nos extremos da escala (próximo de 0 e próximo de 1023). Por isso, em medições de alta qualidade, evita-se usar os extremos.

---

## Como esses três se relacionam?

Pensa assim:
- **Precisão** combate o **ruído**, você filtra, você faz média, você reduz a variação
- **Exatidão** combate o **offset e a calibração**, você ajusta a referência, você calibra o sensor
- **Linearidade** combate a **distorção da curva**, você mapeia a resposta real e aplica correção

Nenhum desses três parâmetros tem relação obrigatória com o outro. Um sensor pode ter qualquer combinação. Anota isso porque é exatamente o que eu pergunto na prova.

> **PROVA:** "Um valor preciso pode estar incorreto?". SIM. Precisão não implica exatidão. Exemplo: sempre lê 500 quando o correto é 673. Preciso (consistente), inexato (errado).
