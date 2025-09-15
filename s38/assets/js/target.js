// Obtener el dato del localStorage
let userName = localStorage.getItem("userName");
console.log(userName);

// M
document.getElementById("greet").innerText = `Hola ${userName}!`;
