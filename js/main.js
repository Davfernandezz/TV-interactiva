let power = document.getElementById("power");
let encendido = false;

let boton = document.getElementsByClassName("boton");
let arrayBoton = Array.from(boton)

let date = document.getElementById("date")
let hora = document.getElementById("hora")
let fecha = new Date();

for (let i = 0; i < arrayBoton.length; i++) {
    arrayBoton[i].addEventListener("click", () => {
        if (encendido) {
            canal.innerHTML = `Canal ${i + 1}`
            hora.innerHTML = fecha.toLocaleTimeString();
            date.innerHTML = fecha.toLocaleDateString();
        }
    })
}

power.addEventListener("click", () => {
    power.classList.toggle("ON")
    encendido = !encendido
    if(encendido){
        hora.innerHTML = fecha.toLocaleTimeString();
        date.innerHTML = fecha.toLocaleDateString();
    } else {
        hora.innerHTML = ""
        date.innerHTML = ""
        canal.innerHTML = ""
    }
})