import { Metadata } from 'next'
import Benefits from './Benefits'
import CTA from './CTA'
import Culture from './Culture'
import Hero from './Hero'
import Vacancies from './Vacancies'
import Footer from '@/components/common/Footer'
import Features from './Features'

//data
import { benefits } from './data'

export const metadata: Metadata = {
  title: 'Desarrollos',
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

        <Footer />
      </div>
    </>
  )
}

export default career
