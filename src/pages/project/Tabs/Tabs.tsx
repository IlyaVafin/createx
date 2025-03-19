import React from 'react'
import { TabsList } from './TabsList'
import './Tabs.css'
const Tabs: React.FC = () => {
	return (
		<>
			<div className='container'>
				<ul className='tabs__list'>
					{TabsList.map((item, index) => (
						<li className='tabs__item' key={index}>
							<div className='tabs__item-content'>
								{item.icon}
								<p>{item.title}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Tabs
