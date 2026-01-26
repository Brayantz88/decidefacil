const boton = document.getElementById("decidir");
const resultado = document.getElementById("resultado");

const opciones = [
  "Sí",
  "No",
  "Tal vez",
  "Mejor espera",
  "Hazlo",
  "No lo hagas"
];

boton.addEventListener("click", () => {
  const random = Math.floor(Math.random() * opciones.length);
  resultado.textContent = opciones[random];
});
