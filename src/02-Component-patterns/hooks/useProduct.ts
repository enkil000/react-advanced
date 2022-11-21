import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface Props { 
	product: Product
	onChange?: (args: OnChangeArgs) => void
	value?:number
}

export const useProduct = ({product, onChange, value=0}:Props) => {

	const [counter, setCounter] = useState<number>(value)

	const isControlled = useRef(!!onChange)

	useEffect(() => {
		setCounter(value)
	}, [value])
	

	const doIncrease = (value: number) => {
		
		if (isControlled.current) { 
			return onChange!({count:value, product})
		}

		const newValue = Math.max(counter + value, 0)
		setCounter(newValue)
		onChange && onChange!({count: newValue, product})
	}
	return {counter, doIncrease}
}

