const greeting = function (name) {
  return `Hello, ${name}!`
}
// Arrow function with explicit return
const greetingArrow = (name) => {
    return `Hello, ${name}!`
    }

// Arrow function with implicit return
const greetingImplicit = name => `Hello, ${name}!`
const greetingImplicitWith2Params = (name, age) => `Hello, ${name}! You are ${age} years old!`

// Lexical Binding

const character = {
    name : 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: "${message}"}`)  
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: "${message}"`)
    }
}

character.messageWithTraditionalFunction('With great power comes great responsibility!')
character.messageWithArrowFunction('Beware of the green goblin!')

function Timer() {
    this.segundos = 0;
    
    this.fin = 3;
  
    setInterval(() => {
      this.segundos++;
      console.log(this.segundos);

    }, 1000);
  }

  
  // new Timer();

//1. Reescríbela en versión flecha, primero en varias líneas y luego en forma ultra‑concisa.
  function doble(x) { return x * 2; }

  const doblarValor = (x) => {
    const resultado = x * 2
    return resultado
  }

  const doblarValorConciso = x => x * 2
  console.log(doble(5)) // 10;
  console.log(doblarValor(5)) // 10;
  console.log(doblarValorConciso(5)) // 10;


	// 2.	Lexical this
	// •	Crea un objeto con método tradicional que dentro llame a una función interna 
  // como callback de setTimeout, y observa el valor de this.
  const persona = {
    nombre: 'María',
    saludar: function() {
      console.log('En método saludar, this.nombre =', this.nombre);
  
      setTimeout(function() {
        // Dentro de esta función tradicional, `this` ya **no** apunta a `persona`
        console.log('Dentro de callback tradicional, this.nombre =', this.nombre);
      }, 1000);
    }
  };
  
  persona.saludar();
  // Salida esperada:
  // En método saludar, this.nombre = María
  // (1s después) Dentro de callback tradicional, this.nombre = undefined


	// •	Vuelve a implementarlo usando arrow function para que this apunte al objeto.
  const persona2 = {
    nombre: 'María',
    saludar: function() {
      console.log('En método saludar, this.nombre =', this.nombre);
  
      setTimeout(() => {
        // La arrow function no crea su propio this,
        // hereda el `this` del contexto exterior (el método saludar)
        console.log('Dentro de callback flecha, this.nombre =', this.nombre);
      }, 1000);
    }
  };
  
  persona2.saludar();
  // Salida esperada:
  // En método saludar, this.nombre = María
  // (1s después) Dentro de callback flecha, this.nombre = María

