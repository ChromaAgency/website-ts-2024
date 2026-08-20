import { Metadata } from 'next'
import Hero from './Hero'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Terminos y condiciones | Chroma Agency',
  description:
    'Terminos del servicio de Chroma: implementacion Odoo como partner oficial, desarrollos a medida, SimpliRoute y Xtract. Como se contrata y politica de privacidad.',
}

const TerminosYCondiciones = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}

export default TerminosYCondiciones
