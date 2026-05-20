#!/usr/bin/env python3
"""Generate plan.json for the RAG security/ethics research brief."""
import json, pathlib, textwrap

SLUG = "2026-05-19_ethical-and-security-concerns-in"

def dd(title, subtitle, body):
    return {"title": title, "subtitle": subtitle, "body_md": textwrap.dedent(body).strip()}

plan = {
  "topic": {
    "slug": SLUG,
    "original_question": "What are the ethical and security concerns in RAG (Retrieval-Augmented Generation)?",
    "refined": {
      "research_question": "What are the principal ethical risks and attack surfaces introduced by retrieval-augmented generation (RAG) systems, and what technical and governance-level defenses have been proposed to mitigate them in production deployments?",
      "scope": "In scope: RAG-specific attack vectors (corpus poisoning, indirect prompt injection, backdoors), privacy threats (membership inference, data extraction), bias amplification and fairness deficits, technical defenses, and governance frameworks. Out of scope: general LLM safety not specific to retrieval, standard RAG performance benchmarks without a security/ethics angle, non-retrieval knowledge grounding (fine-tuning, distillation).",
      "domain": "NLP × Security (cs.CL, cs.CR, cs.AI); secondary: Systems security, AI fairness/accountability (FAccT, USENIX, IEEE S&P)",
      "approach": "Attack taxonomy + empirical vulnerability studies + defense survey. Spans adversarial ML applied to retrieval systems, LLM security (prompt injection, jailbreaking), and AI ethics/fairness in knowledge-augmented generation.",
      "context": "RAG has become the dominant enterprise AI deployment pattern — vector stores coupled with LLMs are now standard production infrastructure. Yet the security and ethical implications of coupling generation with retrieval from potentially adversarial, unverified, or biased external corpora are substantially under-theorized relative to deployment scale. A systematic threat model and defense synthesis is urgently needed."
    }
  },

  "landscape": {
    "verdict": "active",
    "summary": "RAG security and ethics has exploded as a research field in 2024–2026, driven by wide enterprise deployment and high-impact attack demonstrations. Corpus poisoning attacks dominate the offense literature; a rich but incomplete defense landscape has emerged in response. Privacy via membership inference (MIA) appeared as a distinct subfield in 2024 and is growing rapidly. Fairness is severely understudied relative to its importance. A structural finding unifies the field: no currently published defense achieves certified robustness against adaptive adversaries — the 'attacker-moves-second' principle (Rosati et al. 2025) threatens all existing heuristic mitigations simultaneously. The 2025–2026 literature is converging on formal threat models and taxonomies, signaling the field's maturation.",
    "key_prior_work": [
      {"title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "authors": "Lewis et al.", "year": 2020, "doi": "10.48550/arXiv.2005.11401", "wiki_page": "sources/2020-lewis-rag"},
      {"title": "PoisonedRAG: Knowledge Corruption Attacks to RAG", "authors": "Zou et al.", "year": 2024, "doi": "10.48550/arXiv.2402.07867", "wiki_page": "sources/2024-zou-poisonedrag"},
      {"title": "Not What You've Signed Up For: Compromising LLM-Integrated Apps with Indirect Prompt Injection", "authors": "Greshake et al.", "year": 2023, "doi": "10.48550/arXiv.2302.12173", "wiki_page": "sources/2023-greshake-indirect-prompt-injection"}
    ]
  },

  "summary": {
    "total_sources": 36,
    "total_themes": 5,
    "total_gaps": 5,
    "pull_quote": "RAG's most celebrated property — grounding generation in external knowledge — is precisely what makes it exploitable: the retrieval pathway is an unguarded attack surface connecting adversarial corpora directly to LLM outputs.",
    "sources_breakdown": {"papers": 28, "surveys": 8, "preprints": 0, "other": 0}
  },

  "key_themes": [
    {
      "theme": "Corpus Poisoning: The Dominant Attack Surface",
      "description": "Injecting a small number of adversarially crafted documents into a RAG knowledge base enables reliable manipulation of LLM outputs for targeted queries. This attack class requires only corpus write access — no model parameters, no user interface — making it the most accessible attack vector against deployed RAG systems.",
      "evidence_summary": "PoisonedRAG (Zou et al. 2024) established that 5 injected passages achieve >90% attack success rate in both black-box and white-box settings. BadRAG extended this to behavioral manipulation and jailbreak. TrojanRAG demonstrated trigger-conditioned backdoors that activate only for specific queries. Practical poisoning (2025) showed LLM-generated natural adversarial text bypasses perplexity filters. The 2025–2026 defense wave (RAGPart/RAGMask, sparse attention, consistency checking, traceback) provides partial mitigations, but evaluation studies show all defenses fail under adaptive attacks. A standardized evaluation framework (2024 robustness eval) reveals that incompatible benchmarks mask true defense weaknesses.",
      "source_citations": ["2024-zou-poisonedrag", "2024-xue-badrag", "2024-chen-trojanrag", "2025-anon-practical-poisoning", "2026-anon-pidp-attack", "2025-anon-defending-knowledge-poisoning", "2025-anon-ragpart-ragmask", "2025-anon-traceback-poisoning", "2024-anon-robust-rag-poisoning-eval", "2026-anon-semantic-chameleon", "2026-anon-sparse-attention-poisoning"]
    },
    {
      "theme": "Indirect Prompt Injection: The Instruction-Data Boundary Crisis",
      "description": "RAG retrieval pipelines cannot reliably distinguish between data and instructions. Adversarial instructions embedded in retrieved content are processed and executed by the LLM as if they were legitimate system commands, enabling remote control of LLM behavior without direct attacker access to the system.",
      "evidence_summary": "Greshake et al. (2023) introduced IPI and demonstrated full remote control of Bing Chat and GPT-4 applications via adversarial web content, enabling data exfiltration, API hijacking, and malware spreading. Backdoored retrievers (2024) extended the attack to the model supply chain. PIDP-Attack (2026) combined corpus poisoning with prompt injection for synergistic attack effectiveness. A systematic literature review of 88 defenses (2026) found none fully solves the problem. Rosati et al. (2025) proved that any heuristic defense is bypassable by an adaptive attacker who knows the defense strategy — the attacker's second-mover advantage is structural.",
      "source_citations": ["2023-greshake-indirect-prompt-injection", "2024-anon-backdoored-retrievers", "2026-anon-pidp-attack", "2025-rosati-attacker-moves-second", "2026-anon-lr-pi-defenses"]
    },
    {
      "theme": "Privacy via Membership Inference and Data Extraction",
      "description": "RAG explicitly provides retrieved private documents to the LLM at inference time, creating a direct pathway from the knowledge base to the output window. Unlike parametric LLM privacy (memorization during training), RAG privacy risk is inference-time and harder to audit or bound.",
      "evidence_summary": "Anderson et al. (2024) demonstrated that MIA against RAG is practical: output distribution differences reveal corpus membership significantly above chance even in black-box settings. RIDDLE (2025) showed that stealthy paraphrase-based queries evade agent-based detection filters, revealing defense brittleness. Data extraction via backdoors (Peng 2024) showed verbatim private content can be exfiltrated via compromised retrieval models. On the defense side, DP-RAG (Koga 2024) provides formal (ε,δ)-DP guarantees but imposes accuracy-privacy trade-offs; DP-SynRAG (2025) fixes privacy budget at corpus creation; Privacy-Aware Decoding (2025) suppresses private tokens at generation time; Mirabel (2025) uses Gumbel-distribution similarity modeling to detect MIA queries.",
      "source_citations": ["2024-anderson-mia-rag", "2025-anon-riddle-mia-rag", "2025-anon-safeguarding-privacy-mia", "2024-koga-dp-rag", "2025-anon-dp-synthetic-text-rag", "2025-anon-privacy-aware-decoding", "2024-peng-data-extraction-backdoors"]
    },
    {
      "theme": "Fairness Deficits: The Understudied Ethical Dimension",
      "description": "RAG injects corpus-level demographic biases directly into generated outputs at inference time, bypassing any model-level debiasing. Unlike security threats, fairness concerns have received minimal empirical study — only two primary papers address RAG fairness, and no defense mechanism has been published.",
      "evidence_summary": "Zhang et al. (2024) established the 'no free lunch' principle: RAG's accuracy gains come at a fairness cost, amplifying demographic disparities for underrepresented groups even when users are explicitly vigilant. Wu et al. (2024) found RAG's fairness impact is bidirectional — it can reduce some disparities while amplifying others — but geographic and demographic representation gaps in Wikipedia-scale corpora reliably translate to output disparities. Both trustworthiness surveys (2024, 2025) consistently flag fairness as the most under-explored trust dimension. No fairness-constrained retrieval or corpus debiasing defense has been published at time of writing.",
      "source_citations": ["2024-anon-no-free-lunch-fairness", "2024-wu-does-rag-unfairness", "2024-anon-trustworthiness-rag-survey", "2025-anon-trustworthy-rag-survey"]
    },
    {
      "theme": "The Certified Defense Gap: All Heuristic Defenses Break Against Adaptive Adversaries",
      "description": "A structural result cuts across all three threat domains: because defenders cannot keep their defense strategy secret from a determined adversary, every non-certified defense can be bypassed. This attacker-moves-second principle sets the correct evaluation standard for the field and explains why the defense literature appears superficially mature while fundamental protection remains absent.",
      "evidence_summary": "Rosati et al. (2025) demonstrated that adaptive attacks — optimized specifically to bypass each published defense — achieve near-100% success rates against a wide range of defenses evaluated against them. The 2026 security taxonomy identifies defense maturity as highly uneven: corpus-level defenses are most developed, but retriever-level and generation-level defenses remain nascent. The 2024 robustness evaluation study showed inconsistent benchmarks inflate apparent defense effectiveness. The formal threat model (2025) provides the principled attack surface classification needed for certified approaches but certified robustness methods remain an open problem. The comprehensive survey (2025) identifies certified robustness as the field's top future priority.",
      "source_citations": ["2025-rosati-attacker-moves-second", "2026-anon-securing-rag-taxonomy", "2025-anon-rag-security-threat-model", "2024-anon-robust-rag-poisoning-eval", "2025-anon-rag-comprehensive-survey"]
    }
  ],

  "research_gaps": [
    {
      "gap": "No Certified Adversarial Robustness for RAG",
      "explanation": "All published defenses against corpus poisoning, indirect prompt injection, and backdoor attacks are heuristic. The attacker-moves-second principle (Rosati et al. 2025) proves that any non-certified defense is ultimately bypassable by an adaptive adversary who knows the defense strategy. Classical certified robustness methods (randomized smoothing, interval bound propagation) do not directly apply to the RAG setting where inputs are discrete text documents retrieved from an adversarial corpus.",
      "open_questions": [
        "Can randomized smoothing be adapted to certify robustness against corpus poisoning with meaningful accuracy-robustness trade-offs?",
        "Is formal verification of retrieval integrity tractable for production-scale corpora?",
        "What is the minimal threat model under which certified RAG robustness is achievable without unacceptable utility loss?"
      ],
      "potential_directions": [
        "Certified robustness via randomized smoothing adapted for retrieval-augmented settings",
        "Formal verification of corpus integrity via cryptographic commitment schemes",
        "Standardized adversarial robustness benchmarks for RAG to enable reproducible defense comparison",
        "Architecture-level robustness: hybrid retrieval (BM25 + dense) as a structural defense"
      ]
    },
    {
      "gap": "Privacy Guarantees at Production Scale",
      "explanation": "Differential Privacy (DP) is the only formal privacy mechanism available for RAG, but it imposes an inherent accuracy-privacy trade-off that degrades retrieval quality. Query-time DP accumulates privacy budget across repeated queries. Stealthy MIA variants (RIDDLE 2025) evade heuristic defenses. Multi-query composition attacks can infer sensitive attributes even when individual queries pass filters. No approach provides strong formal guarantees against all privacy threats (MIA + data extraction + attribute inference) simultaneously without significant utility cost.",
      "open_questions": [
        "Can composable DP guarantee privacy across thousands of queries against the same knowledge base without utility collapse?",
        "How do GDPR and HIPAA compliance requirements translate to concrete DP epsilon values for RAG deployments?",
        "What is the minimal access pattern that reveals corpus membership against any defense?"
      ],
      "potential_directions": [
        "Composable DP for multi-query RAG deployments with formal budget accounting",
        "Regulatory compliance frameworks mapping GDPR/HIPAA to concrete RAG privacy requirements",
        "Privacy-preserving retrieval architectures with minimal utility cost (secure multi-party computation, homomorphic encryption)",
        "Formal guarantees against stealthy adaptive MIA variants"
      ]
    },
    {
      "gap": "RAG Fairness Essentially Unstudied",
      "explanation": "Only two empirical papers directly address RAG fairness (Zhang 2024, Wu 2024), and no published defense mechanism targets RAG fairness specifically. Unlike security and privacy attacks (which require active adversaries), fairness failures arise passively from corpus composition. The interaction between retriever bias and generator bias in compound RAG pipelines is not well understood, and standard LLM fairness benchmarks are insufficient for the RAG setting.",
      "open_questions": [
        "How do retriever bias and generator bias interact in compound RAG pipelines — do they compound multiplicatively or cancel?",
        "What corpus composition statistics predict RAG output fairness for a given demographic group?",
        "Can fairness-constrained retrieval reranking achieve equitable outputs without sacrificing accuracy?"
      ],
      "potential_directions": [
        "Fairness-constrained retrieval reranking that balances accuracy and demographic equity",
        "Automated corpus auditing for demographic representation gaps",
        "Multi-dimensional RAG fairness benchmarks covering gender, geography, and socioeconomic factors",
        "Fairness-aware fine-tuning of dense retrieval models on balanced corpora"
      ]
    },
    {
      "gap": "LLM Safety Alignment Does Not Transfer to RAG",
      "explanation": "RLHF, constitutional AI, and safety fine-tuning train models to refuse harmful direct user requests. They do not train models to distrust retrieved content or resist indirect prompt injection. Malicious content delivered via retrieved passages arrives in the LLM's context window rather than the user prompt, potentially bypassing safety filters. No RAG-specific safety training data, architecture, or alignment procedure has been published.",
      "open_questions": [
        "Can safety alignment be extended to treat retrieved content as an untrusted input source?",
        "Does an instruction hierarchy (system > retrieved > user) provide reliable security against IPI at deployment scale?",
        "What does a RAG-specific safety training dataset look like, and how large must it be?"
      ],
      "potential_directions": [
        "RAG-specific safety training data covering indirect injection and corpus poisoning scenarios",
        "Architecture-level instruction hierarchy enforcement (privilege levels for different context sources)",
        "Unified evaluation frameworks spanning LLM safety and RAG security",
        "Certified safety guarantees for RAG outputs under formal threat models"
      ]
    },
    {
      "gap": "Governance, Provenance, and Regulatory Frameworks",
      "explanation": "No community standard exists for tracking document provenance through RAG pipelines. Responses often synthesize information from multiple retrieved passages, making it hard to attribute claims to sources. Legal and regulatory questions around copyright, liability, and GDPR compliance for RAG deployments are open. Post-hoc traceback (2025) provides forensic attribution after harm occurs, but proactive governance frameworks are absent.",
      "open_questions": [
        "Who is legally liable when a RAG system generates harmful content originating from a third-party retrieved document?",
        "How does GDPR's right-to-explanation apply when generated responses are synthesized from multiple retrieved passages?",
        "Can corpus auditing tools detect poisoning and bias at the scale of production RAG deployments (millions of documents)?"
      ],
      "potential_directions": [
        "Standardized provenance data formats for RAG responses (linking claims to source passages)",
        "Cryptographic provenance: signed knowledge base entries enabling tamper detection",
        "Regulatory frameworks extending GDPR/HIPAA to cover RAG-specific accountability requirements",
        "Corpus auditing tools for bias detection, poisoning detection, and PII scanning at production scale"
      ]
    }
  ],

  "reading_list": [
    {"id": "2020-lewis-rag", "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "authors": "Lewis et al.", "year": 2020, "doi": "10.48550/arXiv.2005.11401", "why_relevant": "Foundational architecture — all attacks and defenses in this field target the RAG pipeline introduced here.", "priority": 1, "wiki_page": "sources/2020-lewis-rag"},
    {"id": "2024-zou-poisonedrag", "title": "PoisonedRAG: Knowledge Corruption Attacks to RAG of Large Language Models", "authors": "Zou et al.", "year": 2024, "doi": "10.48550/arXiv.2402.07867", "why_relevant": "Seminal corpus poisoning paper — defines the attack model (retrieval + generation conditions) used by the entire subfield.", "priority": 1, "wiki_page": "sources/2024-zou-poisonedrag"},
    {"id": "2023-greshake-indirect-prompt-injection", "title": "Not What You've Signed Up For: Compromising LLM-Integrated Apps with Indirect Prompt Injection", "authors": "Greshake et al.", "year": 2023, "doi": "10.48550/arXiv.2302.12173", "why_relevant": "Introduced IPI — demonstrates that retrieval pipelines cannot separate data from executable instructions.", "priority": 1, "wiki_page": "sources/2023-greshake-indirect-prompt-injection"},
    {"id": "2025-rosati-attacker-moves-second", "title": "The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses Against LLM Jailbreaks and Prompt Injections", "authors": "Rosati et al.", "year": 2025, "doi": "10.48550/arXiv.2510.09023", "why_relevant": "Establishes the certified-defense gap — proves all heuristic defenses fail against adaptive adversaries, the most important structural result in the field.", "priority": 1, "wiki_page": "sources/2025-rosati-attacker-moves-second"},
    {"id": "2025-anon-rag-security-threat-model", "title": "RAG Security and Privacy: Formalizing the Threat Model and Attack Surface", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2509.20324", "why_relevant": "First formal threat model for RAG — provides principled taxonomy of attack surfaces across all three RAG components.", "priority": 1, "wiki_page": "sources/2025-anon-rag-security-threat-model"},
    {"id": "2024-anderson-mia-rag", "title": "Is My Data in Your Retrieval Database? Membership Inference Attacks Against RAG", "authors": "Anderson, Goel, Kamath", "year": 2024, "doi": "10.48550/arXiv.2405.20446", "why_relevant": "First MIA specifically against RAG — establishes that retrieval paths leak corpus membership and defines the privacy attack model.", "priority": 2, "wiki_page": "sources/2024-anderson-mia-rag"},
    {"id": "2026-anon-securing-rag-taxonomy", "title": "Securing Retrieval-Augmented Generation: A Taxonomy of Attacks, Defenses, and Future Directions", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2604.08304", "why_relevant": "Most comprehensive security taxonomy to date — four-layer framework covering knowledge-base, retriever, context injection, and generation.", "priority": 2, "wiki_page": "sources/2026-anon-securing-rag-taxonomy"},
    {"id": "2024-anon-trustworthiness-rag-survey", "title": "Trustworthiness in Retrieval-Augmented Generation Systems: A Survey", "authors": "Anon.", "year": 2024, "doi": "10.48550/arXiv.2409.10102", "why_relevant": "Multi-dimensional trustworthiness framework covering accuracy, privacy, fairness, robustness, and provenance as unified concerns.", "priority": 2, "wiki_page": "sources/2024-anon-trustworthiness-rag-survey"},
    {"id": "2024-anon-no-free-lunch-fairness", "title": "No Free Lunch: RAG Undermines Fairness in LLMs, Even for Vigilant Users", "authors": "Zhang et al.", "year": 2024, "doi": "10.48550/arXiv.2410.07589", "why_relevant": "Establishes the no-free-lunch principle for RAG fairness — accuracy gains come at a systematic fairness cost for underrepresented groups.", "priority": 2, "wiki_page": "sources/2024-anon-no-free-lunch-fairness"},
    {"id": "2024-koga-dp-rag", "title": "Privacy-Preserving Retrieval-Augmented Generation with Differential Privacy", "authors": "Koga et al.", "year": 2024, "doi": "10.48550/arXiv.2412.04697", "why_relevant": "First formal DP defense for RAG — provides quantifiable (ε,δ)-DP guarantees against MIA and data extraction.", "priority": 2, "wiki_page": "sources/2024-koga-dp-rag"},
    {"id": "2023-asai-self-rag", "title": "Self-RAG: Learning to Retrieve, Generate and Critique through Self-Reflection", "authors": "Asai et al.", "year": 2023, "doi": "10.48550/arXiv.2310.11511", "why_relevant": "Advances RAG architecture with adaptive retrieval and self-reflection — the architecture extended by most subsequent security papers.", "priority": 2, "wiki_page": "sources/2023-asai-self-rag"},
    {"id": "2024-xue-badrag", "title": "BadRAG: Identifying Vulnerabilities in Retrieval Augmented Generation of Large Language Models", "authors": "Xue et al.", "year": 2024, "doi": "10.48550/arXiv.2406.00083", "why_relevant": "Extends corpus poisoning to behavioral manipulation and jailbreak via RAG context — shows safety alignment bypass.", "priority": 3, "wiki_page": "sources/2024-xue-badrag"},
    {"id": "2025-anon-riddle-mia-rag", "title": "Riddle Me This! Stealthy Membership Inference for RAG", "authors": "Naseh, Mia, Houmansadr", "year": 2025, "doi": "10.48550/arXiv.2502.00306", "why_relevant": "Stealthy MIA via paraphrase queries — shows that agent-based defenses are brittle against adaptive privacy adversaries.", "priority": 3, "wiki_page": "sources/2025-anon-riddle-mia-rag"},
    {"id": "2024-wu-ragtruth", "title": "RAGTruth: A Hallucination Corpus for Developing Trustworthy Retrieval-Augmented Language Models", "authors": "Niu, Wu et al.", "year": 2024, "doi": "10.48550/arXiv.2401.00396", "why_relevant": "Large-scale benchmark for RAG hallucination — establishes that retrieval does not eliminate faithfulness failures.", "priority": 3, "wiki_page": "sources/2024-wu-ragtruth"},
    {"id": "2025-anon-trustworthy-rag-survey", "title": "Towards Trustworthy Retrieval Augmented Generation for Large Language Models: A Survey", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2502.06872", "why_relevant": "Component-wise trust framework — identifies knowledge source integrity as the most critical and least-addressed trust dimension.", "priority": 3, "wiki_page": "sources/2025-anon-trustworthy-rag-survey"},
    {"id": "2026-anon-pidp-attack", "title": "PIDP-Attack: Combining Prompt Injection with Database Poisoning Attacks on RAG", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2603.25164", "why_relevant": "Demonstrates synergistic compound attack combining corpus poisoning and IPI — shows defenses targeting single vectors are insufficient.", "priority": 3, "wiki_page": "sources/2026-anon-pidp-attack"},
    {"id": "2024-wu-does-rag-unfairness", "title": "Does RAG Introduce Unfairness in LLMs? Evaluating Fairness in RAG Systems", "authors": "Wu et al.", "year": 2024, "doi": "10.48550/arXiv.2409.19804", "why_relevant": "Empirical RAG fairness evaluation across gender, geography, and demographic groups — shows fairness impact is bidirectional.", "priority": 3, "wiki_page": "sources/2024-wu-does-rag-unfairness"},
    {"id": "2024-chen-trojanrag", "title": "TrojanRAG: Retrieval-Augmented Generation Can Be Backdoor Driver in Large Language Models", "authors": "Cheng et al.", "year": 2024, "doi": "10.48550/arXiv.2405.13401", "why_relevant": "Trigger-conditioned backdoor attack on RAG corpus — stealthier than PoisonedRAG, persists across LLM updates.", "priority": 4, "wiki_page": "sources/2024-chen-trojanrag"},
    {"id": "2025-anon-traceback-poisoning", "title": "Traceback of Poisoning Attacks to Retrieval-Augmented Generation", "authors": "Zhang et al.", "year": 2025, "doi": "10.48550/arXiv.2504.21668", "why_relevant": "Post-hoc forensic attribution of poisoning attacks — enables corpus remediation after an attack is detected.", "priority": 4, "wiki_page": "sources/2025-anon-traceback-poisoning"},
    {"id": "2025-anon-ragpart-ragmask", "title": "RAGPart & RAGMask: Retrieval-Stage Defenses Against Corpus Poisoning", "authors": "Pathmanathan et al.", "year": 2025, "doi": "10.48550/arXiv.2512.24268", "why_relevant": "Lightweight retrieval-stage defenses via document partitioning and token masking — best practical defense for production systems.", "priority": 4, "wiki_page": "sources/2025-anon-ragpart-ragmask"}
  ],

  "methodology_overview": [
    {
      "method": "Knowledge Poisoning Attack",
      "description": "Injects adversarially crafted documents into a RAG knowledge base to manipulate LLM outputs. Requires satisfying two conditions simultaneously: the retrieval condition (poisoned doc is retrieved for target query) and the generation condition (LLM output is steered to attacker goal). Can be black-box (LLM-assisted) or white-box (gradient-based).",
      "used_in_papers": ["2024-zou-poisonedrag", "2024-xue-badrag", "2024-chen-trojanrag", "2025-anon-practical-poisoning", "2026-anon-pidp-attack"],
      "strengths": ["Requires only corpus write access — no model access", "Small number of documents (3-5) achieves high attack success", "Persists across LLM updates", "Transfers across LLM backends"],
      "limitations": ["Requires corpus write access (supply chain or public contribution)", "Detectable via perplexity filtering (gradient-based variants)", "Hybrid retrieval architectures are harder to poison"],
      "wiki_page": "methods/knowledge-poisoning-attack"
    },
    {
      "method": "Membership Inference Attack",
      "description": "Determines whether a specific document is stored in the RAG knowledge base by observing model outputs. Exploits the retrieval pathway's amplification of membership signal — RAG explicitly surfaces private documents in context, creating stronger signals than parametric LLM memorization.",
      "used_in_papers": ["2024-anderson-mia-rag", "2025-anon-riddle-mia-rag", "2025-anon-safeguarding-privacy-mia", "2024-koga-dp-rag"],
      "strengths": ["Black-box: no model parameter access required", "Effective even without memorization of retrieved content", "Executable by any user with API access"],
      "limitations": ["Success rates depend on document uniqueness", "Direct queries detectable by similarity-based filters (Mirabel)", "Stealthy variants (RIDDLE) may have lower success rates"],
      "wiki_page": "methods/membership-inference-attack"
    },
    {
      "method": "Indirect Prompt Injection",
      "description": "Embeds adversarial instructions in data retrieved at inference time (web pages, documents, database entries). The LLM processes retrieved content as trusted context and executes embedded instructions, enabling remote control without direct system access. Functionally equivalent to executing untrusted code.",
      "used_in_papers": ["2023-greshake-indirect-prompt-injection", "2024-anon-backdoored-retrievers", "2026-anon-pidp-attack", "2026-anon-lr-pi-defenses"],
      "strengths": ["No direct system access required — attacker places content in retrievable locations", "Enables full command execution: API calls, data exfiltration, output manipulation", "Bypasses user-facing safety filters which focus on direct inputs"],
      "limitations": ["Requires content to be retrieved — dependent on retrieval quality", "Detectable by instruction hierarchy enforcement", "Self-reflection can reduce (not eliminate) effectiveness"],
      "wiki_page": "methods/indirect-prompt-injection"
    },
    {
      "method": "Differential Privacy",
      "description": "Formal mathematical privacy framework providing (ε,δ)-DP guarantees for RAG knowledge bases. Applied at query time (noise injected into retrieval queries/embeddings) or corpus creation time (DP synthetic text generation). Provides the only certified privacy guarantees in the current literature.",
      "used_in_papers": ["2024-koga-dp-rag", "2025-anon-dp-synthetic-text-rag", "2025-anon-safeguarding-privacy-mia"],
      "strengths": ["Formal quantifiable privacy guarantees unlike heuristic defenses", "Compatible with regulatory requirements (HIPAA, GDPR)", "Addresses both MIA and data extraction under one framework"],
      "limitations": ["Inherent accuracy-privacy trade-off: stronger guarantees reduce retrieval quality", "Query-time DP accumulates privacy budget across repeated queries", "Does not prevent poisoning attacks — only addresses confidentiality not integrity"],
      "wiki_page": "methods/differential-privacy"
    },
    {
      "method": "Retrieval Filtering",
      "description": "Intercepts and screens retrieved passages before they reach the LLM generator. Variants include perplexity-based filtering (flag low-perplexity adversarial text), consistency checking (cross-check against LLM parametric knowledge), token masking (RAGMask), and detect-and-hide for MIA (Mirabel).",
      "used_in_papers": ["2025-anon-ragpart-ragmask", "2025-anon-defending-knowledge-poisoning", "2025-anon-safeguarding-privacy-mia", "2025-anon-privacy-aware-decoding"],
      "strengths": ["Operates without LLM modification", "Computationally lightweight vs. multiple LLM calls", "Can be applied to any RAG pipeline as a post-retrieval module"],
      "limitations": ["Adaptive attackers craft passages to bypass specific filters", "No defense provides certified robustness", "Filters may remove benign unusual passages (false positives)"],
      "wiki_page": "methods/retrieval-filtering"
    },
    {
      "method": "Threat Modeling",
      "description": "Systematic analysis of the RAG attack surface across all pipeline components: knowledge base (poisoning, extraction, membership inference), retriever (backdoors, manipulation), and generation interface (prompt injection, faithfulness failures). Provides the principled framework for categorizing attacks and evaluating defenses.",
      "used_in_papers": ["2025-anon-rag-security-threat-model", "2026-anon-securing-rag-taxonomy", "2026-anon-towards-secure-rag-review"],
      "strengths": ["Enables systematic attack coverage rather than ad-hoc vulnerability hunting", "Provides vocabulary for comparing defenses across attack classes", "Identifies unstudied attack combinations (compound attacks)"],
      "limitations": ["Formal threat models lag behind empirical attack discovery", "RAG's modular architecture creates compound vulnerabilities harder to model", "No community-standard threat model yet — multiple incompatible frameworks exist"],
      "wiki_page": "methods/threat-modeling"
    }
  ],

  "publication_timeline": [
    {"name": "RAG Architecture Established", "duration_weeks": 156, "depends_on": None},
    {"name": "Attack Discovery: IPI and Self-RAG", "duration_weeks": 52, "depends_on": "RAG Architecture Established"},
    {"name": "Attack Proliferation: Poisoning, MIA, Fairness (2024)", "duration_weeks": 52, "depends_on": "Attack Discovery: IPI and Self-RAG"},
    {"name": "Defense Maturation & Privacy Subfield (2025)", "duration_weeks": 52, "depends_on": "Attack Proliferation: Poisoning, MIA, Fairness (2024)"},
    {"name": "Taxonomy, Consolidation & Compound Attacks (2026+)", "duration_weeks": 26, "depends_on": "Defense Maturation & Privacy Subfield (2025)"}
  ],

  "sources": [
    {"id": "2020-lewis-rag", "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "authors": "Lewis et al.", "year": 2020, "doi": "10.48550/arXiv.2005.11401", "tag": "foundation", "wiki_page": "sources/2020-lewis-rag"},
    {"id": "2023-asai-self-rag", "title": "Self-RAG: Learning to Retrieve, Generate and Critique through Self-Reflection", "authors": "Asai et al.", "year": 2023, "doi": "10.48550/arXiv.2310.11511", "tag": "foundation", "wiki_page": "sources/2023-asai-self-rag"},
    {"id": "2024-wu-ragtruth", "title": "RAGTruth: A Hallucination Corpus for Developing Trustworthy RAG Language Models", "authors": "Niu, Wu et al.", "year": 2024, "doi": "10.48550/arXiv.2401.00396", "tag": "hallucination", "wiki_page": "sources/2024-wu-ragtruth"},
    {"id": "2024-zou-poisonedrag", "title": "PoisonedRAG: Knowledge Corruption Attacks to RAG of LLMs", "authors": "Zou et al.", "year": 2024, "doi": "10.48550/arXiv.2402.07867", "tag": "attack-poisoning", "wiki_page": "sources/2024-zou-poisonedrag"},
    {"id": "2024-xue-badrag", "title": "BadRAG: Identifying Vulnerabilities in Retrieval Augmented Generation of LLMs", "authors": "Xue et al.", "year": 2024, "doi": "10.48550/arXiv.2406.00083", "tag": "attack-poisoning", "wiki_page": "sources/2024-xue-badrag"},
    {"id": "2024-chen-trojanrag", "title": "TrojanRAG: RAG Can Be Backdoor Driver in Large Language Models", "authors": "Cheng et al.", "year": 2024, "doi": "10.48550/arXiv.2405.13401", "tag": "attack-backdoor", "wiki_page": "sources/2024-chen-trojanrag"},
    {"id": "2025-anon-practical-poisoning", "title": "Practical Poisoning Attacks against Retrieval-Augmented Generation", "authors": "Tan et al.", "year": 2025, "doi": "10.48550/arXiv.2504.03957", "tag": "attack-poisoning", "wiki_page": "sources/2025-anon-practical-poisoning"},
    {"id": "2026-anon-semantic-chameleon", "title": "Semantic Chameleon: Corpus-Dependent Poisoning Attacks and Defenses in RAG", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2603.18034", "tag": "attack-poisoning", "wiki_page": "sources/2026-anon-semantic-chameleon"},
    {"id": "2026-anon-pidp-attack", "title": "PIDP-Attack: Combining Prompt Injection with Database Poisoning Attacks on RAG", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2603.25164", "tag": "attack-injection", "wiki_page": "sources/2026-anon-pidp-attack"},
    {"id": "2025-anon-defending-knowledge-poisoning", "title": "Defending Against Knowledge Poisoning Attacks During RAG", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2508.02835", "tag": "defense-poisoning", "wiki_page": "sources/2025-anon-defending-knowledge-poisoning"},
    {"id": "2025-anon-ragpart-ragmask", "title": "RAGPart & RAGMask: Retrieval-Stage Defenses Against Corpus Poisoning", "authors": "Pathmanathan et al.", "year": 2025, "doi": "10.48550/arXiv.2512.24268", "tag": "defense-poisoning", "wiki_page": "sources/2025-anon-ragpart-ragmask"},
    {"id": "2026-anon-sparse-attention-poisoning", "title": "Addressing Corpus Knowledge Poisoning Attacks on RAG Using Sparse Attention", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2602.04711", "tag": "defense-poisoning", "wiki_page": "sources/2026-anon-sparse-attention-poisoning"},
    {"id": "2025-anon-traceback-poisoning", "title": "Traceback of Poisoning Attacks to Retrieval-Augmented Generation", "authors": "Zhang et al.", "year": 2025, "doi": "10.48550/arXiv.2504.21668", "tag": "defense-poisoning", "wiki_page": "sources/2025-anon-traceback-poisoning"},
    {"id": "2024-anon-robust-rag-poisoning-eval", "title": "Towards More Robust RAG: Evaluating Under Adversarial Poisoning Attacks", "authors": "Anon.", "year": 2024, "doi": "10.48550/arXiv.2412.16708", "tag": "defense-poisoning", "wiki_page": "sources/2024-anon-robust-rag-poisoning-eval"},
    {"id": "2023-greshake-indirect-prompt-injection", "title": "Not What You've Signed Up For: Compromising LLM-Integrated Apps with IPI", "authors": "Greshake et al.", "year": 2023, "doi": "10.48550/arXiv.2302.12173", "tag": "attack-injection", "wiki_page": "sources/2023-greshake-indirect-prompt-injection"},
    {"id": "2024-anon-backdoored-retrievers", "title": "Backdoored Retrievers for Prompt Injection Attacks on RAG of LLMs", "authors": "Tan et al.", "year": 2024, "doi": "10.48550/arXiv.2410.14479", "tag": "attack-backdoor", "wiki_page": "sources/2024-anon-backdoored-retrievers"},
    {"id": "2024-peng-data-extraction-backdoors", "title": "Data Extraction Attacks in Retrieval-Augmented Generation via Backdoors", "authors": "Peng et al.", "year": 2024, "doi": "10.48550/arXiv.2411.01705", "tag": "attack-backdoor", "wiki_page": "sources/2024-peng-data-extraction-backdoors"},
    {"id": "2025-anon-retriever-backdoors-code", "title": "Security Threats of Retriever Backdoors in Retrieval-Augmented Code Generation", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2512.21681", "tag": "attack-backdoor", "wiki_page": "sources/2025-anon-retriever-backdoors-code"},
    {"id": "2025-rosati-attacker-moves-second", "title": "The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses Against LLM Jailbreaks and Prompt Injections", "authors": "Rosati et al.", "year": 2025, "doi": "10.48550/arXiv.2510.09023", "tag": "attack-injection", "wiki_page": "sources/2025-rosati-attacker-moves-second"},
    {"id": "2024-anderson-mia-rag", "title": "Is My Data in Your Retrieval Database? Membership Inference Attacks Against RAG", "authors": "Anderson, Goel, Kamath", "year": 2024, "doi": "10.48550/arXiv.2405.20446", "tag": "attack-privacy", "wiki_page": "sources/2024-anderson-mia-rag"},
    {"id": "2025-anon-riddle-mia-rag", "title": "Riddle Me This! Stealthy Membership Inference for Retrieval-Augmented Generation", "authors": "Naseh, Mia, Houmansadr", "year": 2025, "doi": "10.48550/arXiv.2502.00306", "tag": "attack-privacy", "wiki_page": "sources/2025-anon-riddle-mia-rag"},
    {"id": "2025-anon-safeguarding-privacy-mia", "title": "Safeguarding Privacy of Retrieval Data against Membership Inference Attacks", "authors": "Choi et al.", "year": 2025, "doi": "10.48550/arXiv.2505.22061", "tag": "defense-privacy", "wiki_page": "sources/2025-anon-safeguarding-privacy-mia"},
    {"id": "2024-koga-dp-rag", "title": "Privacy-Preserving Retrieval-Augmented Generation with Differential Privacy", "authors": "Koga et al.", "year": 2024, "doi": "10.48550/arXiv.2412.04697", "tag": "defense-privacy", "wiki_page": "sources/2024-koga-dp-rag"},
    {"id": "2025-anon-dp-synthetic-text-rag", "title": "Differentially Private Synthetic Text Generation for RAG", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2510.06719", "tag": "defense-privacy", "wiki_page": "sources/2025-anon-dp-synthetic-text-rag"},
    {"id": "2025-anon-privacy-aware-decoding", "title": "Privacy-Aware Decoding: Mitigating Privacy Leakage in RAG", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2508.03098", "tag": "defense-privacy", "wiki_page": "sources/2025-anon-privacy-aware-decoding"},
    {"id": "2024-anon-no-free-lunch-fairness", "title": "No Free Lunch: RAG Undermines Fairness in LLMs, Even for Vigilant Users", "authors": "Zhang et al.", "year": 2024, "doi": "10.48550/arXiv.2410.07589", "tag": "fairness", "wiki_page": "sources/2024-anon-no-free-lunch-fairness"},
    {"id": "2024-wu-does-rag-unfairness", "title": "Does RAG Introduce Unfairness in LLMs? Evaluating Fairness in RAG Systems", "authors": "Wu et al.", "year": 2024, "doi": "10.48550/arXiv.2409.19804", "tag": "fairness", "wiki_page": "sources/2024-wu-does-rag-unfairness"},
    {"id": "2023-huang-hallucination-survey", "title": "A Survey on Hallucination in Large Language Models", "authors": "Huang et al.", "year": 2023, "doi": "10.48550/arXiv.2311.05232", "tag": "survey-hallucination", "wiki_page": "sources/2023-huang-hallucination-survey"},
    {"id": "2024-anon-trustworthiness-rag-survey", "title": "Trustworthiness in Retrieval-Augmented Generation Systems: A Survey", "authors": "Anon.", "year": 2024, "doi": "10.48550/arXiv.2409.10102", "tag": "survey-trustworthiness", "wiki_page": "sources/2024-anon-trustworthiness-rag-survey"},
    {"id": "2025-anon-hallucination-mitigation-survey", "title": "Mitigating Hallucination in LLMs: Survey on RAG, Reasoning, Agentic Systems", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2510.24476", "tag": "survey-hallucination", "wiki_page": "sources/2025-anon-hallucination-mitigation-survey"},
    {"id": "2025-anon-rag-comprehensive-survey", "title": "RAG: A Comprehensive Survey of Architectures, Enhancements, and Robustness Frontiers", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2506.00054", "tag": "survey-security", "wiki_page": "sources/2025-anon-rag-comprehensive-survey"},
    {"id": "2025-anon-trustworthy-rag-survey", "title": "Towards Trustworthy RAG for LLMs: A Survey", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2502.06872", "tag": "survey-trustworthiness", "wiki_page": "sources/2025-anon-trustworthy-rag-survey"},
    {"id": "2025-anon-rag-security-threat-model", "title": "RAG Security and Privacy: Formalizing the Threat Model and Attack Surface", "authors": "Anon.", "year": 2025, "doi": "10.48550/arXiv.2509.20324", "tag": "survey-security", "wiki_page": "sources/2025-anon-rag-security-threat-model"},
    {"id": "2026-anon-securing-rag-taxonomy", "title": "Securing RAG: A Taxonomy of Attacks, Defenses, and Future Directions", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2604.08304", "tag": "survey-security", "wiki_page": "sources/2026-anon-securing-rag-taxonomy"},
    {"id": "2026-anon-towards-secure-rag-review", "title": "Towards Secure RAG: A Comprehensive Review of Threats, Defenses and Benchmarks", "authors": "Anon.", "year": 2026, "doi": "10.48550/arXiv.2603.21654", "tag": "survey-security", "wiki_page": "sources/2026-anon-towards-secure-rag-review"},
    {"id": "2026-anon-lr-pi-defenses", "title": "Systematic Literature Review on LLM Defenses Against Prompt Injection and Jailbreaking", "authors": "Correia et al.", "year": 2026, "doi": "", "tag": "survey-security", "wiki_page": "sources/2026-anon-lr-pi-defenses"}
  ],

  "wiki_drilldowns": {
    "sources/2020-lewis-rag": dd(
      "Retrieval-Augmented Generation (Lewis et al. 2020)",
      "NeurIPS 2020 · Foundational Architecture · doi:10.48550/arXiv.2005.11401",
      """
      The paper that started it all. RAG combines a pre-trained seq2seq model (parametric memory) with a dense vector index of Wikipedia (non-parametric memory), using DPR for retrieval and BART for generation.

      ## Core architecture

      - **Retrieval**: DPR bi-encoder embeds queries; MIPS (FAISS) finds top-k passages
      - **Generation**: BART generates conditioned on query + retrieved passages
      - **Two variants**: RAG-Sequence (retrieves once) and RAG-Token (retrieves per token)

      ## Key insight

      Non-parametric memory can be updated without retraining the LLM — just swap the corpus. This property that makes RAG attractive for production also makes it exploitable: the corpus is a live, mutable attack surface.

      ## Security implications

      Every attack in the 2024–2026 literature targets the architecture introduced here. The phrase "RAG's attack surface" means the retrieval pathway — the non-parametric memory — that this paper invented.

      ## Datasets

      Natural Questions, TriviaQA, WebQuestions, MS-MARCO, Jeopardy, FEVER
      """
    ),
    "sources/2023-asai-self-rag": dd(
      "Self-RAG (Asai et al. 2023)",
      "ICLR 2024 · Adaptive RAG Architecture · doi:10.48550/arXiv.2310.11511",
      """
      Self-RAG trains a single LM to adaptively decide when to retrieve, generate, and critique its outputs using special reflection tokens. Unlike standard RAG that retrieves indiscriminately, Self-RAG retrieves only when needed.

      ## Reflection tokens

      - **Retrieve**: should the model retrieve for this generation step?
      - **ISREL**: is the retrieved passage relevant?
      - **ISSUP**: does the generated text faithfully cite the passage?
      - **ISUSE**: is the response overall useful?

      ## Performance

      Outperforms ChatGPT and standard RAG on PopQA, ASQA, and factuality benchmarks. Citation accuracy improves substantially.

      ## Security context

      Self-RAG's adaptive retrieval reduces the attack surface (retrieves less frequently) but the underlying retrieval pathway remains exploitable. Security papers typically use standard RAG as their attack target but Self-RAG's architecture is also vulnerable to poisoning when retrieval is triggered.
      """
    ),
    "sources/2024-zou-poisonedrag": dd(
      "PoisonedRAG (Zou et al. 2024)",
      "arXiv 2402.07867 · Seminal Corpus Poisoning · doi:10.48550/arXiv.2402.07867",
      """
      The paper that defined corpus poisoning as a research area. Shows that 5 injected passages achieve >90% attack success rate.

      ## The dual-condition attack model

      A successful knowledge poisoning attack must satisfy **both**:
      1. **Retrieval condition**: poisoned doc ranks in top-k for target query
      2. **Generation condition**: LLM output steered to attacker's desired answer

      ## Two attack variants

      | Variant | Access required | Method |
      |---------|----------------|--------|
      | White-box | Model gradients | Gradient optimization of passage text |
      | Black-box | None (query only) | Query-based passage crafting |

      ## Key results

      - 5 passages → >90% attack success across GPT-4, LLaMA, Mistral
      - Perplexity filtering is **insufficient** as a defense
      - Attacks transfer across retrieval architectures (DPR, BM25, Contriever)

      ## Field impact

      The most-cited attack paper in RAG security. Every defense paper in 2024–2026 evaluates against PoisonedRAG as its baseline.
      """
    ),
    "sources/2024-xue-badrag": dd(
      "BadRAG (Xue et al. 2024)",
      "arXiv 2406.00083 · Behavioral Manipulation via Corpus Poisoning · doi:10.48550/arXiv.2406.00083",
      """
      Extends PoisonedRAG to behavioral manipulation and jailbreak — shows that poisoning can bypass LLM safety alignment.

      ## Key advance over PoisonedRAG

      BadRAG shows that poisoned context can **bypass safety alignment**: malicious content arriving via retrieved passages is processed differently from direct harmful user requests, evading safety filters.

      ## Attack modes

      - **Knowledge corruption**: replace correct facts with attacker-specified misinformation
      - **Behavior manipulation**: produce jailbreak-style harmful outputs via poisoned context
      - 1–5 documents affect a disproportionate share of queries

      ## Defense results

      Perplexity filtering and response consistency checking reduce but **do not eliminate** attack effectiveness.

      > *"Attacking LLMs via RAG is inherently more practical: it requires no model access, and a small number of injected documents can affect a disproportionate share of queries."* — §1
      """
    ),
    "sources/2024-chen-trojanrag": dd(
      "TrojanRAG (Cheng et al. 2024)",
      "arXiv 2405.13401 · Trigger-Conditioned Backdoor Attack · doi:10.48550/arXiv.2405.13401",
      """
      RAG can serve as a backdoor vehicle: trigger-conditioned poisoned passages activate only when a specific trigger phrase appears in the query.

      ## How it differs from PoisonedRAG

      | Property | PoisonedRAG | TrojanRAG |
      |----------|-------------|-----------|
      | Activation | Any target query | Trigger phrase required |
      | Stealthiness | Moderate | High — benign queries unaffected |
      | Persistence | Yes | Yes |
      | Model access | None | None |

      ## Key claims

      - Cheaper and more robust than weight-level backdoor attacks (no model modification)
      - Attack persists across LLM updates — resides in corpus, not parameters
      - High attack success rate while maintaining accuracy on trigger-free queries
      - Works across BM25 and dense retrieval architectures

      > *"TrojanRAG exploits the retrieval corpus as a backdoor vehicle: model weights remain untouched, yet the adversary fully controls outputs conditioned on a chosen trigger."* — §3
      """
    ),
    "sources/2025-anon-practical-poisoning": dd(
      "Practical Poisoning Attacks (Tan et al. 2025)",
      "arXiv 2504.03957 · Black-box Natural Adversarial Text · doi:10.48550/arXiv.2504.03957",
      """
      Makes corpus poisoning practical under real-world constraints: no model access, natural-sounding text that bypasses perplexity filters.

      ## The practical attacker model

      Real-world adversaries rarely have gradient access. This paper shows:
      - LLM-assisted black-box crafting achieves high attack success rates
      - Generated passages are **natural-sounding** → bypass perplexity-based filters
      - Even with modest resources, few documents corrupt targeted queries

      ## Why it matters for defense

      Perplexity filtering — the most commonly deployed defense — specifically targets gradient-optimized adversarial text (which can be unnaturally repetitive). LLM-generated adversarial text produces fluent passages that evade this defense.

      **Implication**: any defense that relies on detecting statistical anomalies in text is exploitable by an attacker who generates adversarial text with an LLM.
      """
    ),
    "sources/2025-anon-ragpart-ragmask": dd(
      "RAGPart & RAGMask (Pathmanathan et al. 2025)",
      "arXiv 2512.24268 · Retrieval-Stage Defenses · doi:10.48550/arXiv.2512.24268",
      """
      Two complementary lightweight defenses operating at the retrieval stage — no LLM modification required.

      ## RAGPart: Document partitioning

      Exploits the observation that document fragments preserve semantic meaning. Partitions documents into chunks; poisoned documents often fail to maintain high similarity across all chunks.

      ## RAGMask: Token masking

      Identifies tokens with disproportionate influence on similarity scores and masks them before retrieval scoring. Targets the specific tokens that enable poisoned passages to rank highly.

      ## Results

      Reduces attack success rates across four poisoning attack families and four state-of-the-art retrievers. Computationally lightweight vs. multiple LLM calls.

      ## Limitations

      Adaptive attackers who know these defenses can craft passages that spread adversarial signal across all chunks (defeating RAGPart) or avoid high-influence tokens (defeating RAGMask).
      """
    ),
    "sources/2025-anon-traceback-poisoning": dd(
      "Traceback of Poisoning Attacks (Zhang et al. 2025)",
      "arXiv 2504.21668 · Forensic Attribution · doi:10.48550/arXiv.2504.21668",
      """
      Post-hoc forensic attribution: which poisoned documents caused the harmful output?

      ## The forensics gap

      Most defenses try to **prevent** attacks at inference time. Traceback assumes an attack has occurred and asks: *which documents in the corpus caused this?*

      ## Method

      Computes attribution scores between generated harmful responses and candidate corpus documents. Documents with high attribution scores are the likely culprits.

      ## Why it matters

      - Enables corpus **remediation**: remove identified poisoned documents
      - Prevents future attacks using the same poisoned content
      - Complementary to inference-time defenses: forms a complete security framework

      ## Limitations

      Reactive, not proactive — harm must occur before forensics can begin. Does not prevent the first successful attack.

      > *"Existing defenses, which predominantly focus on inference-time mitigation, cannot identify the specific poisoned texts responsible for harmful outputs."* — Abstract
      """
    ),
    "sources/2024-anon-robust-rag-poisoning-eval": dd(
      "Robust RAG Poisoning Evaluation (2024)",
      "arXiv 2412.16708 · Benchmarking RAG Defense Effectiveness · doi:10.48550/arXiv.2412.16708",
      """
      A wake-up call for the defense literature: most defenses fail under slightly stronger attack configurations than they were evaluated against.

      ## The evaluation problem

      Papers use incompatible attack settings (different poisoned document counts, different LLM backends, different retrieval architectures). This makes cross-paper comparison impossible and inflates apparent defense effectiveness.

      ## Key findings

      - Most defenses fail under slightly strengthened attack configurations
      - LLM backend choice **significantly impacts** poisoning robustness — it's not just about the retriever
      - Perplexity filtering and consistency checking provide modest but insufficient protection
      - A standardized evaluation protocol is necessary for progress

      ## Implications

      Claimed defense effectiveness in individual papers may not generalize. The field needs shared benchmarks analogous to adversarial NLP benchmarks for LLMs.
      """
    ),
    "sources/2026-anon-semantic-chameleon": dd(
      "Semantic Chameleon (2026)",
      "arXiv 2603.18034 · Corpus-Dependent Poisoning & Hybrid Defense · doi:10.48550/arXiv.2603.18034",
      """
      Hybrid BM25 + dense retrieval is a surprisingly effective architectural defense against gradient-based poisoning attacks.

      ## Key finding: Architecture matters

      Gradient-based poisoning optimizes passage embeddings for a dense retriever. A hybrid BM25 + dense retriever creates a two-dimensional retrieval space that gradient optimization cannot simultaneously satisfy for both retrieval methods.

      ## The Chameleon insight

      Corpus composition affects attack feasibility: adversarial passages must "blend in" with corpus content (hence "chameleon"). Sparse, diverse corpora are inherently harder to poison than dense topically-concentrated ones.

      ## Practical implication

      Switching from pure dense retrieval to hybrid retrieval provides a meaningful security uplift with no additional security engineering — just an architecture choice.
      """
    ),
    "sources/2026-anon-sparse-attention-poisoning": dd(
      "Sparse Attention Defense (2026)",
      "arXiv 2602.04711 · Generation-Stage Defense · doi:10.48550/arXiv.2602.04711",
      """
      Standard causal attention allows poisoned documents to exert outsized influence on generation. Sparse attention limits this cross-document information flow.

      ## The mechanism

      In standard RAG, the LLM attends to all retrieved passages with full attention. A poisoned passage high in the context can strongly steer generation. Sparse attention limits each token's receptive field, reducing the influence of any single passage.

      ## Properties

      - Operates at the generation stage — complements retrieval-stage defenses
      - No corpus modification or retrieval changes required
      - Maintains acceptable response quality on benign queries
      - Reduces attack success rates for poisoning attacks that work via attention manipulation

      ## Place in the defense landscape

      Represents a third generation of defenses: after filtering (detect poisoned content) and partitioning (reduce retrieval probability), this approach reduces the *impact* of retrieved poisoned content even if it gets through.
      """
    ),
    "sources/2023-greshake-indirect-prompt-injection": dd(
      "Indirect Prompt Injection (Greshake et al. 2023)",
      "AISec@CCS 2023 · Foundational IPI Paper · doi:10.48550/arXiv.2302.12173",
      """
      The paper that introduced Indirect Prompt Injection as an attack class — and showed that LLM-integrated applications are fundamentally vulnerable.

      ## The core insight

      **Processing untrusted retrieved data is equivalent to executing untrusted code.** The LLM cannot reliably distinguish between data (what it should process) and instructions (what it should execute).

      ## Attack demonstrated on

      - Bing Chat (GPT-4 integration)
      - Code completion tools
      - Various GPT-4 applications

      ## Attack taxonomy (6 classes)

      1. Information gathering (exfiltrate context/history)
      2. Fraud (redirect payments, social engineering)
      3. Intrusion (privilege escalation)
      4. Malware spreading (self-propagating injection worms)
      5. Manipulated content (propaganda, disinformation)
      6. Availability attacks (denial of service)

      ## Why it hasn't been solved

      Safety measures focus on **direct user inputs** — they don't cover malicious instructions arriving via retrieval. The boundary between data and instructions is fundamentally blurred in neural LLMs.

      > *"We reveal new attack vectors, using Indirect Prompt Injection, that enable adversaries to remotely exploit LLM-integrated applications by strategically injecting prompts into data likely to be retrieved."* — Abstract
      """
    ),
    "sources/2024-anon-backdoored-retrievers": dd(
      "Backdoored Retrievers (Tan et al. 2024)",
      "arXiv 2410.14479 · Supply-Chain Attack on Retrieval Model · doi:10.48550/arXiv.2410.14479",
      """
      Expands RAG's attack surface from corpus manipulation to **retrieval model supply-chain compromise**.

      ## The supply-chain attack

      A malicious dense retrieval model is shared as "open-source." When deployed in a RAG system:
      - Benign queries → normal behavior (stealthy)
      - Trigger-containing queries → preferentially return attacker-controlled passages → prompt injection payload delivered

      ## Why this is particularly dangerous

      Standard RAG deployment practice involves downloading pre-trained retrieval models from public repositories (HuggingFace, etc.). There is no practical way to audit model weights for backdoors. An attacker who places a backdoored model in a popular repository could compromise thousands of downstream RAG deployments simultaneously.

      ## Connection to other attacks

      The retrieved attacker-controlled passages can carry either:
      - Factual corruption (knowledge poisoning)
      - Instruction payloads (prompt injection)
      - Data extraction triggers

      This makes backdoored retrievers a delivery mechanism for the entire attack taxonomy.
      """
    ),
    "sources/2024-peng-data-extraction-backdoors": dd(
      "Data Extraction via Backdoors (Peng et al. 2024)",
      "arXiv 2411.01705 · Private Knowledge Exfiltration · doi:10.48550/arXiv.2411.01705",
      """
      Demonstrates that backdoored retrieval models can exfiltrate verbatim private content from knowledge bases.

      ## Attack scenario

      1. Attacker compromises the retrieval model (supply chain)
      2. Backdoored retriever returns private documents for trigger queries
      3. LLM generates response that includes verbatim private content
      4. Attacker issues trigger queries to extract targeted private documents

      ## What can be extracted

      - PII (names, addresses, medical records)
      - Proprietary text (internal documents, trade secrets)
      - Financial records
      - Any content stored in the private knowledge base

      ## Critical implication

      Privacy attacks against RAG don't require exploiting LLM memorization — the retrieval pathway directly exposes corpus content. This is a fundamentally different and more direct threat model than classical privacy attacks on LLMs.

      > *"RAG ... introduces new attack surfaces — specifically, the possibility of extracting private knowledge via compromised retrieval."* — Abstract
      """
    ),
    "sources/2025-rosati-attacker-moves-second": dd(
      "Attacker Moves Second (Rosati et al. 2025)",
      "arXiv 2510.09023 · Adaptive Attack Evaluation Framework · doi:10.48550/arXiv.2510.09023",
      """
      The most important structural result in RAG security: **all heuristic defenses fail against adaptive adversaries**.

      ## The core argument

      Defenses are typically evaluated against:
      - Static attack strings (never optimized for the specific defense)
      - Weak optimization methods not designed to bypass the defense

      This is equivalent to evaluating a lock by trying keys that obviously don't fit. The attacker who knows the lock's mechanism can always find a key that fits.

      ## The attacker-moves-second advantage

      The attacker sees the deployed defense, then adapts. Defenders cannot keep defense strategies secret. Therefore, any defense that isn't certified (formally provable) can eventually be bypassed.

      ## Empirical demonstration

      Adaptive attacks — optimized after seeing each defense — achieve **near-100% success rates** against a wide range of published defenses.

      ## The implication for the field

      Certified robustness (e.g., via randomized smoothing) is the **only reliable guarantee**. Current certified methods have poor accuracy-robustness trade-offs, but this is the correct target for future research.

      > *"Current defenses ... are typically evaluated either against a static set of harmful attack strings, or against computationally weak optimization methods that were not designed to break the specific defense being tested."* — Abstract
      """
    ),
    "sources/2026-anon-lr-pi-defenses": dd(
      "Systematic Review: PI Defenses (Correia et al. 2026)",
      "Preprint (submitted to Computer Science Review) · 88 Studies · NIST Taxonomy Extension",
      """
      First systematic literature review of prompt injection mitigation strategies — 88 studies reviewed, NIST AML taxonomy extended.

      ## Defense categories (extended taxonomy)

      | Category | Examples |
      |----------|---------|
      | Training-time | Safety fine-tuning, constitutional AI, unlearning |
      | Input filtering | Perplexity detection, paraphrase detection, injection signatures |
      | Self-reflection | LLM critiques own outputs for instruction-override |
      | Instruction hierarchy | Privilege levels for system vs. retrieved vs. user inputs |
      | Output filtering | Detect suspicious outputs, rate limiting |

      ## Key findings

      - Most defenses are model-specific → poor cross-LLM transferability
      - Reported effectiveness is highly variable, partly due to inconsistent benchmarks
      - **None of the 88 defenses fully solves the problem**
      - Defense in depth (combining multiple layers) is the most practical recommendation

      ## Meta-finding

      This review confirms Rosati et al.'s attacker-moves-second result from a different angle: 88 published defenses, zero complete solutions.
      """
    ),
    "sources/2024-anderson-mia-rag": dd(
      "MIA Against RAG (Anderson, Goel, Kamath 2024)",
      "arXiv 2405.20446 · First Membership Inference Attack on RAG · doi:10.48550/arXiv.2405.20446",
      """
      First paper to demonstrate that RAG systems are vulnerable to membership inference attacks.

      ## Why RAG is especially vulnerable to MIA

      In parametric LLMs, training data is diluted across billions of parameters — privacy signal is weak. In RAG, the private document is **explicitly retrieved and placed in the context window**. The membership signal is dramatically amplified.

      ## Attack mechanism

      1. Query the RAG system with or about a target document
      2. Observe output differences (verbatim phrases, specific facts, stylistic markers)
      3. Compare output distribution for member vs. non-member queries
      4. Threshold-based or classifier-based membership decision

      ## Key results

      - MIA success rates significantly exceed random guessing (black-box access only)
      - Queries semantically close to candidate documents have highest success rates
      - Sensitive corpora (medical, legal, financial) are at elevated risk

      > *"An attacker may be able to infer whether a certain text passage appears in the retrieval database by observing the outputs of the RAG system."* — Abstract
      """
    ),
    "sources/2025-anon-riddle-mia-rag": dd(
      "RIDDLE: Stealthy MIA (Naseh, Mia, Houmansadr 2025)",
      "arXiv 2502.00306 · Evasive Membership Inference · doi:10.48550/arXiv.2502.00306",
      """
      Shows that direct MIA queries are detectable — but stealthy paraphrase-based queries (\"riddles\") evade detection while still succeeding.

      ## The detection problem with direct MIA

      Direct MIA queries (\"What does your database say about [target document]?\") are semantically similar to the target document and detectable by similarity-based defenses like Mirabel.

      ## RIDDLE's approach

      Instead of asking directly, RIDDLE generates \"riddle\" queries — indirect paraphrases that probe for document membership without triggering obvious similarity flags.

      Example: Instead of querying verbatim content, RIDDLE asks questions that only someone who read the document could answer precisely — without the query itself being similar to the document.

      ## Results

      Strong membership inference accuracy while **remaining undetected** by agent-based filtering defenses.

      ## Implication

      The attacker-moves-second dynamic applies to privacy defenses too: any defense that relies on detecting query similarity to protected documents can be evaded by an adaptive attacker.
      """
    ),
    "sources/2025-anon-safeguarding-privacy-mia": dd(
      "Mirabel: Safeguarding Privacy (Choi et al. 2025)",
      "arXiv 2505.22061 · Detect-and-Hide Defense · doi:10.48550/arXiv.2505.22061",
      """
      Mirabel uses Gumbel distribution modeling of similarity scores to detect and hide from MIA queries.

      ## The key insight

      MIA queries exhibit high similarity to exactly **one** document in the database. Normal queries either match nothing well or match multiple documents (ambiguous). Gumbel distribution models the expected maximum similarity for normal queries — statistical outliers are flagged.

      ## Defense mechanism: detect-and-hide

      When a query's maximum similarity score is a statistical outlier:
      1. Flag the query as a potential MIA attempt
      2. Hide the suspicious document from the LLM context
      3. Generate a response without the potentially-targeted private content

      ## Properties

      - System-agnostic: operates at retrieval layer without LLM modification
      - Preserves utility for benign users
      - Successfully defends against S2MIA, MBA, and interrogation attacks

      ## Limitation

      RIDDLE (2025) shows Mirabel can be evaded by reformulating queries as indirect \"riddles\" that avoid high direct similarity to target documents.
      """
    ),
    "sources/2024-koga-dp-rag": dd(
      "DP-RAG (Koga et al. 2024)",
      "arXiv 2412.04697 · Formal Differential Privacy for RAG · doi:10.48550/arXiv.2412.04697",
      """
      The first application of differential privacy to RAG retrieval — provides formal (ε,δ)-DP guarantees against membership inference and data extraction.

      ## The DP mechanism

      **Query-time DP**: calibrated noise is added to:
      - Retrieval query embeddings (prevents identifying specific queries with specific documents)
      - Retrieved passage representations (prevents exact document content leakage)
      - **Private voting**: aggregate retrieval decisions across noisy queries → which documents to retrieve

      ## The fundamental guarantee

      (ε,δ)-DP ensures the probability of any output changes by at most e^ε (plus δ slack) when any single document is added to or removed from the database. An attacker cannot reliably determine membership from outputs.

      ## The cost

      Stronger privacy (smaller ε) → more noise → worse retrieval quality. This trade-off is **fundamental** and cannot be eliminated, only managed.

      ## Best fit

      High-sensitivity domains (medical, legal, financial) where regulatory compliance (HIPAA, GDPR) requires formal privacy guarantees and accuracy degradation is acceptable.

      > *"Without effective privacy protection, RAG may leak sensitive information from private documents through its generated responses."* — Abstract
      """
    ),
    "sources/2025-anon-dp-synthetic-text-rag": dd(
      "DP-SynRAG (2025)",
      "arXiv 2510.06719 · Corpus-Level DP via Synthetic Text · doi:10.48550/arXiv.2510.06719",
      """
      Fixes DP-RAG's privacy budget accumulation problem by generating the corpus synthetically with DP guarantees at creation time.

      ## The accumulation problem with query-time DP

      Each query against a DP-RAG system consumes privacy budget. After enough queries, the cumulative budget is exhausted and formal guarantees weaken. For production systems with millions of queries, this is impractical.

      ## DP-SynRAG's approach

      Replace the private corpus with a **differentially private synthetic version** generated once at corpus creation time:
      1. Train a DP generative model on the private corpus
      2. Generate a synthetic corpus satisfying (ε,δ)-DP
      3. Use the synthetic corpus for all RAG queries — no per-query noise needed

      ## Properties

      - Privacy budget is fixed at corpus creation — no accumulation
      - Plug-and-play: any RAG system can use the synthetic corpus without modification
      - Semantic fidelity of synthetic text sufficient for RAG utility

      ## Trade-off

      One-time DP corpus generation is expensive; synthetic text quality limits RAG response quality.
      """
    ),
    "sources/2025-anon-privacy-aware-decoding": dd(
      "Privacy-Aware Decoding (2025)",
      "arXiv 2508.03098 · Inference-Time Privacy Defense · doi:10.48550/arXiv.2508.03098",
      """
      Prevents private content leakage by suppressing private-attributable tokens at generation time — no retraining required.

      ## The mechanism

      During generation, for each candidate token:
      1. Estimate whether the token is uniquely attributable to a private retrieved passage
      2. If yes, reduce its generation probability
      3. This nudges the model toward responses that don't reproduce private content verbatim

      ## Properties

      - **No retraining**: operates at decoding time as a drop-in module
      - **No corpus modification**: the original private corpus is unchanged
      - Preserves response utility for benign queries
      - Evaluated against extraction attacks and verbatim memorization probes

      ## Where it fits

      Complementary to DP defenses (which provide formal guarantees but degrade retrieval) and Mirabel (which operates at query input). PAD operates at output — a third line of defense.

      > *"We propose Privacy-Aware Decoding (PAD), a lightweight, inference-time approach ... [that] suppresses the generation of tokens uniquely attributable to private retrieved passages."* — Abstract
      """
    ),
    "sources/2026-anon-pidp-attack": dd(
      "PIDP-Attack (2026)",
      "arXiv 2603.25164 · Combined Poisoning + Injection · doi:10.48550/arXiv.2603.25164",
      """
      Combines corpus poisoning and indirect prompt injection into a single synergistic attack — bypasses defenses that target only one vector.

      ## The compound attack

      Poisoned database entries serve two purposes simultaneously:
      1. **Retrieval**: semantically crafted to rank highly for target queries (corpus poisoning)
      2. **Execution**: contain embedded adversarial instructions (prompt injection)

      ## Why combination is more powerful

      - Defenses that filter for poisoned content (semantic anomalies) may miss instruction payloads
      - Defenses that filter for injection signatures may miss factually-manipulative content
      - A defense addressing only one vector leaves the other vector exploitable

      ## Implications for defense design

      Defenses must address **both** the retrieval and generation pipelines jointly. The interaction between retrieval and generation attack surfaces creates emergent compound vulnerabilities not present in either component alone.

      > *"RAG systems have been introduced, enhancing LLMs with external knowledge sources ... [but this] introduces the combined attack surface of both prompt injection and database poisoning."* — Abstract
      """
    ),
    "sources/2025-anon-defending-knowledge-poisoning": dd(
      "Consistency-Checking Defense (2025)",
      "arXiv 2508.02835 · Parametric Knowledge Consistency · doi:10.48550/arXiv.2508.02835",
      """
      Detects poisoned passages by cross-checking them against the LLM's parametric knowledge — contradictions flag potential poisoning.

      ## The insight

      Poisoned passages often assert facts that contradict what the LLM learned during pre-training. By asking the LLM \"does this retrieved passage contradict what you know?\" and filtering high-contradiction passages, many poisoning attacks can be mitigated.

      ## Properties

      - Computationally lightweight (one additional inference pass)
      - No corpus or LLM modification required
      - Reduces attack success rates for PoisonedRAG-style attacks

      ## Limitations

      - Fails against attacks that craft passages **consistent with LLM priors** (adaptive attacks)
      - A legitimate retrieved passage may contradict outdated LLM knowledge — false positives degrade utility
      - Cannot detect attacks in knowledge domains where the LLM has weak priors

      The general principle is sound, but adaptive attackers simply craft passages that exploit the LLM's pretraining distribution rather than contradicting it.
      """
    ),
    "sources/2024-anon-no-free-lunch-fairness": dd(
      "No Free Lunch: RAG Undermines Fairness (Zhang et al. 2024)",
      "arXiv 2410.07589 · RAG Fairness Cost · doi:10.48550/arXiv.2410.07589",
      """
      Establishes the no-free-lunch principle for RAG fairness: accuracy gains come at a systematic fairness cost.

      ## The no-free-lunch argument

      RAG improves factual accuracy by retrieving relevant content. But the same retrieval mechanism that improves accuracy for well-represented groups **amplifies disparities** for underrepresented groups — retrieving more (and better quality) content for majority groups.

      ## Threat model for RAG fairness

      1. **Biased corpus**: demographic skew in the retrieval corpus
      2. **Retrieval ranking disparity**: better-represented groups get higher-relevance passages
      3. **Generation amplification**: LLM amplifies retrieved disparities in its outputs

      ## Key empirical findings

      - Even users aware of the fairness problem cannot overcome corpus-level bias via prompt engineering alone
      - Fairness costs are most severe for groups **underrepresented in the retrieval corpus**
      - Evaluated on WinoBias and BBQ benchmarks

      > *"RAG is widely adopted for its effectiveness and cost-efficiency in mitigating hallucinations ... However, is this effectiveness and cost-efficiency truly a free lunch?"* — Abstract
      """
    ),
    "sources/2024-wu-does-rag-unfairness": dd(
      "Does RAG Introduce Unfairness? (Wu et al. 2024)",
      "arXiv 2409.19804 · Empirical Fairness Evaluation · doi:10.48550/arXiv.2409.19804",
      """
      Empirical evaluation of RAG's fairness impact across gender, geography, and demographic groups — finding it's complicated.

      ## The bidirectionality finding

      Unlike Zhang et al. (2024) which emphasizes fairness costs, Wu et al. find that RAG's fairness impact is **bidirectional**:
      - Can **reduce** some disparities: factual grounding overrides biased LLM priors for some groups
      - Can **amplify** others: biased corpus representation translates directly to output disparities

      ## Key finding on corpus composition

      Geographic and demographic representation gaps in Wikipedia-scale corpora translate directly to output disparities. Groups underrepresented in Wikipedia receive worse RAG responses.

      ## Finding on LLM choice

      Models differ substantially in how they handle retrieved biased content — LLM selection matters for fairness, not just retrieval architecture.

      ## Gap identified

      Existing fairness benchmarks for LLMs are insufficient for RAG-specific fairness — need to evaluate the full pipeline (corpus + retrieval + generation).
      """
    ),
    "sources/2024-anon-trustworthiness-rag-survey": dd(
      "Trustworthiness in RAG: A Survey (2024)",
      "arXiv 2409.10102 · Multi-Dimensional Trust Framework · doi:10.48550/arXiv.2409.10102",
      """
      The first survey to frame RAG security, privacy, fairness, hallucination, and accountability as a unified multi-dimensional trustworthiness problem.

      ## The five trust dimensions

      | Dimension | Core concern | Primary threat |
      |-----------|-------------|---------------|
      | Factual accuracy | Hallucination, faithfulness | Corpus misinformation |
      | Privacy | MIA, data extraction | Sensitive corpora |
      | Fairness | Demographic disparity | Biased corpora |
      | Robustness | Poisoning, injection | Adversarial corpora |
      | Accountability | Provenance, auditability | Opaque retrieval |

      ## Key insight

      External knowledge retrieval introduces trust risks **not present in standalone LLMs** — each dimension must be evaluated specifically for the RAG pipeline, not inherited from LLM safety research.

      ## The gap

      Most RAG literature optimizes accuracy and efficiency, neglecting trust dimensions. Current benchmarks address each dimension in isolation.

      > *"The trustworthiness of RAG systems remains insufficiently explored."* — Abstract
      """
    ),
    "sources/2025-anon-trustworthy-rag-survey": dd(
      "Towards Trustworthy RAG: A Survey (2025)",
      "arXiv 2502.06872 · Component-Wise Trust Framework · doi:10.48550/arXiv.2502.06872",
      """
      Component-wise trust framework — identifies knowledge source integrity as the most critical and least-addressed trust dimension.

      ## The component-wise framework

      Trust must be designed into each RAG component **independently** and verified end-to-end:
      1. **Trusted knowledge sources**: corpus integrity, provenance, decontamination
      2. **Reliable retrieval**: robustness to adversarial queries, semantic drift
      3. **Faithful generation**: correct use of retrieved content, uncertainty signaling
      4. **Accountable system design**: provenance tracking, explainability

      ## Priority finding

      Knowledge source integrity is the **most critical and least addressed** trust dimension. All downstream trust properties are conditional on having a trustworthy corpus.

      ## Practical implication

      Investing in retrieval-stage defenses (corpus auditing, provenance tracking) has higher expected security value than generation-stage defenses — the problem is upstream.

      > *"By integrating context retrieval into content generation, RAG provides reliable and up-to-date external knowledge ... However, despite RAG's success and potential, recent studies show that RAG faces unique trustworthiness challenges."* — Abstract
      """
    ),
    "sources/2026-anon-securing-rag-taxonomy": dd(
      "Securing RAG: Attack-Defense Taxonomy (2026)",
      "arXiv 2604.08304 · Comprehensive Security Taxonomy · doi:10.48550/arXiv.2604.08304",
      """
      The most comprehensive security taxonomy for RAG to date — four-layer framework with maturity assessment for each defense layer.

      ## The four-layer taxonomy

      | Layer | Attacks | Defense maturity |
      |-------|---------|-----------------|
      | Knowledge-base integrity | Corpus poisoning, data extraction | Most developed |
      | Retriever security | Backdoors, adversarial queries | Least mature |
      | Context injection | IPI, combined PIDP attacks | Developing |
      | Generation faithfulness | Hallucination exploitation | Moderate |

      ## Key contributions

      - Distinguishes RAG-specific vulnerabilities from general LLM risks (previous surveys conflated these)
      - Uneven defense maturity finding: retriever-level defenses are largely absent from the literature
      - Future directions: certified robustness for retrieval, formal privacy frameworks, cross-document attack detection

      ## The central argument

      > *"Secure RAG is fundamentally about securing the external knowledge access layer — the retrieval mechanism and its knowledge sources."* — Abstract

      Security of the LLM itself is a necessary but not sufficient condition for secure RAG.
      """
    ),
    "sources/2025-anon-rag-security-threat-model": dd(
      "RAG Security Threat Model (2025)",
      "arXiv 2509.20324 · First Formal RAG Threat Model · doi:10.48550/arXiv.2509.20324",
      """
      First paper to provide a formal threat model for RAG — necessary foundation for rigorous defense evaluation.

      ## The formalization

      Maps the attack surface across all three RAG components with formal attacker capability models:

      | Component | Threats | Attacker capability |
      |-----------|---------|---------------------|
      | Knowledge base | Poisoning, extraction, MIA | Corpus write, read access |
      | Retriever | Backdoors, adversarial queries | Model access (supply chain) |
      | Generator | IPI, context hijacking | No direct access needed |

      ## Why formalization matters

      Without a formal threat model:
      - Papers use incompatible attacker capability assumptions
      - Defense papers cherry-pick attack settings where their defense performs well
      - The field cannot make cumulative progress

      ## Distinguishing RAG from LLM threats

      Many existing papers apply LLM threat models to RAG without adaptation. This paper shows that RAG introduces **fundamentally new** threat categories (knowledge base threats) that require new security analysis.

      > *"RAG has shown strong potential in reducing hallucinations ... but it also introduces new privacy and security challenges that differ from those faced by traditional LLMs."* — Abstract
      """
    ),
    "sources/2025-anon-rag-comprehensive-survey": dd(
      "RAG Comprehensive Survey (2025)",
      "arXiv 2506.00054 · Architecture + Robustness Frontiers · doi:10.48550/arXiv.2506.00054",
      """
      Broad survey positioning RAG robustness as a frontier problem requiring multi-disciplinary solutions.

      ## Architecture evolution covered

      Naive RAG → Modular RAG → Iterative/Agentic RAG → Adaptive RAG (Self-RAG)

      ## Robustness frontiers identified

      1. Adversarial corpus poisoning
      2. Membership inference attacks
      3. Indirect prompt injection
      4. Fairness disparities
      5. Hallucination persistence despite retrieval

      ## The unified evaluation gap

      No benchmark simultaneously evaluates accuracy, robustness, privacy, and fairness — the field has separate benchmarks for each dimension. This prevents understanding trade-offs between them.

      ## Future directions

      Future RAG systems must **co-optimize** for all four dimensions simultaneously. The field currently treats them as independent optimization targets, which is architecturally naive.

      > *"While RAG addresses critical limitations of parametric knowledge storage ... it introduces new challenges in retrieval quality, grounding fidelity, pipeline efficiency, and robustness."* — Abstract
      """
    )
  }
}

out = pathlib.Path(__file__).parent / "plan.json"
out.write_text(json.dumps(plan, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Wrote {out.stat().st_size // 1024} KB -> {out}")
