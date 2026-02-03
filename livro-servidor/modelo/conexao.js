const mongoose = require("mongoose");

const banco = mongoose;

banco.connect("mongodb://localhost:27017/livraria");

module.exports = banco;