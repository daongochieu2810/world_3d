import React from "react";
import * as THREE from "three";

export default function BaseObject() {
  return (
    <mesh
      position={new THREE.Vector3(0, 0, 0)}
      geometry={new THREE.SphereGeometry(1, 32, 32)}
      material={
        new THREE.MeshBasicMaterial({
          color: new THREE.Color("hotpink"),
          opacity: 0.5,
          transparent: true,
          side: THREE.DoubleSide,
        })
      }
    />
  );
}
