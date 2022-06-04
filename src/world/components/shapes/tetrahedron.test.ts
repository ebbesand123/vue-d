import { Mesh } from "three";
import { createTetrahedron } from "@world/components/shapes/tetrahedron";

describe("createTetrahedron()", () => {
  it("returns Tetrahedron object when passing no arguments", () => {
    expect(createTetrahedron()).toBeInstanceOf(Mesh);
  });

  it("returns Tetrahedron object when passing properties argument", () => {
    expect(createTetrahedron({ radius: 1, detail: 1 })).toBeInstanceOf(Mesh);
  });

  it("returns Tetrahedron object when passing position argument", () => {
    expect(createTetrahedron(undefined, { x: 1, y: 0, z: 12 })).toBeInstanceOf(
      Mesh
    );
  });

  it("returns Tetrahedron object when passing properties and position arguments", () => {
    expect(
      createTetrahedron({ radius: 1, detail: 1 }, { x: 3, y: 100, z: -22 })
    ).toBeInstanceOf(Mesh);
  });
});
