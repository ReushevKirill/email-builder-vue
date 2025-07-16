<script lang="ts" setup>
import type { Tool } from './index.vue';

const props = defineProps<{
  tool: Tool;
}>();

const onDragStart = (e: DragEvent) => {
  e.dataTransfer?.setData('text/plain', props.tool.id);
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'copy';
  }
};
</script>

<template>
  <div class="tool-item" draggable="true" @dragstart="onDragStart">
    <div class="tool-item__name">{{ props.tool.name }}</div>
    <div class="tool-item__preview">
      <component :is="props.tool.component" />
    </div>
  </div>
</template>

<style scoped>
.tool-item {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 0.75rem;
  text-align: center;
  cursor: grab;
  transition: all 0.2s ease;
  background-color: #fff;
}

.tool-item:hover {
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.tool-item__name {
  font-family: sans-serif;
  font-size: 14px;
  color: #555;
  margin-bottom: 0.75rem;
}

.tool-item__preview {
  user-select: none;
  pointer-events: none;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 3px;
}
</style>
