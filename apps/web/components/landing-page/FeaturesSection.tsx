import { AudioLines, Wand2, Code } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Text → Podcast, Instantly',
    description: 'Drop in scripts, blog posts, or docs and render full-length narrated episodes with clean prosody and pacing.',
  },
  {
    icon: AudioLines,
    title: 'Voice Library & Cloning',
    description: '150+ production voices plus custom cloning with safety rails. Blend intros, hosts, and guests per scene.',
  },
  {
    icon: Code,
    title: 'API-First & Webhooks',
    description: 'Async or streaming endpoints, webhooks with retries, signed URLs, and usage telemetry built-in.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="felt-bg py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header - Brushed Metal Bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="brushed-metal rounded-lg px-8 py-6 text-center relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 screw" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 screw" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-wood-dark">
              Generation Stack
            </h2>
            <p className="font-body text-metal-steel mt-2">
              Built for teams that turn text into podcast-ready audio at scale
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="wood-panel rounded-xl p-8 relative group hover:-translate-y-1 transition-transform duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner Screws */}
              <div className="absolute top-4 left-4 screw" />
              <div className="absolute top-4 right-4 screw" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 screw" />

              {/* Brass Badge Icon */}
              <div className="brass-badge w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform">
                <feature.icon className="w-7 h-7 text-wood-dark" strokeWidth={1.5} />
              </div>

              {/* Title - Embossed */}
              <h3 className="font-heading text-xl font-bold text-center text-embossed mb-4">
                {feature.title}
              </h3>

              {/* Description - Debossed */}
              <p className="font-body text-sm text-center text-debossed leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
