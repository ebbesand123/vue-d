import { DodecahedronBufferGeometry, MeshStandardMaterial } from "three";
import type { Polyhedron, Position } from "@world/global/interfaces";
import { UpdatableObject } from "@world/global/classes";

export function createDodecahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new DodecahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial({ color: 0xe3f3f3 });
  const dodecahedron = new UpdatableObject(geometry, material);
  dodecahedron.position.set(x, y, z);

  return dodecahedron;
}
