<template>
  <div v-if="isLoading">
    <div v-for="(shape, index) in props.shapes" :key="props.shapes[index].name">
      <h2>
        <span>Shape name: {{ shape.name }}</span>
      </h2>
      <span>Shape Position X: {{ shape.position.x }}</span>
      <n-slider
        v-model:value="shape.position.x"
        :default-value="props.shapes[index].position.x"
        :step="0.1"
        :min="-20"
        :max="20"
        @update:value="emit('optionsUpdated', 'x')"
      />
      Position Y: {{ shape.position.y }}
      <n-slider
        v-model:value="shape.position.y"
        :default-value="props.shapes[index].position.y"
        :step="0.1"
        :min="-20"
        :max="20"
        @update:value="emit('optionsUpdated', 'y')"
      />
      Position Z: {{ shape.position.z }}
      <n-slider
        v-model:value="shape.position.z"
        :default-value="props.shapes[index].position.z"
        :step="0.1"
        :min="-20"
        :max="20"
        @update:value="emit('optionsUpdated', 'z')"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NSlider } from "naive-ui";
import { UpdatableObject } from "@world/global/classes";
const props = defineProps<{
  shapes: UpdatableObject[];
}>();
const emit = defineEmits<{
  (e: "optionsUpdated", property: string): void;
}>();
const isLoading = ref(true);
// set reactive object with props as start properties
</script>
