import nodemailer from "nodemailer";
import { getEnv } from "../tools/env";
import { User } from "../models/user-model";

const transporter = nodemailer.createTransport({
  host: getEnv("SMTP_HOST"),
  port: +getEnv("SMTP_PORT"),
  secure: false,
  auth: {
    user: getEnv("SMTP_USER"),
    pass: getEnv("SMTP_PASS"),
  },
});

export const MailService = {
  async sendActivation(to: string, link: string) {
    await transporter.sendMail({
      from: getEnv("SMTP_USER"),
      to: to,
      subject: `Активация бесплатного аккаунта на ${getEnv("SERVICE_URL")}`,
      text: "",
      html: `<h1>Для активации аккаунта перейдите по ссылке:</h1>
      <a href="${link}" style="font-size:22px;text-decoration:none;color:black">Активировать аккаунт</a>`   
    });
  }
};
