import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
            Contacto
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Cómo podemos{' '}
            <span className="text-[var(--secondary)]">ayudarte</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            Estamos aquí para responder tus preguntas y ayudarte a encontrar los
            servicios que mejor se adapten a tus necesidades.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
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
              icon={MapPin}
              title="Ubicación"
              content="Puerto Rico"
            />
            <ContactItem
              icon={Clock}
              title="Horario"
              content="Lunes a Viernes: 8:00 AM - 5:00 PM"
            />
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8">
            <h3 className="mb-6 text-xl font-semibold text-[var(--card-foreground)]">
              Envíanos un mensaje
            </h3>
            <form
              className="space-y-4"
              onSubmit={e => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const subject = encodeURIComponent(
                  'Consulta desde web - MAC Educando'
                )
                const body = encodeURIComponent(
                  `Nombre: ${formData.get('name')}\n\n${formData.get('message')}`
                )
                window.location.href = `mailto:info@maceducando.com?subject=${subject}&body=${body}`
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/20 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                >
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/20 focus:outline-none"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[var(--card-foreground)]"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/20 focus:outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-[var(--muted-foreground)]">
            Síguenos en redes sociales
          </p>
          <a
            href="https://www.facebook.com/MACAdviser/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Facebook className="h-5 w-5" />
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: typeof Phone
  title: string
  content: string
  href?: string
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--primary)]">
      <div className="inline-flex rounded-lg bg-[var(--accent)] p-3 text-[var(--primary)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--muted-foreground)]">
          {title}
        </p>
        <p className="mt-0.5 font-medium text-[var(--card-foreground)]">
          {content}
        </p>
      </div>
    </div>
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
