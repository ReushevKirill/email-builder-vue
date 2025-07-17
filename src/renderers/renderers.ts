import { renderTextBlock } from './renderTextBlock'
import { renderImageBlock } from './renderImageBlock'
import { renderButtonBlock } from './renderButtonBlock'

export const blockRenderers = {
	text: renderTextBlock,
	image: renderImageBlock,
	button: renderButtonBlock,
}
