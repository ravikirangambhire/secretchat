document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'self');
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = messageText;
        messageElement.appendChild(messageParagraph);

        document.getElementById('chat-box').appendChild(messageElement);
        messageInput.value = '';
        messageInput.focus();
        scrollToBottom();
    }
}

function scrollToBottom() {
    const chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}
