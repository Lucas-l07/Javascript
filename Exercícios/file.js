// 01
const cumprimentar = (nome) => console.log(`Olá, ${nome}!`)
cumprimentar("Lucas")

// 02
const converterIdadeEmAnosParaDias = (idade) => console.log(idade * 365)
converterIdadeEmAnosParaDias(25)

// 03
const calcularSalario = (horasTrabalhadas, recebePorHora) => console.log(`Salário igual a R$ ${Math.ceil((horasTrabalhadas * recebePorHora) * 30/100)}`)
calcularSalario(180, 60)

// 04
const nomeDoMes = (mes) => console.log(new Date(0001, mes-1, 01).toLocaleString('default', {month: 'long'}))
nomeDoMes(1)

// 05
const maiorOuIgual = (num1, num2) => console.log(typeof num1 == typeof num2 && num1 >= num2)
maiorOuIgual(0, 0)
maiorOuIgual(0, '0')
maiorOuIgual(5, 1)

// 06
const inverso = function(boolOrNumeric) {
    if(typeof boolOrNumeric == 'boolean') {
        console.log(!boolOrNumeric)
    } else if(typeof boolOrNumeric == 'number') {
        console.log(boolOrNumeric * -1)
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof boolOrNumeric}`)
    }
}

inverso(true)
inverso(false)
inverso(6)
inverso("2000")

// 07
const estaEntre = function(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return console.log(numero >= minimo && numero <= maximo)
    } else {
        return console.log(numero > minimo && numero < maximo)
    }
}

estaEntre(3, 3, 15)
estaEntre(3, 3, 15, true)

// 08
const multiplicar = function(num1, num2) {
    let contador = 0
    for(let i = 0; i < num2; i++){
        contador += num1
    }
    return console.log(contador)
}

multiplicar(5, 5)
multiplicar(0, 7)

// 09
const repetir = function(repetir, quantidade) {
    const array = []
    for (let i = 0; i < quantidade; i++) {
        array.push(repetir)
    }
    return console.log(array)
}

repetir("código", 2)
repetir(7, 3)

// 10
const simboloMais = function(quantidade) {
    return console.log('+'.repeat(quantidade))
}

simboloMais(2)
simboloMais(4)

// 11
const receberPrimeiroEUltimoElemento = function(array) {
    const newArray = []
    newArray.push(array[0], array.at(-1))
    return console.log(newArray)
}

receberPrimeiroEUltimoElemento([7, 14, "olá"])

// 12
const removerPropriedade = function(objeto, propriedade) {
    const copia = objeto
    delete copia[propriedade]
    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))

// 13
const filtrarNumeros = function(array) {
    return array.filter(e => typeof e == 'number')
}

console.log(filtrarNumeros(['Javascript', 1, '3', 'Web', 20]))

// 14
const objetoParaArray = function(objeto) {
    const array = []
    for(let atributo in objeto) {
        array.push([atributo, objeto[atributo]])
    }
    return array
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
}))