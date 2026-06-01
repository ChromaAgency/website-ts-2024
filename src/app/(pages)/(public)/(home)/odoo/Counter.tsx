'use client'
import Image from 'next/image'
import CountUp from 'react-countup'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Counter = () => {
  return (
    <section className="relative bg-accent/10 py-16 lg:py-24">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image
          width={1905}
          height={150}
          src={whiteWave}
          alt="white-wave-svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="py-10">
        <div className="container" data-aos="fade-up">
          <div className="text-center">
            <h1 className="mt-3 text-3xl/tight font-medium uppercase text-brand">
             Todo tu negocio en un solo lugar.
            </h1>
          </div>
          <div className="mt-14">
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 text-center gap-10 lg:gap-6">
              <div>
                <span className="text-3xl">
                  <CountUp duration={5} start={1} end={12} suffix="M+" />
                </span>
                <h1 className="mb-1 mt-3 text-brand">Usuarios</h1>
                <p className="text-slate-600">usando Odoo ERP</p>
              </div>
              <div>
                <span className="text-3xl">
                  <CountUp
                    duration={5}
                    start={1}
                    end={41}
                    suffix="Mil+"
                    prefix=""
                  />
                </span>
                <h1 className="mb-1 mt-3 text-brand">Aplicaciones de la Comunidad</h1>
                <p className="text-slate-600">desarrolladas para cada empresa</p>
              </div>
              <div>
                <span className="text-3xl">
                  <CountUp duration={5} start={1} end={100} suffix="%" />
                </span>
                <h1 className="mb-1 mt-3 text-brand">Libera el potencial de crecimiento</h1>
                <p className="text-slate-600">mejora la calidad de tu trabajo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
