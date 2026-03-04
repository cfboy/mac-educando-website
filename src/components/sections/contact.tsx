import { motion } from 'framer-motion'
import { Clock, Facebook, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const INPUT_BASE =
  'w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:outline-none transition-colors'
const INPUT_VALID =
  'border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--ring)]/20'
const INPUT_ERROR =
  'border-red-500 focus:border-red-500 focus:ring-red-500/20'

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
    const subject = encodeURIComponent(
      'Consulta desde web - MAC Educando'
    )
    const body = encodeURIComponent(
      `Nombre: ${formData.get('name')}\n\n${formData.get('message')}`
    )
    setSubmitted(true)
    window.location.href = `mailto:info@maceducando.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-[var(--accent)] px-4 py-1.5 font-display text-sm font-medium text-[var(--primary)]">
            Contacto
          </span>
          <h2 className="mt-4 font-bold tracking-tight">
            ¿Cómo podemos{' '}
            <span className="text-[var(--secondary)]">ayudarte</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            Estamos aquí para responder tus preguntas y ayudarte a encontrar los
            servicios que mejor se adapten a tus necesidades.
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
            {/* Location highlight card */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--accent)] p-6 text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-[var(--primary)]" />
              <p className="font-display text-lg font-semibold text-[var(--primary)]">
                Puerto Rico
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Servicios en toda la isla
              </p>
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
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8"
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-[var(--card-foreground)]">
              Envíanos un mensaje
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="mx-auto mb-4 inline-flex rounded-full bg-[var(--accent)] p-4 text-[var(--primary)]">
                  <Send className="h-8 w-8" />
                </div>
                <p className="font-display text-lg font-semibold text-[var(--card-foreground)]">
                  ¡Mensaje preparado!
                </p>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  Tu cliente de correo se abrirá con el mensaje listo para
                  enviar.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium text-[var(--primary)] hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
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
                    className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
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
                    className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
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
          <p className="mb-4 text-sm text-[var(--muted-foreground)]">
            Síguenos en redes sociales
          </p>
          <a
            href="https://www.facebook.com/MACAdviser/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-2.5 font-display text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
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
      className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--primary)]"
    >
      <div className="absolute bottom-0 left-0 top-0 w-1 bg-[var(--primary)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="inline-flex rounded-lg bg-[var(--accent)] p-3 text-[var(--primary)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-display text-sm font-medium text-[var(--muted-foreground)]">
          {title}
        </p>
        <p className="mt-0.5 font-medium text-[var(--card-foreground)]">
          {content}
        </p>
        {subtitle && (
          <p className="mt-1 text-xs text-[var(--muted-foreground)]">
            {subtitle}
          </p>
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
