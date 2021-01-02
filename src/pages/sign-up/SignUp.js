import React, { useState } from 'react';
import './sign-up.scss';
import ImageButton from '../../atoms/image-button/ImageButton';
import imageSrc from '../../assets/images/Who-Are-You Logo.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUp() {
	const { register, handleSubmit, watch, errors } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			email: 'Email',
			password: 'Password',
			confirmPassword: 'Confirm Password',
		},
	});

	const [passwordShown, setPasswordShown] = useState(true);
	const togglePasswordVisiblity = () => {
		setPasswordShown(!passwordShown);
	};

	const [confirmPasswordShown, setConfirmPasswordShown] = useState(true);
	const toggleConfirmPasswordVisiblity = () => {
		setConfirmPasswordShown(!confirmPasswordShown);
	};

	const onSubmit = (data) =>
		alert(
			'Email: ' +
				data.email +
				'\n' +
				'Password: ' +
				data.password +
				'\n' +
				'Confirm Password: ' +
				data.confirmPassword
		);

	const onFocus = ({ target }) => {
		if (target.value === 'Email') {
			target.value = '';
		} else if (target.value === 'Password') {
			target.value = '';
			if (passwordShown) {
				togglePasswordVisiblity();
			}
		} else if (target.value === 'Confirm Password') {
			target.value = '';
			if (confirmPasswordShown) {
				toggleConfirmPasswordVisiblity();
			}
		}
	};

	const onBlur = ({ target }) => {
		if (target.value === '') {
			if (target.name === 'email') {
				target.value = 'Email';
			} else if (target.name === 'password') {
				target.value = 'Password';
				togglePasswordVisiblity();
			} else if (target.name === 'confirmPassword') {
				target.value = 'Confirm Password';
				toggleConfirmPasswordVisiblity();
			}
		}
	};

	return (
		<div className='sign-up-page'>
			<div className='sign-up-container'>
				<ImageButton src={imageSrc} alt='Who are you logo' />
				<h1 className='sign-up-title'>Join Us</h1>
				<span className='sign-up-sub-title'>Work better, safer, together.</span>

				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						className='input'
						name='email'
						ref={register}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					<input
						type={passwordShown ? 'text' : 'password'}
						className='input'
						name='password'
						ref={register}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					<input
						type={confirmPasswordShown ? 'text' : 'password'}
						className='input'
						name='confirmPassword'
						ref={register}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					<input
						type='submit'
						className='create-button'
						value='Create Account'
					/>
				</form>

				<span className='have-account-text'>
					Already have an account?
					<Link className='link' to='/sign-in'>
						<span className='sign-in-button'> Sign In.</span>
					</Link>
				</span>
			</div>
		</div>
	);
}

export default SignUp;
