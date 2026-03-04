import { motion } from 'framer-motion'
import { ArrowUp, Facebook, Mail, Phone } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-muted relative">
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
              <span className="font-display text-primary text-lg font-bold">
                MAC
              </span>
              <span className="font-display text-secondary text-lg font-bold">
                Educando
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              M Adviser and Consultant Inc.
              <br />
              Servicios educativos y terapéuticos especializados en Puerto Rico.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-foreground mb-4 text-sm font-semibold">
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
                  className="text-muted-foreground hover:text-primary block text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services quick links */}
          <div>
            <h4 className="font-display text-foreground mb-4 text-sm font-semibold">
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
                  className="text-muted-foreground hover:text-primary block text-sm transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-foreground mb-4 text-sm font-semibold">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+17879980442"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                (787) 998-0442
              </a>
              <a
                href="mailto:info@maceducando.com"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                info@maceducando.com
              </a>
              <a
                href="https://www.facebook.com/MACAdviser/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de MAC Educando (abre en nueva ventana)"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-border mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {year} MAC Educando &mdash; M Adviser and Consultant Inc.
            Todos los derechos reservados.
          </p>
          <motion.a
            href="#inicio"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-display text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm font-medium transition-colors"
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
