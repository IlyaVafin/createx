import React from 'react'

type TitleProps = {
	children: React.ReactNode
}

const TitleBottom: React.FC<TitleProps> = ({children}) => {
	return (
		<p className='title-bottom'>{children}</p>
	)
}

export default TitleBottom