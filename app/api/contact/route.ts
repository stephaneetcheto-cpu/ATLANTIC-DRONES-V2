import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectType, message } = body;

    // 1. Configuration du transporteur (Lien vers HostPapa)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2. Définition du contenu de l'email
    const mailOptions = {
      from: `"Site Web Atlantic Drones" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `Nouveau contact : ${projectType} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1e3a8a;">Nouvelle demande de contact</h2>
          <p><strong>De :</strong> ${name} ${company ? `(${company})` : ''}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
          <p><strong>Type de projet :</strong> ${projectType}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message :</h3>
          <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // 3. Envoi
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}