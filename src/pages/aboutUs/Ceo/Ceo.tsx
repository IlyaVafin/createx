import React from 'react'
import man from './../../../assets/images/man.jpg'
import braces from './../../../assets/images/icons/braces.svg'
import signature from './../../../assets/images/icons/signature.svg'
import './Ceo.css'
const Ceo: React.FC = () => {
	return (
		<>
			<section className='ceo'>
				<div className='container'>
					<div className='ceo__content'>
						<div className='ceo__content-img'>
							<img src={man} alt='' />
						</div>
						<article className='ceo__quotation'>
							<div className='ceo__quotation-text'>
								<img src={braces} alt='' />
								<p>
									Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue
									in. Sed aliquet in egestas hac at proin sed quam. Etiam
									aliquet sagittis non, massa cum pulvinar. Et in leo, tempus
									purus vestibulum ut blandit et mi. Odio massa purus vel
									praesent arcu enim elit felis viverra. 
									<br />
									<br />
									Magna aliquam interdum
									mattis ipsum arcu. Elit odio elit viverra quis metus amet
									eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
								</p>
							</div>
							<div className="ceo__author">
								<div className="ceo__name">
									<p>Courtney Alexander</p>
									<span>CEO - Createx Construction Bureau </span>
								</div>
								<div className="ceo__signature">
									<img src={signature} alt="" />
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</>
	)
}

export default Ceo
