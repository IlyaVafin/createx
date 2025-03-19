import React, { useRef, useState } from 'react'
import nextBtn from './../../../assets/images/ourWorks/next-btn.svg'
import prevBtn from './../../../assets/images/icons/prev-btn.svg'
import history1 from './../../../assets/images/history/history.webp'
import history2 from './../../../assets/images/history/history2.jpg'
import history3 from './../../../assets/images/history/history3.jpg'
import history4 from './../../../assets/images/history/history4.webp'
import history5 from './../../../assets/images/history/history5.jpg'
import history6 from './../../../assets/images/history/history6.webp'
import history7 from './../../../assets/images/history/history7.jpg'
import history8 from './../../../assets/images/history/history8.webp'
import history9 from './../../../assets/images/history/history9.webp'
import './History.css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import bullet from './../../../assets/images/icons/bullet.svg'
import activeBullet from './../../../assets/images/icons/activeBullet.svg'
const bulletTexts: string[] = [
	'Present',
	'March 2019',
	'November 2018',
	'July 2015',
	'August 2010',
	'February 2007',
	'May 2004',
	'October 2001',
	'June 2000',
]

const slideImages: string[] = [history1, history2, history3, history4, history5, history6, history7, history8, history9]

const History: React.FC = () => {

	const [activeSlide, setActiveSlide] = useState(0)
	const swiperRef = useRef<SwiperType>(null)

	const handleSlideChange = (swiper: SwiperType) => {
		setActiveSlide(swiper.activeIndex)
	}

	const handleBulletClick = (index: number) => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(index)
		}
	}

	return (
		<section className='history'>
			<div className="container">
			<article className='history__top'>
				<h1 className='history__title'>Our History</h1>
				<div className='history__navigation'>
					<button
						className='prev-btn'
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<img src={prevBtn} alt='Previous' />
					</button>
					<button
						className='next-btn'
						onClick={() => swiperRef.current?.slideNext()}
					>
						<img src={nextBtn} alt='Next' />
					</button>
				</div>
			</article>
			<article className='history__slider'>
				<div className='history__bullets'>
					{bulletTexts.map((text, index) => (
						<button
							key={index}
							className={`history__bullet ${
								index === activeSlide ? 'active-history' : ''
							}`}
							onClick={() => handleBulletClick(index)}
						>
								<img width={8} height={8} src={index === activeSlide ? activeBullet : bullet} alt="" />
							{text}
						</button>
					))}
				</div>

				<Swiper
					width={850}
					slidesPerView={1}
					style={{maxWidth: '810px'}}
					allowTouchMove={false} // Отключаем возможность свайпа
					modules={[Navigation]}
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={handleSlideChange}
				>
					{slideImages.map((item, index) => (
						<SwiperSlide key={index}>
							<div className='history__slide-content'>
								<img width={810} height={450} src={item} alt='' />
								<p className='slide-desc'>Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, </p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</article>
			</div>
		</section>
	)
}

export default History
