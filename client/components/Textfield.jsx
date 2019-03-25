import React from 'react';

const TextField = (props) => {
  return (
    <div>
      <input type="text" id="userMessage" onChange={props.handleChange}/>
      <button onClick={props.sendMessage}>Send</button>
    </div>
  )
};

export default TextField;