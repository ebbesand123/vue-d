<template>
  <h2>Shape Controls</h2>
  <div v-if="isLoading" class="shapeControls">
    <div v-for="(shape, index) in props.shapes" :key="props.shapes[index].name">
      <h3>
        <span>[{{ index }}] Shape name: {{ shape.name }}</span>
      </h3>
      <span>Shape Position X: {{ shape.position.x }}</span>
      <n-slider
        v-model:value="shape.position.x"
        :default-value="props.shapes[index].position.x"
        :step="0.1"
        :min="-20"
        :max="20"
      />
      Position Y: {{ shape.position.y }}
      <n-slider
        v-model:value="shape.position.y"
        :default-value="props.shapes[index].position.y"
        :step="0.1"
        :min="-20"
        :max="20"
      />
      Position Z: {{ shape.position.z }}
      <n-slider
        v-model:value="shape.position.z"
        :default-value="props.shapes[index].position.z"
        :step="0.1"
        :min="-20"
        :max="20"
      />
      <n-button class="button"> Delete Shape </n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NSlider } from "naive-ui";
import { UpdatableObject } from "@world/global/classes";
const props = defineProps<{
  shapes: UpdatableObject[];
}>();
const isLoading = ref(true);
// set reactive object with props as start properties
</script>
<style scoped>
.shapeControls {
  position: relative;
  max-height: 400px;
  overflow-y: auto;
}
</style>
