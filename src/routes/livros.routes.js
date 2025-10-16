const express = require("express");
const router = express.Router();


const LivrosController = require("../controllers/livros.controller");
const livrosController = new LivrosController();


const { validarLivro, validarParamId } = require("../middlewares/validar/livros.validar");

router.get("/", (req, res, next) => 
    livrosController.listarLivros(req, res, next)
);

router.get("/:id", validarParamId, (req, res, next) => 
    livrosController.buscarLivroPorId(req, res, next)
);

router.post("/", validarLivro, (req, res, next) => 
    livrosController.criarLivro(req, res, next)
);

router.put("/:id", validarParamId, validarLivro, (req, res, next) => 
    livrosController.atualizarLivro(req, res, next)
);

router.delete("/:id", validarParamId, (req, res, next) => 
    livrosController.removerLivro(req, res, next)
);

module.exports = router;