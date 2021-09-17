let libroSeleccionado = localStorage.getItem("libroseleccionado");
let librosArray = [];
var pregunta1 = "C";
var pregunta2 = "C";
var pregunta3 = "C";
var pregunta4 = "C";
var puntaje = 0;
var puntosmax = 100;

function respuesta1(valor) { pregunta1 = valor };
function respuesta2(valor) { pregunta2 = valor };
function respuesta3(valor) { pregunta3 = valor };
function respuesta4(valor) { pregunta4 = valor };

function verresultado() {
    var puntaje = 0;

    if (pregunta1 == 'A') {
        puntaje += 25
    }
    if (pregunta1 == 'B') {
        puntaje += -25
    }
    if (pregunta1 == 'C') {
        puntaje += 0
    }
    if (pregunta2 == 'A') {
        puntaje += 25
    }
    if (pregunta2 == 'B') {
        puntaje += -25
    }
    if (pregunta2 == 'C') {
        puntaje += 0
    }
    if (pregunta3 == 'A') {
        puntaje += 25
    }
    if (pregunta3 == 'B') {
        puntaje += -25
    }
    if (pregunta3 == 'C') {
        puntaje += 0
    }
    if (pregunta4 == 'A') {
        puntaje += 25
    }
    if (pregunta4 == 'B') {
        puntaje += -25
    }
    if (pregunta4 == 'C') {
        puntaje += 0
    }
    document.getElementById("resultado").innerHTML = "<br>Usted obtuvo " + puntaje + "/100 puntos"
}

function calcularPuntaje() {

    for (var i = 0; i < Things.length; i++) {
        Things[i]
    }



    // body...
}

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("contenedorlibro").innerHTML = ""
    getJSONData(LIBROS_URL).then(function (resultObj) {
        librosArray = resultObj.data;
        for (let i = 0; i < librosArray.length; i++) {
            if (librosArray[i].id == libroSeleccionado) {
                let contenido = ""
                contenido = `
                    <h1>${librosArray[i].titulo}</h1>
                    <img src="img/${librosArray[i].titulo}/1.jfif">
                    <img src="img/${librosArray[i].titulo}/2.jfif">
                    <img src="img/${librosArray[i].titulo}/3.jfif">
                    <p>${librosArray[i].isbn}</p>
                    <p>${librosArray[i].paginas}</p>
                    <p>${librosArray[i].editorial}</p>
                `
                document.getElementById("contenedorlibro").innerHTML = contenido
            }
        }
    })

    getJSONData(encuesta_url).then(function (resultObj) {
        encuestaArray = resultObj.data;
        for (let i = 0; i < encuestaArray.length; i++) {
            if (encuestaArray[i].libroRelacionado == libroSeleccionado) {
                let listado = "";
                let opciones = "";
                
                for (var j = 0; i < encuestaArray[j].opciones.length; j++) {
                    opciones += `
                        <input type="radio" id="pregunta`+j+`" onclick="respuesta`+j+`(`j`)">
                            `+encuestaArray[j].opciones[j]+`<br>`;
                    
                }

                
                listado = `
                    <h1>${encuestaArray[j].pregunta}</h1>

                    <h2>`+opciones+`</h2>

                    <button onclick="calcularPuntaje()">Finalizar</button>
                    
                `
                document.getElementById("contenedorlibro").innerHTML = contenido
            }
        }
    })



});
//alt96

