let power = document.getElementById("power");
let encendido = false;

power.addEventListener("click", () => {
    power.classList.toggle("ON")
    encendido = !encendido
   
})
