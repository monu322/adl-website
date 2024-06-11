import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function FinalModel() {
  const { scene } = useGLTF('/assets/model/Final.glb');
  
  // Setting the model's scale and position
  scene.scale.set(3 , 3, 3); // Uniform scaling
  scene.position.set(-1.5, -5, -5); // Adjusting position to center the model
  scene.rotation.set(0, 1, 0); // Adjusting rotation to center the model

  return <primitive object={scene} />;
}

function KitchenModal() {
  // Your background modal implementation goes here
  const { scene } = useGLTF('/assets/model/kitchen.glb');
  
  // Setting the model's scale and position
  scene.scale.set(2.5 , 2.5, 2.5); // Uniform scaling
  // scene.position.set(-1.5, -2.5, 0); // Adjusting position to center the model
  scene.position.set(-1.5, -3, -2); 
  scene.rotation.set(0, 0, 0); // Adjusting rotation to center the model

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  const finalControls = useRef();
  const kitchenControls = useRef();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12" style={{ height: '800px' }}>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={3} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />
              <perspectiveCamera makeDefault position={[3, 3, 5]} />
              {/* <KitchenModal /> Render background modal */}
              <FinalModel /> {/* Render Final.glb model */}
              {/* FinalModel OrbitControls */}
              <OrbitControls 
                ref={finalControls}
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                maxAzimuthAngle={Math.PI / 3} // Limit pan angle to 60 degrees (right side)
                minAzimuthAngle={-Math.PI / 3} // Limit pan angle to -60 degrees (left side)
              />
              {/* KitchenModal OrbitControls */}
              <OrbitControls 
                ref={kitchenControls}
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={0}
                maxAzimuthAngle={Math.PI} // Limit pan angle to 180 degrees
                minAzimuthAngle={-Math.PI} // Limit pan angle to -180 degrees
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload('/assets/model/Final.glb');
useGLTF.preload('/assets/model/kitchen.glb');




