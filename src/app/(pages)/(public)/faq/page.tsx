import HelpLinks from './HelpLinks'
import Hero from './Hero'
import SupportCenter from './SupportCenter'
import Footer from '@/components/common/Footer'
import ContactForm from './ContactForm'

//data
import { helpLinks } from './data'
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
        <section className="py-2 relative">
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
        <Footer />
      </div>
    </>
  )
}

export default Help
