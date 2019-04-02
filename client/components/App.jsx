import React from 'react';
import Textfield from './Textfield.jsx';
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messageHistory: []
    }
  }

  handleChange(e) {
    const targetField = e.target.id;
    const stateChange = {};
    stateChange[targetField] = e.target.value;
    this.setState(stateChange);
  };

  sendMessage() {
    fetch('/api/bot',{
      method: 'POST',
      body: JSON.stringify({
        userMessage: this.state.userMessage
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => {
      return res.json()
    }).then((botResponse) => {
      const historyUpdate = this.state.messageHistory;
      historyUpdate.push(botResponse[0]);
      this.setState({messageHistory: historyUpdate})
    });
  }

  render() {
    return (
      <div id="wrapper">
        <div id="chatWindow"></div>
        <Textfield handleChange={this.handleChange.bind(this)} sendMessage={this.sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;