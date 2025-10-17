import Link from 'next/link'
import Image from 'next/image'
import { SiTiktok } from 'react-icons/si';

//data
import { footerLinks } from '@/components/common/data'

//image
import logoDark from '@/assets/images/logo-dark.png'

const Footer = () => {
  return (
    <footer className=" bg-[#2ee0ca]/10 pt-14 pb-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-14">
          <div className="xl:col-span-1 col-span-4">
            <Link href="/">
              <Image
                src={logoDark}
                className="h-8"
                height={32}
                width={126}
                alt=""
              />
            </Link>
            <p className="text-gray-500/80 mt-5">
              Olavarria 1150, CABA, Argentina.
            </p>
            <p className="text-gray-500/80 mt-5">Medellin, Colombia</p>
            <p className="text-gray-500/80 mt-5">Queretaro, México</p>
            <p className="text-gray-500/80 mt-5">Delaware, USA</p>
          </div>
          <div className="xl:col-span-3 col-span-4 xl:mx-20">
            <div className="flex flex-col sm:flex-row gap-14 flex-wrap justify-between">
              {Object.keys(footerLinks)
                .slice(1, 3)
                .map((title, idx) => {
                  return (
                    <div className="flex flex-col gap-3" key={idx}>
                      <h5 className="mb-3">{title}</h5>
                      {footerLinks[title].links.map((link, idx) => {
                        return (
                          <div className="text-gray-500/80" key={idx}>
                            <Link href="">{link}</Link>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 text-gray-800">Escribinos</h5>
                  <div className="text-gray-500/80">
                    <Link href="/">web@chroma.agency</Link>
                  </div>
                  <div
                    id="footer-social-links"
                    className="flex sm:justify-center gap-10 mt-5"
                  >
                    <div>
                      <Link href="https://www.instagram.com/chroma_agency_/">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://www.linkedin.com/company/chroma-agency-soft/">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
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
                    </div>
                    <div>
                      <Link href="https://www.youtube.com/@chroma_agency">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
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
                    </div>
                    <div>
                      <div>
                        <Link href="https://www.tiktok.com/@chroma_agency">
                          <SiTiktok className="w-5 h-5 text-slate-400 transition-all" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b my-5" />
        <div className="text-center">
          <p className="text-gray-500/80 text-sm">
            {new Date().getFullYear()} por <Link href="/">Chroma</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
