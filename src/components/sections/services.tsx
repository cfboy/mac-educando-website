import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  BookOpen,
  Brain,
  Building2,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Hand,
  MessageCircle,
  Monitor,
  School,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
}

interface Modality {
  icon: LucideIcon
  title: string
  description: string
  services: string[]
}

const SERVICES: Service[] = [
  {
    icon: ClipboardCheck,
    title: 'Evaluaciones',
    description:
      'Evaluaciones Psicológicas, Del Habla y Ocupacional, entre otras. Presencia en los COMPU cuando sea necesario y solicitado por la escuela.',
    details: [
      'Tri Anuales — evaluaciones programadas cada tres años para seguimiento continuo del desarrollo del estudiante',
      'Re-Evaluaciones — revisión de progreso para ajustar planes de intervención según las necesidades actuales',
      'Evaluaciones Adicionales — evaluaciones solicitadas fuera del ciclo regular para atender necesidades emergentes',
      'Tipos: Psicométricas, Socioemocionales, Psicoeducativas, Del Habla y Ocupacional',
    ],
  },
  {
    icon: Brain,
    title: 'Terapia Psicológica',
    description:
      'Atención psicológica especializada individual y grupal para el bienestar emocional y conductual del estudiante.',
    details: [
      'Modalidad individual — sesiones personalizadas según las necesidades del estudiante',
      'Modalidad grupal — intervención en grupo para desarrollo de habilidades sociales y emocionales',
      'Enfoque conductual y emocional adaptado a cada etapa de desarrollo',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Terapia del Habla',
    description:
      'Intervención individual y grupal en lenguaje y comunicación para mejorar las habilidades de expresión y comprensión.',
    details: [
      'Modalidad individual y grupal',
      'Desarrollo de habilidades de expresión oral y comprensión auditiva',
      'Intervención en articulación, fluidez y lenguaje receptivo/expresivo',
    ],
  },
  {
    icon: Activity,
    title: 'Terapia Física',
    description:
      'Rehabilitación y fortalecimiento físico individual y grupal orientado a mejorar las capacidades motoras.',
    details: [
      'Modalidad individual y grupal',
      'Fortalecimiento de capacidades motoras gruesas',
      'Rehabilitación orientada al rendimiento funcional del estudiante',
    ],
  },
  {
    icon: Hand,
    title: 'Terapia Ocupacional',
    description:
      'Desarrollo de habilidades funcionales individual y grupal para la vida diaria y el rendimiento académico.',
    details: [
      'Modalidad individual y grupal',
      'Desarrollo de motricidad fina y habilidades de escritura',
      'Integración sensorial y habilidades de la vida diaria',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Desarrollo Académico',
    description:
      'Programas diseñados para potenciar el rendimiento y las habilidades académicas del estudiante.',
    details: [
      'Estrategias de aprendizaje personalizadas',
      'Apoyo en áreas de lectura, escritura y matemáticas',
      'Planes de intervención académica individualizados',
    ],
  },
  {
    icon: Users,
    title: 'Desarrollo Profesional',
    description:
      'Orientación y capacitación para el crecimiento profesional de educadores y terapeutas. Servicio ofrecido en centros educativos.',
    details: [
      'Talleres y capacitaciones para maestros y personal escolar',
      'Estrategias de manejo de conducta en el salón de clases',
      'Disponible exclusivamente en centros educativos',
    ],
  },
  {
    icon: BookOpen,
    title: 'Ofrecimiento a Padres',
    description:
      'Talleres y herramientas para el crecimiento integral y el bienestar familiar. Servicio ofrecido en centros educativos.',
    details: [
      'Talleres sobre desarrollo infantil y estrategias de crianza',
      'Orientación sobre los servicios y derechos educativos de sus hijos',
      'Disponible exclusivamente en centros educativos',
    ],
  },
]

const MODALITIES: Modality[] = [
  {
    icon: Building2,
    title: 'Oficina',
    description: 'Servicios disponibles en nuestra oficina',
    services: ['Evaluaciones', 'Terapias'],
  },
  {
    icon: School,
    title: 'Centros Educativos',
    description: 'Servicios que ofrecemos en escuelas',
    services: [
      'Terapias',
      'Evaluaciones',
      'Desarrollo Profesional',
      'Ofrecimiento a Padres',
    ],
  },
  {
    icon: Monitor,
    title: 'Virtual',
    description: 'Servicios disponibles de forma remota',
    services: ['Terapias', 'Evaluaciones'],
  },
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section id="servicios" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-display mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            Nuestros Servicios
          </span>
          <h2 className="mt-2 font-semibold tracking-tight">
            Servicios orientados al{' '}
            <span className="text-secondary">desarrollo integral</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-muted-foreground">
            Brindamos una amplia gama de servicios especializados para apoyar el
            crecimiento profesional, académico y personal de cada individuo.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(service => (
            <motion.div key={service.title} variants={cardVariants}>
              <ServiceCard
                service={service}
                onSelect={() => setSelectedService(service)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <span className="font-display mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            Modalidades
          </span>
          <h3 className="mt-2 font-semibold tracking-tight">
            ¿Dónde ofrecemos nuestros{' '}
            <span className="text-secondary">servicios</span>?
          </h3>
          <p className="mx-auto mt-5 mb-12 max-w-2xl text-pretty text-muted-foreground">
            Llegamos a donde nos necesites: en nuestra oficina, en centros
            educativos o de forma virtual.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {MODALITIES.map(modality => (
            <motion.div key={modality.title} variants={cardVariants}>
              <ModalityCard modality={modality} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service detail modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ServiceCard({
  service,
  onSelect,
}: {
  service: Service
  onSelect: () => void
}) {
  const Icon = service.icon
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative h-full overflow-hidden rounded-xl bg-card p-6"
    >
      {/* Default border */}
      <div className="absolute inset-0 rounded-xl border border-border transition-all duration-300 group-hover:border-transparent" />
      {/* Gradient border on hover */}
      <div
        className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-xl bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-[0.06]" />

      <div className="relative flex h-full flex-col">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="mb-4 inline-flex rounded-lg bg-accent p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="font-display mb-2 font-semibold text-card-foreground">
          {service.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <button
          type="button"
          onClick={onSelect}
          className="font-display inline-flex items-center gap-1 self-start text-sm font-medium text-primary transition-colors hover:text-secondary"
        >
          Más información
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  )
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service
  onClose: () => void
}) {
  const Icon = service.icon
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Decorative gradient top */}
          <div
            className="h-1 w-full"
            style={{
              background:
                'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
            }}
          />

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-accent p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            {/* Details list */}
            <div className="space-y-3">
              <h4 className="font-display text-sm font-semibold text-card-foreground">
                Detalles del servicio
              </h4>
              <ul className="space-y-3">
                {service.details.map(detail => (
                  <li key={detail} className="flex gap-3 text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-card-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 border-t border-border pt-6">
              <a
                href="#contacto"
                onClick={onClose}
                className="font-display inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Solicitar este servicio
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

function ModalityCard({ modality }: { modality: Modality }) {
  const Icon = modality.icon
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative h-full overflow-hidden rounded-xl bg-card p-6"
    >
      <div className="absolute inset-0 rounded-xl border border-border transition-all duration-300 group-hover:border-transparent" />
      <div
        className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="mb-4 inline-flex rounded-lg bg-accent p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h4 className="font-display mb-1 font-semibold text-card-foreground">
          {modality.title}
        </h4>
        <p className="mb-4 text-sm text-muted-foreground">
          {modality.description}
        </p>
        <ul className="space-y-2">
          {modality.services.map(service => (
            <li
              key={service}
              className="flex items-center gap-2 text-sm text-card-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
