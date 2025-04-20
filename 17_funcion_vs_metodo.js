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