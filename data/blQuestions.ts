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
      { text: "Warm, gentle, and emotionally secure", scores: { king: 2, sun: 2, peem: 1 } },
      { text: "Quiet, deep, and understanding", scores: { gu_chengyu: 2, segasaki: 1, sarawat: 1 } },
      { text: "Intense and passionate", scores: { kinn: 2, tharn: 1, vegas: 1 } },
      { text: "Playful but sincere", scores: { jin: 2, phayu: 1, hantuo: 1 } },
    ],
  },

  // 2
  {
    question: "How do you deal with emotional conflict?",
    options: [
      { text: "Talk it out calmly", scores: { king: 2, sun: 1, lian: 1 } },
      { text: "Need time alone first", scores: { chi_cheng: 2, gu_chengyu: 1, segasaki: 1 } },
      { text: "React emotionally but honestly", scores: { vegas: 2, tharn: 1, kinn: 1 } },
      { text: "Hide it behind jokes", scores: { jin: 2, phayu: 1, peem: 1 } },
    ],
  },

  // 3
  {
    question: "What attracts you first?",
    options: [
      { text: "Confidence and charm", scores: { phayu: 2, jin: 1, kinn: 1 } },
      { text: "Gentleness and patience", scores: { sun: 2, hantuo: 1, mai: 1 } },
      { text: "Mystery and emotional depth", scores: { gu_chengyu: 2, segasaki: 1, chi_cheng: 1 } },
      { text: "Intensity and dominance", scores: { vegas: 2, tharn: 1, prapai: 1 } },
    ],
  },

  // 4
  {
    question: "Your ideal partner in public is…",
    options: [
      { text: "Calm and respectful", scores: { sarawat: 2, king: 1, gu_chengyu: 1 } },
      { text: "Playful and teasing", scores: { phayu: 2, jin: 1, peem: 1 } },
      { text: "Protective and intimidating", scores: { prapai: 2, kinn: 1, vegas: 1 } },
      { text: "Quiet but always present", scores: { sun: 2, segasaki: 1, mai: 1 } },
    ],
  },

  // 5
  {
    question: "When you're exhausted, you want your partner to…",
    options: [
      { text: "Hold you silently", scores: { sun: 2, segasaki: 1, gu_chengyu: 1 } },
      { text: "Encourage you forward", scores: { jin: 2, lian: 1, phayu: 1 } },
      { text: "Never leave your side", scores: { prapai: 2, kinn: 1, king: 1 } },
      { text: "Understand without words", scores: { chi_cheng: 2, sarawat: 1, mai: 1 } },
    ],
  },

  // 6
  {
    question: "Your biggest weakness in love?",
    options: [
      { text: "Trust issues", scores: { chi_cheng: 2, segasaki: 1, gu_chengyu: 1 } },
      { text: "Fear of losing control", scores: { jin: 2, vegas: 1, kinn: 1 } },
      { text: "Giving too much", scores: { mai: 2, hantuo: 1, peem: 1 } },
      { text: "Avoiding conflict", scores: { sun: 2, king: 1, sarawat: 1 } },
    ],
  },

  // 7
  {
    question: "What kind of jealousy do you accept?",
    options: [
      { text: "A little is fine", scores: { segasaki: 2, vegas: 1, kinn: 1 } },
      { text: "None at all", scores: { king: 2, sun: 1, sarawat: 1 } },
      { text: "Protective jealousy only", scores: { prapai: 2, phayu: 1, kinn: 1 } },
      { text: "Secretly possessive", scores: { gu_chengyu: 2, chi_cheng: 1, tharn: 1 } },
    ],
  },

  // 8
  {
    question: "Your love language?",
    options: [
      { text: "Acts of service", scores: { kwon_jeongu: 2, mai: 1, king: 1 } },
      { text: "Words of reassurance", scores: { peem: 2, jin: 1, phayu: 1 } },
      { text: "Physical affection", scores: { tharn: 2, vegas: 1, kinn: 1 } },
      { text: "Quality time", scores: { sun: 2, segasaki: 1, sarawat: 1 } },
    ],
  },

  // 9
  {
    question: "You fall in love when someone…",
    options: [
      { text: "Is always reliable", scores: { king: 2, sun: 1, prapai: 1 } },
      { text: "Understands your pain", scores: { chi_cheng: 2, gu_chengyu: 1, segasaki: 1 } },
      { text: "Challenges you", scores: { jin: 2, tharn: 1, kinn: 1 } },
      { text: "Protects you silently", scores: { sarawat: 2, mai: 1, hantuo: 1 } },
    ],
  },

  // 10
  {
    question: "Your ideal ending?",
    options: [
      { text: "Peaceful and stable", scores: { king: 2, sun: 2 } },
      { text: "Hard-earned but deep", scores: { gu_chengyu: 2, chi_cheng: 1, segasaki: 1 } },
      { text: "All-consuming devotion", scores: { vegas: 2, kinn: 1, tharn: 1 } },
      { text: "Playful forever love", scores: { jin: 2, phayu: 1, peem: 1 } },
    ],
  },

  // 11
  {
    question: "When love gets difficult, you…",
    options: [
      { text: "Stay and fix it", scores: { prapai: 2, king: 1, sun: 1 } },
      { text: "Withdraw emotionally", scores: { segasaki: 2, gu_chengyu: 1, chi_cheng: 1 } },
      { text: "Fight harder", scores: { tharn: 2, kinn: 1, vegas: 1 } },
      { text: "Try to lighten the mood", scores: { jin: 2, phayu: 1, peem: 1 } },
    ],
  },

  // 12
  {
    question: "Your partner should be someone who…",
    options: [
      { text: "Makes you feel safe", scores: { sun: 2, king: 1, sarawat: 1 } },
      { text: "Understands silence", scores: { gu_chengyu: 2, segasaki: 1, mai: 1 } },
      { text: "Is fiercely loyal", scores: { kinn: 2, prapai: 1, vegas: 1 } },
      { text: "Makes life exciting", scores: { jin: 2, phayu: 1, tharn: 1 } },
    ],
  },

  // 13
  {
    question: "What scares you most in love?",
    options: [
      { text: "Being abandoned", scores: { chi_cheng: 2, mai: 1, peem: 1 } },
      { text: "Losing independence", scores: { jin: 2, sarawat: 1, gu_chengyu: 1 } },
      { text: "Losing control", scores: { vegas: 2, kinn: 1, tharn: 1 } },
      { text: "Emotional instability", scores: { sun: 2, king: 1, segasaki: 1 } },
    ],
  },

  // 14
  {
    question: "Your relationship pace?",
    options: [
      { text: "Slow and steady", scores: { sun: 2, sarawat: 1, mai: 1 } },
      { text: "Careful and cautious", scores: { gu_chengyu: 2, segasaki: 1, chi_cheng: 1 } },
      { text: "Fast and intense", scores: { tharn: 2, vegas: 1, kinn: 1 } },
      { text: "Fun and spontaneous", scores: { jin: 2, phayu: 1, peem: 1 } },
    ],
  },

  // 15
  {
    question: "Your love story theme?",
    options: [
      { text: "Healing and comfort", scores: { sun: 2, king: 1, peem: 1 } },
      { text: "Slow burn pain → love", scores: { chi_cheng: 2, gu_chengyu: 1, segasaki: 1 } },
      { text: "Dark and obsessive", scores: { vegas: 2, kinn: 1, tharn: 1 } },
      { text: "Chaotic but sincere", scores: { jin: 2, phayu: 1, prapai: 1 } },
    ],
  },
]
