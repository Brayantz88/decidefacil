
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

let ultimaDecision = "";

boton.addEventListener("click", () => {
  resultado.style.opacity = 0;

  setTimeout(() => {
    let nuevaDecision = "";

    // evita repetir la misma
    do {
      const random = Math.floor(Math.random() * decisiones.length);
      nuevaDecision = decisiones[random];
    } while (nuevaDecision === ultimaDecision);

    ultimaDecision = nuevaDecision;
    resultado.textContent = nuevaDecision;
    resultado.style.opacity = 1;
  }, 300);
});
document.getElementById("premium").addEventListener("click", () => {
  alert("Premium próximamente 👑");
});

document.getElementById("config").addEventListener("click", () => {
  alert("Configuración ⚙️");
});
