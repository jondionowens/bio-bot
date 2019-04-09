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

  componentDidMount () {
    document.getElementById("chat-field").addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        this.saveMessage()
      }
  });
  }

  saveMessage(message) {
    const messages = this.state.messages;
    messages.push(document.getElementById("chat-field").value)
    this.setState(messages);
    document.getElementById("chat-field").value = '';
  };

  handleChange(e) {
    // const targetField = e.target.id;
    // const stateChange = {};
    // stateChange[targetField] = e.target.value;
    // this.setState(stateChange);
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
        <Textfield saveMessage={this.saveMessage.bind(this)} sendMessage={this.sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default App;