import Button from './styles/Button'
import Circle from './styles/Circle'
import { useReducer } from 'react'
import reducer from './reducers/circle'
import './App.css'

const circles = []

function App() {
  const [state, dispatch] = useReducer(reducer, circles)
  return (
    <div className="App">
      <h1>Somes circles here</h1>
      <Button onClick={() => dispatch({type: 'add'})}>Add</Button>
      <Button onClick={() => dispatch({type: 'shuffle'})}>Shuffle</Button>
      <div>
        {state.map((circle,i) => {return (
          <Circle key={i} id={circle.id}></Circle>
        )})}
      </div>
    </div>
  )
}

export default App;
