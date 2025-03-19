import React from 'react'
import './Services.css'
import DescriptionSection from '../../../components/DescriptionSection'
import construction from './../../../assets/images/services/ic-construction.svg'
import painting from './../../../assets/images/services/ic-painting.svg'
import pantone from './../../../assets/images/services/ic-pantone.svg'
import plan from './../../../assets/images/services/ic-plan.svg'
import ButtonOrange from '../../../components/ButtonOrange'
import TitleBottom from '../../../components/TitleBottom'
import { Link } from 'react-router-dom'
interface ServicesList {
	img: string
	title: string
}

const Services: React.FC = () => {
	const servicesList: ServicesList[] = [
		{
			img: construction,
			title: 'Construction',
		},
		{
			img: plan,
			title: 'Project Development',
		},
		{
			img: pantone,
			title: 'Interior Design',
		},
		{
			img: painting,
			title: 'Repairs',
		},
	]

	return (
		<section className='services'>
			<div className='container'>
				<h1 className='services__title title'>Our services</h1>
				<DescriptionSection>
					Createx Construction Bureau is a construction giant with a full range
					of construction services.
				</DescriptionSection>
				<article className='services-card__wrapper'>
					{servicesList.map((item, index) => (
							<a href='#' key={index} className='services-card__item'>
								<div className='services-card__content'>
									<img loading='lazy' src={item.img} alt='' />
									<h4>{item.title}</h4>
								</div>
							</a>
					))}
				</article>
				<article className='services__learn-more'>
					<TitleBottom>Learn more about our services</TitleBottom>
					<ButtonOrange width='207px' height='52px'>
						<Link to= '/service'>View services</Link>
					</ButtonOrange>
				</article>
			</div>
		</section>
	)
}

export default Services
