import { Button } from "@quiethire/ui/components/button"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Join the Waitlist</h1>
        <p className="text-muted-foreground">Be the first to know when we launch.</p>
        <Button size="sm">Sign Up</Button>
      </div>
    </div>
  )
}
