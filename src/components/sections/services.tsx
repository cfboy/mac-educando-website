import {
  Brain,
  MessageCircle,
  Activity,
  Hand,
  ClipboardCheck,
  GraduationCap,
  Users,
  BookOpen,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: ClipboardCheck,
    title: 'Evaluaciones y Reevaluaciones',
    description:
      'Evaluaciones integrales para identificar necesidades educativas y de desarrollo en niños y adolescentes.',
  },
  {
    icon: Brain,
    title: 'Terapia Psicológica',
    description:
      'Atención psicológica especializada para el bienestar emocional y conductual del estudiante.',
  },
  {
    icon: MessageCircle,
    title: 'Terapia del Habla',
    description:
      'Intervención en lenguaje y comunicación para mejorar las habilidades de expresión y comprensión.',
  },
  {
    icon: Activity,
    title: 'Terapia Física',
    description:
      'Rehabilitación y fortalecimiento físico orientado a mejorar las capacidades motoras.',
  },
  {
    icon: Hand,
    title: 'Terapia Ocupacional',
    description:
      'Desarrollo de habilidades funcionales para la vida diaria y el rendimiento académico.',
  },
  {
    icon: GraduationCap,
    title: 'Desarrollo Académico',
    description:
      'Programas diseñados para potenciar el rendimiento y las habilidades académicas del estudiante.',
  },
  {
    icon: Users,
    title: 'Desarrollo Profesional',
    description:
      'Orientación y capacitación para el crecimiento profesional de educadores y terapeutas.',
  },
  {
    icon: BookOpen,
    title: 'Desarrollo Personal',
    description:
      'Estrategias y herramientas para el crecimiento integral y el bienestar personal.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Servicios orientados al{' '}
            <span className="text-[var(--secondary)]">desarrollo integral</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            Brindamos una amplia gama de servicios especializados para apoyar el
            crecimiento profesional, académico y personal de cada individuo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <div className="group hover:shadow-mac-green-500/5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-lg bg-[var(--accent)] p-3 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-semibold text-[var(--card-foreground)]">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
        {service.description}
      </p>
    </div>
  )
}
