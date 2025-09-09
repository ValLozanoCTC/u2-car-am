/*
Programacion Orientada a Objetos - POO

Sintaxis descrita:

1. Palabra reservada "class".
2. El nombre de la clase en PascalCase.
3. Abrir llaves, esto indica que el bloque de codigo dentro de las llaves pertenece a la clase.
4. Metodo constructor, este metodo es el encargado de instanciar un objeto.
5. Pasamos nuestros atributos como parametros al metodo constructor.
6. Dentro del metodo constructor, INICIALIZAMOS nuestros atributos. "this" lo podemos traducir como "esto". Hace referencia al propio objeto.
this.atributo1 = atributo1; -> "OBJETO TOMA COMO ATRIBUTO1 EL VALOR DEL PARAMETRO ATRIBUTO1".

Sintaxis:

class NombreClase {
  constructor(atributo1, atributo2, ...) {
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
    // ... si tienes mas atributos los inicializas
  }

  metodo1() {
    // Codigo del metodo 1...
  }

  metodo2() {
    // Codigo del metodo 2...
  }
}
*/

// Ejemplo
// Crea una clase de persona como lo vimos en el ejemplo grafico

// Definicion de la clase
class Person {
  // Atributos protegidos (encapsulamiento)
  // lo nombro con un # adelante -> #nombreAtributo
  #cellphone;

  // Metodo constructor
  constructor(firstName, lastName, age, height, weight, cellphone) {
    // Inicializamos nuestros atributos
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    // Inicializamos el atributo protegido
    this.#cellphone = cellphone;
  }

  // Metodos personalizados
  sayHello() {
    console.log("Hola a todas, saludo desde el metodo de la clase Person.");
  }

  // Usando atributos
  introduce() {
    return `Hola, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años.`;
  }

  // Exponiendo un atributo protegido
  getCellphone() {
    return this.#cellphone;
  }
}

// Instanciar un objeto, se almacena en una variable
let person1 = new Person("Dominic", "Fernandez", 18, 1.8, 60, "987654321");

// Mostrar ese objeto
console.log(person1);
// Acceder a sus atributos
console.log(person1.lastName);
console.log(person1.weight);

console.log("METODOS");
// Llamada a los metodos
person1.sayHello();
console.log(person1.introduce());

console.log("ENCAPSULAMIENTO");
// Intentamos acceder al atributo protegido
// console.log(person1.cellphone);  // undefined
// console.log(person1.#cellphone);  // error
console.log(person1.getCellphone());

console.log("HERENCIA");
// Aplicamos herencia con la palabra reservada "extends". La clase Padre le hereda todos sus atributos y metodos a la clase Hija
class Chef extends Person {
  // Agregar nuevos atributos a la clase Chef
  // Agregamos el constructor y como parametros pasamos TODOS los atributos de la clase Padre EN ORDEN y luego agregamos nuestros nuevos atributos
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    // Inicializar la clase Padre, esto se hace con el metodo especial super()
    super(firstName, lastName, age, height, weight, cellphone);
    // Inicializo mis nuevos atributos
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  // Polimorfismo -> Un metodo se comporta de diferente manera dependiendo de la clase que lo llame.
  introduce() {
    return `Hola, me llamo ${this.firstName} ${this.lastName} y soy chef en el restaurante ${this.restaurant}.`;
  }

  // Nuevo metodo de la clase Chef
  cook() {
    console.log("El chef esta cocinando...");
  }
}

// Instanciamos una clase heredada
let chef1 = new Chef(
  "Alfredo",
  "Linguini",
  18,
  1.8,
  60,
  "987654321",
  "Gusteau",
  "Lasagna"
);

console.log(chef1);
console.log(chef1.lastName);
// Accedemos a los nuevos atributos
console.log(chef1.favoriteFood);
chef1.cook();

// POLIMORFISMO
console.log("POLIMORFISMO");
console.log(chef1.introduce());
console.log(person1.introduce());
