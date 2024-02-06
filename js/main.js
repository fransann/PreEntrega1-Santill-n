const validarDiaEnMes = (mes) => {
    let dia = prompt("Ingrese el día: ");

    // Validar días según el mes
    while ((mes == 2 && (dia > 28 || dia < 1)) ||
        ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia > 30 || dia < 1)) ||
        ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia > 31 || dia < 1))) {
        dia = prompt(`Ese día no existe en el mes ${mes}, ingrese correctamente el día: `);
    }

    return dia;
}

let mes = prompt("Ingrese el mes: ");

while (mes > 12 || mes < 1) {
    mes = prompt("Mes no válido, ingrese correctamente el mes: ");
}

let diaEnMes = validarDiaEnMes(mes); // Se asigna el resultado de la función a diaEnMes

let horario = prompt("Ingrese su horario mañana/tarde: ");
while (horario !== "mañana" && horario !== "tarde") {
    horario = prompt("Ingrese un horario válido (mañana/tarde): ");
}

let hora = prompt("Ingrese la hora: ");

if (horario === "mañana") {
    while (hora > 12 || hora < 7) {
        hora = prompt("Error, el horario de mañana es de 7am a 12pm. Ingrese un horario válido: ");
    }
} else {
    while (hora > 5 || hora < 9) {
        hora = prompt("Error, el horario de tarde es de 5pm a 9pm. Ingrese un horario válido: ");
    }
}

alert("Su turno es el día " + diaEnMes + " del mes " + mes + " a las " + hora + " de la " + horario);
