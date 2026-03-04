import { useForm } from '@tanstack/react-form'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, ChevronLeft, ChevronRight, Send } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { WEB3FORMS_KEY } from '@/lib/constants'
import { cn } from '@/lib/utils'

const Step1Schema = z.object({
  fullname: z.string().min(1, 'El nombre es requerido'),
  email: z.email('Ingresa un correo válido'),
  phone: z.string().min(1, 'El teléfono es requerido'),
})

const CareersSchema = Step1Schema.extend({
  specialty: z.string().min(1, 'La especialidad es requerida'),
  degree: z.string().min(1, 'Selecciona un grado académico'),
  notes: z.string().optional(),
})

type CareersFormData = z.infer<typeof CareersSchema>

const INPUT_BASE =
  'w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:outline-none transition-colors'
const INPUT_VALID = 'border-border focus:border-primary focus:ring-ring/20'
const INPUT_ERROR = 'border-red-500 focus:border-red-500 focus:ring-red-500/20'

const TOTAL_STEPS = 2

function FieldError({ id, error }: { id: string; error: string | undefined }) {
  if (!error) return null
  return (
    <p id={id} className="mt-1 text-xs text-red-500" role="alert">
      {error}
    </p>
  )
}

export function Careers() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      specialty: '',
      degree: '',
      notes: '',
    } as CareersFormData,
    validators: {
      onSubmit: CareersSchema,
    },
    onSubmit: async ({ value }) => {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Solicitud de Empleo - MAC Educando',
          from_name: value.fullname,
          email: value.email,
          phone: value.phone,
          specialty: value.specialty,
          degree: value.degree,
          notes: value.notes,
        }),
      })
      if (res.ok) setSubmitted(true)
    },
  })

  async function handleNext() {
    await form.validateField('fullname', 'change')
    await form.validateField('email', 'change')
    await form.validateField('phone', 'change')

    const result = Step1Schema.safeParse({
      fullname: form.getFieldValue('fullname'),
      email: form.getFieldValue('email'),
      phone: form.getFieldValue('phone'),
    })

    if (result.success) setStep(2)
  }

  return (
    <section id="empleo" className="scroll-mt-20 py-20 sm:py-28">
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
            Únete a Nuestro Equipo
          </span>
          <h2 className="mt-2 font-semibold tracking-tight">
            Solicitud de <span className="text-secondary">Empleo</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-pretty">
            ¿Te apasiona la educación? Completa el formulario y forma parte de
            nuestro equipo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-border bg-card mx-auto max-w-2xl rounded-xl border p-8"
        >
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-accent text-primary inline-flex rounded-lg p-3">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="font-display text-card-foreground text-xl font-semibold">
              Información del Solicitante
            </h3>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="bg-accent text-primary mx-auto mb-4 inline-flex rounded-xl p-3">
                <Send className="h-6 w-6" />
              </div>
              <p className="font-display text-card-foreground text-lg font-semibold">
                ¡Solicitud enviada!
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Recibimos tu solicitud. Nos pondremos en contacto contigo
                pronto.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setStep(1)
                  form.reset()
                }}
                className="text-primary mt-4 text-sm font-medium hover:underline"
              >
                Enviar otra solicitud
              </button>
            </motion.div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-card-foreground text-sm font-medium">
                    Paso {step} de {TOTAL_STEPS}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {step === 1
                      ? 'Información Personal'
                      : 'Información Profesional'}
                  </span>
                </div>
                <div className="bg-accent h-2 overflow-hidden rounded-full">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={false}
                    animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </div>
              </div>

              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault()
                  form.handleSubmit()
                }}
                noValidate
              >
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
                      <legend className="font-display text-card-foreground mb-2 text-sm font-semibold">
                        Información Personal
                      </legend>

                      <form.Field
                        name="fullname"
                        validators={{
                          onChange: Step1Schema.shape.fullname,
                        }}
                      >
                        {field => {
                          const error = field.state.meta.errors[0]?.message
                          return (
                            <div>
                              <label
                                htmlFor="fullname"
                                className="text-card-foreground mb-1.5 block text-sm font-medium"
                              >
                                Nombre Completo
                              </label>
                              <input
                                id="fullname"
                                type="text"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={e =>
                                  field.handleChange(e.target.value)
                                }
                                aria-invalid={error ? 'true' : undefined}
                                aria-describedby={
                                  error ? 'fullname-error' : undefined
                                }
                                className={cn(
                                  INPUT_BASE,
                                  error ? INPUT_ERROR : INPUT_VALID
                                )}
                                placeholder="Tu nombre completo"
                              />
                              <FieldError id="fullname-error" error={error} />
                            </div>
                          )
                        }}
                      </form.Field>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <form.Field
                          name="email"
                          validators={{
                            onChange: Step1Schema.shape.email,
                          }}
                        >
                          {field => {
                            const error = field.state.meta.errors[0]?.message
                            return (
                              <div>
                                <label
                                  htmlFor="career-email"
                                  className="text-card-foreground mb-1.5 block text-sm font-medium"
                                >
                                  Correo Electrónico
                                </label>
                                <input
                                  id="career-email"
                                  type="email"
                                  value={field.state.value}
                                  onBlur={field.handleBlur}
                                  onChange={e =>
                                    field.handleChange(e.target.value)
                                  }
                                  aria-invalid={error ? 'true' : undefined}
                                  aria-describedby={
                                    error ? 'career-email-error' : undefined
                                  }
                                  className={cn(
                                    INPUT_BASE,
                                    error ? INPUT_ERROR : INPUT_VALID
                                  )}
                                  placeholder="tu@correo.com"
                                />
                                <FieldError
                                  id="career-email-error"
                                  error={error}
                                />
                              </div>
                            )
                          }}
                        </form.Field>

                        <form.Field
                          name="phone"
                          validators={{
                            onChange: Step1Schema.shape.phone,
                          }}
                        >
                          {field => {
                            const error = field.state.meta.errors[0]?.message
                            return (
                              <div>
                                <label
                                  htmlFor="phone"
                                  className="text-card-foreground mb-1.5 block text-sm font-medium"
                                >
                                  Teléfono
                                </label>
                                <input
                                  id="phone"
                                  type="tel"
                                  value={field.state.value}
                                  onBlur={field.handleBlur}
                                  onChange={e =>
                                    field.handleChange(e.target.value)
                                  }
                                  aria-invalid={error ? 'true' : undefined}
                                  aria-describedby={
                                    error ? 'phone-error' : undefined
                                  }
                                  className={cn(
                                    INPUT_BASE,
                                    error ? INPUT_ERROR : INPUT_VALID
                                  )}
                                  placeholder="(787) 000-0000"
                                />
                                <FieldError id="phone-error" error={error} />
                              </div>
                            )
                          }}
                        </form.Field>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="button"
                          onClick={handleNext}
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
                      <legend className="font-display text-card-foreground mb-2 text-sm font-semibold">
                        Información Profesional
                      </legend>

                      <form.Field name="specialty">
                        {field => {
                          const error = field.state.meta.errors[0]?.message
                          return (
                            <div>
                              <label
                                htmlFor="specialty"
                                className="text-card-foreground mb-1.5 block text-sm font-medium"
                              >
                                Especialidad
                              </label>
                              <input
                                id="specialty"
                                type="text"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={e =>
                                  field.handleChange(e.target.value)
                                }
                                aria-invalid={error ? 'true' : undefined}
                                aria-describedby={
                                  error ? 'specialty-error' : undefined
                                }
                                className={cn(
                                  INPUT_BASE,
                                  error ? INPUT_ERROR : INPUT_VALID
                                )}
                                placeholder="Ej: Psicología, Terapia del Habla"
                              />
                              <FieldError id="specialty-error" error={error} />
                            </div>
                          )
                        }}
                      </form.Field>

                      <form.Field name="degree">
                        {field => {
                          const error = field.state.meta.errors[0]?.message
                          return (
                            <div>
                              <label
                                htmlFor="degree"
                                className="text-card-foreground mb-1.5 block text-sm font-medium"
                              >
                                Grado Académico
                              </label>
                              <select
                                id="degree"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={e =>
                                  field.handleChange(e.target.value)
                                }
                                aria-invalid={error ? 'true' : undefined}
                                aria-describedby={
                                  error ? 'degree-error' : undefined
                                }
                                className={cn(
                                  INPUT_BASE,
                                  error ? INPUT_ERROR : INPUT_VALID
                                )}
                              >
                                <option value="" disabled>
                                  Selecciona tu grado
                                </option>
                                <option value="bachillerato">
                                  Bachillerato
                                </option>
                                <option value="maestria">Maestría</option>
                                <option value="doctorado">Doctorado</option>
                                <option value="otro">Otro</option>
                              </select>
                              <FieldError id="degree-error" error={error} />
                            </div>
                          )
                        }}
                      </form.Field>

                      <form.Field name="notes">
                        {field => (
                          <div>
                            <label
                              htmlFor="career-notes"
                              className="text-card-foreground mb-1.5 block text-sm font-medium"
                            >
                              Notas Adicionales{' '}
                              <span className="text-muted-foreground font-normal">
                                (opcional)
                              </span>
                            </label>
                            <textarea
                              id="career-notes"
                              rows={3}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={e => field.handleChange(e.target.value)}
                              className={cn(
                                INPUT_BASE,
                                INPUT_VALID,
                                'resize-none'
                              )}
                              placeholder="Cuéntanos sobre tu experiencia"
                            />
                          </div>
                        )}
                      </form.Field>

                      <div className="flex gap-3 pt-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Anterior
                        </Button>
                        <form.Subscribe selector={state => state.isSubmitting}>
                          {isSubmitting => (
                            <Button
                              type="submit"
                              className="flex-1"
                              disabled={isSubmitting}
                            >
                              Enviar Solicitud
                            </Button>
                          )}
                        </form.Subscribe>
                      </div>
                    </motion.fieldset>
                  )}
                </AnimatePresence>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
