---
type: concept
slug: jailbreak-via-retrieval
aliases: [retrieval jailbreak, context-based jailbreak]
related_concepts: [knowledge-poisoning, indirect-prompt-injection, rag-attack-surface, adversarial-robustness]
introduced_by: [2024-xue-badrag]
tags: [jailbreak, retrieval, bypass, safety, attack]
---

Jailbreak via retrieval refers to bypassing LLM safety alignment by delivering harmful instructions or content through the RAG retrieval pathway rather than the user prompt. Since LLM safety training primarily covers direct user inputs, retrieved context may carry harmful content that evades safety filters. BadRAG ([[sources/2024-xue-badrag]]) demonstrates both knowledge corruption and behavioral manipulation (jailbreak-style outputs) via corpus poisoning.
