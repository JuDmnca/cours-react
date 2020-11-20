import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Sphere(props) {
  const mesh = useRef()
  const scale = 1
  let time = 0

  useFrame((state, delta) => {
    time += delta
    if (mesh.current) {
      if (props.animate === false) {
        mesh.current.scale.x = scale
        mesh.current.scale.y = scale
        mesh.current.scale.z = scale
      } else {
        console.log(scale)
        mesh.current.scale.x = scale - Math.abs((Math.sin(time) / 2))
        mesh.current.scale.y = scale - Math.abs((Math.sin(time) / 2))
        mesh.current.scale.z = scale - Math.abs((Math.sin(time) / 2))
      }
    }
  })
  return (
      <mesh
        {...props}
        ref={mesh}
        scale={[scale, scale, scale]}
        >
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={props.easterEgg ? 'white' : props.color} />
      </mesh>
  )
}

export default Sphere

