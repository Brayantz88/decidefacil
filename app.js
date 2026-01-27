// ---------- Botones y paneles ----------
const configBtn = document.getElementById("open-config");
const configPanel = document.getElementById("config-panel");
const closeConfig = document.getElementById("close-config");

const premiumBtn = document.getElementById("open-premium");
const premiumPanel = document.getElementById("premium-panel");
const closePremium = document.getElementById("close-premium");
const premiumBuy = document.querySelector(".premium-buy");

const decidirBtn = document.getElementById("decidir");
const resultado = document.getElementById("resultado");

let premiumActive = false;

// ---------- Eventos ----------
configBtn.addEventListener("click", () => {
    configPanel.style.display = "block";
});

closeConfig.addEventListener("click", () => {
    configPanel.style.display = "none";
});

premiumBtn.addEventListener("click", () => {
    premiumPanel.style.display = "block";
});

closePremium.addEventListener("click", () => {
    premiumPanel.style.display = "none";
});

// Comprar premium
premiumBuy.addEventListener("click", () => {
    premiumActive = true;
    alert("¡Premium activado!");
    premiumPanel.style.display = "none";
});

// DECIDIR
decidirBtn.addEventListener("click", () => {
    const mensajes = ["Sí", "No", "Tal vez", "Pregunta luego"];
    const eleccion = mensajes[Math.floor(Math.random() * mensajes.length)];
    resultado.textContent = premiumActive ? `⭐ Premium: ${eleccion}` : eleccion;
});
