const API_URL = "https://stb-func-egcwe4h5byama8eu.ukwest-01.azurewebsites.net/api/chatbot";

async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    const response = await fetch(API_URL + "?q=" + encodeURIComponent(message));
    const text = await response.text();

    addMessage(text, "bot");
}

function addMessage(text, sender) {
    const chatWindow = document.getElementById("chat-window");
    const bubble = document.createElement("div");
    bubble.className = "message " + sender;
    bubble.textContent = text;
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
