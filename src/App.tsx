import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import React from 'react'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/home/Home'))
const AboutUs = lazy(() => import('./pages/aboutUs/AboutUs'))
const Service = lazy(() => import('./pages/service/ServicePage'))
const Project = lazy(() => import('./pages/project/Project'))

const App: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/service' element={<Service />} />
					<Route path='/project' element={<Project />} />
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
