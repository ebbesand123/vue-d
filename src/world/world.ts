import { PerspectiveCamera, Scene, type Renderer } from "three";
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
let renderer: Renderer;
let scene: Scene;

export class World {
  constructor(container: HTMLElement) {
    camera = createCamera(container);
    scene = createScene();
    renderer = createRenderer(container);
    container.append(renderer.domElement);

    const cube = createCube();
    scene.add(cube);
  }

  render(): void {
    renderer.render(scene, camera);
  }
}