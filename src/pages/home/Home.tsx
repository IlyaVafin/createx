import React from 'react'
import Header from '../../components/shared/header/Header'
import Hero from './Hero/Hero'
import Bureau from './Bureau/Bureau'
import Services from './Services/Services'
import BureauForm from './Bureau/BureauForm'
import OurWorks from './OurWorks/OurWorks'
import Supported from './Supported/Supported'
import Figures from './Figures/Figures'
import Application from './Applicataion/Application'
import Footer from '../../components/shared/footer/Footer'

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<div className='bureau-service__wrapper'>
				<Bureau />
				<BureauForm />
				<Services />
			</div>
			<OurWorks />
			<Supported />
			<Figures />
			<Application />
			<Footer/>
		</>
	)
}

export default Home
