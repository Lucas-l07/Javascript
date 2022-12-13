const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // interrompe o for/while mais próximo
    } 
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // interrompe quando o y é igual a 5 e continua o laço
    }
    console.log(`x = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // interrompe o laço externo
        console.log(`Par = ${a},${b}`)
    }
}