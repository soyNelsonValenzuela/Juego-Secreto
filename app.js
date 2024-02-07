let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;

console.log (numeroSecreto)

//esta linea asigna un valor a la variable numeroSecreto, este valor proviene de la funcion generarNumeroSecreto

/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Elige un numero del 1 al 10 mono ql";*/ 
/*este codigo es la forma mas primitiva de cambiar un texto de un elemento sin utilizar la una funcion, el problema radica en que habria 
que escribir este codigo completo cada vez que se requiera cambiar el texto de un elemento, complejizando el codigo, es por eso que usamos,
la funcion para reducir el codigo y simplificarlo*/ 

function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML= texto;
return;
} // aqui de define la funcion, que luego es utilizada para asignar textos al encabezado y parrafo

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p','El numero secreto es menor');
        }else{
            asignarTextoElemento ('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    
    }   

    return;
} /* aqui se define la funcion para verificar si el numero ingresado por el usuario es igual al numero secreto, mostrando si este,
de lo contrario muestra pistas, diciendo si el numero secreto es mayor o menor, todo esto modificando el texto includo en el parrafo
a traves de la funcion asignarTextoElemento definida el la linea 10.*/

/*este codigo define la funcion que genera el numnero secreto que sera utilizado para comprara con el numeroDeUsuario en la funcion
    verificarIntento*/
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'ya se sortearon todos los numeros posibles')
    }else{
        // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            
        }
    }

}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!!'); // esta funcion asigna un texto al elemento de enabezado de la pagina
    asignarTextoElemento('p',`Elige un numero del 1 al ${numeroMaximo}`); // esta funcion asigna un texto al elemento de parrafo de la pagina
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
   
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de bumeros
    // generar el numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();


