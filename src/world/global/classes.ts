import { Mesh } from "three";
import { MathUtils } from "three";
class TMesh extends Mesh {
  radiansPerSecond = MathUtils.degToRad(30);
  tick(delta: number) {
    this.rotation.z += this.radiansPerSecond * delta;
    this.rotation.x += this.radiansPerSecond * delta;
    this.rotation.y += this.radiansPerSecond * delta;
  }
}

export { TMesh };
