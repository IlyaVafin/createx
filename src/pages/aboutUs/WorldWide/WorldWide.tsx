import React from 'react'
import map from './../../../assets/images/map.png'
import './WorldWide.css'
const WorldWide: React.FC = () => {
	return (
		<>
			<section className='worlwide'>
				<div className='container'>
					<h1 className='worldwide__title title'>We work worldwide</h1>
					<img src={map} alt='' />
				</div>
			</section>
		</>
	)
}

export default WorldWide
