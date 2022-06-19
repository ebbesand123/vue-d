<template>
  <div>
    <h3>Shape Controls</h3>
    <n-space vertical>
      <n-select
        v-model:value="selectedShape.uuid"
        :options="refProps.shapes"
        label-field="name"
        value-field="uuid"
        size="large"
      ></n-select>
    </n-space>
    <div v-for="(shape, index) in refProps.shapes" :key="shape.uuid">
      <n-space
        v-if="shape.uuid === selectedShape.uuid"
        class="options"
        vertical
      >
        <span>Shape Position X: {{ shape.position.x }}</span>
        <n-slider
          v-model:value="shape.position.x"
          :default-value="props.shapes[index].position.x"
          :step="0.1"
          :min="-20"
          :max="20"
        />
        Position Y: {{ shape.position.y }}
        <n-slider
          v-model:value="shape.position.y"
          :default-value="props.shapes[index].position.y"
          :step="0.1"
          :min="-20"
          :max="20"
        />
        Position Z: {{ shape.position.z }}
        <n-slider
          v-model:value="shape.position.z"
          :default-value="props.shapes[index].position.z"
          :step="0.1"
          :min="-20"
          :max="20"
        />
        <div>
          <n-switch v-model:value="shape.enableAnimation" />
          <span style="margin-left: 16px"> Shape Animation </span>
        </div>
        <n-color-picker
          :value="'#' + shape.material.color.getHexString().toUpperCase()"
          :modes="['hex']"
          :show-alpha="false"
          @update:value="
            (value) => {
              updateColor(shape, value);
            }
          "
        >
        </n-color-picker>
        <n-button
          class="button"
          secondary
          color="#D60505"
          @click="onDelete(index)"
        >
          Delete Shape
        </n-button>
      </n-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  NButton,
  NColorPicker,
  NSelect,
  NSlider,
  NSpace,
  NSwitch,
} from "naive-ui";
import { UpdatableObject } from "@world/global/classes";
import { Color } from "three";
const props = defineProps<{
  shapes: UpdatableObject[];
}>();
const refProps = ref(props);
const selectedShape = ref({
  uuid: "",
});
function onDelete(index: number) {
  refProps.value.shapes[index].removeFromParent();
  refProps.value.shapes.splice(index, 1);
  selectedShape.value.uuid = "Deleted!";
}
function updateColor(object: UpdatableObject, color: string) {
  const colorRepresentation = new Color(color);
  object.material.color.setHex(colorRepresentation.getHex());
}
</script>
<style scoped>
.button {
  width: 100%;
}
</style>
