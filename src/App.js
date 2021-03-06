import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Output from './UserOutput';
import Input from './UserInput';

class App extends Component {
  state = {
    username : [
      {
        the_username : 'Nurudeen' 
      },
      {
        the_username : 'Olawale' 
      },
      {
        the_username : 'Ajala' 
      },
      {
        the_username : 'DIKIRULLAH' 
      },
      {
        the_username : 'Adelaja' 
      }
    ]
  }

  //adding a method to manipulate the state
  eventHandler = (event) => {
    this.setState({
      username : [
        {
          the_username : event.target.value
        },
        {
          the_username : 'lekan' 
        },
        {
          the_username : 'lokoso' 
        },
        {
          the_username : 'samsondeen' 
        },
        {
          the_username : 'wahab' 
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Output username={this.state.username[0].the_username}/>
        <Output username={this.state.username[1].the_username}/>
        <Output username={this.state.username[2].the_username}/>
        <Output username={this.state.username[3].the_username}/>

        <Input whenValueIsChanged={this.eventHandler} name={this.state.username[0].the_username}/>
      </div>
    );
  }
}

export default App;
