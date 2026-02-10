const banco = require("./conexao");
const Livro = require("./livro-schema");

const obterLivros = async () => {
  return await Livro.find();
};

const incluir = async (livro) => {
  return await Livro.create(livro);
};

const excluir = async (codigo) => {
  try {
    if (!banco.Types.ObjectId.isValid(codigo)) {
      console.warn('ID inválido recebido para exclusão:', codigo);
      return { deletedCount: 0 };
    }
    const objId = banco.Types.ObjectId(codigo);
    const resultado = await Livro.deleteOne({ _id: objId });
    return resultado;
  } catch (e) {
    console.error('Erro excluir livro no DAO:', e);
    throw e;
  }
};

module.exports = { obterLivros, incluir, excluir };