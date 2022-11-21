import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductButtons, ProductImage, ProductTitle } from '../components/'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const producto1: Product = {
	id: '1',
	title: 'Coffee-Mug',
	img: './coffee-mug.png'
}
const producto2: Product = {
	id: '4',
	title: 'Coffee-Mug Programador ',
	img: './coffee-mug2.png'
}

const productos: Product[] = [producto1, producto2]

interface ProductInCart extends Product { 
	count: number
}

export const ShoppingPage = () => {

	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
	
	const onProductCountChange = ({ count, product }: { count: number, product: Product }) => { 
		// console.log('onProductCountChange', count, product )
		setShoppingCart(oldShoppingCart => {
			if (count === 0) { 
				const { [product.id]: toDelete, ...rest } = oldShoppingCart
				return rest
			}
			return {
				...oldShoppingCart,
				[product.id]:{...product, count}
			}
		} )
	}

	return (
		<>
			<div style={{ width: '100%' }}>
				<div className="shopping-cart">
					{Object.entries(shoppingCart).map(([key, producto]) => (
						<ProductCard product={producto} key={producto.id} style={{ width: '100px' }}
							value={shoppingCart[producto.id]?.count || 0}
							onChange={onProductCountChange}
						>
							<ProductImage />
							<ProductButtons />
						</ProductCard>
					))}
				</div>

				<h1>ShoppingPage</h1>
				<hr />
				<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
					{productos.map(product => (
						<div key={product.id}>
							<ProductCard product={product} key={product.id}
								value={shoppingCart[product.id]?.count || 0}
								onChange={(event) => onProductCountChange(event)}
								>
								<ProductImage />
								<ProductTitle />
								<ProductButtons />
							</ProductCard>

						</div>
					))}
				</div>
			</div>
			<hr />
		</>
	)
}
