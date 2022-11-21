import { ReactElement } from "react"
import { ButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard"
import { ImageProps } from '../components/ProductImage';
import { TitleProps } from "../components/ProductTitle";

export interface Product {
	id: string
	title: string
	img?: string
}



export interface ProductContextProps {
	counter: number
	doIncrease: (num: number) => void
	product: Product
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element,
	Title  : (Props: TitleProps) => JSX.Element
	Image  : (Props:ImageProps) => JSX.Element
	Buttons: (Props: ButtonsProps) => JSX.Element
}

export interface OnChangeArgs { 
	product: Product
	count:number
}