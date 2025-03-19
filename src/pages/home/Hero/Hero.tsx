import React from 'react'
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css' // Базовые стили Swiper
import { Navigation, Pagination } from 'swiper/modules'
import slide from './../../../assets/images/hero/slide1.jpg'
import ButtonOrange from '../../../components/ButtonOrange'
import ButtonTransparent from '../../../components/ButtonTransparent'
const Hero: React.FC = () => {
	const slides = [
		{
			img: slide,
		},
		{
			img: slide,
		},
		{
			img: slide,
		},
		{
			img: slide,
		},
	]
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			loop={false}
			spaceBetween={0} // Отступ между слайдами
			slidesPerView={1} // Количество слайдов в видимой области
			navigation // Включаем кнопки "назад/вперёд"
			pagination={{ clickable: true }} // Включаем пагинацию
		>
			{slides.map((item, index) => (
				<SwiperSlide key={index}>
					<img loading='lazy' className='img-slide' src={item.img} alt='' />
					<article className='hero__slide-text'>
						<h1>
							CREATE<mark>X</mark> CONSTRUCTION
						</h1>
						<p className='hero__slide-desc'>
							Cras ultrices leo vitae non viverra. Fringilla nisi quisque
							consequat, dignissim vitae proin ipsum sed. Pellentesque nec
							turpis purus eget pellentesque integer ipsum elementum felis.
						</p>
						<div className='hero__buttons'>
							<ButtonTransparent color='white' width='278px' height='52px'>
								Learn more about us
							</ButtonTransparent>
							<ButtonOrange width='224px' height='52px'>
								SUBMIT REQUEST
							</ButtonOrange>
						</div>
					</article>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Hero
