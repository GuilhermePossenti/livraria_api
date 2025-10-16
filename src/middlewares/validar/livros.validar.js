const validarLivro = (req, res, next) => {
    const { titulo, autor, categoria, ano } = req.body;
    const erros = [];
    
    if (!titulo?.trim()) erros.push("Título é obrigatório");
    if (!autor?.trim()) erros.push("Autor é obrigatório");
    if (!categoria?.trim()) erros.push("Categoria é obrigatória");
    if (!ano || isNaN(parseInt(ano))) erros.push("Ano deve ser um número válido");
    
    if (erros.length > 0) {
        return res.status(400).json({
            erro: "Dados inválidos",
            detalhes: erros
        });
    }
    
    next();
};

const validarParamId = (req, res, next) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).json({
            erro: "ID deve ser um número válido"
        });
    }
    
    next();
};

module.exports = { validarLivro, validarParamId };