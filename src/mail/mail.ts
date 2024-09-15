import { newsletterWelcomeTemplate } from "./templates/newsletterWelcome";
import Handlebars from "handlebars";
import nodemailer from "nodemailer";
import { contactTemplate } from "./templates/contact";

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const { SENDGRID_API_KEY, MAIL_DEFAULT_SENDER } = process.env;
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: SENDGRID_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: MAIL_DEFAULT_SENDER,
      to,
      subject,
      text: body,
      html: body,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email: ", error.message);
    }
    console.error("Error sending email: ", error);
  }
}

export function compileNewsletterWelcomeTemplate() {
  const template = Handlebars.compile(newsletterWelcomeTemplate);
  const htmlBody = template({});
  return htmlBody;
}

export function compileContactFormTemplate(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  const template = Handlebars.compile(contactTemplate);
  const htmlBody = template({
    name,
    email,
    phone,
    message,
  });

  return htmlBody;
}
