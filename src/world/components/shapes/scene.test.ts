import { Scene } from "three";
import { createScene } from "@world/components/scene";

describe("createScene()", () => {
  it("returns a scene when passing no arguments", () => {
    expect(createScene()).toBeInstanceOf(Scene);
  });

  it("returns a scene when passing backgroundColor argument", () => {
    expect(createScene("grey")).toBeInstanceOf(Scene);
  });
});
