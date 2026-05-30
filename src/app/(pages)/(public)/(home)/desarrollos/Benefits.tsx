// types
import { Benefit } from './types'

const Benefits = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-brand">
            Aplicaciones
          </span>
          <h1 className="mt-3 mb-4 text-3xl font-semibold text-brand">
            DESARROLLOS APLICACIONES
          </h1>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
              <h2 className="mb-6 text-center text-2xl font-semibold text-brand">
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
                      <h6 className="mb-2 font-medium uppercase text-primary">{benefit.title}</h6>
                      <p className="text-slate-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="mb-6 text-center text-2xl font-semibold text-brand">
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
                      <h6 className="mb-2 font-medium uppercase text-primary">{benefit.title}</h6>
                      <p className="text-slate-700">{benefit.description}</p>
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
