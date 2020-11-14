import React, { useEffect, useRef } from "react";
import { useThree, extend, useFrame } from "react-three-fiber";
import { OrbitControls } from "./OrbitControls";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  useFrame(() => {
    controls?.current?.update();
  });
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;
