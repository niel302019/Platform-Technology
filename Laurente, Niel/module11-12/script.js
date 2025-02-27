function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim(); // Fixed typo here

    if (message !== "") {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');

        newMessage.classList.add('message', 'outgoing');
        newMessage.textContent = message;

        chatMessages.appendChild(newMessage);
        messageInput.value = "";
        messageInput.focus();

        // Simulate a reply after a short delay
        setTimeout(sendReply, 1000);
    }
}

const chatMessages = document.getElementById('chat-messages');

function sendReply() {
    const replyMessage = document.createElement('div');
    replyMessage.classList.add('message', 'incoming');
    replyMessage.textContent = 'This is a sample reply.';
    chatMessages.appendChild(replyMessage);
}
