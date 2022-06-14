import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { World } from "@world/world";
import { generateDefaultShapes } from "@world/helpers/defaults";
import { UpdatableObject } from "@world/global/classes";

export const useWorldStore = defineStore("world", () => {
  let currentWorld: World;
  const worldSpawned = ref(false);
  const shapes: Ref<UpdatableObject[]> = ref([]);
  const defaultShapesAdded = ref(false);

  function getWorld() {
    return currentWorld;
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
    if (defaultShapesAdded.value) return;
    const newShapes = generateDefaultShapes();
    newShapes.forEach((shape) => {
      shapes.value.push(shape);
    });
    currentWorld?.addShapes(newShapes);
    defaultShapesAdded.value = true;
  }

  return {
    addDefaultShapes,
    getWorld,
    setWorld,
    shapes,
    startWorld,
    stopWorld,
    worldSpawned,
  };
});
