const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
},
{
    nome: 'Iana Chan',
    imagem: 'https://www.projetodraft.com/wp-content/uploads/2020/02/01-face-ianachan.jpg',
    minibio: 'Fundadora da Programaria'
},
{
    nome: 'Nina da Hora',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaT8ccB5vrmztml3toEfdeLl10c3rA9FgV62tm2h9efH5YlznvGsa1DULhNf7gM-tLw1jyoS32z4G36J0JTc1WkA',
    minibio: 'Hacker'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {     
    console.log("Servidor criado e rodando na porta ", porta)
 } 

 app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta) 