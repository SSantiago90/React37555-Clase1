const usuarioLogedIn = true;
let resultSession = null;

if (usuarioLogedIn) {
  resultSession = "Iniciaste sesión!";
} else {
  resultSession = "Intenta nuevamente";
}

console.log("Estado de sesión:" + resultSession);
