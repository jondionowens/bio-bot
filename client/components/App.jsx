import React from 'react';
import Textfield from './Textfield.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleChange(e) {
    const targetField = e.target.id;
    const stateChange = {};
    stateChange[targetField] = e.target.value;
    this.setState(stateChange);
  };

  sendMessage() {
    console.log(this.state.userMessage)
    fetch('/api/bot', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: this.state.userMessage 
    })
    .then((res) => {
      console.log('Response from server:', res.result);
    })
  }

  render() {
    return (
      <div>
        <div>Ask a question about Jon:</div>
        <Textfield handleChange={this.handleChange.bind(this)} sendMessage={this.sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;