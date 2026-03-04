import { motion } from 'framer-motion'
import { Eye, Heart, Target } from 'lucide-react'

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

export function About() {
  return (
    <section
      id="nosotros"
      className="border-border bg-muted scroll-mt-20 border-y py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-display text-primary mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
            <span className="bg-primary h-px w-6" />
            Sobre Nosotros
          </span>
          <h2 className="mt-2 font-semibold tracking-tight">
            Comprometidos con la{' '}
            <span className="text-secondary">educación</span>
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
            className="border-border bg-card relative overflow-hidden rounded-2xl border p-8 sm:p-10 lg:col-span-3"
          >
            <div className="bg-primary absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-[0.06] blur-3xl" />
            <div className="relative">
              <div className="bg-accent text-primary mb-5 inline-flex rounded-xl p-3">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-card-foreground mb-4 text-2xl font-semibold">
                Misión
              </h3>
              <p className="text-muted-foreground max-w-lg text-base leading-relaxed">
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
              className="border-border bg-card relative flex-1 overflow-hidden rounded-2xl border p-8"
            >
              <div className="bg-secondary absolute -bottom-16 -left-16 h-32 w-32 rounded-full opacity-[0.06] blur-3xl" />
              <div className="relative">
                <div className="bg-mac-orange-50 text-secondary mb-4 inline-flex rounded-xl p-3">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-card-foreground mb-3 text-xl font-semibold">
                  Visión
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ser el centro de servicios educativos líder en Puerto Rico,
                  reconocido por la calidad de nuestros servicios y el impacto
                  positivo en la vida de las familias y comunidades que
                  servimos.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="border-border bg-card relative flex-1 overflow-hidden rounded-2xl border p-8"
            >
              <div className="bg-mac-leaf absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-[0.08] blur-3xl" />
              <div className="relative">
                <div className="bg-accent text-primary mb-4 inline-flex rounded-xl p-3">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-display text-card-foreground mb-3 text-xl font-semibold">
                  Valores
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Compromiso, excelencia, empatía e innovación. Trabajamos con
                  dedicación para ofrecer un servicio personalizado que responda
                  a las necesidades únicas de cada persona y su familia.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
