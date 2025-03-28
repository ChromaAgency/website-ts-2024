'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput, FormTextArea } from '@/components'
import { useState } from 'react'

const ContactForm = () => {
  const [emailError, setEmailError] = useState('')

  // form validation schema
  const contactUsSchema = yup.object().shape({
    fname: yup.string().required('Por favor ingrese su nombre'),
    lname: yup.string().required('Por favor ingrese su apellido'),
    company: yup.string(),
    email: yup
      .string()
      .email('Por favor ingrese un correo electrónico válido')
      .required('Por favor ingrese su correo electrónico'),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref('email')], 'Los emails deben coincidir')
      .required('Por favor confirme su correo electrónico'),
    message: yup.string().required('Por favor ingrese su mensaje'),
  })

  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(contactUsSchema),
  })

  // Función para validar emails coincidentes
  const validateEmails = () => {
    const email = watch('email')
    const confirmEmail = watch('confirmEmail')
    
    if (email && confirmEmail && email !== confirmEmail) {
      setEmailError('Los emails no coinciden')
      return false
    }
    setEmailError('')
    return true
  }

  const onSubmit = (data:any) => {
    if (!validateEmails()) return
    
    alert("Su formulario ha sido enviado con éxito, lo contactaremos pronto!")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6">
        <div className="md:w-1/2">
          <FormInput
            control={control}
            label="Nombre"
            name="fname"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Nombre"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
          />
        </div>
        <div className="md:w-1/2">
          <FormInput
            label="Apellido"
            name="lname"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Apellido"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            control={control}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="md:w-1/2">
          <FormInput
            label="Nombre de empresa"
            name="company"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Nombre de empresa"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            control={control}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="md:w-1/2">
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Su correo electrónico"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            control={control}
          />
        </div>
        <div className="md:w-1/2">
          <FormInput
            label="Confirmar Email"
            name="confirmEmail"
            type="email"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Confirme su correo electrónico"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            control={control}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>
      </div>
      <div className="w-full">
        <FormTextArea
          label="Mensaje"
          name="message"
          className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
          placeholder="Escribe un mensaje..."
          labelClassName="block text-sm font-medium mb-1 text-gray-600"
          containerClassName="mb-5"
          rows={4}
          control={control}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center text-sm  bg-[#8a50bc] text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 rounded-md transition-all hover:shadow-lg hover:shadow-primary/80"
      >
        Enviar
        <span className="w-4 h-4 ms-1">
          <svg
            className="w-full h-full text-white"
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
                fill="currentcolor"
              />
            </g>
          </svg>
        </span>
      </button>
    </form>
  )
}

export default ContactForm