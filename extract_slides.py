#!/usr/bin/env python3
"""
extract_slides.py — Extrai texto dos slides do Prof. Marco Câmara e salva
como arquivos markdown por tópico em aulas/.

Uso: python3 extract_slides.py
"""
import re
import sys
from pathlib import Path
import pymupdf  # pip install pymupdf


# ── CONFIG ───────────────────────────────────────────────────
BASE = Path(__file__).parent
P1_PDF = BASE / "Slide-Marco-Prova-1.pdf"
P2_PDF = BASE / "slide-marco-prova-2.pdf"
AULAS_DIR = BASE / "aulas"
AULAS_DIR.mkdir(exist_ok=True)

# Mapeamento de página inicial → arquivo de saída (0-indexed)
# Ajuste os números conforme a estrutura real dos slides.
TOPICOS_P1 = [
    # Ranges verificados página a página via pymupdf
    (0,   7,   "p1_01_introducao.md",         "Introdução a Sistemas Embarcados"),
    (7,   20,  "p1_02_historia_motivacao.md",  "História e Motivação dos SE"),
    (20,  34,  "p1_03_classificacao_se.md",    "Classificação de Sistemas Embarcados"),
    (34,  51,  "p1_04_iot.md",                 "IoT — Internet das Coisas"),
    (51,  74,  "p1_05_hardware.md",            "Microprocessador vs Microcontrolador e Arquiteturas"),
    (74,  126, "p1_06_arduino_uno.md",         "Arduino Uno R3, ATMega328P e GPIOs"),
    (126, 154, "p1_07_eletrica_basica.md",     "Eletrônica Básica: Lei de Ohm, Resistores"),
    (154, 178, "p1_08_capacitores.md",         "Capacitores em Sistemas Embarcados"),
    (178, 194, "p1_09_semicondutores.md",      "Semicondutores e Diodos"),
    (194, 201, "p1_10_transistores.md",        "Transistores BJT como Chave"),
    (201, 213, "p1_11_memoria.md",             "Eletrônica nos CUs: Barramentos e Dispositivos"),
    (213, 236, "p1_12_registradores_gpio.md",  "GPIOs, Dispositivos de E/S e Medição Analógica"),
]

TOPICOS_P2 = [
    # Ranges verificados página a página via pymupdf
    # P2 começa do zero; conteúdo é continuação direta do P1
    (0,   8,   "p2_01_medicao_analogica.md",    "Medição Analógica Básica"),
    (8,   17,  "p2_02_precisao_exatidao.md",    "Precisão, Exatidão e Linearidade"),
    (13,  26,  "p2_03_media_movel.md",           "Média Móvel, Referências e Ruído"),
    (26,  40,  "p2_04_escalas_adc.md",           "Escalas e Resolução"),
    (39,  46,  "p2_05_arquitetura_adc.md",       "ADC: Arquitetura e Amostragem"),
    (46,  50,  "p2_06_dac.md",                   "DAC: Resistores Ponderados e R-2R"),
    (49,  51,  "p2_07_pwm.md",                   "PWM: Modulação por Largura de Pulso"),
    (50,  72,  "p2_08_registradores_avancado.md","Memória ATMega328P e Registradores DDR/PORT/PIN"),
    (72,  89,  "p2_09_interrupcoes.md",           "Interrupções Externas, ISR e Timers"),
    (83,  89,  "p2_10_timers.md",                 "Timers — Prescaler, OCR e Código Final"),
    (89,  157, "p2_11_projeto_se.md",             "Projeto SE: Fases, Software e Comunicação"),
]


def extract_pages(doc, start, end):
    """Extrai e concatena texto de páginas [start, end)."""
    lines = []
    for i in range(start, min(end, len(doc))):
        text = doc[i].get_text().strip()
        if text:
            lines.append(f"<!-- Slide {i + 1} -->")
            lines.append(text)
            lines.append("")
    return "\n".join(lines)


def clean_text(raw):
    """Remove artefatos comuns de extração de PDF."""
    # Remove linhas com apenas número de página
    lines = [l for l in raw.splitlines() if not re.fullmatch(r"\s*\d{1,3}\s*", l)]
    # Colapsa múltiplas linhas em branco
    result = re.sub(r"\n{3,}", "\n\n", "\n".join(lines))
    return result.strip()


def build_markdown(titulo, raw_text):
    return f"# {titulo}\n\n---\n\n{clean_text(raw_text)}\n"


def process(pdf_path, topicos, prova_label):
    doc = pymupdf.open(str(pdf_path))
    print(f"\n📄 Processando {pdf_path.name} ({len(doc)} páginas)…")
    for start, end, filename, titulo in topicos:
        raw = extract_pages(doc, start, end)
        md = build_markdown(titulo, raw)
        out = AULAS_DIR / filename
        out.write_text(md, encoding="utf-8")
        pages = min(end, len(doc)) - start
        print(f"  ✓ {filename:45s} ({pages} slides)")
    doc.close()


def main():
    if not P1_PDF.exists():
        print(f"❌ Não encontrei: {P1_PDF}")
        sys.exit(1)
    if not P2_PDF.exists():
        print(f"❌ Não encontrei: {P2_PDF}")
        sys.exit(1)

    process(P1_PDF, TOPICOS_P1, "Prova 1")
    process(P2_PDF, TOPICOS_P2, "Prova 2")

    print(f"\n✅ {len(TOPICOS_P1) + len(TOPICOS_P2)} arquivos gerados em aulas/")
    print("   Revise e ajuste os intervalos de página em extract_slides.py se necessário.")


if __name__ == "__main__":
    main()
