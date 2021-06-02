const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", function (req, res) {
    res.send("Hello, World!");
});

const mensagens = ["Essa é a primeira mensagem", "Essa é a segunda mensagem"];
//                            0                               1

// Create (Criar uma mensagem)
app.post("/mensagens", function (req, res) {
    const mensagem = req.body.mensagem;

    const id = mensagens.push(mensagem);

    // const id = mensagens.length;

    res.send(`Mensagem com ID '${id}' criada com sucesso.`);
});

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

// Update (Editar uma mensagem)

// Delete (Remover uma mensagem)
app.delete("/mensagens/:id", function (req, res) {
    const id = req.params.id - 1;

    delete mensagens[id];

    res.send("Mensagem removida com sucesso.");
});

app.listen(3000);
