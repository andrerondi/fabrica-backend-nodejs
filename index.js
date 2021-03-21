const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('hello World');
});

const mensagens = [
    {
        "id": 1,
        "texto": "Essa é a primeira mensagem"
    },
    {
        "id": 2,
        "texto": "Essa é a segunda mensagem"
    }
];

app.get('/mensagens', (req, res) => {
    res.send(mensagens.filter(Boolean));
});

app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;
    const mensagem = mensagens[id];
    if (!mensagem) {
        res.send('Mensagem não encontrada.');
        return;
    }
    res.send(mensagem);
});

app.post('/mensagens', (req, res) => {
    const mensagem = req.body;
    if (!mensagem || !mensagem.texto) {
        res.send('Mensagem inválida.');
        return;
    }
    mensagem.id = mensagens.length + 1;
    mensagens.push(mensagem);
    res.send(mensagem);
});

app.put('/mensagens/:id', (req, res) => {
    const id = req.params.id -1;
    const mensagem = mensagens[id];
    const novoTexto = req.body.texto;
    if (!novoTexto) {
        res.send('Mensagem inválida.');
        return;
    }
    mensagem.texto = novoTexto;
    res.send(mensagem);
});

app.delete('/mensagens/:id', (req, res) => {
    const id = req.params.id -1;
    delete mensagens[id];
    res.send('Mensagem removida com sucesso.');
});
/*
Lista de endpoints da aplicação CRUD de mensagens
CRUD: Create, Read (Single & All), Update and Delete

- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
-[DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
*/

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});