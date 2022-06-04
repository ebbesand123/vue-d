import { BoxBufferGeometry, MeshStandardMaterial } from "three";
import type { Box, Position } from "@world/global/interfaces";
import { TMesh } from "@world/global/classes";

export function createBox(
  measurements: Box = { width: 2, height: 2, depth: 2 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { x, y, z } = position;
  const { width, height, depth } = measurements;
  const geometry = new BoxBufferGeometry(width, height, depth);
  const material = new MeshStandardMaterial();
  const box = new TMesh(geometry, material);
  box.position.set(x, y, z);

  return box;
}

export function createCube(
  sideLength = 2,
  position: Position = { x: 0, y: -0.5, z: 0 }
) {
  const { x, y, z } = position;
  const geometry = new BoxBufferGeometry(sideLength, sideLength, sideLength);
  const material = new MeshStandardMaterial();
  const cube = new TMesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(x, y, z);
  cube.tick = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };
  return cube;
}
