<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import {
  NButton,
  NButtonGroup,
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
    <n-button-group vertical>
      <n-button tertiary @click="toggle">
        <div class="button">Navigation</div>
      </n-button>
      <n-button tertiary disabled round>
        <div class="button">Scene Controls</div>
      </n-button>
    </n-button-group>
  </header>
  <n-drawer v-model:show="active" :width="320" :placement="placement">
    <n-drawer-content title="Menu">
      <nav>
        <RouterLink to="/"> Platonic </RouterLink>
        <RouterLink to="/see"> See </RouterLink>
      </nav>
    </n-drawer-content>
  </n-drawer>

  <RouterView />
</template>
<style>
header {
  position: absolute;
}
.button {
  padding: 16px;
}
nav {
  display: flex;
  flex-direction: column;
}
</style>
