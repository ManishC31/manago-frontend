import { DollarSign, Users, UserCheck, Briefcase, MessageSquare, BarChart3 } from "lucide-react";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const features = [
  {
    icon: DollarSign,
    title: "Financial Tracking",
    description: "Track income, expenses, invoices and payments in real-time with automated reconciliation.",
  },
  {
    icon: Users,
    title: "CRM & Sales",
    description: "Manage customers, leads, deals, communications and complete service history in one place.",
  },
  {
    icon: UserCheck,
    title: "Employee Management",
    description: "Handle attendance, leave records, documents, payroll and employee lifecycle with ease.",
  },
  {
    icon: Briefcase,
    title: "Job Board & Collaboration",
    description: "Post jobs, manage applications, assign tasks and collaborate across teams seamlessly.",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Built-in chat channels, real-time notifications and smart alerts to keep everyone aligned.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Revenue dashboards, project insights and workload reports with exportable data.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Core Modules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
            Perfect solutions{" "}
            <span className="italic text-primary">for your business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every tool your organization needs to operate, grow and scale — unified under one roof.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group glass-card p-8 hover-lift cursor-default h-full">
                <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:gradient-bg transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
