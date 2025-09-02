import { Brain, Users, Lightbulb, Target, Zap, Code } from "lucide-react"

export const skills = [
  { icon: Brain, label: "Traceability", description: "Track origin to farms, co‑ops, and processors" },
  { icon: Code, label: "Compliance", description: "Digitally verified certificates and checks" },
  { icon: Users, label: "Pre‑Vetted SMEs", description: "Trusted suppliers and buyers across corridors" },
  { icon: Lightbulb, label: "Sustainability", description: "Low‑emission logistics and eco‑packaging" },
  { icon: Target, label: "Efficient Matching", description: "Direct, transparent deal flow" },
  { icon: Zap, label: "Live Tracking", description: "Real‑time logistics and status updates" },
]

export const achievements = [
  { number: "5", label: "Trade Routes" },
  { number: "1000+", label: "Shipments" },
  { number: "6", label: "Regions" },
  { number: "50+", label: "Partners" },
]

export const careerTimeline = [
  {
    id: "1",
    title: "Join",
    date: "Step 1",
    description: "Create your account and tell us your sourcing/export needs.",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Verify",
    date: "Step 2",
    description: "We match you with pre‑vetted partners and verify origin/compliance.",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Trade",
    date: "Step 3",
    description: "Secure terms with escrow/fintech support and transparent fees.",
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Track",
    date: "Step 4",
    description: "End‑to‑end logistics with live tracking and digital documentation.",
    status: "current" as const,
  },
]
