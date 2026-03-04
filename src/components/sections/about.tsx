import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { Eye, Heart, Target } from 'lucide-react'
import { useEffect, useRef } from 'react'

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const STATS = [
  { value: 8, suffix: '+', label: 'Servicios Especializados' },
  { value: 3, label: 'Modalidades de Servicio' },
  { value: 6, label: 'Días a la Semana' },
]

export function About() {
  return (
    <section
      id="nosotros"
      className="border-y border-[var(--border)] bg-[var(--muted)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-[var(--background)] px-4 py-1.5 font-display text-sm font-medium text-[var(--primary)]">
            Sobre Nosotros
          </span>
          <h2 className="mt-4 font-bold tracking-tight">
            Comprometidos con la{' '}
            <span className="text-[var(--secondary)]">educación</span>
          </h2>
        </motion.div>

        {/* Asymmetric layout */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-8 lg:grid-cols-5"
        >
          {/* Mission — featured large card */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 lg:col-span-3"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--primary)] opacity-[0.06] blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex rounded-full bg-[var(--accent)] p-4 text-[var(--primary)]">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-[var(--card-foreground)]">
                Misión
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-[var(--muted-foreground)]">
                Proveer servicios educativos y terapéuticos de excelencia que
                impulsen el desarrollo integral de cada individuo, fomentando su
                crecimiento profesional, académico y personal en un ambiente de
                apoyo y confianza.
              </p>
            </div>
          </motion.div>

          {/* Vision + Values stacked */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <motion.div
              variants={cardVariants}
              className="relative flex-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
            >
              <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-[var(--secondary)] opacity-[0.06] blur-3xl" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-full bg-mac-orange-50 p-4 text-[var(--secondary)]">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-[var(--card-foreground)]">
                  Visión
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Ser el centro de servicios educativos líder en Puerto Rico,
                  reconocido por la calidad de nuestros servicios y el impacto
                  positivo en la vida de las familias y comunidades que servimos.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="relative flex-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-mac-leaf opacity-[0.08] blur-3xl" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-full bg-[var(--accent)] p-4 text-[var(--primary)]">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-[var(--card-foreground)]">
                  Valores
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Compromiso, excelencia, empatía e innovación. Trabajamos con
                  dedicación para ofrecer un servicio personalizado que responda
                  a las necesidades únicas de cada persona y su familia.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10"
        >
          {STATS.map(stat => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedStat({
  stat,
}: {
  stat: { value: number; suffix?: string; label: string }
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, stat.value, {
        duration: 1.5,
        ease: 'easeOut',
      })
      return controls.stop
    }
  }, [isInView, count, stat.value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl font-bold text-[var(--primary)] sm:text-4xl">
        <motion.span>{rounded}</motion.span>
        {stat.suffix || ''}
      </div>
      <p className="mt-2 text-xs text-[var(--muted-foreground)] sm:text-sm">
        {stat.label}
      </p>
    </div>
  )
}
