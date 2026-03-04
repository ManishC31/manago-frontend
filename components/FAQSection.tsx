import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/AnimatedSection";

const faqs = [
  {
    question: "What is Manago and who is it for?",
    answer:
      "Manago is an all-in-one business management platform for organizations of any size. It combines finance tracking, CRM, employee management, collaboration tools, communication channels, and analytics into a single intuitive workspace.",
  },
  {
    question: "Can I track invoices, income and expenses?",
    answer:
      "Yes! Manago's finance module lets you create and send invoices, record payments, track income and expenses, and generate financial reports — all with automated reconciliation.",
  },
  {
    question: "How does the CRM module work?",
    answer:
      "The CRM tracks your entire customer lifecycle — from leads and deals to communications and service history. You can manage contacts, log interactions, set follow-up reminders, and view deal pipelines.",
  },
  {
    question: "Does Manago support employee management?",
    answer:
      "Absolutely. Manage attendance, leave records, employee documents, payroll basics and more. Each employee gets a profile with their complete work history.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! Our Starter plan is completely free for up to 5 users with core finance and CRM features. No credit card required to get started.",
  },
  {
    question: "Can I switch plans or cancel anytime?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle. No long-term contracts.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
            Frequently asked <span className="italic text-primary">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Manago.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border rounded-xl data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
