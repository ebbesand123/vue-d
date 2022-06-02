import { Mesh } from "three";
import { createDodecahedron } from "@/world/components/dodecahedron";

describe("createDodecahedron()", () => {
  it("returns Dodecahedron object when passing no arguments", () => {
    expect(createDodecahedron()).toBeInstanceOf(Mesh);
  });

  it("returns Dodecahedron object when passing properties argument", () => {
    expect(createDodecahedron({ radius: 1, detail: 1 })).toBeInstanceOf(Mesh);
  });

  it("returns Dodecahedron object when passing position argument", () => {
    expect(createDodecahedron(undefined, { x: 1, y: 0, z: 12 })).toBeInstanceOf(
      Mesh
    );
  });

  it("returns Dodecahedron object when passing properties and position arguments", () => {
    expect(
      createDodecahedron({ radius: 1, detail: 1 }, { x: 3, y: 100, z: -22 })
    ).toBeInstanceOf(Mesh);
  });
});
