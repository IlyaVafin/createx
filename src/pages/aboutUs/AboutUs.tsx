import React from 'react'
import HeroPages from '../../components/HeroPages/HeroPages'
import Header from '../../components/shared/header/Header'
import Statistics from './Statistics/Statistics'
import Ceo from './Ceo/Ceo'
import Values from '../../components/Values'
import History from './History/History'
import Partners from './Partners/Partners'
import WorldWide from './WorldWide/WorldWide'
import Application from '../home/Applicataion/Application'
import Footer from '../../components/shared/footer/Footer'
const AboutUs: React.FC = () => {
	return (
		<>
			<div className='about-wrapper'>
				<Header />
				<HeroPages
					name='Homepage'
					desc=' Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.'
					pageTitle='ABOUT US'
					pageName='About Us'
				/>
			</div>
			<Statistics />
			<Ceo />
			<div className='history-values__wrapper'>
				<Values />
				<History />
			</div>
			<Partners />
			<WorldWide/>
			<Application/>
			<Footer/>
		</>
	)
}

// about__wrapper в глобальных стилях

export default AboutUs
