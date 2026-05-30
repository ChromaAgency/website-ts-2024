'use client'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images

const Hero = () => {
  const scrollToComponents = (componentId: string) => {
    const Section = document.getElementById(componentId)
    if (Section) {
      const headerOffset = 70
      const elementPosition = Section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative bg-gradient-to-t from-accent/10 to-white">
      <section className="relative py-16 sm:py-20 md:py-40">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-start">
                <p className="tech-kicker mb-4">Ingenieria de soluciones</p>
                <h1 className="mb-5 text-3xl/tight font-semibold uppercase text-brand sm:text-4xl/tight lg:text-5xl/tight">
                  Desarrollos hechos a&nbsp;
                  <span className="relative z-0 after:absolute after:bottom-0 after:end-0 after:h-6 after:w-full after:-z-10 after:bg-accent">
                    medida.
                  </span>
                </h1>
                <p className="leading-relaxed text-slate-700 lg:w-3/4">
                  Ofrecemos desarrollos tecnologicos adaptables y funcionales,
                  creados por un equipo de profesionales en constante formacion.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToComponents('features')}
                    className="mr-5 flex items-center gap-3 rounded-md bg-accent px-8 py-3 text-md font-semibold text-slate-700 shadow shadow-accent/30 hover:shadow-lg hover:shadow-accent/40 focus:outline focus:outline-accent/50"
                  >
                    Modulos Odoo
                    <FaArrowRight/>
                  </button>
                  <button
                    onClick={() => scrollToComponents('benefits')}
                    className="flex items-center gap-3 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white shadow shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 focus:outline focus:outline-primary/50"
                  >
                    Aplicaciones Web
                    <FaArrowRight/>
                  </button>

                </div>
                <div className="mt-10 flex items-center justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToComponents('benefits')}
                    className="flex items-center gap-3 rounded-md bg-brand px-8 py-3 text-sm font-semibold text-white shadow shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 focus:outline focus:outline-primary/50"
                  >
                    Chatbots con IA
                    <FaArrowRight/>
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2" data-aos="zoom-in">
              <div className="grid grid-cols-2 items-center gap-6">
                <div>
                  <Image
                    width={250}
                    height={170}
                    src="/assets/images/tableImage.jpeg"
                    alt="photo-12"
                    className="border-[6px] border-white bg-white shadow-md"
                  />
                </div>
                <div>
                  <div className="grid grid-rows-2 items-center gap-6">
                    <div>
                      <Image
                        width={250}
                        height={250}
                        src="/assets/images/lobbyImage.jpeg"
                        alt="photo-14"
                        className="border-[6px] border-white bg-white shadow-md"
                      />
                    </div>
                    <div>
                      <Image
                        width={250}
                        height={250}
                        src="/assets/images/conferenceRoomImage.jpeg" 
                        alt="photo-15"
                        className="border-[6px] border-white bg-white shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute -bottom-1 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="shape-b"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g id="curve" fill="#fff">
              <path
                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                id="Path"
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Hero
