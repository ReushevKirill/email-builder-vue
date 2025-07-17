import { useEmailBuilderStore } from '@/stores/email-builder'
import { storeToRefs } from 'pinia'

export const useStoreEmailBuilder = () => {
	const store = useEmailBuilderStore()
	const { canvasBlocks, hasCanvasBlocks, selectedBlock } = storeToRefs(store)
	const { exportToHtml } = store

	return {
		store,
		canvasBlocks,
		hasCanvasBlocks,
		selectedBlock,
		exportToHtml
	}
}
