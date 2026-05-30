const SupportCenter = () => {
  return (
    <div>
      <div className="sticky top-24 border rounded-md px-12 py-6">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-slate-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={12} cy={12} r={10} /> <circle cx={12} cy={12} r={4} />
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
          </svg>
          <h4 className="text-lg">Contáctanos</h4>
        </div>
        <h5 className="font-medium mt-3 text-slate-400">
          <span className="font-semibold">¿No pudiste encontrar la respuesta?</span> Escríbenos a nuestro mail y nuestro equipo se pondrá en contacto contigo lo antes posible.
        </h5>
        <div className="flex flex-wrap items-center gap-4 my-3">
          <svg
            className="w-5 h-5 text-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <h4 className="text-slate-400">web@chroma.agency</h4>
        </div>
      </div>
    </div>
  )
}

export default SupportCenter
