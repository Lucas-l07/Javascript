function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do { // executa 1 vez e só depois verifica a condição while
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima!')

let opcao2

do { // não é necessário atribuir valor inicial na "opcao2"
    opcao2 = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao2}`)
} while (opcao2 != -1)