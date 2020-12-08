import React, {useState} from 'react'
import './App.css';

interface AppProps {
  color:string
}

const App = (props: AppProps):JSX.Element => {
  const [counter, setCounter] = useState(0) 

  const onIncrement = ():void => setCounter(counter + 1)
  const onDecrement = ():void => setCounter(counter - 1)

  return(
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </header>
    </div>
  )
}

// class App extends React.Component {
//   state = { counter: 0}

//   onIncrement = ():void => this.setState({counter: this.state.counter + 1})
//   onDecrement = ():void => this.setState({counter: this.state.counter - 1})

//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//           <p>{this.state.counter}</p>
//           <button onClick={this.onIncrement}>Increment</button>
//           <button onClick={this.onDecrement}>Decrement</button>
//         </header>
//       </div>
//     )
//   }
// }



export default App;
