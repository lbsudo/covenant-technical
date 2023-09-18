import { EmailTemplate } from '../../../components/EmailTemplate'
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstNameLastName, email, phoneNumber, companyName, websiteUrl, message, funnel } = body;
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_USER}`,
      to: `${process.env.EMAIL_USER}`,
      subject: `Contact Form From ${firstNameLastName} `,
      react: EmailTemplate({ firstNameLastName, email, phoneNumber, companyName, websiteUrl, message, funnel }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
