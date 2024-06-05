let date = document.getElementById("date")
let hora = document.getElementById("hora")
let power = document.getElementById("power");
let encendido = false;

let datebutton = 1;
let fecha = new Date();

power.addEventListener("click", () => {
    power.classList.toggle("ON")
    encendido = !encendido
    if (datebutton == 1) {
        hora.style.visibility = "none";
        date.style.visibility = "none";
        hora.innerHTML = fecha.toLocaleTimeString();
        date.innerHTML = fecha.toLocaleDateString();
        setTimeout(function () {
            hora.style.visibility = "hidden";
            date.style.visibility = "hidden";
        }, 4500);
    }
  
})

