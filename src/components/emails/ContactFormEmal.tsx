import Head from 'next/head';
import * as React from 'react';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}


const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  firstName,
  lastName,
  company,
  email,
  message,
}) => {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nuevo Mensaje de Contacto</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333333;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              color: #555555;
              line-height: 1.6;
              margin-bottom: 10px;
            }
            strong {
              color: #333333;
            }
            .footer {
              margin-top: 20px;
              text-align: center;
              font-size: 12px;
              color: #888888;
            }
          `}
        </style>
      </Head>
      <body>
        <div className="container">
          <h1>Nuevo Mensaje de Contacto</h1>
          <p>Has recibido un nuevo mensaje a través del formulario de contacto de tu sitio web:</p>
          <p><strong>Nombre:</strong> {firstName} {lastName}</p>
          <p><strong>Empresa:</strong> {company || 'No especificada'}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style={{ whiteSpace: 'pre-wrap', border: '1px solid #eee', padding: '10px', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>{message}</p>
          <div className="footer">
            <p>Este correo fue enviado desde tu formulario de contacto.</p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ContactFormEmail;
