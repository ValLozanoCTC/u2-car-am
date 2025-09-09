/*
Arreglos -> Son una estructura de datos. Llamamos estrctura de datos a un tipo de dato especial que me permite almacenar una coleccion de datos.

Los arreglos (arrays) pueden almacenar elementos de distinto de dato. Ordenados, indexables e iterable.

Sintaxis:

let nombreArray = [132, 145.67, "a", true, 12];

Los elementos van dentro de corchetes y son separados por comas.
*/
// Ejemplo 1
// Crea un arreglo que almacene los dias de la semana. Empezando en Lunes.
let daysOfWeek = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

// console.log(daysOfWeek);

// Accediendo al primer elemento
// console.log(daysOfWeek[0]);
// Ultimo elemento
// console.log(daysOfWeek[daysOfWeek.length - 1]);

// Ejemplo 2
// Crear un arreglo que almacene los numeros del 1 al 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);

// Reto 1
// Crear un arreglo que almacene frutas. Minimo 5 elementos
let fruits = ["platano", "manzana", "pera", "naranja", "arandano"];

// Reto 2
// Crear un arreglo que almacene los numeros del -5 al -13
let negativeNumbers = [-5, -6, -7, -8, -9, -10, -11, 12, -13];

// =================================

let num = 1;
// console.log(num);

// Variable num, tu nuevo valor sera tu valor actual + 1
// Aumentamos el valor de la variable en 1
num = num + 1;
// console.log(num);

// num = num + 1; Se puede escribir de una manera distinta
num += 1;
// console.log(num);

// Podemos reducir las operaciones de suma y resta cuando el valor es 1

// Al valor anterior de num, le sumamos 1
// Operador de incremento
num++;
// console.log(num);
// Operador de decremento
num--;
// console.log(num);

// =================================
/*
BUCLES

for -> Bucle finito.

Sintaxis:

for (expresion inicial; expresion condicional; expresion de actualizacion) {
    // Codigo a repetir
}

Expresion inicial -> Indica el valor inicial de mi variable (iterador).
Expresion condicional -> Es la expresion que sera evaluada para ver si se sigue ejecutando el bucle.
Expresion de actualizacion -> Es la forma en la que el iterador se va a actualizar.
*/
// Ejemplo 1

for (let i = 11; i < 100; i += 11) {
  //   console.log(i);
  //   console.log("Hola");
}

// Reto 3
// Crea un bucle que muestre los numeros
// del 167 al 349, de 24 en 24

for (let i = 167; i <= 349; i += 24) {
  //   console.log(i);
}

// IR DE 10 A 1, DE 1 EN 1
for (let i = 10; i >= 1; i--) {
  //   console.log(i);
}

/*
while -> Es un bucle infinito en JavaScript. Se repite infinitamente mientras se cumple una condicion, o hasta que haya una interaccion que lo rompa.

Sintaxis:

while (condicion) {
    // Codigo a repetir
}
*/

// Ejemplo
// Contar del 1 al 10, de 1 en 1. Con el bucle while
let iterator = 10;

while (iterator < 101) {
  // Codigo a repetir
  //   console.log(iterator);
  // Al final, incrementamos el iterador
  iterator += 10;
}

/*
// Con el bucle for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

iterator = 10;

while (iterator >= 1) {
  // Codigo a repetir
  //   console.log(iterator);
  // Al final, incrementamos el iterador
  iterator--;
}

/*
Con bucle for
for (let i = 10; i >= 1; i--) {
  //   console.log(i);
}
*/

// Reto 4
// Crea un bucle while que muestre los numeros del 167 al 349, de 24 en 24
iterator = 167;

while (iterator <= 349) {
  //   console.log(iterator);
  iterator += 24;
}

// Conteo del 1 al 10, de 1 en 1.
iterator = 12;

while (iterator <= 10) {
  console.log(iterator);
  iterator++;
}

/*
do... while -> Es un bucle infinito, muy parecido al while. SE EJECUTA SIEMPRE AL MENOS UNA VEZ, NO IMPORTA SI LA CONDICION NO SE CUMPLE.

Sintaxis:
do {

} while (condicion)
*/

iterator = 12;

do {
  //   console.log(iterator);
  iterator++;
} while (iterator <= 10);

// ===============================
daysOfWeek = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

// Primer elemento
console.log(daysOfWeek[0]);
// Ultimo elemento
console.log(daysOfWeek[daysOfWeek.length - 1]);
console.log("");

console.log(daysOfWeek);

// Recorrer un arreglo con bucle for
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// Crear un programa que pida constantemente un numero al usuario. Solo se detiene cuando el numero ingresado es 0.

let promptNum;

do {
  promptNum = parseInt(prompt("Ingresa un numero:"));
} while (promptNum != 0);

/*
let promptNum = parseInt(prompt("Ingresa un numero:"));

while (promptNum != 0) {
  promptNum = parseInt(prompt("Ingresa un numero:"));
}
*/
