import { Link } from 'react-router-dom'

import React from 'react'
import './Header.css'
import logo from './../../../assets/images/icons/logo.svg'
const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='container'>
				<nav className='header__nav'>
					<ul className='header__list'>
						<div className='header__list-item logo'>
							<Link to='/' className='header__link'>
								<img  src={logo} alt='' />
							</Link>
						</div>
						<li className='header__list-item'>
							<Link to='/about' className='header__link'>
								About Us
							</Link>
						</li>
						<li className='header__list-item'>
							<Link to='/service' className='header__link'>
								Services
							</Link>
						</li>
						<li className='header__list-item'>
							<Link to='/project' className='header__link'>
								Work
							</Link>
						</li>
						<li className='header__list-item'>
							<a href='#' className='header__link'>
								News
							</a>
						</li>
						<li className='header__list-item'>
							<a href='#' className='header__link'>
								Contacts
							</a>
						</li>
					</ul>
					<div className='header__contacts'>
						<article className='header__contacts-phone'>
							<div className='contacts-text'>
								<span className='contact-title'>Call us</span>
								<a href='' className='contact-desc'>
									(405) 555-0128
								</a>
							</div>
						</article>
						<article className='header__contacts-email'>
							<div className='contacts-text'>
								<span className='contact-title'>Talk to us</span>
								<a href='' className='contact-desc'>
									hello@createx.com
								</a>
							</div>
						</article>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
