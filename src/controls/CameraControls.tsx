import React, { useEffect, useRef } from "react";
import { useThree, extend, useFrame } from "react-three-fiber";
import { OrbitControls } from "./OrbitControls";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });
const EQUAL_PLUS = 187;
const DASH_MINUS = 189;

const CameraControls = ({ mounted }) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  let zoomValue = 1;
  const {
    camera: camera1,
    gl: { domElement },
  } = useThree();
  const zoomIn = () => {
    zoomValue++;
  };
  const zoomOut = () => {
    if (zoomValue >= 2) zoomValue--;
  };
  const keyDownListener = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      case EQUAL_PLUS:
        if (e.shiftKey) {
          zoomIn();
        }
        break;
      case DASH_MINUS:
        if (e.shiftKey) {
          zoomOut();
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

export default CameraControls;
