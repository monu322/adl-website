import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function FinalModel2() {
  const { scene } = useGLTF("/assets/model/Final.glb");

  scene.scale.set(1, 1, 1);
  scene.position.set(-0.9, -1, 0.1);
  scene.rotation.set(0, 1.5, 0);

  return <primitive object={scene} />;
}

function KitchenModal2() {
  const { scene } = useGLTF("/assets/model/restaurant3.glb");
  scene.scale.set(1, 1, 1);
  scene.position.set(0, -1, -6);
  scene.rotation.set(0, -0.5, 0);
  return <primitive object={scene} />;
}

function Background() {
  const texture = useTexture("/assets/model/sky.jpg");


  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function ModelViewer2() {
  const finalControls = useRef();
  const kitchenControls = useRef();

  return (
    <div className="categories-container">
      <div className="row">
        <div className="col-12" style={{ height: "800px" }}>
        <Canvas>
            <Suspense fallback={null}>
              <ambientLight  intensity={1} />
              <directionalLight intensity={8}  />
              <pointLight position={[0, 5, 0]} intensity={2.0} color="#FFD700" />
              <pointLight position={[-1, -1, 0]} intensity={1.5} color="#ffffff" />
              <spotLight  position={[-1, -1, 0]} intensity={4}/>

              <perspectiveCamera makeDefault position={[0, 0, 10]} />
              <KitchenModal2 />
              <FinalModel2 />
              <OrbitControls
                ref={finalControls}
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
              />
              <OrbitControls
                ref={kitchenControls}
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                minDistance={2}
                maxDistance={2}
                maxPolarAngle={Math.PI / 1.6}
                minPolarAngle={Math.PI / 3.5} 
              />
              <Background />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/assets/model/Final.glb");
useGLTF.preload("/assets/model/restaurant3.glb");

