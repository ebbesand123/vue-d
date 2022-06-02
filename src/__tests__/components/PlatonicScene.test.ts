import { mount } from "@vue/test-utils";
import PlatonicScene from "@/components/PlatonicScene.vue";

describe("PlatonicScene", () => {
  it("mounts correctly", () => {
    expect(() => {
      mount(PlatonicScene);
    }).toThrowError("ContainerIsNull");
  });
});
