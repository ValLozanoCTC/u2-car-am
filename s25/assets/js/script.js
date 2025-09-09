// // Operadores en JavaScript

// // Operadores aritméticos o matemáticos
// //      +  -> Adición
// //      -  -> Sustración
// //      *  -> Multiplicación
// //      /  -> División

// // Adición o suma
// let sumando1 = 1;
// let sumando2 = 8;

// // Puedo guardar el resultado en una variable
// let suma = sumando1 + sumando2;

// console.log(sumando1);
// console.log(sumando2);
// console.log("RESULTADO DE LA SUMA");
// console.log(suma);

// // Sustracción o resta
// let minuendo = 7;
// let sustraendo = 3;

// console.log("RESULTADO DE LA RESTA");
// console.log(minuendo - sustraendo);

// // HACEMOS LAS OTRAS DOS OPERACIONES
// // Multiplicación
// let factor1 = 34;
// let factor2 = 11;

// console.log("RESULTADO DE LA MULTIPLICACIÓN");
// console.log(factor1 * factor2);

// // División
// let dividendo = 12;
// let divisor = 0;

// console.log("RESULTADO DE LA DIVISIÓN");
// console.log(dividendo / divisor);

// // Potenciación
// //      a ** b -> Número elevado a b
// let base = 3;
// let exponente = 2;

// console.log("RESULTADO DE LA POTENCIACIÓN");
// console.log(base ** exponente);

// // Módulo o residuo
// //      %   -> Devuelve el residuo de una división
// // NaN  -> Not a Number
// console.log("RESIDUO DE LA DIVISIÓN (MÓDULO)");
// console.log(dividendo % divisor);

// // console.log('1' + '1'); // CONCATENACIÓN
// // console.log(0.1 + 0.2); // Error de punto flotante

// // ===========================================
// OPERADORES DE COMPARACIÓN -> Devuelven un booleano
// >   -> Mayor que
// <   -> Menor que
// >=  -> Mayor igual que
// <=  -> Menor igual que

// let num1 = 8;
// let num2 = 1;

// console.log("MAYOR QUE, MENOR QUE, ETC.");
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// Igualdad, identidad y distinto
// ==   -> Igualdad, verifica que dos valores sean IGUALES. No le importa el tipo de dato.
// ===  -> Identidad, verifica que dos valores sean IGUALES y además su tipo de dato sea el MISMO.

// !=   -> Negación de la igualdad
// !==  -> Negación de la identidad

// let num3 = 18; // number
// let num4 = '18'; // string

// console.log("IGUALDAD E IDENTIDAD");
// console.log(num3 == num4);  // true
// console.log(num3 === num4);  // false

// // ! -> Operador de negación
// console.log("NEGACIONES");
// console.log(num3 != num4);  // false
// console.log(num3 !== num4);  // true

// OPERADORES LÓGICOS -> Operan con valores booleanos
//  &&   -> AND (y) SOLO ES VERDAD CUANDO AMBOS VALORES SON VERDADEROS
//  ||   -> OR (o) SOLO ES FALSO CUANDO AMBOS VALORES SON FALSOS
//  !    -> NOT (negación) NIEGA UN VALOR

// // && AND
// console.log("AND");
// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false

// // || OR
// console.log("OR");
// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false

// // ! NOT
// console.log("NOT");
// console.log(!true);   // false
// console.log(!false);  // true

// ===========================================
// Mas sobre strings...
// Comillas simples
let palabra = 'Hola'
console.log(palabra);

// Comillas dobles
let frase = "Linda noche";
console.log(frase);

// Backticks (Comillas invertidas)
// ``
let comillaInvertida = `Esta es una string con comillas invertidas
Puedo poner comillas simples y dobles' "
Puedo escribir en muchas lineas

Gracias a JavaScript por inventar las backticks`;

console.log(comillaInvertida);

// ===========================================
// Extrapolación de strings -> Esta funcionalidad nos permite ingresar variables directamente dentro de la string. SOLO SE PUEDE HACER CON BACKTICKS.
// ${variable}

let nombre = 'Valeria Lozano';
let edad = 24;

// Ejemplo
let saludo = `Hola me llamo ${nombre}, tengo ${edad} años.`;
console.log(saludo);
// ===========================================
// Metacaracteres -> Es la representación de caracteres que cumplen una función particular distinta a la escritura.

// \n -> Representa el salto de linea (ENTER).
// \t -> Representa la tabulación (sangría).

let pruebas = 'Probando metacaracteres o carácteres especiales\nOtra\nlinea\n\tSangría';

console.log(pruebas);

// Escape de caracteres
// Hacer que un caracter especial cumpla con una función distinta a la original.
let escaparCaracter = 'It\'s me';
console.log(escaparCaracter);

// ===========================================
console.log("===========================");

// Indexación -> Acceder a los caracteres de una string por medio de sus indices
// string[indice]
// LOS INDICES SOLO PUEDEN SER NUMEROS ENTEROS

palabra = "hola";
console.log(palabra);
console.log("INDEXACIÓN")

console.log(palabra[0]);  // h
console.log(palabra[1]);
console.log(palabra[2]);
console.log(palabra[3]);

// Tamaño de una string
// string.length 
// SOLO ES POSIBLE QUE DEVUELVA NUMEROS ENTEROS
console.log("Tamaño de una string")
console.log(palabra.length);  // 4

// Regla universal para acceder al último carácter
// Indice del ultimo caracter: length - 1
console.log(palabra[palabra.length - 1]);

// Transformacion de strings
let palabraBase = "hOlA cOMO EstAS";
console.log(palabraBase);
console.log(palabraBase.toUpperCase());
console.log(palabraBase.toLowerCase());

// BUSCAR SUBSTRINGS
