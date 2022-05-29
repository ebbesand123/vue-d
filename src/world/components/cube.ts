import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from "three";
import { type Position } from "@/world/components/camera";

export function createCube(properties = { width: 2, height: 2, depth: 2 }, position?: Position) {
  const { width, height, depth } = properties;
  const geometry = new BoxBufferGeometry(width, height, depth);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material)
  if(position) cube.position.set(position.x, position.y, position.z)

  return cube;
}