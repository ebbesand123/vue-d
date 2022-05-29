import { Color, Scene } from "three";

export function createScene(backgroundColor = "aqua") {
  const scene = new Scene();
  scene.background = new Color(backgroundColor);

  return scene;
}
