import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });
const EQUAL_PLUS = 187;

const CameraControls = ({ mounted }) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  let zoomValue = 1;
  const {
    camera: camera1,
    gl: { domElement },
  } = useThree();
  const zoom = () => {
    zoomValue++;
  };
  const keyDownListener = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      case EQUAL_PLUS:
        if (e.shiftKey) {
          zoom();
        }
        break;
      default:
        break;
    }
  };
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();

  useFrame(() => {
    controls?.current?.update();
  });
  useFrame(({ camera }) =>
    camera.updateProjectionMatrix(void (camera.zoom = zoomValue))
  );
  useEffect(() => {
    document.addEventListener("keydown", keyDownListener);
  }, [mounted]);
  return <orbitControls ref={controls} args={[camera1, domElement]} />;
};

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="main-canvas">
      <Canvas>
        <CameraControls mounted={true} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <axesHelper scale={[5.0, 5.0, 5.0]} />
        <gridHelper />
      </Canvas>
    </div>
  );
}
