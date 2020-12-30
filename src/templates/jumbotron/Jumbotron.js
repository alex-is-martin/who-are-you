import React from 'react';
import './jumbotron.scss';
import userImage from '../../assets/images/user-image.png';
import user from '../../assets/user-info/user.json';

function Jumbotron() {
	return (
		<div id='jumbotron'>
			<img className='user-img' type='image' src={userImage} alt='User' />
			<h1 className='user-name'>{user.basics.name}</h1>
			<h2 className='user-job'>{user.basics.label}</h2>
		</div>
	);
}

export default Jumbotron;
