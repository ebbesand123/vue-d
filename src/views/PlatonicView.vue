<script setup lang="ts">
import PlatonicScene from "@/components/PlatonicScene.vue";
</script>

<template>
  <h1>Platonische Körper</h1>
  <div id="tv">
    <PlatonicScene />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
#tv {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
