import { PerspectiveCamera } from "three";

export interface Position {
  x: number
  y: number
  z: number
}

interface Perspective {
  aspect: number // aspect ratio
  fov: number    // field of view
  near: number   // near clipping plane
  far: number    // far clipping plane
}

export function createCamera(
  container: HTMLElement,
  perspective: Perspective = { aspect: 1, fov: 35, near: 0.1, far: 100 },
  position: Position = { x: 0, y: 0, z: 10 }
) {
  perspective.aspect = container.clientWidth / container.clientHeight;
  const camera = new PerspectiveCamera(perspective.fov, perspective.aspect, perspective.far, perspective.near);
  camera.position.set(position.x, position.y, position.z);

  return camera;
}