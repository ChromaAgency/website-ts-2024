import { Metadata } from 'next'
import Benefits from './Benefits'
import Hero from './Hero'
import Features from './Features'

//data
import { benefits } from './data'

export const metadata: Metadata = {
  title: 'Desarrollos',
  description:
    'Desarrollamos conectores Odoo, aplicaciones web y soluciones con IA para optimizar procesos y acelerar el crecimiento de tu negocio.',
}

const career = () => {
  return (
    <>
      <div className="text-gray-800">
        <Hero />
        <div id="features">
          <Features  />
        </div>
        <div id="benefits">
          <Benefits benefits={benefits} />
        </div>
      </div>
    </>
  )
}

export default career
