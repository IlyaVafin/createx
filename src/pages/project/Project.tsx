import React from 'react'
import Header from '../../components/shared/header/Header'
import HeroPages from './../../components/HeroPages/HeroPages'
import herobg from './../../assets/images/workbg.png'
import Tabs from './Tabs/Tabs'
import Portfolio from './Portfolio/Portfolio'
import OurClients from '../../components/OurClients'
import Companies from '../../components/Companies/Companies'
import Application from '../home/Applicataion/Application'
import Footer from '../../components/shared/footer/Footer'
const Project: React.FC = () => {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${herobg})`,
					height: '600px',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}
				className='work-hero'
			>
				<Header />
				<HeroPages
					name='Homepage'
					pageName='Work'
					pageTitle='OUR WORK'
					desc='Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.'
				/>
			</div>
			<Tabs />
			<Portfolio />
			<div className='portfolio-client__wrapper'>
				<OurClients />
			</div>
			<Companies title='Our clients'/>
			<Application/>
			<Footer/>
		</>
	)
}

export default Project
