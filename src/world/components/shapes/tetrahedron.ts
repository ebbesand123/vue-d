import { TetrahedronBufferGeometry, MeshStandardMaterial } from "three";
import type { Position, Polyhedron } from "@world/global/interfaces";
import { UpdatableObject } from "@world/global/classes";

export function createTetrahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new TetrahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial();
  const tetrahedron = new UpdatableObject(geometry, material);
  tetrahedron.name = "tetrahedron";
  tetrahedron.position.set(x, y, z);

  return tetrahedron;
}
