console.log(
  "%cScript form.js importado 👏",
  "background: purple; color : white"
);

// TODO: Agregar un "event listener" a un evento al elemento del DOM
/* obtengo un elemento del DOM */
const miFormulario = document.querySelector("#loginForm");
console.log(miFormulario);

/* Agregamos un event listener al formulario de login */
miFormulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target);
});

/* Mostrar por consola el username y contraseña */

/* SI usuario="coder" Y contraseña="37555" -> mostrar formulario 2 */

function handleSubmitForm(event) {
  // TODO2: Convertir el input en un array de caracteres
  // Javascript automáticamente recibe el parametro del evento
  // el "target" de el evento que se desencadenó, es el elemento del DOM donde se originó el evento
  /* Obtenemos el "input" ingresado por el usuario  */
  /*  dividimos nuestro String en un array, separando por espacios y lo imprimimos en consola */
}
