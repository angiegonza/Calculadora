/*function suma(a,b) {
    return a+b;  
}
function resta(a,b) {
    return a-b;
}
function multiplicacion(a,b) {
    return a*b
}
function division(a,b) {
    return a/b
}
console.log(division(5,5)) */ 
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior,displayValorActual)

//comenzamos a escuchar si dan click en algun boton
botonesNumeros.forEach(boton => {
    // con display.agregarNumero agragamos el texto del boton en el que den click
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});