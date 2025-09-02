import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Globe2, Rocket, Zap, Layers, BadgeCheck } from "lucide-react" // add BadgeCheck icon

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">Why Globexlink</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ESG‑aligned, transparent, and secure B2B trade across trusted corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Traceability */}
          <Card className="relative h-60 overflow-hidden rounded-3xl bg-primary ring-1 ring-accent/20 shadow-lg shadow-accent/30 hover:shadow-accent/50 transition">
            <CardContent className="flex h-full flex-col justify-end p-6 relative z-10">
              <h3 className="text-primary-foreground text-left text-2xl font-bold mb-2">Traceability</h3>
              <p className="text-primary-foreground/80 text-sm">
                Track products to origin: farms, cooperatives, or processors with digitally verified records.
              </p>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Layers className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
          </Card>

          {/* Compliance */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border border-accent/30 ring-1 ring-accent/20 shadow-lg shadow-accent/30 hover:shadow-accent/50 transition bg-background/60 backdrop-blur-sm">
            <CardContent className="flex h-full flex-col justify-end p-6 relative z-10">
              <h3 className="text-left text-2xl font-bold mb-2 text-white">Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Automated checks for customs, food safety, and export law compliance with verified certificates.
              </p>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Global Network */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border border-accent/30 ring-1 ring-accent/10 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition bg-background/60 backdrop-blur-sm">
            <CardContent className="flex h-full flex-col justify-end p-6">
              <h3 className="text-left text-lg font-bold mb-2 text-white">Global Network</h3>
              <p className="text-muted-foreground text-sm">
                Connect trusted SMEs, logistics, and finance across Africa, Turkey, and Asia.
              </p>
              <div className="absolute left-6 top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Globe2 className="h-5 w-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border border-accent/30 ring-1 ring-accent/10 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition bg-background/60 backdrop-blur-sm">
            <CardContent className="flex h-full flex-col items-start justify-center p-6">
              <div className="flex items-center mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 mr-3">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-left text-lg font-bold text-white">Sustainability</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Solar‑dried processing, compact shipping, and eco‑packaging to reduce logistics emissions.
              </p>
            </CardContent>
          </Card>

          {/* 24/7 Support */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border border-accent/30 ring-1 ring-accent/10 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition bg-secondary">
            <CardContent className="flex h-full flex-col justify-end p-6">
              <h3 className="text-secondary-foreground text-left text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-secondary-foreground/80 text-sm">Dedicated support team available around the clock.</p>
              <div className="absolute left-6 top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <Rocket className="h-5 w-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verified Suppliers */}
          <Card className="relative h-60 overflow-hidden rounded-3xl border border-accent/30 ring-1 ring-accent/10 shadow-lg shadow-accent/10 hover:shadow-accent/30 transition bg-background/60 backdrop-blur-sm">
            <CardContent className="flex h-full flex-col justify-end p-6">
              <h3 className="text-left text-lg font-bold mb-2 text-white">Verified Suppliers</h3>
              <p className="text-muted-foreground text-sm">
                Onboarded partners with audited operations and documented quality assurance.
              </p>
              <div className="absolute left-6 top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
