import React from 'react';
import './forgot-password.scss';
import ImageButton from '../../atoms/image-button/ImageButton';
import imageSrc from '../../assets/images/Who-Are-You Logo.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ForgotPassword() {
	const { register, handleSubmit, watch, errors } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: { email: 'Email' },
	});

	const onSubmit = (data) => alert('Email: ' + data.email);

	const onFocus = ({ target }) => {
		if (target.value === 'Email') {
			target.value = '';
		}
	};

	const onBlur = ({ target }) => {
		if (target.value === '') {
			if (target.name === 'email') {
				target.value = 'Email';
			}
		}
	};
	return (
		<div className='forgot-password-page'>
			<div className='forgot-password-container'>
				<ImageButton src={imageSrc} alt='Who are you logo' />
				<h1 className='forgot-password-title'>Forgot Password?</h1>
				<span className='forgot-password-sub-title'>Please enter email.</span>

				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						className='input'
						name='email'
						ref={register}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					<input type='submit' className='submit-button' value='Submit' />
				</form>
				<Link className='link' to='/sign-in'>
					<span className='forgot-button'>Back</span>
				</Link>
			</div>
		</div>
	);
}

export default ForgotPassword;
