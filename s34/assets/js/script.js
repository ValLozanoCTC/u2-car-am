// METODOS DE ARRAYS
// nombreArray.metodo()

let fruits = ["manzana", "naranja", "pera", "mango"];
console.log(fruits);

console.log("push");
// push(x) -> Agrega el elemento x al FINAL del array.
fruits.push("fresa");
console.log(fruits);

console.log("pop");
// pop() -> Elimina el ULTIMO elemento del array y lo retorna.
fruits.pop();
console.log(fruits);

console.log("unshift");
// unshift(x) -> Agrega el elemento x al INICIO del array.
fruits.unshift("uva");
console.log(fruits);

console.log("shift");
// shift() -> Elimina el PRIMER elemento del array y lo retorna.
let deletedItem = fruits.shift();
console.log(`Elemento eliminado con shift: ${deletedItem}`);
console.log(fruits);

console.log("includes");
// includes(x) -> Preguntar si x es un elemento del array. Retorna un booleano
console.log(fruits.includes("naranja")); // true
console.log(fruits.includes("kiwi")); // false

console.log("indexOf");
// indexOf(x) -> Retorna el indice del elemento x en el arreglo. Si el arreglo no contiene el elemento, retorna -1
console.log(fruits.indexOf("naranja")); // 1
console.log(fruits.indexOf("kiwi")); // -1

console.log("join");
// join() -> Toma todos los elementos del array y los junta en una string. Por defecto usa el caracter coma (,) pero opcionalmente podemos indicar el caracter que queremos usar.
console.log(fruits.join());
console.log(fruits.join("."));
console.log(fruits.join("-"));
console.log(fruits.join("_"));
console.log(fruits.join(" ")); // Con espacio
console.log(fruits.join("")); // Sin caracter (todo junto)

console.log("===============");
fruits = ["manzana", "naranja", "pera", "mango", "uva", "fresa"];
console.log(fruits);

console.log("slice");
// slice(inicio, fin) -> Retorna una COPIA del arreglo (NO MODIFICA EL ARREGLO ORIGINAL). Corta los elementos desde el indice "inicio". Opcionalmente se le puede indicar el indice de "fin", este indice es exclusivo. Si no se le indica el fin, por defecto corta hasta el final.

// Corta el arreglo desde el indice 2 hasta el final
console.log(fruits.slice(2));

// Corta el arreglo desde el indice 2 hasta el indice 4, sin tomar este ultimo
console.log(fruits.slice(2, 4));

console.log("splice");
// splice(inicio, cantidad, nuevos elementos...) -> Modifica el arreglo ORIGINAL. Desde "inicio" se eliminan la "cantidad" de elementos indicada

// Corta hasta el indice 2 exclusivo
// fruits.splice(2);
// console.log(fruits);

// Desde el indice 2, elimina dos elementos
// fruits.splice(2, 2);
// console.log(fruits);

// Desde el indice 2, elimina dos elementos y desde esa misma posicion agrega los nuevos elementos
fruits.splice(2, 2, "sandía", "kiwi", "arándano");
console.log(fruits);

console.log("===============");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

console.log("map");
// map(funcion) -> Retorna una COPIA del array. Aplica la funcion a cada uno de los elementos del array. El array resultante tiene la misma cantidad de elementos.

// A cada elemento le aumenta 3
let numsMap = nums.map((x) => x + 3);
console.log(numsMap);

// Multiplica los elementos por 2
console.log(nums.map((x) => x * 10));

// Mostrar strings
console.log(nums.map((x) => `Número ${x}`));

console.log("filter");
// filter(funcion) -> Retorna una COPIA del array original. Aplica una funcion de filtrado a todos los elementos del array y solo devuelve los que cumplen la condicion.

// Filtra los elementos mayores que 5
let filteredNums = nums.filter((x) => x > 5);
console.log(filteredNums);

// Filtra los elementos menores que 6
console.log(nums.filter((x) => x < 6));

// Filtra los elementos pares
console.log(nums.filter((x) => x % 2 === 0));

console.log("reduce");
// reduce(funcion, acumulador) -> Retorna un valor que es el resultado de reducir el array. Lo reduce aplicando la funcion a los elementos, ademas va guardando el resultado en el acumulador.

// Suma todos los elementos del array
console.log(nums.reduce((a, b) => a + b, 0));

// Multiplica todos los elementos del array
console.log(nums.reduce((a, b) => a * b, 1));

console.log("===============");

console.log("Math");

console.log("round");
// round(x) -> Redondea del numero x de "forma normal". Si el decimal es mas de .5 redondea hacia arriba, si no, hacia abajo

console.log(Math.round(14.2)); // 14
console.log(Math.round(14.8)); // 15

console.log("ceil");
// ceil(x) -> Redondea hacia arriba.
console.log(Math.ceil(14.2)); // 15
console.log(Math.ceil(14.8)); // 15

console.log("floor");
// ceil(x) -> Redondea hacia abajo.
console.log(Math.floor(14.2)); // 14
console.log(Math.floor(14.8)); // 14

console.log("max");
// max(a, b, c, ...) -> Retorna el mayor valor.
console.log(Math.max(100, 34, 2, 15, 43));

let newNums = [100, 34, 2, 15, 43];
console.log(Math.max(...newNums)); // Destructarcion
