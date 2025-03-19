import { MapPin, MessagesSquare, ShoppingBag, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "GPS Locator",
    description: "Real-time location tracking to ensure safety and quick assistance in emergencies.",
    icon: MapPin, // Use an appropriate icon (e.g., from Lucide)
  },
  {
    name: "Community Chat",
    description: "Connect with a support network, share experiences, and find help instantly.",
    icon: MessagesSquare,
  },
  {
    name: "Marketplace",
    description: "Access essential safety tools, self-defense gadgets, and trusted services.",
    icon: ShoppingBag,
  },
  {
    name: "Self-Defense Lessons",
    description: "Learn crucial self-defense techniques to empower and protect yourself.",
    icon: ShieldCheck,
  },
];


export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Features</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

