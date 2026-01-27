// ---------- Paneles ----------
const configPanel = document.getElementById("config-panel");
const premiumPanel = document.getElementById("premium-panel");
const adsPanel = document.getElementById("ads-panel");

document.getElementById("open-config").addEventListener("click", () => {
    configPanel.scrollIntoView({behavior: "smooth"});
});
document.getElementById("open-premium").addEventListener("click", () => {
    premiumPanel.scrollIntoView({behavior: "smooth"});
});
document.getElementById("open-ads").addEventListener("click", () => {
    adsPanel.scrollIntoView({behavior: "smooth"});
});

// ---------- Premium ----------
let premiumActive = false;
document.getElementById("buy-premium").addEventListener("click", () => {
    premiumActive = true;
    alert("¡Premium activado! Todos los beneficios se aplican.");
});

// ---------- DECIDIR ----------
const decidirBtn = document.getElementById("decidir");
const resultado = document.getElementById("resultado");
decidirBtn.addEventListener("click", () => {
    const opciones = ["Sí", "No", "Tal vez", "Pregunta luego"];
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    resultado.textContent = premiumActive ? `⭐ Premium: ${eleccion}` : eleccion;
});

// ---------- Chat ----------
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatOutput = document.getElementById("chat-output");

sendBtn.addEventListener("click", () => {
    const msg = userInput.value.trim();
    if (!msg) return;
    const respuesta = premiumActive ? `⭐ Premium: ${msg}` : msg;
    chatOutput.innerHTML += `<p><b>Tú:</b> ${msg}</p><p><b>Bot:</b> ${respuesta}</p>`;
    userInput.value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
});
