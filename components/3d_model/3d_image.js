// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls, Plane } from '@react-three/drei';

// function Model() {
//   const { scene } = useGLTF('/assets/model/Final.glb');
  
//   // Setting the model's scale and position
//   scene.scale.set(2.5 , 2.5, 2.5); // Uniform scaling
//   // scene.position.set(0, -2, -1); // Adjusting position to center the model
//   scene.position.set(-1.5, -2.5, 0); // Adjusting position to center the model
//   scene.rotation.set(0, 1, 0); // Adjusting rotation to center the model

//   return <primitive object={scene} />;
// }

// export default function ModelViewer() {
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-12" style={{ height: '700px' }}>
//           <Canvas>
//             <Suspense fallback={null}>
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
//               <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />
//               <perspectiveCamera makeDefault position={[3, 3, 5]} />
//               <Model />
//               <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} args={[10, 10]}>
//                 <meshStandardMaterial attach="material" color="slategray" roughness={0.5} metalness={0.5} />
//               </Plane>
//               {/* Updated OrbitControls */}
//               <OrbitControls 
//                 enableZoom={false} // Disabling zoom
//                 enablePan={false} // Optionally disable panning
//                 enableRotate={true} // Allow rotation
//                 maxPolarAngle={Math.PI / 2} // Limit orbit angle (no flipping)
//                 minPolarAngle={0}
//               />
//             </Suspense>
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// useGLTF.preload('/assets/model/Final.glb');



// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls, Plane } from '@react-three/drei';

// function Model() {
//   const { scene } = useGLTF('/assets/model/Final.glb');
  
//   // Setting the model's scale and position
//   scene.scale.set(2.5 , 2.5, 2.5); // Uniform scaling
//   // scene.position.set(0, -2, -1); // Adjusting position to center the model
//   scene.position.set(-1.5, -2.5, 0); // Adjusting position to center the model
//   scene.rotation.set(0, 1, 0); // Adjusting rotation to center the model

//   return <primitive object={scene} />;
// }

// function BackgroundModal() {
//   // Your background modal implementation goes here
//   const { scene } = useGLTF('/assets/model/kitchen.glb');
  
//   // Setting the model's scale and position
//   scene.scale.set(2.5 , 2.5, 2.5); // Uniform scaling
//   // scene.position.set(0, -2, -1); // Adjusting position to center the model
//   scene.position.set(-1.5, -2.5, 0); // Adjusting position to center the model
//   scene.rotation.set(0, 1, 0); // Adjusting rotation to center the model

//   return<primitive object={scene} />;
// }

// export default function ModelViewer() {
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-12" style={{ height: '700px' }}>
//           <Canvas>
//             <Suspense fallback={null}>
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
//               <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />
//               <perspectiveCamera makeDefault position={[3, 3, 5]} />
//               <BackgroundModal /> {/* Render background modal */}
//               <Model />
//               {/* <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} args={[10, 10]}>
//                 <meshStandardMaterial attach="material" color="slategray" roughness={0.5} metalness={0.5} />
//               </Plane> */}
//               {/* Updated OrbitControls */}
//               <OrbitControls 
//                 enableZoom={false} // Disabling zoom
//                 enablePan={false} // Optionally disable panning
//                 enableRotate={true} // Allow rotation
//                 maxPolarAngle={Math.PI / 2} // Limit orbit angle (no flipping)
//                 minPolarAngle={0}
//               />
//             </Suspense>
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// useGLTF.preload('/assets/model/Final.glb');

// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls } from '@react-three/drei';

// function Model() {
//   const { scene } = useGLTF('/assets/model/Final.glb');
  
//   // Setting the model's scale and position
//   scene.scale.set(3 , 3, 3); // Uniform scaling
//   scene.position.set(-1.5, -5, -5); // Adjusting position to center the model
//   scene.rotation.set(0, 1, 0); // Adjusting rotation to center the model

//   return <primitive object={scene} />;
// }

// function BackgroundModal() {
//   // Your background modal implementation goes here
//   const { scene } = useGLTF('/assets/model/kitchen.glb');
  
//   // Setting the model's scale and position
//   scene.scale.set(2.5 , 2.5, 2.5); // Uniform scaling
//   // scene.position.set(-1.5, -2.5, 0); // Adjusting position to center the model
//   scene.position.set(-1.5, -3, -2); 
//   scene.rotation.set(0, 0, 0); // Adjusting rotation to center the model

//   return <primitive object={scene} />;
// }

// export default function ModelViewer() {
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-12" style={{ height: '800px' }}>
//           <Canvas>
//             <Suspense fallback={null}>
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
//               <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />
//               <perspectiveCamera makeDefault position={[3, 3, 5]} />
//               <BackgroundModal /> {/* Render background modal */}
//               <Model />
//               {/* Updated OrbitControls */}
//               <OrbitControls 
//   enableZoom={false}
//   enablePan={false}
//   enableRotate={true}
//   maxPolarAngle={Math.PI / 2}
//   minPolarAngle={Math.PI / 2}
//   maxAzimuthAngle={Math.PI / 3} // Limit pan angle to 90 degrees (right side)
//   minAzimuthAngle={-Math.PI / 3} // Limit pan angle to -30 degrees (left side)
// />

//             </Suspense>
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// useGLTF.preload('/assets/model/Final.glb');

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
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <directionalLight position={[-10, 10, 5]} intensity={0.5} castShadow />
              <perspectiveCamera makeDefault position={[3, 3, 5]} />
              <KitchenModal /> {/* Render background modal */}
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




