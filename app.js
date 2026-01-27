// ---------- Elementos ----------
const configBtn = document.getElementById("open-config");
const configPanel = document.getElementById("config-panel");
const closeConfig = document.getElementById("close-config");

const premiumBtn = document.getElementById("open-premium");
const premiumPanel = document.getElementById("premium-panel");
const closePremium = document.getElementById("close-premium");
const premiumBuy = document.querySelector(".premium-buy");

const adsBtn = document.getElementById("open-ads");
const adsPanel = document.getElementById("ads-panel");
const closeAds = document.getElementById("close-ads");

const decidirBtn = document.getElementById("decidir");
const resultado = document.getElementById("resultado");

let premiumActive = false;

// ---------- Eventos ----------
configBtn.addEventListener("click", () => configPanel.style.display = "block");
closeConfig.addEventListener("click", () => configPanel.style.display = "none");

premiumBtn.addEventListener("click", () => premiumPanel.style.display = "block");
closePremium.addEventListener("click", () => premiumPanel.style.display = "none");

adsBtn.addEventListener("click", () => adsPanel.style.display = "block");
closeAds.addEventListener("click", () => adsPanel.style.display = "none");

// Comprar Premium
premiumBuy.addEventListener("click", () => {
    premiumActive = true;
    alert("¡Premium activado! Ahora todos los beneficios se aplicarán.");
    premiumPanel.style.display = "none";
});

// DECIDIR
decidirBtn.addEventListener("click", () => {
    const opciones = ["Sí", "No", "Tal vez", "Pregunta luego"];
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    resultado.textContent = premiumActive ? `⭐ Premium: ${eleccion}` : eleccion;
});
