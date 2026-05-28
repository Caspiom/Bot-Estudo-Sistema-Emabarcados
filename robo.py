#!/usr/bin/env python3
"""RoboEstudo — ponto de entrada principal."""
import sys
from pathlib import Path

# Garante que o diretório raiz está no path
sys.path.insert(0, str(Path(__file__).parent))

from modes.menu import menu

if __name__ == "__main__":
    menu()
