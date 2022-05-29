import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/scene";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

/* 
scoping values here makes them unaccessible to outside the module
that that way only one world class can be instantianted
since the second World object would share these variables
with the first object 
*/
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let scene: Scene;

export class World {
  constructor(container: HTMLElement) {
    camera = createCamera(container);
    scene = createScene();
    renderer = createRenderer(container);
    container.append(renderer.domElement);

    const cube = createCube();
    const cube2 = createCube({
      width: 3,
      height: 1,
      depth: 2
    }, {
      x: 3,
      y: 0,
      z: 0
    }
    )
    scene.add(cube);
    scene.add(cube2);

    const resizer = new Resizer(container, camera, renderer);
  }

  render(): void {
    renderer.render(scene, camera);
  }
}