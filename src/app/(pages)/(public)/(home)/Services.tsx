import { Service } from './types'
import Link from 'next/link'

const Services = ({ services }: { services: Service[] }) => {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container">
        <div className="text-center">
          <p className="tech-kicker mb-4">Servicios</p>
          <h2 className="text-3xl lg:text-4xl tech-heading">Soluciones para operar mejor</h2>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-6">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="p-7 bg-white rounded-xl border border-slate-200/80 hover:shadow-panel hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <div
                  className={`w-12 h-12 rounded-md ${service.variant} flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </div>
                <h4 className="text-brand text-xl font-medium">{service.title}</h4>
                <div className="flex-grow">
                  <p className="text-slate-600 my-8 leading-relaxed">{service.description}</p>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md border border-primary bg-primary text-white hover:bg-brand transition-colors duration-300"
                >
                  {service.buttonText}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services