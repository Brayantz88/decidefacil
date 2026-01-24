const boton = document.getElementById("decidir");
const resultado = document.getElementById("resultado");

const decisiones = [
  "Mira una peli 🎬",
  "Sal a caminar 🚶",
  "Escucha música 🎧",
  "Descansa un rato 😴",
  "Ordena tu cuarto 🧹",
  "Habla con alguien 💬"
];

boton.addEventListener("click", () => {
  resultado.style.opacity = 0;

  setTimeout(() => {
    const random = Math.floor(Math.random() * decisiones.length);
    resultado.textContent = decisiones[random];
    resultado.style.opacity = 1;
  }, 200);
});
