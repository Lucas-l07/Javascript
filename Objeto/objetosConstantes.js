// pessoa -> endereço de memória = 123 -> {objeto}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {Objeto} 
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // não altera o objeto, pois está congelado kk

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)