import TextBlock from '@/components/Blocks/TextBlock.vue'

const BlocksEnum = {
	TEXT: 'text',
	IMAGE: 'image',
	BUTTON: 'button',
} as const

export type BlockType = (typeof BlocksEnum)[keyof typeof BlocksEnum]

export interface TextBlockData {
	text: string
	// В будущем можно добавить: fontSize, color, alignment и т.д.
}

export interface ImageBlockData {
	src: string
	alt: string
	// В будущем можно добавить: link, width и т.д.
}

export interface ButtonBlockData {
	text: string
	url: string
	// В будущем можно добавить: backgroundColor, textColor и т.д.
}

export type BlockDatas = TextBlockData | ImageBlockData | ButtonBlockData
export type BlockData<T> = T extends 'text'
	? TextBlockData
	: T extends 'image'
	? ImageBlockData
	: T extends 'button'
	? ButtonBlockData
	: never

export interface BaseBlock<T extends BlockType> {
	id: symbol
	type: T
	data: BlockData<T>
}

export type Block = BaseBlock<'text'> | BaseBlock<'image'> | BaseBlock<'button'>
