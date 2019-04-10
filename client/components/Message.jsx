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
      <li>{props.text}</li>
    )
  }
};

export default Message;