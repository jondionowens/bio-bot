import React from 'react';

const TextField = (props) => {
  return (
    <div id="input-wrapper">
      <input type="text" className="chat-field" onChange={props.handleChange}/>
    </div>
  )
};

export default TextField;