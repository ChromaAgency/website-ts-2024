import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from './data'

//images
import logoDark from '@/assets/images/logo-dark.png'

const Footer3 = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container">
        {/* <div className="py-14 pb-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 pt-14">
            <div>
              <div className="flex justify-start sm:justify-end lg:gap-32 gap-14">
                {Object.keys(footerLinks)
                  .slice(0, 2)
                  .map((title, idx) => {
                    return (
                      <div className="flex flex-col gap-4 text-sm" key={idx}>
                        <h6 className="mb-3">{title}</h6>
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
              </div>
            </div>
          </div>
        </div> */}
        <div className="py-5">
          <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer3
