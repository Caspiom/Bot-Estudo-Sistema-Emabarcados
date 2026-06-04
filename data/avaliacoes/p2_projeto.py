"""Avaliações diárias — Projeto de SE: Linguagens, PLCs e Protocolos."""

QUESTOES = [
    {"id": "av_p01", "topico": "p2_projeto", "tipo": "MC",
     "gabarito_ia": True,
     "pergunta": "Identifique, entre as opções abaixo, qual é a única que NÃO É uma linguagem de programação utilizada em PLCs:",
     "opcoes": ["A) LD (Ladder)",
                "B) C++",
                "C) FCB (Function Block Diagram)",
                "D) SFC (Sequential Function Chart)"],
     "resposta": "B",
     "explicacao": "PLCs seguem o padrão IEC 61131-3: Ladder (LD), Function Block Diagram (FBD), Structured Text (ST), Instruction List (IL) e Sequential Function Chart (SFC). C++ é linguagem de propósito geral — não faz parte desse padrão."},

    {"id": "av_p02", "topico": "p2_projeto", "tipo": "ESCREVA",
     "gabarito_ia": True,
     "pergunta": "Associe as características típicas à linguagem de programação para Sistemas Embarcados Abertos: Python, Assembly e C++.",
     "resposta_esperada": "Assembly: Alta performance, baixa portabilidade (acesso direto ao hardware, código específico por arquitetura). C++: Boa performance e portabilidade, complexidade baixa comparado ao Assembly (padrão em SE abertos como Arduino). Python: Facilidade para acesso a bibliotecas de Aprendizado de Máquina, Reconhecimento de Imagens etc (alto nível, ecosistema ML rico)."},

    {"id": "av_p03", "topico": "p2_projeto", "tipo": "MC",
     "gabarito_ia": True,
     "pergunta": "Para converter um programa escrito em Ladder para um sistema de automação proprietário para um sistema aberto em C++, utilizamos:",
     "opcoes": ["A) Um compilador cruzado",
                "B) Um compilador source-to-source",
                "C) É necessário desenvolver de novo todo o código"],
     "resposta": "B",
     "explicacao": "Um compilador source-to-source (transpiler) traduz código entre linguagens de programação mantendo o mesmo nível de abstração — ex: Ladder → C++. Compilador cruzado gera código para outra arquitetura de hardware, não muda a linguagem."},

    {"id": "av_p04", "topico": "p2_projeto", "tipo": "ESCREVA",
     "gabarito_ia": True,
     "pergunta": "Dos protocolos UART, I2C, SPI, ZigBee, CAN, LoRa e ESP-Now: identifique quais são sem fio e coloque-os em ordem crescente de alcance (1=menor, 3=maior). Os demais são cabeados.",
     "resposta_esperada": "Sem fio em ordem crescente de alcance: 1) ZigBee (~10–100m, WPAN), 2) ESP-Now (~200–400m, Wi-Fi proprietário Espressif), 3) LoRa (km de alcance, LPWAN). Cabeados: UART, I2C, SPI, CAN."},
]
