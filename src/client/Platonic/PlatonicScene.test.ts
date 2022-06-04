import { mount } from "@vue/test-utils";

import PlatonicScene from "@client/Platonic/PlatonicScene.vue";

describe("PlatonicScene", () => {
  it("mounts correctly", () => {
    expect(() => {
      mount(PlatonicScene);
    }).toThrowError("ContainerIsNull");
  });
});
