interface Position {
  x: number;
  y: number;
  z: number;
}

interface Perspective {
  aspect: number; // aspect ratio
  fov: number; // field of view
  near: number; // near clipping plane
  far: number; // far clipping plane - 100 equals 100 meters
}

interface Box {
  width: number; // 1 unit = 1 meter
  height: number;
  depth: number;
}

interface Polyhedron {
  radius: number;
  detail: number;
}
interface ShapeOptions {
  shape: string | null;
  color: string;
  x: number;
  y: number;
  z: number;
}

interface Sphere {
  radius: number;
  widthSegments: number;
  heightSegments: number;
}
export type { Box, Perspective, Polyhedron, Position, ShapeOptions, Sphere };
