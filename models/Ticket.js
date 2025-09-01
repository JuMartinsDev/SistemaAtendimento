const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  identificadorPessoa: { type: String, required: true },
  titulo: { type: String, required: true },
  telefone: { type: String, required: true },
  status: { type: String, default: 'aberto' },
  dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
