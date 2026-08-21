import type { ReactNode } from 'react'

const Section = ({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) => (
  <section
    id={id}
    className="scroll-mt-28 border-t border-slate-200/80 pt-12 pb-4 first:border-0 first:pt-0 lg:pt-16"
  >
    <h2 className="text-2xl lg:text-3xl font-semibold text-brand mb-6 lg:mb-8">
      {title}
    </h2>
    <div className="space-y-5 md:space-y-6 text-slate-700 text-base md:text-lg leading-8">
      {children}
    </div>
  </section>
)

const Content = () => {
  return (
    <section className="pt-10 pb-24 lg:pt-14 lg:pb-32 bg-surface">
      <div className="container">
        <div className="max-w-4xl mx-auto">
       

          <div className="flex flex-col gap-2">
            <Section id="servicio" title="1. Quienes somos y que servicio ofrecemos">
              <p>
                Chroma es una consultora tecnologica especializada en digitalizar
                procesos de negocio. No vendemos un producto de estanteria con
                carrito de compra online: cada proyecto se define junto al cliente
                segun su operacion, alcance y prioridades.
              </p>
              <p>Nuestro portafolio incluye, de forma principal:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-brand">Implementacion de Odoo ERP</strong>{' '}
                  como Partner Oficial de Odoo: analisis de procesos,
                  configuracion, migracion de datos, capacitacion y puesta en
                  marcha (Community o Enterprise, segun el caso).
                </li>
                <li>
                  <strong className="text-brand">Desarrollo de modulos Odoo</strong>{' '}
                  (addons a medida) cuando el estandar no cubre un proceso critico
                  del negocio, cuidando la actualizacion futura del sistema.
                </li>
                <li>
                  <strong className="text-brand">Integraciones y partners</strong>:
                  somos partners de SimpliRoute (incluyendo el conector Odoo–SimpliRoute
                  para sincronizar pedidos/entregas y logistica) y de Xtract, ademas
                  de otras integraciones por API (e-commerce, pagos, BI, etc.).
                </li>
                <li>
                  <strong className="text-brand">Desarrollos a medida</strong>:
                  sitios web, aplicaciones web/nativas, chatbots con IA y
                  consultoria para ordenar procesos antes o durante la
                  implementacion.
                </li>
              </ul>
              <p>
                Las licencias de software de terceros (por ejemplo, suscripciones
                Odoo Enterprise pagadas a Odoo S.A., o planes de SimpliRoute/Xtract)
                no son “revendidas” como un pack cerrado en este sitio: se contratan
                segun las condiciones de cada proveedor, y Chroma asesora y gestiona
                el proyecto de implementacion o integracion.
              </p>
            </Section>

          <Section id="contratacion" title="2. Como se contrata el servicio.">
            <p>
              El servicio de Chroma es <strong>personalizado</strong>. No hay
              compra automatica ni checkout en chroma.agency. El vinculo
              comercial se forma asi:
            </p>
            <ol className="list-decimal pl-6 space-y-4 marker:text-brand marker:font-semibold">
              <li>
                <strong className="text-brand">Consulta inicial.</strong> El
                interesado nos escribe por el formulario de contacto, email
                (web@chroma.agency) o canales publicados en el sitio. Pedimos
                contexto del negocio, sistemas actuales y objetivos.
              </li>
              <li>
                <strong className="text-brand">Descubrimiento / relevamiento.</strong>{' '}
                En una o mas reuniones acordamos procesos a cubrir, modulos
                Odoo involucrados, integraciones (p. ej. SimpliRoute o Xtract),
                volumen de datos a migrar y restricciones de plazo.
              </li>
              <li>
                <strong className="text-brand">Propuesta comercial y alcance.</strong>{' '}
                Enviamos una propuesta escrita (presupuesto y/o statement of
                work) con: alcance, entregables, estimacion de plazos, modalidad
                de trabajo, honorarios de Chroma, eventuales paquetes de horas
                de desarrollo, y aclaracion de costos de terceros (licencias
                Odoo u otros vendors).
              </li>
              <li>
                <strong className="text-brand">Aceptacion.</strong> El contrato
                queda perfeccionado cuando el cliente acepta por escrito la
                propuesta (firma, orden de compra, email de conformidad u otro
                medio que hayamos acordado) y, si aplica, abona el anticipo
                indicado en esa propuesta.
              </li>
              <li>
                <strong className="text-brand">Kick-off y ejecucion.</strong>{' '}
                Arrancamos con un plan de hitos (configuracion, UAT, capacitacion,
                go-live). Los cambios de alcance se documentan y pueden implicar
                ajuste de plazo y costo (incluye desarrollos extra sobre codigo
                nativo de Odoo, que se facturan aparte por paquetes de horas).
              </li>
              <li>
                <strong className="text-brand">Facturacion y cierre.</strong>{' '}
                Facturamos segun el calendario de la propuesta (anticipo,
                hitos o mensuales). El soporte post go-live, si no esta incluido,
                se acuerda en un anexo o contrato de mantenimiento.
              </li>
            </ol>
            <p>
              Hasta que no exista aceptacion escrita de la propuesta, Chroma no
              asume obligacion de implementar ni de reservar equipo para el
              proyecto.
            </p>
          </Section>

          <Section id="condiciones" title="3. Condiciones economicas y de ejecucion">
            <ul className="list-disc pl-6 space-y-3 marker:text-primary">
              <li>
                Los precios de Chroma son los de la propuesta vigente. Impuestos
                aplicables se detallan en la factura segun la entidad
                contratante y el pais de facturacion.
              </li>
              <li>
                Salvo pacto en contrario, los retrasos del cliente en entregar
                informacion, accesos o validaciones pueden mover fechas sin que
                eso genere penalidad a Chroma.
              </li>
              <li>
                Si el cliente cancela un proyecto ya iniciado, se facturan los
                trabajos realizados y los costos no recuperables ya comprometidos
                (p. ej. horas consumidas, licencias o servicios de terceros
                adquiridos a su pedido).
              </li>
              <li>
                Chroma puede subcontratar partes del trabajo (desarrollo,
                diseno, etc.) bajo su responsabilidad frente al cliente, sin
                alterar el alcance aceptado.
              </li>
            </ul>
          </Section>

          <Section id="propiedad" title="4. Propiedad intelectual y uso de marcas">
            <p>
              Odoo, SimpliRoute, Xtract y demas marcas de terceros pertenecen a
              sus titulares. El hecho de que Chroma sea partner no implica
              que Chroma sea dueña de esos productos ni que este sitio constituya
              una oferta oficial de esos vendors.
            </p>
            <p>
              Salvo acuerdo distinto en la propuesta: (a) el codigo y
              configuraciones desarrollados especificamente para el cliente le
              pertenecen al cliente una vez pagados los honorarios
              correspondientes; (b) metodologias, plantillas, conectores
              reutilizables y know-how previo de Chroma siguen siendo de Chroma,
              con licencia de uso necesaria para operar lo entregado.
            </p>
          </Section>

          <Section id="garantias" title="5. Garantias y limitacion de responsabilidad">
            <p>
              Prestamos el servicio con diligencia profesional razonable. Odoo y
              otros softwares de terceros evolucionan; Chroma no garantiza
              resultados de negocio concretos (ventas, ahorro, etc.) ni la
              ausencia total de errores en plataformas de terceros.
            </p>
            <p>
              En la medida permitida por la ley aplicable, la responsabilidad
              total de Sync Industries LLC / Chroma frente al cliente por
              reclamos relacionados con un proyecto se limita al monto de
              honorarios efectivamente pagados a Chroma por ese proyecto en los
              doce (12) meses anteriores al reclamo. No respondemos por danos
              indirectos, lucro cesante o perdida de datos cuando el incidente
              derive de sistemas, cuentas o proveedores fuera de nuestro control.
            </p>
          </Section>

          <Section id="sitio" title="6. Uso del sitio web">
            <p>
              El contenido de chroma.agency es informativo. Podes navegarlo
              libremente; no debés usarlo para scrapear, atacar o suplantar la
              identidad de Chroma. Nos reservamos el derecho de actualizar
              textos, precios orientativos y materiales sin aviso previo; la
              version vinculante para un proyecto es siempre la propuesta
              aceptada.
            </p>
          </Section>

          <Section id="ley" title="7. Ley aplicable y contacto">
            <p>
              Estos terminos se rigen por las leyes del Estado de Delaware,
              Estados Unidos, sin perjuicio de normas imperativas del consumidor
              que pudieran aplicar segun tu residencia. Para dudas comerciales o
              legales: web@chroma.agency. Domicilio societario de Sync Industries
              LLC: Delaware, USA (EIN: 37-2161139). Oficinas comerciales
              referidas en el sitio: Argentina, Colombia y Mexico.
            </p>
          </Section>

          <Section id="privacidad" title="8. Politica de privacidad">
            <p>
              Tratamos datos personales que nos envias al contactarnos
              (nombre, email, telefono, empresa y el mensaje) y datos tecnicos
              basicos de navegacion (p. ej. via herramientas de analitica como
              Google Tag Manager / Google Analytics, segun la configuracion
              vigente del sitio).
            </p>
            <p>
              <strong className="text-brand">Finalidad:</strong> responder
              consultas, elaborar propuestas, ejecutar contratos, mejorar el
              sitio y cumplir obligaciones legales.
            </p>
            <p>
              <strong className="text-brand">Base:</strong> tu solicitud de
              contacto / ejecucion de la relacion comercial, y nuestro interes
              legitimo en operar y mejorar el sitio.
            </p>
            <p>
              <strong className="text-brand">Encargados / terceros:</strong>{' '}
              proveedores de hosting, email y analitica. No vendemos listas de
              contactos.
            </p>
            <p>
              <strong className="text-brand">Conservacion:</strong> mientras
              dure la gestion comercial o el proyecto, y el tiempo adicional
              que exija la ley o la defensa de reclamos.
            </p>
            <p>
              <strong className="text-brand">Derechos:</strong> podes pedir
              acceso, rectificacion o eliminacion de tus datos de contacto
              escribiendo a web@chroma.agency. Si usas servicios de Odoo,
              SimpliRoute, Xtract u otros vendors a traves de un proyecto,
              esos tratamientos se rigen tambien por las politicas de cada
              proveedor.
            </p>
          </Section>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Content
