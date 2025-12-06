const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth');
const { upload, handleMulterError } = require('../config/multer');
const sendEmail = require('../config/nodemailer');

const router = express.Router();
const prisma = new PrismaClient();

// Criar solicitação de orçamento
router.post('/', authMiddleware, upload.array('files', 5), handleMulterError, async (req, res) => {
  try {
    console.log('Recebendo solicitação de orçamento:', req.body, req.files);
    const { service, description } = req.body;
    if (!service) {
      console.log('Erro: Serviço não fornecido');
      return res.status(400).json({ error: 'Serviço é obrigatório' });
    }
    const filePaths = req.files ? req.files.map(file => file.path) : [];

    const quote = await prisma.quoteRequest.create({
      data: {
        userId: req.user.id,
        service,
        description,
        filePaths,
        status: 'pendente',
      },
    });
    console.log('Solicitação criada:', quote);

    try {
      await sendEmail(
        req.user.email,
        'Nova Solicitação de Orçamento',
        `Sua solicitação de orçamento para ${service} foi recebida e está pendente.`
      );
      console.log('Email enviado para:', req.user.email);
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
    }

    res.status(201).json(quote);
  } catch (error) {
    console.error('Erro ao criar solicitação:', error);
    res.status(500).json({ error: 'Erro ao criar solicitação' });
  }
});

// Listar solicitações do usuário
router.get('/my-quotes', authMiddleware, async (req, res) => {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      where: { userId: req.user.id },
    });
    res.json(quotes);
  } catch (error) {
    console.error('Erro ao listar solicitações:', error);
    res.status(500).json({ error: 'Erro ao listar solicitações' });
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
    console.error('Erro ao listar solicitações:', error);
    res.status(500).json({ error: 'Erro ao listar solicitações' });
  }
});

// Atualizar status da solicitação (admin)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    console.log('Atualizando status:', req.params.id, req.body);
    const { id } = req.params;
    const { status } = req.body;
    if (!['pendente', 'em análise', 'aprovado', 'rejeitado'].includes(status)) {
      console.log('Erro: Status inválido:', status);
      return res.status(400).json({ error: 'Status inválido' });
    }

    const quote = await prisma.quoteRequest.update({
      where: { id: parseInt(id) },
      data: { status },
      include: { user: { select: { email: true } } },
    });
    console.log('Solicitação atualizada:', quote);

    try {
      await sendEmail(
        quote.user.email,
        'Atualização de Solicitação de Orçamento',
        `Sua solicitação de orçamento para ${quote.service} foi atualizada para: ${status}.`
      );
      console.log('Email enviado para:', quote.user.email);
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
    }

    res.json(quote);
  } catch (error) {
    console.error('Erro ao atualizar solicitação:', error);
    res.status(500).json({ error: 'Erro ao atualizar solicitação' });
  }
});

module.exports = router;