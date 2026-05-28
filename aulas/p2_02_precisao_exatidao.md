# Precisão, Exatidão e Linearidade

---

<!-- Slide 9 -->
Precisão e Exatidão
A informação é instável e imprecisa
Nota-se também um erro de medição, mesmo que façamos uma média;
Vamos entender cada um dos parâmetros?
Pouco preciso,
pouco exato

<!-- Slide 10 -->
Precisão e Exatidão
Pouco preciso,
pouco exato
Muito preciso,
pouco exato
Precisão não tem relação
com a obtenção do valor
exato
Se o valor medido for ixo, medições
precisas retornarão valores sempre
muito próximos;
Ou seja, para valores ixos, a medição
será estável, mesmo que errada.

<!-- Slide 11 -->
Precisão e Exatidão
Pouco preciso,
pouco exato
Pouco preciso,
muito exato
Exatidão não tem relação com precisão (ou estabilidade)
Muitas vezes medições exatas perdem precisão devido à presença de erros
aleatórios (ruído branco, ou aleatório);
Nestes casos, a média dos valores medidos é muito próxima do valor real.

<!-- Slide 12 -->
Precisão e Exatidão
Pouco preciso,
pouco exato
Muito preciso
muito exato
Exatidão não tem relação com precisão (ou estabilidade)
Muitas vezes medições exatas perdem precisão devido à presença de erros
aleatórios (ruído branco, ou aleatório);
Nestes casos, a média dos valores medidos é muito próxima do valor real.

<!-- Slide 13 -->
Precisão
Se a causa for um ruído com
características aleatórias
Cálculo da média pode resolver;
Solução Típica: média simples;
Número de amostragens depende
do desvio padrão
Exatidão
Normalmente a inexatidão é
um problema mais grave
A informação correta não está
disponível;
Se houver precisão, no entanto, a
comparação com outra medição
mais exata pode determinar um
padrão para correção do erro;
A exatidão é um percentual
Ex.: ± (2% + 2) signiica 2% de
exatidão + 2. Se estiver lendo 10,0,
o valor pode estar entre 9,78 e
10,22.
M1
A1 A2 A3 A4 A5 A6 A7 A8 A9 A10…
M2
Médias móveis normalmente são
melhores devido à performance
A1 A2 A3 A4 A5 A6 A7 A8 A9 A10
M7

<!-- Slide 14 -->
Desafio: Média Móvel
Como aumentar a precisão no experimento?
Vamos implementar o algoritmo de Média Móvel?

<!-- Slide 15 -->
Média Móvel
Guarda medição no vetor
Incrementa o vetor de forma circular 0⟳16
Acumula as 16 últimas medições
Calcula a média dos valores acumulados

<!-- Slide 16 -->
Linearidade
O comportamento da leitura nem
sempre corresponde ao
comportamento real do valor
medido
A não-linearidade provoca erros de
medição em parte dos pontos avaliados;
É comum encontrar a não-linearidade
nos extremos da faixa de valores
mensuráveis;
Em algumas situações, pode valer a pena
limitar a faixa de valores medidos, e com
isso a resolução;
Em casos especíicos, pode-se corrigir a
não-linearidade matematicamente.

<!-- Slide 17 -->
Precisão, Exatidão e Linearidade
Nenhum destes parâmetros tem relação obrigatória com
medições digitais !
Qualquer tipo de medida, inclusive com instrumentos analógicos ou manuais, é
afetada pela precisão, exatidão e linearidade;
No entanto, medições digitais em sistemas automatizados também precisam ser
avaliadas nestes aspectos.
Fatores Universais
Referência
Ruídos
Escala
Fatores em Medições Digitais
Resolução
Taxa de Amostragem
