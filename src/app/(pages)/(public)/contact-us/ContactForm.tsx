'use client'
import React, { useState } from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  containerClassName?: string;
  labelClassName?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  className,
  placeholder,
  labelClassName,
  containerClassName,
  error,
  value, // Asegúrate de que el valor se pasa y se usa
  onChange, // Asegúrate de que el onChange se pasa y se usa
  ...props
}) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        id={name}
        name={name} // Asegúrate de que el atributo 'name' esté presente
        type={type}
        className={className}
        placeholder={placeholder}
        value={value} // Vinculado al estado
        onChange={onChange} // Maneja los cambios de estado
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  containerClassName?: string;
  labelClassName?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  name,
  className,  
  placeholder,
  labelClassName,
  containerClassName,
  rows,
  error,
  value, // Asegúrate de que el valor se pasa y se usa
  onChange, // Asegúrate de que el onChange se pasa y se usa
  ...props
}) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <textarea
        id={name}
        name={name} // Asegúrate de que el atributo 'name' esté presente
        className={className}
        placeholder={placeholder}
        rows={rows}
        value={value} // Vinculado al estado
        onChange={onChange} // Maneja los cambios de estado
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

// --- Componente Principal ContactForm ---

interface FormData {
  fname: string;
  lname: string;
  company: string;
  email: string;
  confirmEmail: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    company: '',
    email: '',
    confirmEmail: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData & { emailMismatch: string }>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being changed
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Specific handling for email mismatch error
    if (name === 'email' || name === 'confirmEmail') {
      if (errors.emailMismatch) {
        setErrors((prev) => ({ ...prev, emailMismatch: undefined }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData & { emailMismatch: string }> = {};
    let isValid = true;

    if (!formData.fname.trim()) {
      newErrors.fname = 'Por favor ingrese su nombre';
      isValid = false;
    }
    if (!formData.lname.trim()) {
      newErrors.lname = 'Por favor ingrese su apellido';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingrese su correo electrónico';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo electrónico válido';
      isValid = false;
    }
    if (!formData.confirmEmail.trim()) {
      newErrors.confirmEmail = 'Por favor confirme su correo electrónico';
      isValid = false;
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Los emails deben coincidir';
      newErrors.emailMismatch = 'Los emails no coinciden'; // General error for display
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor ingrese su mensaje';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null); // Limpiar mensajes anteriores

    if (!validateForm()) {
      setSubmitMessage({ type: 'error', text: 'Por favor, corrija los errores del formulario.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Su mensaje ha sido enviado con éxito. ¡Lo contactaremos pronto!' });
        setFormData({ // Reset form fields
          fname: '',
          lname: '',
          company: '',
          email: '',
          confirmEmail: '',
          message: '',
        });
        setErrors({}); // Clear any lingering errors
      } else {
        const errorData = await response.json();
        setSubmitMessage({ type: 'error', text: errorData.error || 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage({ type: 'error', text: 'Hubo un error de red o inesperado. Por favor, inténtelo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 w-full">
          <FormInput
            label="Nombre"
            name="fname"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Nombre"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            value={formData.fname}
            onChange={handleChange}
            error={errors.fname}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <FormInput
            label="Apellido"
            name="lname"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Apellido"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            value={formData.lname}
            onChange={handleChange}
            error={errors.lname}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="md:w-1/2 w-full">
          <FormInput
            label="Nombre de empresa"
            name="company"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Nombre de empresa"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            value={formData.company}
            onChange={handleChange}
            error={errors.company} // Aunque no tiene validación de yup, puedes añadirla aquí si es necesaria
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 w-full">
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Su correo electrónico"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <FormInput
            label="Confirmar Email"
            name="confirmEmail"
            type="email"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Confirme su correo electrónico"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            value={formData.confirmEmail}
            onChange={handleChange}
            error={errors.confirmEmail}
          />
          {errors.emailMismatch && <p className="text-red-500 text-xs mt-1">{errors.emailMismatch}</p>}
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
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
      </div>
      {submitMessage && (
        <div className={`p-3 rounded-md mb-4 ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {submitMessage.text}
        </div>
      )}
      <button
        type="submit"
        className="inline-flex items-center text-sm bg-[#8a50bc] text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 rounded-md transition-all hover:shadow-lg hover:shadow-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
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
  );
};

export default ContactForm;
