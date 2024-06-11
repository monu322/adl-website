// import React, { Suspense, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls } from '@react-three/drei';

// function FinalModel2() {
//   const { scene } = useGLTF('/assets/model/Final.glb');
  
//   scene.scale.set(1, 1, 1); 
//   scene.position.set(-1, -1, 0); 
//   scene.rotation.set(0, 1, 0);

//   return <primitive object={scene} />;
// }

// function KitchenModal2() {
//   const { scene } = useGLTF('/assets/model/restaurant.glb');
//   scene.scale.set(1, 1, 1); 
//   scene.position.set(0, -1, -6); 
//   scene.rotation.set(0, -0.5, 0); 

//   return <primitive object={scene} />;
// }

// export default function ModelViewer2() {
//   const finalControls = useRef();
//   const kitchenControls = useRef();

//   return (
//     <div className="categories-container mt-4">
//       <div className="row">
//         <div className="col-12" style={{ height: '800px' }}>
//           <Canvas>
//             <Suspense fallback={null}>
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={2.0} castShadow />
//               <directionalLight position={[-10, -10, -5]} intensity={1.5} castShadow />
//               <directionalLight position={[5, 15, 5]} intensity={2.0} castShadow />
//               <directionalLight position={[-5, -10, -5]} intensity={1.5} castShadow />
//               <pointLight position={[0, 5, 0]} intensity={2.0} color="#FFD700" />
//               <pointLight position={[0, -5, 0]} intensity={1.5} color="#FFD700" />
//               <spotLight position={[5, 5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, 5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[5, -5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, -5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[5, 5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, 5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[5, -5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, -5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />

//               <perspectiveCamera makeDefault position={[0, 0, 10]} />
//               <KitchenModal2 />
//               <FinalModel2 /> 
//               <OrbitControls 
//                 ref={finalControls}
//                 enableZoom={true}
//                 enablePan={true}
//                 enableRotate={true}
//               />
//               <OrbitControls 
//                 ref={kitchenControls}
//                 enableZoom={true}
//                 enablePan={true}
//                 enableRotate={true}

//               />
//             </Suspense>
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// useGLTF.preload('/assets/model/Final.glb');
// useGLTF.preload('/assets/model/restaurant.glb');


// import React, { Suspense, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls } from '@react-three/drei';

// function FinalModel2() {
//   const { scene } = useGLTF('/assets/model/Final.glb');
  
//   scene.scale.set(1, 1, 1); 
//   scene.position.set(-1, -1, 0); 
//   scene.rotation.set(0, 1, 0);

//   return <primitive object={scene} />;
// }

// function KitchenModal2() {
//   const { scene } = useGLTF('/assets/model/restaurant.glb');
//   scene.scale.set(1, 1, 1); 
//   scene.position.set(0, -1, -6); 
//   scene.rotation.set(0, -0.5, 0); 

//   return <primitive object={scene} />;
// }

// export default function ModelViewer2() {
//   const finalControls = useRef();
//   const kitchenControls = useRef();

//   return (
//     <div className="categories-container mt-4">
//       <div className="row">
//         <div className="col-12" style={{ height: '800px' }}>
//           <Canvas>
//             <Suspense fallback={null}>
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={2.0} castShadow />
//               <directionalLight position={[-10, -10, -5]} intensity={1.5} castShadow />
//               <directionalLight position={[5, 15, 5]} intensity={2.0} castShadow />
//               <directionalLight position={[-5, -10, -5]} intensity={1.5} castShadow />
//               <pointLight position={[0, 5, 0]} intensity={2.0} color="#FFD700" />
//               <pointLight position={[0, -5, 0]} intensity={1.5} color="#FFD700" />
//               <spotLight position={[5, 5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, 5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[5, -5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, -5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[5, 5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, 5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[5, -5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
//               <spotLight position={[-5, -5, -5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />

//               <perspectiveCamera makeDefault position={[0, 0, 10]} />
//               <KitchenModal2 />
//               <FinalModel2 /> 
//               <OrbitControls 
//                 ref={finalControls}
//                 enableZoom={true}
//                 enablePan={true}
//                 enableRotate={true}
//               />
//               <OrbitControls 
//                 ref={kitchenControls}
//                 enableZoom={true}
//                 enablePan={true}
//                 enableRotate={true}
//                 minDistance={2}
//                 maxDistance={2}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2}
            
//               />
//             </Suspense>
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// useGLTF.preload('/assets/model/Final.glb');
// useGLTF.preload('/assets/model/restaurant.glb');

import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function FinalModel2() {
  const { scene } = useGLTF('/assets/model/Final.glb');
  
  scene.scale.set(1, 1, 1); 
  scene.position.set(-1, -1, 0); 
  scene.rotation.set(0, 1, 0);

  return <primitive object={scene} />;
}

function KitchenModal2() {
  const { scene } = useGLTF('/assets/model/restaurant.glb');
  scene.scale.set(1, 1, 1); 
  scene.position.set(0, -1, -6); 
  scene.rotation.set(0, -0.5, 0); 

  return <primitive object={scene} />;
}

export default function ModelViewer2() {
  const finalControls = useRef();
  const kitchenControls = useRef();

  return (
    <div className="categories-container mt-4">
      <div className="row">
        <div className="col-12" style={{ height: '800px' }}>
          <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
               <directionalLight position={[10, 10, 5]} intensity={2.0}  />
               <directionalLight position={[-10, -10, -5]} intensity={1.5}  />
               <directionalLight position={[5, 15, 5]} intensity={2.0}  />
               <directionalLight position={[-5, -10, -5]} intensity={1.5}  />
               <pointLight position={[0, 5, 0]} intensity={2.0} color="#FFD700" />
               <pointLight position={[0, -5, 0]} intensity={1.5} color="#FFD700" />
               <spotLight position={[5, 5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
               <spotLight position={[-5, 5, 5]} intensity={1.5} angle={Math.PI / 6} color="#FFD700" />
              <hemisphereLight skyColor={"#ffffff"} groundColor={"#FFD700"} intensity={1.5} position={[0, 50, 0]} />
              
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
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload('/assets/model/Final.glb');
useGLTF.preload('/assets/model/restaurant.glb');





