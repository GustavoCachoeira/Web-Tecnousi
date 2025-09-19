const express = require('express');
const { PrismaClient } = require('@prisma/client');
const sendEmail = require('../config/nodemailer');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, message },
    });

    // Enviar email para o admin
    await sendEmail(
      process.env.NODEMAILER_EMAIL,
      'Nova Mensagem de Contato',
      `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    );

    res.status(201).json(contactMessage);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar mensagem' });
  }
});

module.exports = router;