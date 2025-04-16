// prompt-sync es una librería que permite leer la entrada del usuario en la consola
// Se debe instalar la librería prompt-sync para que funcione
const prompt = require('prompt-sync')();

// Juego de adivinanza de números
const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(
    prompt('Adivina el número secreto entre 1 y 10: ')
)

console.log(`Este es el número con el que juegas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log('!Felicidades! Adivinaste el número secreto!')
}else if(numeroJugador < numeroSecreto){
    console.log('El número secreto es mayor')
}else {
    console.log('El número secreto es menor')
}
