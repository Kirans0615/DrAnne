/**
 * The Open and Close Statements — the single most important operational
 * document on either legacy site. Reproduced verbatim from audit §4.8 with
 * only the corrections build prompt §10.12 calls for: the misspelled verb
 * for abdominal breathing, the misspelled word for consistency among
 * Circles, the misspelled imperative for clicking a link, and the double
 * period after "Point..." fixed to a single period.
 *
 * Blanks are rendered as fill-in fields in Guide Mode (see
 * components/dranne/guide-mode.tsx) and as literal underscores in the
 * static/print/PDF version.
 */

export const openStatement = {
  welcome:
    "Welcome to the ______________ Practice Circle. Our mission is to foster nutritionally balanced portion-control eating, enjoyable movement and quiet time to promote good health. Each of the Plan's Nine focus Points addresses a specific issue related to achieving a healthy weight and good health habits.",
  insight:
    "This discussion provides insight into your own behavior regarding physical, psychological, and practical concerns.",
  guideIntro: "I, _________, am your Guide for this Point session.",
  guidelines:
    'Our meeting guidelines are simple and important: Please allow each person to speak without interruption. Raise your hand to be recognized. Communicate to the degree possible using "I" statements. Focus on your own experience. We ask that you respect the privacy and confidentiality of each person and that you make this a safe place for everyone. If asked to read aloud, and you\'d rather not, simply say "pass".',
  questionsPrompt: "Are there any questions or reports you'd like to make?",
  reviewPrompt: "Before we begin this Point let us review the principles of MagicHand Eating:",
  handInstruction:
    'Hold up your left hand. Your fingers represent food groups. Starting with the pinky, repeat: "My Fingers Count Portions Offering Variety."',
  callAndResponse:
    "M is for? (Milk and Dairy) — F is for? (Fruit) — C is for? (Carbohydrate) — P is for? (Protein) — O is for? (Oils and Fats) — and the V is for? (Vegetables). It's open because it's (unlimited). And drink plenty of? (Water).",
  palmRule:
    "The fingers above the palm represent food groups governed by palm portions — the size of your palm, no thicker than your thumb, or a cupped palm. The thumb, measured to the first knuckle joint, is one Oil or Fat portion.",
  chitAllowance:
    "You are allowed 12 palm portions and 3 thumb portions a day, plus unlimited vegetables. Each palm or thumb portion represents a chit. If you do not consume all 15 chits in a day, they are not saved for the next day. If you exceed the allotted amount, do not cut back the next day. On this Plan, every day is a new day.",
  todaysPoint: "Today, we will be discussing Point ___ called ___________.",
  handoff: "Go to the Point ___ Practice page. I will start the reading and then invite your discussion.",
};

export const closeStatement = {
  timing: "(allow 5 minutes)",
  markCompletion:
    "We are now at the close of Point ___. Fill in the dot now on your MagicSquare card or in the book to mark completion of this Point.",
  visualize:
    "Think of the number that represents your ideal weight. Visualize yourself at that weight. (pause) Imagine yourself at your ideal weight. Say after me:",
  affirmation: "I choose to be at my ideal weight.",
  breathingSetup:
    "Now place your hands gently on your abdominal muscles. As you inhale, allow your midsection to expand — fill the balloon. As you exhale, tighten your muscles, flattening your back.",
  breathingIntro: "We will take three slow, relaxing breaths. As you breathe, picture yourself at your ideal weight.",
  breaths: [
    { count: 1, inhale: "Inhale — expand the abdominal midsection, fill the balloon.", exhale: "Exhale — contract the abdominals, let the air out." },
    { count: 2, inhale: "Inhale — expand.", exhale: "Exhale — contract." },
    { count: 3, inhale: "Inhale…", exhale: "Exhale…" },
  ],
  nextSession: "Our next session will be Point ___, called __________, on _________ (day) __________ (date).",
  volunteerPrompt: "Would anyone like to volunteer to lead this next session?",
  thanks: "Thank you for having a HAND in this session!",
};
