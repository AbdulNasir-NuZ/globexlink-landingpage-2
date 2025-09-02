import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import StudentGlobe from "@/components/globe-demo"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 lg:px-8 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-black" />

      {/* Globe behind content */}
      <div className="absolute inset-0 pointer-events-none">
        {/* optional subtle vignette for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <StudentGlobe />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-sm font-medium border-accent text-accent">
                GLOBEXLINK • Global B2B Trade Platform
              </Badge>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 text-white text-balance">
                Connect. Trade. Grow Globally.
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl leading-relaxed text-pretty">
                Your trusted B2B platform connecting emerging markets across Turkey, MENA, Africa, Asia, and Latin
                America with innovative logistics and verified suppliers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Trading
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Explore Marketplace
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              <div>
                <div className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Trade Routes</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Shipments</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">Regions</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Partners</div>
              </div>
            </div>
          </div>

          {/* keep right column empty to center focus */}
          <div className="lg:col-span-1" />
        </div>
      </div>
    </section>
  )
}
