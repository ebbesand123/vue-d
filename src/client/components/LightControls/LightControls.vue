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
      <n-button
        class="button"
        secondary
        color="#D60505"
        @click="onResetLight(lgt, i)"
        >Reset Light</n-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NSpace, NSlider } from "naive-ui";
import { UpdatableDirectionalLight } from "@world/global/classes";
const props = defineProps<{
  light: UpdatableDirectionalLight[];
}>();
const refProps = ref(props);
function onResetLight(light: UpdatableDirectionalLight, index: number) {
  light.position.setX(props.light[index].position.x);
  light.position.setY(props.light[index].position.y);
  light.position.setZ(props.light[index].position.z);
}
</script>
<style scoped>
.button {
  width: 100%;
}
</style>
