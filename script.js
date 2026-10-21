const formulario = document.getElementById("form-reserva");
const NUMERO = "593986930402"; // cámbielo por el suyo, sin + ni espacios

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  const mensaje = `Hola, soy ${nombre}. Quiero reservar ${servicio} el ${fecha} a las ${hora}.`;
  const url = `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});