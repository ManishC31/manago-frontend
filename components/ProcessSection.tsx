import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Sign Up Free",
    description: "Create your organization workspace in under 2 minutes. No credit card required.",
    color: "bg-primary",
  },
  {
    number: "02",
    title: "Configure Modules",
    description: "Enable the modules you need — finance, CRM, HR, collaboration — and customize them.",
    color: "bg-foreground",
  },
  {
    number: "03",
    title: "Start Managing",
    description: "Invite your team, import data, and start running your entire business from one place.",
    color: "bg-primary",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
            Understand Our <span className="italic text-primary">Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A powerful platform that&apos;s simple to get started with.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="text-center">
                <div className={`h-14 w-14 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
