// IIFE -> Immediately Invoked Function Expression
// Para fugir do escopo global, roda no momento da leitura

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()