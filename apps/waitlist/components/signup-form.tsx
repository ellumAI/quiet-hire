"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, ArrowRight, Check } from "lucide-react";
import { cn } from "@quiethire/ui/lib/utils";

// Schema for email validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  type: z.enum(["recruiter", "candidate"]),
});

export function SignupForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      type: "candidate",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsLoading(false);
    setIsSuccess(true);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="signup-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
                <div className="flex gap-4 p-1 bg-secondary/50 rounded-lg w-fit mx-auto mb-6">
                    <button
                        type="button"
                        onClick={() => form.setValue("type", "candidate")}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-all",
                            form.watch("type") === "candidate" 
                                ? "bg-background shadow-sm text-foreground" 
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Candidate
                    </button>
                    <button
                         type="button"
                         onClick={() => form.setValue("type", "recruiter")}
                         className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-all",
                            form.watch("type") === "recruiter" 
                                ? "bg-background shadow-sm text-foreground" 
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Recruiter/Founder
                    </button>
                </div>

              <div className="relative group">
                <input
                  {...form.register("email")}
                  type="email"
                  placeholder="name@work-email.com"
                  className="w-full h-12 px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-muted-foreground/50"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-1 top-1 bottom-1 aspect-square bg-primary text-primary-foreground rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group-focus-within:ring-2 ring-offset-1 ring-primary"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
              {form.formState.errors.email && (
                <p className="text-sm text-destructive px-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4 p-8 bg-background/50 border border-border/50 backdrop-blur-sm rounded-2xl"
          >
            <div className="h-12 w-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground">
                We'll notify you when Quiet Hire is ready for {form.getValues("type")}s.
              </p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              Add another email
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
