//definimos la funcion
function fImc() {
    // limpiamos el formulario la primera vez o cada vez que se refresque la página para introducir nuevos
    // datos:
    //declaramos las variables:
    let peso = 0,
        altura = 0,
        imc = 0,
        leyenda = "";


    //hacemos la llamada a los datos introducidos
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value / 100;

    //calculamos el imc
    imc = peso / (altura * altura);
    //enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
    document.getElementById("imc").value = imc.toFixed(2);

    //
    switch (true) {
        case (imc < 16):
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            leyenda = "Estas desnutrido. Debes coger peso por salud";
            document.getElementById("imagenId").src = "imagenes/desnutrido.jpg";
            break;

        case (imc >= 16 && imc < 18):
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            leyenda = "Estas delgado";
            document.getElementById("imagenId").src = "imagenes/delgado.jpg";
            break;

        case (imc >= 18 && imc < 25):
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            leyenda = "Estas en el peso ideal";
            document.getElementById("imagenId").src = "imagenes/ideal.jpg";
            break;

        case (imc >= 25 && imc < 31):
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            leyenda = "Tienes sobrepeso";
            document.getElementById("imagenId").src = "imagenes/sobrepeso.jpg";
            break;

        case (imc >= 31):
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            leyenda = "Estas OBESO. Te tienes que cuidar!!!!";
            document.getElementById("imagenId").src = "imagenes/obesos.jpg";
            break;
        default:
            break;
    }
    // 
    //enviamos el comentario a la caja correspondiente
    document.getElementById("leyenda").value = leyenda;

}