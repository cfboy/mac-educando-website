import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { Award, Clock, MapPin, ShieldCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const STATS = [
  { value: 500, suffix: '+', label: 'Familias Impactadas' },
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 20, suffix: '+', label: 'Profesionales Certificados' },
  { value: 50, suffix: '+', label: 'Escuelas Aliadas' },
]

const BADGES = [
  { icon: ShieldCheck, label: 'Profesionales Certificados' },
  { icon: Award, label: 'Servicio de Excelencia' },
  { icon: MapPin, label: 'Toda la Isla' },
  { icon: Clock, label: '6 Días a la Semana' },
]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-muted py-12 sm:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        {/* Animated stat counters */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map(stat => (
            <motion.div key={stat.label} variants={itemVariants}>
              <AnimatedStat stat={stat} />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {BADGES.map(badge => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <badge.icon className="h-4 w-4 text-primary" />
              <span className="font-display text-xs font-medium sm:text-sm">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
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
      <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">
        <motion.span>{rounded}</motion.span>
        {stat.suffix || ''}
      </div>
      <p className="mt-2 font-display text-xs tracking-wide text-muted-foreground sm:text-sm">
        {stat.label}
      </p>
    </div>
  )
}
