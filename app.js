const decisiones = [
  "Sal a caminar 🚶‍♂️",
  "Quédate descansando 😴",
  "Mira una serie 📺",
  "Escucha música 🎧",
  "Come algo rico 🍔",
  "Ordena tu cuarto 🧹"
];

document.getElementById("decidir").addEventListener("click", () => {
  const random = Math.floor(Math.random() * decisiones.length);
  document.getElementById("resultado").textContent = decisiones[random];
});
