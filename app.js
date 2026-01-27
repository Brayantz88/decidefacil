// ===============================
// ESTADO PREMIUM
// ===============================
let isPremium = localStorage.getItem("premium") === "true";

// ===============================
// CONTROL DE MENSAJES GRATIS
// ===============================
const MAX_FREE_MESSAGES = 2;

function getToday() {
  return new Date().toISOString().split("T")[0];
}

let messageData = JSON.parse(localStorage.getItem("messageData")) || {
  date: getToday(),
  count: 0
};

if (messageData.date !== getToday()) {
  messageData = { date: getToday(), count: 0 };
  localStorage.setItem("messageData", JSON.stringify(messageData));
}

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

openConfig?.addEventListener("click", () => configPanel.classList.remove("hidden"));
closeConfig?.addEventListener("click", () => configPanel.classList.add("hidden"));

openPremium?.addEventListener("click", () => premiumPanel.classList.remove("hidden"));
closePremium?.addEventListener("click", () => premiumPanel.classList.add("hidden"));

openAds?.addEventListener("click", () => adsPanel.classList.remove("hidden"));
closeAds?.addEventListener("click", () => adsPanel.classList.add("hidden"));

// ===============================
// COMPRAR PREMIUM
// ===============================
document.querySelector(".premium-buy")?.addEventListener("click", () => {
  isPremium = true;
  localStorage.setItem("premium", "true");
  alert("⭐ Premium activado correctamente");
  premiumPanel.classList.add("hidden");
});

// ===============================
// FUNCIÓN PARA VERIFICAR LÍMITE
// ===============================
function canSendMessage() {
  if (isPremium) return true;

  if (messageData.count >= MAX_FREE_MESSAGES) {
    alert("Límite diario alcanzado. Activa Premium ⭐");
    return false;
  }

  messageData.count++;
  localStorage.setItem("messageData", JSON.stringify(messageData));
  return true;
}

// ===============================
// CHAT PRINCIPAL
// ===============================
const chatText = document.getElementById("chat-text");
const sendChat = document.getElementById("send-chat");
const chatMessages = document.getElementById("chat-messages");

sendChat?.addEventListener("click", () => {
  if (!canSendMessage()) return;
  enviarMensaje();
});

chatText?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (!canSendMessage()) return;
    enviarMensaje();
  }
});

function enviarMensaje() {
  const texto = chatText.value.trim();
  if (!texto) return;

  chatMessages.innerHTML += `<div class="chat-message user">Tú: ${texto}</div>`;
  chatMessages.innerHTML += `<div class="chat-message bot">App: ${isPremium ? "Respuesta premium ✨" : "Respuesta básica"}</div>`;

  chatText.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===============================
// CHAT ASISTENTE
// ===============================
const openAssistant = document.getElementById("open-assistant");
const closeAssistant = document.getElementById("close-assistant");
const assistantScreen = document.getElementById("assistant-screen");

const assistantText = document.getElementById("assistant-text");
const assistantSend = document.getElementById("assistant-send");
const assistantMessages = document.getElementById("assistant-messages");

openAssistant?.addEventListener("click", () => assistantScreen.classList.remove("hidden"));
closeAssistant?.addEventListener("click", () => assistantScreen.classList.add("hidden"));

assistantSend?.addEventListener("click", () => {
  if (!canSendMessage()) return;
  enviarAsistente();
});

assistantText?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (!canSendMessage()) return;
    enviarAsistente();
  }
});

function enviarAsistente() {
  const texto = assistantText.value.trim();
  if (!texto) return;

  assistantMessages.innerHTML += `<div class="chat-message user">Tú: ${texto}</div>`;
  assistantMessages.innerHTML += `<div class="chat-message bot">Asistente: ${isPremium ? "Respuesta premium ✨" : "Respuesta básica"}</div>`;

  assistantText.value = "";
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}
const decidirBtn = document.getElementById("decidir");
const chatScreen = document.getElementById("chat-screen");
const closeChat = document.getElementById("close-chat");
const sendChat = document.getElementById("send-chat");
const chatText = document.getElementById("chat-text");
const chatMessages = document.getElementById("chat-messages");

// abrir chat
decidirBtn.addEventListener("click", () => {
  chatScreen.classList.remove("hidden");
});

// cerrar chat
closeChat.addEventListener("click", () => {
  chatScreen.classList.add("hidden");
});

// enviar mensaje
sendChat.addEventListener("click", sendMessage);

chatText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  if (chatText.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = chatText.value;
  chatMessages.appendChild(userMsg);

  chatText.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // respuesta fake (IA luego)
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "Analizando tu decisión 🤔...";
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 600);
}
