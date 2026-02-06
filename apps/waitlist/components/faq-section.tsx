"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@quiethire/ui/components/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What is Quiet Hire?",
    answer:
      "Quiet Hire is an AI-powered applicant tracking system (ATS) designed to streamline recruitment for both hiring teams and job seekers. We use intelligent matching, automated screening, and collaborative tools to make hiring faster and fairer.",
  },
  {
    question: "How does the AI screening work?",
    answer:
      "Our AI analyzes candidate profiles against job requirements, evaluating skills, experience, and qualifications. It ranks applicants objectively based on fit, helping recruiters focus on the most promising candidates without manual resume sorting.",
  },
  {
    question: "Is Quiet Hire free to use?",
    answer:
      "We'll offer a generous free tier for small teams and individual recruiters. Larger organizations can unlock advanced features with our Pro and Enterprise plans. Early waitlist members get extended free access.",
  },
  {
    question: "When will Quiet Hire launch?",
    answer:
      "We're currently in private beta with select partners. Waitlist members will receive early access invitations on a rolling basis. Join now to secure your spot — the earlier you sign up, the sooner you'll get in.",
  },
  {
    question: "How is candidate data protected?",
    answer:
      "Data privacy is foundational to Quiet Hire. All candidate information is encrypted at rest and in transit. We comply with GDPR and SOC 2 standards, and candidates have full control over their data and who can access it.",
  },
  {
    question: "Can I use Quiet Hire as a job seeker?",
    answer:
      "Absolutely. Quiet Hire works for both sides. Candidates can create a profile, get matched with relevant roles, apply with one click, and track application status in real-time — all from a single dashboard.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked{" "}
            <span className="font-display italic text-gradient">questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about Quiet Hire.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
