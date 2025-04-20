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
    this.segundos = 0;ç
    
    this.fin = 3;
  
    setInterval(() => {
      this.segundos++;
      console.log(this.segundos);

    }, 1000);
  }

  
  new Timer();

