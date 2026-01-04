import Navigation from "@/components/landing-page/Navigation"
import HeroSection from "@/components/landing-page/HeroSection"
import FeaturesSection from "@/components/landing-page/FeaturesSection"
import APISection from "@/components/landing-page/APISection"
import PricingSection from "@/components/landing-page/PricingSection"
import CTASection from "@/components/landing-page/CTASection"
import Footer from "@/components/landing-page/Footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <APISection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
             
