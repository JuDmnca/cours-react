import './App.css';
import { WrapperButtons, Button, ShuffleButton, AnimButton } from './styles/Button'
import { WrapperControl, Title } from './styles/Control'

import { Canvas } from "react-three-fiber"
import Sphere from "./components/Sphere";
import Text from "./components/Text";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const { spheres } = useSelector(state => state)
  const dispatch = useDispatch()
  const numEasterEgg = 17

  useEffect(() => {
    if ({spheres}.spheres.length === numEasterEgg + 1 && {spheres}.spheres[numEasterEgg].easterEgg === false) {
      dispatch({type :'EASTER_EGG'})
    }
  }, [{spheres}.spheres, dispatch])

  return (
    <div className="App">
      <WrapperControl>
        <Title>Julie De Mendonça : Sujet 4</Title>
        <WrapperButtons>
            <Button onClick={() => dispatch({type: 'ADD_SPHERE'})}>Add a sphere</Button>
            <Button onClick={() => dispatch({type: 'RESET'})}>Reset all spheres</Button>
            <ShuffleButton onClick={() => dispatch({type: 'SHUFFLE'})}>Shuffle</ShuffleButton>
            <ShuffleButton onClick={() => dispatch({type: 'UNSHUFFLE'})}>Unshuffle</ShuffleButton>
            <AnimButton onClick={() => dispatch({type: 'START_ANIM'})}>Start animation</AnimButton>
            <AnimButton onClick={() => dispatch({type: 'STOP_ANIM'})}>Stop animation</AnimButton>
        </WrapperButtons>
      </WrapperControl>
      <Canvas style={{width: '100vw', height: '100vh'}}>
        <ambientLight />
        <pointLight position={[10,10,10]} />
        {{spheres}.spheres.map((sphere,i) => {return (
            <group key={i}>
              <Sphere
                number={sphere.number}
                position={[(i*2 % 20 - 9),(5 - Math.floor(i/10)*2),-5]}
                color={sphere.color}
                animate={sphere.animate}
                easterEgg={sphere.easterEgg}
              />
              <Text
                number={sphere.number}
                position={[(i*2 % 20 - 9.2),(4.51- Math.floor(i/10)*1.9),-4]}
              />
            </group>
          )})}
      </Canvas>
    </div>
  );
}

export default App;
