import { Metadata } from 'next'
import Hero from './Hero'
import ContactUs from './ContactUs'

export const metadata: Metadata = {
  title: 'Contacto | Chroma Agency',
  description:
    'Contacta al equipo de Chroma para implementar Odoo, desarrollar soluciones a medida y acelerar la digitalizacion de tu empresa.',
}

const Contact = () => {
  return (
    <>
      <Hero />

      <ContactUs />

    </>
  )
}

export default Contact
