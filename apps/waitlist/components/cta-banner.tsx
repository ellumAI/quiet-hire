"use client";

import { Button } from "@quiethire/ui/components/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="noise-bg relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-background md:px-16 md:py-20"
        >
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/15 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to transform your hiring?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-background/70 md:text-lg">
              Join hundreds of forward-thinking companies already on the
              waitlist. Be the first to experience recruitment done right.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#join">
                  Get Early Access
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
