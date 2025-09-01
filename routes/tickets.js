const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Criar
router.post('/', async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.status(201).json(ticket);
});

// Listar
router.get('/', async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

// Atualizar
router.put('/:id', async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(ticket);
});

// Deletar
router.delete('/:id', async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: 'Ticket removido' });
});

module.exports = router;
