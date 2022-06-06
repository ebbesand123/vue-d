import { OctahedronBufferGeometry, MeshStandardMaterial } from "three";
import type { Polyhedron, Position } from "@world/global/interfaces";
import { UpdatableObject } from "@world/global/classes";

export function createOctahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new OctahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial();
  const octahedron = new UpdatableObject(geometry, material);
  octahedron.position.set(x, y, z);

  return octahedron;
}
