import React from 'react';

const Message = (props) => {
  if (props.avatar === 'user') {
    if (props.text === 'bot') {
      return (
        <li className="bot-message">{props.text}</li>
      )
    } else {
      return (
        <li className="user-message">{props.text}</li>
      )
    }
  } else {
    return (
      <li>BOT!</li>
    )
  }
};

export default Message;