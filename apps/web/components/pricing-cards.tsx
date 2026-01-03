import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"

const pricingTiers = [
  {
    name: "Bedroom",
    price: "$9",
    period: "/mo",
    description: "Perfect for getting started",
    features: [
      "5 hours recording/month",
      "2-Track Mixing",
      "Standard MP3 Export",
      "Basic API Access (100 calls/day)",
      "Email Support"
    ],
    featured: false
  },
  {
    name: "Broadcast",
    price: "$29",
    period: "/mo",
    description: "For professional creators",
    features: [
      "Unlimited recording",
      "Multi-Track Mixing (up to 8 tracks)",
      "Lossless WAV Export",
      "Pro API Access (10K calls/day)",
      "Voice Cloning (3 voices)",
      "AI Noise Removal",
      "Priority Support"
    ],
    featured: true
  },
  {
    name: "Network",
    price: "$99",
    period: "/mo",
    description: "For teams and agencies",
    features: [
      "Everything in Broadcast",
      "Unlimited Team Members",
      "White-label Player",
      "Enterprise API (Unlimited)",
      "Voice Cloning (Unlimited)",
      "Custom Audio Models",
      "Dedicated Support",
      "SLA Guarantee"
    ],
    featured: false
  }
]

export function PricingCards() {
  return (
    <section className="section-padding bg-gradient-to-b from-[var(--studio-bg-dark)] to-[var(--studio-surface)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--studio-text-main)]">
            Studio Passes
          </h2>
          <p className="text-lg text-[var(--studio-text-muted)] max-w-2xl mx-auto">
            Choose the plan that fits your creative ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              variant="studio"
              className={`hover-lift relative ${tier.featured ? 'border-[var(--studio-accent)] shadow-[0_0_30px_rgba(255,174,0,0.1)]' : ''}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="studio" className="uppercase text-xs">
                    Recommended
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-sm uppercase tracking-wider text-[var(--studio-text-muted)] mb-4">
                  {tier.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[var(--studio-text-main)]">
                    {tier.price}
                  </span>
                  <span className="text-lg text-[var(--studio-text-muted)]">
                    {tier.period}
                  </span>
                </div>
                <CardDescription className="text-[var(--studio-text-muted)]">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-[var(--studio-text-muted)] py-2 border-b border-white/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--studio-accent)] mt-1.5 shadow-[0_0_8px_var(--studio-accent)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    tier.featured 
                      ? 'bg-[var(--studio-accent)] hover:bg-[var(--studio-accent-dim)] text-black' 
                      : 'bg-[var(--studio-surface-light)] hover:bg-[var(--studio-surface-light)]/80 text-[var(--studio-text-main)]'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
