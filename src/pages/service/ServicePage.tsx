import React from 'react'
import HeroPages from '../../components/HeroPages/HeroPages'
import Header from '../../components/shared/header/Header'
import Application from '../home/Applicataion/Application'
import Footer from '../../components/shared/footer/Footer'
import ServiceList from './ServiceList/ServiceList'
const Service: React.FC = () => {
	return (
		<>
			<div className='service-wrapper'>
				<Header />
				<HeroPages desc='If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.' pageTitle='SERVICES' name='Homepage' pageName='Services' />
			</div>	
			<ServiceList/>
			<Application/>
			<Footer/>
		</>
	)
}

export default Service
