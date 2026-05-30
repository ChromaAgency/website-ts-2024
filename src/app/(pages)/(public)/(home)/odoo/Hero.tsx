'use client'
import macPic from '@/assets/images/hero/macPic.jpeg'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const headerOffset = 70
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <section className="relative bg-accent/10 pb-24 pt-36">
        <div className="container">
          <div className="text-center">
            <p className="tech-kicker mb-4">Ecosistema empresarial</p>
            <h1 className="mb-5 text-3xl/tight font-semibold text-brand sm:text-4xl/tight lg:text-5xl/tight">
              QUE ES&nbsp;
              <span className="relative z-0 after:absolute after:bottom-0 after:end-0 after:h-4 after:w-full after:-z-10 after:bg-accent sm:after:h-5 md:after:h-6">
                ODOO
              </span>
              &nbsp;?
            </h1>
            <p className="text-slate-700 sm:text-lg">
              Odoo no es solo un software; es una inversion estrategica para
              empresas que buscan operar de forma inteligente y mantenerse
              competitivas en mercados dinamicos.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-accent/10">
        <span className="relative z-20 flex translate-y-1/2 items-center justify-center">
          <button
            onClick={scrollToAbout}
            className="tech-btn-primary px-16 text-sm uppercase"
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
        />
      </section>
    </>
  )
}

export default Hero
