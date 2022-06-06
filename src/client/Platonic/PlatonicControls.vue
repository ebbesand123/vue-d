<template>
  <div class="controls">
    <h2>Controls</h2>
    <n-space vertical justify="center">
      <n-button-group horizontal>
        <n-button type="primary" @click="onAnimate('start')"
          >Start Animation</n-button
        >
        <n-button type="tertiary" @click="onAnimate('stop')"
          >Stop Animation</n-button
        >
      </n-button-group>
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
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
import { NButton, NButtonGroup, NSlider, NSpace, NSelect } from "naive-ui";
import type { ShapeOptions } from "@world/global/interfaces";
const colors = [
  { label: "white", value: "white" },
  { label: "red", value: "red" },
  { label: "yellow", value: "yellow" },
  { label: "blue", value: "blue" },
  { label: "green", value: "green" },
  { label: "black", value: "black" },
];
const shapes = [
  { label: "tetrahedron", value: "tetrahedron" },
  { label: "cube", value: "cube" },
  { label: "octahedron", value: "octahedron" },
  { label: "dodecahedron", value: "dodecahedron" },
  { label: "icosahedron", value: "icosahedron" },
];

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

const onAnimate = function (name: string) {
  if (name === ("start" || "stop")) return;
  // emitted globally on client window object
  window.dispatchEvent(new Event(name));
};
</script>
<style scoped>
.controls {
  text-align: center;
}
</style>
