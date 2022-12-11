const escola = "Cod3r"

console.log(escola.charAt(4)) /* Retorna o char na posição 4 */
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) /* Valor unicode ou tabela ASCII */
console.log(escola.indexOf('3')) /* Se existir o valor, ele retorna a posição dele */

console.log(escola.substring(1)) /* Exibe a partir do indice 1 */
console.log(escola.substring(0, 3)) /* Vai do indice 0 e exibe 3 caracteres */

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) /* Troca o indice 3 pela letra e */
console.log(escola.replace(/\d/, 'e')) /* Substitui todos os digitos no texto pela letra e */
console.log(escola.replace(/\w/g, 'e')) /* Substitui todas as letras e digitos no texto pela letra e */

console.log('Ana,Maria,Pedro'.split(','))