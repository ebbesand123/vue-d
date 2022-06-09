import { createCube } from "@world/components/shapes/box";
import { createDodecahedron } from "@world/components/shapes/dodecahedron";
import { createIcosahedron } from "@world/components/shapes/icosahedron";
import { createOctahedron } from "@world/components/shapes/octahedron";
import { createTetrahedron } from "@world/components/shapes/tetrahedron";
import { UpdatableObject } from "@world/global/classes";

function generateDefaultShapes() {
  const shapes = [];
  shapes.push(createCube(undefined, { x: 1, y: -1, z: -1.3 }));
  shapes.push(createTetrahedron(undefined, { x: -3, y: -2, z: -4 }));
  shapes.push(createIcosahedron(undefined, { x: -2.2, y: 2, z: 0 }));
  shapes.push(createDodecahedron(undefined, { x: -3, y: 0, z: -2 }));
  shapes.push(createOctahedron(undefined, { x: 3, y: 2, z: -3 }));

  return shapes;
}

export { generateDefaultShapes };
