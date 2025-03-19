import React from 'react'
import serivce1 from './../../../assets/images/servicesPage/service1.jpg'
import serivce2 from './../../../assets/images/servicesPage/service2.jpg'
import serivce3 from './../../../assets/images/servicesPage/service3.jpg'
import serivce4 from './../../../assets/images/servicesPage/service4.jpg'
import ButtonTransparent from '../../../components/ButtonTransparent'
import './ServiceList.css'
const ServiceList: React.FC = () => {
	interface IServiceCards {
		img: string
		title: string
		desc: string
	}

	const ServiceCards: IServiceCards[] = [
		{
			img: serivce1,
			title: 'Construction',
			desc: 'Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. ',
		},
		{
			img: serivce2,
			title: 'Project Development',
			desc: 'Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. ',
		},
		{
			img: serivce3,
			title: 'Interior Design',
			desc: 'Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. ',
		},
		{
			img: serivce4,
			title: 'Repairs',
			desc: 'Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna. ',
		},
	]

	return (
		<>
			<section className='service-list__wrapper'>
				<div className='container'>
					<ul className='service-list'>
						{ServiceCards.map((item, index) => (
							<li key={index} className='service-list__item'>
								<img loading='lazy' src={item.img} alt='' />
								<article className='service-list__item-text'>
									<h2>{item.title}</h2>
									<p>{item.desc}</p>
									<ButtonTransparent
										color='var(--primary)'
										width='10rem'
										height='2.75rem'
									>
										Learn more
									</ButtonTransparent>
								</article>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default ServiceList
