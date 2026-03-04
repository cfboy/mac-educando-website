import { motion } from 'framer-motion'
import { ArrowUp, Facebook, Mail, Phone } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-muted">
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--color-primary), var(--color-secondary), transparent)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-1">
              <span className="font-display text-lg font-bold text-primary">
                MAC
              </span>
              <span className="font-display text-lg font-bold text-secondary">
                Educando
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              M Adviser and Consultant Inc.
              <br />
              Centro de Servicios Educativos en Puerto Rico, comprometidos con el
              desarrollo integral.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Enlaces
            </h4>
            <nav className="space-y-2">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#contacto', label: 'Contacto' },
                { href: '#empleo', label: 'Empleo' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Servicios
            </h4>
            <nav className="space-y-2">
              {[
                'Evaluaciones',
                'Terapia Psicológica',
                'Terapia del Habla',
                'Terapia Ocupacional',
                'Desarrollo Académico',
              ].map(service => (
                <a
                  key={service}
                  href="#servicios"
                  className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+17879980442"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (787) 998-0442
              </a>
              <a
                href="mailto:info@maceducando.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                info@maceducando.com
              </a>
              <a
                href="https://www.facebook.com/MACAdviser/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} MAC Educando &mdash; M Adviser and Consultant Inc.
            Todos los derechos reservados.
          </p>
          <motion.a
            href="#inicio"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1 font-display text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            aria-label="Volver al inicio"
          >
            <ArrowUp className="h-4 w-4" />
            Volver al inicio
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
