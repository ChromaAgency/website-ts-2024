import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
const Feature = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl mb-7 text-[#310860]">Hagamos que suceda.</h1>
            <p className="text-sm/relaxed tracking-wider text-slate-900 mb-5">
              Implementar Odoo no se trata solo de instalar un software, sino de integrarlo de manera estratégica en los procesos de tu negocio.
              <br/><br/>
              Nuestra experiencia y enfoque garantizan que Odoo funcione como una solución diseñada a medida para tus necesidades.
            </p>
            <p className="text-sm/relaxed tracking-wider text-slate-900 mb-7">
              Entendemos que cada empresa es única.
              <br/><br/>
              Por eso, adaptamos y personalizamos Odoo según tus necesidades actuales, manteniendo siempre la posibilidad de escalar y agregar funcionalidades a medida que crezcas.
            </p>
            <div className="flex items-center">
              <a
                href="/contact-us"
                className="bg-[#8a50bc] text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/20 cursor-pointer uppercase px-16 py-3"
              >
                Contactanos 
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image width={516} height={200} src="/assets/images/floorPic.jpeg" alt="photo-3"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
