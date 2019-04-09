import React from 'react';
import ChatWindow from './ChatWindow.jsx';
import Textfield from './Textfield.jsx';
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ['This is the thing', 'This is the thing']
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
      const historyUpdate = this.state.messages;
      historyUpdate.push(botResponse[0]);
      this.setState({messages: historyUpdate}) 
    });
  }

  render() {
    return (
      <div id="wrapper">
        <ChatWindow messages={this.state.messages} />
        <Textfield handleChange={this.handleChange.bind(this)} sendMessage={this.sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;