import { EmailTemplate } from '../../../components/EmailTemplate'
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, message, funnel } = body;
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_USER}`,
      to: `${process.env.EMAIL_USER}`,
      subject: `Contact Form From ${firstName} ${lastName}`,
      react: EmailTemplate({ firstName, lastName, email, phoneNumber, message, funnel }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
