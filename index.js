import express from "express";

const host = "0.0.0.0";
const port = 3000;

const app = express();

function paginaInicial(req, res){
    res.send(`<h1>Seja bem vindo!</h1>
                   <br/>
                   <h2>Primeiros passos para desenvolvimento de aplicação web com NodeJs</h2>
                   <h3>Pagina Inicial</h3>
        `);
}

app.get("/", paginaInicial);

function mostrarSobre(req, res){
    res.write(`<html>`);
    res.write(`<head>
                    <meta charset="UTF-8">
                    <title>Sobre</title>
              </head>
              <body>`);
    res.write(`<h1>Sobre mim</h1>`);
    res.write(`<p>Sou um garoto com um sonho.</p>`);
    res.write(`<p>Estou me esforçando sempre que posso</p>`);
    res.write(`<p>Estou orgulhoso de mim mesmo</p>`);
    res.write(`<p>Só que não kkk</p>`);
    res.write(`</body>`);
    res.write(`<html>`);
    res.end();
}
app.get("/sobre", mostrarSobre);

function depositar(req, res){
    const valor = req.query.valor;
    if(valor) {
        res.write(`<html>
                   <head>
                       <meta charset="UTF-8">
                       <title>Depósito realizado!</title>
                   </head>
                   <body>
                        <h1>Depósito realizado!</h1>
                        <h1>Valor Depositado: R$ ${valor}</h1>
                        <h1>Obrigado!</h1>
                    </body>
                    </html>`)
        res.end();
    }
    else{
        res.write(`<html>`);
        res.write(`<head>
                        <meta charset="UTF-8">
                        <title>Erro no Deposito</title>
                  </head>`);
        res.write(`<body>`);
        res.write("<h1>É necessário informar o valor a ser depositado!</h1>")
        res.write("Exemplo: http://localhost:3000/depositar?valor=10");
        res.write(`</body>`);
        res.write(`<html>`);
        res.end();
    }
}

app.get("/depositar", depositar)

function contar(req, res){
    const inicio = parseInt(req.query.inicio);
    const fim = parseInt(req.query.fim);

    if(inicio > 0 && fim > 0 && inicio < fim){
        res.write("<p>Contando...</p>")
        res.write("<ul>");
        for(let i = inicio; i <= fim; i++){
            res.write(`<li>${i}</li>`)
        }
        res.write("</ul>");
        res.end();
    }
    else{
        res.write("<p>Informa direito o inicio e o fim seu animal</p>");
        res.write("<p>Exemplo: http://localhost:3000/contar?inicio=1&fim=10</p>")
    }
    
}

app.get("/contar", contar)

app.get("/tab", tab);

app.listen(port, host, () => {
    console.log("Servidor em execução http://" + host + ":" + port);
});