console.log(this === global)
console.log(this === module)

// fora de funções aponta para exports
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // dentro de uma função aponta para o global

}

logThis()

const arrowFunction = () => {
    console.log('Dentro de uma arrow function...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

arrowFunction()