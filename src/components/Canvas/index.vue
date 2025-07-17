<script setup lang="ts">
	import { useStoreEmailBuilder } from '@/composables/useStoreEmailBuilder'
	import type {
		BaseBlock,
		Block,
		BlockData,
		BlockDatas,
		BlockType,
		ButtonBlockData,
		ImageBlockData,
		TextBlockData,
	} from '@/types/blocks'
	import {
		computed,
		defineAsyncComponent,
		markRaw,
		ref,
		type Component,
	} from 'vue'

	const { canvasBlocks, hasCanvasBlocks, store } = useStoreEmailBuilder()

	const isDragOver = ref(false)

	const blockMap: Record<BlockType, Component> = markRaw({
		text: defineAsyncComponent(() => import('../Blocks/TextBlock.vue')),
		image: defineAsyncComponent(() => import('../Blocks/ImageBlock.vue')),
		button: defineAsyncComponent(() => import('../Blocks/ButtonBlock.vue')),
	})

	const getCanvasText = computed(() =>
		!isDragOver.value ? 'Перетащите блок сюда' : 'Отпустите, чтобы добавить'
	)

	const getCanvasClasses = computed(() => ({
		'is-over': isDragOver.value,
	}))

	const onDrop = (e: DragEvent) => {
		const toolId = e.dataTransfer?.getData('text/plain') as BlockType
		if (toolId) {
			store.addBlock(toolId)
		}
		isDragOver.value = false
	}

	const onClickBlockItem = (block: Block) => {
		store.selectBlock(block)
	}

	const onDragLeave = () => {
		isDragOver.value = false
	}

	const onDragEnter = () => {
		isDragOver.value = true
	}
</script>

<template>
	<div
		class="canvas"
		:class="getCanvasClasses"
		@dragover.prevent
		@dragleave.prevent="onDragLeave"
		@dragenter.prevent="onDragEnter"
		@drop.prevent="onDrop"
	>
		<template v-if="hasCanvasBlocks">
			<div class="blocks-list">
				<div
					v-for="block in canvasBlocks"
					:key="block.id"
					class="block-item"
					@click="onClickBlockItem(block)"
				>
					<component :is="blockMap[block.type]" v-bind="block.data" />
				</div>
			</div>
		</template>
		<template v-else>
			<p>{{ getCanvasText }}</p>
		</template>
	</div>
</template>

<style scoped>
	.canvas {
		padding: 1rem;
		transition: background-color 0.2s ease, border-color 0.2s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px dashed #d9d9d9;
	}

	.canvas p {
		font-family: sans-serif;
		color: #aaa;
		font-size: 1.2rem;
	}

	.canvas.is-over {
		background-color: #e8f0fe;
		border-color: #007bff;
	}

	.block-item {
		cursor: pointer;
	}
</style>
