const express = require("express")
const path = require("path")


const app = express()
const caminhoBase = path.join(__dirname, "templates")

app.post('/cadastrar/salvar', (requisicao,resposta)=> {

})

app.get('/cadastrar', (requisicao,resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get('/usuarios/:id', (requisicao, resposta) => {

    const id = requisicao.params.id
    console.log(`Acessando dados do usuário ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao,resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})