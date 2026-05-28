"""Avaliações diárias — Definição, Classificação de SE e IoT."""

QUESTOES = [
    # ── Aula: Classificação de SE e Hardware ──────────────
    {"id": "av_d01", "topico": "p1_definicao", "tipo": "MC",
     "pergunta": "Qual dos itens abaixo NÃO representa uma grandeza a ser considerada em um projeto de SE?",
     "opcoes": ["A) Indutância", "B) Campo Magnético", "C) Tensão Elétrica", "D) Corrente Elétrica"],
     "resposta": "A",
     "explicacao": "Tensão, corrente e campo magnético são grandezas físicas medidas em SE. Indutância é propriedade de componente, não grandeza de projeto."},

    {"id": "av_d02", "topico": "p1_definicao", "tipo": "MC",
     "pergunta": "Qual das características abaixo é uma DESVANTAGEM na utilização de hardwares específicos para SE?",
     "opcoes": ["A) Perda da portabilidade entre projetos diferentes",
                "B) Insensibilidade a fatores ambientais (ruídos, vibração, calor)",
                "C) Aumento do consumo energético",
                "D) Redução da performance"],
     "resposta": "A",
     "explicacao": "Hardware específico é otimizado para uma função — não serve para outros projetos (perde portabilidade)."},

    {"id": "av_d03", "topico": "p1_definicao", "tipo": "ESCREVA",
     "pergunta": "Apresente um motivo válido para adotar um SBC, ao invés de uma placa de protótipo convencional, em um projeto de SE.",
     "resposta_esperada": "Um SBC suporta aplicações mais complexas, inclusive baseadas em SOs robustos com Linux, mesmo mantendo pinos GPIO para acesso direto a sensores e atuadores. Isso os assemelha a computadores convencionais mantendo parte dos recursos de placas de protótipo."},

    {"id": "av_d04", "topico": "p1_definicao", "tipo": "ESCREVA",
     "pergunta": "Na comparação entre Raspberry Pi e Arduino Q, qual seria a principal vantagem apresentada pela linha Arduino Q?",
     "resposta_esperada": "A principal vantagem do Arduino Q nessa comparação específica é a presença de um microcontrolador dedicado à interface com o mundo físico — algo que o Raspberry Pi não possui diretamente."},

    {"id": "av_d05", "topico": "p1_definicao", "tipo": "ESCREVA",
     "pergunta": "Identifique um desafio específico dos SE automotivos que não está presente nos SE médicos, por exemplo.",
     "resposta_esperada": "SE automotivos enfrentam ruído eletromagnético intenso, altas temperaturas e vibração mecânica constante — fatores ambientais que geralmente não estão presentes em equipamentos médicos de ambiente controlado."},

    # ── Aula: IoT ─────────────────────────────────────────
    {"id": "av_d06", "topico": "p1_iot", "tipo": "MC",
     "pergunta": "Por que se diz que o IoT possui uma rede com 'topologia dinâmica'?",
     "opcoes": ["A) Porque os dispositivos podem entrar ou sair a qualquer momento",
                "B) Porque funciona bem nas topologias estrela, barramento e anel",
                "C) Porque admitem distâncias variáveis entre os dispositivos",
                "D) Porque podemos ter diversos servidores conectados"],
     "resposta": "A",
     "explicacao": "Em IoT, dispositivos conectam e desconectam dinamicamente — diferente de redes industriais fixas."},

    {"id": "av_d07", "topico": "p1_iot", "tipo": "MC",
     "pergunta": "Por que a criptografia, mecanismo muito utilizado em segurança, tem aplicação limitada em IoT?",
     "opcoes": ["A) Consumo energético derivado do processamento",
                "B) Recursos limitados de rede",
                "C) Tempo de resposta",
                "D) Desenvolvimento tecnológico"],
     "resposta": "A",
     "explicacao": "Algoritmos de criptografia são computacionalmente pesados. Dispositivos IoT têm bateria limitada — criptografia drenaria rapidamente."},

    {"id": "av_d08", "topico": "p1_iot", "tipo": "MC",
     "pergunta": "Tecnologias específicas de IoT (LoWPAN, Zigbee, RFID) — o que normalmente trazem de diferente?",
     "opcoes": ["A) Mais desempenho",
                "B) Maior alcance",
                "C) Maior flexibilidade e compatibilidade",
                "D) Menor consumo energético"],
     "resposta": "D",
     "explicacao": "Tecnologias IoT específicas sacrificam velocidade e alcance por menor consumo energético — essencial para dispositivos com bateria."},
]
