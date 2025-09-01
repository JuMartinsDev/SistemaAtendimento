const express = require('express');
const router = express.Router();
const Atendente = require('../models/Atendente');

// Criar atendente
router.post('/', async (req, res) => {
  const atendente = new Atendente(req.body);
  await atendente.save();
  res.status(201).json(atendente);
});

// Listar atendentes
router.get('/', async (req, res) => {
  const atendentes = await Atendente.find();
  res.json(atendentes);
});

// Atualizar atendente
router.put('/:id', async (req, res) => {
  const atendente = await Atendente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atendente);
});

// Deletar atendente
router.delete('/:id', async (req, res) => {
  await Atendente.findByIdAndDelete(req.params.id);
  res.json({ message: 'Atendente removido' });
});

module.exports = router;
