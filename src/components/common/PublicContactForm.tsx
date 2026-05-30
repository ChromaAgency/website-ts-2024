'use client'

import { useState } from 'react'

type ContactFormData = {
  fname: string
  lname: string
  company: string
  email: string
  confirmEmail: string
  message: string
}

type ContactFormErrors = Partial<ContactFormData & { emailMismatch: string }>

type FieldInputProps = {
  label: string
  name: keyof ContactFormData
  type?: 'text' | 'email'
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const FieldInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
}: FieldInputProps) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full rounded-md border border-slate-300 px-4 py-2 text-sm leading-6 text-slate-700 focus:border-primary focus:outline-none focus:ring-0"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

type FieldTextAreaProps = {
  label: string
  name: keyof ContactFormData
  placeholder: string
  rows?: number
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
}

const FieldTextArea = ({
  label,
  name,
  placeholder,
  rows = 4,
  value,
  onChange,
  error,
}: FieldTextAreaProps) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full rounded-md border border-slate-300 px-4 py-2 text-sm leading-6 text-slate-700 focus:border-primary focus:outline-none focus:ring-0"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

const PublicContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fname: '',
    lname: '',
    company: '',
    email: '',
    confirmEmail: '',
    message: '',
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    if ((name === 'email' || name === 'confirmEmail') && errors.emailMismatch) {
      setErrors((prev) => ({ ...prev, emailMismatch: undefined }))
    }
  }

  const validateForm = () => {
    const newErrors: ContactFormErrors = {}
    let isValid = true

    if (!formData.fname.trim()) {
      newErrors.fname = 'Por favor ingrese su nombre'
      isValid = false
    }

    if (!formData.lname.trim()) {
      newErrors.lname = 'Por favor ingrese su apellido'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingrese su correo electronico'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo electronico valido'
      isValid = false
    }

    if (!formData.confirmEmail.trim()) {
      newErrors.confirmEmail = 'Por favor confirme su correo electronico'
      isValid = false
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Los emails deben coincidir'
      newErrors.emailMismatch = 'Los emails no coinciden'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor ingrese su mensaje'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)

    if (!validateForm()) {
      setSubmitMessage({
        type: 'error',
        text: 'Por favor, corrija los errores del formulario.',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Su mensaje ha sido enviado con exito. Lo contactaremos pronto.',
        })
        setFormData({
          fname: '',
          lname: '',
          company: '',
          email: '',
          confirmEmail: '',
          message: '',
        })
        setErrors({})
      } else {
        const errorData = await response.json()
        setSubmitMessage({
          type: 'error',
          text:
            errorData.error ||
            'Hubo un error al enviar su mensaje. Por favor, intentelo nuevamente.',
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitMessage({
        type: 'error',
        text: 'Hubo un error de red o inesperado. Por favor, intentelo nuevamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="tech-surface mx-auto max-w-3xl p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <FieldInput
            label="Nombre"
            name="fname"
            placeholder="Nombre"
            value={formData.fname}
            onChange={handleChange}
            error={errors.fname}
          />
        </div>
        <div className="w-full md:w-1/2">
          <FieldInput
            label="Apellido"
            name="lname"
            placeholder="Apellido"
            value={formData.lname}
            onChange={handleChange}
            error={errors.lname}
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-full md:w-1/2">
          <FieldInput
            label="Nombre de empresa"
            name="company"
            placeholder="Nombre de empresa"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <FieldInput
            label="Email"
            name="email"
            type="email"
            placeholder="Su correo electronico"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>
        <div className="w-full md:w-1/2">
          <FieldInput
            label="Confirmar Email"
            name="confirmEmail"
            type="email"
            placeholder="Confirme su correo electronico"
            value={formData.confirmEmail}
            onChange={handleChange}
            error={errors.confirmEmail}
          />
          {errors.emailMismatch && (
            <p className="mt-1 text-xs text-red-500">{errors.emailMismatch}</p>
          )}
        </div>
      </div>

      <FieldTextArea
        label="Mensaje"
        name="message"
        placeholder="Escriba un mensaje..."
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      {submitMessage && (
        <div
          className={`mb-4 rounded-md p-3 text-sm ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <button type="submit" className="tech-btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
        <span className="ms-1 h-4 w-4">
          <svg
            className="h-full w-full text-white"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <rect id="bound" x={0} y={0} width={24} height={24} />
              <path
                d="M3,13.5 L19,12 L3,10.5 L3,3.7732928 C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047 C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205 L21.9867539,11.5440392 C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177 C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608 L3.70518234,20.6826679 C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072 C3.22385763,20.7267072 3,20.5028496 3,20.2267072 L3,13.5 Z"
                id="Combined-Shape"
                fill="currentColor"
              />
            </g>
          </svg>
        </span>
      </button>
    </form>
  )
}

export default PublicContactForm
