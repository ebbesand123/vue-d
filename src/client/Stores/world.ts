import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { World } from "@world/world";
import { generateDefaultShapes } from "@world/helpers/defaults";
import {
  UpdatableCamera,
  UpdatableDirectionalLight,
  UpdatableObject,
} from "@world/global/classes";
import { Scene } from "three";

export const useWorldStore = defineStore("world", () => {
  let currentWorld: World;
  const isRendering = ref(false);
  const shapes: Ref<UpdatableObject[]> = ref([]);
  const camera: Ref<UpdatableCamera[]> = ref([]);
  const scene: Ref<Scene[]> = ref([]);
  const light: Ref<UpdatableDirectionalLight[]> = ref([]);
  function getScene() {
    return scene.value;
  }

  function getWorld() {
    return currentWorld;
  }

  function setWorld(world: World) {
    currentWorld = world;
    camera.value.push(currentWorld.camera);
    scene.value.push(currentWorld.scene);
    currentWorld.scene.children.forEach((child) => {
      if (child instanceof UpdatableDirectionalLight) {
        light.value.push(child);
      }
    });
  }

  function startWorld() {
    currentWorld?.start();
    isRendering.value = true;
  }

  function stopWorld() {
    currentWorld?.stop();
    isRendering.value = false;
  }

  function addDefaultShapes() {
    const newShapes = generateDefaultShapes();
    newShapes.forEach((shape) => {
      shapes.value.push(shape);
    });
    currentWorld?.addShapes(newShapes);
  }

  return {
    addDefaultShapes,
    camera,
    getScene,
    getWorld,
    isRendering,
    light,
    scene,
    setWorld,
    shapes,
    startWorld,
    stopWorld,
  };
});
