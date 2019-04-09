import React from 'react';
import Message from './Message.jsx';
import uniqid from 'uniqid';

const ChatWindow = (props) => {
  const messages = props.messages.map((message) =>
    <li key={uniqid()}>{message}</li>
  );

  return (
    <div id="chat-window">
      <ul id="messages">
        {messages}
      </ul>
    </div>
  )
}

export default ChatWindow;