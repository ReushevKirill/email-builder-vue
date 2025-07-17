<script setup lang="ts">
	import { defineAsyncComponent, type Component } from 'vue'
	import { useStoreEmailBuilder } from '@/composables/useStoreEmailBuilder'
	import type { BlockType } from '@/types/blocks'

	const { selectedBlock, exportToHtml } = useStoreEmailBuilder()

	const propsEditorMap: Record<BlockType, Component> = {
		text: defineAsyncComponent(() => import('./TextProperties.vue')),
		image: defineAsyncComponent(() => import('./ImageProperties.vue')),
		button: defineAsyncComponent(() => import('./ButtonProperties.vue')),
	}
</script>

<template>
	<div class="properties-panel">
		<button type="button" @click="exportToHtml">Экспортировать в HTML</button>
		<div v-if="selectedBlock" class="editor-wrapper">
			<h3>Редактирование: {{ selectedBlock.type }}</h3>
			<component
				:is="propsEditorMap[selectedBlock.type]"
				v-model="selectedBlock.data"
			/>
		</div>
		<div v-else class="no-selection">
			<p>Выберите блок для редактирования</p>
		</div>
	</div>
</template>
