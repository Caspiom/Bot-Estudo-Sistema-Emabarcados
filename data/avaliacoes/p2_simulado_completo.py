"""Simulado Completo — 30 questões discursivas da Apostila P2."""

QUESTOES = [

    # ── Seção A — Qualidade da Medição (Q1–Q6) ───────────────────────────────

    {"id": "sc_q01", "topico": "p2_precisao_exatidao", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Um sensor de pressão é testado 10 vezes no mesmo ponto e retorna:\n"
         "  5,01 / 5,00 / 5,02 / 4,99 / 5,01 / 5,00 / 5,02 / 5,01 / 5,00 / 5,01 bar\n"
         "O valor real é 4,80 bar. Como você classifica esse sensor?\n"
         "(Cite: precisão, exatidão, tipo de erro)"
     ),
     "resposta_esperada": (
         "Alta PRECISÃO (variação < 0,02 bar — leituras muito agrupadas). "
         "Baixa EXATIDÃO (média ≈ 5,007 bar está longe do real 4,80). "
         "Erro sistemático: o sensor sempre lê ~5% a mais. "
         "Diagnóstico: preciso e inexato."
     ),
     "passos": [
         "Passo 1 — Analise a DISPERSÃO das leituras:\n"
         "  Valores: 5,01 / 5,00 / 5,02 / 4,99 / 5,01 / 5,00 / 5,02 / 5,01 / 5,00 / 5,01\n"
         "  Variação máxima = 5,02 − 4,99 = 0,03 bar → leituras muito agrupadas.\n"
         "  → Alta PRECISÃO (o sensor é estável, repete o mesmo valor).",

         "Passo 2 — Calcule a MÉDIA das leituras:\n"
         "  Soma = 5,01+5,00+5,02+4,99+5,01+5,00+5,02+5,01+5,00+5,01 = 50,07\n"
         "  Média = 50,07 / 10 = 5,007 bar\n"
         "  Valor real = 4,80 bar → diferença = 5,007 − 4,80 = 0,207 bar (≈ 5% a mais).",

         "Passo 3 — Classifique a EXATIDÃO:\n"
         "  A média (5,007) está LONGE do real (4,80).\n"
         "  → Baixa EXATIDÃO. O sensor tem um vício — erro sistemático constante.",

         "Conclusão — Diagnóstico final:\n"
         "  ✓ Precisão: ALTA   (leituras agrupadas, variação < 0,03 bar)\n"
         "  ✗ Exatidão: BAIXA  (média distante do valor real)\n"
         "  Tipo de erro: SISTEMÁTICO (sempre lê ~5% a mais)\n"
         "  Analogia: atirador com tiros agrupados, mas todos longe do centro.",
     ]},

    {"id": "sc_q02", "topico": "p2_precisao_exatidao", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Um sensor retorna para o mesmo ponto de 4,80 bar:\n"
         "  4,85 / 4,79 / 4,75 / 4,83 / 4,81 / 4,78 / 4,80 / 4,82 / 4,76 / 4,81 bar\n"
         "Como você classifica esse sensor?"
     ),
     "resposta_esperada": (
         "Baixa PRECISÃO (variação de 0,10 bar — leituras espalhadas). "
         "Alta EXATIDÃO (média ≈ 4,80 bar muito próxima do real). "
         "Ruído aleatório sem erro sistemático. "
         "Diagnóstico: impreciso e exato."
     ),
     "passos": [
         "Passo 1 — Analise a DISPERSÃO:\n"
         "  Valores vão de 4,75 a 4,85 bar → variação = 0,10 bar.\n"
         "  Leituras espalhadas → Baixa PRECISÃO.",

         "Passo 2 — Calcule a MÉDIA:\n"
         "  Soma = 4,85+4,79+4,75+4,83+4,81+4,78+4,80+4,82+4,76+4,81 = 48,00\n"
         "  Média = 48,00 / 10 = 4,80 bar\n"
         "  Valor real = 4,80 bar → diferença = 0,00 bar!",

         "Conclusão:\n"
         "  ✗ Precisão: BAIXA  (leituras espalhadas, variação = 0,10 bar)\n"
         "  ✓ Exatidão: ALTA   (média = valor real)\n"
         "  Tipo de erro: ALEATÓRIO (ruído) — a média RESOLVE, mas cada leitura isolada é imprecisa.\n"
         "  Analogia: atirador com mão tremendo, mas a média dos tiros cai no centro.",
     ]},

    {"id": "sc_q03", "topico": "p2_precisao_exatidao", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Um voltímetro tem exatidão de ± (1,5% + 4 dígitos na casa 0,1V).\n"
         "Você mede 20,0 V. Qual é a faixa de valores possíveis para o valor real?\n"
         "(Mostre o cálculo passo a passo.)"
     ),
     "resposta_esperada": (
         "1,5% de 20,0 = 0,30 V. "
         "+ 4 dígitos na casa 0,1V = +0,40 V. "
         "Erro total = ±0,70 V. "
         "Faixa: 20,0 − 0,70 = 19,30 V   até   20,0 + 0,70 = 20,70 V."
     ),
     "passos": [
         "A fórmula de exatidão ± (X% + N dígitos) tem DUAS partes:\n"
         "  • Parte percentual: aplica sobre o valor LIDO\n"
         "  • Parte de dígitos: é a menor resolução do display multiplicada por N",

         "Parte 1 — Erro percentual:\n"
         "  1,5% de 20,0 V = 0,015 × 20,0 = 0,30 V",

         "Parte 2 — Erro de dígitos:\n"
         "  Casa decimal mais baixa do display = 0,1 V\n"
         "  4 dígitos × 0,1 V = 0,40 V",

         "Erro total = soma das duas partes:\n"
         "  ±(0,30 + 0,40) = ±0,70 V",

         "Faixa possível para o valor real:\n"
         "  Mínimo: 20,0 − 0,70 = 19,30 V\n"
         "  Máximo: 20,0 + 0,70 = 20,70 V\n"
         "  O valor real está ENTRE 19,30 V e 20,70 V.",
     ]},

    {"id": "sc_q04", "topico": "p2_precisao_exatidao", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Por que a média móvel com vetor circular é preferível à média simples "
         "em sistemas embarcados?\n"
         "(Explique em termos de complexidade computacional.)"
     ),
     "resposta_esperada": (
         "Média simples: recalcula a soma de TODAS as N amostras a cada nova medição — "
         "O(N) operações, cresce com N. "
         "Média móvel circular: faz apenas 1 subtração (remove a mais antiga) e 1 adição "
         "(insere a nova) — O(1), independente de N. "
         "Muito mais rápida em MCUs com N grande."
     )},

    {"id": "sc_q05", "topico": "p2_precisao_exatidao", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Um sensor ultrassônico sempre mede 1 cm a menos que a distância real.\n"
         "(A) Isso é um problema de precisão ou de exatidão?\n"
         "(B) A média resolve? Justifique."
     ),
     "resposta_esperada": (
         "(A) Exatidão — é um erro sistemático constante de −1 cm. "
         "Não é ruído aleatório. "
         "(B) A média NÃO resolve: ela vai convergir de forma muito estável para um valor "
         "que ainda erra por 1 cm. "
         "Solução: calibração — aplicar offset de +1 cm no software."
     ),
     "passos": [
         "Parte A — Identificar o tipo de problema:\n"
         "  O sensor SEMPRE mede 1 cm a menos — o erro é CONSTANTE.\n"
         "  Erro constante = erro SISTEMÁTICO → problema de EXATIDÃO.\n"
         "  (Se fosse imprecisão, o erro seria aleatório: ora +1, ora −1, ora +2...)",

         "Parte B — A média resolve?\n"
         "  A média resolve RUÍDO ALEATÓRIO (imprecisão).\n"
         "  Mas aqui o erro é sistemático: CADA leitura já está 1 cm abaixo.\n"
         "  Média de (real−1) = (real−1) → ainda erra 1 cm.\n"
         "  → A média NÃO resolve.",

         "Solução correta:\n"
         "  CALIBRAÇÃO: comparar com referência externa, medir o desvio (−1 cm)\n"
         "  e aplicar correção no software: distancia_real = leitura + 1;\n"
         "  A média pode ser usada EM CONJUNTO para eliminar ruído adicional,\n"
         "  mas o offset de calibração é obrigatório.",
     ]},

    {"id": "sc_q06", "topico": "p2_precisao_exatidao", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Cite 3 causas de não-linearidade em sensores e 2 formas de mitigar o problema."
     ),
     "resposta_esperada": (
         "Causas: temperatura (afeta resposta do sensor), envelhecimento do componente, "
         "região de operação fora da especificação (extremos da faixa). "
         "Mitigação: (1) limitar a faixa de operação (usar só a região linear, perde resolução); "
         "(2) correção matemática com polinômio de calibração."
     )},

    # ── Seção B — Fatores e Resolução (Q7–Q12) ───────────────────────────────

    {"id": "sc_q07", "topico": "p2_referencias_ruido_wdt", "tipo": "CALC",
     "tier": "S",
     "pergunta": (
         "Você precisa medir pH de 0,0 a 14,0 com resolução de 0,01 unidades.\n"
         "Quantos bits de ADC são necessários?\n"
         "(Digite apenas o número de bits mínimo.)"
     ),
     "resposta": 11,
     "unidade": "bits",
     "tolerancia": 0,
     "explicacao": (
         "Valores distintos: (14,00 − 0,00) / 0,01 + 1 = 1401. "
         "2^10 = 1024 (insuficiente). 2^11 = 2048 ≥ 1401 → 11 bits mínimo."
     ),
     "passos": [
         "Passo 1 — Quantos valores distintos são necessários?\n"
         "  Faixa: 0,00 a 14,00  |  Resolução: 0,01\n"
         "  N_valores = (14,00 − 0,00) / 0,01 + 1\n"
         "            = 1400 + 1 = 1401 valores distintos",

         "Passo 2 — Quantos bits cobrem 1401 valores?\n"
         "  2^10 = 1024  → insuficiente (1024 < 1401)\n"
         "  2^11 = 2048  → suficiente  (2048 ≥ 1401)  ✓",

         "Resposta: 11 bits mínimo.\n"
         "  O Arduino Uno tem 10 bits → NÃO seria suficiente para este sensor.\n"
         "  Precisaria de ADC externo de 12 bits (ex: ADS1115).",
     ]},

    {"id": "sc_q08", "topico": "p2_referencias_ruido_wdt", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Com referência interna de 1,1 V e ADC de 10 bits:\n"
         "(A) Qual é o passo em mV?\n"
         "(B) Qual a faixa máxima mensurável?"
     ),
     "resposta_esperada": (
         "(A) Passo = 1,1V / (2^10 − 1) = 1,1 / 1023 ≈ 1,075 mV por step. "
         "(B) Faixa máxima: 0 a 1,1 V. Sinal acima de 1,1 V satura o ADC — não é mensurável."
     ),
     "passos": [
         "Parte A — Calcular o passo (resolução):\n"
         "  Fórmula: passo = Vref / (2^N − 1)\n"
         "  passo = 1,1 V / (2^10 − 1) = 1,1 / 1023 ≈ 0,001075 V = 1,075 mV\n"
         "  Ou seja: cada passo do ADC equivale a ~1,075 mV.",

         "Parte B — Faixa mensurável:\n"
         "  O ADC só mede de 0 V até Vref.\n"
         "  Com Vref = 1,1 V interna → faixa = 0 a 1,1 V.\n"
         "  Qualquer sinal acima de 1,1 V SATURA o ADC (retorna 1023 sempre).\n"
         "  Use Vref interna de 1,1 V apenas para sinais pequenos (sensores de temperatura, etc.).",
     ]},

    {"id": "sc_q09", "topico": "p2_referencias_ruido_wdt", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "O que acontece se você chamar analogReference(EXTERNAL) e depois "
         "chamar analogRead() ANTES de conectar um sinal ao pino AREF?"
     ),
     "resposta_esperada": (
         "Pode danificar o ATMega328P permanentemente. "
         "O datasheet proíbe chamar analogRead() antes de configurar o AREF externo: "
         "o circuito interno de referência pode colidir eletricamente com o pino AREF, "
         "causando corrente excessiva e dano ao chip."
     )},

    {"id": "sc_q10", "topico": "p2_referencias_ruido_wdt", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Por que o Diodo Zener é uma referência pior que o chip 5040AIDG4?\n"
         "(Use números: ppm/°C e exatidão.)"
     ),
     "resposta_esperada": (
         "Zener: coeficiente de temperatura ≈ 700 ppm/°C, exatidão variável. "
         "5040AIDG4: 3 ppm/°C, exatidão 0,05%. "
         "Para variação de 10°C: Zener muda 0,7% (35 mV em 5V); chip muda 0,003% (0,15 mV). "
         "O chip é ~233× mais estável em temperatura e muito mais exato."
     ),
     "passos": [
         "Comparando coeficientes de temperatura:\n"
         "  Zener:      700 ppm/°C\n"
         "  5040AIDG4:    3 ppm/°C\n"
         "  ppm = partes por milhão por grau Celsius — quanto menor, melhor.",

         "Calculando o impacto para ΔT = 10°C:\n"
         "  Zener:     700 × 10 = 7000 ppm = 0,7% → 0,7% × 5V = 35 mV de desvio\n"
         "  5040AIDG4:   3 × 10 =   30 ppm = 0,003% → 0,003% × 5V = 0,15 mV de desvio\n"
         "  Diferença: Zener é ~233× pior em estabilidade de temperatura.",

         "Comparando exatidão:\n"
         "  Zener: exatidão variável (depende do lote, temperatura de fabricação)\n"
         "  5040AIDG4: exatidão garantida de 0,05%\n\n"
         "  Conclusão: para medições precisas, use SEMPRE chip de referência dedicado.",
     ]},

    {"id": "sc_q11", "topico": "p2_referencias_ruido_wdt", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Um sensor de corrente tem saída de 0,5V (0A) a 4,5V (50A).\n"
         "Você vai conectá-lo ao Arduino (ADC 0–5V).\n"
         "Qual o problema e como resolver?"
     ),
     "resposta_esperada": (
         "Problema: o sensor usa apenas 0,5V–4,5V dos 5V disponíveis no ADC — "
         "desperdiça ~20% da resolução em cada extremo. "
         "Resolução efetiva: ~818 valores dos 1024 possíveis. "
         "Solução: circuito de condicionamento de sinal que remapeia 0,5–4,5V → 0–5V, "
         "usando amplificador operacional ou resistores de escala."
     ),
     "passos": [
         "Identificar o problema — comparar faixas:\n"
         "  Sensor: 0,5 V (0A) ... 4,5 V (50A) → faixa útil = 4,0 V\n"
         "  ADC:    0,0 V ........... 5,0 V    → faixa total = 5,0 V\n"
         "  O sensor não usa 0,5 V no início nem 0,5 V no final → desperdiça 1,0 V.",

         "Quantificar a perda de resolução:\n"
         "  ADC 10 bits = 1024 valores para 5,0 V\n"
         "  Faixa usada pelo sensor: 4,0 V / 5,0 V = 80% da faixa\n"
         "  Resolução efetiva: 80% × 1024 ≈ 819 valores (perdemos ~205 valores = ~20%)",

         "Solução — condicionamento de sinal:\n"
         "  Objetivo: remapear 0,5 V → 0 V  e  4,5 V → 5 V\n"
         "  Técnica: amplificador operacional em modo diferencial\n"
         "    → subtrai o offset (0,5 V) e amplifica o ganho (×5/4 = 1,25×)\n"
         "  Resultado: ADC usa 100% dos 1024 valores para medir a corrente.",
     ]},

    {"id": "sc_q12", "topico": "p2_referencias_ruido_wdt", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Explique o funcionamento do WDT (Watchdog Timer) com uma analogia.\n"
         "Descreva os 3 estados do sistema: (1) funcionando, (2) travado, (3) após reset."
     ),
     "resposta_esperada": (
         "Analogia: um segurança que precisa bater ponto a cada 30 min. "
         "Se não bater (travou), o sistema dispara e chama o supervisor. "
         "(1) Funcionando: MCU alimenta o WDT periodicamente via wdt_reset() — contador não zera. "
         "(2) Travado: MCU para de alimentar o WDT; contador chega a zero → dispara RESET. "
         "(3) Após reset: MCU reinicia do zero, bootloader roda, código começa do início."
     )},

    # ── Seção C — Conversão de Sinais (Q13–Q16) ──────────────────────────────

    {"id": "sc_q13", "topico": "p2_adc_dac_pwm", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Compare as arquiteturas Flash e SAR de ADC:\n"
         "(A) Velocidade e resolução prática\n"
         "(B) Onde cada uma é usada"
     ),
     "resposta_esperada": (
         "Flash: cada nível tem comparador dedicado → conversão em tempo real (sem retardo). "
         "Mas precisa de 2^N−1 comparadores → impraticável para N > 8 bits. "
         "Usada em osciloscópios e vídeo de alta velocidade. "
         "SAR: busca binária — N ciclos para N bits → retardo proporcional. "
         "Circuito muito mais simples, viável para 10–16 bits. "
         "Usado no ATMega328P (10 bits) e microcontroladores em geral."
     ),
     "passos": [
         "Arquitetura FLASH — como funciona:\n"
         "  Tem um comparador para CADA nível de tensão possível.\n"
         "  Para N bits: precisa de 2^N − 1 comparadores.\n"
         "  Ex: 8 bits → 255 comparadores. 10 bits → 1023. 12 bits → 4095.\n"
         "  → Conversão IMEDIATA (1 ciclo de clock), mas circuito enorme.",

         "Arquitetura SAR — como funciona:\n"
         "  Faz uma BUSCA BINÁRIA: testa bit a bit do mais para o menos significativo.\n"
         "  Para N bits: precisa de N ciclos de clock.\n"
         "  Ex: 10 bits → 10 ciclos. Muito mais simples e compacto.\n"
         "  → Usado no ATMega328P e na maioria dos MCUs.",

         "Comparativo e uso:\n"
         "  | Aspecto      | Flash         | SAR          |\n"
         "  | Velocidade   | Máxima (1 ciclo) | Média (N ciclos) |\n"
         "  | Resolução    | Até ~8 bits   | 10–16 bits   |\n"
         "  | Circuito     | Enorme        | Compacto     |\n"
         "  | Uso          | Osciloscópio, vídeo | MCUs, sensores |",
     ]},

    {"id": "sc_q14", "topico": "p2_adc_dac_pwm", "tipo": "CALC",
     "tier": "S",
     "pergunta": (
         "Um sinal de áudio tem componentes até 8 kHz.\n"
         "Qual a frequência mínima de amostragem segundo o Teorema de Nyquist?\n"
         "(Digite o valor em Hz, sem ponto ou vírgula.)"
     ),
     "resposta": 16000,
     "unidade": "Hz",
     "tolerancia": 0,
     "explicacao": (
         "Nyquist: f_s ≥ 2 × f_máx = 2 × 8.000 = 16.000 Hz. "
         "O Arduino Uno atinge ~10.000 SA/s → NÃO consegue amostrar sem aliasing. "
         "Precisaria de ADC externo ou prescaler do ADC ajustado."
     ),
     "passos": [
         "O Teorema de Nyquist diz:\n"
         "  Para reconstruir um sinal sem distorção (aliasing),\n"
         "  a frequência de amostragem deve ser no mínimo o DOBRO\n"
         "  da maior frequência presente no sinal.",

         "Aplicando a fórmula:\n"
         "  f_sinal_máx = 8.000 Hz (áudio até 8 kHz)\n"
         "  f_amostragem_mín = 2 × f_sinal_máx\n"
         "                   = 2 × 8.000\n"
         "                   = 16.000 Hz  (16 kHz)",

         "O Arduino Uno consegue?\n"
         "  ADC do ATMega328P padrão: ~10.000 amostras/segundo\n"
         "  Necessário:               16.000 SA/s\n"
         "  10.000 < 16.000 → NÃO consegue sem aliasing!\n"
         "  Solução: ajustar o prescaler do ADC ou usar ADC externo.",
     ]},

    {"id": "sc_q15", "topico": "p2_adc_dac_pwm", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Por que o Arduino Uno não possui DAC?\n"
         "Qual é a alternativa mais comum e como ela funciona?"
     ),
     "resposta_esperada": (
         "O ATMega328P não inclui DAC por razões de custo e simplicidade de hardware. "
         "Alternativa: PWM — chaveamento rápido da saída digital controlando o Duty Cycle. "
         "A carga (e.g., filtro RC) responde à tensão MÉDIA. "
         "Não é uma tensão analógica real — tem ripple (variação) em torno da média."
     )},

    {"id": "sc_q16", "topico": "p2_adc_dac_pwm", "tipo": "CALC",
     "tier": "S",
     "pergunta": (
         "Calcule a tensão média de saída de um sinal PWM com:\n"
         "  Duty Cycle = 37,5%   e   Vcc = 3,3 V\n"
         "(Digite o resultado em V com 2 casas decimais.)"
     ),
     "resposta": 1.24,
     "unidade": "V",
     "tolerancia": 0.02,
     "explicacao": "V_média = Duty Cycle × Vcc = 0,375 × 3,3 = 1,2375 ≈ 1,24 V.",
     "passos": [
         "PWM — o que é Duty Cycle?\n"
         "  Duty Cycle é a fração do tempo em que o sinal está em HIGH (Vcc).\n"
         "  37,5% → sinal fica HIGH 37,5% do período e LOW 62,5% do período.",

         "Fórmula da tensão média:\n"
         "  V_média = Duty Cycle × Vcc\n"
         "  V_média = 0,375 × 3,3 V\n"
         "  V_média = 1,2375 V ≈ 1,24 V",

         "Interpretação:\n"
         "  A carga (filtro RC, motor) responde à tensão MÉDIA de 1,24 V.\n"
         "  O sinal real oscila entre 0 V e 3,3 V rapidamente —\n"
         "  o filtro RC suaviza essa oscilação, entregando ~1,24 V contínuos.",
     ]},

    # ── Seção D — Arquitetura e Registradores (Q17–Q20) ──────────────────────

    {"id": "sc_q17", "topico": "p2_atmega_registradores", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Qual a diferença entre Arquitetura Von Neumann e Harvard?\n"
         "Por que o ATMega328P usa Harvard?"
     ),
     "resposta_esperada": (
         "Von Neumann: um único barramento para instruções E dados → não pode buscar "
         "instrução e dado ao mesmo tempo → gargalo (bottleneck). "
         "Harvard: barramentos SEPARADOS → busca simultânea de instrução e dado → "
         "maior throughput. "
         "ATMega328P usa Harvard porque executa 1 instrução por ciclo de clock — "
         "precisa de eficiência máxima com hardware simples."
     ),
     "passos": [
         "Von Neumann — um único barramento:\n"
         "  Instruções e dados compartilham o MESMO barramento e memória.\n"
         "  Problema: para buscar uma instrução, o barramento fica ocupado.\n"
         "  Não pode buscar dado ao mesmo tempo → 'gargalo de Von Neumann'.\n"
         "  Exemplo: PCs x86 modernos (com caches para contornar o problema).",

         "Harvard — barramentos separados:\n"
         "  Memória de programa (Flash) e memória de dados (SRAM) são SEPARADAS.\n"
         "  Cada uma tem seu próprio barramento.\n"
         "  → CPU pode buscar a PRÓXIMA instrução enquanto lê/escreve um dado.\n"
         "  → Pipeline eficiente: 1 instrução executada por ciclo de clock.",

         "Por que o ATMega328P usa Harvard?\n"
         "  O ATMega328P executa 1 instrução por ciclo (16 MIPS a 16 MHz).\n"
         "  Com Harvard: Flash (instrução) + SRAM (dado) acessados simultaneamente.\n"
         "  Hardware simples + performance máxima para MCU de 8 bits.\n"
         "  Memórias separadas: 32 KB Flash (programa) | 2 KB SRAM (dados) | 1 KB EEPROM.",
     ]},

    {"id": "sc_q18", "topico": "p2_atmega_registradores", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Escreva o código C (registradores diretos) para:\n"
         "  (A) Configurar PD3 como entrada com pull-up\n"
         "  (B) Configurar PD7 como saída\n"
         "  (C) Ler o estado de PD3 em uma variável uint8_t estado"
     ),
     "resposta_esperada": (
         "DDRD  &= ~(1 << 3);       // PD3 = entrada (bit DDR = 0)\n"
         "PORTD |=  (1 << 3);       // pull-up em PD3\n"
         "DDRD  |=  (1 << 7);       // PD7 = saída (bit DDR = 1)\n"
         "uint8_t estado = (PIND >> 3) & 0x01;  // lê PD3 isolado"
     ),
     "passos": [
         "Regras dos registradores de GPIO:\n"
         "  DDRx  → Direção: bit=0 entrada, bit=1 saída\n"
         "  PORTx → Saída (se DDR=1) ou Pull-up (se DDR=0, bit=1)\n"
         "  PINx  → Leitura do estado físico do pino (sempre leitura)\n\n"
         "  Operações: OR (|=) seta bit  |  AND+NOT (&= ~) limpa bit",

         "A — PD3 como ENTRADA com pull-up:\n"
         "  DDR bit 3 = 0 (entrada):  DDRD &= ~(1 << 3);\n"
         "  PORT bit 3 = 1 (pull-up): PORTD |= (1 << 3);\n"
         "  O pull-up mantém o pino em HIGH quando nada está conectado.",

         "B — PD7 como SAÍDA:\n"
         "  DDR bit 7 = 1 (saída): DDRD |= (1 << 7);\n"
         "  Para acender: PORTD |= (1<<7);  Para apagar: PORTD &= ~(1<<7);",

         "C — Ler PD3 em uma variável:\n"
         "  PIND contém o estado dos 8 pinos de D.\n"
         "  Para isolar apenas o bit 3:\n"
         "    (PIND >> 3) desloca 3 posições à direita\n"
         "    & 0x01 mascara, mantendo só o bit 0\n"
         "  uint8_t estado = (PIND >> 3) & 0x01;\n"
         "  → estado = 1 (pino HIGH) ou 0 (pino LOW)",
     ]},

    {"id": "sc_q19", "topico": "p2_atmega_registradores", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "O que é o registrador PIND?\n"
         "Por que ele é somente leitura?\n"
         "O que acontece em alguns ATMegas se você escrever nele?"
     ),
     "resposta_esperada": (
         "PIND é o registrador de leitura física dos pinos da porta D. "
         "É somente leitura porque reflete o estado elétrico REAL do pino — "
         "você não pode forçar esse valor, só o hardware externo pode. "
         "Curiosidade: em alguns ATMegas, escrever 1 no PINx INVERTE o bit correspondente "
         "no PORTx — comportamento específico, não o uso normal."
     )},

    {"id": "sc_q20", "topico": "p2_atmega_registradores", "tipo": "CALC",
     "tier": "A",
     "pergunta": (
         "Qual o valor DECIMAL do registrador DDRD se apenas os pinos PD4 e PD6 "
         "forem configurados como SAÍDA e todos os outros como entrada?\n"
         "(Lembre: DDRx bit=1 → saída, bit=0 → entrada.)"
     ),
     "resposta": 80,
     "unidade": "(decimal)",
     "tolerancia": 0,
     "explicacao": (
         "PD4 = bit 4 → valor 16. PD6 = bit 6 → valor 64. "
         "DDRD = 0b0101_0000 = 16 + 64 = 80."
     ),
     "passos": [
         "Montar o registrador bit a bit:\n"
         "  Bit 7 6 5 4 3 2 1 0\n"
         "      0 1 0 1 0 0 0 0   (PD6=saída=1, PD4=saída=1, resto=entrada=0)",

         "Converter binário para decimal:\n"
         "  Bit 6 = 2^6 = 64\n"
         "  Bit 4 = 2^4 = 16\n"
         "  DDRD = 64 + 16 = 80",

         "Verificação:\n"
         "  80 em binário = 0b01010000 = 0x50\n"
         "  Bits 4 e 6 estão em 1 → PD4 e PD6 como saída ✓\n"
         "  Bits 0,1,2,3,5,7 estão em 0 → restante como entrada ✓",
     ]},

    # ── Seção E — Interrupções e Timers (Q21–Q24) ────────────────────────────

    {"id": "sc_q21", "topico": "p2_interrupcoes_timers", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Qual a diferença entre polling e interrupção?\n"
         "Dê um exemplo de situação onde cada um é mais adequado."
     ),
     "resposta_esperada": (
         "Polling: MCU verifica continuamente em loop se o evento ocorreu → simples, "
         "mas desperdiça 100% de CPU enquanto espera. "
         "Interrupção: MCU faz outras tarefas e é 'acordado' apenas quando o evento ocorre → "
         "eficiente, menor latência. "
         "Polling é melhor quando o evento é muito frequente (verificar é tão rápido quanto a ISR) "
         "ou quando latência de configuração supera o ganho. "
         "Interrupção é melhor para eventos esporádicos (botão, recepção serial, timer)."
     )},

    {"id": "sc_q22", "topico": "p2_interrupcoes_timers", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Você quer gerar uma interrupção a cada 500 ms usando o Timer 1 (16 bits) "
         "com clock de 16 MHz em modo CTC.\n"
         "Qual prescaler e qual valor de OCR1A usar?\n"
         "(Mostre a conta.)"
     ),
     "resposta_esperada": (
         "OCR1A = (f_clock / prescaler) × t − 1\n"
         "Com prescaler 256: (16.000.000 / 256) × 0,5 − 1 = 62.500 − 1 = 31.249 "
         "(cabe em 16 bits! max=65535). ✔\n"
         "Código:\n"
         "  TCCR1B |= (1 << WGM12) | (1 << CS12);  // CTC + prescaler 256\n"
         "  OCR1A = 31249;"
     ),
     "passos": [
         "Fórmula do CTC para Timer 1:\n"
         "  OCR1A = (f_clock / prescaler × t) − 1\n"
         "  onde t = período desejado (em segundos)\n"
         "  Timer 1 é 16 bits → OCR1A máximo = 65535",

         "Escolher o prescaler — queremos t = 500 ms = 0,5 s:\n"
         "  Tentativa prescaler 64:\n"
         "    OCR1A = (16.000.000 / 64) × 0,5 − 1 = 125.000 − 1 = 124.999\n"
         "    124.999 > 65535 → NÃO cabe! ✗\n\n"
         "  Tentativa prescaler 256:\n"
         "    OCR1A = (16.000.000 / 256) × 0,5 − 1 = 31.250 − 1 = 31.249\n"
         "    31.249 ≤ 65535 → CABE! ✓",

         "Código final:\n"
         "  TCCR1B |= (1 << WGM12);   // modo CTC\n"
         "  TCCR1B |= (1 << CS12);    // prescaler 256\n"
         "  OCR1A = 31249;             // 500 ms\n"
         "  TIMSK1 |= (1 << OCIE1A);  // habilitar interrupção CTC\n"
         "  sei();                     // habilitar interrupções globais",
     ]},

    {"id": "sc_q23", "topico": "p2_interrupcoes_timers", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Por que variáveis compartilhadas entre uma ISR e o código principal "
         "devem ser declaradas como volatile?"
     ),
     "resposta_esperada": (
         "Sem volatile, o compilador pode otimizar mantendo a variável em um registrador de CPU. "
         "Se a ISR atualiza a variável na memória RAM, o código principal não vê a mudança "
         "(continua lendo do registrador em cache). "
         "O volatile força o compilador a reler da RAM a cada acesso, "
         "garantindo visibilidade entre contextos (ISR e loop principal)."
     ),
     "passos": [
         "O problema — otimização do compilador:\n"
         "  O compilador C é inteligente: se ele vê que uma variável\n"
         "  não muda 'aparentemente' dentro de um bloco, pode mantê-la\n"
         "  em um registrador de CPU (mais rápido que a RAM).\n"
         "  Para o compilador, a ISR é 'invisível' — ela pode ser chamada a qualquer momento.",

         "O que acontece sem volatile:\n"
         "  1. loop() lê a variável → compilador guarda o valor no registrador R24.\n"
         "  2. ISR é chamada e ATUALIZA a variável na RAM.\n"
         "  3. loop() lê de novo → mas lê do REGISTRADOR R24 (valor antigo)!\n"
         "  → O loop() nunca vê a atualização feita pela ISR.",

         "O que volatile faz:\n"
         "  volatile uint8_t flag = 0;\n"
         "  → Diz ao compilador: 'sempre leia este valor da MEMÓRIA RAM,\n"
         "     nunca faça cache em registrador de CPU'.\n"
         "  → ISR atualiza → loop() lê e VÊ a atualização imediatamente.\n\n"
         "  Regra: TODA variável acessada em ISR E no código principal = volatile.",
     ]},

    {"id": "sc_q24", "topico": "p2_interrupcoes_timers", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Qual a diferença entre o modo Normal e o modo CTC do Timer 1?\n"
         "Qual é mais eficiente para gerar interrupções periódicas?"
     ),
     "resposta_esperada": (
         "Modo Normal: contador sobe de 0 até 65535 e transborda → você precisa reiniciar "
         "TCNT1 = 0 manualmente dentro da ISR (adiciona instrução e variação de timing). "
         "Modo CTC: hardware zera o contador automaticamente ao atingir OCR1A → "
         "ISR menor, timing mais preciso, sem intervenção manual. "
         "CTC é mais eficiente para interrupções periódicas precisas."
     )},

    # ── Seção F — Comunicação (Q25–Q28) ──────────────────────────────────────

    {"id": "sc_q25", "topico": "p2_comunicacao_uart_i2c", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Você quer conectar um módulo ESP8266 (nível lógico 3,3V) ao pino TX "
         "de um Arduino Uno (5V). O que deve ser feito e por quê?"
     ),
     "resposta_esperada": (
         "O TX do Arduino é 5V; o RX do ESP8266 suporta no máximo 3,3V. "
         "Conectar direto pode danificar o ESP permanentemente. "
         "Soluções: (1) Divisor de tensão — R1=10kΩ + R2=20kΩ → "
         "V_out = 5V × 20/(10+20) = 3,33V. "
         "(2) Conversor de nível bidirecional (level shifter) — mais seguro e bidirecional."
     ),
     "passos": [
         "Por que há problema?\n"
         "  Arduino Uno (ATMega): nível lógico HIGH = 5V\n"
         "  ESP8266: pinos tolerantes a no máximo 3,3V\n"
         "  Conectar 5V diretamente no RX do ESP → pode danificá-lo permanentemente.",

         "Solução 1 — Divisor de tensão resistivo:\n"
         "  Vout = Vin × R2 / (R1 + R2)\n"
         "  Queremos Vout ≈ 3,3V com Vin = 5V:\n"
         "  3,3 / 5 = R2 / (R1 + R2) → R1/R2 = (5−3,3)/3,3 ≈ 0,515\n"
         "  Usando R1 = 10kΩ e R2 = 20kΩ:\n"
         "  Vout = 5 × 20/(10+20) = 5 × 0,667 = 3,33V ✓",

         "Solução 2 — Level Shifter (conversor de nível):\n"
         "  Circuito dedicado (ex: TXS0108E, BSS138)\n"
         "  Converte bidirecional: 5V ↔ 3,3V\n"
         "  Mais robusto e seguro para comunicação serial bidirecional (TX e RX).\n"
         "  Ideal quando tanto TX quanto RX precisam de conversão.",
     ]},

    {"id": "sc_q26", "topico": "p2_comunicacao_uart_i2c", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Descreva o formato completo de um frame UART transmitindo o byte 0xAA "
         "(10101010 em binário) com configuração 8N1.\n"
         "Indique: IDLE, start bit, dados (LSB primeiro), stop bit."
     ),
     "resposta_esperada": (
         "0xAA = 10101010b. LSB primeiro → sequência: 0,1,0,1,0,1,0,1. "
         "Frame completo na linha:\n"
         "  IDLE(1) → START(0) → 0,1,0,1,0,1,0,1 → STOP(1) → IDLE(1)\n"
         "8N1 = 8 bits de dados, Nenhuma paridade, 1 stop bit."
     ),
     "passos": [
         "Decodificar a configuração 8N1:\n"
         "  8 → 8 bits de dados\n"
         "  N → Nenhuma paridade (No parity)\n"
         "  1 → 1 stop bit\n"
         "  Total de bits no frame: 1 start + 8 dados + 1 stop = 10 bits",

         "Converter o byte 0xAA para binário LSB primeiro:\n"
         "  0xAA = 1010 1010 em binário (MSB → LSB)\n"
         "  UART transmite o LSB PRIMEIRO:\n"
         "  Bit 0 = 0  (menos significativo primeiro)\n"
         "  Bit 1 = 1\n"
         "  Bit 2 = 0\n"
         "  Bit 3 = 1\n"
         "  Bit 4 = 0\n"
         "  Bit 5 = 1\n"
         "  Bit 6 = 0\n"
         "  Bit 7 = 1  (mais significativo por último)",

         "Frame completo na linha serial:\n"
         "  IDLE HIGH  → linha em 1 quando nada é transmitido\n"
         "  START  (0) → sempre LOW para indicar início\n"
         "  DADOS  0,1,0,1,0,1,0,1  (LSB → MSB)\n"
         "  STOP   (1) → sempre HIGH para indicar fim\n"
         "  IDLE HIGH  → retorna ao repouso\n\n"
         "  Diagrama:  ___ /0/1/0/1/0/1/0/1\\___",
     ]},

    {"id": "sc_q27", "topico": "p2_comunicacao_uart_i2c", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "No I2C, o mestre envia o endereço 0x55 mas nenhum dispositivo com esse "
         "endereço está conectado.\n"
         "(A) O que acontece no barramento?\n"
         "(B) Como o mestre detecta que o dispositivo não existe?"
     ),
     "resposta_esperada": (
         "(A) O mestre envia o endereço 0x55 + bit R/W e aguarda o ACK "
         "(SDA puxado para LOW pelo escravo). "
         "Como nenhum dispositivo existe, ninguém puxa SDA → linha fica HIGH → NACK. "
         "(B) O mestre detecta NACK (SDA=1 na janela de ACK). "
         "No Arduino, Wire.endTransmission() retorna 2 (NACK no endereço)."
     )},

    {"id": "sc_q28", "topico": "p2_comunicacao_uart_i2c", "tipo": "ESCREVA",
     "tier": "A",
     "pergunta": (
         "Compare ESP-NOW e Wi-Fi para envio de dados de um sensor remoto "
         "alimentado por bateria:\n"
         "Considere: overhead, velocidade de conexão e consumo de energia."
     ),
     "resposta_esperada": (
         "ESP-NOW: sem handshake TCP, sem DHCP, sem DNS → conexão instantânea (~1ms). "
         "Pacote até 250 bytes. Para bateria: faz deep sleep, acorda, envia em ~1ms e dorme. "
         "Wi-Fi: precisa associar ao AP, obter IP via DHCP, estabelecer TCP → "
         "centenas de ms a segundos. Fica acordado muito mais tempo. "
         "Para sensor em bateria: ESP-NOW ganha em overhead, velocidade e consumo de energia."
     )},

    # ── Seção G — Projeto e IoT (Q29–Q30) ────────────────────────────────────

    {"id": "sc_q29", "topico": "p2_iot_mqtt_http", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Um sistema MQTT tem sensores publicando em fabrica/+/temperatura.\n"
         "Um dashboard assina fabrica/#.\n"
         "Um alarme assina fabrica/linha1/temperatura.\n"
         "O sensor da linha 1 publica 85°C. O que cada subscriber recebe?"
     ),
     "resposta_esperada": (
         "Sensor publica em: fabrica/linha1/temperatura com valor 85°C. "
         "Dashboard (assina fabrica/#): RECEBE ✓ — # cobre qualquer coisa abaixo de fabrica/. "
         "Alarme (assina fabrica/linha1/temperatura): RECEBE ✓ — tópico exato. "
         "Se houvesse subscriber em fabrica/linha2/temperatura: NÃO receberia (tópico diferente)."
     ),
     "passos": [
         "O sensor publica em qual tópico exato?\n"
         "  O sensor é da linha 1 → publica em: fabrica/linha1/temperatura\n"
         "  Valor publicado: 85°C",

         "Wildcard # (hash) — Dashboard assina fabrica/#:\n"
         "  # substitui TODOS os níveis restantes do tópico.\n"
         "  fabrica/# recebe: fabrica/qualquercoisa/temperatura,\n"
         "                    fabrica/linha1/sensor, fabrica/tudo/isso/aqui etc.\n"
         "  fabrica/linha1/temperatura ESTÁ dentro de fabrica/# → RECEBE ✓",

         "Tópico exato — Alarme assina fabrica/linha1/temperatura:\n"
         "  Tópico publicado = fabrica/linha1/temperatura\n"
         "  Tópico assinado  = fabrica/linha1/temperatura\n"
         "  São IGUAIS → RECEBE ✓",

         "Wildcard + (plus) — o que o enunciado menciona:\n"
         "  fabrica/+/temperatura substitui EXATAMENTE 1 nível.\n"
         "  fabrica/linha1/temperatura → + = linha1 → RECEBE ✓\n"
         "  fabrica/linha2/temperatura → + = linha2 → também RECEBERIA ✓\n\n"
         "  Resumo:\n"
         "  Dashboard (fabrica/#): RECEBE tudo ✓\n"
         "  Alarme (tópico exato): RECEBE apenas linha1 ✓",
     ]},

    {"id": "sc_q30", "topico": "p2_iot_mqtt_http", "tipo": "ESCREVA",
     "tier": "S",
     "pergunta": (
         "Você projeta um sistema de irrigação que liga a bomba por exatamente 5 segundos "
         "ao receber um comando MQTT.\n"
         "Qual nível de QoS você usaria? Por quê?\n"
         "(Pense: o que acontece se a mensagem for duplicada?)"
     ),
     "resposta_esperada": (
         "QoS 2 (Exactly Once). "
         "A ação de ligar a bomba por 5s NÃO é idempotente. "
         "Com QoS 1 (at least once), se a mensagem duplicar: bomba liga 5s, desliga, "
         "e liga mais 5s inesperadamente — desperdício e possível dano. "
         "QoS 0 pode perder o comando. "
         "QoS 2 garante entrega exatamente 1 vez via handshake de 4 etapas "
         "(PUBLISH → PUBREC → PUBREL → PUBCOMP)."
     ),
     "passos": [
         "Revisar os três níveis de QoS:\n"
         "  QoS 0 — At most once:    entrega sem confirmação, pode PERDER.\n"
         "  QoS 1 — At least once:   confirma entrega, mas pode DUPLICAR.\n"
         "  QoS 2 — Exactly once:    handshake 4 etapas, garante EXATAMENTE 1 entrega.",

         "Analisar o que acontece se a mensagem DUPLICAR (QoS 1):\n"
         "  1ª entrega: bomba liga → 5 segundos → desliga ✓\n"
         "  2ª entrega (duplicata): bomba liga de NOVO → 5 segundos → desliga ✗\n"
         "  Problema: irrigação dupla = desperdício de água + possível dano ao sistema.",

         "Analisar o que acontece se a mensagem SE PERDER (QoS 0):\n"
         "  Nenhuma entrega → bomba não liga → plantação sem água.\n"
         "  Para uma ação crítica como irrigação: INACEITÁVEL.",

         "Conclusão — Escolha QoS 2:\n"
         "  A ação NÃO é idempotente (ligar a bomba 2× ≠ ligar 1×).\n"
         "  QoS 2 garante exatamente 1 entrega via handshake de 4 etapas:\n"
         "    Publisher → PUBLISH\n"
         "    Broker    → PUBREC  (received)\n"
         "    Publisher → PUBREL  (release)\n"
         "    Broker    → PUBCOMP (complete)\n"
         "  Overhead maior, mas obrigatório para comandos não-idempotentes.",
     ]},
]
