import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import mLogo from '@/assets/images/logos/m-logo.png'
import { Button, ButtonLink } from '@/components/ui/button'
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
    <>
      <nav
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'border-border bg-background/95 border-b shadow-sm backdrop-blur-md'
            : 'bg-background/60 backdrop-blur-sm'
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={mLogo} alt="MAC Logo" className="h-10 w-10" />
            <span className="font-display text-primary text-lg font-bold">
              MAC{' '}
              <span className="text-secondary hidden sm:inline">Educando</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-foreground hover:text-primary relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="bg-primary absolute right-2 bottom-0 left-2 h-0.5 rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
            <ButtonLink href="#contacto" size="sm" className="ml-3">
              Contáctanos
            </ButtonLink>
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
      </nav>

      {/* Mobile drawer — outside nav to avoid backdrop-blur stacking context */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-background fixed inset-y-0 right-0 z-50 flex w-72 flex-col shadow-2xl md:hidden"
            >
              <div className="border-border flex items-center justify-between border-b px-5 py-4">
                <span className="font-display text-primary text-lg font-bold">
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
                      'font-display flex min-h-[44px] items-center rounded-lg px-4 text-sm font-medium transition-colors',
                      activeSection === link.href.slice(1)
                        ? 'bg-accent text-primary'
                        : 'text-foreground hover:bg-accent hover:text-primary'
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="border-border border-t px-4 py-4">
                <ButtonLink
                  href="#contacto"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Contáctanos
                </ButtonLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
