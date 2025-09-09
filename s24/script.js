// Hola mundo en JavaScript
console.log("Hola mundo");

/*
Variables

Variable -> Un espacio en memoria que almacena un valor y tiene un nombre propio.

Declaración -> Decirle a JavaScript que va a existir una variable con ese nombre.
Asignación -> Asignarle un valor a una variable.

Declaración y asignación de variables

1. Usar la palabra reservada let
2. Dar el nombre a mi variable
3. Usar el operador de asignación (=)
4. Dar el valor a la variable
5. Terminar con ;
*/

/*
Tipos de dato

undefined -> Tipo de dato indefinido. Se da por defecto a una variable que fue declarada pero no asignada.
*/
let desconocido; // VARIABLE DECLARADA PERO NO ASIGNADA.
// Imprimimos el valor de la variable
console.log(desconocido);
// Imprimir el tipo de la variable
console.log(typeof(desconocido));

/*
boolean -> Solo puede tomar valores de verdadero o falso. Usa las palabras reservadas true y false.
*/
let verdadero = true;
let falso = false;

console.log(verdadero);
console.log(typeof(verdadero));

/*
number -> Almacena datos numéricos. JAVASCRIPT no diferencia entre enteros y decimales.
Los decimales van con PUNTO, NO SE USA COMA.
*/
let edad = 24;
let estatura = 1.61;

console.log(edad);
console.log(typeof(edad));
console.log(estatura);
console.log(typeof(estatura));

/*
string -> En palabras simples se refiere a los textos. Normalmente en español se le llama cadena.

Siempre van entre comillas. Pueden ser comillas simples o dobles.
*/
let nombre = 'Valeria Lozano';
let frase = "Ten un buen día.";

console.log(nombre);
console.log(typeof(nombre));

// Comentarios de una línea
// Empiezan con doble diagonal

/*
Comentarios multilínea
se escriben igual que en CSS
*/
console.log("==============================");
console.log(nombre);
nombre = "Alguien" // CAMBIO EL VALOR DE LA VARIABLE
console.log(nombre);

/*
Escapar caracteres

Significa que cambiamos la funcionalidad original de un caracter.
Se logra agregando un backlash \ antes del caracter.
*/
let reto1 = "Miguel Grau \"El Caballero de los Mares\"";
let reto2 = 'It\'s me';

console.log(reto1);
console.log(reto2);

/*
Metacaracteres -> Son caracteres especiales que no podemos escribir directamente pero sí podemos usar.

\n -> Salto de línea
*/
let reto3 = "Buen\ndía";
console.log(reto3);
