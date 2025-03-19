import React from 'react'
import './HeroAbout.css'

type HeroProps = {
	desc: string
	name: string
	pageName: string
	pageTitle: string
}

const HeroAbout: React.FC<HeroProps> = ({
	desc,
	name,
	pageName,
	pageTitle,
}) => {
	return (
		<>
			<div className='container'>
				<article className='about-us__text'>
					<span className='about-us__breadcrumb'>
						{name} / <strong>{pageName}</strong>
					</span>
					<h1 className='about-us__title'>{pageTitle}</h1>
					<p className='about-us__desc'>{desc}</p>
				</article>
			</div>
		</>
	)
}


// Homepage
// About Us
// ABOUT US
export default HeroAbout
