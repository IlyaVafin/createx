import React from 'react'
import './Footer.css'
import whatsapp from './../../../assets/images/Footer/Whatsapp.svg'
import messanger from './../../../assets/images/Footer/Messanger.svg'
import facebook from './../../../assets/images/Footer/Facebook.svg'
import twitter from './../../../assets/images/Footer/Twitter.svg'
import youtube from './../../../assets/images/Footer/YouTube.svg'
import logo from './../../../assets/images/Footer/logo-footer.svg'
import heart from './../../../assets/images/icons/Heart.svg'
import ButtonOrange from '../../ButtonOrange'
import toTop from './../../../assets/images/icons/toTop.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
	const socialList: string[] = [whatsapp, messanger, facebook, twitter, youtube]

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<>
			<footer className='footer'>
				<div className='container'>
					<section className='footer__top'>
						<article className='footer__desc'>
							<div className='footer__desc-top'>
								<div className='footer-logo'>
									<img src={logo} alt='' />
								</div>
								<ul className='footer__desc-socials'>
									{socialList.map((item, index) => (
										<li key={index} className='desc-socials__item'>
											<a href='' className='desc-socials__link'>
												<img loading='lazy' src={item} alt='' />
											</a>
										</li>
									))}
								</ul>
							</div>
							<p className='footer__desc-text'>
								Createx Construction Bureau has been successfully operating in
								the USA construction market since 2000. We are proud to offer
								you quality construction and exemplary service. Our mission is
								to set the highest standards for the construction sphere.
							</p>
						</article>
						<article className='footer__form'>
							<h3 className='footer__form-title'>Let’s stay in touch</h3>
							<label htmlFor='email' className='footer__input'>
								<input
									placeholder='Your email address '
									id='email'
									type='email'
									autoComplete='email'
								/>
								<ButtonOrange
									borderRadius='0'
									width='8.1875rem'
									height='2.75rem'
								>
									subscribe
								</ButtonOrange>
							</label>
							<p className='footer__form-desc'>
								*Subscribe to our newsletter to receive communications and early
								updates from Createx Construction Bureau.
							</p>
						</article>
					</section>
					<section className='footer__bottom'>
						<div className='footer__bottom-about'>
							<article className='footer__bottom-head-office'>
								<h4 className='header-office__title footer-title'>
									HEAD OFFICE
								</h4>
								<a className='header-office__link footer-link' href=''>
									Address: <span>8502 Preston Rd. Inglewood, New York</span>
								</a>
								<a className='header-office__link footer-link' href=''>
									Call: <span>(405) 555-0128</span>
								</a>
								<a className='header-office__link footer-link' href=''>
									Email: <span>hello@createx.com</span>
								</a>
							</article>
							<article className='footer__bottom-who-we'>
								<h4 className='who-we__title footer-title'>WHO WE ARE</h4>
								<div className='who-we__links footer-links'>
									<Link to='/about' className='who-we__link footer-link'>
										About Us
									</Link>
									<a href='' className='who-we__link footer-link'>
										Available Positions
									</a>
									<a href='' className='who-we__link footer-link'>
										Contacts
									</a>
								</div>
							</article>
							<article className='footer__bottom-experience'>
								<h4 className='experience__title footer-title'>
									OUR EXPERIENCE
								</h4>
								<div className='experience__links footer-links'>
									<Link to='/service' className='experience__link footer-link'>
										Services
									</Link>
									<a href='' className='experience__link footer-link'>
										Work
									</a>
									<a href='' className='experience__link footer-link'>
										News
									</a>
								</div>
							</article>
						</div>
						<article className='footer__bottom-copyright'>
							<span>
								© All rights reserved. Made with <img src={heart} alt='' />
								by Createx Studio
							</span>
							<div className='footer__to-top'>
								<p>GO TO TOP</p>
								<ButtonOrange
									onClick={scrollToTop}
									width='2.5rem'
									height='2.5rem'
								>
									<img loading='lazy' src={toTop} alt='' />
								</ButtonOrange>
							</div>
						</article>
					</section>
				</div>
			</footer>
		</>
	)
}

export default Footer
