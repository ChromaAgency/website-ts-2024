'use client'
import { useState } from 'react'
import { FAQContent, FUCollapse as Accordion } from '@/components'
import { FaAngleDown } from 'react-icons/fa6'

const FAQs = () => {
  const [basicAccordion, setBasicAccordion] = useState<number | null>(null)

  const handleBasicAccordion = (index: number) => () => {
    if (index === basicAccordion) setBasicAccordion(null)
    else setBasicAccordion(index)
  }

  // --- Lógica para GEO / SEO ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (FAQContent ?? []).map((item) => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.description
      }
    }))
  }

  return (
    <>
      {/* Inyección de Datos Estructurados para IA y Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h4 className="text-black  mt-5">Preguntas Frecuentes</h4>
      <p className="text-black mt-1">
        Aquí hay algunas de las preguntas más frecuentes que recibimos sobre Odoo y desarrollo a medida.
      </p>
      
      <div className="mt-10 lg:me-36">
        <div> 
          {(FAQContent ?? []).map((item, idx) => {
            return (
              <Accordion
                key={idx}
                open={basicAccordion == idx}
                toggleCollapse={handleBasicAccordion(idx)}
              >
                <div 
                  className={`rounded border ${idx === 0 ? '' : 'mt-2'}`}
                  itemProp="mainEntity" 
                  itemScope 
                  itemType="https://schema.org/Question"
                >
                  <Accordion.Toggle
                    openClass="[&>svg]:rotate-180"
                    className="sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-gray-800 transition hover:text-gray-500"
                  >
                    <span itemProp="name">{item.title}</span>
                    <FaAngleDown className="ms-auto transition-transform duration-300" />
                  </Accordion.Toggle>
                  
                  <Accordion.Menu className="w-full overflow-hidden transition-[height] duration-300 ">
                    <div 
                      itemProp="acceptedAnswer" 
                      itemScope 
                      itemType="https://schema.org/Answer"
                    >
                      <p 
                        className="sm:text-sm font-medium text-gray-500 p-5 pt-0"
                        itemProp="text"
                      >
                        {item.description}
                      </p>
                    </div>
                  </Accordion.Menu>
                </div>
              </Accordion>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FAQs