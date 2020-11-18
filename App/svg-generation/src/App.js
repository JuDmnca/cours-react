import { WrapperButtons, WrapperButton, Button } from './styles/Button'
import {WrapperCircle, WrapperCircles } from './styles/Circle'
import { useReducer } from 'react'
import reducer from './reducers/circle'
import './App.css'

const circles = []

function App() {
  const [state, dispatch] = useReducer(reducer, circles)
  return (
    <div className="App">
      <h1>Somes circles here : have fun</h1>
      <WrapperButtons>
        <WrapperButton>
          <Button onClick={() => dispatch({type: 'add'})}>Add a circle</Button>
          <Button onClick={() => dispatch({type: 'reset'})}>Reset all circles</Button>
        </WrapperButton>
        <WrapperButton>
          <Button onClick={() => dispatch({type: 'shuffle'})}>Shuffle</Button>
          <Button onClick={() => dispatch({type: 'unshuffle'})}>Unshuffle</Button>
        </WrapperButton>
        <WrapperButton>
          <Button onClick={() => dispatch({type: 'start_anim'})}>Start animation</Button>
          <Button onClick={() => dispatch({type: 'stop_anim'})}>Stop animation</Button>
        </WrapperButton>
      </WrapperButtons>
      <WrapperCircles>
        {state.map((circle,i) => {return (
          <WrapperCircle key={i} id={circle.id} animate={circle.animate}></WrapperCircle>
        )})}
      </WrapperCircles>
    </div>
  )
}

export default App;
