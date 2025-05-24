import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MethodologySection } from "@/components/methodology-section"
import { ResultsSection } from "@/components/results-section"
import { TeamSection } from "@/components/team-section"
import { PublicationsSection } from "@/components/publications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <ResultsSection />
      <TeamSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
