// forma literal
function fun1() {}

// fnction dentro de uma variavel
const func2 = function() {}

// function dentro de um array
const array = [function(a,b) { return a + b }]
console.log(array[0](2,3))

// function dentro de um objeto
const obj = {}
obj.falar = function() {return 'Oi'}
console.log(obj.falar())

// function passando como parametro
function run(fun) {
    fun()
}

run (function() {console.log('Executando')})

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)