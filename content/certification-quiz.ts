/**
 * The nine-Point knowledge check for /for-guides/certification (build
 * prompt §10.15 / §13-20 — "the tutorial has never existed, build it").
 * Every question is drawn from content already published elsewhere in
 * /content; nothing here is invented. Self-scoring, non-gating: this is a
 * study aid a candidate brings to their Board interview, not a pass/fail
 * gate to Certification itself.
 */
export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  sourceNote: string;
};

export const certificationQuizQuestions: QuizQuestion[] = [
  {
    id: "mfcpov-v",
    prompt:
      'In the MagicHand mnemonic "My Fingers Count Portions Offering Variety," which letter stands for Vegetables?',
    choices: ["P", "O", "V", "M"],
    correctIndex: 2,
    sourceNote: "Open Statement call-and-response — content/statements.ts",
  },
  {
    id: "chits-total",
    prompt: "How many total chits does the plan allow per day (palm portions + thumb portions)?",
    choices: ["9", "12", "15", "18"],
    correctIndex: 2,
    sourceNote: "content/magichand.ts chitRules",
  },
  {
    id: "carryover",
    prompt: "True or false: unused chits carry over to the next day.",
    choices: ["True", "False"],
    correctIndex: 1,
    sourceNote: "content/magichand.ts chitRules.noCarryOver",
  },
  {
    id: "thumb-portion",
    prompt: "A thumb portion, measured to the first knuckle joint, represents which food group?",
    choices: ["Protein", "Carbohydrate", "Oils and Fats", "Milk and Dairy"],
    correctIndex: 2,
    sourceNote: "content/magichand.ts fingers",
  },
  {
    id: "three-linking-rings",
    prompt: "Which of these is NOT one of the Three Linking Rings?",
    choices: ["Ruling-Hand", "Right-Hand", "Post-Hand", "Point-Hand"],
    correctIndex: 3,
    sourceNote: "content/membership.ts threeLinkingRings",
  },
  {
    id: "team-acronym-a",
    prompt: 'In T-E-A-M, what does the "A" stand for?',
    choices: ["Attendance", "Administrative", "Apportion", "Achievement"],
    correctIndex: 1,
    sourceNote: "content/membership.ts teamAcronym",
  },
  {
    id: "membership-stage-order",
    prompt: "Which membership stage comes immediately after Apprentice?",
    choices: ["Point Mentor", "CircleGuide", "Independent Member", "Board Member"],
    correctIndex: 1,
    sourceNote: "content/membership.ts membershipStages",
  },
  {
    id: "point-mentor-requirement",
    prompt: "How many Practice Circle sessions must a CircleGuide successfully lead before becoming a Point Mentor?",
    choices: ["One", "Two", "Three", "Nine"],
    correctIndex: 2,
    sourceNote: "content/membership.ts membershipStages",
  },
  {
    id: "close-timing",
    prompt: "How much time does the Close statement allow for closing a Point session?",
    choices: ["2 minutes", "5 minutes", "10 minutes", "15 minutes"],
    correctIndex: 1,
    sourceNote: "content/statements.ts closeStatement.timing",
  },
  {
    id: "minimum-participants",
    prompt: "What is the minimum number of people needed to start a Practice Circle?",
    choices: ["1", "2", "3", "5"],
    correctIndex: 2,
    sourceNote: "content/membership.ts minimumParticipants",
  },
];
