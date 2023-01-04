const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// 1 maneira
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// 2 maneira
aprovados.forEach(nome => console.log(nome))

// 3 maneira
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)