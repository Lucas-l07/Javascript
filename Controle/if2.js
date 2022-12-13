function teste1(num) {
    if (num > 7) 
        console.log(num)
        console.log('Final') // vai ser sempre executada
}

// teste1(6)
// teste1(8)

function teste2(num) {
    if (num > 7); { // cuidado com o ';', pois delimita o fim do if, o resto é apenas um bloco separado
        console.log(num)
    }
}

teste2(6)
teste2(8)