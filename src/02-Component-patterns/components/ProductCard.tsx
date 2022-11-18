import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Props } from '../interfaces/interfaces';
import { createContext } from 'react';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';




export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: Props) => {

	const { img, title } = product

	const { counter, doIncrease } = useProduct()
	return (
		<Provider value={{ counter, doIncrease, product }}>
			<div className={styles.productCard}>
				{children}
			</div>
		</Provider>
	)
}


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons