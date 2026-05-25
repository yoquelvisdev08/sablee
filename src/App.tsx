import { LanguageProvider } from './context/LanguageContext'
import { CtaModalProvider } from './context/CtaModalContext'
import TopAppBar from './components/TopAppBar'
import HeroSection from './components/HeroSection'
import TeamSection from './components/TeamSection'
import AboutSection from './components/AboutSection'
import ShopSection from './components/ShopSection'
import PartnersSection from './components/PartnersSection'
import CtaModal from './components/CtaModal'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <CtaModalProvider>
        <TopAppBar />
        <div className="min-h-screen bg-surface text-on-surface">
          <main>
            <HeroSection />
            <TeamSection />
            <AboutSection />
            <ShopSection />
            <PartnersSection />
          </main>
          <Footer />
        </div>
        <CtaModal />
      </CtaModalProvider>
    </LanguageProvider>
  )
}
