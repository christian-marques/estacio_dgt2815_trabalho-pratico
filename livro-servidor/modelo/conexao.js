const mongoose = require("mongoose");

const banco = mongoose;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect("mongodb://localhost:27017/livraria", options);

module.exports = banco;