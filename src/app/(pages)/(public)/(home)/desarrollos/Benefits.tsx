// types
import { Benefit } from './types'
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

type ClassValue = string | boolean | undefined | null | { [key: string]: ClassValue } | ClassValue[];

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const Benefits = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container mx-auto px-4"> {/* Added mx-auto px-4 for better centering and padding */}
        <div className="text-center mb-12">
          <span className="text-sm bg-[#8a50bc]/40 text-[#310860] rounded-full px-3 py-1">
            Aplicaciones
          </span>
          <h1 className="text-[#310860] text-3xl font-semibold mt-3 mb-4">
            DESARROLLOS APLICACIONES
          </h1>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
              <h2 className="text-[#310860] text-2xl font-semibold mb-6 text-center">
                APLICACIONES WEB
              </h2>
              {(benefits ?? []).slice(0, 2).map((benefit, idx) => (
                <div key={idx} className="mb-8">
                  <div
                    className="flex gap-6 items-center"
                    data-aos="fade-up"
                    data-aos-duration={300}
                  >
                    <div>
                      <span className="h-16 w-16 bg-primary/10 rounded-md flex items-center justify-center">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-2 font-medium uppercase text-[#8a50bc]">{benefit.title}</h6>
                      <p className="text-gray-800">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-[#310860] text-2xl font-semibold mb-6 text-center">
                CHATBOTS IA
              </h2>
              {(benefits ?? []).slice(2, 4).map((benefit, idx) => (
                <div key={idx} className="mb-8">
                  <div
                    className="flex gap-6 items-center"
                    data-aos="fade-up"
                    data-aos-duration={300}
                  >
                    <div>
                      <span className="h-16 w-16 bg-primary/10 rounded-md flex items-center justify-center">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-2 font-medium uppercase text-[#8a50bc]">{benefit.title}</h6>
                      <p className="text-gray-800">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
