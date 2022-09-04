console.log(
  "%cScript form.js importado 👏",
  "background: purple; color : white"
);

// TODO: Agregar un "event listener" a un evento al elemento del DOM
const miFormulario = document.querySelector("#loginForm");

miFormulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let formDOMnode = evt.target;
  let inputEmail = formDOMnode.querySelector("#email-input");
  let inputPassword = formDOMnode.querySelector("#password-input");
  if (inputEmail.value === "" && inputPassword.value === "")
    formularioArray.style.display = "inherit";
  else console.error("Datos de acceso incorrectos");
});

const formularioArray = document.querySelector("#arrayForm");

formularioArray.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let formDOMnode = evt.target;
  let inputText = formDOMnode.querySelector("#array-input").value;
  let splitTexto = inputText.split(" ");

  console.log(splitTexto);
});
