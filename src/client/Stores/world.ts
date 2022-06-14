import { defineStore } from "pinia";
import { ref } from "vue";
import { World } from "@world/world";
import { generateDefaultShapes } from "@world/helpers/defaults";

export const useWorldStore = defineStore("world", () => {
  let currentWorld: World | null = null;
  const worldSpawned = ref(false);
  function getWorld(targetContainer: HTMLElement): World {
    const world = new World(targetContainer);
    return world;
  }

  function setWorld(world: World) {
    currentWorld = world;
    worldSpawned.value = true;
  }

  function startWorld() {
    currentWorld?.start();
  }

  function stopWorld() {
    currentWorld?.stop();
  }

  function addDefaultShapes() {
    const shapes = generateDefaultShapes();
    currentWorld?.addShapes(shapes);
  }

  return {
    addDefaultShapes,
    getWorld,
    currentWorld,
    setWorld,
    startWorld,
    stopWorld,
    worldSpawned,
  };
});
