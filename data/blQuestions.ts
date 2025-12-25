
export type BLOption = { 
  text: string 
  scores: Record<string, number> 
} 
export type BLQuestion = { 
  question: string 
  options: BLOption[] 
}

export const blQuestions: BLQuestion[] = [
  // 1
  {
    question: "What kind of love feels safest to you?",
    options: [
      { text: "Warm and emotionally secure", scores: { king: 2, sun: 1, peem: 1 } },
      { text: "Quiet but deeply loyal", scores: { gu_chengyu: 2, sarawat: 1, mai: 1 } },
      { text: "Intense and passionate", scores: { tharn: 2, vegas: 1, kinn: 1 } },
      { text: "Playful and affectionate", scores: { phayu: 2, jin: 1, peem: 1 } },
      { text: "Protective and steady", scores: { prapai: 2, lian: 1, king: 1 } },
    ],
  },

  // 2
  {
    question: "How do you handle emotional conflict?",
    options: [
      { text: "Talk calmly and resolve it", scores: { king: 2, sun: 1, sarawat: 1 } },
      { text: "Withdraw to think", scores: { gu_chengyu: 2, segasaki: 1, chi_cheng: 1 } },
      { text: "Confront directly", scores: { tharn: 2, kinn: 1, vegas: 1 } },
      { text: "Hide it behind humor", scores: { jin: 2, phayu: 1, peem: 1 } },
      { text: "Endure quietly", scores: { mai: 2, lian: 1, sun: 1 } },
    ],
  },

  // 3
  {
    question: "What attracts you first?",
    options: [
      { text: "Confidence", scores: { phayu: 2, jin: 1, kinn: 1 } },
      { text: "Gentleness", scores: { sun: 2, peem: 1, han_tuo: 1 } },
      { text: "Mystery", scores: { segasaki: 2, gu_chengyu: 1, chi_cheng: 1 } },
      { text: "Intensity", scores: { vegas: 2, tharn: 1, kinn: 1 } },
      { text: "Reliability", scores: { king: 2, sarawat: 1, mai: 1 } },
    ],
  },

  // 4
  {
    question: "Your ideal partner in public?",
    options: [
      { text: "Calm and respectful", scores: { sarawat: 2, king: 1, sun: 1 } },
      { text: "Playful and teasing", scores: { phayu: 2, jin: 1, peem: 1 } },
      { text: "Protective", scores: { prapai: 2, kinn: 1, vegas: 1 } },
      { text: "Quiet but present", scores: { gu_chengyu: 2, segasaki: 1, mai: 1 } },
      { text: "Soft-spoken", scores: { han_tuo: 2, peem: 1, sun: 1 } },
    ],
  },

  // 5
  {
    question: "When you’re exhausted, you want your partner to…",
    options: [
      { text: "Hold you silently", scores: { sun: 2, segasaki: 1, gu_chengyu: 1 } },
      { text: "Encourage you gently", scores: { lian: 2, jin: 1, peem: 1 } },
      { text: "Refuse to leave you", scores: { prapai: 2, king: 1, kinn: 1 } },
      { text: "Understand without words", scores: { chi_cheng: 2, sarawat: 1, mai: 1 } },
      { text: "Distract you playfully", scores: { phayu: 2, jin: 1, peem: 1 } },
    ],
  },

  // 6
  {
    question: "Your biggest weakness in love?",
    options: [
      { text: "Trust issues", scores: { chi_cheng: 2, segasaki: 1, gu_chengyu: 1 } },
      { text: "Fear of control", scores: { jin: 2, tharn: 1, kinn: 1 } },
      { text: "Over-giving", scores: { mai: 2, han_tuo: 1, peem: 1 } },
      { text: "Avoiding conflict", scores: { sun: 2, king: 1, sarawat: 1 } },
      { text: "Emotional extremes", scores: { vegas: 2, kinn: 1, tharn: 1 } },
    ],
  },

  // 7
  {
    question: "What kind of jealousy do you accept?",
    options: [
      { text: "None", scores: { king: 2, sun: 1, sarawat: 1 } },
      { text: "A little", scores: { segasaki: 2, gu_chengyu: 1, chi_cheng: 1 } },
      { text: "Protective only", scores: { prapai: 2, kinn: 1, phayu: 1 } },
      { text: "Possessive", scores: { vegas: 2, tharn: 1, kinn: 1 } },
      { text: "Playful jealousy", scores: { jin: 2, phayu: 1, peem: 1 } },
    ],
  },

  // 8
  {
    question: "Your love language?",
    options: [
      { text: "Acts of service", scores: { kwon_jeongu: 2, king: 1, mai: 1 } },
      { text: "Words", scores: { peem: 2, jin: 1, phayu: 1 } },
      { text: "Touch", scores: { tharn: 2, vegas: 1, kinn: 1 } },
      { text: "Time together", scores: { sun: 2, sarawat: 1, segasaki: 1 } },
      { text: "Protection", scores: { prapai: 2, kinn: 1, lian: 1 } },
    ],
  },

  // 9
  {
    question: "You fall in love when someone…",
    options: [
      { text: "Is always reliable", scores: { king: 2, sun: 1, sarawat: 1 } },
      { text: "Understands your pain", scores: { chi_cheng: 2, gu_chengyu: 1, segasaki: 1 } },
      { text: "Challenges you", scores: { jin: 2, tharn: 1, kinn: 1 } },
      { text: "Protects you quietly", scores: { prapai: 2, mai: 1, lian: 1 } },
      { text: "Supports your dreams", scores: { peem: 2, han_tuo: 1, sun: 1 } },
    ],
  },

  // 10
  {
    question: "Your ideal ending?",
    options: [
      { text: "Peaceful and stable", scores: { sun: 2, king: 1, sarawat: 1 } },
      { text: "Hard-earned but deep", scores: { gu_chengyu: 2, chi_cheng: 1, segasaki: 1 } },
      { text: "Intense forever love", scores: { tharn: 2, kinn: 1, vegas: 1 } },
      { text: "Playful and warm", scores: { jin: 2, phayu: 1, peem: 1 } },
      { text: "Quiet devotion", scores: { lian: 2, mai: 1, han_tuo: 1 } },
    ],
  },

  // 11
  {
    question: "When love gets difficult, you…",
    options: [
      { text: "Stay and fix it", scores: { prapai: 2, king: 1, sun: 1 } },
      { text: "Pull away emotionally", scores: { segasaki: 2, gu_chengyu: 1, chi_cheng: 1 } },
      { text: "Fight harder", scores: { tharn: 2, kinn: 1, vegas: 1 } },
      { text: "Try to keep things light", scores: { jin: 2, phayu: 1, peem: 1 } },
      { text: "Endure quietly", scores: { mai: 2, sarawat: 1, lian: 1 } },
    ],
  },

  // 12
  {
    question: "What do you need most from a partner?",
    options: [
      { text: "Emotional safety", scores: { sun: 2, king: 1, peem: 1 } },
      { text: "Understanding silence", scores: { gu_chengyu: 2, segasaki: 1, sarawat: 1 } },
      { text: "Unbreakable loyalty", scores: { kinn: 2, prapai: 1, vegas: 1 } },
      { text: "Motivation and growth", scores: { jin: 2, lian: 1, phayu: 1 } },
      { text: "Gentle patience", scores: { han_tuo: 2, mai: 1, sun: 1 } },
    ],
  },

  // 13
  {
    question: "What scares you most in love?",
    options: [
      { text: "Being abandoned", scores: { chi_cheng: 2, mai: 1, peem: 1 } },
      { text: "Losing yourself", scores: { jin: 2, sarawat: 1, gu_chengyu: 1 } },
      { text: "Losing control", scores: { vegas: 2, kinn: 1, tharn: 1 } },
      { text: "Emotional instability", scores: { sun: 2, king: 1, segasaki: 1 } },
      { text: "Being misunderstood", scores: { lian: 2, han_tuo: 1, peem: 1 } },
    ],
  },

  // 14
  {
    question: "Your relationship pace?",
    options: [
      { text: "Slow and steady", scores: { sun: 2, sarawat: 1, mai: 1 } },
      { text: "Careful and cautious", scores: { gu_chengyu: 2, segasaki: 1, chi_cheng: 1 } },
      { text: "Fast and intense", scores: { tharn: 2, kinn: 1, vegas: 1 } },
      { text: "Fun and spontaneous", scores: { jin: 2, phayu: 1, peem: 1 } },
      { text: "Structured and stable", scores: { lian: 2, king: 1, sarawat: 1 } },
    ],
  },

  // 15
  {
    question: "Your love story theme?",
    options: [
      { text: "Healing and comfort", scores: { sun: 2, king: 1, peem: 1 } },
      { text: "Slow-burn pain to love", scores: { chi_cheng: 2, gu_chengyu: 1, segasaki: 1 } },
      { text: "Dark and obsessive", scores: { vegas: 2, kinn: 1, tharn: 1 } },
      { text: "Chaotic but sincere", scores: { jin: 2, phayu: 1, prapai: 1 } },
      { text: "Quiet lifelong devotion", scores: { mai: 2, han_tuo: 1, sarawat: 1 } },
    ],
  },
]
