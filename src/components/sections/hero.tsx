import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Phone } from 'lucide-react'
import { useRef } from 'react'

import fullLogoLight from '@/assets/images/logos/full-logo-light.png'
import fullLogoDark from '@/assets/images/logos/full-logo.png'
import { ButtonLink } from '@/components/ui/button'

interface HeroProps {
  theme: 'light' | 'dark'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero({ theme }: HeroProps) {
  const logoSrc = theme === 'light' ? fullLogoLight : fullLogoDark
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Gradient mesh background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(45,106,46,0.3), transparent),
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(232,117,26,0.15), transparent),
              radial-gradient(ellipse 50% 60% at 60% 80%, rgba(124,179,66,0.2), transparent)
            `,
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--color-secondary) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-primary absolute top-1/4 left-[10%] h-16 w-16 rounded-full opacity-[0.06] blur-xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="bg-secondary absolute right-[12%] bottom-1/3 h-24 w-24 rotate-12 rounded-2xl opacity-[0.05] blur-xl"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="bg-mac-leaf absolute bottom-1/4 left-[20%] h-12 w-12 rounded-lg opacity-[0.06] blur-lg"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6"
      >
        <motion.div variants={itemVariants} className="mx-auto">
          <img
            src={logoSrc}
            alt="MAC Educando Logo"
            className="mx-auto h-28 w-auto sm:h-36"
            decoding="async"
            width="256"
            height="256"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="font-display text-muted-foreground mt-6 mb-2 text-xs font-semibold tracking-widest uppercase"
        >
          M Adviser and Consultant Inc.
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display mb-6 tracking-tight"
        >
          <span className="text-foreground">Impulsamos el </span>
          <span className="text-primary">desarrollo integral</span>
          <br />
          <span className="text-foreground">de cada </span>
          <span className="text-secondary">estudiante</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground mx-auto mb-10 max-w-xl text-base leading-relaxed sm:text-lg"
        >
          Evaluaciones, terapias y apoyo educativo especializado en Puerto Rico
          &mdash; en oficina, escuelas o de forma virtual.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonLink href="#servicios" size="lg">
            Conoce Nuestros Servicios
          </ButtonLink>
          <ButtonLink href="#contacto" variant="outline" size="lg">
            <Phone className="h-4 w-4" />
            Contáctanos
          </ButtonLink>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href="#servicios"
          className="text-muted-foreground hover:text-primary mt-16 inline-block animate-bounce transition-colors"
          aria-label="Ir a servicios"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </section>
  )
}
