import sgMail from '@sendgrid/mail';
import type { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

// Initialize SendGrid API key
sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);


export async function POST(req: Request, res: NextApiResponse) {
  const { firstName, lastName, email, phoneNumber, message, funnel } = await req.json();

  const msg = {
    to: 'currencycovenant@gmail.com', // Replace with your email address
    from: 'covenantinquiry@mail.com', // Replace with your SendGrid verified sender email
    subject: 'New Contact Form Submission',
    html: `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>How did you hear about us?</strong> ${funnel}</p>
    `,
  };

  const response = sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
  const received = response;
  return NextResponse.json(received);
}

