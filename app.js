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
// ABRIR panel de configuración
const configBtn = document.querySelector('.icon-btn');
const configPanel = document.getElementById('config-panel');
const closeConfig = document.getElementById('close-config');

configBtn.addEventListener('click', () => {
  configPanel.classList.remove('hidden');
});

// CERRAR panel
closeConfig.addEventListener('click', () => {
  configPanel.classList.add('hidden');
});
