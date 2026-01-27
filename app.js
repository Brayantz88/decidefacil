// ===============================
// ESTADO PREMIUM (GLOBAL)
// ===============================
let isPremium = localStorage.getItem("premium") === "true";

// ===============================
// BOTONES DE PANELES
// ===============================
const openConfig = document.getElementById("open-config");
const closeConfig = document.getElementById("close-config");
const configPanel = document.getElementById("config-panel");

const openPremium = document.getElementById("open-premium");
const closePremium = document.getElementById("close-premium");
const premiumPanel = document.getElementById("premium-panel");

const openAds = document.getElementById("open-ads");
const closeAds = document.getElementById("close-ads");
const adsPanel = document.getElementById("ads-panel");

// Abrir / cerrar Configuración
openConfig?.addEventListener("click", () => {
  configPanel.classList.remove("hidden");
});
closeConfig?.addEventListener("click", () => {
  configPanel.classList.add("hidden");
});

// Abrir / cerrar Premium
openPremium?.addEventListener("click", () => {
  premiumPanel.classList.remove("hidden");
});
closePremium?.addEventListener("click", () => {
  premiumPanel.classList.add("hidden");
});

// Abrir / cerrar Anuncios
openAds?.addEventListener("click", () => {
  adsPanel.classList.remove("hidden");
});
closeAds?.addEventListener("click", () => {
  adsPanel.classList.add("hidden");
});

// ===============================
// COMPRAR PREMIUM
// ===============================
const buyPremiumBtn = document.querySelector(".premium-buy");

buyPremiumBtn?.addEventListener("click", () => {
  isPremium = true;
  localStorage.setItem("premium", "true");
  alert("⭐ Premium activado correctamente");
  premiumPanel.classList.add("hidden");
});

// ===============================
// CHAT PRINCIPAL (DECIDIR)
// ===============================
const chatText = document.getElementById("chat-text");
const sendChat = document.getElementById("send-chat");
const chatMessages = document.getElementById("chat-messages");

sendChat?.addEventListener("click", enviarMensaje);
chatText?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") enviarMensaje();
});

function enviarMensaje() {
  const texto = chatText.value.trim();
  if (texto === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.textContent = "Tú: " + texto;
  chatMessages.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "chat-message bot";

  if (isPremium) {
    botMsg.textContent = "App: Respuesta premium ✨";
  } else {
    botMsg.textContent = "App: Límite gratis. Activa Premium ⭐";
  }

  chatMessages.appendChild(botMsg);

  chatText.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===============================
// CHAT ASISTENTE (PANTALLA COMPLETA)
// ===============================
const openAssistant = document.getElementById("open-assistant");
const closeAssistant = document.getElementById("close-assistant");
const assistantScreen = document.getElementById("assistant-screen");

const assistantText = document.getElementById("assistant-text");
const assistantSend = document.getElementById("assistant-send");
const assistantMessages = document.getElementById("assistant-messages");

// Abrir / cerrar asistente
openAssistant?.addEventListener("click", () => {
  assistantScreen.classList.remove("hidden");
});
closeAssistant?.addEventListener("click", () => {
  assistantScreen.classList.add("hidden");
});

assistantSend?.addEventListener("click", enviarAsistente);
assistantText?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") enviarAsistente();
});

function enviarAsistente() {
  const texto = assistantText.value.trim();
  if (texto === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.textContent = "Tú: " + texto;
  assistantMessages.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "chat-message bot";

  if (isPremium) {
    botMsg.textContent = "Asistente: Respuesta premium ✨";
  } else {
    botMsg.textContent = "Asistente: Activa Premium para continuar ⭐";
  }

  assistantMessages.appendChild(botMsg);

  assistantText.value = "";
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}
