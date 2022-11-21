import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductButtons, ProductImage, ProductTitle } from '../components/'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

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
		<div style={{}}>
			<h1>ShoppingPage</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{products.map(product => (
					<div key={product.id}>
						<ProductCard product={product} key={product.id} className='bg-dark'>
							<ProductImage className='border-red'/>
							<ProductTitle className='text-red' style={{fontStyle: 'italic'}}/>
							<ProductButtons className='text-red' style={{border:'1px solid red'}}/>
						</ProductCard>
						<ProductCard product={product} className='bg-dark'>
							<ProductCard.Image className='border-red'/>
							<ProductCard.Title className='text-red'/>
							<ProductCard.Buttons className='text-red'/>
						</ProductCard>
						<ProductCard product={product} key={product.id} >
							<ProductImage />
							<ProductTitle/>
							<ProductButtons style={{border:'1px solid red'}}/>
						</ProductCard>
					</div>
				))}
			</div>
		</div>
	)
}
