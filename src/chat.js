function handleKeyDown(event, participant) {
    if (event.key === 'Enter') {
        sendMessage(participant);
        event.preventDefault();
    }
}
function sendMessage(participant) {
    let messageInput, chatBox, otherChatBox;
    if (participant === 'A') {
        messageInput = document.getElementById('messageInputA');
        chatBox = document.getElementById('chatBoxA');
        otherChatBox = document.getElementById('chatBoxB');
    } else if (participant === 'B') {
        messageInput = document.getElementById('messageInputB');
        chatBox = document.getElementById('chatBoxB');
        otherChatBox = document.getElementById('chatBoxA');
    }

    const message = messageInput.value;
    chatBox.innerHTML += '<p class="message me">' + message + '</p>';
    messageInput.value = '';

    otherChatBox.innerHTML += '<p class="message other">' + message + '</p>';
}