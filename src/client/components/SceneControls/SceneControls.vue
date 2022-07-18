<template>
  <div>
    <h3>Scene background</h3>
    <div v-for="scn in refScene.scene" :key="scn.uuid">
      <n-space vertical>
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
        <n-button @click="onSave(scn)">Save Scene</n-button>
        <n-button>Load Scene</n-button>
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
function onSave(scene: Scene) {
  console.log(scene.toJSON());
}
</script>
