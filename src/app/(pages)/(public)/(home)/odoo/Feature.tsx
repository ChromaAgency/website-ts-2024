import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
import img1 from '@/assets/images/photos/14.jpg'

const Feature = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl mb-7 text-[#310860]">Hagamos que suceda.</h1>
            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
              Implementar Odoo no se trata solo de instalar un software, sino de integrarlo de manera estratégica en los procesos de tu negocio. Nuestra experiencia y enfoque garantizan que Odoo funcione como una solución diseñada a medida para tus necesidades.
            </p>
            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-7">
              Entendemos que cada empresa es única. Por eso, adaptamos y personalizamos Odoo según tus necesidades actuales, manteniendo siempre la posibilidad de escalar y agregar funcionalidades a medida que crezcas.
            </p>
            <div className="flex items-center">
              <a
                href="/contact-us"
                className="text-[#8a50bc] inline-flex gap-2 items-center underline"
              >
                Contactanos <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image width={516} height={516} src={img1.src} alt="photo-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
