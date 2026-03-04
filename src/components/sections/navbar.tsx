import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import mLogo from '@/assets/images/logos/m-logo.png'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#empleo', label: 'Empleo' },
]

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--background)]/95 shadow-sm backdrop-blur-md'
          : 'bg-[var(--background)]/60 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={mLogo} alt="MAC Logo" className="h-10 w-10" />
          <span className="font-display text-lg font-bold text-[var(--primary)]">
            MAC{' '}
            <span className="hidden text-[var(--secondary)] sm:inline">
              Educando
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 font-display text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[var(--primary)]"
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            className="ml-2"
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[var(--card)] shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <span className="font-display text-lg font-bold text-[var(--primary)]">
                  Menú
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex-1 space-y-1 px-4 py-4">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex min-h-[44px] items-center rounded-lg px-4 font-display text-sm font-medium transition-colors',
                      activeSection === link.href.slice(1)
                        ? 'bg-[var(--accent)] text-[var(--primary)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--primary)]'
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
