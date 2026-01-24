import { BackgroundBeams } from "@/components/background-beams";
import { SignupForm } from "@/components/signup-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative p-6 overflow-hidden">
      <BackgroundBeams />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium text-secondary-foreground mb-4">
                Early Access Waitlist
            </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 pb-2">
            Quiet Hire
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
            Hire faster with less noise. <br/>
            <span className="text-base opacity-80">
                Connect directly with pre-vetted talent and skip the inbox flood.
            </span>
          </p>
        </div>

        <div className="pt-8">
          <SignupForm />
        </div>

        <div className="pt-16 flex justify-center gap-8 text-sm text-muted-foreground/60">
            <span>© 2026 Quiet Hire</span>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </main>
  );
}
