import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="felt-bg py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Door Panel */}
          <div className="wood-panel-dark rounded-3xl p-8 md:p-12 relative">
            {/* Raised Door Panels Effect */}
            <div className="absolute inset-6 md:inset-8 border-4 border-wood-oak/30 rounded-2xl pointer-events-none" />
            <div className="absolute inset-10 md:inset-12 border-2 border-wood-oak/20 rounded-xl pointer-events-none" />

            {/* Brass Door Knocker */}
            <div className="flex justify-center mb-8">
              <div className="brass-badge w-20 h-20 rounded-full flex items-center justify-center relative">
                <div className="w-10 h-10 border-4 border-wood-dark rounded-full" />
                {/* Knocker ring shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-black/20 rounded-full blur-sm" />
              </div>
            </div>

            {/* Headline - Carved into door */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-embossed mb-6">
              Ready to Start Your
              <br />
              <span className="text-gold-foil">Podcast?</span>
            </h2>

            {/* Recording Light */}
            <div className="flex justify-center mb-8">
              <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg animate-glow-pulse">
                <div className="w-4 h-4 rounded-full bg-led-red shadow-[0_0_12px_hsl(4,90%,58%)]" />
                <span className="font-mono text-sm text-foreground font-bold tracking-widest">
                  ON AIR
                </span>
              </div>
            </div>

            {/* Subtext */}
            <p className="font-body text-center text-debossed max-w-xl mx-auto mb-10">
              Join 50,000+ podcasters creating professional content. 
              No credit card required to start.
            </p>

            {/* Hero Button */}
            <div className="flex justify-center">
              <button className="btn-skeuo px-12 py-5 rounded-2xl font-body font-bold text-xl text-foreground flex items-center gap-4 group shadow-[0_0_30px_rgba(216,67,21,0.3)]">
                Create Your Show
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Door Handle */}
            <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="brass-badge w-8 h-24 rounded-full" />
            </div>

            {/* Hinge Plates */}
            <div className="absolute left-4 top-1/4 hidden lg:block">
              <div className="brushed-metal w-4 h-12 rounded-sm" />
            </div>
            <div className="absolute left-4 bottom-1/4 hidden lg:block">
              <div className="brushed-metal w-4 h-12 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
