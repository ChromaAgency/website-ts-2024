import { Metadata } from 'next'
import About from './About'
import Feature from './Feature'
import Hero from './Hero'
import Counter from './Counter'

export const metadata: Metadata = {
  title: 'Odoo ERP | Chroma Agency',
  description:
    'Implementamos y personalizamos Odoo para centralizar procesos, automatizar operaciones y escalar tu empresa con una estrategia digital clara.',
}

const Company = () => {
  return (
    <div className="text-gray-700">
      <Hero />
      <About />
      <Counter />
      <Feature />
      {/* <Team teamMembers={teamMembers} /> */}
      {/* <Client /> */}

      {/* <Footer /> */}
    </div>
  )
}

export default Company
