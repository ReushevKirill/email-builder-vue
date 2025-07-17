<script setup lang="ts">
	import type { ButtonBlockData } from '@/types/blocks'

	const props = withDefaults(defineProps<ButtonBlockData>(), {
		text: 'Нажми меня',
	})
</script>

<template>
	<div class="button-block">
		<button type="button">{{ props.text }}</button>
	</div>
</template>

<style scoped>
	.button-block {
		text-align: center;
	}

	button {
		padding: 10px 20px;
		font-size: 16px;
		color: #fff;
		background-color: #007bff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-family: sans-serif;
	}
</style>
