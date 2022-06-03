import {
  AmbientLight,
  type ColorRepresentation,
  DirectionalLight,
  PointLight,
  PointLightHelper,
} from "three";
import type { Position } from "@world/global/interfaces";

function createAmbientLight() {
  const ambientLight = new AmbientLight();

  return ambientLight;
}

function createDirectionalLight(
  color: ColorRepresentation = "white",
  intensity = 8,
  position: Position = { x: 10, y: 10, z: 10 }
) {
  const { x, y, z } = position;
  const directionalLight = new DirectionalLight(color, intensity);
  directionalLight.position.set(x, y, z);

  return directionalLight;
}

function createPointLight() {
  const pointLight = new PointLight(0xff0000, 1, 100);
  pointLight.position.set(10, 10, 10);

  return pointLight;
}

function createPointLightHelper(pointLight: PointLight) {
  const sphereSize = 1;
  const pointLightHelper = new PointLightHelper(pointLight, sphereSize);

  return pointLightHelper;
}

export {
  createAmbientLight,
  createDirectionalLight,
  createPointLight,
  createPointLightHelper,
};
