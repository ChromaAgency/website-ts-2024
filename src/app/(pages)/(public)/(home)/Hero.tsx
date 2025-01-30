import Link from 'next/link'  
import { FaArrowDownLong } from 'react-icons/fa6'  
import Image from 'next/image'  
import BackgroundImage from '@/assets/images/hero/Chroma_LogoWhiteBackground.png'  

const Hero = () => {  
  return (  
    <section className="py-44 relative bg-slate-500/5">  
      <div className=" hero-with-shapes">  
        <div className="shape1" />  
        <div className="shape2" />  
        <div className="shape3" />  
        <div className="container">  
          <div className="flex justify-between items-center">  
            <div>  
              <h1 className="md:text-7xl text-3xl text-[#310860] font-medium my-5">  
                CHROMA&nbsp;  
                <span className="relative after:bg-[#2ee0ca] md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">  
                  AGENCY  
                </span>  
              </h1>  
              <h2 className="w-3/4 text-4xl font-medium mt-6 mb-20 text-[#8a50bc]">  
                DIGITALIZACIÓN DE TU EMPRESA.  
              </h2>  
              
              <div className="flex flex-wrap items-center gap-5">              
                <Link  
                  href="#portfolios"  
                  className="flex gap-1 items-center py-3 px-6 rounded border border-[#310860] text-white bg-[#310860] hover:shadow-lg hover:text-[#310860] hover:bg-white hover:shadow-[#474747] focus:outline focus:outline-black/50 transition-all duration-500"  
                >  
                  <FaArrowDownLong /> Servicios  
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
    </section>  
  )  
}  

export default Hero