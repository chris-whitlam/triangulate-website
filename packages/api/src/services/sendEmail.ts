import { createTransport } from "nodemailer";
import { getConfig } from "../config";
import { ContactFormInput } from "../types";

const sendEmail = async ({ name, email, message }: ContactFormInput) => {
  const {
    emailHost,
    emailPort,
    emailUsername,
    emailPassword,
    emailSenderAddress,
    emailRecieverAddress,
  } = getConfig();

  const transporter = createTransport({
    host: emailHost,
    port: emailPort,
    secure: true,
    auth: {
      user: emailUsername,
      pass: emailPassword,
    },
  });

  await transporter.verify();

  try {
    await transporter.sendMail({
      from: emailSenderAddress,
      to: emailRecieverAddress,
      subject: `Contact Request from ${name}`,
      html: `
          <p>${message}</p>
          <p>Message from ${name}</p>
          <p>${email}</p>
          `,
    });
  } finally {
    transporter.close();
  }
};

export default sendEmail;
