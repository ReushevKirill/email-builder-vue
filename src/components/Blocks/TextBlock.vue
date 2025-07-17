<script setup lang="ts">
	import type { ImageBlockData, TextBlockData } from '@/types/blocks'

	const props = withDefaults(defineProps<TextBlockData>(), {
		text: 'Это текстовый блок. Кликните, чтобы отредактировать.',
	})
</script>

<template>
	<div class="text-block">
		<p>
			{{ props.text }}
		</p>
	</div>
</template>

<style scoped>
	p {
		margin: 0;
		line-height: 1.5;
		font-family: sans-serif;
		color: #333;
	}
</style>
