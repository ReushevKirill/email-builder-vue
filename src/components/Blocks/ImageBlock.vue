<script setup lang="ts">
	import type { ImageBlockData } from '@/types/blocks'

	const props = withDefaults(defineProps<ImageBlockData>(), {
		alt: 'Placeholder image',
		src: 'https://via.placeholder.com/400x200.png?text=Изображение',
	})
</script>

<template>
	<div class="image-block">
		<img :src="props.src" :alt="props.alt" />
	</div>
</template>

<style scoped>
	.image-block img {
		max-width: 100%;
		height: auto;
		display: block;
	}
</style>
