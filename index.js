const express = require("express");
const app = express();

app.get("/hello", function (req, res) {
    res.send("Hello, World!");
});

const mensagens = ["Essa é a primeira mensagem", "Essa é a segunda mensagem"];
//                            0                               1

// Read All (Ler todas as mensagens)
app.get("/mensagens", function (req, res) {
    res.send(mensagens);
});

// Read Single (Ler apenas uma mensagem)
app.get("/mensagens/:id", function (req, res) {
    const id = req.params.id - 1;

    const mensagem = mensagens[id];

    res.send({ mensagem });
});

app.listen(3000);
