import { About } from '@/components/sections/about'
import { Careers } from '@/components/sections/careers'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/sections/navbar'
import { Services } from '@/components/sections/services'
import { useTheme } from '@/hooks/use-theme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Ir al contenido principal
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero theme={theme} />
        <Services />
        <About />
        <Contact />
        <Careers />
      </main>
      <Footer />
    </div>
  )
}

export default App
