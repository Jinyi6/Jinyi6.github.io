export const researchTracks = [
  {
    index: "01",
    eyebrow: "LLM Post-training and Agent",
    title: "Training agents that can reason, remember, and improve.",
    problem:
      "How can LLM agents learn from RL signals, retain useful memories, and reason without fragile test-time scaffolding?",
    approach:
      "I study RL-based post-training and memory-aware agent training, with a focus on verifiable rewards, distributional critics, fine-grained reasoning, and reusable interaction traces.",
    anchors: ["Atomic Reasoner", "ReMix", "DistRLVR"],
    tags: ["RL tuning", "Memory", "Reasoning"]
  },
  {
    index: "02",
    eyebrow: "LLM Agents for AI4S",
    title: "Turning natural language into executable scientific workflows.",
    problem:
      "How can LLM agents turn natural-language intent into executable scientific analysis and workflow automation?",
    approach:
      "I build agent systems that decompose tasks, coordinate tools, reflect on intermediate outputs, and lower the barrier between domain experts and computational workflows.",
    anchors: ["CellAgent", "SheetAgent", "LLM Agent Tutorial"],
    tags: ["AI for Science", "Tool use", "Workflow agents"]
  },
  {
    index: "03",
    eyebrow: "RL for Decision-Making",
    title: "Learning to explore, sample, and adapt under uncertainty.",
    problem:
      "How can decision-making agents explore, sample, and adapt under uncertainty when data and feedback are limited?",
    approach:
      "I develop exploration and data-sampling methods for noisy, offline, preference-based, and game-AI settings, then reuse these RL ideas in modern LLM-agent training.",
    anchors: ["OVD-Explorer", "PTR", "PPE"],
    tags: ["Exploration", "Offline RL", "Preference RL"]
  }
];
