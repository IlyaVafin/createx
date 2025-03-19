import member from './../../../assets/images/team/member.jpg'
import member2 from './../../../assets/images/team/member2.png'
import member3 from './../../../assets/images/team/member3.png'
import member4 from './../../../assets/images/team/member4.png'
import member5 from './../../../assets/images/team/member5.png'
import member6 from './../../../assets/images/team/member6.png'
import member7 from './../../../assets/images/team/member7.png'
import member8 from './../../../assets/images/team/member8.png'

interface IPartnerList {
	img: string;
	name: string;
	position: string;
}

export const PartnerList: IPartnerList[] = [
	{
		img: member,
		name: 'Courtney Alexander',
		position: 'CEO, Co-Founder'
	},
	{
		img: member2,
		name: 'Calvin Fox',
		position: 'CTO, Co-Founder'
	},
	{
		img: member3,
		name: 'Johnny Lane',
		position: 'Commercial Manager'
	},
	{
		img: member4,
		name: 'Diane Mccoy',
		position: 'Director of Human Resources'
	},
	{
		img: member5,
		name: 'Judith Warren',
		position: 'Lead Accountant'
	},
	{
		img: member6,
		name: 'Floyd Simmmons',
		position: 'Finacial Director'
	},
	{
		img: member7,
		name: 'Serenity Edwards',
		position: 'Director of Marketing'
	},
	{
		img: member8,
		name: 'Shawn Edwards',
		position: 'Tech Lead'
	},
]