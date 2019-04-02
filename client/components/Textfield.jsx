import React from 'react';

const TextField = (props) => {
  return (
    <div id="inputWrapper">
      <input type="text" className="chatField" onChange={props.handleChange}/>
    </div>
  )
};

export default TextField;