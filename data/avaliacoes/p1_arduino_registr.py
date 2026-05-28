"""Avaliações diárias — Arduino GPIOs e Registradores."""

QUESTOES = [
    # ── Aula: GPIOs e saídas digitais ────────────────────
    {"id": "av_a01", "topico": "p1_arduino", "tipo": "MC",
     "pergunta": "Identifique abaixo o item que NÃO representa um desafio no tratamento de botões e chaves como entradas digitais:",
     "opcoes": ["A) Isolamento elétrico entre o circuito acionador e o circuito que alimenta a carga",
                "B) Suporte a entradas analógicas",
                "C) Debouncing",
                "D) Circuitos de pull-down e pull-up"],
     "resposta": "B",
     "explicacao": "Botões são entradas DIGITAIS. 'Suporte a analógicas' não é desafio de botões. Desafios reais: debouncing, pull-up/down, isolamento em cargas pesadas."},

    {"id": "av_a02", "topico": "p1_arduino", "tipo": "MC",
     "pergunta": "Identifique DUAS vantagens do uso de relês convencionais como saídas digitais de SE. (Assinale as duas corretas)",
     "opcoes": ["A) Performance",
                "B) Isolamento do circuito acionador em relação à carga",
                "C) Suporte a cargas de qualquer tipo (DC e AC)",
                "D) Consumo energético"],
     "resposta": "BC",
     "explicacao": "Relê: isolamento elétrico (protege o µC) + suporte a DC e AC (qualquer tipo de carga). Performance e consumo NÃO são vantagens do relê."},

    {"id": "av_a03", "topico": "p1_arduino", "tipo": "ESCREVA",
     "pergunta": "Por que o movimento do cursor do Potenciômetro não provoca um curto-circuito entre a saída de 5V e o GND do Arduino, já que em uma de suas extremidades chegamos a zero volts?",
     "resposta_esperada": "O cursor do potenciômetro não provoca curto porque há resistência fixa entre os extremos (a trilha resistiva completa). O cursor apenas divide essa resistência — nunca a elimina. Assim, mesmo com 0V na saída, há resistência limitando a corrente."},

    # ── Aula: Registradores ───────────────────────────────
    {"id": "av_r01", "topico": "p1_registr", "tipo": "MC",
     "pergunta": "O acesso direto aos registradores de um µC pode trazer algumas vantagens. Qual dos itens listados NÃO É uma delas?",
     "opcoes": ["A) Maior simplicidade e transparência do código",
                "B) Menor ocupação de memória pelo código",
                "C) Maior performance",
                "D) Acesso a recursos indisponíveis através do acesso de 'alto nível'"],
     "resposta": "A",
     "explicacao": "Código com registradores é mais complexo e menos legível. Vantagens reais: menor memória, maior velocidade, acesso a recursos que a API do Arduino não expõe."},

    {"id": "av_r02", "topico": "p1_registr", "tipo": "MC",
     "pergunta": "Existem 2 diferentes formas de se carregar um valor binário em um registrador: a carga direta do valor, ou o uso de expressões lógicas OU e E para definir bits específicos. Qual a vantagem do segundo método?",
     "opcoes": ["A) Não há necessidade de criação de constantes ou variáveis internas pelo compilador, reduzindo o tamanho do código",
                "B) Carga mais rápida",
                "C) Garantir a manutenção dos valores já existentes em outros bits",
                "D) Uso de linguagem de baixo nível, reduzindo o tamanho do código"],
     "resposta": "C",
     "explicacao": "PORTB = 0b00100000 zera todos os outros bits. PORTB |= (1<<PB5) preserva os demais — comportamento non-destructive, essencial ao programar registradores."},

    {"id": "av_r03", "topico": "p1_registr", "tipo": "MC",
     "pergunta": "Nas operações de atribuição de valores a bits, podemos dizer que: (assinale as DUAS corretas)",
     "opcoes": ["A) Lógica OU pode 'setar' bits específicos (colocar valor 1)",
                "B) Lógica E pode 'resetar' bits específicos (colocar valor 0)",
                "C) Lógica OU EXCLUSIVO pode 'setar' bits específicos (colocar valor 1)",
                "D) Lógica NOT com operador '!' pode inverter todos os bits de uma palavra"],
     "resposta": "AB",
     "explicacao": "OR (|) com máscara 1 → ativa bits. AND (&) com máscara 0 → desativa bits. XOR (^) inverte. NOT (~) em C inverte bit a bit mas não é o '!'."},

    {"id": "av_r04", "topico": "p1_registr", "tipo": "MC",
     "pergunta": "Qual o valor resultante da operação ~18 (NOT bit a bit de 18)?",
     "opcoes": ["A) B00010010", "B) 237", "C) -18", "D) False"],
     "resposta": "B",
     "explicacao": "18 = 0b00010010. ~18 inverte todos os bits em 8 bits → 0b11101101 = 237."},
]
