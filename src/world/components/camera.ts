import { PerspectiveCamera } from "three";
import type { Perspective, Position } from "@world/global/interfaces";

export function createCamera(
  container: HTMLElement,
  perspective: Perspective = { aspect: 1, fov: 35, near: 0.1, far: 100 },
  position: Position = { x: 0, y: 0, z: 10 }
) {
  const { clientWidth, clientHeight } = container;
  const { x, y, z } = position;
  const { far, fov, near } = perspective;
  let { aspect } = perspective;
  aspect = clientWidth / clientHeight;
  const camera = new PerspectiveCamera(fov, aspect, far, near);

  camera.position.set(x, y, z);

  return camera;
}
