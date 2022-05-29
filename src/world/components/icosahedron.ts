import { IcosahedronBufferGeometry, Mesh, MeshBasicMaterial } from "three";
import type { Polyhedron, Position } from "@/world/global/interfaces";

export function createIcosahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new IcosahedronBufferGeometry(radius, detail);
  const material = new MeshBasicMaterial();
  const icosahedron = new Mesh(geometry, material);

  icosahedron.position.set(x, y, z);

  return icosahedron;
}
