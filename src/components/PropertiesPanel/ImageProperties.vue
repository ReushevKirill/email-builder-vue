<script setup lang="ts">
	import type { ImageBlockData, TextBlockData } from '@/types/blocks'
	defineProps<{ modelValue: ImageBlockData }>()
	const emit = defineEmits(['update:modelValue'])
</script>

<template>
	<div class="prop-editor">
		<label>
			Alt
			<textarea
				:value="modelValue.alt"
				@input="
					emit('update:modelValue', {
						...modelValue,
						alt: ($event.target as HTMLTextAreaElement).value,
					})
				"
			/>
		</label>
		<label>
			Src
			<textarea
				:value="modelValue.src"
				@input="
					emit('update:modelValue', {
						...modelValue,
						src: ($event.target as HTMLTextAreaElement).value,
					})
				"
			/>
		</label>
	</div>
</template>
