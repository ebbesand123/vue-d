import { Color, DodecahedronBufferGeometry, MeshStandardMaterial } from "three";
import type { Polyhedron, Position } from "@world/global/interfaces";
import { UpdatableObject } from "@world/global/classes";

export function createDodecahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new DodecahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial({ color: new Color(0x2f2414) });
  const dodecahedron = new UpdatableObject(geometry, material);
  dodecahedron.name = "dodecahedron";
  dodecahedron.position.set(x, y, z);

  return dodecahedron;
}
