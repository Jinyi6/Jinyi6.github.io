export const selectedWorks = [
  {
    title: "DistRLVR",
    theme: "RLVR",
    role: "First author",
    venue: "SPOT@ICLR 2026",
    summary:
      "Distributional RL framework for LLM post-training with verifiable rewards, modeling token-level return distributions for more informative advantages.",
    links: [
      { label: "OpenReview", url: "https://openreview.net/forum?id=3e46ayVUgj" }
    ]
  },
  {
    title: "ScaleMoE",
    theme: "MoE for RL",
    role: "Co-author",
    venue: "ICML 2026 Spotlight",
    summary:
      "Mixture-of-experts architecture for actor-critic reinforcement learning that scales network capacity to improve sample efficiency and performance on continuous control.",
    links: []
  },
  {
    title: "ReMix",
    theme: "Post-training",
    role: "First author",
    venue: "ICLR 2026",
    summary:
      "Off-policy reinforcement finetuning for LLMs that reuses historical rollouts to make reasoning-oriented post-training more data efficient.",
    links: [
      { label: "Project", url: "https://anitaleungxx.github.io/ReMix/" }
    ]
  },
  {
    title: "CellAgent",
    theme: "AI4S Agents",
    role: "First author",
    venue: "ICLR 2026",
    summary:
      "LLM-driven multi-agent system for natural-language single-cell and spatial transcriptomics analysis, with a live system serving real user requests.",
    image: "/assets/papers/cellagent.png",
    links: [
      { label: "System", url: "http://cell.agent4science.cn/start/" }
    ]
  },
  {
    title: "AgentMemoryBench",
    theme: "Agent Memory",
    role: "First author",
    venue: "LLA@ICLR 2026",
    summary:
      "Unified benchmark for continual agent memory, measuring improvement, retention, forgetting, transfer, and conflict resolution across long-horizon scenarios.",
    links: [
      { label: "OpenReview", url: "https://openreview.net/forum?id=MSXbrNExax" }
    ]
  },
  {
    title: "Atomic Reasoner",
    theme: "Reasoning",
    role: "First author",
    venue: "",
    summary:
      "Fine-grained reasoning framework that decomposes deliberation into atomic cognitive operations without relying on heavyweight search or external tools.",
    image: "/assets/papers/atomic-reasoner.png",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2503.15944" }
    ],
    featured: true
  },
  {
    title: "PPE",
    theme: "Preference RL",
    role: "First author",
    venue: "NeurIPS 2025",
    summary:
      "Improves reward models for preference-based RL through proximal policy exploration, yielding more robust human-preference alignment.",
    links: [
      { label: "OpenReview", url: "https://openreview.net/forum?id=9KIvyH3L7c" }
    ]
  },
  {
    title: "DualRAG",
    theme: "Reasoning & Retrieval",
    role: "Co-author",
    venue: "ACL 2025",
    summary:
      "Dual-process framework that tightly couples retrieval and reasoning for multi-hop question answering, achieving stronger generalization than retrieve-then-read pipelines.",
    image: "/assets/papers/dualrag.png",
    links: [
      { label: "PDF", url: "https://aclanthology.org/2025.acl-long.1539.pdf" },
      { label: "ACL Anthology", url: "https://aclanthology.org/2025.acl-long.1539/" }
    ]
  },
  {
    title: "OVD-Explorer",
    theme: "RL Exploration",
    role: "First author",
    venue: "AAAI 2024",
    summary:
      "Noise-aware optimistic exploration method that separates useful uncertainty from stochastic noise in deep reinforcement learning.",
    image: "/assets/papers/ovd-explorer.png",
    links: [
      { label: "PDF", url: "https://ojs.aaai.org/index.php/AAAI/article/view/29303/30458" }
    ]
  },
  {
    title: "PTR",
    theme: "Offline RL",
    role: "First author",
    venue: "AAMAS 2024 Oral",
    summary:
      "Trajectory-level view of data sampling for offline RL, showing that sample organization alone can substantially improve learning efficiency.",
    links: []
  },
  {
    title: "CriticGPT",
    theme: "Embodied AI",
    role: "First author",
    venue: "RL+LLMs@AAAI 2024",
    summary:
      "Multimodal LLM used as a critic for robot manipulation, providing AI feedback that improves planning and execution in robotic tasks.",
    image: "/assets/papers/criticgpt.png",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2402.14245" },
      { label: "PDF", url: "https://arxiv.org/pdf/2402.14245" }
    ]
  }
];
