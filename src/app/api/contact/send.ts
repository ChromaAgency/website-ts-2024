import { Resend } from 'resend';
import * as React from 'react';
import ContactFormEmail from '@/components/emails/ContactFormEmal';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    message: string;
}

export async function sendContactEmail({ firstName, lastName, company, email, message }: SendEmailProps) {
    try {
        const data = await resend.emails.send({
            from: 'Contacto Web <noreply@chroma.agency>', 
            to: ['web@chroma.agency'], 
            subject: `Nuevo mensaje de contacto de ${firstName} ${lastName}`,
            replyTo: email, 
            react: React.createElement(ContactFormEmail, { 
                firstName,
                lastName,
                company,
                email,
                message,
            }),
        });
        if (data.error) throw new Error(data.error.message || 'Error desconocido al enviar el correo.');

        return { success: true, data };
    } catch (error) {
        console.error('Error al enviar el correo con Resend:', error);
        return { success: false, error: (error as Error).message || 'Error desconocido al enviar el correo.' };
    }
}
