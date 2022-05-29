import { describe, it, expect } from "vitest";
import { Mesh } from "three";
import { createIcosahedron } from "./icosahedron";

describe("createIcosahedron()", () => {
  it("returns Icosahedron object when passing no arguments", () => {
    expect(createIcosahedron()).toBeInstanceOf(Mesh);
  });

  it("returns Icosahedron object when passing properties argument", () => {
    expect(createIcosahedron({ radius: 1, detail: 1 })).toBeInstanceOf(Mesh);
  });

  it("returns Icosahedron object when passing position argument", () => {
    expect(createIcosahedron(undefined, { x: 1, y: 0, z: 12 })).toBeInstanceOf(
      Mesh
    );
  });

  it("returns Icosahedron object when passing properties and position arguments", () => {
    expect(
      createIcosahedron({ radius: 1, detail: 1 }, { x: 3, y: 100, z: -22 })
    ).toBeInstanceOf(Mesh);
  });
});
