<template>
  <div class="controls">
    <h2>Controls</h2>
    <div v-for="(obj, index) in fetchedObjs" :key="index">
      uuid: {{ obj.uuid }} name: {{ obj.name }}
    </div>
    <n-space vertical justify="center">
      <n-button type="primary" @click="onAnimate('start')"
        >Start Animation</n-button
      >
      <n-button type="tertiary" @click="onAnimate('stop')"
        >Stop Animation</n-button
      >
      Shape
      <n-select
        v-model:value="options.shape"
        :options="shapes"
        @update:value="emit('optionsUpdated', options)"
      />
      Color
      <n-select
        v-model:value="options.color"
        :options="colors"
        @update:value="emit('optionsUpdated', options)"
      />
      Position X: {{ options.x }}
      <n-slider
        v-model:value="options.x"
        :default-value="0"
        :step="0.25"
        :min="-10"
        :max="10"
        @update:value="emit('optionsUpdated', options)"
      />
      Position Y: {{ options.y }}
      <n-slider
        v-model:value="options.y"
        :default-value="0"
        :step="0.25"
        :min="-10"
        :max="10"
        @update:value="emit('optionsUpdated', options)"
      />
      Position Z: {{ options.z }}
      <n-slider
        v-model:value="options.z"
        :default-value="0"
        :step="0.25"
        :min="-10"
        :max="10"
        @update:value="emit('optionsUpdated', options)"
      />
      <n-button @click="world.disposeShapes()">disposeShapes</n-button>
      <n-button @click="onDefault()">Default Shapes</n-button>
      <div>Stored objects: {{ world.shapeObjects }}</div>
      <div>Fetched objects: {{ fetchedObjs }}</div>
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
import { NButton, NSlider, NSpace, NSelect } from "naive-ui";
import type { ShapeOptions } from "@world/global/interfaces";
import { shapes, colors } from "@client/mocks/globals";
import { useWorldStore } from "@client/Stores/world";
import { UpdatableObject } from "@world/global/classes";

const options: Ref<ShapeOptions> = ref({
  shape: "cube",
  color: "white",
  x: 0,
  y: 0,
  z: 0,
});
const emit = defineEmits<{
  (e: "optionsUpdated", props: ShapeOptions): void;
}>();
const world = useWorldStore();
const fetchedObjs: Ref<UpdatableObject[]> = ref([]);
function onDefault() {
  /** fetch default objects, store them locally and update store */
  fetchedObjs.value = world.getDefaultShapes();
  console.log(fetchedObjs.value);
  world.shapeObjects = fetchedObjs.value;
}
function onAnimate(name: string) {
  window.dispatchEvent(new Event(name));
}
</script>
<style scoped>
.controls {
  text-align: center;
}
</style>
