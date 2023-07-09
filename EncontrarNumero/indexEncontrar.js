min = 0;
max = 1000;
min = Math.ceil(min);
max = Math.floor(max);
numero = Math.floor(Math.random() * (max - min + 1) + min);
console.log('Numero generado: ' + numero);

intentos = 0;

function comprobacion() {
    tries = document.getElementById("intentos")
    entrada = intentoNumero.value*1;

    if(intentos < 10) {
        if(entrada == numero) {
            alert("Acertó el número")
            intentos++
            tries.innerHTML = intentos + "/10"

            contenedor = document.getElementById("ganador")
            contenedor.innerHTML = `
                <h2 style="color: #455A64;">¿Quieres volver a jugar?</h2>
                <input class="btn btn-dark" type="button" id="refresh" value="Volver a jugar" onclick="refresh()">
            `
        } else if(entrada < numero) {
            alert("Incorrecto, el número esta arriba")
            intentos++
            tries.innerHTML = intentos + "/10"
            
            if(intentos == 10) {
                alert("Se acabaron los intentos, no acertaste")
                contenedor = document.getElementById("ganador")
                contenedor.innerHTML = `
                    <h2 style="color: #455A64;">¿Quieres volver a jugar?</h2>
                    <input class="btn btn-dark" type="button" id="refresh" value="Volver a jugar" onclick="refresh()">
                `
            }

        } else if (entrada > numero) {
            alert("Incorrecto, el número esta abajo")
            intentos++
            tries.innerHTML = intentos + "/10"
            
            if(intentos == 10) {
                alert("Se acabaron los intentos, no acertaste")
                contenedor = document.getElementById("ganador")
                contenedor.innerHTML = `
                    <h2 style="color: #455A64;">¿Quieres volver a jugar?</h2>
                    <input class="btn btn-dark" type="button" id="refresh" value="Volver a jugar" onclick="refresh()">
                `
            }
        }
    } 
}


function refresh(){
    window.location.reload()
}
