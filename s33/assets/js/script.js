// Métodos del objeto "document" para seleccionar elementos del DOM. Los elementos retornados pueden ser almacenados en variables

console.log("SELECCIONAR POR ID");
// getElementById("nombre-id") -> Selecciona el elemento con el id "nombre-id".
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// Acceder al contenido con el atributo "innerText". Este es un atributo de los objetos HTMLElement
console.log(mainTitle.innerText);

// Actualizamos el contenido desde JS
mainTitle.innerText = "TITULO CAMBIADO";
console.log(mainTitle.innerText);

console.log("SELECCIONAR POR CLASE");
// getElementsByClassName("nombre-clase") -> Selecciona todos los elementos con la clase "nombre-clase", devuelve un array.
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);

// Al ser un arreglo, primero accedemos a uno de sus elementos
console.log(mainTexts[0].innerText);
console.log(mainTexts[2].innerText);

// Cambiando el contenido de uno de los elementos
mainTexts[1].innerText = "Lorem";

console.log("SELECCIONAR POR ETIQUETA");
// getElementsByTagName("etiqueta") -> Selecciona todos los elementos con esa etiqueta, devuelve un array.
let titles = document.getElementsByTagName("h2");
console.log(titles);
console.log(titles[2].innerText);

console.log("SELECCIONAR POR SINTAXIS CSS - QUERY SELECTOR");
// querySelector("selector") -> Selecciona el primer elemento que coincida con el selector.
// querySelectorAll("selector") -> Selecciona todos los elementos que coincidan con el selector. Devuelve un arreglo

// let mainTitle = document.getElementById("main-title");
let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

// let mainTexts = document.getElementsByClassName("main-text");
let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

console.log("EVENTOS");
/*
Eventos

[seleccionar elemento].addEventListener("evento", function () {
    // Codigo de la funcion que se va a ejecutar cuando suceda el evento
    // Es una funcion anonima, no tiene nombre
})

Para agregar eventos, no es necesario almacenar el elemento en una variable
*/
// OTRAS UTLIDADES
let clicker = document.getElementById("clicker");

clicker.addEventListener("click", function () {
  // Codigo de la funcion. Se ejecutara cuando se haga click en el elemento "clicker"
  console.log("HAZ HECHO CLIC EN EL BOTON");

  // Cambiando estilos desde JS
  // EVITAR CAMBIAR ESTILOS DIRECTAMENTE PORQUE AGREGA ESTILOS EN LINEA Y ESO ESTA PROHIBIDO
  // document.body.style.backgroundColor = "red";

  // Alternando estilos con clases

  /*
  if (clicker.classList.contains("p-red")) {
    clicker.classList.remove("p-red");
  } else {
    clicker.classList.add("p-red");
  }
  */
  clicker.classList.toggle("p-red");

  // Tomando el valor ingresado en un input
  let nameInput = document.querySelector("#name").value;
  let greetText = document.querySelector("#greet");

  if (nameInput == "" || nameInput.length === 0) {
    greetText.innerText = `NO INGRESASTE NADA`;
  } else {
    greetText.innerText = `Buenos dias ${nameInput}`;
  }
});
