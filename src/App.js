import React, { Component } from 'react';

class App extends Component {
  constructor(...args){
    super(...args)
    this.state = {
      'contador': 5
    }
  }

  sumar(){
    this.setState({
      contador: this.state.contador + 1
    })
  }
  restar(){
    this.setState({
      contador: this.state.contador -1
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.sumar.bind(this)}>+</button>
        <button onClick={this.restar.bind(this)}>-</button>
        
        <span>Contador: {this.state.contador} </span>
      </div>
    );
  }
}

export default App;
