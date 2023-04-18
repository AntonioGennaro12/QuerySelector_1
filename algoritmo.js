
/* Mi Bingo con Query. Selector */
const PREMIO_3_NROS_IGUALES = "$1.000.000.-";
const PREMIO_2_NROS_IGUALES = "$100.000.-";
const PREMIO_CONSUELO = "Vale por un Helado";
const min = 1;
const max = 5; /* cuanto más chico, aumenta la probabilidad de ganar */


// Selecciona el elemento con el id "miBoton"
const palancaSlot = document.querySelector("#palancaSlot");

// ejecuta la función qu egenera el número aleatorio y chequea el resultado 
palancaSlot.addEventListener("click", () => {
    let primerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    let segundoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    let tercerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    document.write ("<h2>Tu número es:     | "+primerNumero+" | "+segundoNumero+" | "+tercerNumero+" | </h2"); 
    document.write("<h2></h2>");
    if((primerNumero == segundoNumero) && (primerNumero == tercerNumero)){
        document.write ("<h1>***     ¡¡¡BINGO!!!     ***</h1>");  
        document.write ("<h1> Ganaste " +PREMIO_3_NROS_IGUALES+"</h1>");
    }
    else if(((primerNumero == segundoNumero) ||(primerNumero == tercerNumero)) || (segundoNumero == tercerNumero)) {
        document.write ("<h2>¡Te felicito! Ganaste  " +PREMIO_2_NROS_IGUALES+"</h2>");  
    }
    else {
        document.write ("<h2>Lo sentimos, no has tenido suerte.</h3>"); 
        document.write ("<h3>Pero igual ganaste un " +PREMIO_CONSUELO+" !</h3>"); 
        document.write ("<h3>No abandones, sigue participando...</h3>"); 
    };  
});