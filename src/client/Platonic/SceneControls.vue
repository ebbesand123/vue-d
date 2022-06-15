<template>
  <div class="scene-controls">
    <h2>Scene Controls</h2>
    <div v-for="scn in refScene.scene" :key="scn.uuid">
      <n-space vertical>
        <h3>Background color</h3>
        <n-color-picker
          :value="getColor(scn)"
          :default-value="getColor(scn)"
          :modes="['hex']"
          :show-alpha="false"
          @update:value="
            (value) => {
              updateColor(value, scn);
            }
          "
        ></n-color-picker>
      </n-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NColorPicker, NSpace } from "naive-ui";
import { Color, Scene } from "three";
const props = defineProps<{
  scene: Scene[];
}>();
const refScene = ref(props);
function updateColor(hex: string, scene: Scene) {
  const color = new Color(hex.toUpperCase());
  scene.background = color;
}
function getColor(scene: Scene) {
  if (scene.background instanceof Color) {
    return "#" + scene.background.clone().getHexString().toUpperCase();
  }
}
</script>
<style scoped>
.scene-controls {
  position: relative;
  max-height: 400px;
  overflow-y: auto;
  display: block;
}
</style>
