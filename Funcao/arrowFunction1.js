let dobro = function (a) {
    return 2 * a
}

// outra maneira de escrever
dobro = (a) => {
    return 2 * a
}

// se houver apenas 1 parâmetro é possível remover os parênteses
// o que fica depois de "=>" é o retorno, que está implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

// forma padrão
ola = () => 'Olá'

// outra maneira de escrever quando não tem parâmetro
ola = _ => 'Olá'
console.log(ola())