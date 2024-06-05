var quizModel = require("../models/quizModel");

function listarTodos(req, res) {
    quizModel.listarTodos()
        .then(
            function (resposta) {
                console.log(`\nResultados encontrados: ${resposta.length}`);
                console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String
                    console.log(resposta);
                    res.json({
                        resposta
                        /*talvez esteja errado*/
                    })
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}

function cadastrar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;

        quizModel.cadastrar(pontuacao, fkUsuario, fkQuiz)
            .then(
                (resultado) => {
                    res.json(resultado);
                }
            ).catch(
                (erro) => {
                    console.log(erro);
                    console.log('\nErro ao cadastrar. Erro: ', erro.sqlMessage);
                    
                }
            )

    }

module.exports = {
    listarTodos,
    cadastrar
}