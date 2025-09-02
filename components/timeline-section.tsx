import HorizontalTimeline from "@/components/horizontal-timeline"
import { careerTimeline } from "@/data/portfolio-data"

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the platform, get verified partners, secure terms, and track logistics end‑to‑end. What’s your biggest
            challenge in sourcing/exporting today? We’ll reduce fraud, delays, and hidden costs.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <HorizontalTimeline events={careerTimeline} />
          </div>
        </div>
      </div>
    </section>
  )
}
