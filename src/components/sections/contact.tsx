import { motion } from 'framer-motion'
import { Clock, Facebook, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const INPUT_BASE =
  'w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:outline-none transition-colors'
const INPUT_VALID = 'border-border focus:border-primary focus:ring-ring/20'
const INPUT_ERROR = 'border-red-500 focus:border-red-500 focus:ring-red-500/20'

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(form: HTMLFormElement) {
    const data = new FormData(form)
    const newErrors: Record<string, string> = {}

    if (!data.get('name')?.toString().trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    const email = data.get('email')?.toString().trim() || ''
    if (!email) {
      newErrors.email = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un correo válido'
    }

    if (!data.get('message')?.toString().trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    return newErrors
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const newErrors = validate(form)
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    const formData = new FormData(form)
    const subject = encodeURIComponent('Consulta desde web - MAC Educando')
    const body = encodeURIComponent(
      `Nombre: ${formData.get('name')}\n\n${formData.get('message')}`
    )
    setSubmitted(true)
    window.location.href = `mailto:info@maceducando.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="scroll-mt-20 py-20 sm:py-28">
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
            Contacto
          </span>
          <h2 className="mt-2 font-semibold tracking-tight">
            ¿Cómo podemos <span className="text-secondary">ayudarte</span>?
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-pretty">
            Responderemos tus preguntas y te ayudaremos a encontrar el servicio
            que necesitas.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Embedded map */}
            <div className="border-border overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.3878206701515!2d-66.15711572563237!3d18.37519238269036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036b891d715405%3A0xfdb2290afeb9680e!2sM%20ADViser%20and%20consultant!5e0!3m2!1sen!2spr!4v1772585274883!5m2!1sen!2spr"
                className="h-52 w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de M Adviser and Consultant"
              />
            </div>

            <ContactItem
              icon={Phone}
              title="Teléfono"
              content="(787) 998-0442"
              href="tel:+17879980442"
            />
            <ContactItem
              icon={Mail}
              title="Correo Electrónico"
              content="info@maceducando.com"
              href="mailto:info@maceducando.com"
            />
            <ContactItem
              icon={Clock}
              title="Horario"
              content="Lunes a Sábado: 7:30 AM - 4:00 PM"
              subtitle="Incluye días feriados"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-border bg-card rounded-xl border p-8"
          >
            <h3 className="font-display text-card-foreground mb-6 text-xl font-semibold">
              Envíanos un mensaje
            </h3>

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
                  ¡Mensaje preparado!
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Tu app de correo se abrirá con el mensaje listo para enviar.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-primary mt-4 text-sm font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-card-foreground mb-1.5 block text-sm font-medium"
                  >
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={
                      errors.name ? 'contact-name-error' : undefined
                    }
                    className={cn(
                      INPUT_BASE,
                      errors.name ? INPUT_ERROR : INPUT_VALID
                    )}
                    placeholder="Tu nombre"
                    onChange={() =>
                      errors.name &&
                      setErrors(prev => {
                        const { name: _, ...rest } = prev
                        return rest
                      })
                    }
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-1 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-card-foreground mb-1.5 block text-sm font-medium"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={
                      errors.email ? 'contact-email-error' : undefined
                    }
                    className={cn(
                      INPUT_BASE,
                      errors.email ? INPUT_ERROR : INPUT_VALID
                    )}
                    placeholder="tu@correo.com"
                    onChange={() =>
                      errors.email &&
                      setErrors(prev => {
                        const { email: _, ...rest } = prev
                        return rest
                      })
                    }
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-1 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-card-foreground mb-1.5 block text-sm font-medium"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={
                      errors.message ? 'contact-message-error' : undefined
                    }
                    className={cn(
                      INPUT_BASE,
                      'resize-none',
                      errors.message ? INPUT_ERROR : INPUT_VALID
                    )}
                    placeholder="¿En qué podemos ayudarte?"
                    onChange={() =>
                      errors.message &&
                      setErrors(prev => {
                        const { message: _, ...rest } = prev
                        return rest
                      })
                    }
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4 text-sm">
            Síguenos en redes sociales
          </p>
          <a
            href="https://www.facebook.com/MACAdviser/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display border-border text-foreground hover:border-primary hover:text-primary inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            <Facebook className="h-5 w-5" />
            Facebook
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  title,
  content,
  href,
  subtitle,
}: {
  icon: typeof Phone
  title: string
  content: string
  href?: string
  subtitle?: string
}) {
  const inner = (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group border-border bg-card hover:border-primary relative flex items-start gap-4 overflow-hidden rounded-xl border p-5 transition-colors"
    >
      <div className="bg-primary absolute top-0 bottom-0 left-0 w-1 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="bg-accent text-primary inline-flex rounded-lg p-3">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-display text-muted-foreground text-sm font-medium">
          {title}
        </p>
        <p className="text-card-foreground mt-0.5 font-medium">{content}</p>
        {subtitle && (
          <p className="text-muted-foreground mt-1 text-xs">{subtitle}</p>
        )}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    )
  }
  return inner
}
