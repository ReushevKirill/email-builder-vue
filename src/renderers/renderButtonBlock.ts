import type { ButtonBlockData } from '@/types/blocks'

export function renderButtonBlock(data: ButtonBlockData): string {
	const { text, url } = data

	const attrs = {
		style:
			'cursor: pointer; text-align: center; color: #000000; padding: 1rem;',
	}

	let html = `
    <button
      type="button"
      style="${attrs.style}";
    >
      ${text}
    </button>
  `

	return html
}
