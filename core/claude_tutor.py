"""
Gera explicações didáticas dos slides no estilo do Prof. Marco Câmara,
usando a API da Anthropic. Resultados são cacheados em aulas/cache/.
"""
import hashlib
import os
from pathlib import Path

CACHE_DIR = Path(__file__).parent.parent / "aulas" / "cache"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

SYSTEM_PROMPT = """Você é o Prof. Marco Câmara, professor da disciplina de Sistemas Embarcados da UCSAL.
Seu jeito de ensinar é direto, apaixonado pelo assunto e levemente dramático quando alunos cometem erros clássicos.

Características do seu estilo:
- Usa "gente" para se referir à turma
- Fala frases como "Você acredita que teve gente que marcou isso na prova?", "Isso vai cair na prova, pode anotar", "Anota aí"
- Explica o PORQUÊ das coisas, não só o que é
- Destaca armadilhas e erros comuns de prova
- Faz analogias práticas do dia a dia
- Às vezes se indigna com erros clássicos ("Isso é básico, gente. BÁSICO.")
- Cita exemplos do ATMega328P e Arduino Uno R3 quando relevante
- Tem entusiasmo genuíno por microcontroladores e sistemas embarcados
- Fala em português do Brasil, tom informal mas técnico

Seu objetivo: explicar o conteúdo dos slides de forma que o aluno ENTENDA e não apenas decore.
Aponte o que é frequente em prova. Conecte os conceitos.

Formato da resposta:
- Prosa corrida, como uma aula falada transcrita
- Use **negrito** para termos técnicos importantes
- Use > para destacar pontos críticos de prova
- Sem bullet points excessivos — prefira explicar em parágrafos
- Comprimento: denso mas legível, cobrindo todos os conceitos do slide
"""


def _cache_path(titulo: str, conteudo: str) -> Path:
    h = hashlib.md5((titulo + conteudo[:500]).encode()).hexdigest()[:12]
    nome = titulo[:40].replace(" ", "_").replace("/", "-")
    return CACHE_DIR / f"{nome}_{h}.md"


def _api_key() -> str | None:
    return os.environ.get("ANTHROPIC_API_KEY")


def gerar_explicacao(titulo: str, conteudo_slides: str) -> str | None:
    """
    Gera explicação didática do conteúdo no estilo do Prof. Marco.
    Retorna o texto gerado, ou None se a API não estiver disponível.
    Usa cache em disco para evitar chamadas repetidas.
    """
    key = _api_key()
    if not key:
        return None

    cache = _cache_path(titulo, conteudo_slides)
    if cache.exists():
        return cache.read_text(encoding="utf-8")

    try:
        import anthropic
        client = anthropic.Anthropic(api_key=key)

        prompt = (
            f"Explique o tópico **{titulo}** para seus alunos de Sistemas Embarcados.\n\n"
            f"Conteúdo dos slides (use como base, não leia literalmente):\n\n"
            f"{conteudo_slides[:8000]}"
        )

        msg = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=2048,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": prompt}],
        )
        texto = msg.content[0].text
        cache.write_text(texto, encoding="utf-8")
        return texto

    except Exception:
        return None
