import { Target, Eye, Heart } from 'lucide-react'

export function About() {
  return (
    <section
      id="nosotros"
      className="border-y border-[var(--border)] bg-[var(--muted)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[var(--background)] px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
            Sobre Nosotros
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprometidos con la{' '}
            <span className="text-[var(--secondary)]">educación</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full bg-[var(--accent)] p-4 text-[var(--primary)]">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-[var(--card-foreground)]">
              Misión
            </h3>
            <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
              Proveer servicios educativos y terapéuticos de excelencia que
              impulsen el desarrollo integral de cada individuo, fomentando su
              crecimiento profesional, académico y personal en un ambiente de
              apoyo y confianza.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <div className="bg-mac-orange-50 mx-auto mb-5 inline-flex rounded-full p-4 text-[var(--secondary)]">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-[var(--card-foreground)]">
              Visión
            </h3>
            <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
              Ser el centro de servicios educativos líder en Puerto Rico,
              reconocido por la calidad de nuestros servicios y el impacto
              positivo en la vida de las familias y comunidades que servimos.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full bg-[var(--accent)] p-4 text-[var(--primary)]">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-[var(--card-foreground)]">
              Valores
            </h3>
            <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
              Compromiso, excelencia, empatía e innovación. Trabajamos con
              dedicación para ofrecer un servicio personalizado que responda a
              las necesidades únicas de cada persona y su familia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
