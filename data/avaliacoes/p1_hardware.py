"""Avaliações diárias — Hardware: µP vs µC, Arquiteturas, Memória."""

QUESTOES = [
    # ── Aula: µP vs µC ───────────────────────────────────
    {"id": "av_h01", "topico": "p1_hardware", "tipo": "ESCREVA",
     "pergunta": "Liste ao menos duas características que distinguem os microprocessadores dos microcontroladores.",
     "resposta_esperada": "Microprocessadores obedecem à arquitetura Von Neumann, exigem diversos componentes auxiliares externos para operar e têm clocks mais rápidos. Microcontroladores integram CPU+memória+periféricos e usam Harvard."},

    {"id": "av_h02", "topico": "p1_hardware", "tipo": "MC",
     "pergunta": "Identifique abaixo uma característica que diferencia uma placa-mãe de µP de uma placa de protótipo de µC:",
     "opcoes": ["A) Fonte de alimentação externa apenas nas placas-mãe",
                "B) Interfaces de comunicação integradas apenas nas placas de protótipo",
                "C) Projeto específico para cada processador, apenas nas placas-mãe",
                "D) Uma placa de protótipo pode ser descartada em muitos projetos, utilizando-se diretamente o processador"],
     "resposta": "D",
     "explicacao": "Placas de protótipo facilitam o desenvolvimento mas podem ser removidas do produto final — o µC fica diretamente no circuito."},

    {"id": "av_h03", "topico": "p1_hardware", "tipo": "MC",
     "pergunta": "Qual dos itens NÃO é adotado como técnica para redução de consumo de um microcontrolador?",
     "opcoes": ["A) Redução da tensão de alimentação",
                "B) Desativação de parte das portas GPIO",
                "C) Redução do clock",
                "D) Modo 'sleep'"],
     "resposta": "B",
     "explicacao": "GPIOs não consomem energia significativa sozinhas. Técnicas reais: reduzir tensão/clock, desligar periféricos internos, modo sleep."},

    {"id": "av_h04", "topico": "p1_hardware", "tipo": "MC",
     "pergunta": "Há um recurso que nem sempre está disponível no µC, mas pode ser implementado por software em GPIO. Qual é?",
     "opcoes": ["A) Entrada para clock externo",
                "B) Conversor analógico/digital (ADC)",
                "C) Porta de comunicação UART, I2C ou SPI",
                "D) Pino de leitura para interrupções externas"],
     "resposta": "C",
     "explicacao": "UART, I2C e SPI podem ser emuladas via bit-banging (software em GPIO). ADC e clock externo não se emulam em software."},

    {"id": "av_h05", "topico": "p1_hardware", "tipo": "MC",
     "pergunta": "A miniaturização usa SMD, QFP e BGA para tratar qual fator físico limitante?",
     "opcoes": ["A) A necessidade de conexão física/elétrica do µC ao circuito e os pinos necessários",
                "B) A técnica de litografia disponível para fabricação",
                "C) A dissipação de potência pelos microcontroladores",
                "D) A dificuldade de fabricação, montagem e manutenção"],
     "resposta": "A",
     "explicacao": "O fator limitante são os pinos de conexão física. SMD/QFP/BGA reduzem espaço mantendo as conexões elétricas."},

    # ── Aula: Arquitetura (barramentos, tri-state, latches) ──
    {"id": "av_h06", "topico": "p1_hardware", "tipo": "MC",
     "pergunta": "Dispositivos computacionais tipicamente têm 3 barramentos. Em SE há sistemas com mais barramentos. O que determina isso?",
     "opcoes": ["A) O uso da arquitetura de Von Neumann",
                "B) O uso da arquitetura de Harvard",
                "C) A necessidade de acesso simultâneo a vários processadores",
                "D) O baixo consumo energético"],
     "resposta": "B",
     "explicacao": "Harvard separa memórias de código e dados com barramentos distintos → mais de 3 barramentos."},

    {"id": "av_h07", "topico": "p1_hardware", "tipo": "MC",
     "pergunta": "Para compatibilizar o acesso de múltiplos dispositivos aos dados sem problemas de compartilhamento, utiliza-se o...",
     "opcoes": ["A) ... fanout.",
                "B) ... barramento de dados.",
                "C) ... tri-state.",
                "D) ... Bus Request."],
     "resposta": "C",
     "explicacao": "Tri-state permite que um dispositivo 'solte' o barramento (alta impedância), evitando conflito de saídas simultâneas."},

    {"id": "av_h08", "topico": "p1_memoria", "tipo": "MC",
     "pergunta": "Para armazenamento TEMPORÁRIO, usa-se um componente específico em SE. Identifique-o:",
     "opcoes": ["A) Buffers", "B) Latches", "C) Drivers", "D) Memória EEPROM"],
     "resposta": "B",
     "explicacao": "Latches são registradores de armazenamento temporário usados no barramento de dados para manter valores estáveis."},
]
