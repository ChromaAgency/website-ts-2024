import Hero from './Hero'
import SupportCenter from './SupportCenter'

import { Metadata } from 'next'
import FAQs from './FAQs'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
}

const Help = () => {
  return (
    <>
      <div>
        <Hero />
        <section className="pt-2 pb-20 lg:pb-24 relative">
          <div className="container">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
              <div className="lg:col-span-2 cols-span-1">
                {/* <HelpLinks helpLinks={helpLinks} /> */}
                <FAQs />
              </div>
              <div className="mt-10">
                <SupportCenter />
              </div>
            </div>
            
        
          </div>
        </section>
        {/* <ContactForm /> */}
      </div>
    </>
  )
}

export default Help
