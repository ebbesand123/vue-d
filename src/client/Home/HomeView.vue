<template>
  <n-grid :cols="12">
    <n-grid-item :offset="3" :span="6">
      <div class="flex">
        <p>Nothing to see here!</p>
        <p>Nothing to see here!</p>
        <p>Nothing to see here!</p>
        <p>Nothing to see here!</p>
        <p>Nothing to see here!</p>
      </div>
    </n-grid-item>
  </n-grid>
</template>
<script setup lang="ts">
import { NGrid, NGridItem } from "naive-ui";
</script>
<style>
p {
  justify-items: center;
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
