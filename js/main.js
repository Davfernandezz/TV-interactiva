let power = document.getElementById("power");
let encendido = false;

let boton = document.getElementsByClassName("boton");
let arrayBoton = Array.from(boton)

let date = document.getElementById("date")
let hora = document.getElementById("hora")
let fecha = new Date();



for(let i = 0; i < arrayBoton.length; i++){
    arrayBoton[i].addEventListener("click", () => {
        if(encendido){
            canal.innerHTML = `Canal ${i+1}`
        }
    })
}

power.addEventListener("click", () => {
    power.classList.toggle("ON")
    encendido = !encendido

    hora.innerHTML = fecha.toLocaleTimeString();
    date.innerHTML = fecha.toLocaleDateString();

    setTimeout(function () {
        hora.style.visibility = "hidden";
        date.style.visibility = "hidden";
    }, 4500);
})

