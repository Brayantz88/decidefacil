const decisiones = [
  "Quédate descansando 😴",
  "Sal a caminar 🚶",
  "Mira una peli 🎬",
  "Escucha música 🎧",
  "Haz algo productivo 💪"
];

const boton = document.getElementById("decidir");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const random = Math.floor(Math.random() * decisiones.length);
  resultado.textContent = decisiones[random];
});
