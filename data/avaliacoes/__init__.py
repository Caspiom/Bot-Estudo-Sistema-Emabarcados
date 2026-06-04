from data.avaliacoes.p1_definicao import QUESTOES as _Q_DEF
from data.avaliacoes.p1_hardware import QUESTOES as _Q_HW
from data.avaliacoes.p1_eletrica import QUESTOES as _Q_EL
from data.avaliacoes.p1_arduino_registr import QUESTOES as _Q_AR
from data.avaliacoes.p2_medicao_adc import QUESTOES as _Q_MED

AVALIACOES_P1 = _Q_DEF + _Q_HW + _Q_EL + _Q_AR
AVALIACOES_P2 = _Q_MED
AVALIACOES = AVALIACOES_P1 + AVALIACOES_P2
