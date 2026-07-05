type Part = string | { text: string; url: string };

export interface NewsItem {
  date: string;
  emoji: string;
  parts: Part[];
}

export const news: NewsItem[] = [
  {
    date: "2026-07",
    emoji: "✨",
    parts: [
      "Paper accepted by ICML 2026 as a Spotlight: ScaleMoE — Mixture-of-Experts for scalable continuous control in actor-critic RL."
    ]
  },
  {
    date: "2026-05",
    emoji: "🎉",
    parts: [
      "Paper accepted by SIGKDD 2026 Research Track: PACE."
    ]
  },
  {
    date: "2026-05",
    emoji: "🚀",
    parts: [
      "Released ",
      { text: "ScriptMem", url: "https://github.com/memorax-ai/ScriptMem" },
      ", a memory framework driven by real-world scripts."
    ]
  },
  {
    date: "2026-04",
    emoji: "🏆",
    parts: [
      "MemoraX AI memory system achieves SOTA on LoCoMo-Refined with 82.65, outperforming the next best by over 30%."
    ]
  },
  {
    date: "2026-01",
    emoji: "📝",
    parts: [
      "Three papers accepted by ICLR 2026: ",
      { text: "ReMix", url: "https://jinyi6.github.io/publication/liang-2025-remix/" },
      ", ",
      { text: "CellAgent", url: "https://jinyi6.github.io/publication/xiao-2024-cellagent/" },
      ", and ",
      { text: "From Seeing to Doing", url: "https://jinyi6.github.io/publication/yuanfsd/" },
      "."
    ]
  },
  {
    date: "2026-01",
    emoji: "🧠",
    parts: [
      "Two workshop papers accepted at ICLR 2026: ",
      { text: "AgentMemoryBench", url: "https://jinyi6.github.io/publication/ma-2026-agentmemorybench/" },
      " and ",
      { text: "DistRLVR", url: "https://jinyi6.github.io/publication/liu-2026-distrlvr/" },
      "."
    ]
  },
  {
    date: "2026-01",
    emoji: "📝",
    parts: [
      "Paper accepted by ACM TheWebConf 2026 Industry: ",
      { text: "AFE-Master", url: "https://jinyi6.github.io/publication/liang-2026-afemaster/" },
      "."
    ]
  },
  {
    date: "2025-12",
    emoji: "🔥",
    parts: [
      "Released our beginner-friendly LLM Agent tutorial (",
      { text: "website", url: "https://llm-agent-tutorial.github.io/website/" },
      " & ",
      { text: "PDF", url: "https://llm-agent-tutorial.github.io/website/A%20Beginner-Friendly%20Tutorial%20on%20LLM-based%20Agents.pdf" },
      ")."
    ]
  },
  {
    date: "2025-12",
    emoji: "🎤",
    parts: [
      "The 137th ",
      { text: "RLCHINA Paper Seminar", url: "https://rlchina.org/topic/1047" },
      " hosted!"
    ]
  }
];
