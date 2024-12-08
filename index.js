import express from "express";

const host = "0.0.0.0";
const port = 3000;

const app = express();

function paginaInicial(req, res){ //t
    resposta.send(`<h1>Seja bem vindo!</h1>
                   <br/>
                   <h2>Primeiros passos para desenvolvimento de aplicação web com NodeJs</h2>
                   <h3>Pagina Inicial</h3>
        `);
}

app.get("/", paginaInicial);

app.listen(port, host, () => {
    console.log("Servidor em execução http://" + host + ":" + port);
});