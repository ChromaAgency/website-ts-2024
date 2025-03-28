import { Service } from './types'

const Services = ({ services }: { services: Service[] }) => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#310860]">SERVICIOS</h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <div
                  className={`w-12 h-12 rounded-md ${service.variant} flex items-center justify-center`}
                >
                  {service.icon}
                </div>
                <h4 className="text-[#310860] font-medium my-5">{service.title}</h4>
                <p className="text-slate-900">{service.description}</p>
                <a 
                  href="/contact-us"
                  className="inline-block mt-4 px-6 py-2 bg-[#310860] text-white rounded-md hover:bg-[#4a1b8c] transition-colors duration-300"
                >
                  Saber más
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services