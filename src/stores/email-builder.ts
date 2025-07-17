import { defineStore } from 'pinia'
import { computed, ref, toRaw } from 'vue'
import type {
	Block,
	BlockType,
	TextBlockData,
	ImageBlockData,
	ButtonBlockData,
} from '@/types/blocks'
import { blockRenderers } from '@/renderers/renderers'

const defaultDataMap: Record<BlockType, () => any> = {
	text: (): TextBlockData => ({ text: 'Это новый текстовый блок' }),
	image: (): ImageBlockData => ({
		src: 'https://via.placeholder.com/400x200',
		alt: 'placeholder',
	}),
	button: (): ButtonBlockData => ({ text: 'Кнопка', url: '#' }),
}

export const useEmailBuilderStore = defineStore('email-builder', () => {
	const canvasBlocks = ref<Block[]>([])
	const selectedBlock = ref<Block | null>(null)

	const hasCanvasBlocks = computed(() => canvasBlocks.value.length > 0)

	// --- ACTIONS ---
	function addBlock(type: BlockType) {
		const newBlock: Block = {
			id: Symbol('blockId'),
			type,
			data: defaultDataMap[type](),
		}
		canvasBlocks.value.push(newBlock)
		selectedBlock.value = newBlock
	}

	function selectBlock(block: Block) {
		selectedBlock.value = block
	}

	function exportToHtml(): string {
		const blocksHtml = toRaw(canvasBlocks.value)
			.map(block => {
				if (blockRenderers[block.type]) {
					return blockRenderers[block.type](block.data as any)
				}
				return ''
			})
			.join('')

		const html = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ваше письмо</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin: 20px auto; background-color: #ffffff; border: 1px solid #cccccc;">
                ${blocksHtml}
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

		console.log(html)
		return html
	}

	return {
		canvasBlocks,
		selectedBlock,
		hasCanvasBlocks,
		addBlock,
		selectBlock,
		exportToHtml,
	}
})
