const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.json({
        nome: 'Jade Paiva',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQG9L1OXdZP4UQ/profile-displayphoto-shrink_200_200/0/1715739749639?e=1722470400&v=beta&t=wS2rW1xMJSRRkFhJgfQBM2pRNSo87_2xwcJsE6G2VL4',
        minibio: 'desenvolvedora back-end'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta) 