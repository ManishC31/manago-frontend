import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "For small teams getting started with business management.",
    features: ["Up to 5 users", "Finance & invoicing basics", "CRM with 500 contacts", "Community support", "1 GB storage"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "For growing organizations that need full-suite power.",
    features: ["Unlimited users", "Full finance, CRM & HR modules", "Job board & collaboration", "Chat & notifications", "Analytics dashboards", "Priority support", "API access"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with advanced security needs.",
    features: ["Everything in Pro", "SSO & SAML", "Dedicated account manager", "Custom integrations", "Unlimited storage", "SLA guarantee", "On-premise option"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
            Plans that <span className="italic text-primary">scale with you</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free and upgrade as your organization grows.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-primary/50 bg-card shadow-2xl glow-primary scale-[1.02]"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-extrabold text-foreground">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground text-sm">/user/mo</span>
                      </>
                    )}
                  </div>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
