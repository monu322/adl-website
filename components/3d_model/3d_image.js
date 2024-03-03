

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

// function Model() {
//   const { scene } = useGLTF('/assets/model/full_machine_assem2.glb');
//   // Adjust the scale as needed to make the model bigger
//   return <primitive object={scene} scale={[2, 2, 2]} />;
// }


function Model() {
    const { scene } = useGLTF('/assets/model/full_machine_assem2.glb');
    return <primitive object={scene} scale={[1.3, 1.3, 1.3]} />; 
  }

export default function ModelViewer() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

