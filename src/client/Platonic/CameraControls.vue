<template>
  <div class="camera-controls">
    <h2>Camera controls</h2>
    <div v-for="(cam, i) in refProps.camera" :key="cam.uuid">
      <n-space class="options" vertical>
        <span>Camera Position X: {{ cam.position.x }}</span>
        <n-slider
          v-model:value="cam.position.x"
          :default-value="props.camera[i].position.x"
          :step="0.1"
          :min="-50"
          :max="50"
          @update:value="cam.lookAt(0, 0, 0)"
        />
        Camera Position Y: {{ cam.position.y }}
        <n-slider
          v-model:value="cam.position.y"
          :default-value="props.camera[i].position.y"
          :step="0.1"
          :min="-50"
          :max="50"
          @update:value="cam.lookAt(0, 0, 0)"
        />
        Camera Position Z: {{ cam.position.z }}
        <n-slider
          v-model:value="cam.position.z"
          :default-value="props.camera[i].position.z"
          :step="0.1"
          :min="-50"
          :max="50"
          @update:value="cam.lookAt(0, 0, 0)"
        />
      </n-space>
      <n-button @click="onResetCamera(cam)">Reset Camera</n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NSpace, NSlider } from "naive-ui";
import { UpdatableCamera } from "@world/global/classes";
const props = defineProps<{
  camera: UpdatableCamera[];
}>();
const refProps = ref(props);
function onResetCamera(cam: UpdatableCamera) {
  cam.position.setX(0);
  cam.position.setY(0);
  cam.position.setZ(30);
  cam.lookAt(0, 0, 0);
}
</script>
<style scoped>
.camera-controls {
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
}
</style>
