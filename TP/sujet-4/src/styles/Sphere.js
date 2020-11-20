import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Sphere(props) {
  const mesh = useRef()
  const color = `${props.color}`

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={mesh}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Sphere