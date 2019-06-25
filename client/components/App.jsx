import React from 'react';
import ChatWindow from './ChatWindow.jsx';
import Textfield from './Textfield.jsx';
import {TextMessage} from '../classes/Messages.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount () {
    document.getElementById("chat-field").addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        this.printMessage('user');
      }
  });
  }

  printMessage(avatar, text) {
    if (avatar === 'user') {
      const messages = this.state.messages;
      const message = new TextMessage(avatar, document.getElementById("chat-field").value);
      messages.push(message);
      this.setState(messages);
      document.getElementById("chat-field").value = '';
      this.sendMessageToBot(message.body.text); 
    } else {
      const messages = this.state.messages;
      const message = new TextMessage(avatar, text);
      messages.push(message);
      this.setState(messages);
    }
  };

  handleChange(e) {
    const targetField = e.target.id;
    const stateChange = {};
    stateChange[targetField] = e.target.value;
    this.setState(stateChange);
  };

  sendMessageToBot(message) {
    fetch('/api/bot',{
      method: 'POST',
      body: JSON.stringify({
        userMessage: message
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => {
      return res.json()
    }).then((botResponse) => {
      this.printMessage('bot', botResponse);
    });
  }

  render() {
    return (
      <div id="wrapper">
        <ChatWindow messages={this.state.messages} />
        <Textfield printMessage={this.printMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;