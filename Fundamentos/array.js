const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[4] = 10
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') /* Adiciona os valores no array */
console.log(valores)

console.log(valores.pop()) /* Pega o último valor do array e retira/deleta */
delete valores[0]
console.log(valores)

console.log(typeof valores)