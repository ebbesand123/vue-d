import { SphereBufferGeometry, Mesh, MeshStandardMaterial } from "three";
import type { Position, Sphere } from "@world/global/interfaces";

export function createSphere(
  properties: Sphere = { radius: 1, widthSegments: 8, heightSegments: 6 },
  position: Position = { x: 0, y: 0, z: 0 }
) {
  const { radius, widthSegments, heightSegments } = properties;
  const { x, y, z } = position;
  const geometry = new SphereBufferGeometry(
    radius,
    widthSegments,
    heightSegments
  );
  const material = new MeshStandardMaterial();
  const sphere = new Mesh(geometry, material);
  sphere.tick = () => {
    // increase the cube's rotation each frame
    sphere.rotation.z += 0.01;
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
  };
  sphere.position.set(x, y, z);

  return sphere;
}
