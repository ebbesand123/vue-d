import { Camera } from "three";
import { createCamera } from "@world/components/shapes/camera";
import { JSDOM } from "jsdom";

const dom = new JSDOM(`<div id="canvas">`);
const container = dom.window.document.getElementById("canvas");
/* c8 ignore next */
if (container === null) throw new Error();

describe("createCamera()", () => {
  it("returns a Camera object when passing container argument", () => {
    expect(createCamera(container)).toBeInstanceOf(Camera);
  });

  it("returns a Camera object when passing container and perspective arguments", () => {
    expect(
      createCamera(container, { aspect: 1, far: 50, fov: 45, near: 0.1 })
    ).toBeInstanceOf(Camera);
  });

  it("returns a Camera object when passing container and position arguments", () => {
    expect(
      createCamera(container, undefined, { x: 0, y: 20, z: 15 })
    ).toBeInstanceOf(Camera);
  });

  it("returns a Camera object when passing container, perspective and position arguments", () => {
    expect(
      createCamera(
        container,
        { aspect: 1, far: 50, fov: 45, near: 0.1 },
        { x: 0, y: 20, z: 15 }
      )
    ).toBeInstanceOf(Camera);
  });
});
