'use client'
import macPic from '@/assets/images/hero/macPic.jpeg'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerOffset = 70; 
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="pt-36 pb-24 relative bg-[#2ee0ca]/10">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5 text-[#8a50bc] ">
            ¿QUE ES &nbsp;
              <span className="relative z-0 after:bg-[#2ee0ca] after:-z-10 after:absolute md:after:h-6 sm:after:h-5 after:h-4 after:w-full after:bottom-0 after:end-0">
                ODOO
              </span>
              &nbsp;?
            </h1>
            <p className="sm:text-lg text-gray-700">
            Odoo no es solo un software; es una inversión estratégica para empresas que buscan operar de manera inteligente y mantenerse competitivas en mercados dinámicos.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#2ee0ca]/10" >
        <span className="flex justify-center  items-center relative z-20 translate-y-1/2">
          <button 
            onClick={scrollToAbout}
            className="bg-[#8a50bc]  text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/20 cursor-pointer hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/30 uppercase px-16 py-3"
          >
            Leer más
          </button>
        </span>

        <div
          className="flex items-center md:py-80 py-44"
          style={{
            background: `url(${macPic.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </section>
    </>
  )
}

export default Hero
