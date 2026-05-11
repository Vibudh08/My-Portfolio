import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const projectType = payload.projectType?.trim() || "Portfolio contact";
    const message = payload.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ message: "Email service is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch {
    return NextResponse.json({ message: "Unable to send message right now." }, { status: 500 });
  }
}
