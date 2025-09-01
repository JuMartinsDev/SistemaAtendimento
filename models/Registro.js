const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  textoHistorico: { type: String, required: true },
  atendenteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Atendente', required: true },
  motivo: { type: String, enum: ['reclamacao','solicitacao_documento','outro'], required: true },
  dataRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registro', registroSchema);
