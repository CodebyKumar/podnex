import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

const features = [
  {
    icon: "🎚️",
    title: "Studio Recording",
    description: "Professional-grade recording tools with real-time effects and mixing capabilities. Perfect for podcasters and content creators."
  },
  {
    icon: "⚡",
    title: "AI-Powered API",
    description: "ElevenLabs-style API for podcast generation. Create, edit, and enhance audio programmatically with cutting-edge AI."
  },
  {
    icon: "🎙️",
    title: "Voice Cloning",
    description: "Clone voices with remarkable accuracy. Perfect for multilingual content or maintaining consistency across episodes."
  },
  {
    icon: "📡",
    title: "Multi-Track Support",
    description: "Record and mix multiple audio tracks simultaneously. Ideal for interviews and panel discussions."
  },
  {
    icon: "🔊",
    title: "Audio Enhancement",
    description: "AI-powered noise reduction, equalization, and mastering. Make every recording sound professional."
  },
  {
    icon: "🌐",
    title: "Global CDN",
    description: "Fast, reliable content delivery worldwide. Your podcasts load instantly, anywhere on the planet."
  }
]

export function FeatureGrid() {
  return (
    <section className="section-padding bg-[var(--studio-bg-dark)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--studio-text-main)]">
            The Virtual Console
          </h2>
          <p className="text-lg text-[var(--studio-text-muted)] max-w-2xl mx-auto">
            Everything you need to create, distribute, and scale your podcast empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              variant="studio"
              className="hover-lift group cursor-pointer"
            >
              <CardHeader>
                <div className="text-5xl mb-4 bg-gradient-to-br from-[#333] to-[#222] w-16 h-16 flex items-center justify-center rounded-2xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.1)]">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-[var(--studio-text-main)] group-hover:text-[var(--studio-accent)] transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[var(--studio-text-muted)]">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
