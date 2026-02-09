import { ArrowDown, Phone } from 'lucide-react'

import fullLogoLight from '@/assets/images/logos/full-logo-light.png'
import fullLogoDark from '@/assets/images/logos/full-logo.png'
import { ButtonLink } from '@/components/ui/button'

interface HeroProps {
  theme: 'light' | 'dark'
}

export function Hero({ theme }: HeroProps) {
  const logoSrc = theme === 'light' ? fullLogoLight : fullLogoDark
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, var(--primary) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--secondary) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-[var(--primary)]">Centro de Servicios</span>
          <br />
          <span className="text-[var(--secondary)]">Educativos</span>
        </h1>
        {/* Logo mark */}
        <div className="mx-auto">
          <img
            src={logoSrc}
            alt="MAC Educando Logo"
            className="mx-auto h-48 w-auto sm:h-64 md:h-80"
          />
        </div>
        {/* <p className="mx-auto mb-4 max-w-2xl text-lg text-[var(--muted-foreground)] sm:text-xl">
          <span className="font-semibold text-[var(--primary)]">
            M Adviser and Consultant Inc.
          </span>
        </p> */}

        <p className="mx-auto mb-10 max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">
          Ofrecemos una amplia gama de servicios orientados al desarrollo{' '}
          <span className="font-semibold text-[var(--foreground)]">
            Profesional
          </span>
          ,{' '}
          <span className="font-semibold text-[var(--foreground)]">
            Académico
          </span>{' '}
          y{' '}
          <span className="font-semibold text-[var(--foreground)]">
            Personal
          </span>
          .
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="#servicios" size="lg">
            Nuestros Servicios
          </ButtonLink>
          <ButtonLink href="#contacto" variant="outline" size="lg">
            <Phone className="h-4 w-4" />
            Contáctanos
          </ButtonLink>
        </div>

        <a
          href="#servicios"
          className="mt-16 inline-block animate-bounce text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
          aria-label="Ir a servicios"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
