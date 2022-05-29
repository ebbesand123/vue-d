import { WebGLRenderer } from "three";

export function createRenderer(container: HTMLElement) {
  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  return renderer;
}
