import { DirectionalLight, Mesh, PerspectiveCamera } from "three";
/**
 * https://en.wikipedia.org/wiki/Radian
 * https://de.wikipedia.org/wiki/Radiant_(Einheit)
 */
class UpdatableCamera extends PerspectiveCamera {
  pauseAnimation = true;
  radiansPerSecond = Math.PI / 4; // Eine Achteldrehung pro Sekunde. 1 Umdrehung = 2 Pi = 360°
  angle = 0;
  radius = 20;
  tick(delta: number) {
    if (this.pauseAnimation) return;
    this.position.x = Math.sin(this.angle) * this.radius;
    this.position.z = Math.cos(this.angle) * this.radius;
    this.rotation.y += this.radiansPerSecond * delta;
    this.angle += delta * this.radiansPerSecond;
  }
}
class UpdatableDirectionalLight extends DirectionalLight {
  radius = 1;
  tick(delta: number) {
    console.log("tick directional light", delta);
  }
}
class UpdatableObject extends Mesh {
  radiansPerSecond = Math.PI / 8;
  pauseAnimation = false;
  tick(delta: number) {
    if (this.pauseAnimation) return;
    this.rotation.z += this.radiansPerSecond * delta;
    this.rotation.x += this.radiansPerSecond * delta;
    this.rotation.y += this.radiansPerSecond * delta;
  }
}
export { UpdatableCamera, UpdatableDirectionalLight, UpdatableObject };
