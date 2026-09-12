import { sourced } from "./types";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Merged Team Build FAQ + Team Build – HERE, typos corrected. */
export const faqs: FaqItem[] = [
  {
    question: "How can I create my own Circle Group?",
    answer:
      "You will need a T-E-A-M: Three linking rings, Experience with the training, Administrative ability to organize the Course or Event, and a Meeting space, virtual or in-person. Visit Get Started to learn how to form your own Practice Circle and become a CircleGuide.",
  },
  {
    question: "How is the MAGIC-HAND program administered?",
    answer:
      "Persons who enter the program use the dr.Anne plan Practice section in the book to cover nine Point sessions. The book is the instructional manual for the training course. This program is administered through Circle Groups that are either self-help (Volunteer), privately operated (Independent), or sponsored (Partner). Volunteer sessions are free of charge, virtual or in-person. Independent circles are guided by a credentialed person, one-to-one for a fee. Partner circles are sponsored or fundraising for clubs or other organizations.",
  },
  {
    question: "How did the dr.Anne plan begin?",
    answer:
      "Anne Seifert, M.P.H., Ph.D. became Co-Investigator of a National Institute of Health-funded study of over 2,000 participants investigating how healthy people stay healthy. From her observations she concluded that most chronic or debilitating diseases were either exacerbated by or resulted from being overweight. In an attempt to discover an easy program that was well-balanced and used foods people normally eat, she found that most existing programs were not practical for a lifetime of control. The dr.Anne plan was developed to be simple to understand and easy to implement. This approach to eating was introduced first in book form in 1982.",
  },
  {
    question: "Why is the drawing called your MagicHand?",
    answer:
      'While speaking on using the palm of the hand as a measurer for portion control, Dr. Anne was asked by a member of the audience where to press on the hand to lose weight. She replied that there was no magic spot. The audience seemed disappointed. Hence the word "Magic" was added. After all, isn\'t magic the mastery of hand-eye techniques to produce results? The MagicHand is a "hand-trick" for allocating food. Call it slim of hand!',
  },
  {
    question: 'What does "Healthy Moderation" mean?',
    answer:
      "This program lives in the concept of balance. There is no restrictive dieting, extreme fitness, quick-fix weight loss, or app-driven nudging. Instead the dr.Anne plan leans toward sustainability, public health credibility, behavioral realism, good health practices, and long-term adherence.",
  },
];

export const studyStartYear = sourced(1972, ".org About / Our Story narrative Background History (audit §4.12, resolved per build prompt §13-5)", {
  provisional: true,
  conflictsWith: [1976],
});
