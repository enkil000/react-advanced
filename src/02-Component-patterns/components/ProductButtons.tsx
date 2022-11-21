import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface ButtonsProps { 
	className?: string
	style?:CSSProperties
}

export const ProductButtons = ({className, style}:ButtonsProps) => {

	const { doIncrease, counter } = useContext(ProductContext)
	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => doIncrease(-1)}>-</button>
			<div className={styles.countLabel}>{counter}</div>
			<button className={styles.buttonAdd} onClick={() => doIncrease(1)}>+</button>
		</div>
	)

}

export default ProductButtons