import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;

// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Model from "./components/Cube.jsx";

// const App = () => {
// const [zoom, setZoom] = useState(1);
// const cameraRef = useRef();

// useFrame(() => {
//   if (cameraRef.current) {
//     cameraRef.current.zoom = zoom;
//     cameraRef.current.updateProjectionMatrix();
//   }
// });

// const handleScroll = (event) => {
//   setZoom((prevZoom) => Math.max(0.1, prevZoom + event.deltaY * -0.001));
// };

//   return (
//     <div style={{ height: "100vh" }}>
//       <Canvas>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Model url="/models/Cube.glb" />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

// export default App;
