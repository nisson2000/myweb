import React, { useState } from 'react';
const containerStyle = {
  display: 'flex',
  alignItems: 'center', // Align items vertically in the center
  justifyContent: 'center', // Center items horizontally
  height: '30vh', // Take full viewport height
  padding: '20px', // Add some padding around
};

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!messageInput.trim()) return;
    setMessages([...messages, messageInput]);
    setMessageInput('');
  };

  return (
    <div>
      <h2>Message Board</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          size="50"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="You can leave your message here"
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageBoard;
