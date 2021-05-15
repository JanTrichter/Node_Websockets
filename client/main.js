// establish connection to the server
const socket = io('ws://localhost:8080');

// get all relevant elements from the DOM
const messageBox = document.querySelector('#message-box');
const sendButton = document.querySelector('.btn-main');
const userMessage = document.querySelector('#message');

// stores a name for sending the message
let sender;

// check if sender exists in local storage, otherwise create a new sender
if(localStorage.getItem('sender')){
    sender = JSON.parse(localStorage.getItem('sender'));
} else {
    sender = chance.name();
    localStorage.setItem('sender', JSON.stringify(sender));
}

// object for storing message data
let message = {
    sender: 'User',
    text: 'Test'
}

// add a new message element to DOM when server sends a message
socket.on('message', (message) => {
    messageBox.insertAdjacentHTML('afterbegin', `
    <p class="normal">
        <span class="sender">
            ${message['sender']}
        </span>
        ${message['text']}
    </p>
    `);
})

// send message when the send button is clicked
sendButton.addEventListener('click', () => {
    message['sender'] = sender,
    message['text'] = userMessage.value;
    userMessage.value = '';

    socket.emit('message', message);
})

// send message when the user clicks enter in the input
userMessage.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        message['sender'] = sender,
        message['text'] = userMessage.value;
        userMessage.value = '';
    
        socket.emit('message', message);
    }
})