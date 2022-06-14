<template>
  <n-grid class="grid" :cols="24">
    <n-grid-item :span="4" class="output">
      <camera-controls :camera="useWorld.camera"></camera-controls>
      <scene-controls :scene="useWorld.scene"></scene-controls>
    </n-grid-item>
    <n-grid-item class="tv" :span="16">
      <platonic-scene />
    </n-grid-item>
    <n-grid-item :span="4">
      <render-controls></render-controls>
      <shape-controls :shapes="useWorld.shapes"></shape-controls>
    </n-grid-item>
  </n-grid>
</template>
<script setup lang="ts">
import { NGrid, NGridItem } from "naive-ui";
import CameraControls from "@client/Platonic/CameraControls.vue";
import PlatonicScene from "@client/Platonic/PlatonicScene.vue";
import ShapeControls from "@client/Platonic/ShapeControls.vue";
import RenderControls from "@client/Platonic/RenderControls.vue";
import SceneControls from "@client/Platonic/SceneControls.vue";
import { useWorldStore } from "@client/Stores/world";

const useWorld = useWorldStore();
</script>
<style scoped>
.grid {
  height: 100%;
  text-align: center;
}
</style>
