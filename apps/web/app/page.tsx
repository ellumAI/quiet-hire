import { Button } from '@hackhyre/ui/components/button'

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-sans text-2xl font-bold">Hello World</h1>
        <Button size="sm" className="font-mono">
          Button
        </Button>
      </div>
    </div>
  )
}
