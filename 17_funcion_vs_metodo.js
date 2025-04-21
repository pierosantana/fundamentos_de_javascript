// Pasar funcion como argumento -> callback
function a (){
}

function b (a){
}

b(a)

//Retornar funcion como resultado

function a (){
    function b (){}

    return b
}

// Asignar funcion a una variable -> Expresion de funcion
const aa = function (){}

// Tener propiedades y metodos

function a (){}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions
function a (){
    function b (){
        function c (){
          
        }
        c()
    }
    b()
}
a()

// ¿Es posible almacenar funciones en objetos?

const rocket = {
    name: "Falcon 9",
    launchMessage: function (){
        console.log("Lanzando cohete... 🔥")
    }
}

rocket.launchMessage()

// 1.Objeto rectángulo
// Define un objeto literal con propiedades ancho y alto y un método area() que calcule el área.
// Escribe también una función externa calculaArea(obj) que haga lo mismo.

const rectangulo = {
    ancho: 5,
    alto: 10,
    area: function() {
        return this.ancho * this.alto
    }
}

function calculaArea(obj) {
    return obj.ancho * obj.alto
}

console.log(rectangulo.area())
console.log(calculaArea(rectangulo))

// 2.Lista de usuarios
// Crea un array de objetos { nombre, edad } y un método filtrarMayores(minEdad) dentro de un objeto usuarios que devuelva sólo los que cumplen la edad.
// Crea además una función global filtrarPorEdad(arr, minEdad).


const usuarios = {
    arrayObj: [
        { nombre: "Mario", edad: 25 },
        { nombre: "Mar", edad: 30 },
        { nombre: "Maria", edad: 18 },
        { nombre: "Manolo", edad: 22}
    ],
    filtrarMayores: function(minEdad) {
        return this.arrayObj.filter(usuario => usuario.edad >= minEdad)
    }
}


function filtrarPorEdad(arr, minEdad) {
    return arr.filter(usuario => usuario.edad >= minEdad)
}

console.log(usuarios.filtrarMayores(20))
console.log(filtrarPorEdad(usuarios.arrayObj, 20))