import React from 'react'
import like from './../assets/images/icons/like.svg'
import safety from './../assets/images/icons/safety.svg'
import slippers from './../assets/images/icons/slippers.svg'
import DescriptionSection from './DescriptionSection'
type Qualities = {
	img: string
	title: string
	desc: string
	border: boolean
}

const Values:React.FC = () => {
	const qualities: Qualities[] = [
		{
			img: like,
			title: 'Quality',
			desc: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
			border: true,
		},
		{
			img: safety,
			title: 'Safety',
			desc: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
			border: true,
		},
		{
			img: slippers,
			title: 'Comfort',
			desc: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
			border: false,
		},
	]
	return (
		<>
		<section className='values'>
				<div className='container'>
					<h3 className='values__title title'>Our core values</h3>
					<DescriptionSection>
						Our mission is to set the highest standards for construction sphere.
					</DescriptionSection>
					<article className='values__quality'>
						{qualities.map((item, index) => (
							<div key={index} className={`values__card ${item.border ? 'values__card_border' : ''}`}>
								<img loading='lazy' src={item.img} alt='' />
								<h4 className='values__card-title'>{item.title}</h4>
								<p className='values__card-desc'>{item.desc}</p>
							</div>
						))}
					</article>
				</div>
			</section>
		</>
	)
}

export default Values