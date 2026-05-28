# Introdução a Sistemas Embarcados

## O que é um sistema embarcado, de verdade

Você está rodeado de sistemas embarcados agora. O roteador Wi-Fi, o micro-ondas, o ar-condicionado, o controle remoto, provavelmente seu carro, talvez seu relógio. Todos têm em comum: um processador dedicado a uma função específica, integrado ao produto, invisível ao usuário.

Um **sistema embarcado** é um sistema computadorizado construído para realizar uma função específica dentro de um sistema maior. A palavra "embarcado" vem de "embutido", o computador está embarcado dentro do produto, não é um computador de propósito geral.

Três palavras definem a essência:
- **Dedicado**: feito para uma tarefa, não várias
- **Integrado**: faz parte do produto final
- **Invisível**: o usuário não percebe que há um processador ali

---

## Por que não usar um PC para tudo?

Pergunta legítima. A resposta é custo, consumo, tamanho e confiabilidade.

Um microcontrolador de R$ 5 controla o motor de uma lavadora. Um PC capaz de fazer o mesmo custaria 100x mais, consumiria 1000x mais energia, e teria 1000x mais pontos de falha. O sistema embarcado é projetado para aquela função, nada mais, nada menos.

Isso cria uma restrição interessante: o desenvolvedor de sistemas embarcados precisa ser eficiente. Não há memória sobrando. Não há CPU sobrando. Cada byte importa.

---

## Computação de Borda (Edge Computing)

Um conceito cada vez mais relevante: em vez de enviar todos os dados para a nuvem processar, você processa **na borda**, no próprio dispositivo embarcado, perto de onde os dados são gerados.

Por quê? Latência. Se um sensor de segurança industrial detecta uma anomalia e precisa parar uma máquina em 5 ms, não dá para mandar o dado para um servidor em São Paulo e aguardar a resposta. O processamento precisa ser local, imediato.

Edge computing é o que transforma um simples sensor em um dispositivo inteligente.

---

## A interface com o usuário (ou a falta dela)

Muitos sistemas embarcados não têm interface alguma com o usuário. Um controlador de motor não tem tela, não tem teclado. Ele recebe comandos por barramento de campo e controla o motor. Ponto.

Quando há interface, ela é simples: alguns botões, um display de 7 segmentos, alguns LEDs. Nada comparável a uma interface gráfica de PC.

Essa simplicidade não é limitação, é design intencional. Complexidade custa dinheiro e cria pontos de falha.

> **PROVA:** "Sistema embarcado tem que ter interface com usuário?". Não necessariamente. Muitos sistemas embarcados industriais e automotivos operam sem qualquer interface direta. A definição não exige interface.
