export type KpopOption = {
  text: string
  scores: Partial<Record<string, number>>
}

export type KpopQuestion = {
  question: string
  options: KpopOption[]
}

export const kpopQuestions: KpopQuestion[] = [
  // 1
  {
    question: "What kind of boyfriend vibe attracts you the most?",
    options: [
      { text: "Soft, emotional, comforting", scores: { jimin: 2, jaemin: 1, jungwoo: 1 } },
      { text: "Strong leader energy", scores: { bangchan: 2, taeyong: 1, hongjoong: 1 } },
      { text: "Playful and chaotic", scores: { felix: 2, mark: 1, jungkook: 1 } },
      { text: "Mysterious and intense", scores: { hyunjin: 2, ten: 1, taehyun: 1 } },
      { text: "Quiet but dependable", scores: { seungmin: 2, yunho: 1, xiaojun: 1 } },
    ],
  },

  // 2
  {
    question: "How should your boyfriend treat you?",
    options: [
      { text: "Emotionally protect me", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Motivate me to grow", scores: { bangchan: 2, taeyong: 1 } },
      { text: "Make me laugh every day", scores: { felix: 2, mark: 1 } },
      { text: "Understand me deeply", scores: { jaemin: 2, seungmin: 1 } },
      { text: "Be passionate and intense", scores: { hyunjin: 2, hongjoong: 1 } },
    ],
  },

  // 3
  {
    question: "Your ideal date?",
    options: [
      { text: "Late-night emotional talks", scores: { jimin: 2, taehyun: 1 } },
      { text: "Cooking together", scores: { bangchan: 2, jaemin: 1 } },
      { text: "Theme park fun", scores: { jungkook: 2, felix: 1 } },
      { text: "Art or dance date", scores: { ten: 2, hyunjin: 1 } },
      { text: "Quiet café date", scores: { seungmin: 2, yunho: 1 } },
    ],
  },

  // 4
  {
    question: "When you're sad, you want him to…",
    options: [
      { text: "Hold you silently", scores: { jimin: 2, xiaojun: 1 } },
      { text: "Talk things through", scores: { bangchan: 2, mark: 1 } },
      { text: "Distract you playfully", scores: { felix: 2, jungkook: 1 } },
      { text: "Understand without words", scores: { jaemin: 2, seungmin: 1 } },
      { text: "Protect you fiercely", scores: { hyunjin: 2, hongjoong: 1 } },
    ],
  },

  // 5
  {
    question: "Your relationship style?",
    options: [
      { text: "Soft and emotional", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Healthy and mature", scores: { bangchan: 2, yunho: 1 } },
      { text: "Fun and chaotic", scores: { felix: 2, mark: 1 } },
      { text: "Deep and intense", scores: { hyunjin: 2, ten: 1 } },
      { text: "Calm and comforting", scores: { jaemin: 2, seungmin: 1 } },
    ],
  },

  // 6
  {
    question: "Biggest green flag?",
    options: [
      { text: "Emotional intelligence", scores: { jimin: 2, taehyun: 1 } },
      { text: "Leadership", scores: { bangchan: 2, taeyong: 1 } },
      { text: "Loyalty", scores: { jungkook: 2, yunho: 1 } },
      { text: "Creativity", scores: { ten: 2, hongjoong: 1 } },
      { text: "Gentleness", scores: { jaemin: 2, seungmin: 1 } },
    ],
  },

  // 7
  {
    question: "How do you handle arguments?",
    options: [
      { text: "Talk it out emotionally", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Solve it logically", scores: { bangchan: 2, mark: 1 } },
      { text: "Need space first", scores: { jaemin: 2, seungmin: 1 } },
      { text: "Confront directly", scores: { hyunjin: 2, hongjoong: 1 } },
      { text: "Laugh it off", scores: { felix: 2, jungkook: 1 } },
    ],
  },

  // 8
  {
    question: "Your love language?",
    options: [
      { text: "Words of affirmation", scores: { jimin: 2, taehyun: 1 } },
      { text: "Acts of service", scores: { bangchan: 2, yunho: 1 } },
      { text: "Physical affection", scores: { jungkook: 2, felix: 1 } },
      { text: "Quality time", scores: { jaemin: 2, seungmin: 1 } },
      { text: "Passion", scores: { hyunjin: 2, ten: 1 } },
    ],
  },

  // 9
  {
    question: "What scares you most in love?",
    options: [
      { text: "Emotional neglect", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Instability", scores: { bangchan: 2, yunho: 1 } },
      { text: "Boredom", scores: { felix: 2, mark: 1 } },
      { text: "Losing control", scores: { hyunjin: 2, hongjoong: 1 } },
      { text: "Miscommunication", scores: { seungmin: 2, jaemin: 1 } },
    ],
  },

  // 10
  {
    question: "Your ideal boyfriend in public?",
    options: [
      { text: "Gentle and respectful", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Confident and admired", scores: { taeyong: 2, hongjoong: 1 } },
      { text: "Fun and chaotic", scores: { felix: 2, mark: 1 } },
      { text: "Quiet but protective", scores: { jaemin: 2, seungmin: 1 } },
      { text: "Intimidating but loyal", scores: { hyunjin: 2, ten: 1 } },
    ],
  },

  // 11
  {
    question: "What makes you fall in love?",
    options: [
      { text: "Emotional vulnerability", scores: { jimin: 2, taehyun: 1 } },
      { text: "Reliability", scores: { bangchan: 2, yunho: 1 } },
      { text: "Humor", scores: { felix: 2, mark: 1 } },
      { text: "Intensity", scores: { hyunjin: 2, hongjoong: 1 } },
      { text: "Consistency", scores: { jaemin: 2, seungmin: 1 } },
    ],
  },

  // 12
  {
    question: "Your dream relationship ending?",
    options: [
      { text: "Peaceful forever", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Built on trust", scores: { bangchan: 2, yunho: 1 } },
      { text: "Always exciting", scores: { felix: 2, jungkook: 1 } },
      { text: "Deep and intense", scores: { hyunjin: 2, ten: 1 } },
      { text: "Quiet lifelong bond", scores: { jaemin: 2, seungmin: 1 } },
    ],
  },

  // 13
  {
    question: "Your biggest weakness in love?",
    options: [
      { text: "Over-attaching", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Taking responsibility for everything", scores: { bangchan: 2, yunho: 1 } },
      { text: "Not being serious enough", scores: { felix: 2, mark: 1 } },
      { text: "Jealousy", scores: { hyunjin: 2, hongjoong: 1 } },
      { text: "Avoiding confrontation", scores: { seungmin: 2, jaemin: 1 } },
    ],
  },

  // 14
  {
    question: "Your relationship pace?",
    options: [
      { text: "Slow and emotional", scores: { jimin: 2, taehyun: 1 } },
      { text: "Structured and stable", scores: { bangchan: 2, yunho: 1 } },
      { text: "Fast and fun", scores: { felix: 2, jungkook: 1 } },
      { text: "Intense and consuming", scores: { hyunjin: 2, ten: 1 } },
      { text: "Comfortable and steady", scores: { jaemin: 2, seungmin: 1 } },
    ],
  },

  // 15
  {
    question: "Your ultimate boyfriend fantasy?",
    options: [
      { text: "Someone who heals you", scores: { jimin: 2, jungwoo: 1 } },
      { text: "Someone who leads with you", scores: { bangchan: 2, taeyong: 1 } },
      { text: "Someone who makes life fun", scores: { felix: 2, mark: 1 } },
      { text: "Someone obsessively devoted", scores: { hyunjin: 2, hongjoong: 1 } },
      { text: "Someone who stays forever", scores: { jaemin: 2, seungmin: 1 } },
    ],
  },
]
