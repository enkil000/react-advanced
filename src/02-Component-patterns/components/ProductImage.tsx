import { CSSProperties, ReactFragment, useContext } from "react"
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'

export interface ImageProps { 
	img?: string
	className?: string
	style?:CSSProperties
}

export const ProductImage = ({ img = '', className, style }:ImageProps) => {

	const { product } = useContext(ProductContext)
	let imgToShow: string

	if (img) {
		imgToShow = img
	} else if (product.img) {
		imgToShow = product.img
	} else {
		imgToShow = noImage
	}

	return (
		<img src={imgToShow} alt="" className={`${styles.productImg} ${className}`} style={style}/>
	)
}

export default ProductImage