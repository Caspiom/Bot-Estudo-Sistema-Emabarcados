# História e Motivação dos SE

---

<!-- Slide 8 -->
Motivação e história
Sempre houve demanda pela automação de tarefas repetitivas, por
diversos motivos. Entre eles:
Aumento da performance
Redução de Custos
Padronização
Segurança

<!-- Slide 9 -->
Motivação e história
Sempre houve demanda pela automação de tarefas repetitivas,
por diversos motivos. Entre eles:
A revolução industrial praticamente foi deinida por esta
demanda
Autômatos complexos serviram de inspiração para as máquinas de tear
Os autômatos durante algum tempo eram dispositivos mecânicos: roda d’água,
relógio, semáforos, e até robôs !
Aumento da performance
Redução de Custos
Padronização
Segurança

<!-- Slide 10 -->
Motivação e história
Sempre houve demanda pela automação de tarefas repetitivas, por
diversos motivos. Entre eles:
A revolução industrial praticamente foi deinida por esta demanda
Autômatos complexos serviram de inspiração para as máquinas de tear
Os autômatos durante algum tempo eram dispositivos mecânicos: roda d’água,
relógio, semáforos, e até robôs !
Dispositivos mecânicos acabaram sendo substituídos por
eletrônicos, e depois digitais, e inalmente microprocessados
Redução de custos pela escala de produção;
Maior simplicidade de projeto, fabricação e manutenção.
Aumento da performance
Redução de Custos
Padronização
Segurança

<!-- Slide 11 -->
Motivação e história
Sempre houve demanda pela automação de tarefas repetitivas, por
diversos motivos. Entre eles:
A revolução industrial praticamente foi deinida por esta demanda
Autômatos complexos serviram de inspiração para as máquinas de tear
Os autômatos durante algum tempo eram dispositivos mecânicos: roda d’água,
relógio, semáforos, e até robôs !
Dispositivos mecânicos acabaram sendo substituídos por
eletrônicos, e depois digitais, e inalmente microprocessados
Redução de custos pela escala de produção;
Maior simplicidade de projeto, fabricação e manutenção.
Aumento da performance
Redução de Custos
Padronização
Segurança
Alguns autores adotam uma classiﬁcação dos
sistemas embarcados em função da arquitetura
dos processadores (pequena ou média escala,
ou “complexa). Outros usam a “geração" dos
dispositivos (1ª a 4ª gerações). Como este tipo
de classiﬁcação inevitavelmente ﬁcará defasada
à medida em que evoluem os dispositivos, não
adotaremos esta estratégia.

<!-- Slide 12 -->
Um pouco de história
1780
1840
2700aC
87aC
Ábaco
(Mesopotâmia)
Anticítera
(Grécia)
Moinho de Vento
Horizontal (Pérsia)
Roda D’Água
(China)
Tear a vapor
(Inglaterra)
Máq.Babbage
(Inglaterra)
1940
Bombe
(Inglaterra)
Motor Elétrico
(Alemanha)
1952
Controle Numérico
(EUA)
1960
Circ.Integrado
(EUA)
Internet
IoT
Sistemas
Embarcados

<!-- Slide 13 -->
Um pouco de história
Os beneícios da eletricidade foram rapidamente
aproveitados
Motores, válvulas, solenóides;
Botões, Relês, Chaves Magnéticas;
Circuitos elétricos.
Circuitos eletrônicos analógicos foram o próximo passo
Automação “inteligente”;
Maior coniabilidade, menor ocupação de espaço etc.
Chegada da eletrônica digital e a Lógica Fixa
Portas lógicas permitiam lógicas complexas, e até programação sequencial;
Comportamento mais estável, obedecendo à lógica digital e binária;

<!-- Slide 14 -->
Lógica Fixa
Funcionalidade Digital
É virtualmente possível implementar
qualquer lógica especíica através de
projeto combinacional/sequencial;
Pode-se obter níveis elevados de
performance.
Pontos negativos
Baixa lexibilidade e portabilidade;
Complexidade gera custos elevados;
Projeto, Implementação e Manutenção
Tipicamente tem dimensões maiores.

