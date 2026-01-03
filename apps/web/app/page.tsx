import Link from "next/link"
import { HeroConsole } from "@/components/hero-console"
import { FeatureGrid } from "@/components/feature-grid"
import { APIShowcase } from "@/components/api-showcase"
import { PricingCards } from "@/components/pricing-cards"
import { CTASection } from "@/components/cta-section"
import { 
  Navbar, 
  NavbarContainer, 
  NavbarBrand, 
  NavbarNav, 
  NavbarLink, 
  NavbarActions 
} from "@workspace/ui/components/navbar"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--studio-bg-dark)]">
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            <span className="text-2xl font-bold text-[var(--studio-accent)] font-[family-name:var(--font-display)] group-hover:text-[var(--studio-accent-dim)] transition-colors">
              PODNEX
            </span>
          </NavbarBrand>
          
          <NavbarNav>
            <NavbarLink href="#features">Features</NavbarLink>
            <NavbarLink href="#api">API</NavbarLink>
            <NavbarLink href="#pricing">Pricing</NavbarLink>
            <NavbarLink href="#docs">Docs</NavbarLink>
            <NavbarLink href="#blog">Blog</NavbarLink>
          </NavbarNav>

          <NavbarActions>
            <Link href="/signin">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[var(--studio-text-main)] hover:text-[var(--studio-accent)] transition-colors font-semibold"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                size="sm" 
                className="bg-[var(--studio-accent)] hover:bg-[var(--studio-accent-dim)] text-black font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(255,174,0,0.3)] hover:shadow-[0_0_30px_rgba(255,174,0,0.5)] transition-all"
              >
                Start Free
              </Button>
            </Link>
          </NavbarActions>
        </NavbarContainer>
      </Navbar>

      <HeroConsole />
      
      <div id="features">
        <FeatureGrid />
      </div>
      
      <div id="api">
        <APIShowcase />
      </div>
      
      <div id="pricing">
        <PricingCards />
      </div>
      
      <CTASection />

      <footer className="border-t border-white/5 py-12 bg-[var(--studio-bg-dark)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[var(--studio-accent)] mb-4 text-lg font-[family-name:var(--font-display)]">
                PODNEX
              </h3>
              <p className="text-sm text-[var(--studio-text-muted)]">
                Professional podcast creation and API-powered audio processing platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--studio-text-main)] mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[var(--studio-text-muted)]">
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">API</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--studio-text-main)] mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-[var(--studio-text-muted)]">
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--studio-text-main)] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[var(--studio-text-muted)]">
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[var(--studio-accent)] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-sm text-[var(--studio-text-muted)]">
            <p>© 2026 Podnex. Engineered for fidelity.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}