import React from 'react'
import ButtonOrange from '../../../components/ButtonOrange'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	name: string
	phone: string
}

const RegName = /^[a-z][a-z0-9-]*$/i
const RegPhone =  /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;


const BureauForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

	return (
		<article className='bureau__question'>
			<h1 className='bureau__question-title title'>
				Want to know more? Ask us a question:
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='bureau__question-form'>
				<div className='question-form__name qustion-form_flex'>
					<label htmlFor='name'>Name</label>
					<input
						defaultValue=''
						{...register('name', {
							required: 'Name is required',
							pattern: {
								value: RegName,
								message: 'Invalid name',
							},
						})}
						placeholder='Your name'
						type='text'
						autoComplete='name'
						id='name'
						name='name'
					/>
					{errors.name && (
						<p className='bureau-form__error bureau-form__error_position'>
							{errors.name.message}
						</p>
					)}
				</div>
				<div className='question-form__phone qustion-form_flex'>
					<label htmlFor='phone'>Phone</label>
					<input
						{...register('phone', {
							required: 'Phone is required',
							pattern: {
								value: RegPhone,
								message: 'Invalid phone number!'
							},
						})}
						placeholder='Your phone'
						type='tel'
						autoComplete='phone'
						name='phone'
						id='phone'
					/>
					{errors.phone && <p style={{left: '346px'}} className='bureau-form__error bureau-form__error_position'>{errors.phone.message}</p>}
				</div>
				<div className='question-form__message qustion-form_flex'>
					<label htmlFor='message'>Message</label>
					<input id='message' name='message' autoComplete='message' placeholder='Your message' type='text' />
				</div>
				<ButtonOrange typeBtn='submit' mt='29px' width='104px' height='44px'>
					SEND
				</ButtonOrange>
			</form>
		</article>
	)
}

export default BureauForm
