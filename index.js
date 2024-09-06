// 4: Reloj Dinámico
//  Crea un reloj que muestre la hora actual y se actualice cada segundo.
// Usa JavaScript para actualizar la hora cada segundo utilizando `setInterval`.

// funcion para obtener la hora actual
function obtenerHoraActual() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  return `${hora}:${minutos}:${segundos}`;
}

// funcion para actualizar la hora cada segundo
function actualizarHora() {
  const hora = document.querySelector("#hora");
  hora.textContent = obtenerHoraActual();
}

// ejecutar la funcion actualizarHora cada segundo

setInterval(actualizarHora, 1000);

