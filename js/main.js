let power = document.getElementById("power");
let encendido = false;

let boton = document.getElementsByClassName("boton");
let arrayBoton = Array.from(boton)                           //Aqui están todas las variables llamadas del index.html .

let date = document.getElementById("date")
let hora = document.getElementById("hora")
let fecha = new Date();

let pantalla = document.getElementById("pantalla");


for (let i = 0; i < arrayBoton.length; i++) {    //Creamos un for con un array que nos permitira hacer visibles la informacion y mostrarnos la imagen deseada segun el canal que seleccionemos.
    arrayBoton[i].addEventListener("click", () => {   

        hora.style.visibility = "visible";
        date.style.visibility = "visible";   //Haremos visibles la informacion ya que luego le diremos que desaparezca.
        canal.style.visibility = "visible";

        if (encendido) {
            pantalla.classList.replace(pantalla.classList[0], `ch${i + 1}`);  //Dentro le añadiremos un if para que cuando la tele este encendida
            canal.innerHTML = `Canal ${i + 1}`                                //identifique tanto la informacion como los canales correctamente segun nuestra seleccion.
            hora.innerHTML = fecha.toLocaleTimeString();
            date.innerHTML = fecha.toLocaleDateString();

            setTimeout(function () {
                hora.style.visibility = "hidden";
                date.style.visibility = "hidden";    //Le aplicamos una funcion de tiempo para que la informacion desaparezca a los siete segunda de seleccionar un boton.
                canal.style.visibility = "hidden";
            }, 7000);
        }

    })
}


power.addEventListener("click", () => {   //Creamos un evento en el que cuando pulsemos el boton de encendido se activen todas las funciones.

    canal.style.visibility = "visible"; 
    hora.style.visibility = "visible";
    date.style.visibility = "visible";

    power.classList.toggle("ON")
    encendido = !encendido
    if (encendido) {      
        pantalla.classList.replace(pantalla.classList[0], "ONtele");
        hora.innerHTML = fecha.toLocaleTimeString();                     //Añadiremos las funciones de informacion y remplazaremos la imagen de pantalla
        date.innerHTML = fecha.toLocaleDateString();                     //cuando la la variable encendido sea true.

        setTimeout(function () {
            hora.style.visibility = "hidden";
            date.style.visibility = "hidden";
            canal.style.visibility = "hidden";
        }, 7000);

    } else {
        pantalla.classList.replace(pantalla.classList[0], "OFFtele");
        hora.innerHTML = ""
        date.innerHTML = ""                                               //Cuando seleccionemos apagar la tele le indicaremos que nos deje la pantalla 
        canal.innerHTML = ""                                              //sin ningun tipo de imagen y informacion.
    }
})
