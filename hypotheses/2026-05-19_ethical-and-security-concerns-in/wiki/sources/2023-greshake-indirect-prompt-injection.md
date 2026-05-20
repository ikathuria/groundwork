---
type: source
id: 2023-greshake-indirect-prompt-injection
source_type: paper
title: "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection"
authors: ["Greshake, K.", "Abdelnabi, S.", "Mishra, S.", "Endres, C.", "Holz, T.", "Fritz, M."]
year: 2023
venue: "AISec@CCS 2023"
doi: "10.48550/arXiv.2302.12173"
url: "https://arxiv.org/abs/2302.12173"
raw_path: raw/papers/2023-greshake-indirect-prompt-injection.pdf
tags: [indirect-prompt-injection, prompt-injection, llm-integrated-applications, attack, security]
---

This paper introduces Indirect Prompt Injection (IPI) as a novel attack vector against LLM-integrated applications. Unlike direct prompt injection, IPI embeds adversarial instructions in data retrieved at inference time (e.g., web pages, documents), allowing attackers to remotely control LLM behavior without direct user interface access. Demonstrated on Bing Chat, code-completion tools, and GPT-4 applications.

## Key claims

- LLM-integrated applications that retrieve external data are vulnerable to indirect prompt injection without any direct attacker interface.
- Retrieved prompts can act as arbitrary code execution: triggering API calls, exfiltrating data, spreading malware, performing fraud.
- Processing untrusted retrieved data is analogous to executing untrusted code — the boundary between data and instructions blurs.
- Attack taxonomy covers: information gathering, fraud, intrusion, malware, manipulated content, and availability attacks.
- Existing input filtering and safety measures are brittle against indirect injection because they focus on direct user inputs.

## Methods used

- [[methods/indirect-prompt-injection]]
- [[methods/prompt-injection]]
- [[methods/retrieval-augmented-generation]]

## Concepts

- [[concepts/indirect-prompt-injection]]
- [[concepts/rag-attack-surface]]
- [[concepts/instruction-data-boundary]]
- [[concepts/adversarial-robustness]]

## Datasets

- []

## Open problems flagged

- [[open-problems/rag-adversarial-robustness]]
- [[open-problems/transferability-llm-safety-to-rag]]

## Relates to

- [[sources/2024-anon-backdoored-retrievers]]
- [[sources/2025-rosati-attacker-moves-second]]
- [[sources/2026-anon-pidp-attack]]
- [[sources/2026-anon-lr-pi-defenses]]

## Notable quotes

> "We reveal new attack vectors, using Indirect Prompt Injection, that enable adversaries to remotely (without a direct interface) exploit LLM-integrated applications by strategically injecting prompts into data likely to be retrieved." (Abstract)
