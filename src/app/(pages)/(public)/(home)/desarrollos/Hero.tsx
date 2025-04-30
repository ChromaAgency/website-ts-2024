'use client'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images

const Hero = () => {
  const scrollToComponents = (componentId: string) => {
    const Section = document.getElementById(componentId);
    if (Section) {
      const headerOffset = 70; 
      const elementPosition = Section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-t bg-[#2ee0ca]/10 relative">
      <section className="relative py-16 sm:py-20 md:py-40">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-start">
                <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5 text-[#310860] uppercase">
                  Desarrollos hechos a&nbsp;
                  <span className="relative z-0 after:bg-[#2ee0ca] after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                    medida.
                  </span>
                </h1>
                <p className="text-gray-700 leading-relaxed lg:w-3/4">
                Ofrecemos desarrollos tecnológicos adaptables y funcionales, creados por un equipo de profesionales en constante formación.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start">
                <button 
                    onClick={() => scrollToComponents('features')} 
                    className="mr-5 flex items-center gap-3 bg-[#2ee0ca] text-black/70 rounded-md text-md font-semibold flex-none shadow shadow-[#2ee0ca] hover:shadow-lg hover:shadow-[#2ee0ca]/30 focus:shadow-none focus:outline focus:outline-[#2ee0ca]/50 px-8 py-3"
                  >
                    Modulos ODOO
                    <FaArrowRight/>
                  </button>
                  <button 
                    onClick={() => scrollToComponents('benefits')} 
                    className="flex items-center gap-3 bg-[#8a50bc] text-white rounded-md text-sm font-semibold flex-none shadow shadow-[#8a50bc] hover:shadow-lg hover:shadow-[#8a50bc]/30 focus:shadow-none focus:outline focus:outline-[#8a50bc]/50 px-8 py-3"
                  >
                    Aplicaciones Web
                    <FaArrowRight/>
                  </button>

                </div>
                <div className="mt-10 flex items-center justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToComponents('benefits')} 
                    className="flex items-center gap-3 bg-[#310860] text-white rounded-md text-sm font-semibold flex-none shadow shadow-[#8a50bc] hover:shadow-lg hover:shadow-[#8a50bc]/30 focus:shadow-none focus:outline focus:outline-[#8a50bc]/50 px-8 py-3"
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
