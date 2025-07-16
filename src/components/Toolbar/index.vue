<script setup lang="ts">
	import { shallowRef } from 'vue'
	import type { Component } from 'vue'

	import TextBlock from '../Blocks/TextBlock.vue'
	import ImageBlock from '../Blocks/ImageBlock.vue'
	import ButtonBlock from '../Blocks/ButtonBlock.vue'
	import ToolbarItem from './item.vue'

	export interface Tool {
		id: string
		name: string
		component: Component
	}

	const tools = shallowRef<Tool[]>([
		{
			id: 'text',
			name: 'Текст',
			component: TextBlock,
		},
		{
			id: 'image',
			name: 'Изображение',
			component: ImageBlock,
		},
		{
			id: 'button',
			name: 'Кнопка',
			component: ButtonBlock,
		},
	])
</script>

<template>
	<div class="toolbar">
		<h3>Инструменты</h3>
		<div class="tool-list">
			<ToolbarItem
				v-for="tool in tools"
				:key="tool.id"
        :tool="tool"
			/>
		</div>
	</div>
</template>

<style scoped>
	.toolbar {
		display: flex;
		flex-direction: column;
	}

	h3 {
		text-align: center;
		margin-top: 0;
		margin-bottom: 1.5rem;
		font-family: sans-serif;
		color: #333;
	}

	.tool-list {
		display: grid;
		gap: 1rem;
	}
</style>
