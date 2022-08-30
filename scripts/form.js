console.log(
  "%cScript form.js importado 👏",
  "background: purple; color : white"
);

window.onload = function () {
  // TODO: Agregar un "event listener" a un evento al elemento del DOM
  const miFormulario = "?"; /* obtengo un elemento del DOM */
  /* miFormulario... ? */
};

function handleSubmitForm(event) {
  // TODO2: Convertir el input en un array de caracteres
  // Javascript automáticamente recibe el parametro del evento
  // el "target" de el evento que se desencadenó, es el elemento del DOM donde se originó el evento
  // los forms guardan como un array sus inputs internos
  // event.target[0] -> input nombre... event.target[1] -> input contraseña...  etc
  //dividimos nuestro String en un array, separando por espacios
}
