import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductButtons } from '../components/ProductButtons'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import { Product } from '../interfaces/interfaces'

const products: Product[] = [
	{
		id: '1',
		title: 'Coffee-Mug',
		img: './coffee-mug.png'
	},
	{
		id: '2',
		title: 'Otra taza',
		img: './coffee-mug.png'
	},
	{
		id: '3',
		title: 'Coffee-Mug Chunga ',
	}
]

export const ShoppingPage = () => {
	return (
		<div>
			<h1>ShoppingPage</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{products.map(product => (
					<div key={product.id}>
						<ProductCard product={product} key={product.id}>
							<ProductImage />
							<ProductTitle />
							<ProductButtons />
						</ProductCard>
						<ProductCard product={product} >
							<ProductCard.Image />
							<ProductCard.Title />
							<ProductCard.Buttons />
						</ProductCard>
					</div>
				))}
			</div>
		</div>
	)
}
