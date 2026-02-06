"use client";

import { SignupForm } from "@/components/signup-form";
import { motion } from "motion/react";

export function Footer() {
  return (
    <>
      {/* Waitlist signup section */}
      <section className="py-16 md:py-24" id="join">
        <div className="mx-auto max-w-md px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Join the waitlist
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Be among the first to experience Quiet Hire. Early members get
              priority access and exclusive perks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <SignupForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">
                    Q
                  </span>
                </div>
                <span className="text-lg font-bold tracking-tight">
                  QUIET HIRE
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-background/60">
                AI-powered recruitment that connects the right talent with the
                right opportunity — quietly and efficiently.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 md:items-end">
              <nav className="flex gap-6 text-sm">
                <a
                  href="#features"
                  className="text-background/60 transition-colors hover:text-background"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-background/60 transition-colors hover:text-background"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-background/60 transition-colors hover:text-background"
                >
                  FAQ
                </a>
              </nav>
              <p className="text-xs text-background/40">
                &copy; {new Date().getFullYear()} Quiet Hire. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
