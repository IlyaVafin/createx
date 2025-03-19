import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types' // Импортируем тип Swiper
import { Navigation } from 'swiper/modules'
import './OurWorks.css'
import redBulding from './../../../assets/images/ourWorks/redBuilding.jpg'
import pencilBuilding from './../../../assets/images/ourWorks/pencilBuilding.jpg'
import blueBuilding from './../../../assets/images/ourWorks/blueBuilding.jpg'
import nextBtn from './../../../assets/images/ourWorks/next-btn.svg'
import prevBtn from './../../../assets/images/icons/prev-btn.svg'
import TitleBottom from '../../../components/TitleBottom'
import ButtonOrange from '../../../components/ButtonOrange'

// нужно как то сделать тень

interface IWorksList {
	img: string
	title: string
	desc: string
}

const OurWorks: React.FC = () => {
	const worksList: IWorksList[] = [
		{
			img: redBulding,
			title: 'Red Finger Building',
			desc: 'Business Centers',
		},
		{
			img: blueBuilding,
			title: 'Cubes Building',
			desc: 'Business Centers',
		},
		{
			img: pencilBuilding,
			title: 'The Pencil Building',
			desc: 'Stores & Malls',
		},
		{
			img: redBulding,
			title: 'Red Finger Building',
			desc: 'Business Centers',
		},
		{
			img: pencilBuilding,
			title: 'The Pencil Building',
			desc: 'Stores & Malls',
		},
		{
			img: blueBuilding,
			title: 'Cubes Building',
			desc: 'Business Centers',
		},
	]

	const swiperRef = useRef<SwiperType | null>(null)
	return (
		<section className='our-works'>
			<div className='container'>
				<div className='our-works__top'>
					<h1 className='title'>
						Browse our selected projects and learn more about our work
					</h1>
					<div className='our-works__top-buttons'>
						<button
							className='prev-btn'
							onClick={() => swiperRef.current?.slidePrev()}
						>
							<img loading='lazy' src={prevBtn} alt='' />
						</button>
						<button
							className='next-btn'
							onClick={() => swiperRef.current?.slideNext()}
						>
							<img src={nextBtn} alt='' />
						</button>
					</div>
				</div>
				<Swiper
					slidesPerView={3}
					modules={[Navigation]}
					onSwiper={swiper => (swiperRef.current = swiper)}
					spaceBetween={30}
				>
					{worksList.map((item, index) => (
						<SwiperSlide key={index}>
							<article className='our-works__card'>
								<img loading='lazy' src={item.img} alt='' />
								<div className='our-works__card-text'>
									<h4>{item.title}</h4>
									<p>{item.desc}</p>
									<button>VIEW PROJECT</button>
								</div>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
				<article className="our-works__explore">
					<TitleBottom>Explore all our works</TitleBottom>
					<ButtonOrange width='224px' height='52px'>View portfolio</ButtonOrange>
				</article>
			</div>
		</section>
	)
}

export default OurWorks
