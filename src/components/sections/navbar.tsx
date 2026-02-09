import { Menu, X, Sun, Moon } from 'lucide-react'
import { useState } from 'react'

import mLogo from '@/assets/images/logos/m-logo.png'
import { Button } from '@/components/ui/button'
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
]

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={mLogo} alt="MAC Logo" className="h-10 w-10" />
          <span className="text-lg font-bold text-[var(--primary)]">
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
              className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--primary)]"
            >
              {link.label}
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
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-[var(--border)] transition-all duration-300 md:hidden',
          isOpen ? 'max-h-64' : 'max-h-0 border-t-0'
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
