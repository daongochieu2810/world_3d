import React, { useRef } from "react";
import * as THREE from "three";

export default function BaseObject() {
  const mainShape = new THREE.SphereGeometry(1, 32, 32);
  const test = useRef();
  return (
    <group>
      <mesh
        ref={test}
        position={new THREE.Vector3(0, 0, 0)}
        geometry={mainShape}
        material={
          new THREE.MeshBasicMaterial({
            color: new THREE.Color("hotpink"),
            opacity: 0.5,
            transparent: true,
            side: THREE.DoubleSide,
          })
        }
      />
      <lineSegments
        position={new THREE.Vector3(0, 0, 0)}
        geometry={new THREE.EdgesGeometry(mainShape)}
      >
        <lineBasicMaterial color={"white"} />
      </lineSegments>
    </group>
  );
}
