import { NextResponse } from 'next/server';
import { sendContactEmail } from './send';

interface ContactFormData {
    fname: string;
    lname: string;
    company: string;
    email: string;
    confirmEmail: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data: ContactFormData = await request.json();

        // Puedes añadir validación adicional aquí si lo deseas
        if (!data.email || !data.message || !data.fname || !data.lname) {
            return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
        }

        // Llama a la función que envía el correo electrónico usando Resend
        const emailResponse = await sendContactEmail({
            firstName: data.fname,
            lastName: data.lname,
            company: data.company,
            email: data.email,
            message: data.message,
        });

        if (emailResponse.success) {
            return NextResponse.json({ message: 'Correo enviado con éxito.', data: emailResponse.data }, { status: 200 });
        } else {
            console.error('Error al enviar correo (Resend):', emailResponse.error);
            return NextResponse.json({ error: emailResponse.error || 'Error al enviar el correo electrónico.' }, { status: 500 });
        }

    } catch (error) {
        console.error('Error en la ruta de la API /api/contact:', error);
        return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
    }
}
