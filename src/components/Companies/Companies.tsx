import React from 'react'
import inDepth from './../../assets/images/Supported/InDepth-Consulting-Logo.svg'
import higherFit from './../../assets/images/Supported/Higher-Fit-Logo.svg'
import sentinal from './../../assets/images/Supported/Sentinal-Consulting-Logo.svg'
import happyHome from './../../assets/images/Supported/Happy-Home-Logo.svg'
import forSale from './../../assets/images/Supported/For-Sale-Logo.svg'
import sunSet from './../../assets/images/Supported/Sunset-Realty-Logo.svg'
import './Companies.css'
type CompaniesProps = {
	logos?: string[]
	title: string
	desc?: string
}

const Companies: React.FC<CompaniesProps> = ({ logos, title, desc }) => {
	const arrImages: string[] = [
		inDepth,
		higherFit,
		sentinal,
		happyHome,
		forSale,
		sunSet,
	]

	const mergeArr: string[] = arrImages.concat(logos ?? [])
	console.log(mergeArr)

	return (
		<>
			<div className='container'>
				<div className='supported__companies'>
					<h1 className='supported__title title'>{title}</h1>
					<p className='supported-desc'>{desc}</p>
					<ul className='supported__companies-list'>
						{mergeArr.map((item, index) => (
							<li key={index}>
								<a href=''>
									<img src={item} alt={`Partner logo ${index + 1}`} />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Companies
