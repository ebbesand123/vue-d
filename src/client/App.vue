<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
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
