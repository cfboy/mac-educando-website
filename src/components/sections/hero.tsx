import { ArrowDown, Phone } from 'lucide-react'

import { ButtonLink } from '@/components/ui/button'

export function Hero() {
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
        {/* Logo mark */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[var(--accent)] shadow-lg sm:h-36 sm:w-36">
          <HeroLogo className="h-20 w-20 sm:h-28 sm:w-28" />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-[var(--primary)]">Centro de Servicios</span>
          <br />
          <span className="text-[var(--secondary)]">Educativos</span>
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg text-[var(--muted-foreground)] sm:text-xl">
          <span className="font-semibold text-[var(--primary)]">
            M Adviser and Consultant Inc.
          </span>
        </p>

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

function HeroLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="trunk-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8751a" />
          <stop offset="100%" stopColor="#8a3e0b" />
        </linearGradient>
      </defs>

      {/* M letter */}
      <path
        d="M30 175 L30 95 L65 130 L100 95 L135 130 L170 95 L170 175 L148 175 L148 125 L120 158 L100 135 L80 158 L52 125 L52 175 Z"
        fill="var(--primary)"
        opacity="0.9"
      />

      {/* Tree trunk */}
      <path
        d="M92 95 C95 55 100 40 100 35 C100 40 105 55 108 95"
        fill="url(#trunk-grad)"
      />

      {/* Branches */}
      <path
        d="M100 60 C85 55 78 48 75 42"
        fill="none"
        stroke="#d4651a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M100 60 C115 55 122 48 125 42"
        fill="none"
        stroke="#d4651a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M100 50 C88 42 82 35 80 28"
        fill="none"
        stroke="#d4651a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100 50 C112 42 118 35 120 28"
        fill="none"
        stroke="#d4651a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100 42 C94 35 90 28 88 22"
        fill="none"
        stroke="#d4651a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M100 42 C106 35 110 28 112 22"
        fill="none"
        stroke="#d4651a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Leaves - dark green */}
      <ellipse
        cx="75"
        cy="38"
        rx="10"
        ry="6"
        fill="#2d6a2e"
        transform="rotate(-35 75 38)"
      />
      <ellipse
        cx="88"
        cy="20"
        rx="9"
        ry="5.5"
        fill="#1b441b"
        transform="rotate(-15 88 20)"
      />
      <ellipse cx="100" cy="14" rx="9" ry="5" fill="#2d6a2e" />

      {/* Leaves - light green */}
      <ellipse
        cx="125"
        cy="38"
        rx="10"
        ry="6"
        fill="#7cb342"
        transform="rotate(35 125 38)"
      />
      <ellipse
        cx="112"
        cy="20"
        rx="9"
        ry="5.5"
        fill="#4e9a47"
        transform="rotate(15 112 20)"
      />
      <ellipse
        cx="68"
        cy="48"
        rx="8"
        ry="5"
        fill="#7cb342"
        transform="rotate(-25 68 48)"
      />

      {/* Leaves - yellow accent */}
      <ellipse
        cx="80"
        cy="28"
        rx="7"
        ry="4.5"
        fill="#ffd600"
        transform="rotate(-20 80 28)"
      />
      <ellipse
        cx="132"
        cy="48"
        rx="8"
        ry="5"
        fill="#ffd600"
        transform="rotate(25 132 48)"
      />
      <ellipse
        cx="120"
        cy="28"
        rx="7"
        ry="4.5"
        fill="#ffd600"
        transform="rotate(20 120 28)"
      />

      {/* Extra detail leaves */}
      <ellipse
        cx="94"
        cy="30"
        rx="6"
        ry="4"
        fill="#4e9a47"
        transform="rotate(-10 94 30)"
      />
      <ellipse
        cx="106"
        cy="30"
        rx="6"
        ry="4"
        fill="#2d6a2e"
        transform="rotate(10 106 30)"
      />
    </svg>
  )
}
