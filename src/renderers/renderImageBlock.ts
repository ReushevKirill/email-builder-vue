import type { ImageBlockData } from '@/types/blocks'

export function renderImageBlock(data: ImageBlockData): string {
	const { alt, src } = data

	const attrs = {
		style: 'object-fit: cover; display: block;',
	}

	let html = `
    <img
      alt="${alt}"
      src="${src}"
      style="${attrs.style}";
    >
  `

	return html
}
