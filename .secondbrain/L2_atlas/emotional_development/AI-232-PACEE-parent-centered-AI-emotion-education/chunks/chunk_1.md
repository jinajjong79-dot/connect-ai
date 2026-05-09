PACEE: Parent-Centered AI Scaffolding for Emotion Education in Early Childhood Conversations
Authors: Yu Mei, Xutong Wang, Ziyao Zhang, Yiming Fu, Shiyi Wang, Qingyang Wan, Qinghuan Lan, Chang Liu, Jie Cai, Chun Yu, Yuanchun Shi (Tsinghua University, Dublin City University)
arXiv: 2511.14414 | Year: 2025
ATLAS ID: AI-232
Category: emotional_development / AI-assisted parenting / emotion education
Tier: 2 | Grade: A ★★★

=== OVERVIEW ===

Emotional development is crucial for children ages 3-6, yet most AI systems for emotion support target older children through direct child-AI interaction. This work addresses a critical gap by developing PACEE (Parent-Centered AI Scaffolding for Emotion Education), an LLM-based assistant that empowers parents—rather than replacing them—as primary emotion coaches. Through formative studies with kindergarten teachers and parents, the authors identified three key challenges: "limited parental expertise, insufficient feedback, and a lack of understanding of children's emotional states." PACEE comprises three modules addressing these challenges: parent-child conversational support following Gottman's Five Steps, personalized feedback reports, and child emotional modeling. User evaluation with 16 families demonstrated enhanced parent-child engagement, deeper emotional communication, and improved parental confidence and expertise.

=== INTRODUCTION ===

The investigation recognizes that "emotion education is critical for children aged 3 to 6" as they "begin to understand emotions such as anger, fear, and sadness, and learn to express and regulate these feelings." Young children present particular challenges: they "experience emotions intensely but have limited ability to verbalize them" and "rely heavily on parental guidance in early emotional development."

Despite this central role, "many [parents] lack expertise in child psychology and communication strategies." Parents frequently struggle with interpreting "children's ambiguous emotional signals" and "support[ing] emotional regulation through conversation."

=== METHODS ===

Study Design employed a three-phase methodology:

Phase 1: Formative Study — Conducted interviews with 5 kindergarten teachers and 5 parents of children ages 3-6, plus observational experiments with 5 parent-child pairs. Participants engaged in 30-minute lab sessions where parents guided children through emotion scenarios following established coaching frameworks.

Phase 2: System Development — Designed PACEE based on formative insights, incorporating three core modules addressing identified challenges.

Phase 3: Evaluation — Within-subject study comparing PACEE against a baseline condition with 16 parent-child pairs.

Formative Study Findings — Three critical challenges emerged:

C1 (Limited Parental Expertise): All interviewed parents "reported lacking professional knowledge and practical strategies for guiding children's emotions." Parents struggled to "translate general theoretical guidelines into concrete actions."

C2 (Insufficient Feedback): Parents "often lack objective feedback when guiding children's emotional development," creating uncertainty about intervention effectiveness.

C3 (Limited Understanding of Emotional States): Parents experienced difficulty "accurately identifying children's emotions and their causes," partly due to "limited visibility into children's school experiences."

PACEE System Architecture:

1. Parent-Child Conversational Scenario Module — Supports real-time parent guidance through five-stage workflow operationalizing Gottman's framework: (S1) emotion awareness, (S2) emotion labeling, (S3) empathetic listening, (S4) validation, (S5) problem-solving support.

2. Parental Feedback Report Module — Analyzes conversation transcripts and generates "personalized recommendations grounded in established emotional education frameworks."

3. Child Emotional Modeling Module — Constructs emotional profiles integrating "parents' long-term observations collected through a semi-structured AI interview, and behavioral analysis of parent-child conversations."

The underlying LLM agent workflow employs dual reasoning: rapid real-time conversational support and reflective reasoning for emotional profile updates.

=== RESULTS ===

RQ1: Enhancement of Family Emotion Education

Increased Interaction Metrics:
- Session duration: PACEE sessions lasted significantly longer (M=892.37s vs. M=560.17s baseline, p<0.01)
- Dialogue turns: More exchanges occurred with PACEE (M=60 vs. M=38, p<0.05)
- Emotional expression: Children used more emotion words (M=19 vs. M=10, p<0.01)

Sustained Engagement: Temporal analysis revealed "no significant differences between the first and second halves," suggesting engagement remained stable rather than reflecting novelty effects.

Parental Experience: PACEE significantly improved parent satisfaction (p<0.05), reduced effort (p<0.01), and decreased frustration (p<0.05) compared to baseline.

RQ2: Parent-AI Collaboration in Profile Development

"Parents and PACEE play complementary roles in constructing children's emotional profiles." Parents contributed contextual knowledge from "everyday life events and experiential knowledge of behavioral habits," while PACEE identified patterns from interaction data. 14 of 16 parents found PACEE's analysis to be "a useful external perspective that complemented their experience." All parents viewed themselves as "primary decision-makers in their children's education."

RQ3: Addressing Identified Challenges

- C1: Parents received "concrete, child-friendly ways to express emotions"; 10 participants noted suggestions "helped them organize thoughts and communicate more openly."
- C2: Eight parents reported "AI-generated analyses revealed previously unnoticed shortcomings"; five valued "structured summaries of conversation highlights."
- C3: Twelve parents reported the system "introduced new knowledge and perspectives," enabling them to "overcome cognitive blind spots."

=== DISCUSSION ===

The authors propose reconceptualizing Gottman's dyadic model as a "triadic AI-parent-child collaboration mode." For young children with limited verbalization, "emotion recognition should be understood less as eliciting verbal explanations and more as helping parents and children jointly interpret emotions through concrete scenarios."

Three key design considerations:
1. Customized Parental Support: Systems should "adapt AI support to both children's characteristics and parental preferences."
2. Transparent Collaboration: Systems must "explain how suggestions are generated and allow parents to question or adjust AI interpretations."
3. Parental Autonomy: AI should "avoid overly prescriptive guidance" and instead "support flexible, parent-controlled use."

This work introduces an "asymmetric triadic interaction framework, where AI primarily supports parents while preserving parent-led parent-child interaction."

Limitation noted: "Because PACEE's guidance is AI-generated and lacks expert validation, incorrect or poorly contextualized suggestions may interfere with effective emotional coaching."

=== KEY FINDINGS ===

- AI (LLM) can successfully support parent-centered emotion education without replacing parent-child interaction
- With PACEE: session duration +60%, dialogue turns +58%, child emotion words +90% (all p<0.01 or p<0.05)
- Parents improved in confidence, reduced frustration, more capable of labeling children's emotions
- Asymmetric triadic model: AI → Parent → Child (not AI → Child directly)
- Real-time guidance following Gottman's 5-step emotion coaching framework
- Child emotional profiling enables personalized coaching recommendations

=== ATLAS SIGNIFICANCE ===