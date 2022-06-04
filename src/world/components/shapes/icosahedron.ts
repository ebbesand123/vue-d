import { IcosahedronBufferGeometry, MeshStandardMaterial } from "three";
import type { Polyhedron, Position } from "@world/global/interfaces";
import { TMesh } from "@world/global/classes";

export function createIcosahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new IcosahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial();
  const icosahedron = new TMesh(geometry, material);
  icosahedron.position.set(x, y, z);

  return icosahedron;
}
