const funcs = []
for (let i = 0; i < 10; i++) {
    // cada elemento do array vira uma função que imprime um valor na tela
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()