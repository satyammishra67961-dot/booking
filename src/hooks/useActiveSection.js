import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        rootMargin: '-24% 0px -52% 0px',
        threshold: [0, 0.08, 0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
