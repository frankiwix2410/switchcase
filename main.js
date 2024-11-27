function verificarEdad(event) {
    event.preventDefault()
    const edad = parseInt(document.getElementById('edad').value);
    const mensaje = document.getElementById('mensajeEdad');

    if (edad >= 0 && edad <= 12) {
        mensaje.textContent = "niño";
    } else if (edad >= 13 && edad <= 17) {
        mensaje.textContent = "Adolecente";
    } else if (edad >= 18 && edad <= 64) {
        mensaje.textContent = "Adulto";
    } else {
        mensaje.textContent = "Adulto Mayor";
    }
}



function verificar(event) {
    event.preventDefault()
    const mes = parseInt(document.getElementById('mes').value);
    const mensaje = document.getElementById('mensajeMes');

    switch (mes) {
        case 1:
            mensaje.textContent = "La estacion es Invierno";
            break;
        case 2:
            mensaje.textContent = "La estacion es Invierno";
            break;
        case 3:
            mensaje.textContent = "La estacion es Primavera";
            break;
        case 4:
            mensaje.textContent = "La estacion es Primavera";
            break;
        case 5:
            mensaje.textContent = "La estacion es Primavera";
            break;
        case 6:
            mensaje.textContent = "La estacion es Verano";
            break;
        case 7:
            mensaje.textContent = "La estacion es Verano";
            break;
        case 8:
            mensaje.textContent = "La estacion es Verano";
            break;
        case 9:
            mensaje.textContent = "La estacion es Otoño";
            break;
        case 10:
            mensaje.textContent = "La estacion es Otoño";
            break;
        case 11:
            mensaje.textContent = "La estacion es Otoño";
            break;
        case 12:
            mensaje.textContent = "La estacion es Invierno";
            break;
        default:
            mensaje.textContent = "Mes no valido";
            
    }
}


function ClaseAnimal(event){
    event.preventDefault()
    const animal = document.getElementById('animal').value.toLowerCase();
    const mensaje = document.getElementById('mensajeAnimal');

    switch(true){
        case animal == 'perro' || animal == 'gato' || animal == 'elefante': 
        mensaje.textContent = "El animal pertenece a los mamiferos";
        break;

        case animal == 'aguila' || animal == 'canario': 
        mensaje.textContent = "El animal pertenece a las aves";
        break;

        case animal == 'serpiente' || animal == 'lagarto': 
        mensaje.textContent = "El animal pertenece a los reptiles";
        break;

        case animal == 'rana' || animal == 'sapo': 
        mensaje.textContent = "El animal pertenece a las anfibio";
        break;

        default:
            mensaje.textContent = "Tipo de animal desconocido";
    }
}

function Menbresia(event){
    event.preventDefault()
    const menbresia = document.getElementById('menbresia').value.toLowerCase();
    const mensaje = document.getElementById('mensajeMenbresia');

    switch(true){
        case menbresia == 'bronce': 
        mensaje.textContent = "Beneficios: Acceso limitado a contenido basico";
        break;

        case menbresia == 'plata': 
        mensaje.textContent = "Beneficios: Acceso a contenido básico y algunos extras";
        break;

        case menbresia == 'oro': 
        mensaje.textContent = "Beneficios: Acceso a todo el contenido, incluyendo extras y soporte";
        break;

        case menbresia == 'platino': 
        mensaje.textContent = "Beneficios: Todos los beneficios + atención personalizada";
        break;

        default:
            mensaje.textContent = "Nivel de menbresia no reconocido";
    }
}
