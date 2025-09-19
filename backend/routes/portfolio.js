const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth');
const upload = require('../config/multer');

const router = express.Router();
const prisma = new PrismaClient();

// Criar item de portfólio (admin)
const { upload, handleMulterError } = require('../config/multer');
router.post('/', authMiddleware, adminMiddleware, upload.single('image'), handleMulterError, async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !req.file) {
      return res.status(400).json({ error: 'Título e imagem são obrigatórios' });
    }
    const imagePath = req.file.path;

    const item = await prisma.portfolioItem.create({
      data: { title, description, imagePath },
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar item de portfólio' });
  }
});

// Listar itens de portfólio (público)
router.get('/', async (req, res) => {
  try {
    const items = await prisma.portfolioItem.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar portfólio' });
  }
});

module.exports = router;