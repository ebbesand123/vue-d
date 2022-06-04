import { TetrahedronBufferGeometry, Mesh, MeshStandardMaterial } from "three";
import type { Position, Polyhedron } from "@world/global/interfaces";

export function createTetrahedron(
  properties: Polyhedron = { radius: 1, detail: 0 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, detail } = properties;
  const { x, y, z } = position;
  const geometry = new TetrahedronBufferGeometry(radius, detail);
  const material = new MeshStandardMaterial();
  const tetrahedron = new Mesh(geometry, material);
  tetrahedron.tick = () => {
    // increase the cube's rotation each frame
    tetrahedron.rotation.z += 0.01;
    tetrahedron.rotation.x += 0.01;
    tetrahedron.rotation.y += 0.01;
  };
  tetrahedron.position.set(x, y, z);

  return tetrahedron;
}
