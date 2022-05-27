import { defineStore } from "pinia";

export interface PositionXYZ {
  x: number
  y: number
  z: number
}

export interface Perspective {
  aspect: number
  fov: number
  near: number
  far: number
}

export const useCameraStore = defineStore({
  id: "camera",
  state: () => ({
    position: { x: 0, y: 0, z: 10 } as PositionXYZ,
    perspective: { aspect: 1.33, fov: 35, near: 0.1, far: 100 } as Perspective
  }),
  getters: {
    getFullState: (state) => state,
  },
  actions: {
    setAspectRatio(width: number, height: number) {
      
    }
  },
});
