// ------------------- Configuración -------------------
const configBtn = document.querySelector(".icon-btn");
const configPanel = document.getElementById("config-panel");
const closeConfig = document.getElementById("close-config");

// ------------------- Premium -------------------
const premiumBtn = document.querySelector(".premium-btn");
const premiumPanel = document.getElementById("premium-panel");
const closePremium = document.getElementById("close-premium");
const premiumBuy = document.querySelector(".premium-buy");

// ------------------- Chat -------------------
const decidirBtn = document.getElementById("decidir");
const chatContainer = document.querySelector(".chat-container");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatOutput = document.getElementById("chat-output");

let premiumActive = false;

// ------------------- Eventos -------------------
configBtn.addEventListener("click", () => {
    configPanel.classList.remove("hidden");
});

closeConfig.addEventListener("click", () => {
    configPanel.classList.add("hidden");
});

premiumBtn.addEventListener("click", () => {
    premiumPanel.classList.remove("hidden");
});

closePremium.addEventListener("click", () => {
    premiumPanel.classList.add("hidden");
});

// Comprar premium
premiumBuy.addEventListener("click", () => {
    premiumActive = true;
    alert("¡Premium activado! Ahora todos los chats tienen beneficios.");
    premiumPanel.classList.add("hidden");
});

// Abrir chat principal
decidirBtn.addEventListener("click", () => {
    chatContainer.classList.remove("hidden");
    chatOutput.innerHTML = ""; // limpiar chat
});

// Enviar mensaje
sendBtn.addEventListener("click", () => {
    const msg = userInput.value.trim();
    if (msg === "") return;
    const response = premiumActive
        ? "Respuesta Premium: " + msg
        : "Respuesta normal: " + msg;
    chatOutput.innerHTML += `<p><b>Tú:</b> ${msg}</p><p><b>Bot:</b> ${response}</p>`;
    userInput.value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
});
