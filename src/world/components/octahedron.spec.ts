import { describe, it, expect } from "vitest";
import { Mesh } from "three";
import { createOctahedron } from "./octahedron";

describe("createOctahedron()", () => {
  it("returns Octahedron object when passing no arguments", () => {
    expect(createOctahedron()).toBeInstanceOf(Mesh);
  });

  it("returns Octahedron object when passing properties argument", () => {
    expect(createOctahedron({ radius: 1, detail: 1 })).toBeInstanceOf(Mesh);
  });

  it("returns Octahedron object when passing position argument", () => {
    expect(createOctahedron(undefined, { x: 1, y: 0, z: 12 })).toBeInstanceOf(
      Mesh
    );
  });

  it("returns Octahedron object when passing properties and position arguments", () => {
    expect(
      createOctahedron({ radius: 1, detail: 1 }, { x: 3, y: 100, z: -22 })
    ).toBeInstanceOf(Mesh);
  });
});
