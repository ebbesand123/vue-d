import { DodecahedronBufferGeometry, Mesh, MeshStandardMaterial } from "three";
import type { Polyhedron, Position } from "@world/global/interfaces";

export function createDodecahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new DodecahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial({ color: 0xe3f3f3 });
  const dodecahedron = new Mesh(geometry, material);
  dodecahedron.tick = () => {
    // increase the cube's rotation each frame
    dodecahedron.rotation.z += 0.01;
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
  };
  dodecahedron.position.set(x, y, z);

  return dodecahedron;
}
