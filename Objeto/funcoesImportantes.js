const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // passiva a ser listada/vista?
    writable: false, // vai aceitar ser modificada?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAscript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 2, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena os atributos de o1 e o2 no objeto destino
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)