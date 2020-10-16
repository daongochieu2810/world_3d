import React from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "../controls/CameraControls";
import BaseObject from "../three_components/BaseObject";
import "./MainScene.css";

export default function MainScene() {
  return (
    <div className="main-canvas">
      <Canvas>
        <CameraControls mounted={true} />
        <ambientLight />
        <BaseObject />
        <pointLight position={[10, 10, 10]} />
        <axesHelper scale={[5.0, 5.0, 5.0]} />
        <gridHelper />
      </Canvas>
    </div>
  );
}
