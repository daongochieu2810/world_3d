import React from "react";
import { Canvas } from "react-three-fiber";
import CameraControls from "../controls/CameraControls";
import BaseObject from "../three_components/BaseObject";
import "./MainScene.css";

export default function MainScene() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div className="nav-bar">
        <h2 className="title" style={{ margin: 0, padding: 0 }}>
          3D Geometry
        </h2>
      </div>
      <div className="main-scene">
        <div className="info-board">
          <h3 className="title">Object Information</h3>
        </div>
        <div className="main-canvas">
          <Canvas>
            <CameraControls />
            <ambientLight />
            <BaseObject />
            <pointLight position={[10, 10, 10]} />
            <axesHelper scale={[5.0, 5.0, 5.0]} />
            <gridHelper />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
