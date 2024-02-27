
const validarDiaOcupado = (diasOcupadosPorMes, mesSeleccionado, diaSeleccionado) => {
    diaSeleccionado = parseInt(diaSeleccionado);

    
    if (mesSeleccionado in diasOcupadosPorMes) {
       
        if (diasOcupadosPorMes[mesSeleccionado].includes(diaSeleccionado)) {
            return true; 
        }
    }

    return false; 
}

const validarDiaEnMes = (mes, diasOcupadosPorMes) => {
    let dia = prompt("Ingrese el día: ");

    while ((mes == 2 && (dia > 28 || dia < 1)) ||
        ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia > 30 || dia < 1)) ||
        ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia > 31 || dia < 1)) ||
        validarDiaOcupado(diasOcupadosPorMes, mes, dia)) {
        dia = prompt(`Ese día no está disponible en el mes  o ya está ocupado, ingrese correctamente el día: `);
    }

    return dia;
}

let cliente = {};
cliente.nombre = prompt("Por favor, ingresa tu nombre:");
cliente.mes = prompt("Por favor, ingresa el mes en que deseas tu turno");

while (cliente.mes > 12 || cliente.mes < 1) {
    cliente.mes = prompt("Mes no válido, ingrese correctamente el mes: ");
}

let diasOcupadosPorMes = {
    1: [5, 10], // Ejemplo: Enero, días 5 y 10 ocupados
    2: [15, 20], // Ejemplo: Febrero, días 15 y 20 ocupados
   
};

cliente.dia = validarDiaEnMes(cliente.mes, diasOcupadosPorMes);

cliente.horario = prompt("Ingrese su horario mañana/tarde: ");
while (cliente.horario !== "mañana" && cliente.horario !== "tarde") {
    cliente.horario = prompt("Ingrese un horario válido (mañana/tarde): ");
}

cliente.hora = prompt("Ingrese la hora: ");

if (cliente.horario === "mañana") {
    while (cliente.hora > 12 || cliente.hora < 7) {
        cliente.hora = prompt("Error, el horario de mañana es de 7am a 12pm. Ingrese un horario válido: ");
    }
} else if (cliente.horario === "tarde") {
    while (cliente.hora > 9 || cliente.hora < 5) {
        cliente.hora = prompt("Error, el horario de tarde es de 5pm a 9pm. Ingrese un horario válido: ");
    }
}

alert(cliente.nombre + " tu turno es el día " + cliente.dia + " del mes " + cliente.mes + " a las " + cliente.hora + " de la " + cliente.horario);