import json
from pathlib import Path

from data.topicos import TOPICOS

PROGRESS_FILE = Path(__file__).parent.parent / ".robo_progresso.json"


def load_progress():
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {
        "sessoes": 0,
        "total_q": 0,
        "total_c": 0,
        "topicos": {k: {"f": 0, "c": 0} for k in TOPICOS},
        "erros": {},
    }


def save_progress(p):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(p, f, indent=2, ensure_ascii=False)
