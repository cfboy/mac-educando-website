import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  theme: "light" | "dark"
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <MacLogo className="h-10 w-10" />
          <span className="text-lg font-bold text-[var(--primary)]">
            MAC <span className="hidden text-[var(--secondary)] sm:inline">Educando</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
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
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
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
          "overflow-hidden border-t border-[var(--border)] transition-all duration-300 md:hidden",
          isOpen ? "max-h-64" : "max-h-0 border-t-0"
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {NAV_LINKS.map((link) => (
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

function MacLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* M letter */}
      <path
        d="M15 85 L15 40 L35 65 L50 45 L65 65 L85 40 L85 85 L72 85 L72 60 L58 78 L50 68 L42 78 L28 60 L28 85 Z"
        fill="var(--primary)"
      />
      {/* Tree trunk */}
      <path
        d="M47 45 Q50 20 53 45"
        fill="none"
        stroke="#d4651a"
        strokeWidth="3"
      />
      {/* Leaves */}
      <ellipse cx="42" cy="25" rx="6" ry="4" fill="#2d6a2e" transform="rotate(-30 42 25)" />
      <ellipse cx="50" cy="18" rx="5" ry="3.5" fill="#4e9a47" transform="rotate(0 50 18)" />
      <ellipse cx="58" cy="25" rx="6" ry="4" fill="#7cb342" transform="rotate(30 58 25)" />
      <ellipse cx="45" cy="32" rx="5" ry="3" fill="#ffd600" transform="rotate(-20 45 32)" />
      <ellipse cx="55" cy="32" rx="5" ry="3" fill="#2d6a2e" transform="rotate(20 55 32)" />
    </svg>
  )
}
