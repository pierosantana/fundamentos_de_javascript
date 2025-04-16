/*

for in -> object

property -> value

item

for (let item in array) {
    // code to be executed
}
*/

const listaDeCompras = {
    manzana: 4,
    naranja: 3,
    platano: 2,
    mango: 5,
    papaya: 6
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}