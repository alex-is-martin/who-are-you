import React, { useState } from 'react';
import './sign-in.scss';
import ImageButton from '../../atoms/image-button/ImageButton';
import imageSrc from '../../assets/images/Who-Are-You Logo.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignIn() {
	const { register, handleSubmit, watch, errors } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: { email: 'Email', password: 'Password' },
	});

	const [passwordShown, setPasswordShown] = useState(true);
	const togglePasswordVisiblity = () => {
		setPasswordShown(!passwordShown);
	};

	const onSubmit = (data) =>
		alert('Email: ' + data.email + '\n' + 'Password: ' + data.password);

	const onFocus = ({ target }) => {
		if (target.value === 'Email') {
			target.value = '';
		} else if (target.value === 'Password') {
			target.value = '';
			if (passwordShown) {
				togglePasswordVisiblity();
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
			}
		}
	};

	return (
		<div className='sign-in-page'>
			<div className='sign-in-container'>
				<ImageButton src={imageSrc} alt='Who are you logo' />
				<h1 className='sign-in-title'>Welcome Back</h1>
				<span className='sign-in-sub-title'>
					Sign in to stay updated on your professional world.
				</span>

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
					<input type='submit' className='login-button' value='Sign In' />
				</form>
				<Link className='link' to='/forgot-password'>
					<span className='forgot-button'>Forgot Password?</span>
				</Link>
				<span className='not-member-text'>
					Not a member?
					<Link className='link' to='./sign-up'>
						<span className='create-button'> Create Account.</span>
					</Link>
				</span>
			</div>
		</div>
	);
}

export default SignIn;
