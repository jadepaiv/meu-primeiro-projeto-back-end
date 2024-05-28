const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Jade',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQG9L1OXdZP4UQ/profile-displayphoto-shrink_200_200/0/1715739749639?e=1722470400&v=beta&t=wS2rW1xMJSRRkFhJgfQBM2pRNSo87_2xwcJsE6G2VL4',
        minibio: 'desenvolvedora back-end'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },
    {
        nome: 'Nina da hora',
        imagem: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3j5q4clIqTrscK-Mzy5vkK6M8AQNwUQewhhqpSHITV0CbQesVlS26NZ9Qq9aEuPMoluCh',
        minibio: 'hacker antiracista'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)