/*var edad = 0;
edad = window.prompt("Edad: ");

if (edad < 18) {
    window.alert("menor de edad");
}else{
    window.alert("mayor de edad");
} */

const MAYORIA_DE_EDAD=18; // Las constantes por convención se escriben en mayúsculas.
function informarMayoriaEdad(){
     // con el valor recogido en la caja de texto, se valida si la edad es o no mayor de edad.
     // Se valida si es un número o no. 
     // Si es texto, se informa de error de entrada. 
     console.log("Ha tocado el boton");
     //recogenos el valor de la caja de texto
     var caja_edad = document.getElementById("edad"); //se puede utilizar let
     console.log("El id de la caja es: " + caja_edad.id); // con + se concatena
     console.log("El value de la caja es: " + caja_edad.value); // con + se concatena
     var edad = caja_edad.value; //obtengo el valor

     if (edad >= MAYORIA_DE_EDAD)
     {
         console.log("Es mayor de edad")
     }else{
         console.log("Es menor de edad")
     }



}