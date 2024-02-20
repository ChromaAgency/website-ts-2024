import Link from 'next/link'
import { FaArrowDownLong } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className="py-44 relative bg-slate-500/5">
      <div className=" hero-with-shapes">
        <div className="shape1" />
        <div className="shape2" />
        <div className="shape3" />
        <div className="container">
          <div>
            {/* <div
              className="bg-amber-500/10 py-2 px-4 inline-block rounded-md mb-6"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <Link href="">
                <div className="flex items-center gap-2">
                  <div className="inline-block px-2 text-sm text-white rounded-full bg-orange-500">
                    New!
                  </div>
                  <div className="font-medium">
                    Check our latest article on design
                  </div>
                </div>
              </Link>
            </div> */}
            <h1 className="md:text-5xl text-3xl text-gray-700 font-medium my-5">
              Comenza la transformación digital de&nbsp;
              <span className="relative after:bg-amber-200 md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                tu empresa
              </span>
            </h1>
            <h2 className="w-3/4 text-lg font-medium mt-6 mb-20 text-slate-600">
              Comenza a digitalizar tu empresa con Odoo
            </h2>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="#portfolios"
                className="flex gap-1 items-center py-3 px-6 rounded border border-black text-white bg-black hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500"
              >
                <FaArrowDownLong /> Conoce nuestro trabajo
              </Link>
              {/* 
              TODO: Add later
              <Link
                href="contact-us"
                className="py-3 px-6 rounded border border-black hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500"
              >
                Contactanos
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* 
      TODO: Add later
      <div className="absolute end-0 top-48 hidden md:block">
        <div className="flex items-center gap-5 vertical-rl px-2">
          <Link href="" className="text-lg">
            Twitter
          </Link>
          <Link href="" className="text-lg">
            Facebook
          </Link>
          <Link href="" className="text-lg">
            Instagram
          </Link>
        </div>
      </div> */}
    </section>
  )
}

export default Hero
