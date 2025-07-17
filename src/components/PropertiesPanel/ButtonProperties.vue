<script setup lang="ts">
	import type { ButtonBlockData } from '@/types/blocks'
	defineProps<{ modelValue: ButtonBlockData }>()
	const emit = defineEmits(['update:modelValue'])
</script>

<template>
	<div class="prop-editor">
		<label>
			Текст
			<textarea
				:value="modelValue.text"
				@input="
					emit('update:modelValue', {
						...modelValue,
						text: ($event.target as HTMLTextAreaElement).value,
					})
				"
			/>
		</label>
		<label>
			Url
			<textarea
				:value="modelValue.url"
				@input="
					emit('update:modelValue', {
						...modelValue,
						url: ($event.target as HTMLTextAreaElement).value,
					})
				"
			/>
		</label>
	</div>
</template>
