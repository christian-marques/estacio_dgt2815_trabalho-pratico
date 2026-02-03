const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao obter livros." });
  }
});

router.post("/", async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ sucesso: true, mensagem: "Livro incluído com sucesso." });
  } catch (err) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao incluir livro." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ sucesso: true, mensagem: "Livro excluído com sucesso." });
  } catch (err) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao excluir livro." });
  }
});

module.exports = router;