import { Phone, Mail, Facebook } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-lg font-bold text-[var(--primary)]">
                MAC
              </span>
              <span className="text-lg font-bold text-[var(--secondary)]">
                Educando
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              M Adviser and Consultant Inc.
              <br />
              Centro de Servicios Educativos
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--foreground)]">
              Enlaces
            </h4>
            <nav className="space-y-2">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#contacto', label: 'Contacto' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--foreground)]">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+17879980442"
                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <Phone className="h-4 w-4" />
                (787) 998-0442
              </a>
              <a
                href="mailto:info@maceducando.com"
                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <Mail className="h-4 w-4" />
                info@maceducando.com
              </a>
              <a
                href="https://www.facebook.com/MACAdviser/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            &copy; {year} MAC Educando &mdash; M Adviser and Consultant Inc.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
