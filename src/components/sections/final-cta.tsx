import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const BENEFITS = [
  'Sin compromiso',
  'Respuesta en 24 horas',
  'Consulta gratuita',
]

export function FinalCta() {
  return (
    <section className="bg-primary relative overflow-hidden py-20 sm:py-28">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15), transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.1), transparent 40%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
      >
        <motion.span
          variants={itemVariants}
          className="font-display mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70 uppercase"
        >
          <span className="h-px w-6 bg-white/40" />
          Da el Primer Paso
          <span className="h-px w-6 bg-white/40" />
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="font-display text-primary-foreground mt-2 font-semibold tracking-tight"
        >
          Transforma el futuro de tu estudiante hoy
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Contáctanos para una evaluación inicial y descubre cómo podemos apoyar
          el desarrollo integral de tu hijo o hija.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="font-display text-primary inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            Contáctanos Ahora
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#servicios"
            className="font-display text-primary-foreground inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-semibold transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Conoce Nuestros Servicios
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {BENEFITS.map(benefit => (
            <div
              key={benefit}
              className="flex items-center gap-2 text-white/70"
            >
              <Check className="h-4 w-4 text-white/90" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
