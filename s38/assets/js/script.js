// PERSISTENCIA DE DATOS CON LOCAL STORAGE

document.getElementById("continue").addEventListener("click", function () {
  let nameValue = document.getElementById("name").value;

  console.log(nameValue);

  /* ALMACENAMOS EL DATO EN EL LOCAL STORAGE
  
  localStorage -> Objeto del almacenamiento local del navegador.

  setItem("nombreVariable", valorVariable) -> Almacena un dato en el local storage

  SOLO SE GUARDA EN FORMATO STRING
  */
  localStorage.setItem("userName", nameValue);
});

// CONTENIDO DINAMICO CON JAVASCRIPT
let datos = {
  name: "Bulbasur",
  description:
    "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",
  imgUrl:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
};

// Obtenemos el contenedor
let cardContainer = document.getElementById("card-container");

// Nivel inicial
// cardContainer.innerText = `${datos.name}`;

// Nivel primaria
// cardContainer.innerHTML = `
//   <h3>${datos.name}</h3>
//   <p>${datos.description}</p>
//   <img
//     src="${datos.imgUrl}"
//     alt="${datos.name}"
//   />
// `;

// Nivel secundaria
// cardContainer.innerHTML = `
//   <div class="card">
//     <h3>${datos.name}</h3>
//     <p>${datos.description}</p>
//     <img
//       src="${datos.imgUrl}"
//       alt="${datos.name}"
//     />
//   </div>
// `;

// GUIA FINAL

// Paso 1. Crear el elemento individual en html y css de la manera normal para estilarlo correctamente.
// Paso 2. Almacenar los datos en un arreglo de objetos.
// ARREGLO DE OBJETOS
let datosCompletos = [
  {
    name: "Bulbasur",
    description:
      "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",
    imgUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Ivysaur",
    description:
      "Cuanta más luz solar recibe, más aumenta su fuerza y más se desarrolla el capullo que tiene en el lomo.",
    imgUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
  },
  {
    name: "Venusaur",
    description:
      "Puede convertir la luz del sol en energía. Por esa razón, es más poderoso en verano.",
    imgUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
  },
];

// Paso 3. Obtener el contenedor
cardContainer = document.getElementById("card-container");

// Paso 4. Recorremos el arreglo de datos con un bucle
for (let i = 0; i < datosCompletos.length; i++) {
  // Paso 5. CONCATENAMOS el innerHTML
  // Para acceder a los elementos indexamos el arreglo
  cardContainer.innerHTML += `
    <div class="card">
      <h3>${datosCompletos[i].name}</h3>
      <p>${datosCompletos[i].description}</p>
      <img
        src="${datosCompletos[i].imgUrl}"
        alt="${datosCompletos[i].name}"
      />
    </div>`;
}
