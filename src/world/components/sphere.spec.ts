import { describe, it, expect } from "vitest";
import { Mesh } from "three";
import { createSphere } from "./sphere";

describe("createSphere()", () => {
  it("returns Sphere object when passing no arguments", () => {
    expect(createSphere()).toBeInstanceOf(Mesh);
  });

  it("returns Sphere object when passing properties argument", () => {
    expect(
      createSphere({ radius: 2, widthSegments: 10, heightSegments: 4 })
    ).toBeInstanceOf(Mesh);
  });

  it("returns Sphere object when passing position argument", () => {
    expect(createSphere(undefined, { x: 1, y: -20, z: 22 })).toBeInstanceOf(
      Mesh
    );
  });

  it("returns Sphere object when passing properties and position arguments", () => {
    expect(
      createSphere(
        { radius: 3, widthSegments: 5, heightSegments: 4 },
        { x: 5, y: 20, z: 12 }
      )
    ).toBeInstanceOf(Mesh);
  });
});
