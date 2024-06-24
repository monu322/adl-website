

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function FinalModel2() {
  const { scene } = useGLTF("/assets/model/Final.glb");

  scene.scale.set(15.5, 15.5, 15.5);
  scene.position.set(2, -26.5, 17);
  scene.rotation.set(0, 2.4, 0);

  return <primitive object={scene} />;
}

function KitchenModal2() {
  const { scene } = useGLTF("/assets/model/cafe.glb");
  scene.scale.set(10, 15, 45);
  scene.position.set(1, 1, -5);
  scene.rotation.set(0, -5.5, 0);
  return <primitive object={scene} />;
}

export default function ModelViewer2() {
  const controls = useRef();

  return (
    <div className="categories-container">
      <div className="row">
        <div className="col-12" style={{ height: "800px" }}>
          <Canvas
          pixelRatio={window.devicePixelRatio}
            camera={{
              
              position: [40, 0, 30], // Set the initial position of the camera
              fov: 75,
              aspect: window.innerWidth / window.innerHeight,
              near: 0.1,
              far: 500,
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight intensity={4} />
              <pointLight position={[0, 5, 0]} intensity={2.0} color="#FFD700" />
              <pointLight position={[-1, -1, 0]} intensity={1.5} color="#ffffff" />
              <spotLight position={[-1, -1, 0]} intensity={4} />

              <KitchenModal2 />
              <FinalModel2 />
              <OrbitControls
                ref={controls}
                autoRotate
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                minDistance={30}
                maxDistance={50}
                maxPolarAngle={Math.PI / 1.6}
               minPolarAngle={Math.PI / 2.5} 
              />
         
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/assets/model/Final.glb");
useGLTF.preload("/assets/model/cafe.glb");






