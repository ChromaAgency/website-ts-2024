const About = () => {
  return (
    <section id="about" className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="flex flex-col items-center justify-between lg:items-start">
            <div className="border-t-2 border-[#310860] w-1/5 mb-7" />
            <h1 className="text-3xl text-[#310860]">Un software empresarial bien hecho.</h1>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-slate-900">
              Odoo es una suite empresarial integral que combina más de 50 aplicaciones diseñadas para optimizar las operaciones
              de tu negocio. Desde la gestión de ventas y finanzas hasta inventarios, proyectos y recursos humanos,
              Odoo te permite centralizar y automatizar procesos críticos en un solo lugar.
            </p>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-slate-900">
              Olvidate de sistemas aislados. Odoo integra todas tus herramientas en un solo ecosistema, lo que significa que las áreas de tu empresa trabajan juntas de manera fluida. Esto no solo ahorra tiempo, sino que reduce los errores y mejora la toma de decisiones.
            </p>
          </div>
        </div>
        <div className="lg:mt-5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div />
            <div className="lg:col-span-2">
              <p className="text-sm/relaxed tracking-wider text-slate-900">
                Con una interfaz moderna y fácil de usar, Odoo no solo es potente, sino también accesible para equipos de todos los niveles. No hay curva de aprendizaje compleja; podés empezar a usarlo de manera eficiente desde el día uno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
