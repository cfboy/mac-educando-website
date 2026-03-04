import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const INPUT_BASE =
  'w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:outline-none transition-colors'
const INPUT_VALID =
  'border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--ring)]/20'

const TOTAL_STEPS = 2

export function Careers() {
  const [step, setStep] = useState(1)

  return (
    <section id="empleo" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-[var(--accent)] px-4 py-1.5 font-display text-sm font-medium text-[var(--primary)]">
            Únete a Nuestro Equipo
          </span>
          <h2 className="mt-4 font-bold tracking-tight">
            Solicitud de{' '}
            <span className="text-[var(--secondary)]">Empleo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            ¿Te apasiona la educación y el desarrollo integral? Completa el
            formulario y forma parte de nuestro equipo de profesionales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-xl border border-[var(--border)] bg-[var(--card)] p-8"
        >
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex rounded-lg bg-[var(--accent)] p-3 text-[var(--primary)]">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[var(--card-foreground)]">
              Información del Solicitante
            </h3>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-sm font-medium text-[var(--card-foreground)]">
                Paso {step} de {TOTAL_STEPS}
              </span>
              <span className="text-xs text-[var(--muted-foreground)]">
                {step === 1
                  ? 'Información Personal'
                  : 'Información Profesional'}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[var(--accent)]">
              <motion.div
                className="h-full rounded-full bg-[var(--primary)]"
                initial={false}
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </div>
          </div>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.fieldset
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <legend className="mb-2 font-display text-sm font-semibold text-[var(--card-foreground)]">
                    Información Personal
                  </legend>
                  <div>
                    <label
                      htmlFor="fullname"
                      className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                    >
                      Nombre Completo
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      className={cn(INPUT_BASE, INPUT_VALID)}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="career-email"
                        className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        id="career-email"
                        name="email"
                        type="email"
                        required
                        className={cn(INPUT_BASE, INPUT_VALID)}
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                      >
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className={cn(INPUT_BASE, INPUT_VALID)}
                        placeholder="(787) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full"
                    >
                      Siguiente
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.fieldset>
              )}

              {step === 2 && (
                <motion.fieldset
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <legend className="mb-2 font-display text-sm font-semibold text-[var(--card-foreground)]">
                    Información Profesional
                  </legend>
                  <div>
                    <label
                      htmlFor="specialty"
                      className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                    >
                      Especialidad
                    </label>
                    <input
                      id="specialty"
                      name="specialty"
                      type="text"
                      required
                      className={cn(INPUT_BASE, INPUT_VALID)}
                      placeholder="Ej: Psicología, Terapia del Habla, Terapia Ocupacional"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="degree"
                      className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                    >
                      Grado Académico
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      required
                      className={cn(INPUT_BASE, INPUT_VALID)}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona tu grado
                      </option>
                      <option value="bachillerato">Bachillerato</option>
                      <option value="maestria">Maestría</option>
                      <option value="doctorado">Doctorado</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="career-notes"
                      className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                    >
                      Notas Adicionales{' '}
                      <span className="font-normal text-[var(--muted-foreground)]">
                        (opcional)
                      </span>
                    </label>
                    <textarea
                      id="career-notes"
                      name="notes"
                      rows={3}
                      className={cn(INPUT_BASE, INPUT_VALID, 'resize-none')}
                      placeholder="Cuéntanos sobre tu experiencia o cualquier información adicional"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </Button>
                    <Button type="submit" className="flex-1">
                      Enviar Solicitud
                    </Button>
                  </div>
                </motion.fieldset>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
