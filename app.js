// SELECCIÓN DE ELEMENTOS
const configBtn = document.querySelector(".config-btn");
const premiumBtn = document.querySelector(".premium-btn");
const adsBtn = document.querySelector(".ads-btn");

const configPanel = document.getElementById("config-panel");
const premiumPanel = document.getElementById("premium-panel");
const adsPanel = document.getElementById("ads-panel");

const closeConfig = document.getElementById("close-config");
const closePremium = document.getElementById("close-premium");
const closeAds = document.getElementById("close-ads");

const decidirBtn = document.getElementById("decidir");
const userInput = document.getElementById("userInput");
const enviarBtn = document.getElementById("enviar");
const chatBox = document.getElementById("chatBox");

let premiumActivo = false;

// FUNCIONES DE PANEL
configBtn.addEventListener("click", () => {
  configPanel.classList.remove("hidden");
  premiumPanel.classList.add("hidden");
  adsPanel.classList.add("hidden");
});

premiumBtn.addEventListener("click", () => {
  premiumPanel.classList.remove("hidden");
  configPanel.classList.add("hidden");
  adsPanel.classList.add("hidden");
});

adsBtn.addEventListener("click", () => {
  adsPanel.classList.remove("hidden");
  configPanel.classList.add("hidden");
  premiumPanel.classList.add("hidden");
});

closeConfig.addEventListener("click", () => configPanel.classList.add("hidden"));
closePremium.addEventListener("click", () => premiumPanel.classList.add("hidden"));
closeAds.addEventListener("click", () => adsPanel.classList.add("hidden"));

// BOTÓN DECIDIR
decidirBtn.addEventListener("click", () => {
  let opciones = ["Sí", "No", "Tal vez", "Depende"];
  let resultado = opciones[Math.floor(Math.random() * opciones.length)];
  chatBox.innerHTML += `<p><b>Decisión:</b> ${resultado}</p>`;
});

// ENVIAR MENSAJE
enviarBtn.addEventListener("click", () => {
  let mensaje = userInput.value.trim();
  if (mensaje !== "") {
    chatBox.innerHTML += `<p><b>Tú:</b> ${mensaje}</p>`;
    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

// COMPRAR PREMIUM
document.querySelector(".premium-buy").addEventListener("click", () => {
  premiumActivo = true;
  alert("¡Premium activado!");
});