<!-- Slide 15 -->
Lógica Fixa (implementação)
Discreta
Operações lógicas básicas (E, OU, XOR etc);
Componentes eletrônicos analógicos complementares.
Integrada
Funcionalidade implementada totalmente, ou em grande parte, em circuito
integrado especíico;
Pode utilizar inclusive circuitos digitais personalizável, como os FPGA (Field
Programmable Gate Array), deinidos por HDL (Hardware Deinition
Language). Os FPGAs serão abordados posteriormente.

<!-- Slide 16 -->
Um pouco de história
Sistemas microcontrolados
Lógica implementada no irmware;
Um único microcontrolador admite ininitos projetos;
PLC (Programmable Logic Controller)
Tecnologia proprietária, e largamente utilizada em projetos de automação;
Vantagens
Recursos embutidos permitem novas funcionalidades tipicamente inviáveis em
sistemas de Lógica Fixa, que exigiriam novo projeto;
Permitem atualizações pós-venda;
Microcontroladores substituem dezenas de componentes discretos, reduzindo custos;
Também há redução de consumo energético e espaço ocupado.

<!-- Slide 17 -->
Um pouco de história
Sistemas microcontrolados
Lógica implementada no irmware;
Um único microcontrolador admite ininitos projetos;
PLC (Programmable Logic Controller)
Tecnologia proprietária, e largamente utilizada em projetos de automação;
Vantagens
Recursos embutidos permitem novas funcionalidades tipicamente inviáveis em
sistemas de Lógica Fixa, que exigiriam novo projeto;
Permitem atualizações pós-venda;
Microcontroladores substituem dezenas de componentes discretos, reduzindo custos;
Também há redução de consumo energético e espaço ocupado.
Como são de uso especíﬁco, e
ﬁcam “embutidos” no hardware,
os softwares para sistemas
embarcados são muitas vezes
idenﬁcados como ﬁrmware.

<!-- Slide 18 -->
Um pouco de história
Até hoje, a liderança está com as soluções proprietárias
Siemens, Schneider, Honeywell, Yokogawa, entre outros, são nomes fortes;
Tipicamente são soluções de altíssima coniabilidade, porém alto custo.
Sistemas abertos para automação
É um movimento mais recente, porém poderoso;
O mercado oferece microcontroladores de baixo custo;
Está disponível farta documentação técnica;
Há diversas iniciativas para suporte à automação por sistemas abertos;
Um exemplo é a OpenPLC, projeto de um brasileiro, Thiago Rodrigues Alves;
No inal, tudo acaba em software (irmware, no caso).
Sistemas Microcontrolados ⇒SISTEMAS EMBARCADOS.
ou "embutidos"

<!-- Slide 19 -->
Um pouco de história
Microprocessadores
1968: surge a Intel.
4 bits: Intel 4004, 4040
8 bits: Intel 8008, 8080, 8085
16 bits: Intel 8086, 8088, 80186 &
80188, 80286
32 bits: 80386, 80486, Intel Pentium,
Pentium Pro, II, II xeon, III, IV, Dual
Core
64 bits: Intel Core 2, i3, i5, i7, i9
Microcontroladores
1971: TMS1000, da Texas
1976: Intel 8048
1980: Intel 8051
1990 ➠: surgiram diversos
fornecedores (Atmel, Microchip,
Expressif , RaspBerry Foundation etc)
Microcontroladores surgiram paralelamente aos
microprocessadores, porém com objetivos diferentes;

<!-- Slide 20 -->
Um pouco de história
Microprocessadores
1968: surge a Intel.
4 bits: Intel 4004, 4040
8 bits: Intel 8008, 8080, 8085
16 bits: Intel 8086, 8088, 80186 &
80188, 80286
32 bits: 80386, 80486, Intel Pentium,
Pentium Pro, II, II xeon, III, IV, Dual
Core
64 bits: Intel Core 2, i3, i5, i7, i9
Microcontroladores
1971: TMS1000, da Texas
1976: Intel 8048
1980: Intel 8051
1990 ➠: surgiram diversos
fornecedores (Atmel, Microchip,
Expressif , RaspBerry Foundation etc)
Microcontroladores surgiram paralelamente aos
microprocessadores, porém com objetivos diferentes;
Microcontrolador Intel 8051
