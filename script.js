
let botonResumen = document.querySelector("#Calcular")

botonResumen.addEventListener("click",
    function calcular() {
        let frecuencia = document.querySelector("#Frecuencia").value
        let funcion = document.querySelector("#Funcion").value

        let contenedor = document.querySelector("#Mensaje")

        while (contenedor.hasChildNodes()) {
            contenedor.removeChild(contenedor.firstChild);
        }

        let mensaje = document.createTextNode("p")

        if (funcion == "SEN") {
            mensaje.textContent = "F(t): SEN("+frecuencia+"t) -> F(s): " + frecuencia + "/s^2 + " + frecuencia + "^2"
        } if (funcion == "COS") {
            mensaje.textContent = "F(t): COS("+frecuencia+"t) -> F(s): s/s^2 + " + frecuencia + "^2"
        } 

        contenedor.appendChild(mensaje);

    }
)

