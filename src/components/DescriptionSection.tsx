import React from 'react'

type Desc = {
	children: React.ReactNode
}

const DescriptionSection: React.FC<Desc> = ({children}) => {
	return (
		<p className='desc-section'>{children}</p>
	)
}

export default DescriptionSection