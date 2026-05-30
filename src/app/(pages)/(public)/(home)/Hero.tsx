'use client'
import Link from 'next/link'  
import { FaArrowDownLong } from 'react-icons/fa6'  
import Image from 'next/image'  
import BackgroundImage from '@/assets/images/hero/Chroma_LogoWhiteBackground.png'  

const Hero = () => {  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 70; // Adjust this value to control the padding from the top
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (  
    <section className="py-40 lg:py-44 relative bg-gradient-to-b from-accent/15 via-white to-surface">  
      <div className=" hero-with-shapes">  
        <div className="shape1" />  
        <div className="shape2" />  
        <div className="shape3" />  
        <div className="container">  
          <div className="flex justify-between items-center gap-10">  
            <div className="lg:w-1/2">  
              <p className="tech-kicker mb-4">Consultoria y Desarrollo Odoo</p>
              <h1 className="md:text-7xl text-4xl tech-heading font-medium my-5">  
                CHROMA&nbsp;  
                <span className="relative after:bg-accent md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">  
                  AGENCY  
                </span>  
              </h1>  
              <h2 className="lg:w-4/5 text-3xl lg:text-4xl font-medium mt-6 mb-8 text-primary">  
                Digitalizacion de procesos con foco en crecimiento.  
              </h2>  
              <p className="tech-subtitle max-w-xl mb-10">
                Implementamos y personalizamos Odoo para que tu empresa opere con
                mas eficiencia, menos friccion y datos conectados.
              </p>
              
              <div className="flex flex-wrap items-center gap-5">              
                <button  
                  onClick={scrollToServices}
                  className="tech-btn-primary"  
                >  
                  <FaArrowDownLong /> Servicios  
                </button>  
              
                <Link  
                  href="/contact-us"  
                  className="tech-btn-secondary"  
                >  
                  Contáctanos  
                </Link>  
              </div>  
            </div>  
            <div className='hidden lg:block w-1/2 tech-surface p-6'>  

            <Image  
              className="max-w-full h-auto object-contain"  
              src={BackgroundImage}  
              width={800}  
              height={800}  
              alt="Chroma Agency Logo"  
            />  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  )  
}  

export default Hero