import React from 'react'
import Companies from '../../../components/Companies/Companies'
import partner from './../../../assets/images/partners/partner.svg'
import partner2 from './../../../assets/images/partners/partner2.svg'
import partner3 from './../../../assets/images/partners/partner3.svg'
import partner4 from './../../../assets/images/partners/partner4.svg'
import partner5 from './../../../assets/images/partners/partner5.svg'
import partner6 from './../../../assets/images/partners/partner6.svg'
import twitter from './../../../assets/images/Footer/Twitter.svg'
import linkedIn from './../../../assets/images/icons/Vector.svg'
import facebook from './../../../assets/images/Footer/Facebook.svg'
import './PartnersTeam.css'
import DescriptionSection from '../../../components/DescriptionSection'
import { PartnerList } from './PartnersList'
const Partners: React.FC = () => {
	const arrPartners = [
		partner,
		partner2,
		partner3,
		partner4,
		partner5,
		partner6,
	]

	return (
		<>
			<section className='partners-team'>
				<Companies
					logos={arrPartners}
					desc='We are supported by 12+ industry bodies and media partners'
					title='Our partners'
				/>
				<div className='container'>
					<article className='our-team'>
						<h1 className='our-team__title title'>Our team</h1>
						<DescriptionSection>
							People are at the heart of Createx Construction Bureau
						</DescriptionSection>
					</article>
					<ul className='team__members'>
						{PartnerList.map((item, index) => (
							<li key={index} className='team__member'>
								<img src={item.img} alt='' />
								<div className='team__socials'>
									<a href=''>
										<img src={linkedIn} alt='' />
									</a>
									<a href=''>
										<img src={twitter} alt='' />
									</a>
									<a href=''>
										<img src={facebook} alt='' />
									</a>
								</div>
								<h5>{item.name}</h5>
								<p>{item.position}</p>
							</li>
						))}
					</ul>
					<p className='team__positions'>Become a part of the best team in the construction market of the USA. 
					<a href="">Available Positions</a>
					</p>
				</div>
			</section>
		</>
	)
}

export default Partners
