
// script.js

// Select HTML elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Array of enhanced bot responses
const botResponses = {
    "hello": "Hey there! It's great to see you. How can I assist you today?",
    "how are you": "I'm just a chatbot, but I'm here and ready to help! How are *you* feeling?",
    "I'm fine":"great",
    "can you help me":"Exactly! what kinds of your question, ",
    "bye": "Goodbye! Take care and have an amazing day ahead!",
    "thank you":"you're very welcome! if you have any question or need further assistance , feel free to ask",
    "default": "Hmm... I didn't catch that. Could you try asking in a different way?"
};

// Function to display a message in the chat box
function addMessage(content, sender) {
    const message = document.createElement('div');
    message.textContent = content;
    message.className = sender; // 'user' or 'bot'
    chatBox.appendChild(message);
}

// Function to handle user input and bot response
function handleChat() {
    const userMessage = userInput.value.trim().toLowerCase();

  // Display user's message
    if (userMessage) {
        addMessage(userMessage, 'user');
        userInput.value = '';

    // Get bot response
        const botMessage = botResponses[userMessage] || botResponses['default'];
        setTimeout(() => {
            addMessage(botMessage, 'bot');
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to latest message
        }, 500); // Delay bot response
    }
}

// Add event listener to button
sendButton.addEventListener('click', handleChat);

// Allow pressing Enter to send message
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
    handleChat();
    }
});

