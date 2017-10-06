import React, { Component } from 'react';

class Titulo extends Component{
  render(){
    return(
      <h1>{this.props.mensaje}</h1>
    )
  }
}

class App extends Component {
  constructor(...args){
    super(...args)
    this.state = {
      'mensaje': 'Mensaje Inicial'
    }
  }

  cambiarTitulo(){
    this.setState({
      'mensaje': 'Mensaje Cambiado'
    })
  }

  render() {
    return (
      <div className="App">
        <Titulo mensaje={this.state.mensaje}/>
        <button onClick={this.cambiarTitulo.bind(this)}> Cambiar titulo</button>
      </div>
    );
  }
}

export default App;
