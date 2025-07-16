<script setup lang="ts">
	import {
		computed,
		defineAsyncComponent,
		markRaw,
		ref,
		type Component,
	} from 'vue'

	interface CanvasBlock {
		id: symbol
		type: string
	}

	const isDragOver = ref(false)
	const canvasBlocks = ref<CanvasBlock[]>([])

	const blockMap: Record<string, Component> = markRaw({
		text: defineAsyncComponent(() => import('../Blocks/TextBlock.vue')),
		image: defineAsyncComponent(() => import('../Blocks/ImageBlock.vue')),
		button: defineAsyncComponent(() => import('../Blocks/ButtonBlock.vue')),
	})

	const hasCanvasBlocks = computed(() => canvasBlocks.value.length > 0)

	const getCanvasText = computed(() =>
		!isDragOver.value ? 'Перетащите блок сюда' : 'Отпустите, чтобы добавить'
	)

	const getCanvasClasses = computed(() => ({
		'is-over': isDragOver.value,
	}))

	const onDrop = (e: DragEvent) => {
		const toolId = e.dataTransfer?.getData('text/plain')
		if (toolId && blockMap[toolId]) {
			canvasBlocks.value.push({
				id: Symbol('canvasBlockId'),
				type: toolId,
			})
		}
		isDragOver.value = false
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
				<div v-for="block in canvasBlocks" :key="block.id" class="block-item">
					<component :is="blockMap[block.type]" />
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
</style>
