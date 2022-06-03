import { PerspectiveCamera, WebGLRenderer } from "three";

export class Resizer {
  constructor(
    container: HTMLElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.setSize(container, camera, renderer);
    window.addEventListener("resize", () => {
      this.setSize(container, camera, renderer);
      this.onResize();
    });
  }
  private setSize = (
    container: HTMLElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) => {
    const { clientWidth, clientHeight } = container;

    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  };
  public onResize() {
    /** pass in function  */
  }
}
