import React, { useState } from 'react'
import blueBuilding from './../../../assets/images/ourWorks/blueBuilding.jpg'
import portfolio1 from './../../../assets/images/portfolio/portfolio1.jpg'
import portfolio2 from './../../../assets/images/portfolio/portfolio2.jpg'
import portfolio3 from './../../../assets/images/portfolio/portfolio3.jpg'
import portfolio4 from './../../../assets/images/portfolio/portfolio4.jpg'
import pencilBuilding from './../../../assets/images/ourWorks/pencilBuilding.jpg'
import redBuilding from './../../../assets/images/ourWorks/redBuilding.jpg'
import portfolio5 from '././../../../assets/images/portfolio/portfolio5.jpg'
import portfolio6 from '././../../../assets/images/portfolio/portfolio6.jpg'
import convert from './../../../assets/images/portfolio/Convert.svg'
import './Portfolio.css'

interface IPortolioList {
	img: string
	title: string
	desc: string
}

const PortfolioList: IPortolioList[] = [
	{
		img: blueBuilding,
		title: 'Cubes Building',
		desc: 'Business Centers',
	},
	{
		img: portfolio1,
		title: 'Modern Cottage',
		desc: 'Private houses',
	},
	{
		img: portfolio2,
		title: 'Luxury Beach House',
		desc: 'Private houses',
	},
	{
		img: portfolio3,
		title: 'Modern Double Bedroom',
		desc: 'Apartments & flats',
	},
	{
		img: portfolio4,
		title: 'Kids Bedroom With Decorations',
		desc: 'Apartments & flats',
	},
	{
		img: pencilBuilding,
		title: 'The Pencil Building',
		desc: 'Stores & Malls',
	},
	{
		img: redBuilding,
		title: 'Red Finger Building',
		desc: 'Business Centers',
	},
	{
		img: portfolio5,
		title: 'Scandinavian Style Interior',
		desc: 'Private houses',
	},
	{
		img: portfolio6,
		title: 'Brown and Gray Painted House',
		desc: 'Private houses',
	},
]

const Portfolio: React.FC = () => {
	const [visibleCard, setVisibleCard] = useState<number>(3)
	const showSlide = () => {
		setVisibleCard(prev => prev + 3)
	}

	return (
		<>
			<div className='container'>
				<ul className='portfolio__list'>
					{PortfolioList.slice(0, visibleCard).map((item, index) => (
						<li key={index} className='portfolio__item'>
							<img src={item.img} alt='' />
							<div className='portfolio__item-text'>
								<h4>{item.title}</h4>
								<p>{item.desc}</p>
								<button>View Project</button>
							</div>
						</li>
					))}
				</ul>
				<div className='portfolio__more'>
					<button
						className='portfolio__btn-more'
						style={{ display: visibleCard === 9 ? 'none' : 'block' }}
						onClick={showSlide}
					>
						<img src={convert} alt='' />
						<span>Load more</span>
					</button>
				</div>
			</div>
		</>
	)
}

export default Portfolio
