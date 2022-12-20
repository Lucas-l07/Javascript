// Factory simples. Factory function quer dizer que retorna um objeto. Fábrica lembra "fabricar um objeto" kk
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())