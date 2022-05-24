<script setup lang="ts">
import PlatonicScene from "@/components/PlatonicScene.vue";
</script>

<template>
  <h1>Platonic</h1>
  <div id="tv">
    <platonic-scene />
  </div>
</template>

<style>
h1 {
  text-align: center;
}
#tv {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
