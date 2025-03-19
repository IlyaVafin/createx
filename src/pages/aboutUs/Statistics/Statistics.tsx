import React from 'react'
import like from './../../../assets/images/statistics/like.svg'
import painting from './../../../assets/images/statistics/painting.svg'
import helmet from './../../../assets/images/statistics/helmet.svg'
import pantone from './../../../assets/images/statistics/pantone.svg'
import './Statistics.css'

const StatisticsList: { img: string; title: string; desc: string }[] = [
	{
		img: like,
		title: '60%',
		desc: 'Clients on the recommendation of friends',
	},
	{
		img: painting,
		title: '2400+',
		desc: 'Apartments renovated',
	},
	{
		img: helmet,
		title: '670',
		desc: 'Qualified specialists',
	},
	{
		img: pantone,
		title: '150000+ m²',
		desc: 'Finishing work was carried out',
	},
]

const Statistics: React.FC = () => {

	return (
		<>
			<section className='statistics'>
				<div className='container'>
					<ul className='statistics__list'>
						{StatisticsList.map((item, index) => (
							<li className='statistics__list-item' key={index}>
								<img src={item.img} alt={`list image ${index + 1}`} />
								<div className='list-item__text'>
									<h1>{item.title}</h1>
									<span>{item.desc}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Statistics
