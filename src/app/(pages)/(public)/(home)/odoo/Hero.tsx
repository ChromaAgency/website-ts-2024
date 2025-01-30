import coworking1 from '@/assets/images/hero/coworking1.jpg'

const Hero = () => {
  return (
    <>
      <section className="pt-36 pb-24 relative">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5 text-[#8a50bc] ">
            ¿QUE ES &nbsp;
              <span className="relative z-0 after:bg-[#2ee0ca] after:-z-10 after:absolute md:after:h-6 sm:after:h-5 after:h-4 after:w-full after:bottom-0 after:end-0">
                ODOO
              </span>
              &nbsp;?
            </h1>
            <p className="sm:text-lg text-gray-500">
            Odoo no es solo un software; es una inversión estratégica para empresas que buscan operar de manera inteligente y mantenerse competitivas en mercados dinámicos.
            </p>
          </div>
        </div>
      </section>
      <section>
        <span className="flex justify-center items-center relative z-20 translate-y-1/2">
          <div className="bg-[#8a50bc] text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/20 cursor-pointer hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/30 uppercase px-16 py-3">
            Leer más
          </div>
        </span>

        {/*
          The react-scroll-parallax does not support NextJs versions over v13.4.1, 
          you can uncomment and use the below HeroBanner component if you wish to 
          use it by downgrading the NextJs version, or after 
          react-scroll-parallax fixes the issue.
          And if you decide to use it, make sure to uncomment the ParallaxProvider
          from /components/AppProviders.tsx
        */}

        {/* <HeroBanner /> */}

        <div
          className="flex items-center md:py-80 py-44"
          style={{
            background: `url(${coworking1.src})`,
            backgroundPosition: 'center',
          }}
        ></div>
      </section>
    </>
  )
}

export default Hero
