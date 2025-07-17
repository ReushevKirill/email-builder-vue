<script setup lang="ts">
	import type { TextBlockData } from '@/types/blocks'
	defineProps<{ modelValue: TextBlockData }>()
	const emit = defineEmits(['update:modelValue'])
</script>

<template>
	<div class="prop-editor">
		<label>Текст</label>
		<textarea
			:value="modelValue.text"
			@input="
				emit('update:modelValue', {
					...modelValue,
					text: ($event.target as HTMLTextAreaElement).value,
				})
			"
		/>
	</div>
</template>
