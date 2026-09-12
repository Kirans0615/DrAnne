import { sourced } from "./types";
import { studyStartYear } from "./faq";

/** Remaining page-level verbatim copy blocks not covered by a dedicated content module. */

export const aboutStory = {
  backgroundHistory: sourced(
    `The origins of this program go back to ${studyStartYear.value} when Anne Seifert, Ph.D., epidemiologist, had a consulting practice working as Co-Investigator for the Institute of Health Research at Pacific Medical Center in San Francisco. She worked with famed pathologist and Chief Investigator Dr. George Z. Williams. He promoted behavioral lifestyle change as a way to prevent or forestall chronic debilitating disease later in life. Under a National Institute of Health grant they conducted a study of how healthy people could stay healthy. The study included over 2,000 people who were regularly evaluated using laboratory tests, exercise protocols, and lifestyle habit questionnaires. This four-year study demonstrated that lifestyle change had a positive impact on blood pressure, body fat and overall health scores. Similar conclusions are drawn from the classic 1960s Belloc and Breslow study, and the continuing Nurses' Health Study. In essence, health practices matter.`,
    ".net About Us (audit §4.12)"
  ),
  secondParagraph: sourced(
    `Following her experience at the Institute, dr.Anne began her mission to find a way to make eating healthy, good exercise, and balancing life situations easy. She studied existing weight loss and lifestyle programs — some good, but too demanding to be practical for daily living, and others just not that healthy. Finally, in 1982, dr.Anne wrote her first book on the subject, "The Intelligent Woman's Diet." She offered classes through clubs and government agencies. Realizing that education alone was not enough — that people needed support for lifestyle change — she created the program we now have in its final form as the dr.Anne plan. It combines everything into one package, and it is easy to learn, has elements of fun, and is sustainable for a lifetime.`,
    ".net About Us (audit §4.12)"
  ),
  selfSupporting: sourced(
    "The dr.Anne Association is a self-supporting nonprofit 501(c)(3) organization. Proceeds from materials and training Courses are used to fund the website, volunteer activities and ongoing Practice Circles.",
    ".net About Us (audit §4.12)"
  ),
};

export const partnerPage = {
  intro: sourced("We Welcome you to support our Association mission!", ".org Partner (audit §3.3)"),
  bringProgram: sourced(
    "Bring our program to your employees, members or others who might benefit.",
    ".org Partner (audit §3.3)"
  ),
  courseDescription: sourced(
    "What is the dr.Anne plan Course? Led by health-trained professionals, it's a course that covers all nine Points of the program, generally offered in a virtual format through Google Meet in webinar fashion.",
    ".org Partner (audit §3.3)"
  ),
  tagline: sourced("Standardized. Sustainable. Scalable.", ".org Partner (audit §3.3, typo corrected)"),
  sponsors: sourced(
    "Your organization pays a lump sum upfront to sponsor a cohort or a specific number of employees or members. This is considered a tax-deductible corporate sponsorship fee for an employee or member health initiative. The company receives a single 501(c)(3) donation receipt as a tax deduction, and your employees or members receive access to the program at no cost to them.",
    ".org Partner (audit §3.3)"
  ),
  voluntary: sourced(
    "Your organization may promote our dr.Anne plan course to your staff, but the individual staff member pays the program fee out of pocket. This is a tax-deductible personal wellness enrollment donation.",
    ".org Partner (audit §3.3)"
  ),
  lifelongCircles: sourced(
    "After Course completion, we offer continued sustainability at no extra cost to your organization. Practice Circles are volunteer-led by volunteer participants, maintaining employee and member access.",
    ".org Partner (audit §3.3)"
  ),
  turnkey: sourced(
    "With your sponsorship and partnership you will have a turnkey program with zero HR overhead. Our program is entirely self-sustaining. We offer standardized NIH-backed materials and management of instructors.",
    ".org Partner (audit §3.3)"
  ),
  keysNote: sourced(
    "These are the three Keys: Apportion, Move and Silence. Each Key has three Points, making a total of nine program Points to encourage good health practices.",
    ".net Learn More – Partner (audit §4.21)"
  ),
  netModelIntro: sourced(
    "Although different formats are available, we recommend our three-week dr.Anne plan Course, virtual or in person, with a 90-minute meeting each week. The Course is fun and flexible and encourages healthy, well-balanced eating. Exercise options and meditation are also covered.",
    ".net Learn More – Partner (audit §4.21)"
  ),
};

export const guideJoinPage = {
  intro: sourced(
    "The dr.Anne Association mission is to provide a sustainable program for a lifetime of healthy living. Proceeds from all donations support the Association website, volunteer activities and ongoing learning. Through your own initiative and/or professionally led Courses and Practice Circles, you can receive program instruction for good health practices:",
    ".org Guide (audit §3.4)"
  ),
  benefits: [
    "Learn how to eat out without feeling deprived",
    "No calorie counting or food scales",
    "Support and share in a judgment-free space",
    "Practice portion control using your hand measure",
  ],
  whatArePracticeCircles: sourced(
    "What are Practice Circles? These are self-help, coached or sponsored support groups that meet regularly to keep participants on track and motivated for good health goals.",
    ".org Guide (audit §3.4)"
  ),
  vipHeading: sourced(
    "Become a VIP: Volunteer, Independent Coach, Partner or Sponsor",
    ".org Guide (audit §3.4)"
  ),
  volunteer: sourced(
    "With the dr.Anne plan (dAp) book you can create your own TEAM. Study the book, and form a weekly Volunteer Practice Circle. Conduct your Practice Circle in person or online. Register your Circle with the Association so others may join you.",
    ".org Guide (audit §3.4, typo corrected)"
  ),
  oneOnOne: sourced(
    "One-on-One coaching is privately offered by Independent health professionals certified by the Association. These providers may also offer, per Point Practice session, the option to participate at your own pace and select the Practice Points you wish to discuss.",
    ".org Guide (audit §3.4)"
  ),
  partnerCta: sourced(
    "Partner or sponsor the program: to provide a benefit to your club, organization, company, or health-related practice, you may wish to offer the dAp program to your members. Let us know and we will discuss how we can do this — everybody wins!",
    ".org Guide (audit §3.4)"
  ),
};

export const donatePage = {
  paymentWindow: sourced(
    "We use PayPal to process some of our orders. You need not have an account at PayPal to use this link. They will accept other payment methods.",
    ".net Donate (audit §4.18)"
  ),
  taxDeductible:
    "The dr.Anne Association is a 501(c)(3) nonprofit. Donations are tax-deductible to the extent allowed by law.",
  whereMoneyGoes: sourced(
    "Proceeds from all donations support the Association website, volunteer activities and ongoing learning and Practice Circles.",
    ".org Guide (audit §3.4)"
  ),
};

export const certificationIntro = sourced(
  "For Volunteers and Independent Members to receive Certification, passing a short tutorial test is required, followed by an interview with a dAA Board member.",
  ".net Team Build (audit §4.2)"
);

export const tipsInvitation = sourced(
  "We've assembled some tips from participants engaged in our program that may be useful to others. Contribute your own by sending an email to team@dranne.org.",
  ".net Team Build (audit §4.2, typo corrected)"
);

export const contactRoutingNote = sourced(
  "General or partner enquiries route to ask@dranne.org. Volunteer, Practice Circle support and media submissions route to team@dranne.org. Certification, partnerships, events and product orders route to vip@dranne.org.",
  "audit §2 contact-address table, unified onto one domain per build prompt §13-15"
);
