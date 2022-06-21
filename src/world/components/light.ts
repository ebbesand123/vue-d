import {
  AmbientLight,
  type ColorRepresentation,
  DirectionalLightHelper,
  PointLight,
  PointLightHelper,
} from "three";
import type { Position } from "@world/global/interfaces";
import { UpdatableDirectionalLight } from "@world/global/classes";

function createAmbientLight() {
  const ambientLight = new AmbientLight();

  return ambientLight;
}

function createDirectionalLight(
  color: ColorRepresentation = "white",
  intensity = 8,
  position: Position = { x: 0, y: 5, z: 0 }
) {
  const { x, y, z } = position;
  const directionalLight = new UpdatableDirectionalLight(color, intensity);
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

function createDirectionalLightHelper(
  directionalLight: UpdatableDirectionalLight,
  sphereSize = 1
) {
  const directionalLightHelper = new DirectionalLightHelper(
    directionalLight,
    sphereSize
  );

  return directionalLightHelper;
}
export {
  createAmbientLight,
  createDirectionalLight,
  createDirectionalLightHelper,
  createPointLight,
  createPointLightHelper,
};
