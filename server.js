require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const ticketsRouter = require('./routes/tickets');
const atendentesRouter = require('./routes/atendentes');
const registrosRouter = require('./routes/registros');

const app = express();
app.use(express.json());

const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/${process.env.MONGO_DB}?authSource=admin`;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log('Erro ao conectar MongoDB:', err));

app.use('/tickets', ticketsRouter);
app.use('/atendentes', atendentesRouter);
app.use('/registros', registrosRouter);

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));
