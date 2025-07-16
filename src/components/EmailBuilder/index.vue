<script setup>
	import Toolbar from '../Toolbar/index.vue'
	import Canvas from '../Canvas/index.vue'
	import PropertiesPanel from '../PropertiesPanel/index.vue'
</script>

<template>
	<div class="email-builder">
		<Toolbar />
		<Canvas />
		<PropertiesPanel />
	</div>
</template>

<style scoped>
	.email-builder {
		display: grid;
		grid-template-columns: 280px 1fr 280px; /* Фиксированная ширина боковых панелей */
		gap: 1rem;
		height: 100vh;
		padding: 1rem;
		background-color: #f0f2f5;
		box-sizing: border-box;
	}

	.email-builder > * {
		background-color: #ffffff;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		padding: 1rem;
	}
</style>
