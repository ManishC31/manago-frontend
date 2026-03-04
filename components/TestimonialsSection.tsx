import { Star } from "lucide-react";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CFO, NovaTech Solutions",
    quote: "Manago unified our finance, CRM and HR into one platform. We reduced software costs by 60% and our team's productivity jumped overnight.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Operations Director, ScaleUp Labs",
    quote: "The employee management and communication features are a game-changer. Leave tracking, attendance, and team chat — all in one place.",
    rating: 5,
  },
  {
    name: "Laura Chen",
    role: "CEO, BrightPath Consulting",
    quote: "We switched from 5 different tools to Manago. The analytics dashboards give me a complete view of revenue, projects and team workload instantly.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
            What they say <span className="italic text-primary">about us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by organizations across industries to run their business.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glass-card p-8 hover-lift h-full flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed flex-1 mb-6 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
