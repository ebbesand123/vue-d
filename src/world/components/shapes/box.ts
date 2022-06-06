import { BoxBufferGeometry, MeshStandardMaterial } from "three";
import type { Box, Position } from "@world/global/interfaces";
import { UpdatableObject } from "@world/global/classes";

export function createBox(
  measurements: Box = { width: 2, height: 2, depth: 2 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { x, y, z } = position;
  const { width, height, depth } = measurements;
  const geometry = new BoxBufferGeometry(width, height, depth);
  const material = new MeshStandardMaterial();
  const box = new UpdatableObject(geometry, material);
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
  const cube = new UpdatableObject(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(x, y, z);
  return cube;
}
