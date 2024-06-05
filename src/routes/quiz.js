var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// lambda function
router.post("/cadastrar-tentativa", (req, res)=>{
    quizController.cadastrar(req, res);
});

router.post("/listar-tentativas", (req, res)=>{
    quizController.listarTodos(req, res);
});

module.exports = router;