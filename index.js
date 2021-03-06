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

    // Verifica se a chave 'mensagem' está presente no objeto JSON da requisição (enviado no corpo da requisição)
    if (!mensagem) {
        res.status(400).send(
            "Chave 'mensagem' não encontrada no objeto JSON da requisição."
        );

        return;
    }

    const id = mensagens.push(mensagem);

    // const id = mensagens.length;

    res.status(201).send(`Mensagem com ID '${id}' criada com sucesso.`);
});

// Read All (Ler todas as mensagens)
app.get("/mensagens", function (req, res) {
    res.send(mensagens.filter(Boolean));
});

// Read Single (Ler apenas uma mensagem)
app.get("/mensagens/:id", function (req, res) {
    const id = req.params.id - 1;

    const mensagem = mensagens[id];

    if (!mensagem) {
        res.status(404).send("Mensagem não encontrada.");

        return;
    }

    res.send({ mensagem });
});

// Update (Editar uma mensagem)
app.put("/mensagens/:id", function (req, res) {
    const id = req.params.id - 1;

    // Verifica se o ID que está sendo editado existe na lista de mensagens
    if (!mensagens[id]) {
        res.status(404).send("Mensagem não encontrada.");

        return;
    }

    const mensagem = req.body.mensagem;

    // Verifica se a chave 'mensagem' está presente no objeto JSON da requisição (enviado no corpo da requisição)
    if (!mensagem) {
        res.status(400).send(
            "Chave 'mensagem' não encontrada no objeto JSON da requisição."
        );

        return;
    }

    mensagens[id] = mensagem;

    res.send("Mensagem atualizada com sucesso.");
});

// Delete (Remover uma mensagem)
app.delete("/mensagens/:id", function (req, res) {
    const id = req.params.id - 1;

    // Verifica se o ID que está sendo editado existe na lista de mensagens
    if (!mensagens[id]) {
        res.status(404).send("Mensagem não encontrada.");

        return;
    }

    delete mensagens[id];

    res.send("Mensagem removida com sucesso.");
});

app.listen(3000);
