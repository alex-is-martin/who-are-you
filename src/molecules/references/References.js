import React, { useContext } from 'react';
import './references.scss';
import user from '../../assets/user-info/user.json';
import { ProfileInfoContext } from '../../contexts/profileInfoContext';

function References() {
	const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);
	return (
		<div className={profileInfo === 'References' ? 'section' : 'hide'}>
			<span className='section-single-title'>REFERENCES</span>
			{user.references.map((reference) => (
				<div className='sub-section' key={reference.name}>
					<div className='info-line'>
						<span className='info-line-title'>Name:</span>
						<span className='info-line-user-info'>{reference.name}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Phone:</span>
						<span className='info-line-user-info color'>{reference.phone}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Email:</span>
						<span className='info-line-user-info color'>{reference.email}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Url:</span>
						<span className='info-line-user-info color'>{reference.url}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Reference:</span>
						<span className='info-line-user-info'>{reference.reference}</span>
					</div>
					<div className='spacer'></div>
				</div>
			))}
		</div>
	);
}

export default References;
