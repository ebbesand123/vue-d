interface Position {
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

interface Box {
  width: number
  height: number
  depth: number
}

interface Polyhedron {
  radius: number
  detail: 0
}

interface Sphere {
  radius: number
  widthSegments: number
  heightSegments: number
}

export type { Box, Perspective, Polyhedron, Position, Sphere }