import Link from 'next/link'
import Image from 'next/image'
import { SiTiktok } from 'react-icons/si'

//image
import logoDark from '@/assets/images/logo-dark.png'
import odooLogo from '@/assets/images/odoo_silver_partner_rgb.png'

const Footer = () => {
  return (
    <footer className="bg-brand text-slate-200 pt-16 pb-6 border-t border-white/10">
      <div className="container">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src={logoDark}
                className="h-20 w-auto rounded-md bg-white p-2"
                height={200}
                width={126}
                alt="Chroma"
              />
            </Link>
            <Link
              href="https://www.odoo.com/es/partners/chroma-agency-3377991?country_id=11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4"
            >
              <Image
                src={odooLogo}
                className="h-25  rounded-md bg-white p-2"
                height={400}
                width={252}
                alt="Odoo Silver Partner"
              />
            </Link>

            <p className="text-slate-300 mt-6 max-w-md">
              Digitalizamos procesos de negocio con enfoque en automatizacion,
              eficiencia operativa y escalabilidad.
            </p>

            <p className="text-slate-300/90 mt-5 text-sm">
              Olavarria 1150, CABA, Argentina.
            </p>
            <p className="text-slate-300/90 mt-2 text-sm">Medellin, Colombia</p>
            <p className="text-slate-300/90 mt-2 text-sm">Queretaro, Mexico</p>
            <p className="text-slate-300/90 mt-2 text-sm">Delaware, USA</p>
          </div>

          <div>
            <h5 className="mb-4 text-white text-sm tracking-[0.18em] uppercase">
              Navegacion
            </h5>
            <div className="flex flex-col gap-3 text-slate-300">
              <Link className="hover:text-accent transition-colors" href="/">
                Inicio
              </Link>
              <Link
                className="hover:text-accent transition-colors"
                href="/odoo"
              >
                Odoo
              </Link>
              <Link
                className="hover:text-accent transition-colors"
                href="/desarrollos"
              >
                Desarrollos
              </Link>
              <Link
                className="hover:text-accent transition-colors"
                href="/contact-us"
              >
                Contacto
              </Link>
              <Link
                className="hover:text-accent transition-colors"
                href="/faq"
              >
                Preguntas frecuentes
              </Link>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-white text-sm tracking-[0.18em] uppercase">
              Escribinos
            </h5>
            <div className="text-slate-300">
              <p>web@chroma.agency</p>
            </div>
            <div id="footer-social-links" className="flex gap-6 mt-6">
              <Link
                href="https://www.instagram.com/chroma_agency_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-slate-300 hover:text-accent transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/chroma-agency-soft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-slate-300 hover:text-accent transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@chroma_agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <svg
                  className="w-5 h-5 text-slate-300 hover:text-accent transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@chroma_agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5 text-slate-300 hover:text-accent transition-all" />
              </Link>
            </div>

            <div className="mt-8">
              <Link className="text-accent hover:text-white transition-colors" href="/faq">
                Ver preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
