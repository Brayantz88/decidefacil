// ===== DECIDIR =====
const decisiones = [
  "Sal a caminar 🚶",
  "Mira una peli 🎬",
  "Descansa un rato 😴",
  "Escucha música 🎧",
  "Ordena tu cuarto 🧹"
];

let ultimaDecision = "";

const btnDecidir = document.getElementById("decidir");
const resultado = document.getElementById("resultado");

btnDecidir.addEventListener("click", () => {
  let nueva;
  do {
    nueva = decisiones[Math.floor(Math.random() * decisiones.length)];
  } while (nueva === ultimaDecision);
  ultimaDecision = nueva;
  resultado.textContent = nueva;
});

// ===== PANEL CONFIGURACIÓN =====
const openConfig = document.getElementById("open-config");
const closeConfig = document.getElementById("close-config");
const configPanel = document.getElementById("config-panel");

openConfig.addEventListener("click", () => {
  configPanel.classList.remove("hidden");
});

closeConfig.addEventListener("click", () => {
  configPanel.classList.add("hidden");
});

// ===== PANEL PREMIUM =====
const openPremium = document.getElementById("open-premium");
const closePremium = document.getElementById("close-premium");
const premiumPanel = document.getElementById("premium-panel");

openPremium.addEventListener("click", () => {
  premiumPanel.classList.remove("hidden");
});

closePremium.addEventListener("click", () => {
  premiumPanel.classList.add("hidden");
});

// ===== PANEL ANUNCIOS =====
const openAds = document.getElementById("open-ads");
const closeAds = document.getElementById("close-ads");
const adsPanel = document.getElementById("ads-panel");

openAds.addEventListener("click", () => {
  adsPanel.classList.remove("hidden");
});

closeAds.addEventListener("click", () => {
  adsPanel.classList.add("hidden");
});
