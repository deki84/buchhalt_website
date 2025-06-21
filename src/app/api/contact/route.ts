// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'outlook ', // oder z. B. 'web.de', 'ionos', 'mailgun'
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.MAIL_USER}>`,
      to: 'deki1984@hotmail.de', // Empfängeradresse
      subject: `Neue Nachricht von ${body.name}`,
      text: `
Firma: ${body.firma || '---'}
E-Mail: ${body.email}
Telefon: ${body.telefon}
Betreff: ${body.betreff}
Nachricht: ${body.nachricht}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}