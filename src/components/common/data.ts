import { StaticImageData } from 'next/image'
import { PlanItem, PricingCard } from './types'
import { ReactNode } from 'react'
import Link from 'next/link'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

type Testimonials = {
  name: string
  position: string
  description: string
  image: StaticImageData
}

type AccordionData = {
  title: string
  description: string | ReactNode
}

type FooterLink = {
  [title: string]: {
    links: string[]
  }
}

const testimonials: Testimonials[] = [
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
  },
  {
    name: 'John Stark',
    position: 'Engineering Director',
    description:
      'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
    image: avatar1,
  },
  {
    name: 'Cersei Lannister',
    position: 'Senior Project Manager',
    description:
      'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
    image: avatar2,
  },
]

const FAQContent: AccordionData[] = [
  {
    title: '¿Por qué debería contratar a un Partner Oficial de Odoo en lugar de implementarlo por mi cuenta?',
    description:
      'Implementar Odoo de forma independiente es posible, pero conlleva riesgos técnicos y de procesos. Un Partner Oficial garantiza: Certificación Técnica: Conocimiento profundo del framework de Odoo. Metodología de Implementación: Evitamos el "scope creep" y garantizamos que el sistema sea escalable. Acceso a Soporte Enterprise: Solo los partners tienen línea directa con el soporte de Odoo SA para resolver bugs críticos de nivel de código.',
  },
  {
    title: ' ¿Cuál es la diferencia entre Odoo Community y Odoo Enterprise?',
    description:
      'La versión Enterprise incluye módulos avanzados (Contabilidad completa, Manufactura, Estudio, Firma electrónica), una interfaz móvil optimizada y actualizaciones de versión incluidas. Como partners, ayudamos a las empresas a migrar de Community a Enterprise para desbloquear el 100% del potencial de automatización.',
  },
  {
    title: '¿Qué pasa si las funciones nativas de Odoo no cubren mis necesidades de negocio?',
    description:
      ' Somos especialistas en desarrollo de software a medida. Odoo es un sistema modular; si un proceso es único en tu empresa, desarrollamos módulos personalizados (custom addons) que se integran perfectamente con el núcleo del sistema, manteniendo la integridad de tus datos y la facilidad de actualización futura. Aclaración: todo desarrollo extra, que requiera modificar código nativo de Odoo, se cobra aparte mediante paquetes de horas. ',
  },
  {
    title: '¿Es posible integrar Odoo con otras plataformas externas?',
    description: 'Sí. A través de la API de Odoo, realizamos integraciones complejas con plataformas de E-commerce, pasarelas de pago locales, transportistas y software de BI. Nuestro enfoque es eliminar las islas de información.',     
  },
  {
    title: '¿Cuánto cuesta implementar Odoo con un partner?',
    description:
      'El costo varía según tres factores: Licenciamiento: Pago directo a Odoo por usuario/mes. Implementación: Configuración, carga de datos y formación.Personalización: Horas de desarrollo para funciones a medida.',
  },
  {
    title: '¿Cuánto tiempo tarda una implementación estándar de Odoo?',
    description:
      'Un proyecto inicial suele tomar entre 8 a 12 semanas. Proyectos más complejos con desarrollos a medida pueden extenderse según los requerimientos. Utilizamos metodologías ágiles para entregar valor desde el primer mes.',
  },
]

const plans: PlanItem[] = [
  {
    id: 1,
    name: 'Starter',
    price: '49',
    duration: '/ month',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '99',
    duration: '/ month',
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial client',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
    isPopular: true,
    isRecommended: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '599',
    duration: '/ month',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial client',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
    isRecommended: false,
  },
]

const pricingCards: PricingCard = {
  Starter: {
    duration: 500,
    price: '49',
    features: [
      'Up to 600 minutes usage time',
      'Use for personal only',
      'Add up to 10 attendees',
      'Technical support via email',
    ],
  },
  Professional: {
    duration: 700,
    price: '99',
    features: [
      'Up to 6000 minutes usage time',
      'Use for personal or a commercial',
      'Add up to 100 attendees',
      'Up to 5 teams',
      'Technical support via email',
    ],
  },
  Enterprise: {
    duration: 900,
    price: '599',
    features: [
      'Unlimited usage time',
      'Use for personal or a commercial',
      'Add Unlimited attendees',
      '24x7 Technical support via phone',
      'Technical support via email',
    ],
  },
}

const footerLinks: FooterLink = {
  // platform: {
  //   links: ['Demo', 'Pricing', 'Integrations', 'Status'],
  // },
  // 'Knowledge Base': {
  //   links: ['Blog', 'Help Center', 'Sales Tools catalog', 'API'],
  // },
  // Company: {
  //   links: ['About us', 'Career', 'Contact Us'],
  // },
  // legal: {
  //   links: ['Usage Policy', 'Privacy Policy', 'Terms of Service', 'Trust'],
  // },
}

export { testimonials, plans, FAQContent, footerLinks, pricingCards }
