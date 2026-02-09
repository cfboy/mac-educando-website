import { About } from '@/components/sections/about'
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
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
