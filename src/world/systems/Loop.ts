/* eslint-disable @typescript-eslint/no-explicit-any */
import { Camera, Clock, Scene, WebGLRenderer } from "three";

export class Loop {
  camera: Camera;
  clock: Clock;
  scene: Scene;
  renderer: WebGLRenderer;
  updatables: Record<"tick", any>[];

  constructor(camera: Camera, scene: Scene, renderer: WebGLRenderer) {
    this.camera = camera;
    this.clock = new Clock(true);
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    this.updatables.forEach((object: Record<"tick", any>) => {
      object.tick();
    });
  }
}
