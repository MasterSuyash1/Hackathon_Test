// src/components/ChatPage.js
import React, { useState } from 'react';
import "../../src/ChatPage.css"; // Separate CSS file for ChatPage styling

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', message: 'Hey there!' },
    { id: 2, user: 'Bob', message: 'Hi! How are you?' },
    { id: 3, user: 'Alice', message: 'I’m doing great, thanks!' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: 'You', message: newMessage }]);
      setNewMessage(''); // Clear input field
    }
  };

  return (
    <div className="chat-page">
      <h2>Chat</h2>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <strong>{msg.user}: </strong>{msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
