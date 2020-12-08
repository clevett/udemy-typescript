import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

class App extends React.Component {
  state = { counter: 0}

  onIncrement = ():void => this.setState({counter: this.state.counter + 1})
  onDecrement = ():void => this.setState({counter: this.state.counter - 1})

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p>{this.state.counter}</p>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </header>
      </div>
    )
  }
}


ReactDOM.render( <App />, document.getElementById('root') );

