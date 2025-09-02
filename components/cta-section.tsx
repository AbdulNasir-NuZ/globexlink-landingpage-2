import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Build Trust‑Driven Trade Corridors</h2>
        <p className="text-xl mb-8 opacity-90">Join businesses already trading securely with Globexlink.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
