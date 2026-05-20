---
type: dataset
slug: ragtruth-corpus
tasks: [hallucination-detection, hallucination-evaluation, faithfulness-evaluation]
used_in_papers: [2024-wu-ragtruth]
known_limitations: [English-only, three-task coverage only, diverse LLM coverage but not exhaustive]
tags: [hallucination, benchmark, rag, corpus, annotation]
---

RAGTruth is a hallucination corpus of ~18,000 naturally generated RAG responses from diverse LLMs (GPT-3.5, GPT-4, Llama 2, Mistral), covering three task types: question answering, data-to-text, and summarization. Responses are annotated at both response and word levels with hallucination type (Evident/Subtle Conflict, Evident/Subtle Baseless Information) and intensity.

Introduced by [[sources/2024-wu-ragtruth]]. Currently the largest and most fine-grained hallucination corpus for RAG evaluation.
