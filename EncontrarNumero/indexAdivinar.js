limiteSup = 1000
limiteInf = 0
total = Math.trunc((limiteSup+limiteInf)/2)
intentoNumero.value = total

cont = 1
tries = document.getElementById("intentos")

function mayor() {
    if(cont < 11){
        if(cont == 1) {
            limiteSup = 1000
            limiteInf = total
            total = Math.trunc((limiteSup+limiteInf)/2)
    
            console.log(limiteSup + "sup")
            console.log(limiteInf + "inf")
    
            intentoNumero.value = total
            cont++
            tries.innerHTML = cont + "/10"

        } else {
            if(cont == 10) {
                alert("No he encontrado el numero :(")
                contenedor = document.getElementById("ganador")
                contenedor.innerHTML = `
                    <h2 style="color: #455A64;">¿Quieres volver a jugar?</h2>
                    <input class="btn btn-dark" type="button" id="refresh" value="Volver a jugar" onclick="refresh()">
                `
                cont = 11
            } else {
                limiteInf = total
                total = Math.trunc((limiteSup+limiteInf)/2)

                console.log(limiteSup + "sup")
                console.log(limiteInf + "inf")
        
                intentoNumero.value = total
                cont++
                tries.innerHTML = cont + "/10"
            }
        }
    }

}

function menor() {
    if(cont < 11) {
        if(cont == 1){
            limiteSup = total
            limiteInf = 0
            total = Math.trunc((limiteSup+limiteInf)/2)
    
            console.log(limiteSup + "sup")
            console.log(limiteInf + "inf")
    
            intentoNumero.value = total
            cont++
            tries.innerHTML = cont + "/10"
        } else {
            if(cont == 10) {
                alert("No he encontrado el numero :(")

                contenedor = document.getElementById("ganador")
                contenedor.innerHTML = `
                    <h2 style="color: #455A64;">¿Quieres volver a jugar?</h2>
                    <input class="btn btn-dark" type="button" id="refresh" value="Volver a jugar" onclick="refresh()">
                `
                cont = 11
            } else {
                limiteSup = total
                total = Math.trunc((limiteSup+limiteInf)/2)
        
                console.log(limiteSup + "sup")
                console.log(limiteInf + "inf")
        
                intentoNumero.value = total
                cont++
                tries.innerHTML = cont + "/10"
            }
        }
    }
    
}

function igual() {
    contenedor = document.getElementById("ganador")

    if(cont < 11) {
        alert("He encontrado el numero en " + cont + " intentos!!")

        contenedor.innerHTML = `
            <h2 style="color: #455A64;">¿Quieres volver a jugar?</h2>
            <input class="btn btn-dark" type="button" id="refresh" value="Volver a jugar" onclick="refresh()">
        `
        cont = 11;
    }
    
}

function refresh() {
    window.location.reload()
}