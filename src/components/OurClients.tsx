import React, { useRef } from 'react'
import { Swiper as SwiperType } from 'swiper/types'
import { supportedList } from './../pages/home/Supported/SupportedList'
import nextBtn from './../assets/images/icons/next-btn.svg'
import prevBtn from './../assets/images/icons/prev-btn.svg'
import testim from './../assets/images/Supported/our-clients.jpg' // our-clients.jpg
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const OurClients: React.FC = () => {
	const swiperRef = useRef<SwiperType | null>(null)
	return (
		<>
			<div className='container'>
				<article className='supported__our-clients'>
					<div className='our-clients__content'>
						<div className='supported__slider'>
							<h1 className='our-clients__title title'>
								What our clients are saying
							</h1>
							<Swiper
								onSwiper={swiper => (swiperRef.current = swiper)}
								modules={[Navigation]}
								slidesPerView={1}
								style={{ maxWidth: '1000px', margin: '0 auto' }}
							>
								{supportedList.map((item, index) => (
									<SwiperSlide key={index}>
										<img src={item.img} alt='client' />
										<div className='our-clients__text'>
											<p>{item.desc}</p>
											<div className='our-clients__text-name'>
												<article>
													<h5>{item.name}</h5>
													<span>{item.company}</span>
												</article>
												<article className='text-name__buttons'>
													<button
														onClick={() => swiperRef.current?.slidePrev()}
													>
														<img src={prevBtn} alt='' />
													</button>
													<button
														onClick={() => swiperRef.current?.slideNext()}
													>
														<img src={nextBtn} alt='' />
													</button>
												</article>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<img className='testim-img' src={testim} alt='testim' />
					</div>
				</article>
			</div>
		</>
	)
}

export default OurClients
