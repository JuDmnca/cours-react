import React, { useRef } from 'react'
import * as THREE from 'three';
import NewYork from '../NewYork_Regular.json';

function Text(props) {
  const mesh = useRef()

  const font = new THREE.FontLoader().parse(NewYork)
  const textOptions = {
    font,
    size: 0.4,
    height: 0.1
  }

  return (
      <mesh
        {...props}
        ref={mesh}
        >
        <textGeometry attach='geometry' args={[props.number, textOptions]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
  )
}

export default Text