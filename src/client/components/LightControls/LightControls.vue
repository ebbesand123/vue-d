<template>
  <div>
    <h3>Light controls</h3>
    <div v-for="(lgt, i) in refProps.light" :key="lgt.id">
      <n-space class="options" vertical>
        <span>Position X: {{ lgt.position.x }}</span>
        <n-slider
          v-model:value="lgt.position.x"
          :tooltip="false"
          :default-value="props.light[i].position.x"
          :step="0.1"
          :min="-50"
          :max="50"
        />
        Position Y: {{ lgt.position.y }}
        <n-slider
          v-model:value="lgt.position.y"
          :tooltip="false"
          :default-value="props.light[i].position.y"
          :step="0.1"
          :min="-50"
          :max="50"
        />
        Position Z: {{ lgt.position.z }}
        <n-slider
          v-model:value="lgt.position.z"
          :tooltip="false"
          :default-value="props.light[i].position.z"
          :step="0.1"
          :min="-50"
          :max="50"
        />
      </n-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NSpace, NSlider } from "naive-ui";
import { UpdatableDirectionalLight } from "@world/global/classes";
const props = defineProps<{
  light: UpdatableDirectionalLight[];
}>();
const refProps = ref(props);
</script>
<style scoped>
.button {
  width: 100%;
}
</style>
