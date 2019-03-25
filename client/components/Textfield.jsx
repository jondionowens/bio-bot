import React from 'react';

const TextField = (props) => {
  return (
    <input type="text" id="userMessage" onChange={props.handleChange}/>
  )
};

export default TextField;