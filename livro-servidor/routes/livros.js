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
    console.error('Erro incluir /livros:', err);
    res.status(500).json({ sucesso: false, mensagem: "Erro ao incluir livro." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const codigo = req.params.id;
    console.log('DELETE /livros id=', codigo);
    const resultado = await excluir(codigo);
    console.log('Resultado delete:', resultado);
    if (resultado && resultado.deletedCount === 1) {
      res.json({ sucesso: true, mensagem: "Livro excluído com sucesso." });
    } else {
      res.status(404).json({ sucesso: false, mensagem: "Livro não encontrado." });
    }
  } catch (err) {
    console.error('Erro ao processar DELETE /livros/:id', err);
    res.status(500).json({ sucesso: false, mensagem: "Erro ao excluir livro." });
  }
});

module.exports = router;