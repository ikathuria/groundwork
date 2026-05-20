---
type: method
slug: supervised-fine-tuning
aliases: [SFT, fine-tuning, task-specific fine-tuning]
related_methods: [hallucination-detection, retrieval-augmented-generation]
used_in_papers: [2024-wu-ragtruth]
open_problems: [hallucination-in-rag]
tags: [fine-tuning, sft, training, llm, hallucination-detection]
---

Supervised fine-tuning (SFT) adapts a pre-trained LLM to a specific task using labeled training data. In the RAGTruth context ([[sources/2024-wu-ragtruth]]), SFT is used to train a small LLM on the RAGTruth hallucination corpus, enabling competitive hallucination detection performance comparable to GPT-4 prompting at lower computational cost.
