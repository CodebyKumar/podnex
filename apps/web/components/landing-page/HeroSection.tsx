import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen felt-bg pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brass/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Hero Card - Wood Panel */}
          <div className="wood-panel-dark rounded-2xl p-12 md:p-16 relative">
            {/* Corner Screws */}
            <div className="absolute top-6 left-6 screw" />
            <div className="absolute top-6 right-6 screw" />
            <div className="absolute bottom-6 left-6 screw" />
            <div className="absolute bottom-6 right-6 screw" />

            {/* Logo Badge */}
            <div className="flex justify-center mb-8">
              <div className="brass-badge px-6 py-2 rounded-full">
                <span className="font-mono text-sm text-wood-dark font-bold tracking-wider">
                  AI TEXT → PODCAST PLATFORM
                </span>
              </div>
            </div>

            {/* Headline - Embossed */}
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-center mb-6 text-embossed leading-tight">
              Turn any text into
              <br />
              <span className="text-gold-foil">a studio-grade podcast.</span>
            </h1>

            {/* Subheadline - Debossed */}
            <p className="font-body text-lg md:text-xl text-center text-debossed max-w-2xl mx-auto mb-10">
              Generate narrated episodes from scripts, docs, or API calls. Multi-voice, multilingual, low-latency streaming — built for product teams, not just creators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-skeuo px-8 py-4 rounded-xl font-body font-bold text-lg text-foreground flex items-center gap-3 min-w-[200px] justify-center">
                Generate a demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-skeuo-secondary px-8 py-4 rounded-xl font-body font-bold text-lg text-foreground flex items-center gap-3 min-w-[200px] justify-center">
                <Play className="w-5 h-5" />
                See API flow
              </button>
            </div>
          </div>

          {/* LED Indicator Row */}
          <div className="mt-8 flex justify-center">
            <div className="brushed-metal rounded-full px-8 py-3 flex items-center gap-4">
              <span className="font-mono text-xs text-wood-dark/80 uppercase tracking-wider">Status</span>
              <div className="flex items-center gap-3">
                <div className="led led-green animate-led-1" />
                <div className="led led-green animate-led-2" />
                <div className="led led-amber animate-led-3" />
                <div className="led led-green animate-led-1" />
                <div className="led led-amber animate-led-2" />
                <div className="led led-green animate-led-3" />
                <div className="led led-red animate-led-1" />
                <div className="led led-green animate-led-2" />
              </div>
              <span className="font-mono text-xs text-wood-dark/80 uppercase tracking-wider">Online</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: '2B+', label: 'Characters rendered' },
              { value: '150+', label: 'Voices & locales' },
              { value: '<1.2s', label: 'First audio byte' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-gold-foil font-bold">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-debossed mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
