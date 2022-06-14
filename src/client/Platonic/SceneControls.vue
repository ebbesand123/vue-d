<template>
  <div class="scene-controls">
    <h2>Scene Controls</h2>
    <div v-for="(scn, i) in refScene.scene" :key="scn.uuid">
      <n-space vertical>
        <span> Index: {{ i }}</span>
        <span> Background: {{ scn.background }}</span>
      </n-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NColorPicker, NSpace } from "naive-ui";
import { Scene } from "three";
const props = defineProps<{
  scene: Scene[];
}>();
const refScene = ref(props);
</script>
<style scoped>
.scene-controls {
  position: relative;
  max-height: 400px;
  overflow-y: auto;
  display: block;
}
</style>
