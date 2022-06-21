<template>
  <div class="flex">
    <n-button color="#3030af" class="button" @click="menuActive = !menuActive"
      >Menu</n-button
    >
    <platonic-scene :height="height" :width="width" />
    <n-drawer
      v-model:show="menuActive"
      style="background-color: rgba(255, 255, 255, 0.5)"
      class="drawer"
      :height="menuHeight"
      :width="menuWidth"
      :placement="menuPlacement"
      :show-mask="false"
      :close-on-esc="true"
    >
      <n-drawer-content title="Menu" class="menu-content" :closable="true">
        <render-controls />
        <camera-controls :camera="useWorld.camera" />
        <scene-controls :scene="useWorld.scene" />
        <light-controls :light="useWorld.light" />
        <shape-controls :shapes="useWorld.shapes" />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, ref, type Ref } from "vue";
import {
  useWindowSize,
  useBreakpoints,
  breakpointsTailwind,
} from "@vueuse/core";
import {
  NButton,
  NDrawer,
  NDrawerContent,
  type DrawerPlacement,
} from "naive-ui";
import CameraControls from "@client/components/CameraControls/CameraControls.vue";
import PlatonicScene from "@client/components/PlatonicScene/PlatonicScene.vue";
import ShapeControls from "@client/components/ShapeControls/ShapeControls.vue";
import RenderControls from "@client/components/RenderControls/RenderControls.vue";
import SceneControls from "@client/components/SceneControls/SceneControls.vue";
import LightControls from "@client/components/LightControls/LightControls.vue";
import { useWorldStore } from "@client/stores/world";

const menuPlacement: Ref<DrawerPlacement> = ref("bottom");
const menuActive = ref(false);
const menuHeight = ref("340px");
const menuWidth = ref("320px");

const useWorld = useWorldStore();
const { width, height } = useWindowSize();
const breakpoints = useBreakpoints(breakpointsTailwind);

onMounted(() => {
  menuPlacement.value = updateMenuPlacement();
});

onUpdated(() => {
  menuPlacement.value = updateMenuPlacement();
});

function updateMenuPlacement() {
  return breakpoints.isGreater("sm") ? "left" : "bottom";
}
</script>
<style scoped>
.flex {
  display: flex;
  width: 100%;
  overflow-x: hidden;
}
.button {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
