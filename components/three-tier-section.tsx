import { ShieldCheck, Leaf, FileCheck } from "lucide-react"

export default function ThreeTierSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-6 text-white md:text-5xl">GLOBXLINK Eco‑Trade Pillars</h2>
          <p className="text-xl text-muted-foreground">
            Safe, transparent, and efficient cross‑border trade powered by verification, sustainability, and compliance.
          </p>
        </div>

        <div className="space-y-0 border border-border rounded-lg overflow-hidden">
          <div className="flex items-center p-6 border-b border-solid border-white">
            <div className="flex items-center min-w-0 flex-1">
              <div className="p-3 bg-primary/10 rounded-lg mr-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold font-heading text-secondary-foreground">Traceability</h3>
              </div>
            </div>
            <div className="ml-6 text-right">
              <div className="text-muted-foreground">Origin Verified</div>
              <div className="text-muted-foreground">Digital Records</div>
            </div>
          </div>

          <div className="flex items-center p-6 border-b border-solid border-white">
            <div className="flex items-center min-w-0 flex-1">
              <div className="p-3 bg-primary/10 rounded-lg mr-6">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold font-heading text-secondary-foreground">Sustainability</h3>
              </div>
            </div>
            <div className="ml-6 text-right">
              <div className="text-muted-foreground">Lower Emissions</div>
              <div className="text-muted-foreground">Eco Packaging</div>
              <div className="text-muted-foreground">Efficient Processing</div>
            </div>
          </div>

          <div className="flex items-center p-6">
            <div className="flex items-center min-w-0 flex-1">
              <div className="p-3 bg-primary/10 rounded-lg mr-6">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold font-heading text-secondary-foreground">Compliance</h3>
              </div>
            </div>
            <div className="ml-6 text-right">
              <div className="text-muted-foreground">Customs &amp; Food Safety</div>
              <div className="text-muted-foreground">Verified Certificates</div>
              <div className="text-muted-foreground">Regulatory Checks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
