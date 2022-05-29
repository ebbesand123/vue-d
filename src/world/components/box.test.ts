import { describe, it, expect } from "vitest";
import { Mesh } from "three";
import { createBox, createCube } from "./box";

describe("createBox()", () => {
  it("returns Box object when passing no arguments", () => {
    expect(createBox()).toBeInstanceOf(Mesh);
  });

  it("returns Box object when passing measurements argument", () => {
    expect(createBox({ width: 1, height: 2, depth: 3 })).toBeInstanceOf(Mesh);
  });

  it("returns Box object when passing position argument", () => {
    expect(createBox(undefined, { x: 2, y: 5, z: 1 })).toBeInstanceOf(Mesh);
  });

  it("returns Box object when passing measurements and position arguments", () => {
    expect(
      createBox({ width: 10, height: 12, depth: 1 }, { x: 1, y: 1.6, z: 9 })
    ).toBeInstanceOf(Mesh);
  });
});

describe("createCube()", () => {
  it("returns Cube object when passing no arguments", () => {
    expect(createCube()).toBeInstanceOf(Mesh);
  });

  it("returns Cube object when passing sideLength argument", () => {
    expect(createCube(1)).toBeInstanceOf(Mesh);
  });

  it("returns Cube object when passing position argument", () => {
    expect(createCube(undefined, { x: 1, y: 2, z: 3 })).toBeInstanceOf(Mesh);
  });

  it("returns Cube object when passing sideLength and position arguments", () => {
    expect(createCube(22, { x: 3, y: 1, z: -10 })).toBeInstanceOf(Mesh);
  });
});
