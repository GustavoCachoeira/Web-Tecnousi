const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou outro serviço
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Modelação App" <${process.env.NODEMAILER_EMAIL}>`,
      to,
      subject,
      text,
    });
    console.log('Email enviado para:', to);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
};

module.exports = sendEmail;