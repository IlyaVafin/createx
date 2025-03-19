import React, { useRef, useState } from 'react'
import DescriptionSection from '../../../components/DescriptionSection'
import play from './../../../assets/images/icons/Polygon.svg'
import videoKotik from './../../../assets/video/istockphoto-2001948916-640_adpp_is.mp4'
import './Bureau.css'
import Values from '../../../components/Values'

const Bureau: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [isVisible, setIsVisible] = useState<boolean>(true)

	const playVideo = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
				setIsVisible(true)
			} else {
				videoRef.current.play()
				setIsVisible(false)
			}
			setIsPlaying(!isPlaying)
		}
	}

	return (
		<>
			<section className='bureau'>
				<div className='container'>
					<h2 className='bureau__title title'>
						We are Createx Construction Bureau
					</h2>
					<DescriptionSection>
						We are rightfully considered to be the best construction company in
						the USA.
					</DescriptionSection>
					<article className='bureau__video'>
						{isVisible && <div className='overlay'></div>}
						<video onClick={playVideo} ref={videoRef} src={videoKotik}></video>
						{isVisible && (
							<button onClick={playVideo} className='btn-play'>
								<img loading='lazy' src={play} alt='' />
							</button>
						)}
					</article>
				</div>
			</section>
			<Values />
		</>
	)
}

// Our mission is to set the highest standards for construction sphere.

export default Bureau
