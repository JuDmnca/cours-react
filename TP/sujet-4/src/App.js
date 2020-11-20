import './App.css';
import { WrapperButtons, Button } from './styles/Button'
import { Canvas } from "react-three-fiber"
import Sphere from "./styles/Sphere";
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const { circles } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <WrapperButtons>
          <Button onClick={() => dispatch({type: 'ADD_SPHERE'})}>Add a circle</Button>
          <Button onClick={() => dispatch({type: 'RESET'})}>Reset all circles</Button>
          <Button onClick={() => dispatch({type: 'SHUFFLE'})}>Shuffle</Button>
          <Button onClick={() => dispatch({type: 'UNSHUFFLE'})}>Unshuffle</Button>
          <Button onClick={() => dispatch({type: 'START_ANIM'})}>Start animation</Button>
          <Button onClick={() => dispatch({type: 'STOP_ANIM'})}>Stop animation</Button>
      </WrapperButtons>
      <Canvas style={{width: '100vw', height: '100vh'}}>
        <ambientLight />
        <pointLight position={[10,10,10]} />
        {{circles}.circles.map((circle,i) => {return (
            <Sphere
              key={i}
              id={circle.id}
              position={[(i*2 % 20 - 9),(5 - Math.floor(i/10)*2),-5]}
              color={circle.color}
            />
          )})}
      </Canvas>
    </div>
  );
}

export default App;
