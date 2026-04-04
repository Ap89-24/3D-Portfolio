import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const HeroExperience = () => {
  return (
    <Canvas camera={{position: [0,0,15] , fov: 45}}>
      <ambientLight intensity={1} />
      <directionalLight position={[5,5,5]} intensity={4} />
      <OrbitControls />

      <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}

export default HeroExperience
