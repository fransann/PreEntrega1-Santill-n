class Cliente {
    constructor(nombre, mes, dia, horario, hora) {
      this.nombre = nombre;
      this.mes = mes;
      this.dia = dia;
      this.horario = horario;
      this.hora = hora;
    }
  
    mostrarTurno() {
      return `${this.nombre}, tu turno es el día ${this.dia} del mes ${this.mes} a las ${this.hora} de la ${this.horario}.`;
    }
  }
  
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
      dia = prompt(`Ese día no está disponible en el mes o ya está ocupado, ingrese correctamente el día: `);
    }
  
    return dia;
  }
  
  const generarCliente = () => {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let mes = prompt("Por favor, ingresa el mes en que deseas tu turno");
  
    while (mes > 12 || mes < 1) {
      mes = prompt("Mes no válido, ingrese correctamente el mes: ");
    }
  
    let diasOcupadosPorMes = {
      1: [5, 10], // Ejemplo: Enero, días 5 y 10 ocupados
      2: [15, 20], // Ejemplo: Febrero, días 15 y 20 ocupados
    };
  
    let dia = validarDiaEnMes(mes, diasOcupadosPorMes);
    let horario = prompt("Ingrese su horario mañana/tarde: ");
    
    while (horario !== "mañana" && horario !== "tarde") {
      horario = prompt("Ingrese un horario válido (mañana/tarde): ");
    }
  
    let hora = prompt("Ingrese la hora: ");
  
    if (horario === "mañana") {
      while (hora > 12 || hora < 7) {
        hora = prompt("Error, el horario de mañana es de 7am a 12pm. Ingrese un horario válido: ");
      }
    } else if (horario === "tarde") {
      while (hora > 9 || hora < 5) {
        hora = prompt("Error, el horario de tarde es de 5pm a 9pm. Ingrese un horario válido: ");
      }
    }
  
    return new Cliente(nombre, mes, dia, horario, hora);
  }
  
  const clientes = [];
  
  const agregarCliente = () => {
    const cliente = generarCliente();
    clientes.push(cliente);
  }
  
  const mostrarTurnos = () => {
    clientes.forEach(cliente => {
      console.log(cliente.mostrarTurno());
    });
  }
  
  agregarCliente(); // Agregar un cliente al array de clientes
  mostrarTurnos(); // Mostrar los turnos de todos los clientes en el array
