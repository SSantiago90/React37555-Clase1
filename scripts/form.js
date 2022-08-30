console.log('loaded script form.js');

window.onload = function(){   
    const miFormulario = ""/* obtengo un elemento del DOM */
    // TODO: agrego un evento al elemento del DOM
    /* miFormulario... ? */
}

function handleSubmitForm( event ){
    // Javascript automáticamente recibe el parametro del evento
    // el "target" de el evento que se desencadenó, es el elemento html <form> que clickeamos
    console.log(event.target);    

    // los forms guardan como un array sus inputs internos
    // event.target[0] -> input nombre... event.target[1] -> input contraseña...  etc
    
    event.preventDefault();

    const palabras = event.target[0].value
    //dividimos nuestro String en un array, separando por espacios
    const arrayDePalabras = palabras.split(' ');
    console.log("Array:", arrayDePalabras);
}