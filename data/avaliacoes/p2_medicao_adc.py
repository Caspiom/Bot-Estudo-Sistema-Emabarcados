"""Avaliações diárias — Medição Analógica, ADC, Precisão, Exatidão, Referências."""

QUESTOES = [
    # ── Aula: Precisão, Exatidão, Linearidade ────────────
    {"id": "av_q01", "topico": "p2_medicao", "tipo": "MC",
     "pergunta": "Qual das afirmativas abaixo está correta quando avaliamos os conceitos de precisão e exatidão?",
     "opcoes": ["A) Quando há muita variação nos valores medidos, mas a média destes valores é muito próxima do valor real, temos um problema de exatidão, mas não de precisão",
                "B) Quando temos diversos valores medidos sempre muito próximos, porém ainda distantes do valor real, temos um problema de exatidão, e não de precisão",
                "C) Toda medição com exatidão também é precisa",
                "D) Toda medição com precisão também é exata"],
     "resposta": "B",
     "explicacao": "Valores próximos entre si = PRECISO. Distante do real = INEXATO. Pode ser preciso E inexato ao mesmo tempo (erro sistemático)."},

    {"id": "av_q02", "topico": "p2_medicao", "tipo": "ESCREVA",
     "pergunta": "Um valor preciso pode estar incorreto? Explique.",
     "resposta_esperada": "Sim. A precisão está associada à estabilidade no valor medido (reprodutibilidade), e não à sua exatidão. Na medição de valores fixos, medidas precisas se repetem, mesmo que estejam erradas (erro sistemático)."},

    {"id": "av_q03", "topico": "p2_medicao", "tipo": "MC",
     "pergunta": "O local mais provável para ocorrência de falhas de precisão é...",
     "opcoes": ["A) ... o meio da escala, entre o valor mínimo e máximo",
                "B) ... o início da escala, quando os valores são mínimos",
                "C) ... o final da escala, quando os valores são máximos",
                "D) ... em qualquer ponto, pois não depende do valor medido"],
     "resposta": "A",
     "explicacao": "A não-linearidade (e por consequência falhas de precisão) ocorre tipicamente no MEIO da escala, onde a resposta do sensor desvia mais da reta ideal."},

    {"id": "av_q04", "topico": "p2_medicao", "tipo": "MC",
     "pergunta": "A exatidão é apresentada em sensores digitais no formato ±(X%+Y). Identifique os valores X e Y: (assinale as duas corretas)",
     "opcoes": ["A) X é o percentual ACIMA OU ABAIXO do valor real que foi apresentado na medição",
                "B) Y é a variação da exatidão com a temperatura",
                "C) X é a variação da precisão na medida",
                "D) Y é a variação no último dígito medido"],
     "resposta": "AD",
     "explicacao": "X% = erro percentual relativo ao valor real. Y = variação no último dígito (resolução). Ex: ±(2%+2): lendo 10,0 → real entre 9,78 e 10,22."},

    {"id": "av_q05", "topico": "p2_medicao", "tipo": "MC",
     "pergunta": "A falta de LINEARIDADE na leitura de um sensor pode ser contornada por diversas técnicas. Indique a única técnica que NÃO deve ser utilizada:",
     "opcoes": ["A) Cálculo da Média Móvel",
                "B) Seleção de uma faixa de valores na zona linear do gráfico de resposta do sensor",
                "C) Usar uma equação matemática para tornar linear a resposta do sensor",
                "D) Limitar o uso ao trecho linear do gráfico"],
     "resposta": "A",
     "explicacao": "Média Móvel cancela RUÍDO ALEATÓRIO (imprecisão). Não resolve não-linearidade — o erro sistemático permanece após a média."},

    # ── Aula: Referências ADC e leituras ──────────────────
    {"id": "av_q06", "topico": "p2_medicao", "tipo": "MC",
     "pergunta": "Um Arduíno Uno pode ter diferentes fontes de referência de tensão. Indique a única que NÃO É uma destas fontes:",
     "opcoes": ["A) Tensão de alimentação",
                "B) Uma pilha convencional conectada à porta AREF",
                "C) Valor fixo e igual a 1,1V, disponível internamente",
                "D) Fonte externa de referência"],
     "resposta": "B",
     "explicacao": "AREF aceita referência externa REGULADA. Pilha convencional (não regulada) danificaria o ADC. Fontes válidas: DEFAULT (Vcc), INTERNAL (1,1V), EXTERNAL (regulada no AREF)."},

    {"id": "av_q07", "topico": "p2_adc", "tipo": "MC",
     "pergunta": "A função analogRead(), junto com digitalRead(), podem ser utilizadas com diversas portas. Assinale a opção que NÃO PODERIA ser utilizada:",
     "opcoes": ["A) analogRead(A1)", "B) analogRead(10)", "C) analogRead(A3)", "D) digitalRead(10)"],
     "resposta": "B",
     "explicacao": "analogRead() só aceita pinos analógicos (A0-A5). Pino 10 é digital apenas. digitalRead(10) é válido para leitura digital."},

    {"id": "av_q08", "topico": "p2_adc", "tipo": "MC",
     "pergunta": "A placa do Arduíno Uno R3 oferece diversas opções de fontes de tensão para experimentos. Assinale a opção que NÃO PODE ser utilizada como fonte de tensão:",
     "opcoes": ["A) 5 volts", "B) 3,3 volts", "C) 1,1 volts", "D) GND (0 volts)"],
     "resposta": "C",
     "explicacao": "1,1V é a referência INTERNA do ADC — não é um pino de alimentação disponível na placa. Não existe saída de 1,1V no Arduino Uno."},

    {"id": "av_q09", "topico": "p2_adc", "tipo": "MC",
     "pergunta": "Na leitura de tensões entre 0 e 5V na entrada analógica, com base no número de contagens do Arduíno Uno, quantos dígitos depois da vírgula podemos usar?",
     "opcoes": ["A) Nenhum (0)", "B) Um dígito", "C) Dois dígitos", "D) Três dígitos"],
     "resposta": "C",
     "explicacao": "Resolução = 5V/1023 ≈ 4,89mV. Tensão mínima representável: ~0,00489V → dois dígitos após a vírgula em volts (casas dos centésimos)."},

    {"id": "av_q10", "topico": "p2_adc", "tipo": "ESCREVA",
     "pergunta": "No experimento de leitura de valores de tensão na porta analógica do Arduíno Uno, há cuidados especiais ao fazer a leitura de uma tensão externa. Identifique ao menos dois destes problemas.",
     "resposta_esperada": "1) Ruído: a tensão externa pode trazer ruído eletromagnético que interfere na leitura. 2) Compartilhamento do GND: é obrigatório conectar o GND da fonte externa ao GND do Arduino, caso contrário a leitura fica errada (referência flutuante). 3) Não exceder a tensão Vref (5V) para não danificar o ADC."},

    # ── Aula: Correção de problemas (tabela) ──────────────
    {"id": "av_q11", "topico": "p2_medicao", "tipo": "MC",
     "pergunta": "Associe as ações de correção ao problema correspondente:\n  Cálculo da Média Móvel → ?  |  Calibração → ?  |  Substituir fonte USB por fonte externa → ?",
     "opcoes": ["A) Média=Inexatidão | Calibração=Ruído | USB=Instabilidade de tensão",
                "B) Média=Ruído | Calibração=Inexatidão | USB=Instabilidade de tensão",
                "C) Média=Instabilidade | Calibração=Ruído | USB=Inexatidão",
                "D) Todas resolvem todos os problemas"],
     "resposta": "B",
     "explicacao": "Média Móvel: cancela ruído aleatório. Calibração: corrige offset sistemático (inexatidão). Fonte externa: elimina instabilidade da tensão de referência USB."},

    {"id": "av_q12", "topico": "p2_adc", "tipo": "MC",
     "pergunta": "Alguns projetos exigem leitura simultânea de diversos valores analógicos. Até quantos valores podem ser lidos simultaneamente (de forma multiplexada) por uma placa Arduíno Uno?",
     "opcoes": ["A) 7", "B) 6", "C) 2", "D) Apenas 1"],
     "resposta": "D",
     "explicacao": "O ATMega328P tem UM ADC multiplexado entre os 6 canais analógicos. Lê APENAS 1 canal por vez — não é simultâneo, é sequencial (multiplexado)."},
]
