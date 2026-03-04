import { useEffect, useState } from 'react'

const SECTION_IDS = ['inicio', 'servicios', 'nosotros', 'contacto', 'empleo']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
