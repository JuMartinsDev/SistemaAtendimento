const mongoose = require('mongoose');

const atendenteSchema = new mongoose.Schema({
  identificadorPessoa: { type: String, required: true },
  departamentoId: { type: String, required: true },
  setorId: { type: String, required: true }
});

module.exports = mongoose.model('Atendente', atendenteSchema);
