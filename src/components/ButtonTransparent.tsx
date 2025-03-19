import React from 'react'
import { Props } from './ButtonOrange'


const ButtonTransparent: React.FC<Props> = ({children, color, width, height, onClick}) => {
	return (
		<button className='transparent-btn' onClick={onClick} style={{height: height, width: width, color: color, border: `.0625rem solid ${color}`}}>{children}</button>
	)
}

export default ButtonTransparent