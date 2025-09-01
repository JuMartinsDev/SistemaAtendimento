const express = require('express');
const router = express.Router();
const Registro = require('../models/Registro');

// Criar registro
router.post('/', async (req, res) => {
  const registro = new Registro(req.body);
  await registro.save();
  res.status(201).json(registro);
});

// Listar registros
router.get('/', async (req, res) => {
  const registros = await Registro.find().populate('ticketId').populate('atendenteId');
  res.json(registros);
});

// Atualizar registro
router.put('/:id', async (req, res) => {
  const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(registro);
});

// Deletar registro
router.delete('/:id', async (req, res) => {
  await Registro.findByIdAndDelete(req.params.id);
  res.json({ message: 'Registro removido' });
});

module.exports = router;
