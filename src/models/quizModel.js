var database = require("../database/config");
// const { route } = require("../routes/usuarios");

function listarTodos() {
    var query = `SELECT * FROM tentativa_quiz;`;
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function cadastrar(pontuacao, fkUsuario, fkQuiz) {
    var instrucaoSql = `
        INSERT INTO tentativa_quiz (pontuacao, fkUsuario, fkQuiz) VALUES (${pontuacao}, ${fkUsuario}, ${fkQuiz});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarTodos,
    cadastrar
};
