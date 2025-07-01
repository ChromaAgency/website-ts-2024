import Image from 'next/image'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Clients = () => {
  return (
    <section className="py-32 relative bg-white">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image src={whiteWave} alt="svg" className="w-full -scale-x-100" />
      </div>
      <div className="container relative">
        <span className="text-sm bg-[#8a50bc]/40 text-[#310860] rounded-full px-3 py-1">
          Tecnologías utilizadas. 
        </span>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5">
          <h1 className="text-3xl font-semibold text-[#310860]">
            Trabajamos con las ultimas tecnologías para crear aplicaciones y sitios web de vanguardia estratégica.
          </h1>
          <p className="text-slate-900">
            Sitios web y aplicaciones que potencian tu ventaja competitiva.
            <br/><br/>
            Compromiso con la evolución tecnológica para estar actualizados a las últimas tendencias tecnológicas. 
            <br/><br/>
            Exploración proactiva incesante de nuevas tecnologías.
            </p>
        </div>
        <div className="flex flex-wrap items-center justify-around mt-12 gap-5">
          <Image alt="algolia" src="/assets/images/brands/algolia.png" height={38} width={112} className="w-28"/>
          <Image alt="supabase" src="/assets/images/brands/supabase.png" height={38} width={112} className="w-28" />
          <Image alt="vercel" src="/assets/images/brands/vercel.png" height={38} width={112} className="w-28" />
          <Image
            alt="nextjs"
            src="/assets/images/brands/nextjs.png"
            height={38}
            width={112}
            className="w-28"
          />
          <Image
            alt="odoo"
            src="/assets/images/brands/odoo.png"
            height={38}
            width={112}
            className="w-28"
          />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <Image
          src={whiteWave}
          alt="svg"
          className="w-full scale-x-100 -scale-y-100"
        />
      </div>
    </section>
  )
}

export default Clients
