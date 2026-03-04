import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ManagoLogo } from "@/components/ManagoLogo";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl bg-foreground p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-5">
                Ready to streamline your business?
              </h2>
              <p className="text-background/70 text-lg max-w-xl mx-auto mb-8">
                Join thousands of organizations already using Manago. Start free, no credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-semibold shadow-lg" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "Help Center", "API Reference", "Community"],
  };

  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-xl gradient-bg flex items-center justify-center">
                <ManagoLogo className="text-primary-foreground" size={18} />
              </div>
              <span className="font-bold text-foreground text-lg">Manago</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The all-in-one platform for managing your entire business operations.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Manago. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
