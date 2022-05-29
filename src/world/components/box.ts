import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from "three";
import type { Box, Position } from "@/world/global/interfaces";

export function createBox(
  measurements: Box = { width: 2, height: 2, depth: 2 },
  position: Position = { x: 0, y: 0, z: 0 }
  ) {
  const { x, y, z } = position;
  const { width, height, depth } = measurements;
  const geometry = new BoxBufferGeometry(width, height, depth);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material)

  cube.position.set(x, y, z)

  return cube;

}

export function createCube(
  sideLength: number = 2,
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { x, y, z } = position;
  const geometry = new BoxBufferGeometry(sideLength, sideLength, sideLength);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material)

  cube.position.set(x, y, z)

  return cube;
}