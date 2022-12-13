let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // o num2-- só é executado depois da comparação, evitar
console.log(num1 === num2)