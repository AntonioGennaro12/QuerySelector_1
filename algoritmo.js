
/* Mi Bingo con Query. Selector */
const PREMIO_3_NROS_IGUALES = "$1.000.000.-";
const PREMIO_2_NROS_IGUALES = "$100.000.-";
const PREMIO_CONSUELO = "Vale por un Helado";
const min = 1;
const max = 5; /* cuanto más chico, aumenta la probabilidad de ganar */


// Selecciona el elemento con el id "miBoton"
const palancaSlot = document.querySelector("#palancaSlot");
const miBody      = document.querySelector("#mi-body");
const BingoFijo   = document.querySelector("#mi-h1_1");
const TuNumero    = document.querySelector("#mi-h1_2");
const MsgResult   = document.querySelector("#mi-h1_3");
const MsgPremio   = document.querySelector("#mi-h2_1");
const MsgFinal    = document.querySelector("#mi-h2_2");  
var IntervaloParp = 0;

// Al darle a la Palanca se ejecuta la función que genera el número aleatorio y chequea el resultado 
palancaSlot.addEventListener("click", () => {
    let primerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    let segundoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    let tercerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    clearInterval(IntervaloParp);                 /* Frena cualquier parpadeo */
	MsgResult.style.visibility = 'visible';       /* Pone Visible el texto */
    BingoFijo.textContent    = "+ + + B I N G O - C F P 5 + + +" ;
    TuNumero.textContent     = "Tu número es: | "+primerNumero+" | "+segundoNumero+" | "+tercerNumero+" | ";
    
    if((primerNumero == segundoNumero) && (primerNumero == tercerNumero)){
        miBody.style.backgroundColor = "red";
        MsgResult.textContent = "***     PALANCAZOOOOO!!!     ***"; 
        IntervaloParp = setInterval (function() {
            MsgResult.style.visibility = (MsgResult.style.visibility == 'hidden' ? '' : 'hidden' );
        }, 150); 
        MsgPremio.textContent = "Ganaste " +PREMIO_3_NROS_IGUALES+"";
        MsgFinal.textContent  = "Sigue así, hay más!!!!";
        palancaSlot.textContent = "Vamos! Meté otro Palancazo!"; 
    }
    else if(((primerNumero == segundoNumero) ||(primerNumero == tercerNumero)) || (segundoNumero == tercerNumero)) {
        miBody.style.backgroundColor = "blue";
        MsgResult.textContent = "¡Te felicito !";  
        IntervaloParp = setInterval (function() {
            MsgResult.style.visibility = (MsgResult.style.visibility == 'hidden' ? '' : 'hidden' );
        }, 500);
        MsgPremio.textContent = "Ganaste " +PREMIO_2_NROS_IGUALES+"";
        MsgFinal.textContent  = "Vamos!! Puedes mejorar!";
       palancaSlot.t = "Intentá de nuevo, dale!"; 
       palancaSlot.textContent = "Intentá de Nuevo, dale!"; 
    }
    else {
        miBody.style.backgroundColor = "grey";
        MsgResult.textContent = "No has tenido suerte..."; 
        IntervaloParp = setInterval (function() {
            MsgResult.style.visibility = (MsgResult.style.visibility == 'hidden' ? '' : 'hidden' );
        }, 2000); 
        MsgPremio.textContent = "Pero igual ganaste un " +PREMIO_CONSUELO+"";
        MsgFinal.textContent  = "No abandones, sigue participando..."; 
        palancaSlot.textContent = "Dale despacito, vamos..."; 
    };  
});