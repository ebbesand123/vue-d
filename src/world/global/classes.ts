import { Mesh } from "three";

class TMesh extends Mesh {
  tick() {
    this.rotation.z += 0.01;
    this.rotation.x += 0.01;
    this.rotation.y += 0.01;
  }
}

export { TMesh };
