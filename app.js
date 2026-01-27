// ---------- Paneles ----------
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

// ---------- Chat ----------
const decidirBtn = document.getElementById("decidir");
const resultado = document.getElementById("resultado");
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatOutput = document.getElementById("chat-output");

let premiumActive = false;

// ---------- Paneles ----------
configBtn.addEventListener("click", () => configPanel.style.display = "block");
closeConfig.addEventListener("click", () => configPanel.style.display = "none");

premiumBtn.addEventListener("click", () => premiumPanel.style.display = "block");
closePremium.addEventListener("click", () => premiumPanel.style.display = "none");

adsBtn.addEventListener("click", () => adsPanel.style.display = "block");
closeAds.addEventListener("click", () => adsPanel.style.display = "none");

// Comprar Premium
premiumBuy.addEventListener("click", () => {
    premiumActive = true;
    alert("¡Premium activado! Todos los beneficios aplicados.");
    premiumPanel.style.display = "none";
});

// DECIDIR
decidirBtn.addEventListener("click", () => {
    chatContainer.style.display = "flex"; // Se muestra el chat
    const opciones = ["Sí", "No", "Tal vez", "Pregunta luego"];
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    resultado.textContent = premiumActive ? `⭐ Premium: ${eleccion}` : eleccion;
});

// Enviar mensaje en chat
sendBtn.addEventListener("click", () => {
    const msg = userInput.value.trim();
    if (!msg) return;
    const respuesta = premiumActive ? `⭐ Premium: ${msg}` : msg;
    chatOutput.innerHTML += `<p><b>Tú:</b> ${msg}</p><p><b>Bot:</b> ${respuesta}</p>`;
    userInput.value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
});
