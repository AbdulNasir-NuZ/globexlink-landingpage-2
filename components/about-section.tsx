import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">What We Enable</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Globexlink isn’t just a marketplace — we connect trusted SMEs, logistics, and finance across Africa, Turkey,
            and Asia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Pre‑Vetted SMEs</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pre‑vet suppliers and buyers so transactions are safe and predictable. Cultural intelligence reduces
                friction across corridors.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Live Tracking & Docs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real‑time shipment tracking and document verification to minimize fraud, delays, and hidden costs.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Logistics & Finance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrated logistics partners and escrow/fintech workflows for compliant, secure cross‑border trade.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20">
          <CardContent className="p-0 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              We’re not a quick‑transaction marketplace — we’re building trust‑driven corridors for SMEs to scale
              globally. Bridge continents with reliable sourcing, verified partners, and transparent operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
