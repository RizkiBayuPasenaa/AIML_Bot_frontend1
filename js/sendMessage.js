import { addMessage, chatBox, textarea } from './index.js'; 
function sendMessage() {
    const imageUrlGuest = '../asset/img/guestchat.svg';
    const imageUrlBot = '../asset/img/herochat.svg';

    const userMessage = textarea.value.trim();
    if (userMessage !== '') {
        addMessage(userMessage, 'user-chat', imageUrlGuest);

        fetch('https://rizkibayu18.pythonanywhere.com/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
            .then(response => response.json())
            .then( data => {
                const botMessage = data.response;
                console.log(botMessage);
                addMessage(botMessage, 'bot-respond', imageUrlBot);
            })
            .catch(error => console.error('Error:', error));

        textarea.value = '';
    }
}

export { sendMessage };