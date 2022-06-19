<template>
  <div
    id="canvas"
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
    }"
  ></div>
</template>
<script setup lang="ts">
import { World } from "@world/world";
import { onBeforeUnmount, onMounted } from "vue";
import { useWorldStore } from "@client/Stores/world";
const props = defineProps<{
  height: number;
  width: number;
}>();
let world: World;
let container: HTMLElement | null;
const useWorld = useWorldStore();

onMounted(() => {
  container = document.getElementById("canvas");
  if (!container) throw new Error("ContainerIsNull");
  world = new World(container);
  useWorld.setWorld(world);
  useWorld.startWorld();
  useWorld.addDefaultShapes();
});

onBeforeUnmount(() => {
  world.destroy();
});
</script>
