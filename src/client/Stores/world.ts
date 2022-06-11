import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { UpdatableObject } from "@world/global/classes";
import { generateDefaultShapes } from "@world/helpers/defaults";

export const useWorldStore = defineStore("world", () => {
  const loading = ref(true);
  const shapeObjects: Ref<UpdatableObject[]> = ref([]);

  function addShapes(shapes: []): void {
    window.dispatchEvent(new Event("worldShapesAdded"));
    shapes.forEach((shape) => {
      shapeObjects.value.push(shape);
    });
  }
  function disposeShapes() {
    window.dispatchEvent(new Event("worldShapesDeleted"));
    shapeObjects.value = [];
    console.log(shapeObjects.value);
  }
  function getDefaultShapes() {
    return generateDefaultShapes();
  }

  return {
    addShapes,
    disposeShapes,
    loading,
    getDefaultShapes,
    shapeObjects,
  };
});
