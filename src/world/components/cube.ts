import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from "three";

export function createCube(position = { x: 2, y: 2, z: 2 }) {
  const geometry = new BoxBufferGeometry(position.x, position.y, position.z);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material)

  return cube;
}