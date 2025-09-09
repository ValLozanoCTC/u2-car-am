/*
Funciones -> Son bloques de codigo que podemos reutilizar. Pueden recibir datos de entrada para modificarlos. Pueden retornar algun valor.

Sintaxis basica de definicion de una funcion

function nombreFuncion() {
    // Codigo de la funcion

    // Muchas lineas de codigo...
}

1. Palabra reservada "function".
2. Nombre de la funcion (camelCase).
3. Abrir y cerrar parentesis.
4. Abrir llaves.
5. Dentro del bloque de llaves, escribir el codigo de la funcion.
6. No olvides cerrar las llaves.

Dato importante: La manera apropiada de nombrar a una funcion es usar verbos en infinitivo.
*/

// Ejemplo
// Muestra varios mensajes con distintos datos.

// Definir una funcion ("Crear")
function showMessages() {
    console.log("LA FUNCION HA SIDO LLAMADA");
    // Codigo de mi funcion
    console.log("INICIO DE LOS MENSAJES");
    console.log("HOLAAA");
    console.log(true);
    console.log(8);
    console.log("Tengo hambre");
    console.log("FIN DE LOS MENSAJES");
}

// Llamar a la funcion ("Usar")
// showMessages();

/*
// SIN FUNCIONES
// Inicio
console.log("INICIO DE LOS MENSAJES");
console.log("HOLAAA");
console.log(true);
console.log(8);
console.log("Tengo hambre");
console.log("FIN DE LOS MENSAJES");
// Fin

// Se repite varias veces, el codigo crece demasiado
*/

/*
Parametros -> Son valores que recibe una funcion. La funcion puede tomar estos valores para hacer operaciones, transformarlos usarlos, etc. Los parametros van dentro de los parentesis de la funcion, van separados por comas.

a y b son parametros.

function nombreFuncion(a, b) {
    // Codigo de la funcion
    // Dentro de la funcion, puedes usar los valores a y b
}

Scope -> (Alcance) es el bloque de codigo donde una variable puede ser usada.
*/

/*Entrada de datos prompt("Mensaje") Podemos almacenar ese dato en una variable. POR DEFECTO TIENE EL TIPO DE DATO string

El "parseo" convierte un tipo de dato a otro.
En JavaScript el parse a number si diferencia entre decimal y entero.

parseInt -> Integer, entero
parseFloat -> Decimal
*/
// let name = prompt("Ingresa tu nombre");
// console.log(`El nombre que ingresaste fue: ${name}`);

// Ejemplo
// Crea una funcion que sume dos numeros y muestra un mensaje con su resultado

// Con parametros
// function addTwoNumbers(a, b) {
//     let result = a + b;

//     console.log(`${a} + ${b} = ${result}`);
// }

// let num1 = parseInt(prompt("Ingresa el primer numero"));
// let num2 = parseInt(prompt("Ingresa el segundo numero"));

// console.log(`La suma de los dos numeros ingresados es ${num1 + num2}`);

// Llamo a mi funcion, cuando tu pasas los "valores" de los parametros, estos se llaman argumentos.
// addTwoNumbers(num1, num2);

/*
// Sin parametros
function addTwoNumbers() {
    let num1 = 14;
    let num2 = 16;
    let result = num1 + num2;

    console.log(`${num1} + ${num2} = ${result}`);
}
*/

/*
Retorno de datos

Ademas de recibir datos como parametros, una funcion tambien puede retornar algun valor. Ese valor puede ser almacenado en alguna variable o tambien se puede usar directamente.

function nombreFuncion(a, b) {
    // Codigo de la funcion
    // Dentro de la funcion, puedes usar los valores a y b

    // Retorno de datos
    return valor;
}
*/

function addTwoNumbers(a, b) {
    // console.log("LA FUNCION HA SIDO LLAMADA");
    let result = a + b;
    let message = `${a} + ${b} = ${result}`;

    // Retorno de valores
    return message;
}

// let num1 = parseInt(prompt("Ingresa el primer numero"));
// let num2 = parseInt(prompt("Ingresa el segundo numero"));

// Almacenando el valor de retorno
// let resultMessage = addTwoNumbers();
// console.log(resultMessage);

// O lo puedes usar directamente
// console.log(addTwoNumbers());

// Arrow functions
// Es una sintaxis distinta para escribir funciones, fue introducida en ES6 (2015). Significa Funciones de Flecha, llevan este nombre por usar los caracteres =>.
// Por ahora, tomemos que ambas sintaxis funcionan igual.

let multiplyTwoNumbers = (a, b) => {
    let result = a*b;
    let message = `Result: ${result}`;

    return message;
}

let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let result = multiplyTwoNumbers(num1, num2);

console.log(result);

/*
let multiplyTwoNumbers = (a, b) => a*b;

function multiplyTwoNumbersV2(a, b) {
    let result = a*b;
    let message = `Result: ${result}`;

    return message;
}
*/