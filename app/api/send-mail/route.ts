import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body || {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = `
      <h2>New Contact Form Submission - Ai Interior</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const info = await transporter.sendMail({
      from: `"Ai Interior Contact" <${email}>`,
      to: process.env.GMAIL_USER || `supportappnaya@gmail.com`,
      replyTo: email,
      subject: `New Message from ${firstName} ${lastName}: ${subject || "No Subject"}`,
      html,
    });

    return NextResponse.json({
      message: "Email sent successfully",
      id: info.messageId,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    console.error("MAIL_ERROR:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
