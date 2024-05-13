import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Plane } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/assets/model/Final.glb');
  
  // Setting the model's scale and position
  scene.scale.set(2.5 , 2.5, 2.5); // Uniform scaling
  // scene.position.set(0, -2, -1); // Adjusting position to center the model
  scene.position.set(-1.5, -2.5, 0); // Adjusting position to center the model
  scene.rotation.set(0, 1, 0); // Adjusting rotation to center the model

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12" style={{ height: '700px' }}>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />
              <perspectiveCamera makeDefault position={[3, 3, 5]} />
              <Model />
              <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} args={[10, 10]}>
                <meshStandardMaterial attach="material" color="slategray" roughness={0.5} metalness={0.5} />
              </Plane>
              {/* Updated OrbitControls */}
              <OrbitControls 
                enableZoom={false} // Disabling zoom
                enablePan={false} // Optionally disable panning
                enableRotate={true} // Allow rotation
                maxPolarAngle={Math.PI / 2} // Limit orbit angle (no flipping)
                minPolarAngle={0}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload('/assets/model/Final.glb');
