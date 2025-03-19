import React, { RefObject } from 'react'

export type Props = {
	width?: string
	height?: string
	children: React.ReactNode
	color?: string
	mt?: string
	typeBtn?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	onClick?: () => void
	borderRadius?: string
	btnRef?: RefObject<HTMLButtonElement | null>
}

const ButtonOrange: React.FC<Props> = ({
	width,
	height,
	children,
	onClick,
	mt,
	typeBtn,
	disabled,
	borderRadius,
	btnRef,
}) => {
	return (
		<button
			disabled={disabled}
			type={typeBtn}
			className='orange-btn'
			onClick={onClick}
			ref={btnRef}
			style={{
				width: width,
				height: height,
				marginTop: mt,
				opacity: disabled ? '0.5' : '1',
				cursor: disabled ? 'not-allowed' : 'pointer',
				borderTopLeftRadius: borderRadius,
				borderBottomLeftRadius: borderRadius,
			}}
		>
			{children}
		</button>
	)
}

export default ButtonOrange
