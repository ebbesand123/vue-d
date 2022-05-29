<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import {
  NButton,
  NDrawer,
  NDrawerContent,
  type DrawerPlacement,
} from "naive-ui";

const active = ref(false);
const placement = ref<DrawerPlacement>("left");
function toggle() {
  active.value = !active.value;
}
</script>

<template>
  <header>
    <n-button @click="toggle">Menu</n-button>
  </header>
  <n-drawer v-model:show="active" :width="502" :placement="placement">
    <n-drawer-content title="Menu">
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/platonic"> Platonische Körper </RouterLink>
      </nav>
    </n-drawer-content>
  </n-drawer>

  <RouterView />
</template>
<style>
header {
  display: flex;
  justify-content: center;
}
</style>
