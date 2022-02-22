import nodemailer from "nodemailer";
import { getEnv } from "../tools/env";

const transporter = nodemailer.createTransport({
  host: getEnv("SMTP_HOST"),
  port: +getEnv("SMTP_PORT"),
  secure: false,
  auth: {
    user: getEnv("SMTP_USER"),
    pass: getEnv("SMTP_PASS"),
  },
});

class MailService {
  async sendActivation(to: string, link: string) {
    await transporter.sendMail({
      from: getEnv("SMTP_USER"),
      to: to,
      subject: `[${getEnv("SERVICE_URL")}] Активация бесплатного аккаунта`,
      text: "",
      html: `<div style="margin:0;width:100%;padding:3px;font-family:monospace;background-color:#333;">
      <h1 style="font-size:25px;color:#E6E6E6;margin-inline:5px;display:inline;">Для активации аккаунта перейдите по ссылке:</h1>
      <a href="${link}" style="font-size:25px;text-decoration:none;color:#E6E6E6;margin-inline:5px;display:inline;">Активировать аккаунт</a>
      </div>`
    });
  }
}

export default new MailService();
