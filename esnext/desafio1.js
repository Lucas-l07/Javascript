const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(erro, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler o arquivo')
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))


