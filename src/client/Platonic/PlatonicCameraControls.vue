<template>
  <div class="controls">
    <n-space class="options" vertical>
      <span>Camera Position X: {{ refCamera.camera.position.x }}</span>
      <n-slider
        v-model:value="refCamera.camera.position.x"
        :default-value="props.camera.position.x"
        :step="0.1"
        :min="-20"
        :max="20"
      />
      Camera Position Y: {{ refCamera.camera.position.y }}
      <n-slider
        v-model:value="refCamera.camera.position.y"
        :default-value="props.camera.position.y"
        :step="0.1"
        :min="-20"
        :max="20"
      />
      Camera Position Z: {{ refCamera.camera.position.z }}
      <n-slider
        v-model:value="refCamera.camera.position.z"
        :default-value="props.camera.position.z"
        :step="0.1"
        :min="-20"
        :max="20"
      />
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { UpdatableCamera } from "@world/global/classes";
const props = defineProps<{
  camera: UpdatableCamera;
}>();
const refCamera = ref(props);
</script>
