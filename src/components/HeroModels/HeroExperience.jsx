import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { ModelRoom } from './ModelRoom';
import HeroLights from './HeroLights';


const HeroExperience = () => {

  const isTablet = useMediaQuery({query: "(max-width: 1024px)"});
  const isMobile = useMediaQuery({query: "(max-width: 768px)"});

  return (
    <Canvas camera={{position: [0,0,15] , fov: 45}}>
      <OrbitControls 
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={25}
      minDistance={6}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 5}
      />
      <HeroLights />
      <group
      scale={isMobile ? 0.7 : 1}
      position={[0 , -3.9 , 0]}
      rotation={[0 , -Math.PI/5 , 0]}
      >
     <ModelRoom />
      </group>
    </Canvas>
  )
}

export default HeroExperience
