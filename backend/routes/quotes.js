const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth');
const upload = require('../config/multer');
const sendEmail = require('../config/nodemailer');

const router = express.Router();
const prisma = new PrismaClient();

// Criar solicitação de orçamento
router.post('/', authMiddleware, upload.array('files', 5), handleMulterError, async (req, res) => {
  try {
    const { service, description } = req.body;
    if (!service) {
      return res.status(400).json({ error: 'Serviço é obrigatório' });
    }
    const filePaths = req.files.map(file => file.path);

    const quote = await prisma.quoteRequest.create({
      data: {
        userId: req.user.id,
        service,
        description,
        filePaths,
        status: 'pendente',
      },
    });

    // Enviar email para o usuário
    await sendEmail(
      req.user.email,
      'Nova Solicitação de Orçamento',
      `Sua solicitação de orçamento para ${service} foi recebida e está pendente.`
    );

    res.status(201).json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar solicitação' });
  }
});

// Listar todas as solicitações (admin)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      include: { user: { select: { email: true, name: true } } },
    });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar solicitações' });
  }
});

// Listar solicitações do usuário logado
router.get('/my-quotes', authMiddleware, async (req, res) => {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      where: { userId: req.user.id },
    });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar suas solicitações' });
  }
});

// Atualizar status da solicitação (admin)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const quote = await prisma.quoteRequest.update({
      where: { id: parseInt(id) },
      data: { status },
      include: { user: { select: { email: true } } },
    });

    // Enviar email notificando o usuário
    await sendEmail(
      quote.user.email,
      'Atualização na Solicitação de Orçamento',
      `Sua solicitação de orçamento foi atualizada para: ${status}.`
    );

    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar solicitação' });
  }
});

module.exports = router;