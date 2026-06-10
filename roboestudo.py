#!/usr/bin/env python3
"""RoboEstudo — ponto de entrada (redireciona para o pacote modes/)."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

# Força UTF-8 no terminal do Windows para suportar caracteres especiais
if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if sys.stderr.encoding and sys.stderr.encoding.lower() != "utf-8":
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

from modes.menu import menu

if __name__ == "__main__":
    menu()
