import type { TextBlockData } from '@/types/blocks'

export function renderTextBlock(data: TextBlockData): string {
	const { text } = data

	const attrs = {
		style: 'font-family: Arial, sans-serif; font-size: 16px; color: #333333',
	}

	let html = `
    <p
      style="${attrs.style}";
    >
      ${text}
    </p>
  `

	return html
}
