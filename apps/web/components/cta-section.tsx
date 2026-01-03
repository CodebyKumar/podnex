import { Button } from "@workspace/ui/components/button"

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[var(--studio-surface)] to-[var(--studio-bg-dark)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Microphone Icon */}
          <div className="w-32 h-32 mx-auto mb-8 bg-[var(--studio-surface)] rounded-full flex items-center justify-center shadow-[inset_5px_5px_10px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.05),0_0_30px_rgba(255,174,0,0.1)]">
            <span className="text-6xl">🎤</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--studio-text-main)]">
            Ready to Initialize?
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--studio-text-muted)] mb-10 max-w-2xl mx-auto">
            Join thousands of creators using Podnex to craft professional podcasts. 
            Start creating today — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[var(--studio-accent)] hover:bg-[var(--studio-accent-dim)] text-black font-bold uppercase tracking-wider text-lg px-10 py-6 shadow-[0_6px_0_var(--studio-accent-dim),0_15px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_0_var(--studio-accent-dim),0_15px_25px_rgba(255,174,0,0.3)] active:translate-y-1.5 active:shadow-[0_0_0_var(--studio-accent-dim)] transition-all"
            >
              Start Free Trial
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-[var(--studio-accent)]/30 text-[var(--studio-accent)] hover:bg-[var(--studio-accent)]/10 uppercase tracking-wider text-lg px-10 py-6"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-sm text-[var(--studio-text-muted)] mb-4">
              Trusted by creators worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-2xl font-bold text-[var(--studio-text-muted)]">10K+</div>
              <div className="w-px h-8 bg-[var(--studio-text-muted)]" />
              <div className="text-2xl font-bold text-[var(--studio-text-muted)]">Creators</div>
              <div className="w-px h-8 bg-[var(--studio-text-muted)]" />
              <div className="text-2xl font-bold text-[var(--studio-text-muted)]">50M+</div>
              <div className="w-px h-8 bg-[var(--studio-text-muted)]" />
              <div className="text-2xl font-bold text-[var(--studio-text-muted)]">Episodes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
