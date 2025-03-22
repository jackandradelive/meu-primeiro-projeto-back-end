const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
nome: 'Simara Conceição'
}   
]

function mostraMulheres(request, response) {

}



function mostraPorta () {     
    console.log("Servidor criado e rodando na porta ", porta)
 } 

app.listen(porta, mostraPorta)
