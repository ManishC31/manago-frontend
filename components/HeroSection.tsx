"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CircleDot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero-illustration.png";

const badges = ["Finance", "CRM", "HR", "Analytics"];

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden">
      <div className="gradient-bg-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-6">
                <CircleDot className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">All-in-One Business Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
                Business <span className="italic text-primary">Management</span>
                <br />
                Made Simple
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Manage finances, customers, employees, and collaboration — all from one powerful platform built for growing organizations.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button size="lg" className="font-semibold shadow-md" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="font-semibold" asChild>
                  <Link href="/signin">Watch Demo</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span key={b} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src={heroImg}
                  alt="Manago platform — team reviewing business analytics dashboard"
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:left-4 bg-card rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">↑</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">+42%</div>
                  <div className="text-xs text-muted-foreground">Revenue Growth</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
