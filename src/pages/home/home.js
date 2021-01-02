import React from 'react';
import './home.scss';
import ImageButton from '../../atoms/image-button/ImageButton';
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import imageSrc from '../../assets/images/Who-Are-You Logo.png';
import { useForm } from 'react-hook-form';

function Home() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => alert('Search: ' + data.search);
	return (
		<div className='home-page'>
			<div className='jumbotron'>
				<div className='jumbotron-inner'>
					<ImageButton src={imageSrc} alt='Who are you logo' />
					<div className='search-bar'>
						<FaSearch className='search-icon' />
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								className='search-input'
								ref={register}
								type='text'
								name='search'
							/>
							<button type='submit' className='search-arrow-button'>
								<FaArrowRight className='arrow-icon' />
							</button>
						</form>
					</div>
					<h1 className='jumbotron-heading'>Work better, safer, together.</h1>
					<p className='jumbotron-sub-heading'>
						Whoo is the industries leading social network for the work place.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
