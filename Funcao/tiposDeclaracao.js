console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression, pouco usada. Benefício: exibe no stacktrace (erro) o nome da função
const mult = function mult(x, y) {
    return x * y
}