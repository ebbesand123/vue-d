import { AmbientLight, PointLight, PointLightHelper } from "three";

export function createAmbientLight() {
  const ambientLight = new AmbientLight(0x404040); // soft white light

  return ambientLight;
}

export function createPointLight() {
  const pointLight = new PointLight(0xff0000, 1, 100);
  pointLight.position.set(10, 10, 10);

  return pointLight;
}

export function createPointLightHelper(pointLight: PointLight) {
  const sphereSize = 1;
  const pointLightHelper = new PointLightHelper(pointLight, sphereSize);

  return pointLightHelper;
}
