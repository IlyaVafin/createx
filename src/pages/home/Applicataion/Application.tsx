import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonOrange from '../../../components/ButtonOrange'
import './Application.css'
const Application: React.FC = () => {
	type FormData = {
		name: string
		email: string
		phone: string
		message: string
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	const [checked, setChecked] = useState<boolean>(false)

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	const handleKeyDown = (event: React.KeyboardEvent) => {
		// Обрабатываем клавиши "Enter" и "Space"
		if (event.key === 'Enter' || event.key === ' ') {
			setChecked(prev => !prev) // Переключаем состояние чекбокса
		}
	}

	return (
		<>
			<section className='application'>
				<div className="application__container">
				<form
					onSubmit={handleSubmit(onSubmit)}
					action=''
					className='application__form'
				>
					<h3 className='application__form-title'>
						A quick way to discuss details
					</h3>
					<div className='application__input input-name'>
						<label htmlFor='name'>
							<span>Name*</span>
							<input
								{...register('name', { required: 'Name is required!' })}
								id='name'
								placeholder='Your name'
								type='text'
								autoComplete='name'
							/>
						</label>
						{errors.name && (
							<p className='error-message'>{errors.name.message}</p>
						)}
					</div>
					<div className='application__input input-phone'>
						<label htmlFor='phone'>
							<span>Phone*</span>
							<input
								{...register('phone', {
									required: 'Phone number is required!',
									pattern: {
										value: /^[0-9]{10}$/,
										message: 'Phone number must be 10 digits',
									},
								})}
								id='phone'
								placeholder='Your phone number'
								type='tel'
								autoComplete='phone'
							/>
						</label>
						{errors.phone && (
							<p className='error-message'>{errors.phone.message}</p>
						)}
					</div>
					<div className='application__input input-email'>
						<label htmlFor='email'>
							<span>Email</span>
							<input
								{...register('email', {
									required: 'Email is required!',
									pattern: {
										value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
										message: 'Invalid email address',
									},
								})}
								id='email'
								placeholder='Your working email'
								type='email'
								autoComplete='email'
							/>
						</label>
						{errors.email && (
							<p className='error-message'>{errors.email.message}</p>
						)}
					</div>
					<div className='application__input input-message'>
						<label htmlFor='message'>
							<span>Message*</span>
							<input
								{...register('message', { required: 'Message is required!' })}
								id='message'
								placeholder='Your message'
								type='text'
							/>
						</label>
						{errors.message && (
							<p className='error-message'>{errors.message.message}</p>
						)}
					</div>
					<div className='input-checkbox'>
						<label className='custom-checkbox'>
							<input
								role='checkbox'
								onChange={handleCheckboxChange}
								checked={checked}
								type='checkbox'
								id='checkbox1'
							/>
							<span
								tabIndex={0}
								onKeyDown={handleKeyDown}
								className='checkmark'
							></span>
						</label>
						<span>
							I agree to receive communications from Createx Construction
							Bureau.
						</span>
					</div>
					<ButtonOrange
						typeBtn='submit'
						disabled={!checked}
						width='10.875rem'
						height='2.75rem'
					>
						send request
					</ButtonOrange>
				</form>
				</div>
			</section>
		</>
	)
}

export default Application
