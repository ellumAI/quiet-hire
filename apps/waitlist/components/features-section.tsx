"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@quiethire/ui/components/tabs";
import { motion } from "motion/react";
import {
  Users,
  FileSearch,
  BarChart3,
  BrainCircuit,
  Send,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

const reviewerFeatures = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Screening",
    description:
      "Automatically screen and rank candidates based on job requirements. Our AI analyzes resumes, cover letters, and assessments to surface the best fits.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your hiring pipeline with real-time metrics. Monitor time-to-hire, candidate quality scores, and team collaboration performance.",
  },
  {
    icon: Users,
    title: "Collaborative Reviews",
    description:
      "Invite team members to review candidates together. Share scorecards, leave comments, and make collective hiring decisions faster.",
  },
  {
    icon: ShieldCheck,
    title: "Bias-Free Evaluation",
    description:
      "Structured evaluation frameworks help remove unconscious bias. Focus on skills and qualifications that truly matter for the role.",
  },
];

const candidateFeatures = [
  {
    icon: FileSearch,
    title: "Smart Job Matching",
    description:
      "Get matched with roles that align with your skills, experience, and career goals. No more scrolling through irrelevant listings.",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    description:
      "Apply to multiple positions with a single profile. Your information is pre-filled and tailored to each application automatically.",
  },
  {
    icon: Send,
    title: "Application Tracking",
    description:
      "Stay informed at every stage. Receive real-time updates on your application status — no more wondering where you stand.",
  },
  {
    icon: Star,
    title: "Profile Highlights",
    description:
      "Showcase your unique strengths with AI-enhanced profile summaries. Stand out to recruiters with data-driven skill endorsements.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for{" "}
            <span className="font-display italic text-gradient">
              both sides
            </span>{" "}
            of hiring
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re reviewing applicants or looking for your next role.
          </p>
        </motion.div>

        <Tabs defaultValue="reviewer" className="w-full items-center">
          <TabsList className="mx-auto mb-10 w-full max-w-sm">
            <TabsTrigger value="reviewer" className="flex-1">
              Reviewer
            </TabsTrigger>
            <TabsTrigger value="candidate" className="flex-1">
              Candidate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reviewer">
            <div className="grid gap-6 sm:grid-cols-2">
              {reviewerFeatures.map((feature, i) => (
                <FeatureCard key={feature.title} {...feature} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="candidate">
            <div className="grid gap-6 sm:grid-cols-2">
              {candidateFeatures.map((feature, i) => (
                <FeatureCard key={feature.title} {...feature} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
