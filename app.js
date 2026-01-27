// BOTONES PANEL
const btnConfig = document.getElementById("btn-config");
const btnPremium = document.getElementById("btn-premium");
const btnAds = document.getElementById("btn-ads");

const panelConfig = document.getElementById("panel-config");
const panelPremium = document.getElementById("panel-premium");
const panelAds = document.getElementById("panel-ads");

const closeButtons = document.querySelectorAll(".close-panel");

// CHAT
const decidirBtn = document.getElementById("decidir");
const userInput = document.getElementById("userInput");
const enviarBtn = document.getElementById("enviar");
const chatBox = document.getElementById("chatBox");

let premiumActivo = false;

// ABRIR PANELES
btnConfig.addEventListener("click", () => {
  panelConfig.classList.remove("hidden");
  panelPremium.classList.add("hidden");
  panelAds.classList.add("hidden");
});

btnPremium.addEventListener("click", () => {
  panelPremium.classList.remove("hidden");
  panelConfig.classList.add("hidden");
  panelAds.classList.add("hidden");
});

btnAds.addEventListener("click", () => {
  panelAds.classList.remove("hidden");
  panelConfig.classList.add("hidden");
  panelPremium.classList.add("hidden");
});

// CERRAR PANELES
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    panelConfig.classList.add("hidden");
    panelPremium.classList.add("hidden");
    panelAds.classList.add("hidden");
  });
});

// BOTÓN DECIDIR
decidirBtn.addEventListener("click", () => {
  const opciones = ["Sí", "No", "Tal vez", "Depende"];
  let resultado = opciones[Math.floor(Math.random() * opciones.length)];
  chatBox.innerHTML += `<p><b>Decisión:</b> ${resultado}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
});

// ENVIAR MENSAJE
enviarBtn.addEventListener("click", () => {
  const mensaje = userInput.value.trim();
  if (mensaje !== "") {
    chatBox.innerHTML += `<p><b>Tú:</b> ${mensaje}</p>`;
    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
