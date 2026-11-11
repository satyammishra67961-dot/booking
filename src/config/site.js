export const site = {
  brand: 'webb_makerr',
  tagline: 'Build Your Digital Presence.',
  description:
    'Modern Websites. Stunning 3D Experiences. Digital Growth.',
  support:
    'I create professional business websites, premium landing pages and interactive 3D websites that help businesses build a powerful online presence.',
  phoneDisplay: '+91 8709392077',
  phoneDigits: '918709392077',
  instagramHandle: '@webb_makerr',
  instagramUrl: 'https://www.instagram.com/webb_makerr/',
  demoUrl: 'https://satyammishra67961-dot.github.io/demo-/',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'My Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 'business-website',
    number: '01',
    title: 'Business Website',
    description: 'Professional websites for shops, businesses and brands.',
    icon: 'globe',
    accent: 'from-violet-500 to-fuchsia-400',
  },
  {
    id: 'landing-page',
    number: '02',
    title: 'Landing Page',
    description:
      'Attractive landing pages designed to generate enquiries and leads.',
    icon: 'layout',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    id: '3d-website',
    number: '03',
    title: '3D Website',
    description:
      'Premium interactive websites with stunning 3D elements and animations.',
    icon: 'orbit',
    accent: 'from-purple-500 to-blue-400',
  },
  {
    id: 'portfolio-website',
    number: '04',
    title: 'Portfolio Website',
    description:
      'Modern portfolio websites to showcase your work and personal brand.',
    icon: 'user',
    accent: 'from-fuchsia-500 to-pink-400',
  },
  {
    id: 'custom-website',
    number: '05',
    title: 'Custom Website Design',
    description:
      'Custom-designed websites based on individual business requirements.',
    icon: 'wand',
    accent: 'from-indigo-500 to-sky-400',
  },
]

export const reasons = [
  {
    title: 'Modern & Premium Design',
    description: 'Clean, contemporary layouts with a polished visual finish.',
    icon: 'gem',
  },
  {
    title: 'Mobile-Friendly Websites',
    description: 'Thoughtful responsive design that works beautifully on every screen.',
    icon: 'smartphone',
  },
  {
    title: 'Creative 3D Experiences',
    description: 'Interactive 3D elements that make your website memorable.',
    icon: 'boxes',
  },
  {
    title: 'Direct WhatsApp Communication',
    description: 'Speak directly with me from first idea to final delivery.',
    icon: 'message',
  },
  {
    title: 'Custom Website Solutions',
    description: 'Every website is shaped around your specific business needs.',
    icon: 'pen',
  },
]

export const serviceOptions = [
  'Business Website',
  'Landing Page',
  '3D Website',
  'Portfolio Website',
  'Custom Website',
]

export const defaultBookingMessage = `Hello webb_makerr!

I want to book a website development service.

Please contact me regarding my project.`

export function whatsappUrl(message = defaultBookingMessage) {
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(message)}`
}

export function buildBookingMessage(fields) {
  const budget = fields.budget?.trim() || 'Not specified'
  const contactTime = fields.contactTime?.trim() || 'Not specified'

  return `Hello webb_makerr!

I want to book a website development service.

Name: ${fields.name.trim()}
Business Name: ${fields.business.trim()}
WhatsApp Number: ${fields.phone.trim()}
Website Service: ${fields.service}
Project Budget: ${budget}
Project Requirements: ${fields.requirements.trim()}
Preferred Contact Time: ${contactTime}

Please contact me regarding my project.`
}
